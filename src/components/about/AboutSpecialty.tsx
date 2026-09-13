import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ABOUT } from "@/content/about";

export function AboutSpecialty() {
  return (
    <section aria-labelledby="specialty-heading" className="r6-section bg-void">
      <Container className="flex flex-col gap-12 md:gap-16">
        <header className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <SectionLabel index={ABOUT.specialty.index} label={ABOUT.specialty.label} />
            <h2
              id="specialty-heading"
              className="r6-story r6-story-lg mt-10 uppercase"
            >
              <span className="block">Cenografia</span>
              <span className="block">como experiência<span className="text-acid">.</span></span>
            </h2>
          </div>
          <p className="r6-body-lg max-w-md text-muted md:col-span-5 md:col-start-8">
            {ABOUT.specialty.text}
          </p>
        </header>
        <ul className="border-t border-line md:border-b">
          {ABOUT.specialty.services.map((service, index) => (
            <li
              key={service}
              className="flex items-baseline justify-between gap-6 border-b border-line py-6 last:border-b-0 md:grid md:grid-cols-12 md:gap-8 md:py-8"
            >
              <span className="r6-overline text-acid" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="r6-story r6-story-md flex-1 uppercase md:col-span-9 md:col-start-3">
                {service}
              </span>
              <span className="r6-label text-muted md:col-span-2 md:col-start-12 md:text-right">
                Especialidade
              </span>
            </li>
          ))}
        </ul>
        <Link
          href="/servicos"
          className="r6-link-underline inline-flex min-h-12 items-center gap-2 text-sm font-medium tracking-[0.12em] uppercase text-bone"
        >
          Ver especialidades
          <ArrowUpRight size={16} aria-hidden />
        </Link>
      </Container>
    </section>
  );
}