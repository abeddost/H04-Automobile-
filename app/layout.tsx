import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import { business, siteUrl } from "@/lib/business";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileActionBar } from "@/components/MobileActionBar";
import { RevealObserver } from "@/components/Reveal";
import "./globals.css";

// Schriften werden beim Build lokal eingebunden – keine Verbindung zu Google beim Seitenaufruf.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const title = `${business.name} – Gebrauchtwagen in Wiesbaden · Mainz-Kastel`;
const description = `${business.name} in Wiesbaden: aktuelles Fahrzeugangebot auf mobile.de, persönlicher Kontakt unter ${business.phone.display} und Besichtigung in der ${business.address.street}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl ?? "http://localhost:3000"),
  title: {
    default: title,
    template: `%s | ${business.name}`,
  },
  description,
  applicationName: business.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: business.name,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0e0f11",
  colorScheme: "dark light",
};

/** Strukturierte Daten – ausschließlich bestätigte Angaben. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: business.name,
  telephone: business.phone.international,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    postalCode: business.address.postalCode,
    addressLocality: business.address.city,
    addressCountry: business.address.country,
  },
  sameAs: [business.links.mobileDe, business.links.googleProfile],
  ...(siteUrl ? { url: siteUrl } : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${archivo.variable} ${inter.variable}`}>
      <body className="min-h-dvh bg-ink pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <a
          href="#inhalt"
          className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-paper px-5 py-3 text-sm font-semibold text-ink transition-transform focus-visible:translate-y-0"
        >
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <main id="inhalt" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
        <MobileActionBar />
        <RevealObserver />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
