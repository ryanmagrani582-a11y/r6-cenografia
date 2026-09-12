"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { gsap, registerGsapPlugins } from "@/lib/gsap";
import { startLenis, stopLenis } from "@/lib/lenis-store";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Container } from "@/components/ui/Container";

type FullscreenMenuProps = {
  open: boolean;
  onClose: () => void;
};

const MENU_ITEMS = NAV_LINKS.map((link, i) => ({
  ...link,
  index: `0${i + 1}`,
}));

export function FullscreenMenu({ open, onClose }: FullscreenMenuProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const wasOpen = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (open === wasOpen.current) return;
    wasOpen.current = open;

    if (open) {
      stopLenis();
      document.body.style.overflow = "hidden";
      const firstLink = root.querySelector<HTMLElement>(
        "[data-menu-item] a",
      );
      firstLink?.focus({ preventScroll: true });
    } else {
      startLenis();
      document.body.style.overflow = "";
    }

    if (reduced) return;

    registerGsapPlugins();
    const ctx = gsap.context(() => {
      if (open) {
        gsap.fromTo(
          root,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.35, ease: "power2.out" },
        );
        gsap.fromTo(
          "[data-menu-item]",
          { y: 36, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            stagger: 0.07,
            delay: 0.1,
            ease: "power3.out",
            clearProps: "transform",
          },
        );
        gsap.fromTo(
          "[data-menu-foot]",
          { y: 16, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
            delay: 0.4,
            ease: "power3.out",
            clearProps: "transform",
          },
        );
      }
    }, root);

    return () => {
      ctx.revert();
    };
  }, [open, reduced]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
      startLenis();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      id="r6-fullscreen-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      aria-hidden={!open}
      className={
        open
          ? "fixed inset-0 z-[80] flex flex-col bg-void"
          : "pointer-events-none fixed inset-0 z-[80] flex flex-col bg-void opacity-0 [visibility:hidden]"
      }
    >
      <Container className="flex flex-1 flex-col justify-center gap-10 pt-24 pb-10">
        <nav aria-label="Menu principal">
          <ul className="flex flex-col">
            {MENU_ITEMS.map((item) => (
              <li
                key={item.href}
                data-menu-item
                className="border-t border-line last:border-b"
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  tabIndex={open ? 0 : -1}
                  className="group flex min-h-20 items-baseline gap-5 py-5 transition-colors duration-300 hover:text-acid md:min-h-24"
                >
                  <span
                    className="r6-small text-acid"
                    aria-hidden
                  >
                    {item.index}
                  </span>
                  <span className="r6-h2 uppercase transition-transform duration-300 group-hover:translate-x-2">
                    {item.label}
                  </span>
                  <ArrowUpRight
                    size={22}
                    aria-hidden
                    className="ml-auto self-center text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-acid"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div
          data-menu-foot
          className="flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-end md:justify-between"
        >
          <div className="flex flex-col gap-2">
            <p className="r6-overline">Base estrategica</p>
            <p className="r6-label text-bone">
              Salvador · Bahia · Nordeste
            </p>
            <p className="r6-small text-muted">
              A experiencia comeca aqui.
            </p>
          </div>
          <Link
            href="/contato"
            onClick={onClose}
            tabIndex={open ? 0 : -1}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-acid px-7 text-sm font-medium text-black transition-colors duration-300 hover:bg-bone"
          >
            Iniciar projeto
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
      </Container>
      <span data-menu-focus tabIndex={-1} className="sr-only" aria-hidden>
        Fim do menu
      </span>
    </div>
  );
}
