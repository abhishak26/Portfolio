import { team } from "@/data/team";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamCard } from "@/components/TeamCard";

export function Team() {
  const featuredMembers = team.filter((member) => member.id === "santosh" || member.id === "abhishak");
  const rest = team.filter((member) => member.id !== "santosh" && member.id !== "abhishak");
  return (
    <section id="team" className="relative py-14 sm:py-20">
      <div className="container-page">
        <Reveal>
              <SectionHeading
            eyebrow="Team"
            title="The people behind the work."
          />
        </Reveal>
        <div className="mt-8 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredMembers.map((member) => (
              <Reveal key={member.id}>
                <TeamCard member={member} featured />
              </Reveal>
            ))}
          </div>
          <Stagger className="grid gap-4 sm:grid-cols-3">
            {rest.map((member) => (
              <StaggerItem key={member.id}>
                <TeamCard member={member} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
