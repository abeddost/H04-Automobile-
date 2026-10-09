"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { business } from "@/lib/business";
import { ArrowUpRight, PinIcon } from "./ui";

const STORAGE_KEY = "h04-map-consent";

/*
 * Einwilligung nur für die aktuelle Browser-Sitzung (sessionStorage, kein Cookie).
 * Ist der Speicher blockiert, gilt sie nur bis zum Neuladen der Seite.
 */
let consent: boolean | null = null;
const listeners = new Set<() => void>();

function readConsent() {
  if (consent === null) {
    try {
      consent = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      consent = false;
    }
  }
  return consent;
}

function setConsent(value: boolean) {
  consent = value;
  try {
    if (value) sessionStorage.setItem(STORAGE_KEY, "1");
    else sessionStorage.removeItem(STORAGE_KEY);
  } catch {}
  listeners.forEach((notify) => notify());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/**
 * Zwei-Klick-Lösung: Google Maps wird erst nach aktiver Zustimmung geladen.
 * Vorher werden keinerlei Daten an Google übertragen.
 */
export function ConsentMap() {
  const consented = useSyncExternalStore(subscribe, readConsent, () => false);
  const allow = () => setConsent(true);
  const revoke = () => setConsent(false);

  return (
    <div className="relative min-h-[36rem] overflow-hidden rounded-[2rem] border border-white/12 bg-ink-3 sm:aspect-[4/3] sm:min-h-0 lg:aspect-auto lg:h-full lg:min-h-[36rem]">
      {consented ? (
        <>
          <iframe
            src={business.links.mapEmbed}
            title={`Google Maps: ${business.name}, ${business.fullAddress}`}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 size-full border-0 [filter:grayscale(0.25)_contrast(1.05)]"
            allowFullScreen
          />
          <button
            type="button"
            onClick={revoke}
            className="absolute left-4 top-4 rounded-full bg-ink/85 px-4 py-2 text-xs font-medium text-paper backdrop-blur hover:bg-ink"
          >
            Karte ausblenden
          </button>
        </>
      ) : (
        <>
          <MapPreview />
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
            <div className="rounded-[1.5rem] border border-white/12 bg-ink/80 p-5 backdrop-blur-xl sm:p-6">
              <div className="flex items-start gap-4">
                <span aria-hidden="true" className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full bg-electric text-white">
                  <PinIcon className="size-5" />
                </span>
                <div>
                  <p className="font-semibold">{business.name}</p>
                  <p className="text-sm text-mist">{business.fullAddress}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-mist">
                Mit dem Laden der interaktiven Karte werden Daten (u. a. Ihre IP-Adresse) an Google
                übertragen. Mehr dazu in der{" "}
                <Link href="/datenschutz#google-maps" className="text-paper underline underline-offset-4">
                  Datenschutzerklärung
                </Link>
                .
              </p>
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <button
                  type="button"
                  onClick={allow}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-paper px-5 text-sm font-semibold text-ink transition-colors hover:bg-white"
                >
                  Interaktive Karte laden
                </button>
                <a
                  href={business.links.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-sm font-semibold text-paper transition-colors hover:border-white/45"
                >
                  Route in Google Maps
                  <span className="sr-only"> (öffnet in neuem Tab)</span>
                  <ArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/** Schematische, rein dekorative Kartenvorschau – lädt nichts von Dritten. */
function MapPreview() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <svg viewBox="0 0 800 640" preserveAspectRatio="xMidYMid slice" className="size-full">
        <defs>
          <pattern id="blocks" width="56" height="56" patternUnits="userSpaceOnUse" patternTransform="rotate(-14)">
            <path d="M56 0H0v56" fill="none" stroke="rgb(246 243 238 / 0.06)" strokeWidth="1" />
          </pattern>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2964f5" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#2964f5" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1f2228" stopOpacity="0" />
            <stop offset="100%" stopColor="#1f2228" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <rect width="800" height="640" fill="#1f2228" />
        <rect width="800" height="640" fill="url(#blocks)" />
        {/* Fluss */}
        <path d="M-40 560 C 160 500, 300 600, 470 540 S 760 430, 860 470" fill="none" stroke="rgb(47 107 255 / 0.14)" strokeWidth="58" strokeLinecap="round" />
        {/* Hauptstraßen */}
        <g fill="none" stroke="rgb(246 243 238 / 0.16)" strokeLinecap="round">
          <path d="M-20 210 C 200 240, 420 190, 820 260" strokeWidth="9" />
          <path d="M260 -20 C 300 160, 360 330, 330 660" strokeWidth="7" />
          <path d="M600 -20 C 560 140, 520 300, 560 470" strokeWidth="5" />
        </g>
        <g fill="none" stroke="rgb(246 243 238 / 0.09)" strokeLinecap="round" strokeWidth="3">
          <path d="M-20 360 C 180 330, 420 360, 820 330" />
          <path d="M120 -20 L 180 660" />
          <path d="M440 -20 C 470 200, 430 380, 470 660" />
          <path d="M700 120 C 640 240, 720 340, 820 380" />
        </g>
        {/* Standort */}
        <circle cx="400" cy="220" r="150" fill="url(#glow)" />
        <circle cx="400" cy="220" r="26" fill="none" stroke="#7ea2ff" strokeOpacity="0.5" strokeWidth="1.5" className="origin-[400px_220px] motion-safe:animate-pulse-ring" />
        <circle cx="400" cy="220" r="11" fill="#2964f5" stroke="#f6f3ee" strokeWidth="3" />
        <rect width="800" height="640" fill="url(#fade)" />
      </svg>
    </div>
  );
}
