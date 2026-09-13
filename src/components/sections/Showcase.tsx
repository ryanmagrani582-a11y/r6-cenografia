"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, registerGsapPlugins } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ArrowUpRight } from "lucide-react";

/**
 * Showcase — full-bleed editorial com parallax sutil.
 * Imagem do stand ILUMYA como peça central de impacto visual.
 */
export function Showcase() {
  const rootRef = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;

    registerGsapPlugins();
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-showcase-item]");
      for (const el of items) {
        gsap.fromTo(
          el,
          { y: 60, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 75%",
              once: true,
            },
          },
        );
      }

      const img = root.querySelector("[data-showcase-img]");
      if (img) {
        gsap.fromTo(
          img,
          { scale: 1.15 },
          {
            scale: 1,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: root,
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
      aria-label="Showcase R6 Cenografia"
      className="relative overflow-hidden bg-void"
    >
      {/* Imagem full-bleed com overlay */}
      <div className="relative h-[80vh] min-h-[500px] w-full md:h-[90vh]">
        <Image
          src="/images/projects/acheok.jpg"
          alt="Stand premium R6 Cenografia — ILUMYA Sun Pharma"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          data-showcase-img
        />

        {/* Overlay gradiente editorial */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-void/60 via-transparent to-transparent"
          aria-hidden
        />

        {/* Conteúdo editorial sobreposto */}
        <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24">
          <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
            <div className="max-w-xl">
              <p
                data-showcase-item
                className="r6-overline mb-4 flex items-center gap-2"
              >
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-acid"
                  aria-hidden
                />
                Em destaque
              </p>

              <h2
                data-showcase-item
                className="r6-story r6-story-xl uppercase"
              >
                <span className="block">Quando o espaço</span>
                <span className="block">
                  fala pela <span className="text-acid">marca.</span>
                </span>
              </h2>

              <p
                data-showcase-item
                className="r6-body mt-5 max-w-md text-muted"
              >
                Iluminação, material e forma trabalhando juntos para criar uma experiência que permanece.
              </p>

              <Link
                href="/projetos"
                data-showcase-item
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full border border-line bg-void/80 px-7 text-sm font-medium tracking-[0.12em] text-bone backdrop-blur-sm transition-all duration-300 hover:border-acid hover:text-acid focus-visible:outline-acid active:scale-[0.98]"
              >
                Explorar projetos
                <ArrowUpRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
