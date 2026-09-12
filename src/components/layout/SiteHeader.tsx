"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/layout/BrandMark";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MainNavigation } from "@/components/navigation/MainNavigation";
import { MenuButton } from "@/components/navigation/MenuButton";
import { FullscreenMenu } from "@/components/navigation/FullscreenMenu";
import { cn } from "@/lib/utils";

const SCROLLED_THRESHOLD = 48;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLLED_THRESHOLD);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[70] transition-all duration-500",
          scrolled
            ? "border-b border-line bg-void/85 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container
          className={cn(
            "flex items-center justify-between gap-4 transition-all duration-500",
            scrolled ? "h-[68px] md:h-20" : "h-20 md:h-24",
          )}
        >
          <Link
            href="/"
            aria-label="R6 Cenografia — início"
            className="rounded-sm"
            onClick={() => setMenuOpen(false)}
          >
            <BrandMark />
          </Link>
          <MainNavigation className="hidden lg:block" />
          <div className="flex items-center gap-2 md:gap-3">
            <Button
              href="/contato"
              variant="header"
              size="sm"
              withArrow
              className="hidden md:inline-flex"
            >
              Iniciar projeto
            </Button>
            <MenuButton
              open={menuOpen}
              onToggle={() => setMenuOpen((value) => !value)}
            />
          </div>
        </Container>
      </header>
      <FullscreenMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

