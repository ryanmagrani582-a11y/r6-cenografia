"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { ContactField, ContactSelect, ContactTextarea } from "./ContactField";
import { Container } from "@/components/ui/Container";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  description: string;
  deadline: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  description?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({ name: "", company: "", email: "", phone: "", projectType: "", description: "", deadline: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.email.trim()) newErrors.email = "E-mail é obrigatório";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = "E-mail inválido";
    if (!formData.description.trim()) newErrors.description = "Descrição é obrigatória";
    else if (formData.description.length < 20) newErrors.description = "Descrição deve ter pelo menos 20 caracteres";
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitted(true);
    setFormData({ name: "", company: "", email: "", phone: "", projectType: "", description: "", deadline: "" });
    setIsSubmitting(false);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  if (isSubmitted) {
    return (
      <Container className="r6-section flex flex-col items-center justify-center min-h-[80svh] text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-acid/10">
            <CheckCircle className="h-10 w-10 text-acid" />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="r6-story r6-story-lg uppercase">Projeto recebido.</h2>
            <p className="r6-body-lg text-muted max-w-lg mx-auto">Obrigado por compartilhar sua ideia. Seu briefing foi validado e está pronto para integração com o canal de atendimento.</p>
          </div>
          <Button href="/" variant="primary" className="mt-4">Voltar à Home</Button>
        </div>
      </Container>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-8 rounded-2xl border border-line bg-surface p-8 md:p-10"
      noValidate
    >
      <ContactField label="01 / Nome" id="name" value={formData.name} onChange={(v) => handleInputChange("name", v.target.value)} error={errors.name} placeholder="Seu nome completo" required />
      <ContactField label="02 / Empresa" id="company" value={formData.company} onChange={(v) => handleInputChange("company", v.target.value)} placeholder="Nome da empresa (opcional)" />
      <ContactField label="03 / E-mail" id="email" type="email" value={formData.email} onChange={(v) => handleInputChange("email", v.target.value)} error={errors.email} placeholder="seu@email.com" required />
      <ContactField label="04 / Telefone / WhatsApp" id="phone" type="tel" value={formData.phone} onChange={(v) => handleInputChange("phone", v.target.value)} placeholder="(00) 00000-0000" />
      <ContactSelect label="05 / Tipo de projeto" id="projectType" value={formData.projectType} onChange={(v) => handleInputChange("projectType", v.target.value)} options={[{ value: "", label: "Selecione..." }, { value: "STAND", label: "STAND" }, { value: "CENOGRAFIA_DE_CONGRESSO", label: "CENOGRAFIA DE CONGRESSO" }, { value: "EXPERIENCIA_INTERATIVA", label: "EXPERIÊNCIA INTERATIVA" }, { value: "AMBIENTACAO_CORPORATIVA", label: "AMBIENTAÇÃO CORPORATIVA" }, { value: "PRODUCAO_E_MONTAGEM", label: "PRODUÇÃO E MONTAGEM" }, { value: "OUTRO", label: "OUTRO" }]} />
      <ContactTextarea label="06 / Fale sobre o projeto" id="description" rows={5} value={formData.description} onChange={(v) => handleInputChange("description", v.target.value)} error={errors.description} placeholder="Conte brevemente sobre o evento, espaço ou experiência que você está imaginando..." required minLength={20} />
      <ContactSelect label="07 / Prazo" id="deadline" value={formData.deadline} onChange={(v) => handleInputChange("deadline", v.target.value)} options={[{ value: "", label: "Selecione..." }, { value: "até-30-dias", label: "Até 30 dias" }, { value: "30-60-dias", label: "30–60 dias" }, { value: "60-90-dias", label: "60–90 dias" }, { value: "mais-de-90-dias", label: "Mais de 90 dias" }, { value: "a-definir", label: "A definir" }]} />
      <Button type="submit" variant="primary" size="md" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "ENVIANDO..." : "ENVIAR PROJETO"}
      </Button>
    </form>
  );
}

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);