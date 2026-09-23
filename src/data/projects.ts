export type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  type: string;
  url: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "celestique",
    number: "01",
    name: "Celestique Salon",
    category: "Salon / Wellness",
    description:
      "A premier grooming and wellness destination in Chennai focused on a relaxing professional salon experience and healthy, balanced living.",
    type: "Client Project",
    url: "https://celestiquesalon.com/",
    image: "/images/projects/celestique.webp",
  },
  {
    id: "krio",
    number: "02",
    name: "KRIO Decors",
    category: "Interior Design / Architecture",
    description:
      "A premium home interior design collective in Chennai specializing in customized residential interiors, woodwork, and architectural design.",
    type: "Client Project",
    url: "https://demo.kriodecors.com/",
    image: "/images/projects/krio.webp",
  },
  {
    id: "valam",
    number: "03",
    name: "Valam IAS Academy",
    category: "Education / Civil Services",
    description:
      "A civil services coaching institute based in Anna Nagar, Chennai, focused primarily on Tamil Literature and General Tamil preparation for UPSC and TNPSC examinations.",
    type: "Client Project",
    url: "https://valamiasacademy.com/",
    image: "/images/projects/valam.webp",
  },
  {
    id: "ganapathi",
    number: "04",
    name: "Ganapathi Computers",
    category: "Technology / Computer Services",
    description:
      "An online presence for Sri Ganapathy Computers, a local computer sales and technical service provider in Chennai.",
    type: "Client Project",
    url: "https://sriganapathycomputers.com/",
    image: "/images/projects/ganapathi.webp",
  },
  {
    id: "meridian",
    number: "05",
    name: "Meridian MEP Engineering",
    category: "MEP Engineering",
    description:
      "An engineering and MEP contractor providing turnkey building services across residential, commercial, industrial, hospitality, and healthcare projects.",
    type: "Client Project",
    url: "https://demo.mepmeridian.com/",
    image: "/images/projects/meridian.webp",
  },
];
