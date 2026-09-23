import type { TeamMember } from "@/data/team";
import { cn } from "@/lib/utils";
import { ImageFrame } from "@/components/ImageFrame";

export function TeamCard({ member, featured = false }: { member: TeamMember; featured?: boolean }) {
  return (
    <article className={cn("group relative overflow-hidden rounded-xl bg-surface", featured && "sm:min-h-full")}>
      <ImageFrame
        src={member.image}
        alt={member.name}
        className={cn("aspect-4/5", featured && "sm:aspect-auto sm:h-full sm:min-h-[32rem]")}
        imgClassName={cn(
          "group-hover:scale-[1.05]",
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
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
