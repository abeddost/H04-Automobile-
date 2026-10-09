import Image from "next/image";
import headlightImage from "@/public/images/scheinwerfer.jpg";
import { business } from "@/lib/business";
import { Reveal } from "../Reveal";
import { ArrowRight, ArrowUpRight, ButtonLink, Symbolbild } from "../ui";

const steps = [
  {
    title: "Angebot durchsuchen",
    text: "Wählen Sie auf mobile.de ein Fahrzeug aus und sehen Sie sich alle Details in Ruhe an.",
    href: business.links.mobileDe,
    cta: "Zu mobile.de",
    external: true,
  },
  {
    title: "Fragen klären",
    text: "Rufen Sie uns an – nennen Sie einfach das Fahrzeug, das Sie interessiert.",
    href: business.phone.href,
    cta: business.phone.display,
    external: false,
  },
  {
    title: "Besichtigung vereinbaren",
    text: "Stimmen Sie telefonisch einen Termin ab und sehen Sie sich das Auto in Wiesbaden an.",
    href: "#standort",
    cta: "Zum Standort",
    external: false,
  },
];

export function Vehicles() {
  return (
    <section id="fahrzeuge" aria-labelledby="fahrzeuge-title" className="section-y bg-paper text-ink">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-electric-deep">Fahrzeugangebot</p>
            <h2 id="fahrzeuge-title" className="display mt-6 text-[clamp(2.6rem,6.5vw,5.75rem)]">
              Finden Sie Ihr nächstes Fahrzeug.
            </h2>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-stone">
              Unser aktuelles Fahrzeugangebot präsentieren wir auf mobile.de. Dort finden Sie zu
              jedem Fahrzeug Bilder, Preis und alle Details.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:mt-20 lg:grid-cols-12 lg:gap-6">
          {/* Hauptkarte */}
          <Reveal className="lg:col-span-7">
            <article className="group relative isolate flex min-h-[30rem] flex-col justify-end overflow-hidden rounded-[2rem] bg-ink text-paper sm:min-h-[34rem] lg:h-full">
              <Image
                src={headlightImage}
                alt=""
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="-z-20 object-cover object-center transition-transform duration-[1.2s] ease-out-soft group-hover:scale-[1.04]"
              />
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgb(14_15_17/0.95)_8%,rgb(14_15_17/0.55)_50%,rgb(14_15_17/0.15))]" />
              <Symbolbild className="absolute right-5 top-5" />
              <p className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-ink/40 px-3.5 py-1.5 text-xs font-medium backdrop-blur-sm sm:left-8 sm:top-8">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-electric-light" />
                Händlerseite auf mobile.de
              </p>

              <div className="p-6 sm:p-10">
                <h3 className="display max-w-[16ch] text-[clamp(2rem,4.2vw,3.5rem)]">
                  Alle aktuellen Fahrzeuge an einem Ort.
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-paper/80">
                  Durchsuchen, vergleichen, merken – direkt auf der Händlerseite von {business.name}{" "}
                  bei mobile.de.
                </p>
                <ButtonLink
                  href={business.links.mobileDe}
                  external
                  size="lg"
                  icon={<ArrowUpRight />}
                  className="mt-8 w-full sm:w-auto"
                >
                  Aktuelle Fahrzeuge auf mobile.de ansehen
                </ButtonLink>
              </div>
            </article>
          </Reveal>

          {/* Weg zum Fahrzeug */}
          <ol className="grid gap-5 lg:col-span-5 lg:gap-6">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 90}>
                <a
                  href={step.href}
                  {...(step.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex h-full flex-col rounded-[1.75rem] border border-ink/10 bg-white/60 p-6 transition-[border-color,background-color,box-shadow,translate] duration-500 ease-out-soft hover:-translate-y-1 hover:border-ink/25 hover:bg-white hover:shadow-[0_24px_50px_-30px_rgba(14,15,17,0.45)] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-display text-sm font-semibold tabular-nums text-electric-deep [font-stretch:112%]">
                      0{i + 1}
                    </span>
                    <span aria-hidden="true" className="grid size-10 place-items-center rounded-full border border-ink/15 transition-colors duration-300 group-hover:border-electric group-hover:bg-electric group-hover:text-white">
                      {step.external ? <ArrowUpRight /> : <ArrowRight />}
                    </span>
                  </div>
                  <h3 className="display mt-6 text-[1.75rem] sm:text-[2rem]">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-stone">{step.text}</p>
                  <span className="mt-6 text-sm font-semibold text-ink underline decoration-ink/25 underline-offset-4 transition-colors group-hover:decoration-electric">
                    {step.cta}
                    {step.external && <span className="sr-only"> (öffnet in neuem Tab)</span>}
                  </span>
                </a>
              </Reveal>
            ))}
          </ol>
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-stone">
          Hinweis: Die Fotos auf dieser Website sind Symbolbilder und zeigen keine Fahrzeuge aus
          unserem Bestand. Verfügbarkeit, Preise und Ausstattung entnehmen Sie bitte den aktuellen
          Angeboten auf mobile.de.
        </p>
      </div>
    </section>
  );
}
