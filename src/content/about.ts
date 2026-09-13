import type { SocialLink } from "@/types";
import { COMPANY } from "./company";

export const ABOUT = {
  hero: {
    tagline: COMPANY.tagline,
    headline: "Espaços que constroem presença.",
    text: "Criamos cenografias, stands e experiências que transformam espaços em presença de marca.",
    signature: "SALVADOR · BAHIA · NORDESTE",
  },
  manifesto: {
    index: "01",
    label: "Manifesto",
    headline1: "Não criamos apenas espaços.",
    headline2: "Criamos a forma como uma marca é percebida.",
    text: "Arquitetura, identidade e experiência precisam conversar. É nesse encontro que um espaço deixa de ser apenas estrutura e passa a construir presença.",
  },
  principles: ["PRESENÇA", "ESCALA", "IDENTIDADE", "FLUXO", "MATERIAL", "LUZ", "EXPERIÊNCIA"],
  specialty: {
    index: "03",
    label: "Especialidade",
    headline: "Cenografia como experiência.",
    text: "A R6 atua na criação de stands, cenografias, ambientações e experiências espaciais, conectando conceito criativo, design e execução.",
    services: ["Stands", "Cenografia de Congressos", "Experiências Interativas", "Ambientação Corporativa", "Produção e Montagem"],
  },
  territory: {
    index: "04",
    label: "Território",
    headline: "O Nordeste é nosso território.",
    text: "Com Salvador como ponto de partida, a R6 constrói sua atuação a partir de um território que conhece, entende e transforma em experiência.",
    cta: "Explorar território",
    href: "/sobre/territorio",
  },
  group: {
    index: "05",
    label: "R GROUP",
    headline: "Uma força que vai além.",
    text: "A R6 Cenografia integra o R GROUP, conectando sua especialização em experiências espaciais a uma estrutura mais ampla.",
    cta: "Conhecer o R GROUP",
    href: "/rgroup",
  },
  closing: {
    headline: "Se o espaço importa, a experiência também.",
    text: "Vamos transformar a próxima ideia em presença.",
    primaryCta: "Iniciar projeto",
    primaryHref: "/contato",
    secondaryCta: "Ver projetos",
    secondaryHref: "/projetos",
  },
} as const;