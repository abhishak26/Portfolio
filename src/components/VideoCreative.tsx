import { Play } from "lucide-react";
import { videoServices } from "@/data/growth";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function VideoCreative() {
  return (
    <section id="video" className="relative py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Video & creative"
            title="Motion that carries the message."
            description="Promotional films, short-form content, and brand pieces produced to sit alongside the rest of the work — not as an afterthought."
          />
        </Reveal>
        <Stagger className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {videoServices.map((item, i) => (
            <StaggerItem key={item.title}>
              <article className="group relative overflow-hidden rounded-xl border border-line bg-surface p-6">
                <div className="mb-8 flex items-center justify-between">
                  <span className="tabular-nums text-xs text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex size-10 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-lime/50 group-hover:text-lime">
                    <Play className="size-4 translate-x-px" fill="currentColor" />
                  </span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.note}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
