import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function FeaturedWork() {
  return (
    <section id="work" className="relative py-14 sm:py-20">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Our projects"
            description="A selection of digital products and websites we have designed and built for growing businesses."
          />
        </Reveal>
        <div className="mt-4">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.04}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
