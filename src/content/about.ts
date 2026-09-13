import type { SocialLink } from "@/types";
import { COMPANY } from "./company";

export const ABOUT = {
  hero: {
    tagline: COMPANY.tagline,
    headline: "ESPAÇOS QUE CONSTROEM PRESENÇA.",
    text: "Não criamos apenas espaços. Criamos a forma como uma marca é percebida dentro deles.",
    signature: "SALVADOR · BAHIA · NORDESTE",
  },
  manifesto: {
    index: "01",
    label: "Manifesto",
    headline1: "UM ESPAÇO PODE SER BONITO.",
    headline2: "UMA EXPERIÊNCIA PRECISA SER LEMBRADA.",
    text: "Na R6, arquitetura, identidade e experiência trabalham juntas para criar espaços que fazem uma marca ser percebida antes mesmo de ser apresentada.",
  },
  principles: ["PRESENÇA", "ESCALA", "IDENTIDADE", "FLUXO", "MATERIAL", "LUZ", "EXPERIÊNCIA"],
  specialty: {
    index: "03",
    label: "Especialidade",
    headline: "CENOGRAFIA COMO EXPERIÊNCIA.",
    text: "A R6 atua na criação de stands, cenografias, ambientações e experiências espaciais, conectando conceito criativo, design e execução.",
    services: ["Stands", "Cenografia de Congressos", "Experiências Interativas", "Ambiente Corporativo", "Produção e Montagem"],
  },
  territory: {
    index: "04",
    label: "Território",
    headline: "O NORDESTE É NOSSO TERRITÓRIO.",
    text: "Salvador é nosso ponto de partida. O Nordeste, nosso território. Uma proximidade que nos permite entender a dinâmica regional e pensar cada experiência a partir do espaço onde ela acontece.",
    cta: "Explorar território",
    href: "/sobre/territorio",
  },
  group: {
    index: "05",
    label: "R GROUP",
    headline: "UMA R6. UMA ESTRUTURA MAIOR.",
    text: "A R6 integra o R GROUP, conectando sua especialidade em cenografia a uma estrutura maior.",
    cta: "Conhecer o R GROUP",
    href: "/rgroup",
  },
  closing: {
    headline: "SE O ESPAÇO IMPORTA, A EXPERIÊNCIA TAMBÉM.",
    text: "Vamos transformar a próxima ideia em presença.",
    primaryCta: "Iniciar projeto",
    primaryHref: "/contato",
    secondaryCta: "Ver projetos",
    secondaryHref: "/projetos",
  },
} as const;