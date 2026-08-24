import heroMain from "@/images/Platform Overview.svg";
import service1 from "@/images/Context Engine.svg";
import service2 from "@/images/Semantic Search.svg";
import service3 from "@/images/Knowledge Assistant.svg";
import service4 from "@/images/Knowledge graph.svg";
import about1 from "@/images/Platform Overview.svg";
import about2 from "@/images/Semantic Search.svg";
import project1 from "@/images/enterprise knowledge teams.svg";
import project2 from "@/images/business & research teams.svg";
import project3 from "@/images/IT & Operations.svg";
import project4 from "@/images/customers support teams.svg";
import project5 from "@/images/Enterprise data Team.svg";
import process1 from "@/images/Knowledge Ingestion.svg";
import process2 from "@/images/Semantic Analysis.svg";
import process3 from "@/images/Context Detection.svg";
import process4 from "@/images/Information Retrieval.svg";
import process5 from "@/images/Contextual Response.svg";
import process6 from "@/images/Business Application.svg";
import team1 from "@/images/Dr. Nathaniel Cross.svg";
import team2 from "@/images/Isabelle Duran.svg";
import team3 from "@/images/Amara Okonkwo.svg";
import team4 from "@/images/David Alby.svg";
import team5 from "@/images/Aiko Tanaka.svg";
import team6 from "@/images/Ethan Wu.svg";
import testimonial1 from "@/images/Jonathan Reed.svg";
import testimonial2 from "@/images/Melissa Carter.svg";
import testimonial3 from "@/images/Christopher Lee.svg";
import testimonial4 from "@/images/Marcus Bennett.svg";
import testimonial5 from "@/images/Natalie Brooks.svg";
import testimonial6 from "@/images/Lauren Mitchell.svg";
import faqImage from "@/images/FAQ.svg";
import contactImage from "@/images/Contact us.svg";

export const brand = {
  name: "ContekXtra",
  tagline: "Enterprise Context Intelligence",
  email: "info@contekxtra.com",
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
    image: project5,
    alt: "Connected enterprise data mapping",
  },
];

export const processSteps = [
  {
    num: "1",
    title: "Knowledge Ingestion",
    text: "Link the information sources including documents, knowledge bases, databases, apps and other internal sources.",
    image: process1,
    alt: "Data connection architecture",
  },
  {
    num: "2",
    title: "Semantic Analysis",
    text: "Perform semantic analysis to detect meaning, entities and information patterns in the content.",
    image: process2,
    alt: "Semantic processing visualization",
  },
  {
    num: "3",
    title: "Context Detection",
    text: "Detect relationships among the knowledge sources to create the context of enterprise information.",
    image: process3,
    alt: "Context mapping visualization",
  },
  {
    num: "4",
    title: "Information Retrieval",
    text: "Understand the intent of users to retrieve the relevant information from the knowledge sources.",
    image: process4,
    alt: "Information retrieval interface",
  },
  {
    num: "5",
    title: "Contextual Response",
    text: "Provide context-based answers, abstracts and information.",
    image: process5,
    alt: "Contextual response visualization",
  },
  {
    num: "6",
    title: "Business Application",
    text: "Enable people to utilize organizational knowledge for research, operational purposes and decision making.",
    image: process6,
    alt: "Business intelligence application",
  },
];

export const team = [
  { name: "Dr. Nathaniel Cross", role: "Chief AI Scientist", image: team1, alt: "Portrait of Dr. Nathaniel Cross" },
  { name: "Isabelle Duran", role: "VP of Engineering", image: team2, alt: "Portrait of Isabelle Duran" },
  { name: "Amara Okonkwo", role: "Head of Enterprise Solutions", image: team3, alt: "Portrait of Amara Okonkwo" },
  { name: "David Alby", role: "Lead Architect", image: team4, alt: "Portrait of David Alby" },
  { name: "Aiko Tanaka", role: "Director of Product", image: team5, alt: "Portrait of Aiko Tanaka" },
  { name: "Ethan Wu", role: "Customer Success Lead", image: team6, alt: "Portrait of Ethan Wu" },
];

export const testimonials = [
  {
    quote:
      "ContekXtra transformed how our research teams find information. What used to take hours of digging through fragmented systems now takes seconds with precise contextual answers.",
    author: "Jonathan Reed",
    role: "VP of Research",
    image: testimonial1,
  },
  {
    quote:
      "Unlike traditional enterprise search that just gives you a list of links, ContekXtra actually understands the relationships between our data sources.",
    author: "Melissa Carter",
    role: "Chief Knowledge Officer",
    image: testimonial2,
  },
  {
    quote:
      "The Semantic Retrieval capabilities have reduced our support resolution times by 40%. Our agents have the exact organizational context they need instantly.",
    author: "Christopher Lee",
    role: "Head of Operations",
    image: testimonial3,
  },
  {
    quote:
      "It's rare to find a platform that is both strategically powerful and incredibly easy to deploy. ContekXtra gave us both.",
    author: "Marcus Bennett",
    role: "Brand Consultant",
    image: testimonial4,
  },
  {
    quote:
      "Every step was thoughtfully executed. They asked the right questions from day one and delivered beyond our expectations.",
    author: "Natalie Brooks",
    role: "Operations Manager",
    image: testimonial5,
  },
  {
    quote:
      "We've seen a massive uptick in team engagement and productivity since launching. The time saved is just incredible.",
    author: "Lauren Mitchell",
    role: "Customer Success",
    image: testimonial6,
  },
];

export const contact = {
  eyebrow: "{ Contact Us }",
  title: "LET’S DISCUSS YOUR KNOWLEDGE ENVIRONMENT",
  person: {
    name: "Amara Okonkwo",
    role: `Head of Enterprise Solutions, ContekXtra`,
    avatar: contactImage,
  },
  bio: "Share your information sources, integration needs, and business use case. Our team will help identify a suitable ContekXtra approach.",
  serviceOptions: [
    "Platform Demonstration",
    "Integration Discussion",
    "Technical Architecture",
    "Enterprise Licensing",
    "Partnership Enquiry",
    "Other"
  ],
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
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export const pricingPlans = [
  {
    id: "starter",
    name: "Context Starter",
    price: "$70",
    period: "/ month",
    description: "For teams beginning with connected knowledge discovery and contextual retrieval.",
    features: [
      "Core knowledge-source connections",
      "Natural-language search",
      "Semantic retrieval",
      "Source-aware responses",
      "Standard workspace support",
    ],
    highlight: false,
    cta: "Start Free Trial",
    href: "https://buy.stripe.com/test_7sY3cxc7CaivaYm0VY8Vi01",
  },
  {
    id: "professional",
    name: "Professional Context",
    price: "$150",
    period: "/ month",
    description: "For organizations expanding context intelligence across teams and information environments.",
    features: [
      "Expanded knowledge connections",
      "Knowledge relationship mapping",
      "Intelligent Knowledge Assistant",
      "Contextual search workflows",
      "Knowledge activity insights",
      "Priority support options",
    ],
    highlight: true,
    cta: "Contact Sales",
    href: "https://buy.stripe.com/test_28E14p8VqeyLgiG3468Vi00",
  },
  {
    id: "enterprise",
    name: "Enterprise Context",
    price: "Custom",
    period: "",
    description: "For organizations with complex knowledge environments, integration requirements and governance needs.",
    features: [
      "Enterprise knowledge architecture",
      "Custom integration planning",
      "Advanced knowledge mapping",
      "Access and governance options",
      "Deployment configuration review",
      "Dedicated implementation support options",
    ],
    highlight: false,
    cta: "Request Custom Quote",
  },
];

export const faq = {
  eyebrow: "{ FAQ }",
  title: "WHAT’S THE CONTEXT?",
  image: faqImage,
  questions: [
    {
      q: "What is ContekXtra?",
      a: "ContekXtra connects organizational knowledge to return context and source-based answers."
    },
    {
      q: "What information does it process?",
      a: "Documents, databases, knowledge bases, applications, portals, and other organizational solutions."
    },
    {
      q: "Is it different from traditional search?",
      a: "It applies meaning, intent, and knowledge connections in addition to keyword searching."
    },
    {
      q: "Who is the target audience for ContekXtra?",
      a: "Knowledge professionals, analysts, researchers, IT, operations, data, and general employees."
    },
    {
      q: "Does it connect to existing systems?",
      a: "This is possible depending on the source type, data format, and integration technique."
    },
    {
      q: "Does it have an API?",
      a: "Integration and data retrieval APIs are planned for future development and deployment."
    },
    {
      q: "How long does implementation take?",
      a: "This depends on the number of sources, integration and data preparation."
    },
    {
      q: "How is enterprise information secured?",
      a: "Security controls depend on the organization's policy, infrastructure, and deployment specifics."
    }
  ]
};
