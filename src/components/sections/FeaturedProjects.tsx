"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, registerGsapPlugins } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { featuredProjects } from "@/content/projects";
import type { Project } from "@/types";

const ASPECTS = ["aspect-[4/3]", "aspect-[3/4]", "aspect-[21/9]"];

function ProjectMedia({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/projetos/${project.slug}`}
      aria-label={`${project.title} — ${project.subtitle || project.category}`}
      className="group relative block w-full overflow-hidden focus-visible:outline-acid"
    >
      <span className={cn("block w-full", ASPECTS[index % ASPECTS.length])}>
        <Image
          src={project.coverImage}
          alt={project.alt ?? project.title}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </span>
      <span
        aria-hidden
        className="absolute inset-0 flex items-center justify-center bg-void/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100"
      >
        <span className="r6-label inline-flex translate-y-4 items-center justify-center gap-2 rounded-full border border-bone/40 px-5 py-2 text-bone transition-transform duration-500 group-hover:translate-y-0 group-focus-within:translate-y-0">
          Ver proyecto <ArrowUpRight size={14} />
        </span>
      </span>
    </Link>
  );
}

function ProjectMeta({ project, index }: { project: Project; index: number }) {
  return (
    <div className="flex flex-col gap-5">
      <p className="r6-overline flex items-center gap-3">
        <span className="r6-project-index" aria-hidden>
          {String(index + 1).padStart(2, "0")}
        </span>
        {project.category}
      </p>
      <h3 className="r6-project-title">{project.title}</h3>
      {project.subtitle ? (
        <p className="r6-body text-muted">{project.subtitle}</p>
      ) : null}
    </div>
  );
}

/**
 * Portafolio editorial — composición asimétrica sobre grid de 12 columnas.
 */
export function FeaturedProjects() {
  const rootRef = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;

    registerGsapPlugins();
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(
        "[data-featured-item]",
      );
      for (const el of items) {
        gsap.fromTo(
          el,
          { y: 44, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
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
      aria-label="Projetos destacados"
      className="bg-void"
    >
      <Container className="flex flex-col gap-14 md:gap-20">
        <header className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div data-featured-item className="flex flex-col gap-3 md:col-span-4 md:row-span-2 md:row-start-1">
            <p className="r6-overline flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-acid" aria-hidden />
              01 / Projetos
            </p>
            <p data-featured-item className="r6-body mt-8 text-muted md:mt-10">
              Cada espaço nasce para ocupar o lugar certo, criar presença
              e fazer que uma marca seja percebida.
            </p>
          </div>
          <h2
            data-featured-item
            className="r6-story r6-story-lg uppercase md:col-span-8 md:col-start-6"
          >
            <span className="block">Espaços que</span>
            <span className="block">falam antes</span>
            <span className="block">da marca.</span>
          </h2>
        </header>

        {featuredProjects.map((project, i) => {
          const flipped = i === 1;
          const panoramic = i === 2;
          return (
            <div
              key={project.slug}
              data-featured-item
              className={
                panoramic
                  ? "flex flex-col gap-8"
                  : "flex flex-col gap-8 md:flex-row md:items-center md:gap-12"
              }
            >
              <div className={panoramic ? "" : flipped ? "md:order-2 md:w-7/12" : "md:w-7/12"}>
                <ProjectMedia project={project} index={i} />
              </div>
              <div className={panoramic ? "" : flipped ? "md:order-1 md:w-5/12" : "md:w-5/12"}>
                <ProjectMeta project={project} index={i} />
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}