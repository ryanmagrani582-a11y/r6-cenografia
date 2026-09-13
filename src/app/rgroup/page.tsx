import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/content/company";

export const metadata = {
  title: "R GROUP — R6 CENOGRAFIA",
  description:
    "A R6 Cenografia integra o R GROUP, conectando sua especialização em experiências espaciais a uma estrutura mais ampla.",
};

export default function RGroupPage() {
  return (
    <Container className="r6-section flex flex-col gap-10">
      <h1 className="r6-h1 uppercase">R GROUP</h1>
      <p className="r6-body-lg text-muted max-w-2xl">
        A R6 integra o {COMPANY.group}, conectando sua especialidade em
        cenografia a uma estrutura maior.
      </p>
      <Link href="/" className="r6-label text-muted hover:text-acid">
        ← Voltar para a Home
      </Link>
    </Container>
  );
}