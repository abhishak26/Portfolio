export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  icon: "pen" | "layout" | "code" | "search" | "megaphone" | "film";
};

export const services: Service[] = [
  {
    id: "uiux",
    number: "01",
    title: "UI/UX Design",
    description:
      "Interfaces shaped around how people actually move through a product — clear, considered, and built for use.",
    capabilities: ["User flows", "Wireframes", "Interface systems", "Prototypes"],
    icon: "pen",
  },
  {
    id: "web-design",
    number: "02",
    title: "Web Design",
    description:
      "Visual systems that feel consistent, on-brand, and ready for the screen — not a recycled template.",
    capabilities: ["Brand-led layouts", "Responsive design", "Design systems", "Landing pages"],
    icon: "layout",
  },
  {
    id: "web-dev",
    number: "03",
    title: "Web Development",
    description:
      "Fast, maintainable websites and web applications developed around the brief, the content, and the business.",
    capabilities: ["Marketing sites", "Web applications", "CMS builds", "Integrations"],
    icon: "code",
  },
  {
    id: "seo",
    number: "04",
    title: "SEO Management",
    description:
      "Technical and content work that helps the right people find the business — structured, measured, and practical.",
    capabilities: ["Technical SEO", "On-page SEO", "Local SEO", "SEO audits"],
    icon: "search",
  },
  {
    id: "marketing",
    number: "05",
    title: "Digital Marketing",
    description:
      "Campaigns and social presence that support real business goals, not vanity metrics.",
    capabilities: ["Paid media", "Social management", "Content marketing", "GBP"],
    icon: "megaphone",
  },
  {
    id: "video",
    number: "06",
    title: "Video & Creative",
    description:
      "Edits, reels, and brand films that carry the message clearly across the platforms people actually watch.",
    capabilities: ["Reels & shorts", "YouTube", "Brand films", "Motion graphics"],
    icon: "film",
  },
];

export const serviceOptions = services.map((s) => s.title);
