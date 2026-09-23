import {
  Clapperboard,
  Code2,
  LayoutTemplate,
  Megaphone,
  PenTool,
  Search,
} from "lucide-react";
import type { Service } from "@/data/services";
import { GlassCard } from "@/components/GlassCard";

const icons = {
  pen: PenTool,
  layout: LayoutTemplate,
  code: Code2,
  search: Search,
  megaphone: Megaphone,
  film: Clapperboard,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  return (
    <GlassCard hover className="group flex h-full flex-col p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="tabular-nums text-sm text-lime">{service.number}</span>
        <Icon
          className="size-5 text-muted transition-transform duration-300 group-hover:rotate-6 group-hover:text-lime"
          strokeWidth={1.6}
        />
      </div>
      <h3 className="mt-8 text-xl font-semibold tracking-tight">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {service.capabilities.map((cap) => (
          <li
            key={cap}
            className="rounded-full border border-line px-2.5 py-1 text-[11px] tracking-wide text-faint uppercase"
          >
            {cap}
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}
