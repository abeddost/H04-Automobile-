import { business } from "@/lib/business";
import { ArrowUpRight, PhoneIcon } from "./ui";

/** Fixe Aktionsleiste auf dem Smartphone: Anrufen & Fahrzeuge. */
export function MobileActionBar() {
  return (
    <nav
      aria-label="Schnellzugriff"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/80 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl backdrop-saturate-150 md:hidden"
    >
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={business.phone.href}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-electric text-[0.95rem] font-semibold text-white active:bg-electric-hover"
        >
          <PhoneIcon />
          Anrufen
        </a>
        <a
          href={business.links.mobileDe}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] text-[0.95rem] font-semibold text-paper active:bg-white/15"
        >
          Fahrzeuge
          <span className="sr-only"> auf mobile.de (öffnet in neuem Tab)</span>
          <ArrowUpRight />
        </a>
      </div>
    </nav>
  );
}
