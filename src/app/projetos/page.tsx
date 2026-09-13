import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { projects } from "@/content/projects";

export const metadata: Metadata = { title: "Projetos" };

export default function ProjectsPage() {
  return (
    <Container className="r6-section flex flex-col gap-12">
      <PageHeader
        overline="Índice"
        title="Projetos"
        description="Cada projeto parte de uma pergunta simples: o que precisa acontecer quando alguém entrar nesse espaço?"
      />
      <ul className="divide-y divide-line border-y border-line">
        {projects.map((project) => (
          <li key={project.slug} className="py-6">
            <Link
              href={`/projetos/${project.slug}`}
              className="group flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between"
            >
              <span className="r6-h3 transition-colors group-hover:text-acid">
                {project.title}
              </span>
              <span className="r6-small flex items-center gap-2 text-muted">
                {project.location} · {project.year}
                <ArrowUpRight
                  size={14}
                  aria-hidden
                  className="transition-colors group-hover:text-acid"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/" className="r6-label text-muted hover:text-acid">
        ← Voltar para a Home
      </Link>
    </Container>
  );
}
