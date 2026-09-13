"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, registerGsapPlugins } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Container } from "@/components/ui/Container";

/**
 * Manifesto — layout editorial lado a lado.
 * Imagem ao lado do texto, sem cortes, mantendo a identidade premium.
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
      className="bg-void py-16 md:py-24"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 md:items-center">
          {/* Imagem */}
          <div
            data-manifesto-item
            className="relative aspect-[4/3] overflow-hidden rounded-sm bg-coal"
          >
            <Image
              src="/images/projects/novatrigook.jpg"
              alt="Stand premium R6 Cenografia — experiência espacial"
              fill
              quality={90}
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-6">
            <p
              data-manifesto-item
              className="r6-overline flex items-center gap-2"
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-acid"
                aria-hidden
              />
              R6 / Manifesto
            </p>

            <h2 className="r6-story r6-story-xl uppercase">
              <span data-manifesto-item className="block">
                Um espaço pode
              </span>
              <span data-manifesto-item className="block">
                ser bonito.
              </span>
            </h2>

            <div>
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
              className="r6-body max-w-prose text-muted"
            >
              Na R6, arquitetura, identidade e experiência trabalham juntas para criar espaços que fazem uma marca ser percebida antes mesmo de ser apresentada.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}