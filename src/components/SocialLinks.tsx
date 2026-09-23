import { Facebook, Instagram, MessageCircle, X as XIcon, Youtube } from "lucide-react";
import { activeSocialLinks } from "@/config/site";

const icons = {
  instagram: Instagram,
  whatsapp: MessageCircle,
  facebook: Facebook,
  youtube: Youtube,
  x: XIcon,
} as const;

const labels = {
  instagram: "Instagram",
  whatsapp: "WhatsApp",
  facebook: "Facebook",
  youtube: "YouTube",
  x: "X",
} as const;

export function SocialLinks({ compact = false, vertical = false }: { compact?: boolean; vertical?: boolean }) {
  return (
    <ul className={`flex items-center ${vertical ? "flex-col gap-3" : "gap-2"}`} aria-label="Social media links">
      {activeSocialLinks().map(([key, url]) => {
        const Icon = icons[key];
        if (!Icon) return null;
        return (
          <li key={key}>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={labels[key]}
              title={labels[key]}
              className={`group flex items-center justify-center rounded-full border border-black bg-black text-white transition-[background-color,border-color,color,transform] duration-200 hover:border-lime hover:bg-lime hover:text-lime-fg active:scale-90 ${compact ? "size-14" : "size-12"}`}
            >
              <Icon className="size-6" strokeWidth={2} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
