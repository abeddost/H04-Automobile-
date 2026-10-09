import type { Metadata } from "next";
import { business } from "@/lib/business";
import { LegalPage, Missing } from "@/components/LegalPage";

/*
 * ENTWURF – Datenschutzerklärung.
 * Beschreibt den technischen Ist-Zustand dieser Website (kein Tracking, keine
 * Cookies, Google Maps nur nach Einwilligung). Platzhalter ergänzen, rechtlich
 * prüfen lassen und danach `robots` auf { index: true, follow: true } setzen.
 */

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung von ${business.name} in Wiesbaden.`,
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutz">
      <h2>1. Verantwortlicher</h2>
      <address>
        <strong>{business.name}</strong>
        <br />
        <Missing>Vollständiger Name des Inhabers bzw. Firma mit Rechtsform</Missing>
        <br />
        {business.address.street}
        <br />
        {business.address.postalCode} {business.address.city}
        <br />
        Telefon: <a href={business.phone.href}>{business.phone.display}</a>
        <br />
        E-Mail: <Missing>E-Mail-Adresse</Missing>
      </address>

      <h2>2. Das Wichtigste in Kürze</h2>
      <ul>
        <li>Diese Website verwendet keine Analyse- oder Marketing-Tools und kein Tracking.</li>
        <li>Es werden keine Cookies gesetzt.</li>
        <li>Schriftarten werden lokal von unserem Server geladen – nicht von Google.</li>
        <li>
          Die interaktive Google-Karte wird nur geladen, wenn Sie dem ausdrücklich per Klick
          zustimmen.
        </li>
        <li>Es gibt kein Kontaktformular; wir sind telefonisch erreichbar.</li>
      </ul>

      <h2>3. Hosting und Server-Logfiles</h2>
      <p>
        Diese Website wird gehostet bei: <Missing>Name und Anschrift des Hosting-Anbieters</Missing>.
        Mit dem Anbieter besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO.{" "}
        <Missing>bestätigen</Missing>
      </p>
      <p>
        Beim Aufruf der Website werden technisch notwendige Daten automatisch verarbeitet: IP-Adresse,
        Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Referrer-URL, Browser und Betriebssystem.
        Dies dient der sicheren und stabilen Bereitstellung der Website. Rechtsgrundlage ist Art. 6
        Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren Betrieb). Die Logfiles werden
        nach <Missing>Speicherdauer in Tagen</Missing> gelöscht.
      </p>

      <h2 id="google-maps">4. Google Maps (nur nach Einwilligung)</h2>
      <p>
        Auf unserer Startseite können Sie eine interaktive Karte von Google Maps laden. Anbieter ist
        die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Die Karte wird erst
        geladen, nachdem Sie auf „Interaktive Karte laden“ geklickt haben. Erst dann werden Daten –
        insbesondere Ihre IP-Adresse – an Google übertragen; dabei ist eine Übermittlung in die USA
        möglich. Google ist unter dem EU-US Data Privacy Framework zertifiziert.
      </p>
      <p>
        Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Ihre
        Entscheidung wird nur für die aktuelle Browser-Sitzung im Sitzungsspeicher Ihres Browsers
        vermerkt und beim Schließen des Tabs gelöscht. Sie können die Einwilligung jederzeit
        widerrufen, indem Sie „Karte ausblenden“ wählen oder den Tab schließen. Weitere Informationen:{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          Datenschutzerklärung von Google
        </a>
        .
      </p>
      <p>
        Der Link „Route planen“ öffnet Google Maps in einem neuen Tab. Dabei gelten die
        Datenschutzbestimmungen von Google.
      </p>

      <h2>5. Links zu mobile.de und zum Google-Unternehmensprofil</h2>
      <p>
        Unser Fahrzeugangebot finden Sie auf mobile.de, außerdem verlinken wir auf unser
        Google-Unternehmensprofil. Es handelt sich um einfache Links: Erst wenn Sie darauf klicken,
        werden Sie zur jeweiligen Plattform weitergeleitet. Dort gelten die Datenschutzbestimmungen
        des jeweiligen Anbieters (mobile.de GmbH bzw. Google).
      </p>

      <h2>6. Kontakt per Telefon</h2>
      <p>
        Wenn Sie uns anrufen, verarbeiten wir Ihre Angaben (z. B. Name, Telefonnummer, Ihr Anliegen),
        um Ihre Anfrage zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre
        Anfrage auf einen Vertrag abzielt, sonst Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht,
        sobald sie nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten
        bestehen.
      </p>

      <h2>7. Ihre Rechte</h2>
      <p>Sie haben jederzeit das Recht auf:</p>
      <ul>
        <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
      </ul>
      <p>
        Zudem können Sie sich bei einer Datenschutz-Aufsichtsbehörde beschweren. Zuständig ist: Der
        Hessische Beauftragte für Datenschutz und Informationsfreiheit, Gustav-Stresemann-Ring 1,
        65189 Wiesbaden.
      </p>

      <h2>8. Stand</h2>
      <p>
        <Missing>Datum der Veröffentlichung</Missing>
      </p>
    </LegalPage>
  );
}
