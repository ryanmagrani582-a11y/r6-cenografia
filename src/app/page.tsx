import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Container } from "@/components/ui/Container";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <FeaturedProjects />
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
            Próximo paso
          </p>
          <h2 className="r6-story r6-story-lg uppercase">
            <span className="block">Quer ver mais?</span>
          </h2>
          <p className="r6-body-lg text-muted">Explora todos nossos projetos.</p>
          <Link
            href="/projetos"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-transparent px-8 text-sm font-medium tracking-[0.12em] text-bone transition-all duration-300 hover:border-acid hover:text-acid focus-visible:outline-acid active:scale-[0.98]"
          >
            Ver todos os projetos
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </Container>
      </section>
    </>
  );
}

