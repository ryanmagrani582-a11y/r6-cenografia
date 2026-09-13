import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutManifesto } from "@/components/about/AboutManifesto";
import { AboutPrinciples } from "@/components/about/AboutPrinciples";
import { AboutSpecialty } from "@/components/about/AboutSpecialty";
import { AboutTerritory } from "@/components/about/AboutTerritory";
import { AboutGroup } from "@/components/about/AboutGroup";
import { AboutClosing } from "@/components/about/AboutClosing";

export const metadata: Metadata = {
  title: "Sobre — R6 CENOGRAFIA",
  description:
    "Conheça a R6 CENOGRAFIA, sua forma de pensar cenografia, experiências espaciais e sua conexão com Salvador, Bahia e o Nordeste.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutManifesto />
      <AboutPrinciples />
      <AboutSpecialty />
      <AboutTerritory />
      <AboutGroup />
      <AboutClosing />
    </>
  );
}
