import type { Company } from "@/types";

export const COMPANY: Company = {
  name: "R6 Cenografia",
  group: "R GROUP",
  tagline: "A experiência começa aqui.",
  city: "Salvador",
  state: "Bahia",
  region: "Nordeste",
  // TODO: substituir pelos dados reais quando disponíveis.
  email: "contato@r6cenografia.com.br",
  phone: "+55 71 99999-9999",
  whatsapp: "https://wa.me/5571999999999",
  address: "Salvador — Bahia — Brasil",
  socials: [
    { label: "Instagram", href: "https://instagram.com/r6cenografia", external: true },
    { label: "LinkedIn", href: "https://linkedin.com/company/r6cenografia", external: true },
    { label: "Behance", href: "https://behance.net/r6cenografia", external: true },
  ],
};

export const COMPANY_PLACEHOLDERS = [
  "email",
  "phone",
  "whatsapp",
  "address",
] as const;
