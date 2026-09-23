import { navItems, site } from "@/config/site";
import { BrandMark } from "@/components/BrandMark";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-elevated">
      <div className="container-page py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <BrandMark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              A digital agency creating websites, digital experiences, content, SEO, and
              marketing solutions for modern businesses.
            </p>
            <div className="mt-7">
              <p className="eyebrow mb-3">Follow us</p>
              <SocialLinks />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 lg:col-span-7">
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
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.name}. All rights reserved.</p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
