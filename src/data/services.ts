export type Service = {
  number: string;
  title: string;
  tagline: string;
  description: string;
  includes: string[];
};

export const services: Service[] = [
  {
    number: "01",
    title: "Business Analysis",
    tagline: "Understand Before You Act.",
    description:
      "We investigate challenges, surface stakeholder needs, and define the change before anyone commits to a solution. Analysis is not a prelude to a predetermined answer — it is how you find out whether the answer is even the right one.",
    includes: [
      "Business Problem Analysis",
      "Business Needs Assessment",
      "Stakeholder Analysis",
      "Stakeholder Interviews",
      "Requirements Gathering",
      "Requirements Elicitation",
      "Requirements Documentation",
      "BRDs",
      "Functional Requirements",
      "User Stories",
      "Use Cases",
      "Stakeholder Workshops",
      "Gap Analysis",
    ],
  },
  {
    number: "02",
    title: "Process Documentation",
    tagline: "Make the Invisible Visible.",
    description:
      "Most organisations run on knowledge that has never been written down. We capture how work actually happens so the business can see itself — and so that knowledge no longer walks out of the building with one person.",
    includes: [
      "Process Documentation",
      "Current-State Documentation",
      "End-to-End Process Documentation",
      "Workflow Documentation",
      "Procedure Documentation",
      "Operational Documentation",
      "Roles and Responsibilities Documentation",
      "Knowledge Capture",
      "Business Process Manuals",
      "Standardisation of Processes",
    ],
  },
  {
    number: "03",
    title: "Process Mapping & Process Flows",
    tagline: "See How Work Really Moves.",
    description:
      "A map is not decoration. It is a shared picture of how work travels, where it waits, and who it depends on. We draw the current reality first — then the future only when the present is honest.",
    includes: [
      "As-Is",
      "To-Be",
      "End-to-End Process Flows",
      "Workflow Mapping",
      "Customer Journey Mapping",
      "Service Blueprinting",
      "Swimlane Diagrams",
      "Decision Flow Mapping",
      "Handover Mapping",
      "System Interaction Mapping",
      "Cross-Functional Process Mapping",
    ],
  },
  {
    number: "04",
    title: "Process Audits & Analysis",
    tagline: "Find What Isn't Working.",
    description:
      "We examine the health of the work itself: where time is lost, where controls fail, where the same mistake is made twice. The point is not a report. It is a clear account of what to fix — and what to leave alone.",
    includes: [
      "Process Audits",
      "Process Reviews",
      "Process Health Assessments",
      "Gap Analysis",
      "Bottleneck Identification",
      "Inefficiency Analysis",
      "Redundancy Identification",
      "Root Cause Analysis",
      "Risk Identification",
      "Control Reviews",
      "Process Performance Analysis",
    ],
  },
  {
    number: "05",
    title: "Process Optimisation & Improvement",
    tagline: "Create Better Ways of Working.",
    description:
      "Improvement starts after understanding. We redesign workflows, remove waste, and simplify what has grown complicated — so the organisation can work in a way that holds as it grows.",
    includes: [
      "Process Optimisation",
      "Process Improvement",
      "Process Redesign",
      "Workflow Optimisation",
      "Operational Efficiency Improvement",
      "Bottleneck Removal",
      "Waste Reduction",
      "Process Simplification",
      "Future-State Process Design",
      "Process Standardisation",
      "Continuous Improvement Frameworks",
    ],
  },
  {
    number: "06",
    title: "Requirements Management",
    tagline: "Make Sure the Right Problem Is Being Solved.",
    description:
      "Requirements are not a shopping list for a system. They are a disciplined account of what the business needs — and what it does not. We gather, test, trace and prioritise so delivery teams are not left to guess.",
    includes: [
      "Requirements Gathering",
      "Elicitation",
      "Analysis",
      "Documentation",
      "Business Requirements",
      "Functional Requirements",
      "Non-Functional Requirements",
      "User Stories",
      "Use Cases",
      "Acceptance Criteria",
      "Traceability",
      "Validation",
      "Prioritisation",
    ],
  },
  {
    number: "07",
    title: "SOP Development",
    tagline: "Turn Knowledge Into Consistency.",
    description:
      "A standard operating procedure is only useful if someone can follow it on a Tuesday under pressure. We turn undocumented know-how into clear, usable guidance — without turning the organisation into paperwork.",
    includes: [
      "SOPs",
      "Work Instructions",
      "Operating Manuals",
      "Departmental Procedures",
      "Process Playbooks",
      "Step-by-Step Operational Guides",
      "Roles and Responsibilities",
      "Policy-to-Process Documentation",
      "Process Governance Documentation",
    ],
  },
  {
    number: "08",
    title: "Business & Technology Alignment",
    tagline: "Bridging What the Business Needs and What Technology Delivers.",
    description:
      "Business and technology often speak past each other. We translate. We sit between stakeholders and delivery so the thing that gets built is the thing the organisation actually needed.",
    includes: [
      "Business–Technology Translation",
      "Stakeholder–Developer Alignment",
      "Requirements Clarification",
      "Functional Requirement Definition",
      "Solution Requirement Workshops",
      "Business Process Translation",
      "Technology Requirements Support",
      "Developer Handover Support",
      "Stakeholder Communication",
      "UAT Requirements Support",
      "Business Change Support",
    ],
  },
];
