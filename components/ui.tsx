import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "light" | "ghost-dark" | "outline-light";

const variants: Record<Variant, string> = {
  primary:
    "bg-electric text-white hover:bg-electric-hover shadow-[0_10px_30px_-12px_rgba(47,107,255,0.7)]",
  light: "bg-paper text-ink hover:bg-white",
  "ghost-dark":
    "border border-white/20 text-paper bg-white/[0.04] backdrop-blur-sm hover:border-white/45 hover:bg-white/10",
  "outline-light": "border border-ink/20 text-ink hover:border-ink/50 hover:bg-ink/[0.04]",
};

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: Variant;
  size?: "md" | "lg";
  external?: boolean;
  icon?: ReactNode;
};

/** Link im Button-Stil. `external` öffnet in neuem Tab mit sicherem rel. */
export function ButtonLink({
  variant = "primary",
  size = "md",
  external,
  icon,
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  const sizes =
    size === "lg" ? "min-h-14 px-7 py-3 text-[0.95rem]" : "min-h-12 px-6 py-2.5 text-[0.9rem]";
  return (
    <a
      {...props}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full text-center font-semibold leading-snug tracking-[-0.005em] transition-[background-color,border-color,color,transform] duration-300 ease-out-soft active:scale-[0.98] ${sizes} ${variants[variant]} ${className}`}
    >
      {children}
      {external && <span className="sr-only"> (öffnet in neuem Tab)</span>}
      {icon}
    </a>
  );
}

/* Ein bewusst kleines, eigenes Icon-Set – nur wo es Orientierung gibt. */

type IconProps = { className?: string };

export function ArrowUpRight({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`shrink-0 ${className} transition-transform duration-300 ease-out-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}>
      <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRight({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`shrink-0 ${className} transition-transform duration-300 ease-out-soft group-hover:translate-x-1`}>
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`shrink-0 ${className}`}>
      <path
        d="M5.2 1.9 3.6 2.2a1.5 1.5 0 0 0-1.2 1.6c.5 5.2 4.6 9.3 9.8 9.8a1.5 1.5 0 0 0 1.6-1.2l.3-1.6a1 1 0 0 0-.6-1.1l-2-.9a1 1 0 0 0-1.1.2l-.9.9a7.6 7.6 0 0 1-3.7-3.7l.9-.9a1 1 0 0 0 .2-1.1l-.9-2a1 1 0 0 0-1.1-.6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PinIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`shrink-0 ${className}`}>
      <path d="M8 14.5s5-4.2 5-8.2a5 5 0 1 0-10 0c0 4 5 8.2 5 8.2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="8" cy="6.3" r="1.8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

/** Kleiner Hinweis auf illustrative Fotos. */
export function Symbolbild({ className = "" }: { className?: string }) {
  return (
    <span className={`pointer-events-none select-none rounded-full bg-ink/55 px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-[0.18em] text-paper/80 backdrop-blur-sm ${className}`}>
      Symbolbild
    </span>
  );
}
