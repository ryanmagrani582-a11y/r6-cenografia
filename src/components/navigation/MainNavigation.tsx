"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MainNavigation({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Navegação principal" className={className}>
      <ul className="flex items-center gap-7 xl:gap-9">
        {NAV_LINKS.map((link) => {
          const active = isActive(pathname, link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "r6-link-underline r6-label py-2 transition-colors duration-300",
                  active ? "text-bone" : "text-muted hover:text-bone",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "ml-1.5 inline-block h-1 w-1 rounded-full bg-acid align-middle transition-opacity duration-300",
                    active ? "opacity-100" : "opacity-0",
                  )}
                  aria-hidden
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
