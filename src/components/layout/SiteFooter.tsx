import Link from "next/link";
import { COMPANY } from "@/content/company";
import { NAV_LINKS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-coal">
      <Container className="flex flex-col gap-10 py-12 md:py-16">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-semibold tracking-tight">
              R6<sup className="text-acid">®</sup> Cenografia
            </p>
            <p className="r6-small text-muted">
              {COMPANY.tagline} {COMPANY.city} · {COMPANY.state} ·{" "}
              {COMPANY.region}.
            </p>
          </div>
          <nav aria-label="Navegação do rodapé">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="r6-label text-muted transition-colors hover:text-acid"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-line pt-6 md:flex-row">
          <p className="r6-small text-muted">
            © {new Date().getFullYear()} {COMPANY.name} · Parte do{" "}
            {COMPANY.group}
          </p>
          <ul className="flex gap-5" aria-label="Redes sociais">
            {COMPANY.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="r6-label text-muted transition-colors hover:text-acid"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
