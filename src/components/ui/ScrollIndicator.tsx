"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

type ScrollIndicatorProps = {
  label?: string;
  orientation?: "vertical" | "horizontal";
  className?: string;
};

/** Indicador de scroll discreto com loop CSS. Pausa com reduced-motion. */
export function ScrollIndicator({
  label = "Scroll",
  orientation = "vertical",
  className,
}: ScrollIndicatorProps) {
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("r6-reduced-motion");
    return () => {
      document.documentElement.classList.remove("r6-reduced-motion");
    };
  }, []);

  const vertical = orientation === "vertical";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-3",
        vertical ? "flex-col" : "flex-row",
        className,
      )}
      aria-hidden
    >
      <span className="r6-overline">{label}</span>
      <span
        className={cn(
          "relative overflow-hidden bg-line",
          vertical ? "h-12 w-px" : "h-px w-12",
        )}
      >
        <span
          className={cn(
            "absolute bg-acid",
            vertical
              ? "r6-scroll-line-y left-0 top-0 h-1/2 w-full"
              : "r6-scroll-line-x left-0 top-0 h-full w-1/2",
          )}
        />
      </span>
    </span>
  );
}
