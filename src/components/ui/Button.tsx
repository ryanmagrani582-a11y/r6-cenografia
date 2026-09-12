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
    "bg-acid text-black hover:bg-bone hover:shadow-[0_0_24px_rgba(249,100,35,0.18)]",
  ghost: "text-bone hover:text-acid",
  outline:
    "border border-line bg-transparent text-bone hover:border-acid hover:text-acid",
  header:
    "border border-line bg-transparent px-5 py-2.5 text-xs uppercase tracking-[0.12em] text-bone hover:border-acid hover:bg-acid hover:text-black",
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
