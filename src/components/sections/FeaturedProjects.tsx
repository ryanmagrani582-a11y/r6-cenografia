"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, registerGsapPlugins } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Container } from "@/components/ui/Container";
import { featuredProjects } from "@/content/projects";
import type { Project } from "@/types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <article className="group relative grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-700 hover:border-acid/20 md:grid-cols-12">
      <div className={`relative order-1 overflow-hidden md:col-span-7 ${isEven ? "" : "md:order-2"}`}>
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image src={project.coverImage} alt={project.alt ?? project.title} fill sizes="(max-width: 768px) 100vw, 55vw" className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/80 via-void/30 to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
        </div>
        <span className="pointer-events-none absolute -bottom-4 -right-2 text-[7rem] font-black uppercase leading-none text-line/30 transition-all duration-700 group-hover:text-acid/10 md:-bottom-6 md:-right-4 md:text-[9rem]" aria-hidden>{String(index + 1).padStart(2, "0")}</span>
      </div>

      <div className={`relative z-10 flex flex-col justify-between gap-8 p-8 order-2 md:col-span-5 md:p-10 ${isEven ? "" : "md:order-1"}`}>
        <div className="flex flex-col gap-5">
          <span className="r6-overline text-acid flex items-center gap-3" aria-hidden><span className="inline-block h-px w-6 bg-acid" />Cliente</span>
          <h3 className="text-[clamp(1.75rem,3.5vw,2.8rem)] font-black uppercase leading-[0.95] tracking-tight text-bone transition-colors duration-500 group-hover:text-acid">{project.client || "Projeto Confidencial"}</h3>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2"><span className="inline-block h-0.5 w-4 bg-acid/60" aria-hidden /><p className="r6-label text-acid/80">{project.category}</p></div>
          <h4 className="r6-h2 uppercase leading-tight">{project.title}</h4>
          {project.subtitle ? (<p className="r6-body text-muted leading-relaxed max-w-md">{project.subtitle}</p>) : null}
          {project.location ? (<p className="r6-label text-muted/70 uppercase tracking-wider mt-1">{project.location}</p>) : null}
        </div>

        {project.services && project.services.length > 0 ? (
          <div className="flex flex-wrap gap-2">{project.services.slice(0, 3).map((service) => (<span key={service} className="r6-label inline-flex items-center rounded-full border border-line bg-void px-3 py-1 text-xs uppercase tracking-wider text-muted transition-all duration-300 group-hover:border-acid/30 group-hover:text-bone">{service}</span>))}</div>
        ) : null}

        <div className="mt-2"><Link href={`/projetos/${project.slug}`} className="group/cta inline-flex items-center gap-3 text-acid transition-all duration-300 hover:gap-5" aria-label={`Ver projeto ${project.title}`}><span className="r6-label uppercase font-semibold tracking-wider">Explorar case</span><span className="flex h-10 w-10 items-center justify-center rounded-full border border-acid/40 bg-acid/10 transition-all duration-300 group-hover/cta:border-acid group-hover/cta:bg-acid group-hover/cta:text-void"><ArrowUpRight size={16} /></span></Link></div>
      </div>
    </article>
  );
}

export function FeaturedProjects() {
  const rootRef = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;

    registerGsapPlugins();
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-featured-item]");
      for (const el of items) {
        gsap.fromTo(el, { y: 56, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 82%", once: true } });
      }
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section ref={rootRef} aria-label="Projetos destacados" className="bg-void">
      <Container className="flex flex-col gap-16 md:gap-24">
        <header className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-8">
          <div data-featured-item className="flex flex-col gap-4 md:col-span-5">
            <p className="r6-overline flex items-center gap-3 text-acid">
              <span className="inline-block h-px w-8 bg-acid" aria-hidden />
              03 / PROJETOS
            </p>
            <p className="r6-body mt-4 max-w-md text-muted">Cada projeto parte de uma pergunta simples: o que precisa acontecer quando alguém entrar nesse espaço?</p>
          </div>
          <h2 data-featured-item className="r6-story r6-story-lg uppercase md:col-span-7 md:col-start-6">
            <span className="block">Espaços que</span>
            <span className="block">falam antes <span className="text-acid">da marca</span>.</span>
          </h2>
        </header>

        <div className="flex flex-col gap-12 md:gap-20">
          {featuredProjects.map((project, i) => (
            <div key={project.slug} data-featured-item>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>

        <div data-featured-item className="flex items-center justify-center border-t border-line pt-14 md:pt-20">
          <Link href="/projetos" className="group inline-flex items-center gap-4 rounded-full border border-acid/30 bg-acid/5 px-10 py-5 transition-all duration-500 hover:border-acid hover:bg-acid hover:shadow-[0_0_30px_rgba(249,100,35,0.15)]">
            <span className="r6-h3 uppercase font-semibold text-bone group-hover:text-void">Ver todos os projetos</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-acid/20 transition-all duration-300 group-hover:bg-void/20"><ArrowUpRight size={16} className="text-acid group-hover:text-void" /></span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
