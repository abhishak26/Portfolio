import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ImageFrame } from "@/components/ImageFrame";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <article className="group border-t border-line py-10 last:border-b sm:py-14">
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "grid items-center gap-8 lg:grid-cols-12",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-xl bg-surface">
            <ImageFrame
              src={project.image}
              alt={`${project.name} website`}
              className="aspect-16/10"
              imgClassName="group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:opacity-0 max-lg:opacity-60" />
            <div className="absolute right-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-lime px-3 py-1.5 text-xs font-medium text-lime-fg opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2 lg:transition-[opacity,transform] lg:duration-300 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
              View project
              <ArrowUpRight className="size-3.5" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <p className="tabular-nums text-sm text-lime">{project.number}</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{project.name}</h3>
          <p className="mt-2 text-sm text-muted">{project.category}</p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-base">
            {project.description}
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-fg">
            {project.type}
            <ArrowUpRight className="size-4 text-lime transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </p>
        </div>
      </a>
    </article>
  );
}
