import { principles } from "@/data/principles";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function WhyUs() {
  return (
    <section id="why" className="relative py-14 sm:py-20">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Why TheVision Infotech"
            title="A small team that stays close to the work."
          />
        </Reveal>
        <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
          {principles.map((item) => (
            <StaggerItem key={item.number}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-lime/50 hover:shadow-glow">
                <span className="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-lime transition-transform duration-300 group-hover:scale-y-100" />
                <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
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
