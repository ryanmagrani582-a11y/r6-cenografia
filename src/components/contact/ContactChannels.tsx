import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/content/contact";

export function ContactChannels() {
  const channels = [CONTACT.channels.whatsapp, CONTACT.channels.email].filter((channel) => !channel.isPlaceholder);

  return (
    <section aria-labelledby="contact-channels-heading" className="r6-section bg-coal">
      <Container className="flex flex-col gap-12 md:gap-16 max-w-5xl mx-auto">
        <h2 id="contact-channels-heading" className="r6-story r6-story-lg uppercase">Prefere falar diretamente?</h2>
        {channels.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {channels.map((channel) => (
              <ChannelCard key={channel.label} title={channel.label} href={channel.href} />
            ))}
          </div>
        ) : (
          <p className="r6-body-lg text-muted">Canais oficiais de atendimento pendentes de confirmação.</p>
        )}
      </Container>
    </section>
  );
}

function ChannelCard({ title, href }: { title: string; href: string }) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-line bg-surface p-8 transition-colors duration-300 hover:border-acid/50">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-acid/10">
        <svg className="h-6 w-6 text-acid" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h16z" />
          <polyline points="22,6 12,13 4,6" />
        </svg>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="r6-h3 uppercase">{title}</h3>
        <p className="r6-body text-muted break-all">{href}</p>
        <Button href={href} variant="ghost" className="self-start">
          {title === "WhatsApp" ? "Conversar agora" : "Enviar mensagem"}
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </Button>
      </div>
    </div>
  );
}