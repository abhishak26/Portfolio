import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ImageFrame } from "@/components/ImageFrame";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <article className="group border-t border-line py-10 last:border-b sm:py-14">
      <div
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
          </div>
        </div>
        <div className="lg:col-span-5">
          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">{project.name}</h3>
          <p className="mt-2 text-sm text-muted">{project.category}</p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-base">
            {project.description}
          </p>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-black px-5 text-sm font-medium text-white transition-[background-color,transform] duration-200 hover:bg-lime hover:text-lime-fg active:scale-95"
          >
            Visit site
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
