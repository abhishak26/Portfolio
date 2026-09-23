import type { TeamMember } from "@/data/team";
import { cn } from "@/lib/utils";
import { ImageFrame } from "@/components/ImageFrame";

export function TeamCard({ member, featured = false }: { member: TeamMember; featured?: boolean }) {
  return (
    <article className={cn("group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface", featured && "sm:min-h-full")}>
      <ImageFrame
        src={member.image}
        alt={member.name}
        className="aspect-4/5 shrink-0"
        imgClassName={cn(
          "group-hover:scale-[1.05]",
          member.id === "santosh" && "object-top",
        )}
      />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-lg font-semibold tracking-tight sm:text-xl">{member.name}</p>
        <p className="mt-1 text-sm text-lime">{member.roles[0]}</p>
        <p className="mt-2 text-xs leading-relaxed text-muted">
          {member.roles.slice(1).join(" · ")}
        </p>
        {member.experience ? (
          <p className="mt-3 text-xs text-faint">
            {member.experience}
            {member.company ? ` · ${member.company}` : ""}
          </p>
        ) : null}
      </div>
    </article>
  );
}
