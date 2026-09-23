export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business, requirement, audience, and goals.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Define the solution, structure, technology, and scope.",
  },
  {
    number: "03",
    title: "Design",
    description: "Create the user experience and visual direction.",
  },
  {
    number: "04",
    title: "Build",
    description: "Develop and integrate the solution.",
  },
  {
    number: "05",
    title: "Refine",
    description: "Test, review, optimize, and incorporate feedback.",
  },
  {
    number: "06",
    title: "Launch",
    description: "Deliver the final product and provide support where required.",
  },
];
