import { business } from "@/lib/business";
import { ConsentMap } from "../ConsentMap";
import { Reveal } from "../Reveal";
import { ArrowUpRight, ButtonLink, PhoneIcon } from "../ui";

export function Location() {
  return (
    <section id="standort" aria-labelledby="standort-title" className="section-y bg-ink-2 text-paper">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-electric-light">Standort</p>
            <h2 id="standort-title" className="display mt-6 text-[clamp(2.6rem,6vw,5.25rem)]">
              So finden Sie uns.
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-10">
            <address className="display text-[clamp(1.6rem,3vw,2.25rem)] not-italic leading-tight">
              {business.address.street}
              <br />
              {business.address.postalCode} {business.address.city}
            </address>
            <p className="mt-3 text-mist">{business.address.district}</p>
          </Reveal>

          <Reveal delay={160} className="mt-10 rounded-[1.5rem] border border-white/12 bg-white/[0.03] p-6">
            <p className="text-lg font-semibold">Besichtigungstermin telefonisch vereinbaren.</p>
            <a
              href={business.phone.href}
              className="mt-2 inline-flex items-center gap-2 text-electric-light underline-offset-4 hover:underline"
            >
              <PhoneIcon />
              {business.phone.display}
            </a>
          </Reveal>

          <Reveal delay={220} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={business.links.directions} external size="lg" icon={<ArrowUpRight />}>
              Route in Google Maps
            </ButtonLink>
            <ButtonLink href={business.phone.href} size="lg" variant="ghost-dark" icon={<PhoneIcon />}>
              Anrufen
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:col-span-7">
          <ConsentMap />
        </Reveal>
      </div>
    </section>
  );
}
