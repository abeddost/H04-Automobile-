# H04 Automobil – Website

Website von **H04 Automobil**, Wiesbadener Str. 93, 55252 Wiesbaden (Mainz-Kastel).
Gebaut mit Next.js 16 und Tailwind CSS 4. Alle Seiten sind statisch vorgerendert.

## ⚠️ Vor der Veröffentlichung – Checkliste für den Inhaber

### Rechtliches (Pflicht)

- [ ] **Impressum** vervollständigen in `app/impressum/page.tsx`: alle gelb markierten `[FEHLT: …]`-Stellen.
  - Inhaber bzw. Firma und Rechtsform
  - E-Mail-Adresse (gesetzlich vorgeschrieben)
  - ggf. Handelsregister und USt-IdNr.
  - verantwortliche Person nach § 18 MStV
  - Angabe zur Verbraucherstreitbeilegung (§ 36 VSBG)
- [ ] **Datenschutzerklärung** vervollständigen in `app/datenschutz/page.tsx`.
  - Inhaber, E-Mail, Hosting-Anbieter, Log-Speicherdauer, Datum
- [ ] Beide Texte **rechtlich prüfen lassen**.
- [ ] Danach in beiden Dateien `robots: { index: false, … }` auf `index: true` setzen.
- [ ] Den gelben Entwurfs-Hinweis entfernen: den `role="note"`-Block in `components/LegalPage.tsx`.

### Technik

- [ ] Domain festlegen und die Umgebungsvariable `NEXT_PUBLIC_SITE_URL` setzen (siehe `.env.example`).
- [ ] Optional: eigene Fotos einsetzen (siehe unten).

## Was die Website bewusst *nicht* enthält

Es gibt keine erfundenen Fahrzeuge, Preise, Öffnungszeiten, Bewertungen, Leistungen oder Kontaktdaten. Außerdem gibt es kein Kontaktformular und kein WhatsApp. Beides lässt sich ergänzen, sobald ein echter Empfänger bzw. die Verfügbarkeit bestätigt ist.

**Fahrzeuge:** Der Bestand wird auf mobile.de verlinkt, nicht eingebettet. Eine Live-Anzeige auf der Website wäre nur über die offizielle mobile.de-Händler-API mit Zugangsdaten zulässig.

**Datenschutz:**

- kein Tracking, keine Cookies
- Schriften lokal eingebunden
- Google Maps lädt erst nach Klick (Zwei-Klick-Lösung)

## Inhalte ändern

| Was | Wo |
| --- | --- |
| Name, Adresse, Telefon, Links | `lib/business.ts` (einzige Quelle für alle Seiten) |
| Texte der Startseite | `components/sections/*.tsx` |
| Farben, Schriften, Abstände | `app/globals.css` (`@theme`) |
| Seitentitel und Beschreibung | `app/layout.tsx` |
| Fotos | `public/images/` (Bildnachweis in `CREDITS.md`) |

### Eigene Fotos

Ersetzen Sie die Dateien in `public/images/` mit gleichem Dateinamen. Geeignet sind Querformate mit mindestens 2000 px Breite. Next.js erzeugt daraus automatisch optimierte AVIF/WebP-Varianten.

Zeigt ein Foto ein echtes Fahrzeug aus dem Bestand, entfernen Sie den „Symbolbild“-Hinweis an der jeweiligen Stelle. Passen Sie außerdem den Hinweistext im Abschnitt „Fahrzeuge“ an.

## Entwicklung

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Produktions-Build
npm start       # Produktions-Server
npm run lint
```

## Veröffentlichen

Empfohlen ist Vercel: Repository importieren und `NEXT_PUBLIC_SITE_URL` setzen, fertig.

Alternativ läuft die Seite überall, wo Node.js verfügbar ist (`npm run build && npm start`).

Sicherheits-Header inklusive Content-Security-Policy sind in `next.config.ts` hinterlegt.
