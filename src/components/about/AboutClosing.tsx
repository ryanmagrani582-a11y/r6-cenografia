import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ABOUT } from "@/content/about";

export function AboutClosing() {
  return (
    <section aria-labelledby="closing-heading" className="bg-void">
      <Container className="flex flex-col gap-10 border-t border-line pt-16 md:pt-20">
        <h2
          id="closing-heading"
          className="r6-story r6-story-xl uppercase"
        >
          <span className="block">{ABOUT.closing.headline}</span>
        </h2>
        <p className="r6-body-lg max-w-xl text-muted">
          {ABOUT.closing.text}
        </p>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
          <Button href={ABOUT.closing.primaryHref} variant="primary">
            {ABOUT.closing.primaryCta}
          </Button>
          <Link
            href={ABOUT.closing.secondaryHref}
            className="r6-link-underline inline-flex min-h-12 items-center gap-2 text-sm font-medium tracking-[0.12em] uppercase text-bone"
          >
            {ABOUT.closing.secondaryCta}
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}