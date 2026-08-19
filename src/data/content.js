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
  lede: "Stop searching.Start discovering.ContekXtra links fragmented enterprise information, recognizes context based relationships and presents your teams with necessary intelligence.",
  image: heroMain,
  imageAlt: "Abstract neural network and context relationship visualization",
};

export const marqueeItems = [
  "CONTEXT INTELLIGENCE",
  "SEMANTIC RETRIEVAL",
  "KNOWLEDGE MAPPING",
  "NATURAL LANGUAGE SEARCH",
  "SOURCE AWARE ANSWERS",
  "ENTERPRISE DISCOVERY",
];

export const services = [
  {
    id: "context-engine",
    name: "Context Engine",
    tag: "Core AI",
    image: service1,
    description:
      "Analyze information in organizations and establish relationships among related knowledge bases.",
    points: ["Contextual data analysis", "Knowledge relationship mapping", "Semantic understanding", "Information classification", "Context enrichment"],
  },
  {
    id: "knowledge-retrieval",
    name: "Semantic Search",
    tag: "Search",
    image: service2,
    description:
      "Assist the users in searching connected organizational knowledge through natural language.",
    points: ["Natural language search", "Semantic retrieval", "Context-aware results", "Knowledge-source discovery", "Relevance ranking"],
  },
  {
    id: "knowledge-assistant",
    name: "Knowledge Assistant",
    tag: "Interface",
    image: service3,
    description:
      "Conversational knowledge discovery through the generation of summary information and source based answers.",
    points: ["Contextual questions and answers", "Knowledge exploration", "Information summarization", "Source-aware responses", "Follow-up discovery"],
  },
  {
    id: "knowledge-graph",
    name: "Knowledge Graph",
    tag: "Architecture",
    image: service4,
    description:
      "Shows connections between information, processes, teams and organizational resources in a networked knowledge environment.",
    points: ["Knowledge relationship mapping", "Entity discovery", "Connected information views", "Context visualization", "Organizational knowledge mapping"],
  },
];

export const about = {
  eyebrow: "{ Platform Overview }",
  title: "BUILD A CONNECTED KNOWLEDGE LAYER ACROSS YOUR ORGANIZATION",
  body: [
    "Knowledge about business can be dispersed among different media such as documents, databases, knowledge bases and corporate software. It is difficult for employees to obtain knowledge that could be used in their work.",
    "Contekxtra is able to integrate all this knowledge into one context sensitive environment.",
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
    meta: "Knowledge Discovery",
    image: project1,
    alt: "Knowledge management dashboard",
  },
  {
    id: "business-analysts",
    title: "Business and Research Teams",
    meta: "Contextual Analysis",
    image: project2,
    alt: "Data analysis and reporting interface",
  },
  {
    id: "it-operations",
    title: "IT & Operations",
    meta: "Operational Knowledge",
    image: project3,
    alt: "System architecture mapping",
  },
  {
    id: "customer-support",
    title: "Customer Support Teams",
    meta: "Support Intelligence",
    image: project4,
    alt: "Support agent intelligence interface",
  },
  {
    id: "enterprise-data",
    title: "Enterprise Data Teams",
    meta: "Connected Data Context",
    image: process1,
    alt: "Connected enterprise data mapping",
  },
];

export const processSteps = [
  {
    num: "1",
    title: "Knowledge Ingestion",
    text: "Link the information sources including documents, knowledge bases, databases, apps and other internal sources.",
    image: process2,
    alt: "Data connection architecture",
  },
  {
    num: "2",
    title: "Semantic Analysis",
    text: "Perform semantic analysis to detect meaning, entities and information patterns in the content.",
    image: process3,
    alt: "Semantic processing visualization",
  },
  {
    num: "3",
    title: "Context Detection",
    text: "Detect relationships among the knowledge sources to create the context of enterprise information.",
    image: process1,
    alt: "Context mapping visualization",
  },
  {
    num: "4",
    title: "Information Retrieval",
    text: "Understand the intent of users to retrieve the relevant information from the knowledge sources.",
    image: process3,
    alt: "Information retrieval interface",
  },
  {
    num: "5",
    title: "Contextual Response",
    text: "Provide context-based answers, abstracts and information.",
    image: process2,
    alt: "Contextual response visualization",
  },
  {
    num: "6",
    title: "Business Application",
    text: "Enable people to utilize organizational knowledge for research, operational purposes and decision making.",
    image: process1,
    alt: "Business intelligence application",
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
