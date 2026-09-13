"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsapPlugins } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Container } from "@/components/ui/Container";

/**
 * Manifiesto — dirección de arte editorial.
 * Las líneas entran con un rise suave cuando alcanzan la sección.
 */
export function Manifesto() {
  const rootRef = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;

    registerGsapPlugins();
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(
        "[data-manifesto-item]",
      );
      for (const el of items) {
        gsap.fromTo(
          el,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true,
            },
          },
        );
      }
    }, root);

    return () => {
      ctx.revert();
    };
  }, [reduced]);

  return (
    <section
      ref={rootRef}
      aria-label="Manifesto R6 Cenografia"
      className="flex flex-col justify-center bg-void py-12 md:py-16"
    >
      <Container className="flex flex-col gap-3 md:gap-4">
        <p data-manifesto-item className="r6-overline flex items-center gap-2">
          <span
            className="inline-block h-1 w-1 rounded-full bg-acid"
            aria-hidden
          />
          R6 / Experiência
        </p>

        <h2 className="r6-story r6-story-xl mt-4 uppercase">
          <span data-manifesto-item className="block">
            Um espaço pode
          </span>
          <span data-manifesto-item className="block">
            ser bonito.
          </span>
        </h2>

        <div className="mt-8 md:mt-10 md:pl-[8vw]">
          <p className="r6-story r6-story-lg uppercase">
            <span data-manifesto-item className="block">
              Uma experiência
            </span>
            <span data-manifesto-item className="block text-bone">
              precisa ser
            </span>
            <span data-manifesto-item className="block">
              lembrada
              <span className="text-acid" aria-hidden>.</span>
            </span>
          </p>
        </div>

        <p
          data-manifesto-item
          className="r6-body max-w-prose text-muted md:max-w-sm"
        >
          Na R6, arquitetura, identidade e experiência trabalham juntas para criar espaços que fazem uma marca ser percebida antes mesmo de ser apresentada.
        </p>
      </Container>
    </section>
  );
}