import Image from "next/image";
import cockpitImage from "@/public/images/cockpit.jpg";
import { business } from "@/lib/business";
import { Reveal } from "../Reveal";
import { ArrowRight, ArrowUpRight, Symbolbild } from "../ui";

const actions = [
  {
    title: "Fahrzeugangebot entdecken",
    text: "Alle aktuellen Fahrzeuge auf mobile.de",
    href: business.links.mobileDe,
    external: true,
  },
  {
    title: "Persönlich Kontakt aufnehmen",
    text: `Telefon ${business.phone.display}`,
    href: business.phone.href,
    external: false,
  },
  {
    title: "Standort besuchen",
    text: business.fullAddress,
    href: business.links.directions,
    external: true,
  },
];

export function About() {
  return (
    <section id="ueber-uns" aria-labelledby="ueber-uns-title" className="section-y relative overflow-hidden bg-ink text-paper">
      <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-electric-light">Über uns</p>
            <h2 id="ueber-uns-title" className="display mt-6 text-[clamp(2.6rem,4.4vw,4.25rem)]">
              {business.name} in Wiesbaden.
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-8 max-w-md space-y-5 text-lg leading-relaxed text-mist">
            <p>
              {business.name} ist Ihr Ansprechpartner für Gebrauchtwagen in Wiesbaden · Mainz-Kastel.
              Unser aktuelles Fahrzeugangebot finden Sie jederzeit auf mobile.de.
            </p>
            <p>
              Sie haben ein Auto entdeckt, das Sie interessiert? Rufen Sie uns an – wir beantworten
              Ihre Fragen und vereinbaren gern einen Termin zur Besichtigung.
            </p>
          </Reveal>

          <Reveal delay={180} className="relative mt-12 hidden aspect-[4/3] overflow-hidden rounded-[1.75rem] lg:block">
            <Image
              src={cockpitImage}
              alt=""
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover"
            />
            <Symbolbild className="absolute bottom-4 right-4" />
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:self-center">
          <ul className="border-t border-white/12">
            {actions.map((action, i) => (
              <Reveal as="li" key={action.title} delay={i * 90} className="border-b border-white/12">
                <a
                  href={action.href}
                  {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-x-5 py-8 sm:gap-x-8 sm:py-10"
                >
                  <span className="self-start pt-2 font-display text-sm font-semibold tabular-nums text-electric-light [font-stretch:112%]">
                    0{i + 1}
                  </span>
                  <span>
                    <span className="display block text-[clamp(1.6rem,3.4vw,2.75rem)] transition-colors duration-300 group-hover:text-white">
                      {action.title}
                    </span>
                    <span className="mt-2 block text-[0.95rem] text-mist">
                      {action.text}
                      {action.external && <span className="sr-only"> (öffnet in neuem Tab)</span>}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="grid size-12 place-items-center rounded-full border border-white/20 transition-[background-color,border-color] duration-300 group-hover:border-electric group-hover:bg-electric sm:size-14"
                  >
                    {action.external ? <ArrowUpRight className="size-5" /> : <ArrowRight className="size-5" />}
                  </span>
                  {/* Akzentlinie */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-electric transition-transform duration-700 ease-out-soft group-hover:scale-x-100"
                  />
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
