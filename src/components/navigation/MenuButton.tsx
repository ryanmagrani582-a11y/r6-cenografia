"use client";

import { cn } from "@/lib/utils";

type MenuButtonProps = {
  open: boolean;
  onToggle: () => void;
  className?: string;
};

export function MenuButton({ open, onToggle, className }: MenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls="r6-fullscreen-menu"
      aria-label={open ? "Fechar menu" : "Abrir menu"}
      className={cn(
        "group inline-flex min-h-11 min-w-11 items-center gap-3 rounded-full px-2 py-2",
        "transition-colors duration-300 hover:text-acid",
        className,
      )}
    >
      <span className="r6-label hidden sm:inline">
        {open ? "Fechar" : "Menu"}
      </span>
      <span
        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors duration-300 group-hover:border-acid"
        aria-hidden
      >
        <span
          className={cn(
            "absolute h-px w-4 bg-bone transition-all duration-300 group-hover:bg-acid",
            open ? "rotate-45" : "-translate-y-[3px]",
          )}
        />
        <span
          className={cn(
            "absolute h-px w-4 bg-bone transition-all duration-300 group-hover:bg-acid",
            open ? "-rotate-45" : "translate-y-[3px]",
          )}
        />
      </span>
    </button>
  );
}
