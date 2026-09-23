import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-3xl text-center", className)}>
      <div className="mb-5 flex items-center gap-3">
        {index ? (
          <span className="font-medium tabular-nums text-lime" aria-hidden>
            {index}
          </span>
        ) : null}
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <span className="h-px flex-1 bg-line" aria-hidden />
      </div>
      <h2 className="text-section max-w-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
