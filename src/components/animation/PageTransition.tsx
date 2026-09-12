"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { gsap, registerGsapPlugins } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type PageTransitionProps = {
  children: ReactNode;
};

/** Entrada sutil por rota: fade + rise com stagger. Respeita reduced-motion. */
export function PageTransition({ children }: PageTransitionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const root = ref.current;
    if (!root || reduced) return;

    registerGsapPlugins();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-page-enter]",
        { y: 22, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
        },
      );
    }, root);

    return () => {
      ctx.revert();
    };
  }, [pathname, reduced]);

  return (
    <div ref={ref} className="flex flex-1 flex-col">
      {children}
    </div>
  );
}
