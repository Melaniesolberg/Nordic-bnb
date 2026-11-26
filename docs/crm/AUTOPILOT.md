# Autopilot for research og outreach

Målet er å drive leadgenerering og outreach på **maks 15 minutter om dagen**, uten at nettleseren må stå åpen. Alt som kan sende e-post er **slått av** fra start.

## 1. Daglig rutine (15 minutter)

Åpne `eiendomly.no/admin` på mobilen. Kortet **«I dag»** viser tre steg:

| Steg | Hva du gjør | Tid |
|---|---|---|
| 1. Svar som venter | Svar personlig på dem som har svart, og registrer utfallet: interessert, nei takk eller salg | 5–8 min |
| 2. Godkjenn meldinger | Les utkastene (viktigste øverst), kryss av og trykk «Godkjenn valgte» | 5 min |
| 3. Send | Trykk «Send valgte». Etter at testene er godkjent kan sendingen gå automatisk | 1 min |

Mandag kommer ukerapporten på e-post (se punkt 8).

## 2. Hva som skjer i bakgrunnen

En **Netlify Scheduled Function** (`netlify/functions/crm-scheduler.mts`) starter hver halvtime på hverdager, ca. kl. 06–17 norsk tid. Den gjør bare én ting: den starter **bakgrunnsjobben** (`netlify/functions/crm-worker-background.mts`). Bakgrunnsjobben er en Netlify Background Function og kan kjøre i opptil 15 minutter, så den blir ikke stoppet av tidsgrensen på vanlige funksjoner.

Hver kjøring gjør dette, i fast rekkefølge:

1. **Leser innboksen** (IMAP, bare lesing). Svar, «nei takk», avmelding og e-post i retur registreres. Det stopper alle usendte meldinger til selskapet umiddelbart, via en database-trigger. Automatiske fraværsmeldinger ignoreres.
2. **Sender** godkjente meldinger. Dette skjer bare når hovedbryteren `OUTREACH_SENDING_ENABLED=true` er satt. Meldinger du har trykket «Send» på sendes alltid. Andre godkjente meldinger sendes bare hvis «Send godkjente automatisk» er slått på, og bare innenfor tidsvinduet. Det er 20–45 sekunder mellom hver e-post, med en daglig grense.
3. **Lager oppfølginger** som utkast når det ikke har kommet svar etter X dager (standard 5 dager, maks 1 oppfølging).
4. **Researcher**: Den finner nye bedrifter i Brønnøysundregistrene og analyserer dem med AI, opp til dagens mål (20–50). Ubehandlede selskaper tas først. Deretter hentes nye, i rotasjon mellom kundetypene du har valgt.
5. **Mandag**: Den lager ukerapporten for forrige uke og sender den på e-post.

Hver kjøring logges i `worker_runs` og vises under **Innstillinger → Siste kjøringer**. Der kan du også trykke «Kjør nå». To kjøringer kan ikke gå samtidig.

Hvorfor ikke n8n? Netlify-løsningen trenger ingen ekstra server og ingen nye kontoer, og alle nøkler blir i Netlify. n8n kan fortsatt brukes via webhooken (se README).

## 3. Oppsett

1. **Kjør migrasjon nr. 2** i Supabase SQL Editor: `supabase/migrations/20261127000000_crm_autopilot.sql`. Den bare legger til tabeller og kolonner, og endrer ingen eksisterende data.
2. **Nye miljøvariabler i Netlify** (Site configuration → Environment variables):
   - `CRM_WORKER_SECRET`: lag med `openssl rand -hex 32`.
   - `IMAP_HOST=imap.webhuset.no` og `IMAP_PORT=993`. Bruker og passord er de samme som for SMTP, om ikke `IMAP_USER` og `IMAP_PASSWORD` er satt.
   - `SUPABASE_SERVICE_ROLE_KEY` må være satt. Bakgrunnsjobben har ingen innlogget bruker.
3. **Deploy**. Sjekk at `crm-scheduler` og `crm-worker-background` vises under Netlify → Functions.
4. Gå til **Innstillinger**, trykk **«Kjør nå»** og se at kjøringen blir «done».
5. Slå på **«Finn og analyser nye bedrifter automatisk»**, velg kundetyper og eventuelt kommuner, og sett et antall per dag.

> Background Functions er med på Netlifys nyere planer, også Free. Står kontoen på en eldre plan uten dem, kan du oppgradere eller kjøre den samme jobben med `npm run crm:worker` fra en maskin eller en n8n-server, med nøklene i `.env.local`.

## 4. Kostnadskontroll for AI

- Før **hver** AI-analyse sjekkes det at den verst tenkelige prisen for kallet får plass under både dags- og månedstaket. Det gjelder både autopilot og knappene i panelet. Standard er 30 kr per dag og 500 kr per måned.
- Faktisk forbruk (tokens og pris) lagres i `ai_usage`, så taket regnes ut fra det som faktisk er brukt. Dag og måned følger norsk tid.
- Typisk pris er 0,3–0,8 kr per analyse med `CRM_AI_EFFORT=low`. 25 analyser per dag gir omtrent 10–20 kr per dag.
- Når taket er nådd, stopper research til neste dag eller måned. Utkast og sending påvirkes ikke.

## 5. Prioritering: gjentakende kunder først

AI-en gir hvert selskap to tall:
- **Score**: hvor sannsynlig et kjøp er.
- **Gjentakende potensial**: hvor sannsynlig det er at de bestiller igjen og igjen. Det er høyt for meglerkontorer, forvaltere, utleiere med mange enheter og hoteller.

**Prioritet** = (0,55 × score + 0,45 × gjentakende), vektet etter kundetype. Selskaper uten felles e-postadresse havner lenger ned. Godkjenningskøen og «Høyest prioritet» i kundelisten sorteres etter dette.

## 6. Godkjenning og lovlig oppfølging

- **Første e-post** til et selskap godkjennes alltid av deg. På hvert kort i køen står mottakeradresse, om den er felles eller personlig, kontaktgrunnlaget og hvor adressen ble funnet.
- **Bulk-godkjenning**: Bare meldinger som består kontrollen kan krysses av. Serveren sjekker hver melding på nytt (adresse, grunnlag, stoppliste og status), og en melding som feiler stopper ikke de andre.
- **Oppfølging** lages bare når første e-post er sendt og ikke besvart, og selskapet ikke har reservert seg. Den sendes i samme tråd («Re: …»), med samme avmeldingslenke.
- **Umiddelbar stopp**: Svar, «nei takk», avmelding (lenke eller e-post) og retur kansellerer alle usendte meldinger til selskapet straks. Det skjer i databasen, ikke i appen. Innboksen leses før hver sending.
- «Godkjenn oppfølginger automatisk» er av som standard. Slå det på først når du har sett at oppfølgingene ser riktige ut.

## 7. E-postleverandør for B2B-outreach

| Alternativ | Vurdering |
|---|---|
| **Transaksjonelle tjenester** (Postmark, Resend, SendGrid o.l.) | Ikke egnet. Vilkårene deres forbyr i praksis kald e-post og uoppfordret markedsføring, og kontoen kan stenges. |
| **Webhuset** (dagens oppsett) | Fungerer for lite volum via SMTP og IMAP. Krever DKIM, SPF og DMARC på `eiendomly.no`. Spør Webhuset om sendegrenser. |
| **Google Workspace eller Microsoft 365** (anbefalt) | Egen postkasse, f.eks. `hei@eiendomly.no`. God leveringsevne, og standard SMTP og IMAP (app-passord) passer rett inn. |
| Egne verktøy for kald e-post (Instantly, lemlist o.l.) | Tillater kald B2B-e-post, men overlapper med dette systemet og koster ekstra. Ikke nødvendig ved dette volumet. |

**Anbefaling**:
- Bruk en egen postkasse hos Google Workspace eller Microsoft 365, med SPF, DKIM og DMARC (start med `p=none`).
- Varm opp postkassen: 5 e-poster per dag første uke, 10 andre uke og 20–30 fra tredje uke. Hold deg under 50 per dag.
- Send ren tekst, uten sporingspiksler, med avmeldingslenke og `List-Unsubscribe`-header. Det siste er allerede på plass.

Systemet bruker vanlig SMTP og IMAP, så du bytter leverandør bare ved å endre miljøvariablene. Koden trenger ingen endring.

## 8. Måling og ukerapport

- **Hvert salg** knyttes automatisk til siste e-post selskapet fikk, og til kundetypen og tjenesten.
- **Rapporter** (`/admin/reports`) viser per uke:
  - per kanal eller aktivitet: omsetning, kostnader, timer og **fortjeneste per arbeidstime**
  - per kundetype og per tjeneste
  - hvilke **salgsmeldinger** (prompt-versjon og oppfølgingstrinn) som gir svar og betalende kunder, de siste 180 dagene
- **Timer** = minutter per aktivitet (svar, samtale, møte, godkjenning) + leveringstid per ordre (anslag i Innstillinger, eller egne tall på salget) + timer du legger inn per kanal.
- **Kostnader** = AI-forbruk + annonsekostnad du legger inn per uke (f.eks. Google Ads) + direkte kostnad per ordre.
- Rapporten sendes til e-postadressen under Innstillinger hver mandag.

## 9. Test før automatisk utsending (må godkjennes)

Ikke slå på `OUTREACH_SENDING_ENABLED` eller «Send godkjente automatisk» før alt dette er krysset av:

- [ ] Migrasjon nr. 2 er kjørt, og «Kjør nå» gir status «done».
- [ ] Research på autopilot med 5 selskaper per dag i 2–3 dager. Les utkastene og sjekk at ingen kontaktinformasjon er funnet på, og at alle adresser er felles adresser.
- [ ] AI-taket er testet: sett dagstaket til 1 kr, «Kjør nå», og sjekk at research stopper med «Dagens AI-budsjett er brukt opp».
- [ ] SPF, DKIM og DMARC er satt opp for avsenderdomenet (sjekk med mail-tester.com).
- [ ] Testselskap med **din egen** felles adresse: godkjenn, slå på hovedbryteren og send. Sjekk at e-posten kommer i innboksen og ikke i søppelpost.
- [ ] **Avmelding med lenken**: Klikk på lenken. Selskapet skal få «ikke kontakt», og den neste meldingen skal være stoppet.
- [ ] **Avmelding på e-post**: Svar «nei takk» fra testadressen. Etter neste kjøring skal selskapet være merket og meldingene stoppet.
- [ ] **Svar**: Svar «Ja, send prøvebilde». Selskapet skal dukke opp under «Svar som venter», og oppfølgingen skal være stoppet.
- [ ] **Retur**: Send til en adresse som ikke finnes. Den skal registreres som retur og havne på stopplisten.
- [ ] Oppfølging: sett «Etter antall dager» til 2, og sjekk at utkastet kommer i samme tråd.
- [ ] Først da: slå på «Send godkjente automatisk» med maks 10 per dag, og øk gradvis.

## 10. Begrensninger

- Innboks-lesingen er testet mot klassifiseringsregler og testdata, ikke mot din ekte postkasse ennå. Det er punkt 9.
- Klassifiseringen av svar er regelbasert, ikke AI. Uklare svar registreres som «svar» og havner hos deg. Det er det trygge valget.
- Brønnøysundregistrene har ikke nettside for alle. Med «Bare bedrifter med nettside» blir treffet mindre, men bedre.
- Tidspunktene i cron-uttrykket er UTC, så kjøringene forskyves én time ved sommertid. Sending følger likevel tidsvinduet i norsk tid.
