import { Container } from "@/components/ui/Container";
import { CONTACT } from "@/content/contact";

export function ContactHero() {
  return (
    <section aria-labelledby="contact-hero-heading" className="r6-section bg-void">
      <Container className="flex flex-col gap-12 md:gap-16 max-w-5xl mx-auto">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-6">
            <p className="r6-overline flex items-center gap-3">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-acid"
                aria-hidden
              />
              {CONTACT.hero.index} / {CONTACT.hero.label}
            </p>
            <h1
              id="contact-hero-heading"
              className="r6-story r6-story-xl uppercase"
            >
              <span className="block">{CONTACT.hero.headline.split(" ")[0]}</span>
              <span className="block">{CONTACT.hero.headline.split(" ")[1]}</span>
              <span className="block">{CONTACT.hero.headline.split(" ")[2]}</span>
              <span className="block">
                {CONTACT.hero.headline.split(" ")[3]}
                <span className="text-acid">.</span>
              </span>
            </h1>
            <p className="r6-body-lg max-w-2xl text-muted">
              {CONTACT.hero.text}
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <p className="r6-label text-muted">Assinatura territorial</p>
            <p className="r6-h3 uppercase text-bone">{CONTACT.hero.signature}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}