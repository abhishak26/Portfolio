import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass rounded-xl",
        hover &&
          "transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-lime/40 hover:shadow-glow",
        className,
      )}
    >
      {children}
    </div>
  );
}
