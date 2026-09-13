import { COMPANY, COMPANY_PLACEHOLDERS } from "./company";
import { CONTACT_SUBJECT } from "../lib/constants";

export const CONTACT = {
  hero: {
    index: "06",
    label: "Contato",
    headline: "Vamos criar a próxima experiência.",
    text: "Conte um pouco sobre o projeto. A partir daí, começamos a construir a direção.",
    signature: "SALVADOR · BAHIA · NORDESTE",
  },
  channels: {
    whatsapp: {
      label: "WhatsApp",
      href: COMPANY.whatsapp,
      isPlaceholder: COMPANY_PLACEHOLDERS.includes("whatsapp"),
    },
    email: {
      label: "E-mail",
      href: `mailto:${COMPANY.email}?subject=${CONTACT_SUBJECT}`,
      isPlaceholder: COMPANY_PLACEHOLDERS.includes("email"),
    },
  },
  closing: {
    headline: "Todo projeto começa com uma primeira ideia.",
    primaryCta: "Ver projetos",
    primaryHref: "/projetos",
    secondaryCta: "Conhecer a R6",
    secondaryHref: "/sobre",
  },
};