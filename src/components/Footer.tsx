import { ArrowUpRight } from "lucide-react";
import { activeSocialLinks, navItems, site } from "@/config/site";
import { services } from "@/data/services";
import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/Button";

const socialLabels: Record<string, string> = {
  instagram: "Instagram",
  linkedin: "LinkedIn",
  youtube: "YouTube",
  github: "GitHub",
};

export function Footer() {
  const socials = activeSocialLinks();

  return (
    <footer className="border-t border-line bg-bg-elevated">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <BrandMark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              A digital agency creating websites, digital experiences, content, SEO, and
              marketing solutions for modern businesses.
            </p>
            <div className="mt-6">
              <Button href="#contact">
                Start a project
                <ArrowUpRight className="size-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="eyebrow mb-4">Navigate</p>
              <ul className="space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-sm text-muted transition-colors hover:text-fg">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">Services</p>
              <ul className="space-y-2.5">
                {services.map((s) => (
                  <li key={s.id}>
                    <a href="#services" className="text-sm text-muted transition-colors hover:text-fg">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="eyebrow mb-4">Contact</p>
              <ul className="space-y-2.5 text-sm text-muted">
                <li>
                  <a href={`mailto:${site.email}`} className="hover:text-fg">
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={site.phoneHref} className="hover:text-fg">
                    {site.phone}
                  </a>
                </li>
                <li>{site.location}</li>
              </ul>
              {socials.length ? (
                <ul className="mt-5 flex flex-wrap gap-3">
                  {socials.map(([key, url]) => (
                    <li key={key}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted hover:text-lime"
                      >
                        {socialLabels[key] ?? key}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
