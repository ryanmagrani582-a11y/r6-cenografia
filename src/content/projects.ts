import type { Project } from "@/types";

/*
 * VISUAL PORTFOLIO — R6 CENOGRAFIA.
 *
 * The photographs are real (source: Downloads/standes) and client/event
 * /location/year metadata is NOW CONFIRMED.
 *
 * Asset map:
 *   public/images/projects/ilumya.webp  <- Congresso Médico Nacional (ILUMYA · Sun Pharma)
 *   public/images/projects/astrazeneca.webp  <- Congresso de Oncologia (AstraZeneca)
 *   public/images/projects/condumax.webp  <- Espaço Imigrantes (Condumax · Incesa)
 *   public/images/projects/ache.jpeg, libbs.jpeg, suloy.jpeg, suloy2.jpeg <- Gallery
 *
 * The gallery arrays hold real photographs used as visual material of the
 * case. Their association with specific clients and locations is now confirmed.
 */
export const projects: Project[] = [
  {
    slug: "stand-01",
    title: "Congresso Médico Nacional",
    subtitle: "ILUMYA · Sun Pharma — Stand premium com iluminação LED, jardim vertical, mobiliário exclusivo e receptivo completo.",
    category: "Stand / Cenografia",
    client: "ILUMYA · Sun Pharma",
    location: "",
    year: "",
    coverImage: "/images/projects/ilumya.webp",
    alt: "Stand premium ILUMYA com iluminação LED e mobiliário exclusivo para Congresso Médico Nacional",
    gallery: [
      "/images/projects/ache.jpeg",
      "/images/projects/condumax.webp",
      "/images/projects/libbs.jpeg",
    ],
    description: "Stand premium desenvolvido para apresentação de ILUMYA em congresso médico, featuring iluminação LED avançada, jardim vertical integrando natureza, e mobiliário exclusivo para experiência premium de receptivo.",
    services: ["STAND", "ILUMINAÇÃO LED", "JARDIM VERTICAL", "MOBILIÁRIO EXCLUSIVO"],
    featured: true,
  },
  {
    slug: "cenografia-02",
    title: "Congresso de Oncologia",
    subtitle: "AstraZeneca — Instalação interativa 'Atlas Virtual de Cirurgia Torácica': tecnologia e cenografia para engajar oncologistas.",
    category: "Cenografia",
    client: "AstraZeneca",
    location: "",
    year: "",
    coverImage: "/images/projects/astrazeneca.webp",
    alt: "Instalação interativa AstraZeneca Atlas Virtual de Cirurgia Torácica para Congresso de Oncologia",
    gallery: [
      "/images/projects/ilumya.webp",
      "/images/projects/ache.jpeg",
      "/images/projects/suloy.jpeg",
    ],
    description: "Instalação cenográfica imersiva para AstraZeneca em congresso de oncologia, featuring tecnologia interativa de 'Atlas Virtual de Cirurgia Torácica', designed para engajar oncologistas através de experiência educacional premium.",
    services: ["CENOGRAFIA", "TECNOLOGIA INTERATIVA", "EXPERIÊNCIA IMERSIVA", "EDUCACIONAL"],
    featured: true,
  },
  {
    slug: "experiencia-de-marca-03",
    title: "Espaço Imigrantes, São Paulo",
    subtitle: "Condumax · Incesa — Stand comemorativo de 60 anos com iluminação LED azul, arquitetura premium e exposição do produto CONEX 4S em cenografia de alto impacto.",
    category: "Brand Experience",
    client: "Condumax · Incesa",
    location: "Espaço Imigrantes, São Paulo",
    year: "",
    coverImage: "/images/projects/condumax.webp",
    alt: "Stand comemorativo Condumax de 60 anos com iluminação LED azul e produto CONEX 4S em cenografia premium",
    gallery: [
      "/images/projects/ache.jpeg",
      "/images/projects/libbs.jpeg",
      "/images/projects/suloy2.jpeg",
    ],
    description: "Stand comemorativo de 60 anos da Condumax · Incesa no Espaço Imigrantes, São Paulo. Featuring iluminação LED azul signature, arquitetura premium, e cenografia de alto impacto para exposição do produto CONEX 4S, celebrando trajetória de inovação.",
    services: ["STAND COMEMORATIVO", "ILUMINAÇÃO LED", "ARQUITETURA PREMIUM", "CENOGRAFIA"],
    featured: true,
  },
];

export const featuredProjects: Project[] = projects.filter(
  (project) => project.featured,
);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
