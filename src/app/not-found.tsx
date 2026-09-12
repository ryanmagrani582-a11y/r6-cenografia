import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Página não encontrada" };

export default function NotFound() {
  return (
    <Container className="r6-section flex flex-col gap-6">
      <p className="r6-overline">Erro 404</p>
      <h1 className="r6-h1">Página não encontrada.</h1>
      <Link href="/" className="r6-label text-muted hover:text-acid">
        ← Voltar para a Home
      </Link>
    </Container>
  );
}
