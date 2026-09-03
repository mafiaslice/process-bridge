export type ArticleCategory =
  | "Process"
  | "People"
  | "Technology"
  | "Analysis"
  | "Transformation";

export type Article = {
  slug: string;
  category: ArticleCategory;
  title: string;
  featured?: boolean;
  status: "published" | "coming-soon";
  excerpt?: string;
  body?: string[];
};

export const insightTabs = [
  "All",
  "Process",
  "People",
  "Technology",
  "Analysis",
  "Transformation",
] as const;

export const articles: Article[] = [
  {
    slug: "investing-in-technology-before-understanding-the-problem",
    category: "Process",
    title: "Are We Investing in Technology Before Properly Understanding the Problem?",
    featured: true,
    status: "published",
    excerpt:
      "A new platform is not a diagnosis. If the organisation cannot describe the current state with shared confidence, it is not ready to buy a future one.",
    body: [
      "The question is uncomfortable because, in many organisations, the answer is yes.",
      "A budget is approved. A vendor is shortlisted. A project plan appears with dates and a steering committee. Meanwhile the work itself — how a request moves, who decides, where things stall — remains a matter of opinion. Ask three people to describe the same process and you will receive three processes. The exceptions are not exceptions. They are the work.",
      "Technology cannot fix a problem it cannot see. If nobody can point to a shared picture of how things actually run, the organisation is not choosing a solution. It is choosing a hopeful object and asking it to stand in for understanding.",
      "This is not an argument against software. It is an argument against sequence. Understanding is treated as a delay — something to squeeze in after the licence is signed, or to skip because “we already know”. That confidence is usually the first thing that unravels in delivery. Requirements shift because they were never requirements. Scope expands because the problem was never bounded. The system is blamed for a process that was never examined.",
      "Better questions come first. What is really happening? Who owns each decision? Where does work wait? What knowledge lives in one person’s head? What would break if they left tomorrow? Until those questions have answers that more than one person would recognise, a platform is a guess with an invoice.",
      "Understanding is not a delay. It is the work that makes every later decision cheaper. Map the process. Name the problem. Then decide whether technology is even the answer — and if it is, what it must be asked to do.",
    ],
  },
  {
    slug: "dont-automate-confusion",
    category: "Process",
    title: "Don't Automate Confusion.",
    status: "published",
    excerpt:
      "Automating a broken process does not fix it. It makes the confusion faster, more consistent, and harder to see.",
    body: [
      "Automation has a reputation for seriousness. It looks like progress. It produces dashboards. It is easy to announce. Confusion does not photograph as well, so it is often left in place and given a login.",
      "Automating a broken process does not fix it. Digitising unclear responsibilities does not create accountability. Building technology around poorly defined requirements does not guarantee the right solution. It encodes the mess — and then charges you to maintain it.",
      "The pattern is familiar. A team is slow, so a workflow tool is bought. Handovers still fail, because nobody agreed who owns the decision at the join. Approvals still stall, because the approval was never a step; it was a conversation that happened in a corridor. The tool now has a record of the stall. That is not the same as removing it.",
      "Confusion is not a software problem. It is a problem of people, process, and the stories an organisation tells itself about how work gets done. Those stories drift. New joiners invent their own versions. The official process and the real one stop speaking to each other. Automation then has to choose which version to believe. It usually chooses the official one, which is the one that does not run the business.",
      "The cheaper move is the less glamorous one. Write down what actually happens. Find the gaps. Decide what should happen. Align the people who will have to live with it. Then — and only then — decide what is worth automating.",
      "Understanding comes before implementation. That is not caution. It is how you avoid spending twice: once on the system, and again on the work of discovering what you should have known before you bought it.",
    ],
  },
  {
    slug: "your-developers-arent-mind-readers",
    category: "People",
    title: "Your Developers Aren't Mind Readers.",
    status: "published",
    excerpt:
      "Delivery teams cannot build what the business has not been willing to say out loud. Ambiguity is not a technical debt. It is a leadership one.",
    body: [
      "When a build goes wrong, the conversation often turns to the developers. They misunderstood. They over-engineered. They asked too many questions, or not enough. It is a convenient story because it leaves the rest of the organisation untouched.",
      "Developers are not mind readers. They cannot infer a process that has never been agreed. They cannot prioritise requirements that were never written. They cannot test acceptance criteria that exist only as a feeling in a stakeholder’s head. If the business cannot describe what it needs — and what it is willing to give up — the delivery team is being asked to invent the organisation as they go.",
      "This is not a plea for more documentation for its own sake. It is a plea for a shared sentence. What problem are we solving? For whom? What does done look like? Who decides when two needs collide? Those questions sound basic. They are the ones that, left unanswered, generate the most expensive rework.",
      "The gap between “the business” and “technology” is rarely a personality clash. It is a translation failure. People who do the work speak in exceptions and relationships. People who build systems need boundaries, states, and rules. Someone has to stand in the middle and make those two languages meet — before a line of code is treated as a commitment.",
      "If your developers keep coming back with questions, that is not obstruction. That is the sound of ambiguity being discovered in public. It is cheaper to answer those questions in a workshop than in a release. It is cheaper still to have answered them before anyone was asked to estimate.",
      "Give people a problem that is understood. Give them requirements that can be traced to that problem. Then they can build. Until then, you are asking them to guess — and punishing them when the guess is not what you meant.",
    ],
  },
  {
    slug: "if-everyone-has-their-own-way-you-dont-have-a-process",
    category: "Analysis",
    title: "If Everyone Has Their Own Way of Doing It, You Don't Have a Process.",
    status: "published",
    excerpt:
      "Variation is not always craft. Sometimes it is just the absence of an agreed way of working — and the organisation is paying for it in silence.",
    body: [
      "Ask how an invoice is approved, how a customer complaint is handled, how a change request is raised. If the answer begins with “it depends who you ask”, you do not have a process. You have a collection of habits.",
      "Some variation is legitimate. Complex work needs judgement. A senior person will handle an exception that a junior person should escalate. That is not the problem. The problem is undocumented variation that nobody chose: five versions of the same work, none of them owned, all of them “how we do it here”.",
      "This is where organisations confuse activity with a process. Work is getting done. Customers are being served, more or less. Therefore the process must exist. But a process is not the fact that work completes. It is a shared, repeatable way of completing it — one that can be taught, measured, and improved. If it cannot be shown to a new joiner without a shrug, it is not yet a process. It is folklore.",
      "Folklore is expensive. It makes training a matter of sitting next to the right person. It makes quality a matter of who was on shift. It makes improvement impossible, because there is no “it” to improve — only individuals, each convinced their way is the way. When a system is later introduced, it has to pick a version. Three of the five ways of working become workarounds on day one.",
      "The analysis is straightforward, even if the conversations are not. Map what people actually do. Name the differences. Decide which differences are judgement and which are drift. Write the agreed path down in language a tired person can follow. Then the organisation has something it can train, audit, and — if it still makes sense — automate.",
      "You cannot improve what you cannot point to. And you cannot point to a process that exists only as “my way”.",
    ],
  },
  {
    slug: "before-buying-new-software-map-the-process",
    category: "Technology",
    title: "Before Buying New Software, Map the Process.",
    status: "coming-soon",
  },
  {
    slug: "documentation-isnt-bureaucracy",
    category: "Process",
    title: "Documentation Isn't Bureaucracy. It's Business Continuity.",
    status: "coming-soon",
  },
  {
    slug: "the-most-expensive-requirement",
    category: "Analysis",
    title: "The Most Expensive Requirement Is the One You Didn't Understand.",
    status: "coming-soon",
  },
  {
    slug: "when-did-you-last-question-how-work-gets-done",
    category: "Transformation",
    title: "When Did You Last Question How Work Gets Done?",
    status: "coming-soon",
  },
  {
    slug: "technology-should-support-the-process",
    category: "Technology",
    title: "Technology Should Support the Process—Not Replace Understanding.",
    status: "coming-soon",
  },
  {
    slug: "if-your-best-employee-left-tomorrow",
    category: "People",
    title: "If Your Best Employee Left Tomorrow, What Knowledge Would Leave With Them?",
    status: "coming-soon",
  },
];

export function publishedArticles() {
  return articles.filter((article) => article.status === "published");
}

export function getArticle(slug: string) {
  return articles.find(
    (article) => article.slug === slug && article.status === "published",
  );
}

export function featuredArticle() {
  return articles.find((article) => article.featured && article.status === "published");
}
