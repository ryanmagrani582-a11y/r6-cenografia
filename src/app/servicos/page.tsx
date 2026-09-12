import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { services } from "@/content/services";

export const metadata: Metadata = { title: "Serviços" };

export default function ServicesPage() {
  return (
    <Container className="r6-section flex flex-col gap-12">
      <PageHeader
        overline="Capacidades — em construção"
        title="Serviços"
        description="Página temporária. Arquitetura de serviços definitiva chega nas próximas etapas."
      />
      <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
        {services.map((service) => (
          <li key={service.slug} className="flex flex-col gap-3 bg-void p-8">
            <h2 className="r6-h3">{service.title}</h2>
            <p className="r6-small text-muted">{service.description}</p>
          </li>
        ))}
      </ul>
      <Link href="/" className="r6-label text-muted hover:text-acid">
        ← Voltar para a Home
      </Link>
    </Container>
  );
}
