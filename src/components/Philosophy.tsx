import { Reveal } from "@/components/Reveal";

export function Philosophy() {
  return (
    <section id="philosophy" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/8 blur-3xl" />
      <div className="container-page relative">
        <Reveal>
          <p className="eyebrow mb-8">Philosophy</p>
          <blockquote className="text-display max-w-5xl">
            Every business has a different story. So every digital solution should be
            different.
          </blockquote>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            We don't believe every business needs the same solution. We understand the
            requirement first and then build around what the client actually needs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
