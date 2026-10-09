import Link from "next/link";
import { business } from "@/lib/business";
import { Wordmark } from "./Wordmark";
import { ArrowUpRight } from "./ui";

const linkClass =
  "group inline-flex items-center gap-1.5 text-paper/85 underline-offset-4 transition-colors hover:text-paper hover:underline";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink text-paper">
      <div className="shell pb-10 pt-20 md:pt-24">
        <Link href="/#start" className="inline-block rounded-md">
          <Wordmark className="text-[clamp(1.4rem,4vw,2.4rem)]" />
        </Link>

        <div className="mt-14 grid gap-10 text-[0.95rem] sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">Adresse</h2>
            <address className="mt-4 not-italic leading-relaxed text-paper/85">
              {business.name}
              <br />
              {business.address.street}
              <br />
              {business.address.postalCode} {business.address.city}
            </address>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">Kontakt</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={business.phone.href} className={linkClass}>
                  Telefon {business.phone.display}
                </a>
              </li>
              <li>
                <a href={business.links.directions} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Route planen<span className="sr-only"> (öffnet in neuem Tab)</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">Online</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={business.links.mobileDe} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Fahrzeuge auf mobile.de<span className="sr-only"> (öffnet in neuem Tab)</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
              <li>
                <a href={business.links.googleProfile} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Google-Unternehmensprofil<span className="sr-only"> (öffnet in neuem Tab)</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">Rechtliches</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/impressum" className={linkClass}>
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className={linkClass}>
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-mist sm:flex-row sm:justify-between">
          <p>© {business.name} · Wiesbaden · Mainz-Kastel</p>
          <p>Abbildungen sind Symbolbilder (Fotos: Unsplash).</p>
        </div>
      </div>
    </footer>
  );
}
