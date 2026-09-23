import { technologies } from "@/data/technologies";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Technology() {
  return (
    <section id="technology" className="relative py-14 sm:py-20">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Technology"
            title="The stack follows the brief."
            description="We choose tools that fit the product, the team who will maintain it, and the job it has to do."
          />
        </Reveal>
        <div className="mt-8 space-y-8">
          {technologies.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.06}>
              <div>
                <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-8">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <span
                        className="group flex aspect-square items-center justify-center rounded-2xl border border-line bg-surface p-4 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-lime/50 hover:shadow-glow"
                        title={item.name}
                        aria-label={item.name}
                      >
                        <img
                          src={item.icon}
                          alt=""
                          loading="lazy"
                          className="size-10 object-contain transition-transform duration-300 group-hover:scale-110 sm:size-12"
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
