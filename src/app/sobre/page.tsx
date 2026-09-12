import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { COMPANY } from "@/content/company";

export const metadata: Metadata = { title: "Sobre" };

export default function AboutPage() {
  return (
    <Container className="r6-section flex flex-col gap-10">
      <PageHeader
        overline={`${COMPANY.city} · ${COMPANY.state} · ${COMPANY.region}`}
        title="Sobre a R6"
        description={`${COMPANY.name}, parte do ${COMPANY.group}. ${COMPANY.tagline} Página temporária — manifesto e storytelling entram nas próximas etapas.`}
      />
      <Link href="/" className="r6-label text-muted hover:text-acid">
        ← Voltar para a Home
      </Link>
    </Container>
  );
}
