import { Container } from "@/components/ui/Container";
import { ABOUT } from "@/content/about";

export function AboutHero() {
  return (
    <section aria-labelledby="about-heading" className="bg-void">
      <Container className="flex min-h-[80svh] flex-col justify-end gap-8 py-20 md:py-28">
        <p className="r6-overline flex items-center gap-3">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full bg-acid"
            aria-hidden
          />
          {ABOUT.hero.tagline}
        </p>
        <h1
          id="about-heading"
          className="r6-story r6-story-xl uppercase md:max-w-4xl"
        >
          <span className="block">Espaços que</span>
          <span className="block">constroem</span>
          <span className="block">presença<span className="text-acid">.</span></span>
        </h1>
        <div className="flex flex-col gap-6 border-t border-bone/15 pt-6 md:flex-row md:items-end md:justify-between">
          <p className="r6-body-lg max-w-2xl text-muted">
            {ABOUT.hero.text}
          </p>
          <p className="r6-label text-bone">{ABOUT.hero.signature}</p>
        </div>
      </Container>
    </section>
  );
}