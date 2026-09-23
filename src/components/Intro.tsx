import { Reveal } from "@/components/Reveal";

export function Intro() {
  return (
    <section id="intro" className="relative border-y border-line py-14 sm:py-20">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-5">Approach</p>
          <h2 className="text-display max-w-4xl">
            Digital work, built around your needs.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            We understand the business first, then build the right digital solution.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
