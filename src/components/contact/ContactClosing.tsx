import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function ContactClosing() {
  return (
    <section aria-labelledby="contact-closing-heading" className="bg-void">
      <Container className="flex flex-col gap-10 border-t border-line py-16 md:py-20">
        <h2
          id="contact-closing-heading"
          className="r6-story r6-story-xl uppercase text-center"
        >
          <span className="block">Todo projeto</span>
          <span className="block">começa com uma</span>
          <span className="block">primeira ideia<span className="text-acid">.</span></span>
        </h2>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center md:gap-8">
          <Button href="/projetos" variant="primary" className="w-full md:w-auto">
            Ver projetos
          </Button>
          <Button href="/sobre" variant="outline" className="w-full md:w-auto">
            Conhecer a R6
          </Button>
        </div>
      </Container>
    </section>
  );
}