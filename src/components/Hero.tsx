import { useEffect, useRef } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/config/site";
import { services } from "@/data/services";
import { easeOut } from "@/lib/motion";
import { Button } from "@/components/Button";

export function Hero() {
  const glow = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const el = glow.current;
    if (!el) return;
    const onMove = (event: MouseEvent) => {
      el.style.transform = `translate(${event.clientX - 180}px, ${event.clientY - 180}px)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce]);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 lg:min-h-[100svh] lg:pt-36 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute right-[-6rem] top-24 h-72 w-72 rounded-full glow-soft" />
      {!reduce ? (
        <div
          ref={glow}
          className="pointer-events-none absolute top-0 left-0 z-0 hidden h-72 w-72 rounded-full glow-cursor will-change-transform lg:block"
        />
      ) : null}

      <div className="container-page relative z-10">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:min-h-[calc(100svh-11rem)]">
          <div className="lg:col-span-8">
            <motion.p
              className="eyebrow mb-6"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              {site.location} · Digital agency
            </motion.p>
            <motion.h1
              className="text-hero"
              initial={reduce ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.85, ease: easeOut, delay: 0.08 }}
            >
              We turn ideas into
              <span className="block">
                digital <span className="text-lime">experiences.</span>
              </span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
            >
              {site.name} is a full-service digital agency combining design, development,
              content, SEO, and digital marketing to help businesses build and grow their
              digital presence.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.3 }}
            >
              <Button href="#contact">
                Start a project
                <ArrowUpRight className="size-4" />
              </Button>
              <Button href="#work" variant="ghost">
                View our work
                <ArrowDownRight className="size-4" />
              </Button>
            </motion.div>
          </div>

          <div className="lg:col-span-4">
            <div className="flex flex-col gap-3">
              {services.slice(0, 4).map((service, i) => (
                <motion.a
                  key={service.id}
                  href="#services"
                  className="glass group flex items-center justify-between rounded-xl px-4 py-3.5"
                  initial={reduce ? false : { opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, ease: easeOut, delay: 0.25 + i * 0.08 }}
                >
                  <span className="flex items-center gap-3">
                    <span className="tabular-nums text-xs text-lime">{service.number}</span>
                    <span className="text-sm font-medium">{service.title}</span>
                  </span>
                  <ArrowUpRight className="size-4 text-faint transition-colors group-hover:text-lime" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
