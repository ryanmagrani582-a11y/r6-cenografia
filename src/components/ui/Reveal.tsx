"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, registerGsapPlugins } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "span" | "li";
};

/**
 * Reveal mínimo e seguro para SSR.
 * Sem JS ou com reduced-motion, o conteúdo permanece visível.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    registerGsapPlugins();
    const tween = gsap.from(el, {
      y,
      opacity: 0,
      duration: 0.9,
      delay,
      ease: "power3.out",
      clearProps: "transform,opacity",
    });
    return () => {
      tween.kill();
    };
  }, [delay, y]);

  const Tag = as as "div";

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
