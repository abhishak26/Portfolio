export type Principle = {
  number: string;
  title: string;
  description: string;
};

export const principles: Principle[] = [
  {
    number: "01",
    title: "We listen first",
    description:
      "The brief comes before the build. We take time to understand the business, the audience, and what actually needs to change.",
  },
  {
    number: "02",
    title: "One team, multiple capabilities",
    description:
      "Design, development, content, SEO, and marketing sit together — so the work stays coherent instead of being split across vendors.",
  },
  {
    number: "03",
    title: "Practical solutions",
    description:
      "Not every business needs the same stack or the same kind of site. We recommend what fits the requirement, not what is fashionable.",
  },
  {
    number: "04",
    title: "Transparent communication",
    description:
      "Clear updates, honest scope, and no unnecessary jargon. You should always know where the work stands.",
  },
  {
    number: "05",
    title: "Creative + technical",
    description:
      "Visual craft and engineering sit in the same conversation, so the experience looks considered and works in production.",
  },
  {
    number: "06",
    title: "Built around the client",
    description:
      "Every business has a different story. The digital solution should follow that story, not a generic playbook.",
  },
];
