import { marketingItems, platforms, seoItems } from "@/data/growth";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";

export function Growth() {
  return (
    <section id="growth" className="relative py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="SEO & digital marketing"
            title="Built to be found. Built to grow."
            description="Development is only part of the work. We also plan search, content, and paid media so the site has a job after launch."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <GlassCard className="h-full p-7 sm:p-8">
              <p className="eyebrow">SEO</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">Search that starts with the site</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Technical foundations, on-page structure, local presence, and content that
                matches what people are actually looking for.
              </p>
              <ul className="mt-8 grid gap-2 sm:grid-cols-2">
                {seoItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-fg/90">
                    <span className="size-1.5 rounded-full bg-lime" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.08}>
            <GlassCard className="h-full p-7 sm:p-8">
              <p className="eyebrow">Digital marketing</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">Campaigns with a clear job</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Social, paid media, and content planned against the business goal — not a
                generic posting calendar.
              </p>
              <ul className="mt-8 grid gap-2 sm:grid-cols-2">
                {marketingItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-fg/90">
                    <span className="size-1.5 rounded-full bg-lime" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        </div>

        <Reveal className="mt-6" delay={0.1}>
          <div className="rounded-xl border border-line p-6 sm:p-8">
            <p className="eyebrow mb-5">Platforms we work in</p>
            <ul className="flex flex-wrap gap-2">
              {platforms.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs tracking-wide text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
