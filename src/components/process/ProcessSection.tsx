"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap, registerGsapPlugins } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { processSteps } from "@/content/process";

export function ProcessSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;

    registerGsapPlugins();
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-process-item]");
      const line = gsap.utils.toArray<HTMLElement>("[data-process-line]");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 72%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        "[data-process-label]",
        { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.7 },
      )
        .fromTo(
          "[data-process-headline]",
          { y: 40, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1 },
          "-=0.4",
        )
        .fromTo(
          "[data-process-support]",
          { y: 24, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8 },
          "-=0.6",
        )
        .fromTo(
          line,
          { scaleX: 0 },
          { scaleX: 1, duration: 1.4, ease: "power2.inOut" },
          "-=0.4",
        );

      items.forEach((item) => {
        tl.fromTo(
          item,
          { y: 36, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8 },
          "-=0.95",
        );
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={rootRef}
      aria-labelledby="process-heading"
      className="r6-section bg-coal"
    >
      <Container className="flex flex-col gap-16 md:gap-20">
        <header className="flex flex-col gap-6 md:gap-8">
          <SectionLabel
            index="05"
            label="Processo"
            className="data-process-label"
          />
          <p className="r6-label text-muted">Como pensamos cada projeto</p>
          <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-8">
            <h2
              id="process-heading"
              data-process-headline
              className="r6-story r6-story-lg uppercase md:col-span-8"
            >
              <span className="block">Do conceito</span>
              <span className="block">
                à experiência<span className="text-acid">.</span>
              </span>
            </h2>
            <p
              data-process-support
              className="r6-body-lg max-w-md text-muted md:col-span-4 md:col-start-9"
            >
              Cada projeto nasce de uma ideia e ganha forma através de uma
              construção que conecta conceito, design, produção e montagem.
            </p>
          </div>
        </header>

        <div className="relative">
          <div
            data-process-line
            className="absolute left-0 top-7 h-px w-full bg-line origin-left md:top-1/2 md:-translate-y-1/2"
            aria-hidden
          />
          <ol className="relative flex flex-col gap-12 md:grid md:grid-cols-5 md:gap-8 md:pt-16">
            {processSteps.map((step, index) => (
              <li
                key={step.index}
                data-process-item
                className="relative flex flex-col gap-4 pt-12 md:pt-0"
              >
                <span className="r6-overline text-acid" aria-hidden>
                  {step.index}
                </span>
                <h3 className="r6-h3 uppercase">{step.title}</h3>
                <p className="r6-body text-muted">{step.description}</p>
                {index < processSteps.length - 1 ? (
                  <span className="hidden h-px w-8 bg-line md:block" aria-hidden />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </Container>
      <Container className="mt-16 md:mt-20">
        <div className="flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between md:gap-8">
          <p className="r6-body-lg max-w-xl">
            <span className="block uppercase">Grandes experiências</span>
            <span className="block uppercase">começam com uma boa direção.</span>
          </p>
          <Link
            href="/sobre"
            className="r6-link-underline inline-flex min-h-12 items-center gap-2 text-sm font-medium tracking-[0.12em] uppercase text-bone"
          >
            Conheça a R6
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}