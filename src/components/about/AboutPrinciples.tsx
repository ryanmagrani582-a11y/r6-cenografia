import { Container } from "@/components/ui/Container";
import { ABOUT } from "@/content/about";

export function AboutPrinciples() {
  return (
    <section aria-labelledby="principles-heading" className="r6-section bg-coal">
      <Container className="flex flex-col gap-12 md:gap-16">
        <header className="grid gap-8 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <h2 id="principles-heading" className="r6-story r6-story-lg uppercase">
              <span className="block">Experiência</span>
              <span className="block">antes de</span>
              <span className="block">excesso<span className="text-acid">.</span></span>
            </h2>
          </div>
          <p className="r6-body-lg max-w-md text-muted md:col-span-7 md:col-start-6">
            Uma boa cenografia não precisa dizer tudo. Ela precisa saber o que deve
            ser percebido primeiro.
          </p>
        </header>
        <ul className="grid grid-cols-2 gap-px overflow-hidden border-y border-line md:grid-cols-4">
          {ABOUT.principles.map((principle, index) => (
            <li
              key={principle}
              className="group flex min-h-28 items-end bg-void p-6 transition-colors duration-300 hover:bg-surface md:min-h-40 md:p-8"
            >
              <span className="flex w-full items-baseline justify-between gap-3">
                <span
                  className={
                    index === 0
                      ? "r6-h3 uppercase text-acid"
                      : "r6-h3 uppercase text-bone"
                  }
                >
                  {principle}
                </span>
                <span className="r6-overline text-muted" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}