import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
  logoSrc?: string;
  logoAlt?: string;
};

/**
 * Wordmark tipográfico provisório.
 * Troca futura pelo logo oficial: passar `logoSrc` (SVG/PNG claro/escuro).
 */
export function BrandMark({
  className,
  compact = false,
  logoSrc,
  logoAlt = "R6 Cenografia",
}: BrandMarkProps) {
  if (logoSrc) {
    return (
      <span className={cn("inline-flex items-center", className)}>
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={120}
          height={32}
          priority={false}
        />
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-2 select-none",
        className,
      )}
      aria-label="R6 Cenografia"
    >
      <span className="text-xl font-semibold leading-none tracking-[-0.04em] md:text-2xl">
        R6<span className="text-acid" aria-hidden>
          .
        </span>
      </span>
      {!compact ? (
        <span className="r6-label leading-none text-muted">
          Cenografia
        </span>
      ) : null}
    </span>
  );
}
