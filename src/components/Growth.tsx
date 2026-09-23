import { marketingItems, platforms, seoItems } from "@/data/growth";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";

export function Growth() {
  return (
    <section id="growth" className="relative py-14 sm:py-20">
      <div className="container-page">
        <Reveal>
              <SectionHeading
            eyebrow="SEO & digital marketing"
            title="Built to be found. Built to grow."
            description="Development is only part of the work. We also plan search, content, and paid media so the site has a job after launch."
          />
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <GlassCard className="h-full !border-line !bg-white !text-fg p-7 sm:p-8">
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
            <GlassCard className="h-full !border-line !bg-white !text-fg p-7 sm:p-8">
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
          <div className="rounded-2xl border border-line bg-white/70 p-6 sm:p-8">
            <p className="eyebrow mb-5">Platforms we work in</p>
            <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              The tools behind the work, selected to help clients reach people, manage content, and measure growth.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {platforms.map((item) => (
                <li
                  key={item.name}
                  className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-xl border border-line bg-white p-4 text-center shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-lime hover:shadow-glow"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    loading="lazy"
                    title={item.name}
                    className="size-12 object-contain brightness-110 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-sm font-semibold text-fg">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
