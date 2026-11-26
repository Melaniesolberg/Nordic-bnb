/**
 * Unit tests for the CRM rules that protect against unwanted e-mail and
 * duplicates. Run: npm run test:crm
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { extractEmails, isGenericEmail, isValidOrgNumber, normalizeDomain, normalizeName } from "@/lib/crm/normalize";
import { parseCsv, toCsv } from "@/lib/crm/csv";
import { sendBlockers, suppressionKeys, withFooter } from "@/lib/crm/outreach";
import { hmacHex, readUnsubscribeToken, unsubscribeToken, verifySignedRequest } from "@/lib/crm/signing";
import { mapEnhet } from "@/lib/crm/brreg";
import { htmlToText } from "@/lib/crm/website";

const base = {
  messageStatus: "approved",
  toEmail: "post@firma.no",
  companyDoNotContact: false,
  companyStatus: "qualified",
  contactBasis: "b2b_generic_address" as const,
  suppressed: false,
  sendingEnabled: true,
  smtpConfigured: true,
};

test("send is allowed only when every rule passes", () => {
  assert.deepEqual(sendBlockers(base), []);
});

test("sending switched off blocks", () => {
  assert.equal(sendBlockers({ ...base, sendingEnabled: false }).length, 1);
});

test("unapproved, opted-out, suppressed and declined messages are blocked", () => {
  assert.ok(sendBlockers({ ...base, messageStatus: "draft" }).length);
  assert.ok(sendBlockers({ ...base, companyDoNotContact: true }).length);
  assert.ok(sendBlockers({ ...base, suppressed: true }).length);
  assert.ok(sendBlockers({ ...base, companyStatus: "not_interested" }).length);
  assert.ok(sendBlockers({ ...base, contactBasis: "none" }).length);
});

test("personal address needs consent, not the B2B basis", () => {
  assert.ok(sendBlockers({ ...base, toEmail: "ola.nordmann@firma.no" }).some((b) => b.includes("personlig")));
  assert.deepEqual(sendBlockers({ ...base, toEmail: "ola.nordmann@firma.no", contactBasis: "consent" }), []);
});

test("generic vs personal e-mail", () => {
  for (const e of ["post@x.no", "kontakt@x.no", "info@x.no", "booking@hotell.no", "resepsjon@hotell.no", "post2@x.no"]) assert.ok(isGenericEmail(e), e);
  for (const e of ["kari@x.no", "ola.nordmann@x.no", "kn@x.no"]) assert.ok(!isGenericEmail(e), e);
});

test("domains and names normalise for de-duplication", () => {
  assert.equal(normalizeDomain("https://www.Eksempel.no/kontakt"), "eksempel.no");
  assert.equal(normalizeDomain("post@eksempel.no"), "eksempel.no");
  assert.equal(normalizeDomain("ikke en side"), null);
  assert.equal(normalizeName("Eiendomsmegler 1 Oslo AS"), normalizeName("EIENDOMSMEGLER 1 OSLO"));
});

test("org numbers use the mod-11 check digit", () => {
  assert.ok(isValidOrgNumber("930895008"));
  assert.ok(isValidOrgNumber("963301812"));
  assert.ok(!isValidOrgNumber("123456789"));
});

test("only e-mails that literally appear are extracted", () => {
  assert.deepEqual(extractEmails('<a href="mailto:Post@Firma.no">Skriv</a> logo@2x.png kontakt@firma.no'), ["post@firma.no", "kontakt@firma.no"]);
});

test("CSV round trip with semicolons, quotes and formula injection", () => {
  const rows = parseCsv('navn;e-post;notat\r\n"Firma; AS";post@f.no;"Sa ""hei"""\r\n');
  assert.deepEqual(rows, [{ navn: "Firma; AS", "e-post": "post@f.no", notat: 'Sa "hei"' }]);
  const out = toCsv([{ a: "=HYPERLINK(1)", b: "x,y" }], ["a", "b"]);
  assert.ok(out.includes("'=HYPERLINK(1)"));
  assert.ok(out.includes('"x,y"'));
});

test("n8n signatures: valid, tampered and replayed", () => {
  const secret = "s3cret";
  const body = '{"action":"register_reply"}';
  const now = Date.now();
  const ts = String(Math.floor(now / 1000));
  const sig = hmacHex(secret, `${ts}.${body}`);
  assert.ok(verifySignedRequest(secret, body, ts, sig, now));
  assert.ok(!verifySignedRequest(secret, body + " ", ts, sig, now));
  assert.ok(!verifySignedRequest(secret, body, ts, sig, now + 10 * 60 * 1000));
  assert.ok(!verifySignedRequest("", body, ts, sig, now));
});

test("unsubscribe tokens can't be forged", () => {
  const t = unsubscribeToken("k", "Post@Firma.no");
  assert.equal(readUnsubscribeToken("k", t), "post@firma.no");
  assert.equal(readUnsubscribeToken("other", t), null);
  const forged = `${Buffer.from("annen@firma.no").toString("base64url")}.${t.split(".")[1]}`;
  assert.equal(readUnsubscribeToken("k", forged), null);
});

test("footer always carries sender and opt-out", () => {
  const f = withFooter("Hei", "https://eiendomly.no/api/crm/unsubscribe?t=x");
  assert.ok(f.includes("930 895 008") && f.includes("reserver deg"));
  assert.deepEqual(suppressionKeys("Post@Firma.no"), ["post@firma.no", "firma.no"]);
});

test("Brønnøysund record maps without inventing data", () => {
  const c = mapEnhet(
    {
      organisasjonsnummer: "963301812",
      navn: "9.NUT AS",
      epostadresse: "post@norskutleie.no",
      hjemmeside: "www.norskutleie.no",
      naeringskode1: { kode: "68.310", beskrivelse: "Eiendomsmegling" },
      forretningsadresse: { adresse: ["Hegdehaugsveien 31"], postnummer: "0352", poststed: "OSLO", kommune: "OSLO" },
    },
    "real_estate_agent",
  );
  assert.equal(c.general_email, "post@norskutleie.no");
  assert.equal(c.email_is_generic, true);
  assert.equal(c.domain, "norskutleie.no");
  assert.equal(c.phone, null);
  assert.equal(c.source_url, "https://virksomhet.brreg.no/nb/oppslag/enheter/963301812");
});

test("HTML to text drops scripts and keeps content", () => {
  const { title, text } = htmlToText("<title>Hei</title><script>evil()</script><p>Vi leier ut&nbsp;leiligheter</p>");
  assert.equal(title, "Hei");
  assert.ok(text.includes("Vi leier ut leiligheter") && !text.includes("evil"));
});
