import { cn } from "@/lib/utils";

export function PageHeader({
  overline,
  title,
  description,
  className,
}: {
  overline: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <header className={cn("flex flex-col gap-6", className)}>
      <p className="r6-overline flex items-center gap-3">
        <span
          className="inline-block h-1.5 w-1.5 rounded-full bg-acid"
          aria-hidden
        />
        {overline}
      </p>
      <h1 className="r6-h1 max-w-5xl">{title}</h1>
      {description ? (
        <p className="r6-body-lg max-w-2xl text-muted">{description}</p>
      ) : null}
    </header>
  );
}
