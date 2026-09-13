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
        <section ref={rootRef} aria-label="R6 Cenografia" className="r6-hero relative -mt-12 flex min-h-[100svh] flex-col overflow-clip md:-mt-16">
    <div className="absolute inset-0" aria-hidden>
      <div data-hero-media className="h-full w-full will-change-transform">
        <Image src={HERO_IMAGE} alt="" fill priority fetchPriority="high" sizes="100vw" quality={85} className="r6-hero-img object-cover" />
      </div>
      <div data-hero-veil className="r6-hero-veil absolute inset-0" />
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-void/60 to-transparent" aria-hidden />
    </div>
    <Container className="relative flex flex-1 flex-col justify-center pb-8 pt-20 md:pb-10 md:pt-24">
        <div data-hero-kicker className="r6-overline flex items-center gap-3 text-bone/80">
          <Image src="/images/brand/r6-logo.png" alt="R6 Cenografia" width={220} height={236} className="h-[150px] w-auto md:h-[236px]" priority />
        </div>
        <h1 data-hero-title className="r6-hero-title mt-5 uppercase">
          <span data-hero-line className="block overflow-hidden"><span className="block">A experiência</span></span>
          <span data-hero-line className="block overflow-hidden"><span className="block">começa aqui<span className="text-acid">.</span></span></span>
        </h1>
        <div className="mt-5 flex flex-col gap-4 border-t border-bone/15 pt-4 md:flex-row md:items-end md:justify-between">
          <div data-hero-meta className="flex flex-col gap-2">
            <p className="r6-label flex items-center gap-2 text-bone">
              <MapPin size={12} className="text-acid" aria-hidden />
              Salvador · Bahia · Nordeste
            </p>
            <p className="r6-small max-w-md text-bone/70 md:max-w-xl text-lg md:text-xl">
              Criamos stands, cenografias e experiências espaciais para marcas que precisam ser percebidas.
            </p>
          </div>
          <div data-hero-cta className="flex flex-wrap items-center gap-3 md:gap-4">
            <Link href="/contato" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-acid px-8 text-sm font-medium text-black transition-all duration-300 hover:bg-bone active:scale-[0.98] md:min-h-14 md:px-10">
              Iniciar projeto
              <ArrowUpRight size={16} aria-hidden />
            </Link>
            <Link href="/projetos" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-bone/25 px-8 text-sm font-medium text-bone transition-all duration-300 hover:border-acid hover:text-acid active:scale-[0.98] md:min-h-14 md:px-10">
              Ver projetos
              <ArrowDown size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
      <div data-hero-scroll className="pointer-events-none absolute bottom-6 right-6 hidden lg:block xl:right-12">
        <ScrollIndicator />
      </div>
    </section>
  );
}
