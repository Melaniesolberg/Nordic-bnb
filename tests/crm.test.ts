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

// --- Autopilot -------------------------------------------------------------
import { budgetDecision, computePriority, costUsd, osloDayStart, osloMonthStart, osloWeekStart, priceFor, worstCaseUsd } from "@/lib/crm/budget";
import { bouncedRecipient, classifyInbound, followUpDraft, followUpDue, inSendWindow, stripQuoted } from "@/lib/crm/worker/rules";
import { approvalBlockers } from "@/lib/crm/outreach";

const caps = { ai_daily_budget_nok: 30, ai_monthly_budget_nok: 500, usd_nok_rate: 11 };

test("AI cost: known and unknown models, cache priced lower", () => {
  assert.equal(priceFor("claude-opus-5-5").input, 4);
  assert.equal(priceFor("claude-opus-5-5-20261101").output, 20);
  assert.equal(priceFor("some-new-model").output, 50);
  const plain = costUsd({ model: "claude-opus-5-5", input_tokens: 1_000_000, output_tokens: 0, cache_read_tokens: 0, cache_write_tokens: 0 });
  const cached = costUsd({ model: "claude-opus-5-5", input_tokens: 0, output_tokens: 0, cache_read_tokens: 1_000_000, cache_write_tokens: 0 });
  assert.equal(plain, 4);
  assert.ok(cached < plain / 5);
  // A worst-case analysis stays well under 2 kr.
  assert.ok(worstCaseUsd("claude-opus-5-5", 14_000, 6000) * 11 < 2);
});

test("AI budget: daily and monthly caps stop the next call", () => {
  assert.equal(budgetDecision({ spentTodayNok: 10, spentMonthNok: 100, nextCallNok: 1.5, settings: caps }).ok, true);
  const day = budgetDecision({ spentTodayNok: 29, spentMonthNok: 100, nextCallNok: 1.5, settings: caps });
  assert.equal(day.ok, false);
  assert.ok(!day.ok && day.reason.includes("Dagens"));
  const month = budgetDecision({ spentTodayNok: 0, spentMonthNok: 499, nextCallNok: 1.5, settings: caps });
  assert.ok(!month.ok && month.reason.includes("Månedens"));
  assert.equal(budgetDecision({ spentTodayNok: 0, spentMonthNok: 0, nextCallNok: 0.1, settings: { ...caps, ai_daily_budget_nok: 0 } }).ok, false);
});

test("Oslo calendar boundaries (winter and summer time)", () => {
  // 26 Nov 2026 10:00 UTC = 11:00 Oslo (UTC+1)
  assert.equal(osloDayStart(new Date("2026-11-26T10:00:00Z")).toISOString(), "2026-11-25T23:00:00.000Z");
  assert.equal(osloMonthStart(new Date("2026-11-26T10:00:00Z")).toISOString(), "2026-10-31T23:00:00.000Z");
  // 15 Jul 2026 = UTC+2
  assert.equal(osloDayStart(new Date("2026-07-15T12:00:00Z")).toISOString(), "2026-07-14T22:00:00.000Z");
  // 23:30 UTC on Sunday 29 Nov is already Monday 30 Nov in Oslo
  assert.equal(osloWeekStart(new Date("2026-11-29T23:30:00Z")), "2026-11-30");
  assert.equal(osloWeekStart(new Date("2026-11-26T10:00:00Z")), "2026-11-23");
});

test("priority favours recurring potential and contactable companies", () => {
  const agent = computePriority({ score: 70, recurring: 90, segment: "real_estate_agent", hasGenericEmail: true });
  const oneOff = computePriority({ score: 70, recurring: 10, segment: "real_estate_agent", hasGenericEmail: true });
  const noEmail = computePriority({ score: 70, recurring: 90, segment: "real_estate_agent", hasGenericEmail: false });
  const stylist = computePriority({ score: 70, recurring: 90, segment: "stylist", hasGenericEmail: true });
  assert.ok(agent > oneOff && agent > noEmail && agent > stylist);
  assert.ok(agent <= 100 && oneOff >= 0);
});

test("send window: weekdays inside hours, Oslo time", () => {
  const w = { send_window_start: 8, send_window_end: 16 };
  assert.equal(inSendWindow(w, new Date("2026-11-26T09:00:00Z")), true); // Thu 10:00
  assert.equal(inSendWindow(w, new Date("2026-11-26T06:30:00Z")), false); // Thu 07:30
  assert.equal(inSendWindow(w, new Date("2026-11-26T15:00:00Z")), false); // Thu 16:00
  assert.equal(inSendWindow(w, new Date("2026-11-28T10:00:00Z")), false); // Saturday
});

test("follow-up: due after N days, threaded subject, no new claims", () => {
  assert.equal(followUpDue("2026-11-20T10:00:00Z", 5, new Date("2026-11-26T10:00:00Z")), true);
  assert.equal(followUpDue("2026-11-23T10:00:00Z", 5, new Date("2026-11-26T10:00:00Z")), false);
  const d = followUpDraft({ subject: "Bildeløft for annonsene deres", step: 2, service: "photo_boost" });
  assert.equal(d.subject, "Re: Bildeløft for annonsene deres");
  assert.ok(d.body.includes("gratis prøvebilde"));
  assert.ok(!/%|økt salg|garanti/i.test(d.body));
  assert.equal(followUpDraft({ subject: "Re: x", step: 3, service: null }).subject, "Re: x");
});

test("inbound mail: replies, opt-outs, bounces and auto-replies", () => {
  const quoted = "Hei! Ja, send gjerne et prøvebilde.\n\ntor. 26. nov. 2026 kl. 10:00 skrev Eiendomly <post@eiendomly.no>:\n> Vil du ikke få flere e-poster fra oss? Svar «nei takk»";
  assert.equal(stripQuoted(quoted), "Hei! Ja, send gjerne et prøvebilde.");
  // Our own footer in the quote must not count as «nei takk».
  assert.equal(classifyInbound({ from: "post@megler.no", subject: "Re: Bildeløft", headers: {}, text: quoted }), "reply");
  assert.equal(classifyInbound({ from: "post@megler.no", subject: "Re: Bildeløft", headers: {}, text: "Nei takk, ikke aktuelt for oss." }), "unsubscribe");
  assert.equal(classifyInbound({ from: "post@megler.no", subject: "Re: x", headers: {}, text: "Vennligst meld oss av listen" }), "unsubscribe");
  assert.equal(classifyInbound({ from: "post@megler.no", subject: "Automatisk svar: Re: x", headers: {}, text: "Jeg er på ferie" }), "auto_reply");
  assert.equal(classifyInbound({ from: "post@megler.no", subject: "Re: x", headers: { "auto-submitted": "auto-replied" }, text: "Takk" }), "auto_reply");
  assert.equal(classifyInbound({ from: "MAILER-DAEMON@mx.example.no", subject: "Undelivered Mail Returned to Sender", headers: {}, text: "" }), "bounce");
  assert.equal(bouncedRecipient("Final-Recipient: rfc822; Post@Firma.no\nAction: failed"), "post@firma.no");
});

test("approval checks each message's own contact basis", () => {
  const ok = { messageStatus: "draft", toEmail: "post@firma.no", companyDoNotContact: false, companyStatus: "qualified", contactBasis: "b2b_generic_address" as const, suppressed: false };
  assert.deepEqual(approvalBlockers(ok), []);
  assert.ok(approvalBlockers({ ...ok, contactBasis: "none" }).length);
  assert.ok(approvalBlockers({ ...ok, toEmail: "kari@firma.no" }).length);
  assert.ok(approvalBlockers({ ...ok, suppressed: true }).length);
  assert.ok(approvalBlockers({ ...ok, messageStatus: "approved" }).length);
});
