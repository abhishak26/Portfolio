import { videoServices } from "@/data/growth";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function VideoCreative() {
  return (
    <section id="video" className="relative py-14 sm:py-20">
      <div className="container-page">
        <Reveal>
              <SectionHeading
            eyebrow="Video & creative"
            title="Motion that carries the message."
            description="Promotional films, short-form content, and brand pieces produced to sit alongside the rest of the work — not as an afterthought."
          />
        </Reveal>
        <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {videoServices.map((item) => (
            <StaggerItem key={item.title}>
              <article className="group relative overflow-hidden rounded-xl border border-line bg-white p-6 text-fg transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-lime hover:shadow-glow">
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.note}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
