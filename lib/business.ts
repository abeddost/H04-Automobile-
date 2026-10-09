/**
 * Zentrale, bestätigte Unternehmensdaten.
 * Nur hier ändern – alle Seiten, Links und strukturierten Daten lesen von hier.
 * Bitte keine unbestätigten Angaben (Öffnungszeiten, E-Mail, Bewertungen …) ergänzen.
 */

const address = {
  street: "Wiesbadener Str. 93",
  postalCode: "55252",
  city: "Wiesbaden",
  district: "Mainz-Kastel",
  country: "DE",
} as const;

const name = "H04 Automobil";
const fullAddress = `${address.street}, ${address.postalCode} ${address.city}`;

export const business = {
  name,
  address,
  fullAddress,
  phone: {
    display: "0178 8427418",
    href: "tel:+491788427418",
    international: "+49 178 8427418",
  },
  links: {
    mobileDe: "https://home.mobile.de/4H0AUTOHAUS",
    googleProfile: "https://share.google/Uo5XGtugDCUxGaTYK",
    directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`,
    mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`,
  },
} as const;

/**
 * Öffentliche Adresse der Website. Vor dem Livegang `NEXT_PUBLIC_SITE_URL`
 * setzen (z. B. https://www.ihre-domain.de). Auf Vercel wird ersatzweise die
 * Produktions-URL des Projekts verwendet. Ohne beides bleibt der Wert leer.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);
