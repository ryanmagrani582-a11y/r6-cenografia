import type { Company } from "@/types";

export const COMPANY: Company = {
  name: "R6 Cenografia",
  group: "R GROUP",
  tagline: "A experiência começa aqui.",
  city: "Salvador",
  state: "Bahia",
  region: "Nordeste",
  // TODO: substituir pelos dados reais quando disponíveis.
  email: "contato@placeholder.com.br",
  phone: "+55 00 00000-0000",
  whatsapp: "https://wa.me/5500000000000",
  address: "Salvador — Bahia — Brasil",
  socials: [
    { label: "Instagram", href: "https://instagram.com", external: true },
    { label: "LinkedIn", href: "https://linkedin.com", external: true },
    { label: "Behance", href: "https://behance.net", external: true },
  ],
};

export const COMPANY_PLACEHOLDERS = [
  "email",
  "phone",
  "whatsapp",
  "address",
] as const;
