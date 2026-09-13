import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { COMPANY } from "@/content/company";
import { HEADQUARTERS } from "@/content/locations";

export const metadata: Metadata = {
  title: "Território — R6 CENOGRAFIA",
  description:
    "O Nordeste é nosso território. Salvador, Bahia e a conexão com o R GROUP.",
};

export default function TerritoryPage() {
  return (
    <Container className="r6-section flex flex-col gap-10">
      <PageHeader
        overline="04 / Território"
        title="O Nordeste é nosso território."
        description="Com Salvador como ponto de partida, a R6 constrói sua atuação a partir de um território que conhece, entende e transforma em experiência."
      />
      <p className="r6-body text-muted">
        Sede em {HEADQUARTERS.city} — {HEADQUARTERS.state}, {HEADQUARTERS.region},{" "}
        {HEADQUARTERS.country}.
      </p>
      <Link href="/" className="r6-label text-muted hover:text-acid">
        ← Voltar para a Home
      </Link>
    </Container>
  );
}