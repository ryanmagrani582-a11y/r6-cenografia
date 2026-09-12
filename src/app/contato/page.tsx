import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { COMPANY } from "@/content/company";

export const metadata: Metadata = { title: "Contato" };

export default function ContactPage() {
  return (
    <Container className="r6-section flex flex-col gap-10">
      <PageHeader
        overline="Contato — em construção"
        title="Vamos construir a experiência?"
        description="Página temporária. Formulário, mapa e canais oficiais entram nas próximas etapas."
      />
      <address className="r6-body flex flex-col gap-2 not-italic text-muted">
        <span>
          {COMPANY.address} · {COMPANY.city} — {COMPANY.state}
        </span>
        <span>TODO: e-mail e telefone reais pendentes do cliente.</span>
      </address>
      <Link href="/" className="r6-label text-muted hover:text-acid">
        ← Voltar para a Home
      </Link>
    </Container>
  );
}
