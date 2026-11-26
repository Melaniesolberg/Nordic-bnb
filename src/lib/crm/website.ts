import { lookup } from "node:dns/promises";
import { isIP } from "node:net";
import { extractEmails, normalizeDomain } from "@/lib/crm/normalize";

const USER_AGENT = "EiendomlyResearch/1.0 (+https://eiendomly.no)";
const MAX_BYTES = 1_500_000;

export interface WebsiteSnapshot {
  url: string;
  ok: boolean;
  blockedByRobots: boolean;
  title: string | null;
  text: string;
  /** Addresses that literally appear on the fetched pages, on the company's own domain. */
  emails: string[];
  pagesFetched: string[];
  error?: string;
}

function isPrivateAddress(ip: string): boolean {
  if (isIP(ip) === 6) {
    const v = ip.toLowerCase();
    return v === "::1" || v.startsWith("fc") || v.startsWith("fd") || v.startsWith("fe80") || v.startsWith("::ffff:127.");
  }
  const [a, b] = ip.split(".").map(Number);
  return (
    a === 10 || a === 127 || a === 0 || (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168) || (a === 100 && b >= 64 && b <= 127)
  );
}

/** Blocks SSRF: only public http(s) hosts on standard ports. */
async function assertPublicUrl(raw: string): Promise<URL> {
  const url = new URL(raw);
  if (!["http:", "https:"].includes(url.protocol)) throw new Error("Bare http/https er tillatt");
  if (url.port && !["80", "443"].includes(url.port)) throw new Error("Ugyldig port");
  if (url.username || url.password) throw new Error("Ugyldig adresse");
  const host = url.hostname;
  if (host === "localhost" || host.endsWith(".local") || host.endsWith(".internal")) throw new Error("Ugyldig vert");
  const addrs = isIP(host) ? [{ address: host }] : await lookup(host, { all: true });
  if (!addrs.length || addrs.some((a) => isPrivateAddress(a.address))) throw new Error("Ugyldig vert");
  return url;
}

async function fetchText(url: string): Promise<{ status: number; body: string; finalUrl: string }> {
  let current = url;
  for (let hop = 0; hop < 4; hop++) {
    await assertPublicUrl(current);
    const res = await fetch(current, {
      redirect: "manual",
      headers: { "User-Agent": USER_AGENT, Accept: "text/html,text/plain;q=0.9" },
      cache: "no-store",
      signal: AbortSignal.timeout(6000),
    });
    if (res.status >= 300 && res.status < 400 && res.headers.get("location")) {
      current = new URL(res.headers.get("location")!, current).toString();
      continue;
    }
    const reader = res.body?.getReader();
    let received = 0;
    const chunks: Uint8Array[] = [];
    if (reader) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        received += value.byteLength;
        chunks.push(value);
        if (received > MAX_BYTES) {
          await reader.cancel();
          break;
        }
      }
    }
    const body = new TextDecoder("utf-8", { fatal: false }).decode(Buffer.concat(chunks));
    return { status: res.status, body, finalUrl: current };
  }
  throw new Error("For mange omdirigeringer");
}

/** Very small robots.txt check for our user agent and "*". */
function robotsAllows(robots: string, path: string): boolean {
  let applies = false;
  const disallows: string[] = [];
  for (const line of robots.split(/\r?\n/)) {
    const [k, ...rest] = line.split(":");
    const key = k?.trim().toLowerCase();
    const value = rest.join(":").trim();
    if (key === "user-agent") applies = value === "*" || value.toLowerCase().includes("eiendomlyresearch");
    else if (applies && key === "disallow" && value) disallows.push(value);
  }
  return !disallows.some((d) => path.startsWith(d));
}

export function htmlToText(html: string): { title: string | null; text: string } {
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/\s+/g, " ").trim() ?? null;
  const text = html
    .replace(/<(script|style|noscript|svg|iframe)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<(br|\/p|\/div|\/li|\/h[1-6]|\/tr)>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/[ \t]+/g, " ")
    .replace(/\n\s*\n+/g, "\n")
    .trim();
  return { title, text };
}

/**
 * Reads the public homepage and, if linked, one contact/about page. Respects
 * robots.txt. Returns only text that is actually on the pages.
 */
export async function snapshotWebsite(website: string): Promise<WebsiteSnapshot> {
  const domain = normalizeDomain(website);
  const empty: WebsiteSnapshot = { url: website, ok: false, blockedByRobots: false, title: null, text: "", emails: [], pagesFetched: [] };
  if (!domain) return { ...empty, error: "Ugyldig nettadresse" };
  const base = new URL(/^https?:\/\//i.test(website) ? website : `https://${website}`);

  try {
    try {
      const robots = await fetchText(new URL("/robots.txt", base).toString());
      if (robots.status === 200 && !robotsAllows(robots.body, base.pathname || "/")) {
        return { ...empty, blockedByRobots: true, error: "Nettstedet ber roboter om å ikke lese sidene (robots.txt)" };
      }
    } catch {
      // No robots.txt: allowed.
    }

    const home = await fetchText(base.toString());
    if (home.status >= 400) return { ...empty, error: `Nettstedet svarte ${home.status}` };
    const pages = [home.finalUrl];
    let html = home.body;

    const link = [...home.body.matchAll(/href=["']([^"'#]+)["']/gi)]
      .map((m) => m[1])
      .find((h) => /kontakt|contact|om-oss|about/i.test(h));
    if (link) {
      try {
        const contactUrl = new URL(link, home.finalUrl);
        if (normalizeDomain(contactUrl.hostname) === domain) {
          const contact = await fetchText(contactUrl.toString());
          if (contact.status < 400) {
            html += "\n" + contact.body;
            pages.push(contact.finalUrl);
          }
        }
      } catch {
        // Ignore a broken contact link.
      }
    }

    const { title, text } = htmlToText(html);
    const emails = extractEmails(html).filter((e) => normalizeDomain(e) === domain);
    return { url: home.finalUrl, ok: true, blockedByRobots: false, title, text: text.slice(0, 12000), emails, pagesFetched: pages };
  } catch (err) {
    return { ...empty, error: err instanceof Error ? err.message : "Kunne ikke hente nettstedet" };
  }
}
