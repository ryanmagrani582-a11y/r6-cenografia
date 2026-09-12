"use client";

import { useEffect, useRef } from "react";
import { revealOnScroll } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Container } from "@/components/ui/Container";
import type { Project } from "@/types";

const NEUTRAL_INTRO =
  "Uma construção de espaço onde arquitetura, identidade e experiência se encontram.";

export function ProjectIntro({ project }: { project: Project }) {
  const rootRef = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;
    const ctx = revealOnScroll(root, "[data-project-reveal]");
    return () => {
      ctx.revert();
    };
  }, [reduced]);

  return (
    <section
      ref={rootRef}
      aria-labelledby="case-intro-title"
      className="bg-void"
    >
      <Container className="r6-section lg:min-h-[70svh]">
        <p
          data-project-reveal
          className="r6-overline flex items-center gap-3"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-acid" aria-hidden />
          01 / O projeto
        </p>
        <div className="mt-16 grid grid-cols-1 gap-20 md:grid-cols-12 md:gap-0">
          <h2
            id="case-intro-title"
            data-project-reveal
            className="r6-story r6-story-lg uppercase md:col-span-8"
          >
            <span className="block">Uma experiência</span>
            <span className="block">pensada para</span>
            <span className="block">
              gerar presença<span className="text-acid" aria-hidden>.</span>
            </span>
          </h2>
          <div className="md:col-span-4" aria-hidden />
        </div>
        <div data-project-reveal className="mt-16 flex justify-end">
          <p className="r6-body max-w-prose text-muted md:max-w-md">
            {project.description !== "" ? project.description : NEUTRAL_INTRO}
          </p>
        </div>
      </Container>
    </section>
  );
}