# Eiendomly CRM og outreach

Internt kundesystem på `/admin`. Den offentlige nettsiden er ikke endret, bortsett fra at `robots.txt` nå ber søkemotorer holde seg unna `/admin` og `/api/`.

**Viktig:** Ingenting sendes automatisk. AI skriver bare utkast. Hver e-post må godkjennes og sendes manuelt, og sending er sperret helt til `OUTREACH_SENDING_ENABLED=true` settes etter at systemet er testet.

---

## 1. Analyse av eksisterende kodebase

| Del | Status før CRM |
|---|---|
| Rammeverk | Next.js 16 (App Router), React 19, Tailwind 4, TypeScript |
| Hosting | Netlify, bygges fra GitHub (`netlify-deploy`) |
| Innhold | Statisk innhold i `src/content/` (norsk og engelsk) |
| Skjema | Netlify Forms (`public/__forms.html`) for bestillinger |
| Database / innlogging | Ingen |
| Server-API | Ingen egne API-ruter |
| Sporing | Google-tag med samtykkemodus, GTM og Meta Pixel etter samtykke |

Konsekvenser for designet:

- Nettsiden er nesten helt statisk. CRM-et er lagt i egne mapper (`src/app/admin`, `src/app/api/crm`, `src/lib/crm`) og deler ingen komponenter med nettsiden.
- `src/proxy.ts` (Next 16 sitt nye navn på middleware) kjører **bare** på `/admin`. Offentlige sider går aldri gjennom den.
- Root-layouten har bare fonter og myk rulling. Admin slår av myk rulling med `data-lenis-prevent`.

## 2. Arkitektur

```
Nettleser (/admin)
   │  server actions og serverkomponenter, ingen nøkler i nettleseren
   ▼
Next.js på Netlify
   ├─ src/proxy.ts           fornyer innlogging, sender uinnloggede til /admin/login
   ├─ src/lib/crm/auth.ts    sjekker bruker + rolle i admin_users (data access layer)
   ├─ src/lib/crm/actions.ts alle endringer (server actions)
   ├─ src/lib/crm/brreg.ts   Brønnøysundregistrene (åpent API)
   ├─ src/lib/crm/website.ts leser selskapets egen nettside (robots.txt, SSRF-sperre)
   ├─ src/lib/crm/ai.ts      Claude, strukturert JSON-svar
   ├─ src/lib/crm/outreach.ts regler for når en e-post kan sendes
   ├─ src/lib/crm/mailer.ts  SMTP (Webhuset)
   ├─ /api/crm/n8n           signert webhook inn fra n8n
   └─ /api/crm/unsubscribe   avmeldingslenke i e-postene
   ▼
Supabase (Postgres + Auth), Row Level Security på alle tabeller
```

Moduler kan byttes uavhengig av hverandre, for eksempel en annen e-posttjeneste i `mailer.ts`, en annen datakilde ved siden av `brreg.ts`, eller en annen AI-modell via `CRM_AI_MODEL`.

## 3. Databasestruktur

Migrasjon: `supabase/migrations/20261126000000_crm_core.sql`

| Tabell | Innhold |
|---|---|
| `admin_users` | Hvem som har tilgang, med rolle (`owner`, `admin`, `viewer`) |
| `companies` | Kunder og potensielle kunder: segment, kilde, status, score, anbefalt tjeneste, kontaktgrunnlag, «ikke kontakt» |
| `contacts` | Valgfrie kontaktpersoner. Personlige adresser krever samtykke |
| `outreach_messages` | Utkast → godkjent → sendt / feilet / stoppet |
| `activities` | Logg: notater, svar, samtaler, salg, AI-analyser, oppfølging |
| `deals` | Avtaler og salg med tjeneste, kanal, beløp og sannsynlighet |
| `suppression_list` | Stoppliste for e-post og domener |
| `research_runs` | Sporbarhet for hvert research-søk |

Segmenter: Airbnb-verter og forvaltere, eiendomsmeglere, profesjonelle utleiere, hoteller, boligfotografer, boligstylister, eiendomsutviklere.

**Sikkerhet i databasen**

- RLS er på for alle tabeller. Bare brukere i `admin_users` får lese. Bare `owner`/`admin` får skrive. `anon` har ingen tilgang.
- `is_admin()` og `is_staff()` er `security definer` med tom `search_path`.
- **Automatisk stopp** (trigger): Når et selskap får status «Ikke interessert», eller blir merket «ikke kontakt», stoppes alle usendte meldinger. Når en adresse eller et domene legges på stopplisten, merkes matchende selskaper automatisk.
- **Duplikater** stoppes av unike indekser (org.nr., domene) og i koden (e-post, navn og postnummer).
- `crm_dashboard()` regner ut alle tall i én spørring, under RLS.

Migrasjonen er testet i Postgres (PGlite): fremmede brukere og `anon` får ikke lese eller skrive, og triggerne stopper meldinger slik de skal.

## 4. Slik fungerer det

### Research
1. **Research**: Velg segment og kommuner. Søket går mot Brønnøysundregistrene (åpent register, NLOD-lisens). Konkursbo og selskaper under avvikling filtreres bort.
2. Huk av og **importer**. Systemet henter hvert selskap på nytt fra registeret og stoler ikke på skjemadata. Duplikater hoppes over.
3. **AI-analyse** (enkeltvis eller opptil 10 om gangen, ett selskap per forespørsel):
   - Leser forsiden og eventuelt kontaktsiden på selskapets **egen** nettside. Respekterer `robots.txt`, og blokkerer interne adresser (SSRF).
   - Claude vurderer behov, anbefaler tjeneste, gir score 0–100 og skriver et utkast. Svaret valideres mot et fast skjema.
   - **Kontaktinformasjon kommer aldri fra AI.** E-post tas bare fra Brønnøysund eller fra tekst som faktisk står på selskapets eget domene.
   - Score ≥ 60 gir status «Kvalifisert».

### Outreach
1. Utkastet havner under **Outreach → Venter på godkjenning**.
2. Rediger og trykk **Godkjenn**. Godkjenning krever gyldig e-post og vurdert kontaktgrunnlag.
3. Trykk **Send e-post**. Alle reglene sjekkes på nytt på serveren:
   - `OUTREACH_SENDING_ENABLED=true` og SMTP er satt opp
   - Meldingen er godkjent, og selskapet er ikke reservert eller avslått
   - Adressen og domenet står ikke på stopplisten
   - Kontaktgrunnlag finnes. Personlige adresser krever samtykke eller kundeforhold
4. Hver e-post får avsender, org.nr., avmeldingslenke og `List-Unsubscribe`-header.
5. Registrer svar på selskapssiden: «Interessert», «Takket nei» (stopper alt) eller «Reservert seg» (stoppliste).

### Dashboard
Viser potensielle kunder, kvalifiserte leads, kontaktede, interesserte, konverteringsrate (kunder ÷ kontaktet), omsetning per tjeneste og kanal, vektet pipeline og oppfølginger som forfaller.

### CSV
- **Import**: Norske eller engelske kolonnenavn, komma eller semikolon, maks 2 MB. Duplikater hoppes over.
- **Eksport**: Selskaper, avtaler, aktiviteter og meldinger. Filene er beskyttet mot formel-injeksjon i Excel.

## 5. Oppsett (ca. 20 minutter)

1. **Opprett Supabase-prosjekt** på supabase.com, i EU-region, for eksempel Frankfurt eller Stockholm.
2. **Kjør migrasjonene**: Gå til SQL Editor, lim inn innholdet i `supabase/migrations/20261126000000_crm_core.sql` og trykk Run. Gjør det samme med `20261127000000_crm_autopilot.sql` (autopilot, se [AUTOPILOT.md](AUTOPILOT.md)).
3. **Slå av åpen registrering**: Under Authentication → Sign In / Providers slår du av «Allow new users to sign up».
4. **Lag brukeren din**: Under Authentication → Users → Add user, med e-post og et sterkt passord.
5. **Gi deg selv tilgang** i SQL Editor:
   ```sql
   insert into public.admin_users (user_id, email, role)
   select id, email, 'owner' from auth.users where email = 'DIN-EPOST';
   ```
6. **Sett miljøvariabler i Netlify** (Site configuration → Environment variables). Se `.env.example`. Hemmelighetene lager du med `openssl rand -hex 32`. La `OUTREACH_SENDING_ENABLED` stå på `false`.
7. **Deploy** og gå til `https://eiendomly.no/admin`.

## 6. n8n-integrasjon

**Inn til CRM**: `POST https://eiendomly.no/api/crm/n8n`

Hver forespørsel må signeres:
```
x-eiendomly-timestamp: <unix-sekunder>
x-eiendomly-signature: hex(HMAC-SHA256(N8N_WEBHOOK_SECRET, "<timestamp>.<rå JSON-body>"))
```
Forespørsler eldre enn 5 minutter avvises.

Eksempel på n8n Code-node (krever `NODE_FUNCTION_ALLOW_BUILTIN=crypto` i n8n). Alternativt kan du bruke n8n sin Crypto-node med HMAC SHA256:
```js
const crypto = require('crypto');
const body = JSON.stringify({ action: 'register_reply', email: $json.from, classification: 'not_interested', summary: $json.subject });
const ts = Math.floor(Date.now() / 1000).toString();
const signature = crypto.createHmac('sha256', $env.EIENDOMLY_N8N_SECRET).update(`${ts}.${body}`).digest('hex');
return [{ json: { body, ts, signature } }];
```

Handlinger:

| `action` | Felt | Effekt |
|---|---|---|
| `register_reply` | `email`, `classification` (`interested` / `not_interested` / `unsubscribe` / `other`), `summary` | Logger svaret. Avslag og reservasjon stopper all outreach |
| `create_prospect` | `name`, `source_url` (påkrevd), `org_number`, `segment`, `website`, `general_email`, `phone`, `city` | Legger til selskap med duplikatsjekk |

n8n kan **ikke** godkjenne eller sende e-post. Det er et bevisst valg.

**Ut fra CRM** (valgfritt): Sett `N8N_EVENTS_WEBHOOK_URL`, så sendes signerte hendelser: `prospect.qualified`, `prospect.status_changed`, `prospect.interested`, `message.approved`, `message.sent`, `deal.won`.

**Forslag til flyter i n8n**
- **Svar-innboks**: IMAP-trigger på kontakt@eiendomly.no → klassifiser svaret → `register_reply`.
- **Varsel**: `prospect.interested` eller `deal.won` → SMS eller e-post til deg.
- **Ukentlig rapport**: hent `/admin/export` manuelt, eller bygg en egen rapportflyt.

## 7. Juridiske rammer (kort)

- **Markedsføringsloven § 15**: E-postmarkedsføring til fysiske personer krever samtykke. Til bedrifters felles adresser (post@, kontakt@) er det tillatt, så lenge mottakeren enkelt kan reservere seg. Systemet merker personlige adresser og blokkerer dem uten samtykke eller kundeforhold.
- **GDPR**: Lagre bare det du trenger. Kilden lagres på hvert selskap. Personvernerklæringen på nettsiden bør nevne at offentlig tilgjengelig bedriftsinformasjon brukes til B2B-markedsføring (berettiget interesse). Slett data om selskaper som ikke er aktuelle.
- **Reservasjon** respekteres umiddelbart via stoppliste og trigger.
- Supabase-prosjektet bør ligge i EU.

Dette er ikke juridisk rådgivning. Ta en kort sjekk med en rådgiver før utsending i større skala.

## 8. Test før utsending slås på

1. Importer 5–10 selskaper og kjør AI-analyse. Les alle utkastene.
2. Legg inn deg selv som testselskap med din egen felles adresse, og godkjenn.
3. Sett `OUTREACH_SENDING_ENABLED=true`, send **bare** testmeldingen, og sjekk:
   - Den kommer fram, og ikke i søppelpost (Webhuset bør ha DKIM satt opp).
   - Avmeldingslenken fungerer, og testselskapet blir merket «ikke kontakt».
4. Først da kan du godkjenne og sende ekte meldinger, én og én.

## 9. Kjente begrensninger

- **Tidsgrense hos Netlify**: Én AI-analyse tar typisk 5–20 sekunder. Netlify Free stopper funksjoner etter 10 sekunder (26 på betalt plan). Analysene kjøres derfor ett selskap om gangen med `CRM_AI_EFFORT=low`. Feiler det ofte, oppgrader Netlify-planen, eller kjør analysene via n8n.
- **Avmeldingslenke** krever `UNSUBSCRIBE_SECRET` og `SUPABASE_SERVICE_ROLE_KEY`. Uten dem står det «svar nei takk» i stedet.
- **Svar fra e-post** leses nå automatisk fra innboksen (IMAP) av bakgrunnsjobben. Se [AUTOPILOT.md](AUTOPILOT.md).
- AI-analyse og research kjøres i bakgrunnen (Netlify Background Function, 15 minutter), så tidsgrensen gjelder bare for knappene i panelet.

## 10. Tester

```bash
npm run test:crm   # regler for sending, duplikater, signering, CSV, Brønnøysund, budsjett, oppfølging, svar
npm run crm:worker # én kjøring av bakgrunnsjobben lokalt (bruker .env.local)
npm run build
```

## 11. Videre plan

| Fase | Innhold |
|---|---|
| 1 (ferdig) | Database, RLS, innlogging, kundebase, research, AI-analyse, godkjenning, manuell sending, dashboard, CSV, n8n-webhook |
| 2 (ferdig, av som standard) | Autopilot: research i bakgrunnen, AI-kostnadstak, prioritering, mobil godkjenningskø, oppfølging, innboks-lesing, ukerapport. Se [AUTOPILOT.md](AUTOPILOT.md) |
| 3 | Gjennomfør testlisten i AUTOPILOT.md punkt 9. Slå på sending gradvis |
| 4 | Flere datakilder (egne lister, partnere), A/B-test av emnelinjer, rapport per kampanje |
