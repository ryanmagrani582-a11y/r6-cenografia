"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { gsap, registerGsapPlugins } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Container } from "@/components/ui/Container";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

const HERO_IMAGE = "/images/hero/r6-hero-bg.png";

export function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;
    registerGsapPlugins();
    let played = false;
    let ctx: gsap.Context | null = null;
    const scrollTweens: Array<ReturnType<typeof gsap.to>> = [];

    const play = () => {
      if (played || !root.isConnected) return;
      played = true;
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo("[data-hero-media]", { scale: 1.08 }, { scale: 1, duration: 1.8, ease: "power2.out" }, 0)
          .fromTo("[data-hero-veil]", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, 0.1)
          .fromTo("[data-hero-kicker]", { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 }, 0.35)
          .fromTo("[data-hero-line]", { y: 80, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.12, ease: "power4.out" }, 0.45)
          .fromTo("[data-hero-meta]", { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.1 }, 0.9)
          .fromTo("[data-hero-cta]", { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.1 }, 1.05)
          .fromTo("[data-hero-scroll]", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 }, 1.25);
        tl.call(() => {
          scrollTweens.push(gsap.to("[data-hero-scroll]", { autoAlpha: 0, ease: "none",
            scrollTrigger: { trigger: root, start: "top top", end: "18% top", scrub: true } }));
        }, [], "+=0.05");
      }, root);
      scrollTweens.push(
        gsap.to("[data-hero-media]", { yPercent: 12, ease: "none",
          scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: true } }),
        gsap.to("[data-hero-title]", { yPercent: -14, autoAlpha: 0.3, ease: "none",
          scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: true } }),
      );
    };

    const onDone = () => play();
    const fallback = window.setTimeout(play, 2600);
    window.addEventListener("r6:loading-done", onDone);
    try {
      if (sessionStorage.getItem("r6-intro-seen") === "1") play();
    } catch { play(); }

    return () => {
      window.clearTimeout(fallback);
      window.removeEventListener("r6:loading-done", onDone);
      for (const t of scrollTweens) {
        t.scrollTrigger?.kill();
        t.kill();
      }
      ctx?.revert();
    };
  }, [reduced]);

  return (
    <section ref={rootRef} aria-label="R6 Cenografia" className="r6-hero relative -mt-20 flex min-h-[100svh] flex-col overflow-clip md:-mt-24">
      <div className="absolute inset-0" aria-hidden>
        <div data-hero-media className="h-full w-full will-change-transform">
          <Image src={HERO_IMAGE} alt="" fill priority fetchPriority="high" sizes="100vw" quality={85} className="r6-hero-img object-cover" />
        </div>
        <div data-hero-veil className="r6-hero-veil absolute inset-0" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-void/70 to-transparent" aria-hidden />
      </div>
      <Container className="relative flex flex-1 flex-col justify-end pb-10 pt-32 md:pb-14">
        <p data-hero-kicker className="r6-overline flex items-center gap-3 text-bone/80">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-acid" aria-hidden />
          R6 Cenografia
        </p>
        <h1 data-hero-title className="r6-hero-title mt-6 uppercase">
          <span data-hero-line className="block overflow-hidden"><span className="block">A experiência</span></span>
          <span data-hero-line className="block overflow-hidden"><span className="block">começa aqui<span className="text-acid">.</span></span></span>
        </h1>
        <div className="mt-8 flex flex-col gap-8 border-t border-bone/15 pt-6 md:flex-row md:items-end md:justify-between">
          <div data-hero-meta className="flex flex-col gap-3">
            <p className="r6-label flex items-center gap-2 text-bone">
              <MapPin size={14} className="text-acid" aria-hidden />
              Salvador · Bahia · Nordeste
            </p>
            <p className="r6-small max-w-md text-bone/70">
              Cenografia, arquitetura e experiências de marca para eventos que precisam ser lembrados.
            </p>
          </div>
          <div data-hero-cta className="flex flex-wrap items-center gap-3">
            <Link href="/contato" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-acid px-7 text-sm font-medium text-black transition-all duration-300 hover:bg-bone active:scale-[0.98]">
              Iniciar projeto
              <ArrowUpRight size={16} aria-hidden />
            </Link>
            <Link href="/projetos" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-bone/25 px-7 text-sm font-medium text-bone transition-all duration-300 hover:border-acid hover:text-acid active:scale-[0.98]">
              Ver projetos
              <ArrowDown size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
      <div data-hero-scroll className="pointer-events-none absolute bottom-10 right-6 hidden lg:block xl:right-12">
        <ScrollIndicator />
      </div>
    </section>
  );
}
