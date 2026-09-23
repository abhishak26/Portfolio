import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <img
        src={site.assets.mark}
        alt=""
        width={36}
        height={36}
        className="size-9 rounded-md object-cover outline-none"
      />
      <span className="text-[15px] font-semibold tracking-tight text-fg">
        thevision
        <span className="text-lime">infotech</span>
      </span>
    </span>
  );
}
