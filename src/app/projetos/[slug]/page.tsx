import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { getProjectBySlug, getProjectSlugs } from "@/content/projects";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return { title: project ? project.title : "Projeto" };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <Container className="r6-section flex flex-col gap-10">
      <PageHeader
        overline={`${project.category} · ${project.year}`}
        title={project.title}
        description={project.description}
      />
      <dl className="grid gap-6 border-y border-line py-8 sm:grid-cols-2 md:grid-cols-4">
        {[
          ["Cliente", project.client],
          ["Local", project.location],
          ["Ano", project.year],
          ["Serviços", project.services.join(" · ")],
        ].map(([term, value]) => (
          <div key={term} className="flex flex-col gap-2">
            <dt className="r6-overline">{term}</dt>
            <dd className="r6-small text-bone">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="r6-small text-muted">
        Galeria, vídeo e storytelling do case entram nas próximas etapas.
      </p>
      <Link href="/projetos" className="r6-label text-muted hover:text-acid">
        ← Todos os projetos
      </Link>
    </Container>
  );
}
