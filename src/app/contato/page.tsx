import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { ContactClosing } from "@/components/contact/ContactClosing";

export const metadata: Metadata = {
  title: "Contato — R6 CENOGRAFIA",
  description:
    "Entre em contato com a R6 CENOGRAFIA e conte sobre o próximo projeto de cenografia, stand ou experiência espacial.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactChannels />
      <ContactClosing />
    </>
  );
}
