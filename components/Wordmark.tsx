/** Typografische Wortmarke „H04 AUTOMOBIL“ – ersetzt ein Logo, bis eines vorliegt. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-2.5 leading-none ${className}`}>
      <span className="sr-only">H04 Automobil</span>
      <span aria-hidden="true" className="font-display text-[1.4em] font-extrabold tracking-[-0.04em] [font-stretch:125%]">
        H04
      </span>
      <span aria-hidden="true" className="h-[0.9em] w-px self-center bg-current opacity-30" />
      <span aria-hidden="true" className="font-display text-[0.78em] font-medium tracking-[0.34em] [font-stretch:115%]">
        AUTOMOBIL
      </span>
    </span>
  );
}
