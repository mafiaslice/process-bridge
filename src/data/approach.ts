export type ApproachStage = {
  number: string;
  title: string;
  question: string;
  summary: string;
  expanded: string;
};

export const approachStages: ApproachStage[] = [
  {
    number: "01",
    title: "Discover",
    question: "What is really happening?",
    summary: "Understand the challenge.",
    expanded:
      "We explore the business problem, stakeholders and environment to understand what's really happening.",
  },
  {
    number: "02",
    title: "Map",
    question: "How does the business currently work?",
    summary: "Visualise the current reality.",
    expanded:
      "We document and map the workflows that shape how work is done today.",
  },
  {
    number: "03",
    title: "Analyse",
    question: "What isn't working — and why?",
    summary: "Identify gaps and opportunities.",
    expanded:
      "We examine the current state to find inefficiencies and bottlenecks.",
  },
  {
    number: "04",
    title: "Define",
    question: "What does the business actually need?",
    summary: "Clarify needs and requirements.",
    expanded:
      "We build a shared understanding of what success looks like.",
  },
  {
    number: "05",
    title: "Align",
    question: "Are we working towards the same goal?",
    summary: "Connect people, process, technology.",
    expanded:
      "We ensure stakeholders and delivery teams share one understanding.",
  },
  {
    number: "06",
    title: "Improve",
    question: "How can things work better?",
    summary: "Create better ways of working.",
    expanded:
      "We help design and implement clearer, more sustainable processes.",
  },
];
