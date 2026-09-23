import { technologies } from "@/data/technologies";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Technology() {
  return (
    <section id="technology" className="relative py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index="08"
            eyebrow="Technology"
            title="The stack follows the brief."
            description="We choose tools that fit the product, the team who will maintain it, and the job it has to do."
          />
        </Reveal>
        <div className="mt-12 space-y-10">
          {technologies.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.06}>
              <div>
                <p className="eyebrow mb-4">{group.label}</p>
                <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="flex min-h-14 items-center justify-center rounded-xl border border-line bg-surface px-3 text-center text-sm font-medium text-fg/90 transition-[border-color,color,transform] duration-200 hover:-translate-y-0.5 hover:border-lime/45 hover:text-lime">
                        {item}
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
