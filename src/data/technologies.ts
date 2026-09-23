export type TechGroup = {
  id: string;
  label: string;
  items: { name: string; icon: string }[];
};

const devicon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

export const technologies: TechGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "HTML", icon: devicon("html5") },
      { name: "CSS", icon: devicon("css3") },
      { name: "JavaScript", icon: devicon("javascript") },
      { name: "React", icon: devicon("react") },
      { name: "TypeScript", icon: devicon("typescript") },
      { name: "Next.js", icon: devicon("nextjs") },
      { name: "Tailwind CSS", icon: devicon("tailwindcss") },
      { name: "Figma", icon: devicon("figma") },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "Express.js", icon: devicon("express") },
      { name: "Django", icon: devicon("django", "plain") },
      { name: "Flask", icon: devicon("flask") },
      { name: "Java", icon: devicon("java") },
      { name: "PHP", icon: devicon("php") },
      { name: "Node.js", icon: devicon("nodejs") },
      { name: "Python", icon: devicon("python") },
      { name: "Spring Boot", icon: devicon("spring") },
    ],
  },
  {
    id: "database",
    label: "Database",
    items: [
      { name: "MySQL", icon: devicon("mysql") },
      { name: "SQL", icon: devicon("microsoftsqlserver", "plain") },
      { name: "PostgreSQL", icon: devicon("postgresql") },
      { name: "MongoDB", icon: devicon("mongodb") },
    ],
  },
];
