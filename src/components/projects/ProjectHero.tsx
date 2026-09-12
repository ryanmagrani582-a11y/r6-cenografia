"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, registerGsapPlugins } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Container } from "@/components/ui/Container";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import type { Project } from "@/types";

type ProjectHeroProps = {
  project: Project;
  index: number;
};

export function ProjectHero({ project, index }: ProjectHeroProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const image = project.heroImage ?? project.coverImage;

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;

    registerGsapPlugins();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-case-hero-media]",
        { scale: 1.08 },
        { scale: 1, duration: 1.8, ease: "power2.out" },
        0,
      )
        .fromTo(
          "[data-case-hero-veil]",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 1 },
          0.1,
        )
        .fromTo(
          "[data-case-hero-label]",
          { y: 18, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7 },
          0.3,
        )
        .fromTo(
          "[data-case-hero-line]",
          { y: 80, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            stagger: 0.12,
            ease: "power4.out",
          },
          0.4,
        )
        .fromTo(
          "[data-case-hero-meta]",
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7 },
          1,
        )
        .fromTo(
          "[data-case-hero-scroll]",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.8 },
          1.15,
        );
    }, root);

    const scrollTweens = [
      gsap.to("[data-case-hero-media]", {
        yPercent: 9,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }),
    ];

    return () => {
      for (const t of scrollTweens) {
        t.scrollTrigger?.kill();
        t.kill();
      }
      ctx.revert();
    };
  }, [reduced, image]);

  return (
    <section
      ref={rootRef}
      aria-label={`${project.title} — R6 Cenografia`}
      className="relative -mt-20 flex min-h-[100svh] flex-col overflow-clip md:-mt-24"
    >
      <div className="absolute inset-0" aria-hidden>
        <div data-case-hero-media className="h-full w-full will-change-transform">
          <Image
            src={image}
            alt={project.alt ?? project.title}
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={85}
            className="r6-hero-img object-cover"
          />
        </div>
        <div data-case-hero-veil className="r6-project-veil absolute inset-0" aria-hidden />
        <div
          className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-void/60 to-transparent"
          aria-hidden
        />
      </div>

      <Container className="relative flex flex-1 flex-col justify-end pb-10 pt-32 md:pb-12">
        <p
          data-case-hero-label
          className="r6-overline flex items-center gap-3 text-bone/80"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-acid" aria-hidden />
          R6 Cenografia / Projeto {String(index + 1).padStart(2, "0")}
        </p>
        <h1 data-case-hero-line className="r6-project-hero-title mt-6 uppercase">
          {project.title}
        </h1>
        {project.subtitle ? (
          <p data-case-hero-meta className="r6-body-lg mt-4 max-w-2xl text-bone/80">
            {project.subtitle}
          </p>
        ) : null}
      </Container>

      <div
        data-case-hero-scroll
        className="pointer-events-none absolute bottom-8 right-6 hidden lg:block xl:right-12"
      >
        <ScrollIndicator />
      </div>
    </section>
  );
}