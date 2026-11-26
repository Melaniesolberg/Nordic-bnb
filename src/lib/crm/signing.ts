import { createHmac, timingSafeEqual } from "node:crypto";

export function hmacHex(secret: string, payload: string): string {
  return createHmac("sha256", secret).update(payload).digest("hex");
}

export function safeEqualHex(a: string, b: string): boolean {
  const ab = Buffer.from(a, "hex");
  const bb = Buffer.from(b, "hex");
  return ab.length === bb.length && ab.length > 0 && timingSafeEqual(ab, bb);
}

/**
 * Verifies an n8n request: header `x-eiendomly-timestamp` (unix seconds) and
 * `x-eiendomly-signature` = hex(HMAC-SHA256(secret, `${timestamp}.${body}`)).
 * Requests older than five minutes are rejected to stop replays.
 */
export function verifySignedRequest(
  secret: string,
  body: string,
  timestamp: string | null,
  signature: string | null,
  now = Date.now(),
): boolean {
  if (!secret || !timestamp || !signature) return false;
  const ts = Number(timestamp);
  if (!Number.isFinite(ts) || Math.abs(now / 1000 - ts) > 300) return false;
  return safeEqualHex(hmacHex(secret, `${timestamp}.${body}`), signature);
}

/** Token for the unsubscribe link: base64url(email).hmac */
export function unsubscribeToken(secret: string, email: string): string {
  const e = Buffer.from(email.toLowerCase()).toString("base64url");
  return `${e}.${hmacHex(secret, `unsubscribe:${email.toLowerCase()}`).slice(0, 32)}`;
}

export function readUnsubscribeToken(secret: string, token: string): string | null {
  const [e, sig] = token.split(".");
  if (!e || !sig || !secret) return null;
  const email = Buffer.from(e, "base64url").toString("utf8").toLowerCase();
  const expected = hmacHex(secret, `unsubscribe:${email}`).slice(0, 32);
  return safeEqualHex(expected, sig) ? email : null;
}
