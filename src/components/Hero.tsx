import { useEffect, useRef } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/config/site";
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
      className="relative isolate overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:min-h-[calc(100svh-12rem)] lg:pt-28 lg:pb-16"
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
        <div className="flex min-h-[32rem] items-center justify-center lg:min-h-[calc(100svh-12rem)]">
          <div className="max-w-5xl text-center">
            <motion.h1
              className="text-hero mx-auto max-w-5xl"
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
              className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
            >
              {site.name} is a full-service digital agency combining design, development,
              content, SEO, and digital marketing to help businesses build and grow their
              digital presence.
            </motion.p>
            <motion.div
              className="mt-9 flex flex-wrap items-center justify-center gap-3"
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
        </div>
      </div>
    </section>
  );
}
