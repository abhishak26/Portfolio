import { processSteps } from "@/data/process";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Process() {
  return (
    <section id="process" className="relative py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index="07"
            eyebrow="Process"
            title="From first conversation to launch."
            description="A clear sequence. We do not skip the listening, and we do not disappear after delivery."
          />
        </Reveal>
        <Stagger className="relative mt-14">
          <div className="absolute top-0 bottom-0 left-[15px] w-px bg-line sm:left-[23px]" aria-hidden />
          <ol className="space-y-3">
            {processSteps.map((step) => (
              <StaggerItem key={step.number}>
                <li className="relative grid gap-4 pl-12 sm:grid-cols-12 sm:items-start sm:gap-8 sm:pl-16">
                  <span className="absolute top-1.5 left-0 flex size-8 items-center justify-center rounded-full border border-line bg-bg text-xs text-lime sm:size-12 sm:text-sm">
                    {step.number}
                  </span>
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
