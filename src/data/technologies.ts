export type TechGroup = {
  id: string;
  label: string;
  items: string[];
};

export const technologies: TechGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Figma",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Express.js", "Django", "Flask", "Java", "PHP", "Node.js", "Python", "Spring Boot"],
  },
  {
    id: "database",
    label: "Database",
    items: ["MySQL", "SQL", "PostgreSQL", "MongoDB"],
  },
];
