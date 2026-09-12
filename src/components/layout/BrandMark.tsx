import Image from "next/image";
import { cn } from "@/lib/utils";

const DEFAULT_LOGO = "/images/brand/r6-logo.png";

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
  logoSrc?: string;
  logoAlt?: string;
};

/**
 * Logotipo R6 — usa o PNG oficial por padrão.
 * Passar `logoSrc=""` (string vazia) volta para o wordmark tipográfico.
 */
export function BrandMark({
  className,
  compact = false,
  logoSrc = DEFAULT_LOGO,
  logoAlt = "R6 Cenografia",
}: BrandMarkProps) {
  if (logoSrc) {
    return (
      <span className={cn("inline-flex items-center", className)}>
        <span className="relative block h-10 w-[42px] shrink-0">
          <Image
            src={logoSrc}
            alt={logoAlt}
            fill
            className="object-contain"
          />
        </span>
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
