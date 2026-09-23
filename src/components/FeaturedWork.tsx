import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function FeaturedWork() {
  return (
    <section id="work" className="relative py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="Selected work"
            title="Real digital experiences created for real businesses."
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
