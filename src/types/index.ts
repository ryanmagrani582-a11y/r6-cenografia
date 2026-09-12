export interface SocialLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Company {
  name: string;
  group: string;
  tagline: string;
  city: string;
  state: string;
  region: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  socials: SocialLink[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  location: string;
  year: string;
  coverImage: string;
  /** Imagen específica para el hero del case (opcional). */
  heroImage?: string;
  /** Alt text descriptivo neutro. */
  alt?: string;
  gallery: string[];
  video?: string;
  description: string;
  challenge?: string;
  concept?: string;
  execution?: string;
  services: string[];
  /** Proyectos destacados en la Home. */
  featured?: boolean;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
}

export interface BaseLocation {
  city: string;
  state: string;
  region: string;
  country: string;
  isHeadquarters?: boolean;
}
