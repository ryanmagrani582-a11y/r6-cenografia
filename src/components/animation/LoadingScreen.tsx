"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, registerGsapPlugins } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const STORAGE_KEY = "r6-intro-seen";
const MAX_DURATION = 2200;

function shouldShowIntro(reduced: boolean): boolean {
  if (typeof window === "undefined") return false;
  if (reduced) {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* noop */
    }
    return false;
  }
  try {
    return sessionStorage.getItem(STORAGE_KEY) !== "1";
  } catch {
    return true;
  }
}

export function LoadingScreen() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState<boolean>(false);
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect -- leitura 1x de sessionStorage na montagem */
    setVisible(shouldShowIntro(reduced));
    setReady(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [reduced]);

  useEffect(() => {
    if (!visible) return;
    const root = rootRef.current;
    if (!root) return;

    document.body.style.overflow = "hidden";
    window.dispatchEvent(new CustomEvent("r6:loading-start"));

    const finish = () => {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* noop */
      }
      document.body.style.overflow = "";
      window.dispatchEvent(new CustomEvent("r6:loading-done"));
      setVisible(false);
    };

    const fallback = window.setTimeout(finish, MAX_DURATION);

    registerGsapPlugins();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          window.clearTimeout(fallback);
          finish();
        },
      });
      tl.fromTo(
        "[data-loading-mark]",
        { y: 24, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, clearProps: "transform" },
      )
        .fromTo(
          "[data-loading-meta]",
          { y: 12, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.08 },
          "-=0.3",
        )
        .fromTo(
          "[data-loading-bar]",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.9, ease: "power2.inOut" },
          "-=0.4",
        )
        .to(
          root,
          { autoAlpha: 0, duration: 0.45, ease: "power2.inOut" },
          "+=0.1",
        );
    }, root);

    return () => {
      window.clearTimeout(fallback);
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [reduced, visible]);

  if (!visible || !ready) return null;

  return (
    <div
      ref={rootRef}
      role="status"
      aria-label="Carregando R6 Cenografia"
      className="fixed inset-0 z-[90] flex flex-col items-center justify-center gap-6 bg-void"
        >
      <p
        data-loading-mark
        className="flex flex-col items-center gap-3 text-center"
      >
        <img
          src="/images/brand/r6-logo.png"
          alt=""
          width={481}
          height={518}
          loading="eager"
          className="h-14 w-auto object-contain"
          aria-hidden="true"
        />
        <span className="r6-label text-muted">Cenografia</span>
      </p>
      <p data-loading-meta className="r6-label text-muted">
        Salvador · Bahia · Nordeste
      </p>
      <div
        className="h-px w-40 overflow-hidden bg-line"
        aria-hidden
      >
        <span
          data-loading-bar
          className="block h-full w-full origin-left bg-acid"
        />
      </div>
    </div>
  );
}
