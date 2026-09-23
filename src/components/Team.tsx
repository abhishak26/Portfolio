import { team } from "@/data/team";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamCard } from "@/components/TeamCard";

export function Team() {
  const [founder, ...rest] = team;
  return (
    <section id="team" className="relative py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index="09"
            eyebrow="Team"
            title="The people behind the work."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {founder ? (
            <Reveal className="lg:col-span-5">
              <TeamCard member={founder} featured />
            </Reveal>
          ) : null}
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
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
