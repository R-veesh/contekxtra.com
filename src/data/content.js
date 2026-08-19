import heroMain from "@/assets/hero-main.jpg";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import process1 from "@/assets/process-1.jpg";
import process2 from "@/assets/process-2.jpg";
import process3 from "@/assets/process-3.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import team5 from "@/assets/team-5.jpg";
import team6 from "@/assets/team-6.jpg";

export const brand = {
  name: "ContekXtra",
  tagline: "Enterprise Context Intelligence",
  email: "enterprise@contekxtra.com",
  phone: "+1 (800) 555 0199",
  address: "Global Headquarters, San Francisco",
};

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
  { label: "Contact Us", href: "#contact" },
];

export const hero = {
  kicker: "ContekXtra",
  title: "ENTERPRISE KNOWLEDGE, UNDERSTOOD IN CONTEXT",
  lede: "Unify fragmented enterprise knowledge, understand contextual relationships between information sources, and deliver relevant intelligence through AI-powered retrieval.",
  image: heroMain,
  imageAlt: "Abstract neural network and context relationship visualization",
};

export const marqueeItems = [
  "Context Intelligence",
  "Semantic Retrieval",
  "Knowledge Graph",
  "AI Discovery",
  "Enterprise Search",
  "Contextual Answers",
];

export const services = [
  {
    id: "context-engine",
    name: "Context Engine",
    tag: "Core AI",
    image: service1,
    description:
      "Creates contextual relationships across all your enterprise information, transforming siloed data into a unified, intelligent knowledge layer.",
    points: ["Contextual data analysis", "Knowledge relationship mapping", "Semantic understanding", "Information classification"],
  },
  {
    id: "knowledge-retrieval",
    name: "Semantic Search",
    tag: "Search",
    image: service2,
    description:
      "Enables users to find relevant organizational information instantly using natural language, with results ranked by contextual relevance rather than keyword matching.",
    points: ["Natural-language search", "Semantic retrieval", "Context-aware results", "Source discovery"],
  },
  {
    id: "knowledge-assistant",
    name: "AI Assistant",
    tag: "Interface",
    image: service3,
    description:
      "Helps employees interact with organizational knowledge through contextual Q&A, summarizing complex topics and providing verifiable source links.",
    points: ["Contextual Q&A", "Information summarization", "Source-aware responses", "Follow-up discovery"],
  },
  {
    id: "knowledge-graph",
    name: "Knowledge Graph",
    tag: "Architecture",
    image: service4,
    description:
      "Maps the complex relationships between information, processes, teams, and organizational resources to provide a complete picture of your business.",
    points: ["Relationship mapping", "Entity discovery", "Connected information views", "Context visualization"],
  },
];

export const about = {
  eyebrow: "{ Platform Overview }",
  title: "Transform fragmented enterprise information into a connected intelligence environment",
  body: [
    "Modern organizations maintain information across documents, knowledge bases, databases, applications, internal portals, and operational systems. Finding the right information and understanding its context can be difficult when these sources operate independently.",
    "ContekXtra provides an intelligent contextual retrieval layer that connects enterprise knowledge, processes information relationships, and surfaces relevant intelligence based on user intent.",
  ],
  images: [
    { src: about1, alt: "Dashboard showing connected knowledge sources" },
    { src: about2, alt: "Semantic search interface displaying contextual answers" },
  ],
};

export const stats = [
  { value: 150, suffix: "+", label: "Connectors Available" },
  { value: 10, suffix: "M+", label: "Queries Processed Daily" },
  { value: 99, suffix: "%", label: "Contextual Accuracy" },
  { value: 65, suffix: "%", label: "Reduced Search Time" },
];

export const clientLogos = [
  "Acme Corp",
  "Globex",
  "Soylent",
  "Initech",
  "Umbrella",
  "Massive Dynamic",
  "Stark Ind",
  "Wayne Ent",
  "Cyberdyne",
  "Tyrell",
  "Weyland",
  "Oscorp",
];

export const projects = [
  {
    id: "knowledge-teams",
    title: "Enterprise Knowledge Teams",
    meta: "Curation & Discovery",
    image: project1,
    alt: "Knowledge management dashboard",
  },
  {
    id: "business-analysts",
    title: "Business Analysts",
    meta: "Research & Insights",
    image: project2,
    alt: "Data analysis and reporting interface",
  },
  {
    id: "it-operations",
    title: "IT & Operations",
    meta: "Infrastructure & Support",
    image: project3,
    alt: "System architecture mapping",
  },
  {
    id: "customer-support",
    title: "Customer Support Organizations",
    meta: "Rapid Resolution",
    image: project4,
    alt: "Support agent intelligence interface",
  },
];

export const processSteps = [
  {
    num: "1",
    title: "Knowledge Ingestion",
    text: "Securely connect your enterprise documents, databases, portals, and applications.",
    image: process2,
    alt: "Data connection architecture",
  },
  {
    num: "2",
    title: "Semantic Processing",
    text: "Our engine processes the ingested data, extracting meaning beyond simple keywords.",
    image: process3,
    alt: "AI processing visualization",
  },
  {
    num: "3",
    title: "Context Understanding",
    text: "We map relationships between entities to understand how information is connected.",
    image: process1,
    alt: "Knowledge graph visualization",
  },
  {
    num: "4",
    title: "Retrieval Intelligence",
    text: "When a user queries the system, we retrieve not just the document, but the contextual answer.",
    image: process3,
    alt: "Search interface with highlighted answers",
  },
  {
    num: "5",
    title: "Business Decisions",
    text: "Empower your teams to make faster, more accurate decisions based on complete organizational intelligence.",
    image: process1,
    alt: "Dashboard showing business metrics",
  },
];

export const team = [
  { name: "Dr. Elena Rostova", role: "Chief AI Scientist", image: team1, alt: "Portrait of Elena Rostova" },
  { name: "Marcus Chen", role: "VP of Engineering", image: team2, alt: "Portrait of Marcus Chen" },
  { name: "Sarah Jenkins", role: "Head of Enterprise Solutions", image: team3, alt: "Portrait of Sarah Jenkins" },
  { name: "David Alby", role: "Lead Architect", image: team4, alt: "Portrait of David Alby" },
  { name: "Priya Patel", role: "Director of Product", image: team5, alt: "Portrait of Priya Patel" },
  { name: "James Wilson", role: "Customer Success Lead", image: team6, alt: "Portrait of James Wilson" },
];

export const testimonials = [
  {
    quote:
      "ContekXtra transformed how our research teams find information. What used to take hours of digging through fragmented systems now takes seconds with precise contextual answers.",
    author: "Robert Miller",
    role: "VP of Research",
    image: team1,
  },
  {
    quote:
      "Unlike traditional enterprise search that just gives you a list of links, ContekXtra actually understands the relationships between our data sources.",
    author: "Amanda Hughes",
    role: "Chief Knowledge Officer",
    image: team2,
  },
  {
    quote:
      "The Semantic Retrieval capabilities have reduced our support resolution times by 40%. Our agents have the exact organizational context they need instantly.",
    author: "David Chang",
    role: "Head of Operations",
    image: team3,
  },
  {
    quote:
      "It's rare to find a platform that is both strategically powerful and incredibly easy to deploy. ContekXtra gave us both.",
    author: "Martin Gomez",
    role: "Brand Consultant",
    image: team4,
  },
  {
    quote:
      "Every step was thoughtfully executed. They asked the right questions from day one and delivered beyond our expectations.",
    author: "Rachel Faye",
    role: "Operations Manager",
    image: team5,
  },
  {
    quote:
      "We've seen a massive uptick in team engagement and productivity since launching. The time saved is just incredible.",
    author: "Sarah Lin",
    role: "Customer Success",
    image: team6,
  },
];

export const contact = {
  eyebrow: "{ Request a Demo }",
  title: "Experience Context Intelligence",
  person: {
    name: "Sarah Jenkins",
    role: `Head of Enterprise Solutions, ContekXtra`,
    avatar: team3,
  },
  bio: "Ready to unlock your enterprise knowledge? Contact our team for a tailored demonstration of how ContekXtra can connect your organizational data.",
  serviceOptions: ["Platform Demo", "Technical Integration Discussion", "Enterprise Licensing", "Partner Program", "Other"],
};

export const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "Capabilities", href: "#capabilities" },
      { label: "Architecture", href: "#pipeline" },
      { label: "Pricing", href: "#pricing" },
      { label: "Documentation", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact Sales", href: "#contact" },
      { label: "About Us", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    price: "$999",
    period: "/month",
    description: "Perfect for departmental knowledge teams starting their context journey.",
    features: [
      "Up to 5 data sources",
      "100,000 queries per month",
      "Standard semantic retrieval",
      "Email support",
    ],
    highlight: false,
    cta: "Start Free Trial",
  },
  {
    id: "professional",
    name: "Professional",
    price: "$3,499",
    period: "/month",
    description: "For organizations scaling context intelligence across multiple divisions.",
    features: [
      "Up to 25 data sources",
      "Unlimited queries",
      "Advanced Knowledge Graph mapping",
      "Intelligent Knowledge Assistant",
      "Priority 24/7 support",
    ],
    highlight: true,
    cta: "Contact Sales",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Dedicated infrastructure and unlimited scale for global enterprises.",
    features: [
      "Unlimited data sources",
      "Dedicated processing instances",
      "Custom AI model fine-tuning",
      "On-premise deployment options",
      "Dedicated Success Manager",
    ],
    highlight: false,
    cta: "Request Custom Quote",
  },
];

export const faq = {
  eyebrow: "{ FAQ }",
  title: "CLEAR SOLUTIONS TO YOUR CONCERNS",
  image: about1,
  questions: [
    {
      q: "What is included in the ContekXtra platform?",
      a: "Our platform includes the core Context Engine, Semantic Search capabilities, Intelligent Knowledge Assistant, and our proprietary Enterprise Knowledge Graph mapping."
    },
    {
      q: "How long does it take to deploy?",
      a: "Depending on the complexity and number of data sources, a standard deployment takes between 2 to 6 weeks, including data ingestion and initial semantic mapping."
    },
    {
      q: "Do you offer mobile-friendly interfaces?",
      a: "Yes, our web interfaces and API integrations are fully responsive and designed to work seamlessly across desktop, tablet, and mobile devices."
    },
    {
      q: "Can you integrate with our existing databases?",
      a: "Absolutely. We offer over 150 out-of-the-box connectors for popular enterprise systems including Salesforce, SharePoint, Jira, Confluence, and custom SQL/NoSQL databases."
    },
    {
      q: "Do you provide custom AI model fine-tuning?",
      a: "Yes, for our Enterprise plan customers we offer dedicated AI model fine-tuning to better understand your specific industry jargon and organizational terminology."
    },
    {
      q: "Will our data remain secure and private?",
      a: "Security is our top priority. We offer SOC2 Type II compliance, end-to-end encryption, and on-premise deployment options for organizations with strict data residency requirements."
    }
  ]
};
