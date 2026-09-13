import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ProcessSection } from "@/components/process/ProcessSection";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutManifesto } from "@/components/about/AboutManifesto";
import { AboutPrinciples } from "@/components/about/AboutPrinciples";
import { AboutSpecialty } from "@/components/about/AboutSpecialty";
import { AboutTerritory } from "@/components/about/AboutTerritory";
import { AboutGroup } from "@/components/about/AboutGroup";
import { AboutClosing } from "@/components/about/AboutClosing";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <FeaturedProjects />
      <ProcessSection />
      <section
        aria-label="Explorar projetos"
        className="border-t border-line bg-coal"
      >
        <Container className="flex flex-col items-start gap-8 py-24 md:py-32">
          <p className="r6-overline flex items-center gap-3">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-acid"
              aria-hidden
            />
            Próximo passo
          </p>
          <h2 className="r6-story r6-story-lg uppercase">
            <span className="block">Quer ver mais?</span>
          </h2>
          <p className="r6-body-lg text-muted">
            Explora todos nossos projetos.
          </p>
          <Link
            href="/projetos"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-transparent px-8 text-sm font-medium tracking-[0.12em] text-bone transition-all duration-300 hover:border-acid hover:text-acid focus-visible:outline-acid active:scale-[0.98]"
          >
            Ver todos os projetos
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </Container>
      </section>
      <AboutHero />
      <AboutManifesto />
      <AboutPrinciples />
      <AboutSpecialty />
      <AboutTerritory />
      <AboutGroup />
      <AboutClosing />
    </>
  );
}

