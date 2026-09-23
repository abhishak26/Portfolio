import { principles } from "@/data/principles";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function WhyUs() {
  return (
    <section id="why" className="relative py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index="06"
            eyebrow="Why TheVision Infotech"
            title="A small team that stays close to the work."
          />
        </Reveal>
        <Stagger className="mt-12 divide-y divide-line border-y border-line">
          {principles.map((item) => (
            <StaggerItem key={item.number}>
              <article className="group grid gap-3 py-7 sm:grid-cols-12 sm:items-baseline sm:gap-8">
                <p className="tabular-nums text-sm text-lime sm:col-span-2">{item.number}</p>
                <h3 className="text-xl font-semibold tracking-tight sm:col-span-4">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted sm:col-span-6 sm:text-base">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
