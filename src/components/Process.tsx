import { processSteps } from "@/data/process";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Process() {
  return (
    <section id="process" className="relative py-14 sm:py-20">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="From first conversation to launch."
            description="A clear sequence. We do not skip the listening, and we do not disappear after delivery."
          />
        </Reveal>
        <Stagger className="relative mt-10">
          <ol className="space-y-3">
            {processSteps.map((step) => (
              <StaggerItem key={step.number}>
                <li className="grid gap-4 sm:grid-cols-12 sm:items-start sm:gap-8">
                  <h3 className="pt-1.5 text-xl font-semibold tracking-tight sm:col-span-4 sm:pt-3">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted sm:col-span-8 sm:pt-3 sm:text-base">
                    {step.description}
                  </p>
                </li>
              </StaggerItem>
            ))}
          </ol>
        </Stagger>
      </div>
    </section>
  );
}
