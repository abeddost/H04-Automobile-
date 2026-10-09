import type { Metadata } from "next";
import { business } from "@/lib/business";
import { LegalPage, Missing } from "@/components/LegalPage";

/*
 * ENTWURF – Impressum nach § 5 DDG / § 18 MStV.
 * Alle <Missing>-Platzhalter durch die korrekten Angaben ersetzen (bzw. nicht
 * zutreffende Abschnitte entfernen) und anschließend `robots` unten auf
 * { index: true, follow: true } setzen.
 */

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum von ${business.name}, ${business.fullAddress}.`,
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <h2>Angaben gemäß § 5 DDG</h2>
      <address>
        <strong>{business.name}</strong>
        <br />
        <Missing>Vollständiger Name des Inhabers bzw. Firma mit Rechtsform</Missing>
        <br />
        {business.address.street}
        <br />
        {business.address.postalCode} {business.address.city}
      </address>

      <p>
        Vertreten durch:{" "}
        <Missing>Nur bei Gesellschaften: vertretungsberechtigte Person(en) – sonst Zeile entfernen</Missing>
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href={business.phone.href}>{business.phone.display}</a>
        <br />
        E-Mail: <Missing>E-Mail-Adresse (gesetzlich vorgeschrieben)</Missing>
      </p>

      <h2>Registereintrag</h2>
      <p>
        <Missing>
          Falls im Handelsregister eingetragen: Registergericht und Registernummer – sonst Abschnitt
          entfernen
        </Missing>
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:{" "}
        <Missing>USt-IdNr., falls vorhanden – sonst Abschnitt entfernen</Missing>
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        <Missing>Name und Anschrift der verantwortlichen Person</Missing>
      </p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        <Missing>
          Angabe nach § 36 VSBG, ob Sie zur Teilnahme an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle bereit oder verpflichtet sind (bei bis zu 10 Beschäftigten ggf.
          entbehrlich – bitte prüfen lassen)
        </Missing>
      </p>

      <h2>Bildnachweis</h2>
      <p>
        Die Fotos auf dieser Website sind Symbolbilder von{" "}
        <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
          Unsplash
        </a>{" "}
        (Unsplash-Lizenz): Justin Lane, Tristan Beischel, Erik Nyberg. Sie zeigen keine Fahrzeuge
        aus dem Bestand von {business.name}.
      </p>
    </LegalPage>
  );
}
