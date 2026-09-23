export const site = {
  name: "TheVision Infotech",
  legalName: "TheVision Infotech",
  tagline: "Ideas today. Better tomorrow.",
  headline: "We turn ideas into digital experiences.",
  description:
    "TheVision Infotech is a digital agency providing UI/UX design, web design, web development, SEO management, digital marketing, and creative video solutions for businesses.",
  url: "",
  email: "sandysanthosh981@gmail.com",
  phone: "+91 63821 19479",
  phoneHref: "tel:+916382119479",
  whatsapp: "+91 63821 19479",
  whatsappHref: "https://wa.me/916382119479",
  location: "Chennai, Tamil Nadu, India",
  foundedNote: "",
  social: {
    instagram: "",
    linkedin: "",
    youtube: "",
    github: "",
  },
  assets: {
    logo: "/images/logo/thevision-infotech.png",
    mark: "/images/favicon/favicon.png",
    favicon: "/images/favicon/favicon.png",
  },
  contactEmail: "sandysanthosh981@gmail.com",
} as const;

export type SocialPlatform = keyof typeof site.social;

export function activeSocialLinks() {
  return (Object.entries(site.social) as [SocialPlatform, string][]).filter(
    ([, url]) => Boolean(url),
  );
}

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#why" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
] as const;
