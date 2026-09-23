import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-64 -translate-y-1/2 glow-band" />
      <div className="container-page relative text-center">
        <Reveal>
          <p className="eyebrow mb-6">Next step</p>
          <h2 className="text-display mx-auto max-w-4xl">
            Have an idea?
            <span className="block text-lime">Let's build it.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Tell us what you need and we will help you plan the next step.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="#contact" className="min-w-48">
              Start a project
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
