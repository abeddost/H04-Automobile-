import type { ReactNode } from "react";

/** Gelb markierter Platzhalter für Angaben, die der Inhaber noch ergänzen muss. */
export function Missing({ children }: { children: ReactNode }) {
  return <mark className="missing">[FEHLT: {children}]</mark>;
}

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <div className="bg-ink pb-14 pt-36 md:pb-20 md:pt-44">
        <div className="shell">
          <p className="eyebrow text-electric-light">Rechtliches</p>
          <h1 className="display mt-6 text-[clamp(2.75rem,8vw,6rem)]">{title}</h1>
        </div>
      </div>

      <div className="bg-paper text-ink">
        <div className="shell py-14 md:py-20">
          <div
            role="note"
            className="max-w-3xl rounded-[1.25rem] border-2 border-ink bg-draft p-5 text-ink sm:p-6"
          >
            <p className="font-display text-sm font-bold uppercase tracking-[0.16em]">
              Entwurf – vor Veröffentlichung vervollständigen
            </p>
            <p className="mt-2 leading-relaxed">
              Gelb markierte Angaben fehlen noch und müssen vom Inhaber ergänzt werden. Bitte lassen
              Sie den vollständigen Text vor der Veröffentlichung rechtlich prüfen. Diese Seite ist
              bis dahin von Suchmaschinen ausgeschlossen.
            </p>
          </div>

          <div className="legal mt-12 max-w-3xl">{children}</div>
        </div>
      </div>
    </>
  );
}
