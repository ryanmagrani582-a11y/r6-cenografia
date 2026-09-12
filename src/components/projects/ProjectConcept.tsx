"use client";

import { useEffect, useRef } from "react";
import { revealOnScroll } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Container } from "@/components/ui/Container";

const PILLARS = [
  { term: "Forma", text: "Composição e proporção." },
  { term: "Escala", text: "Presença visual e ritmo." },
  { term: "Presença", text: "Identidade que ocupa o espaço." },
] as const;

export function ProjectConcept() {
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
      aria-labelledby="case-concept-title"
      className="bg-coal"
    >
      <Container className="r6-section flex flex-col gap-14">
        <p data-project-reveal className="r6-overline flex items-center gap-3">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-acid" aria-hidden />
          02 / Conceito
        </p>
        <h2
          id="case-concept-title"
          data-project-reveal
          className="r6-story r6-story-lg uppercase"
        >
          <span className="block">Forma, escala</span>
          <span className="block">
            e presença<span className="text-acid" aria-hidden>.</span>
          </span>
        </h2>
        <p data-project-reveal className="r6-body max-w-prose text-muted md:max-w-lg">
          Cada elemento participa da construção di una presença di marca:
          la misura, il ritmo e il modo in cui lo spazio si lascia
          attraversare.
        </p>
        <ul className="flex flex-col border-y border-line md:flex-row">
          {PILLARS.map((pillar) => (
            <li
              key={pillar.term}
              data-project-reveal
              className="flex flex-1 flex-col gap-3 py-8 md:px-8"
            >
              <span className="r6-overline text-acid" aria-hidden>
                {String(PILLARS.indexOf(pillar) + 1).padStart(2, "0")}
              </span>
              <h3 className="r6-h3 uppercase">{pillar.term}</h3>
              <p className="r6-small text-muted">{pillar.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}