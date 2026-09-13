"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, registerGsapPlugins } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

/**
 * Showcase — layout editorial lado a lado.
 * Imagem do stand ILUMYA ao lado do texto, sem cortes.
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
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 78%",
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
      className="bg-void py-16 md:py-24"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 md:items-center">
          {/* Imagem */}
          <div
            data-showcase-item
            className="relative aspect-[4/3] overflow-hidden rounded-sm bg-coal"
          >
            <Image
              src="/images/projects/acheila.png"
              alt="Stand R6 Cenografia"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              className="object-cover"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-6">
            <p
              data-showcase-item
              className="r6-overline flex items-center gap-2"
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-acid"
                aria-hidden
              />
              Em destaque
            </p>

            <h2
              data-showcase-item
              className="r6-story r6-story-lg uppercase"
            >
              <span className="block">Quando o espaço</span>
              <span className="block">
                fala pela <span className="text-acid">marca.</span>
              </span>
            </h2>

            <p
              data-showcase-item
              className="r6-body text-muted"
            >
              Iluminação, material e forma trabalhando juntos para criar uma experiência que permanece.
            </p>

            <Link
              href="/projetos"
              data-showcase-item
              className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full border border-line bg-transparent px-7 text-sm font-medium tracking-[0.12em] text-bone transition-all duration-300 hover:border-acid hover:text-acid focus-visible:outline-acid active:scale-[0.98]"
            >
              Explorar projetos
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
