import { services } from "@/data/services";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="What we do"
            title="A full digital team, without the handoff tax."
            description="Design, development, content, search, marketing, and video — planned as one piece of work."
          />
        </Reveal>
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
