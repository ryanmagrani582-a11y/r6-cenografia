"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

let registered = false;

export function registerGsapPlugins(): void {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function useGsapContext(
  create: (ctx: gsap.Context) => void | (() => void),
  deps: React.DependencyList = [],
) {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    registerGsapPlugins();
    const ctx = gsap.context(() => {
      create(ctx);
    }, ref);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}

export { gsap, ScrollTrigger };

/**
 * Retorna un contexto GSAP que revela `selector` (dentro de `root`) al
 * entrar en viewport. Scoped y revocable: llamar `.revert()` en cleanup.
 */
export function revealOnScroll(
  root: HTMLElement,
  selector: string,
  start = "top 82%",
): gsap.Context {
  registerGsapPlugins();
  return gsap.context(() => {
    const items = gsap.utils.toArray<HTMLElement>(selector);
    for (const el of items) {
      gsap.fromTo(
        el,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start, once: true },
        },
      );
    }
  }, root);
}
