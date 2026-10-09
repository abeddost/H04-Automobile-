import { business } from "@/lib/business";
import { Reveal } from "../Reveal";
import { ArrowUpRight, ButtonLink, PhoneIcon, PinIcon } from "../ui";

export function Contact() {
  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="section-y bg-paper text-ink">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-electric-deep">Kontakt</p>
          <h2 id="kontakt-title" className="display mt-6 max-w-[18ch] text-[clamp(2.6rem,6.5vw,5.75rem)]">
            Ein Fahrzeug gefunden? Sprechen wir darüber.
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-14 md:mt-20">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone">Telefon</p>
          <a
            href={business.phone.href}
            aria-label={`${business.name} anrufen: ${business.phone.display}`}
            className="group mt-3 inline-flex max-w-full items-center gap-4 sm:gap-6"
          >
            <span className="display whitespace-nowrap text-[clamp(2.6rem,11vw,9rem)] tabular-nums text-ink transition-colors duration-300 group-hover:text-electric-deep">
              {business.phone.display}
            </span>
            <span
              aria-hidden="true"
              className="hidden size-14 shrink-0 place-items-center rounded-full bg-electric text-white transition-transform duration-500 ease-out-soft group-hover:rotate-[-12deg] sm:grid lg:size-20"
            >
              <PhoneIcon className="size-6 lg:size-7" />
            </span>
          </a>
        </Reveal>

        <div className="mt-14 grid gap-10 border-t border-ink/12 pt-10 md:grid-cols-12 md:gap-6">
          <Reveal delay={60} className="md:col-span-4">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone">Adresse</p>
            <address className="mt-3 text-xl not-italic leading-snug">
              {business.name}
              <br />
              {business.address.street}
              <br />
              {business.address.postalCode} {business.address.city}
            </address>
          </Reveal>
          <Reveal delay={120} className="md:col-span-4">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone">Gut zu wissen</p>
            <p className="mt-3 text-lg leading-relaxed text-stone">
              Nennen Sie uns am Telefon einfach das Fahrzeug, das Sie auf mobile.de gesehen haben.
            </p>
          </Reveal>
          <Reveal delay={180} className="flex flex-col gap-3 md:col-span-4 md:items-end">
            <ButtonLink href={business.phone.href} size="lg" icon={<PhoneIcon />} className="w-full md:w-auto">
              Anrufen
            </ButtonLink>
            <ButtonLink
              href={business.links.directions}
              external
              size="lg"
              variant="outline-light"
              icon={<PinIcon />}
              className="w-full md:w-auto"
            >
              Route planen
            </ButtonLink>
          </Reveal>
        </div>

        <p className="mt-10 text-sm text-stone">
          Lieber erst stöbern?{" "}
          <a
            href={business.links.mobileDe}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 font-semibold text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-electric"
          >
            Aktuelle Fahrzeuge auf mobile.de
            <span className="sr-only"> (öffnet in neuem Tab)</span>
            <ArrowUpRight className="size-3.5" />
          </a>
        </p>
      </div>
    </section>
  );
}
