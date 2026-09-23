import { cn } from "@/lib/utils";

export function ImageFrame({
  src,
  alt,
  className,
  imgClassName,
}: {
  src?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-surface", className)}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={cn(
            "h-full w-full object-cover transition-transform duration-700 ease-out",
            imgClassName,
          )}
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 bg-grid" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-br from-lime/10 via-transparent to-transparent" />
        </div>
      )}
    </div>
  );
}
