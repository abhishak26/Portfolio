import { Reveal } from "@/components/Reveal";

const pillars = ["Design", "Development", "Content", "SEO", "Digital Marketing"];

export function Intro() {
  return (
    <section id="intro" className="relative border-y border-line py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-5">01 / Approach</p>
          <h2 className="text-display max-w-4xl">
            Digital solutions, built around your needs.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            We listen to the requirement first, understand the business, and then determine
            the right digital solution. No packaged pitch. No one-size-fits-all stack.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="mt-12">
          <ul className="flex flex-wrap gap-2 sm:gap-3">
            {pillars.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line px-4 py-2 text-sm text-fg/90"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
