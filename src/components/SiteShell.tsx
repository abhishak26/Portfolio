import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-bg text-fg">
      <ScrollProgress />
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
