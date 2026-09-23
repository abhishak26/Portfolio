export type TeamMember = {
  id: string;
  name: string;
  roles: string[];
  image: string;
  experience?: string;
  company?: string;
  featured?: boolean;
};

export const team: TeamMember[] = [
  {
    id: "santosh",
    name: "Santhosh",
    roles: ["Founder", "Full Stack Developer", "Content Creator", "Team Lead"],
    image: "/images/team/santosh.webp",
    experience: "2 years",
    company: "YRS Infotech",
    featured: true,
  },
  {
    id: "rakesh",
    name: "Rakesh",
    roles: ["Web Developer", "Video Creator", "Application Developer"],
    image: "/images/team/rakesh.webp",
  },
  {
    id: "shiva",
    name: "Shiva",
    roles: ["Web Developer", "Digital Marketing"],
    image: "/images/team/shiva.webp",
  },
  {
    id: "abhishak",
    name: "Abhishak Timothy",
    roles: ["Full Stack Developer", "Content Creator"],
    image: "/images/team/abhishak.webp",
  },
  {
    id: "rajprasath",
    name: "Rajprasath",
    roles: ["Video Creator"],
    image: "/images/team/rajprasath.webp",
  },
];
