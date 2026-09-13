import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ABOUT } from "@/content/about";

export function AboutManifesto() {
  return (
    <section aria-labelledby="about-manifesto-heading" className="r6-section bg-void">
      <Container className="flex flex-col gap-12 md:gap-16">
        <SectionLabel index={ABOUT.manifesto.index} label={ABOUT.manifesto.label} />
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <h2
            id="about-manifesto-heading"
            className="r6-story r6-story-lg uppercase md:col-span-8"
          >
            <span className="block">Não criamos</span>
            <span className="block">apenas espaços.</span>
          </h2>
          <div className="md:col-span-4 md:col-start-9">
            <p className="r6-story r6-story-md uppercase">
              <span className="block">Criamos a forma</span>
              <span className="block">como uma marca</span>
              <span className="block">é percebida<span className="text-acid">.</span></span>
            </p>
          </div>
        </div>
        <p className="r6-body-lg max-w-2xl text-muted md:pl-[12vw]">
          {ABOUT.manifesto.text}
        </p>
      </Container>
    </section>
  );
}