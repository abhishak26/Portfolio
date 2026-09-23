import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading index="10" eyebrow="FAQ" title="Questions, answered plainly." />
        </Reveal>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-button-${i}`;
            return (
              <div key={item.question}>
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="text-base font-medium tracking-tight sm:text-lg">
                      {item.question}
                    </span>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-lime">
                      {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <p className="overflow-hidden pr-12 pb-0 text-sm leading-relaxed text-muted sm:text-base">
                    <span className={cn("block pb-5", !isOpen && "invisible")}>{item.answer}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
