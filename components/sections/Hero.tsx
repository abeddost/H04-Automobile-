import Image from "next/image";
import heroImage from "@/public/images/hero-strasse.jpg";
import { business } from "@/lib/business";
import { ArrowRight, ButtonLink, Symbolbild } from "../ui";

export function Hero() {
  return (
    <section
      id="start"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink"
    >
      <Image
        src={heroImage}
        alt=""
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        quality={75}
        className="-z-20 object-cover object-[78%_50%] motion-safe:animate-settle md:object-center"
      />
      {/* Kino-Abdunkelung: unten satt, links für Lesbarkeit */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,var(--color-ink)_0%,rgb(14_15_17/0.82)_32%,rgb(14_15_17/0.25)_62%,rgb(14_15_17/0.55)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(14_15_17/0.6),transparent_60%)]" />

      <div className="shell flex flex-1 flex-col justify-end pb-28 pt-32 md:pb-14">
        <p className="eyebrow text-electric-light">
          Wiesbaden · Mainz-Kastel
        </p>

        <h1
          id="hero-title"
          className="display mt-6 text-[clamp(3.1rem,8.6vw,8.5rem)] text-paper"
        >
          Ihr nächstes Auto <br className="hidden md:inline" />
          beginnt hier.
        </h1>

        <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-[minmax(0,30rem)_1fr] md:items-end">
          <p className="max-w-md text-[1.075rem] leading-relaxed text-paper/80 md:text-lg">
            Entdecken Sie das Fahrzeugangebot von {business.name} in Wiesbaden.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <ButtonLink href="#fahrzeuge" size="lg" icon={<ArrowRight />}>
              Fahrzeuge entdecken
            </ButtonLink>
            <ButtonLink href="#kontakt" size="lg" variant="ghost-dark">
              Kontakt aufnehmen
            </ButtonLink>
          </div>
        </div>

        {/* Info-Leiste */}
        <dl className="mt-12 hidden gap-x-10 gap-y-4 border-t border-white/12 pt-6 text-sm sm:grid sm:grid-cols-3 md:mt-16">
          <div>
            <dt className="text-mist">Fahrzeugangebot</dt>
            <dd className="mt-1">
              <a href={business.links.mobileDe} target="_blank" rel="noopener noreferrer" className="font-medium text-paper underline-offset-4 hover:underline">
                Auf mobile.de ansehen<span className="sr-only"> (öffnet in neuem Tab)</span>
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-mist">Telefon</dt>
            <dd className="mt-1">
              <a href={business.phone.href} className="font-medium text-paper underline-offset-4 hover:underline">
                {business.phone.display}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-mist">Adresse</dt>
            <dd className="mt-1 font-medium text-paper">{business.fullAddress}</dd>
          </div>
        </dl>
      </div>

      <Symbolbild className="absolute right-4 top-24 sm:right-8 lg:right-12" />
    </section>
  );
}
