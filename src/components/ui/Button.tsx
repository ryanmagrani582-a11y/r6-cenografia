import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "outline" | "header";
  size?: "md" | "sm";
  className?: string;
  withArrow?: boolean;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">;

const styles = {
  base: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-acid active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50",
  primary:
    "bg-acid text-black hover:bg-acid/90",
  ghost: "text-bone hover:text-acid border border-transparent hover:border-acid",
  outline:
    "border border-acid text-acid hover:bg-acid hover:text-black",
  header:
    "border border-acid text-acid hover:text-acid/80",
  md: "px-6 py-3 text-sm",
  sm: "px-4 py-2 text-xs uppercase tracking-[0.12em]",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  withArrow = false,
  ...rest
}: ButtonProps) {
  const classes = cn(
    styles.base,
    styles[variant],
    styles[size],
    className,
  );

  const content = (
    <>
      {children}
      {withArrow ? <ArrowUpRight size={16} aria-hidden /> : null}
    </>
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
