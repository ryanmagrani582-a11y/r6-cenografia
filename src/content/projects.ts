import type { Project } from "@/types";

/*
 * VISUAL PORTFOLIO — R6 CENOGRAFIA.
 *
 * The photographs are real (source: Downloads/standes) but client/event
 * /location/year metadata is NOT yet confirmed. Empty fields are prepared
 * to be filled in a later stage. Never invent brand data.
 *
 * Asset map (neutral names so client brands are not exposed in URLs):
 *   public/images/projects/r6-project-01.jpg  <- dinamarca.jpeg
 *   public/images/projects/r6-project-02.jpg  <- suloy2.jpeg
 *   public/images/projects/r6-project-03.jpg  <- suloy.jpeg
 *   public/images/projects/r6-gallery-01.jpg  <- WhatsApp Image ... 48.jpeg
 *   public/images/projects/r6-gallery-02.jpg  <- ache.jpeg
 *   public/images/projects/r6-gallery-03.jpg  <- libbs.jpeg
 *
 * The `gallery` arrays hold real photographs used as visual material of the
 * case. Their association with a specific client is NOT confirmed, so they
 * should never be described as a specific event/brand in copy.
 */
export const projects: Project[] = [
  {
    slug: "stand-01",
    title: "Stand",
    subtitle: "Instalação cenográfica em ambiente de feira",
    category: "Stand / Cenografia",
    client: "",
    location: "",
    year: "",
    coverImage: "/images/projects/r6-project-01.jpg",
    alt: "Stand cenográfico em ambiente de feira",
    gallery: [
      "/images/projects/r6-gallery-01.jpg",
      "/images/projects/r6-project-03.jpg",
      "/images/projects/r6-gallery-02.jpg",
    ],
    description: "",
    services: [],
    featured: true,
  },
  {
    slug: "cenografia-02",
    title: "Cenografia",
    subtitle: "Espaço escénico para marca",
    category: "Cenografia",
    client: "",
    location: "",
    year: "",
    coverImage: "/images/projects/r6-project-02.jpg",
    alt: "Espaço escénico construido para uma marca",
    gallery: [
      "/images/projects/r6-project-01.jpg",
      "/images/projects/r6-gallery-01.jpg",
      "/images/projects/r6-gallery-03.jpg",
    ],
    description: "",
    services: [],
    featured: true,
  },
  {
    slug: "experiencia-de-marca-03",
    title: "Experiencia de marca",
    subtitle: "Presencia construida para marca",
    category: "Brand Experience",
    client: "",
    location: "",
    year: "",
    coverImage: "/images/projects/r6-project-03.jpg",
    alt: "Instalação de marca com cenografia de gran escala",
    gallery: [
      "/images/projects/r6-gallery-01.jpg",
      "/images/projects/r6-gallery-02.jpg",
      "/images/projects/r6-gallery-03.jpg",
    ],
    description: "",
    services: [],
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