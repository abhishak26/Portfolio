import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Growth } from "@/components/Growth";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Philosophy } from "@/components/Philosophy";
import { Services } from "@/components/Services";
import { SiteShell } from "@/components/SiteShell";
import { Team } from "@/components/Team";
import { Technology } from "@/components/Technology";
import { VideoCreative } from "@/components/VideoCreative";
import { WhyUs } from "@/components/WhyUs";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SiteShell>
      <Hero />
      <Intro />
      <Services />
      <VideoCreative />
      <Growth />
      <FeaturedWork />
      <WhyUs />
      <Technology />
      <Team />
      <Philosophy />
      <FAQ />
      <CTA />
      <Contact />
    </SiteShell>
  );
}
