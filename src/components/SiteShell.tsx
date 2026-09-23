import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SocialLinks } from "@/components/SocialLinks";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-bg text-fg">
      <div className="site-atmosphere" aria-hidden="true" />
      <ScrollProgress />
      <Navbar />
      <aside className="fixed top-1/2 right-5 z-40 hidden -translate-y-1/2 lg:block" aria-label="Social media">
        <SocialLinks compact vertical />
      </aside>
      <main id="main" className="relative z-10">{children}</main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
