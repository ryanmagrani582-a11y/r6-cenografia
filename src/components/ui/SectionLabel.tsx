import { cn } from "@/lib/utils";

export function SectionLabel({
  index,
  label,
  className,
}: {
  index?: string;
  label: string;
  className?: string;
}) {
  return (
    <p className={cn("r6-overline flex items-center gap-3", className)}>
      {index ? (
        <span className="text-acid" aria-hidden>
          {index}
        </span>
      ) : (
        <span
          className="inline-block h-1.5 w-1.5 rounded-full bg-acid"
          aria-hidden
        />
      )}
      <span>{label}</span>
    </p>
  );
}
