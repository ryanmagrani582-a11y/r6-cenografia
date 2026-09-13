import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ABOUT } from "@/content/about";

export function AboutGroup() {
  return (
    <section aria-labelledby="group-heading" className="r6-section bg-coal">
      <Container className="flex flex-col gap-12 md:gap-16">
        <header className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <SectionLabel index={ABOUT.group.index} label={ABOUT.group.label} />
            <h2
              id="group-heading"
              className="r6-story r6-story-lg mt-10 uppercase"
            >
              <span className="block">Uma força que</span>
              <span className="block">vai além<span className="text-acid">.</span></span>
            </h2>
          </div>
          <p className="r6-body-lg max-w-md text-muted md:col-span-5 md:col-start-8">
            {ABOUT.group.text}
          </p>
        </header>
        <Link
          href={ABOUT.group.href}
          className="r6-link-underline inline-flex min-h-12 items-center gap-2 text-sm font-medium tracking-[0.12em] uppercase text-bone"
        >
          {ABOUT.group.cta}
          <ArrowUpRight size={16} aria-hidden />
        </Link>
      </Container>
    </section>
  );
}