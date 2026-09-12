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
      aria-label="Manifiesto R6 Cenografia"
      className="flex min-h-[85svh] flex-col justify-center bg-void"
    >
      <Container className="flex flex-col gap-4 pt-6 pb-6">
        <p data-manifesto-item className="r6-overline flex items-center gap-3">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full bg-acid"
            aria-hidden
          />
          R6 / Experiencia
        </p>

        <h2 className="r6-story r6-story-xl mt-12 uppercase">
          <span data-manifesto-item className="block">
            Não é apenas
          </span>
          <span data-manifesto-item className="block">
            um stand.
          </span>
        </h2>

        <div className="mt-16 md:mt-20 md:pl-[12vw]">
          <p className="r6-story r6-story-lg uppercase">
            <span data-manifesto-item className="block">
              É o espaço onde
            </span>
            <span data-manifesto-item className="block text-bone">
              A sua marca
            </span>
            <span data-manifesto-item className="block">
              ganha presença
              <span className="text-acid" aria-hidden>.</span>
            </span>
          </p>
        </div>

        <p
          data-manifesto-item
          className="r6-body max-w-prose text-muted md:max-w-md"
        >
          Creamos cenografias, stands e experiencias que transforman
          espaços em presença de marca.
        </p>
      </Container>
    </section>
  );
}