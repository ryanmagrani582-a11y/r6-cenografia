import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/animation/SmoothScroll";
import { LoadingScreen } from "@/components/animation/LoadingScreen";
import { PageTransition } from "@/components/animation/PageTransition";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { COMPANY } from "@/content/company";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "R6 Cenografia — A Experiência Começa Aqui",
    template: "%s · R6 Cenografia",
  },
  description:
    "R6 Cenografia — cenografia, arquitetura e brand experience. Salvador · Bahia · Nordeste.",
  metadataBase: new URL("https://r6cenografia.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: COMPANY.name,
    title: "R6 Cenografia — A Experiência Começa Aqui",
    description:
      "Cenografia, arquitetura e tecnologia para experiências de marca. Salvador · Bahia · Nordeste.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-void pt-20 text-bone md:pt-24">
        <SmoothScroll />
        <LoadingScreen />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-acid focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
        >
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <PageTransition>
          <main id="conteudo" className="flex flex-1 flex-col">
            {children}
          </main>
        </PageTransition>
        <SiteFooter />
      </body>
    </html>
  );
}

