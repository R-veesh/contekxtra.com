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
  name: "Brightedge",
  tagline: "Digital design studio",
  email: "studio@brightedge.example",
  phone: "+1 (415) 555 0142",
  address: "24 Harbour Lane, Suite 900, San Francisco",
};

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Studio", href: "#studio" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  kicker: "Digital design",
  title: "Creators",
  lede: "Beautiful design has the power to move people — we build brands and digital products that carry that weight from first pixel to final launch.",
  image: heroMain,
  imageAlt: "Brushed aluminium and matte white tiles arranged in a grid",
};

export const marqueeItems = [
  "Brand systems",
  "Digital products",
  "Motion design",
  "Art direction",
  "Web experiences",
  "Growth strategy",
];

export const services = [
  {
    id: "branding",
    name: "Branding",
    tag: "Identity",
    image: service1,
    description:
      "Positioning, naming and visual identity systems built to survive scale — from the first sketch to a documented brand library.",
    points: ["Brand strategy & narrative", "Logo & identity systems", "Guidelines and asset kits"],
  },
  {
    id: "web-design",
    name: "Web Design",
    tag: "UI / UX",
    image: service2,
    description:
      "Interfaces designed around real behaviour: clear hierarchy, deliberate motion and layouts that hold up on every screen size.",
    points: ["Research & wireframes", "Design systems in Figma", "Prototyping & usability testing"],
  },
  {
    id: "development",
    name: "Development",
    tag: "Coding",
    image: service3,
    description:
      "Fast, accessible front-ends and reliable integrations. We ship code that your team can actually maintain after handover.",
    points: ["React & headless builds", "Performance engineering", "CMS and API integration"],
  },
  {
    id: "marketing",
    name: "Marketing",
    tag: "Integrations",
    image: service4,
    description:
      "Campaign systems, analytics and content pipelines that turn a beautiful launch into measurable, compounding growth.",
    points: ["SEO & content systems", "Lifecycle campaigns", "Analytics & reporting"],
  },
];

export const about = {
  eyebrow: "{ About the studio }",
  title: "A small team obsessed with the details others skip",
  body: [
    "Brightedge is an independent design practice working with founders and in-house teams who care about craft. We keep the group deliberately small so the people you meet are the people doing the work.",
    "Every engagement starts with the same question: what should this product feel like the moment someone lands on it? Everything after that — the type, the motion, the copy — answers it.",
  ],
  images: [
    { src: about1, alt: "Designers collaborating around a bright studio table" },
    { src: about2, alt: "Overhead view of colour swatches and a tablet on a desk" },
  ],
};

export const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Done" },
  { value: 140, suffix: "+", label: "Happy Clients" },
  { value: 98, suffix: "%", label: "Satisfied Clients" },
];

export const clientLogos = [
  "Northwind",
  "Kestrel",
  "Lumen",
  "Vantage",
  "Orbit",
  "Solace",
  "Pinnacle",
  "Everly",
  "Cobalt",
  "Meridian",
  "Ashford",
  "Halo",
];

export const projects = [
  {
    id: "perfect-frame",
    title: "The Perfect Frame",
    meta: "Branding — 2025",
    image: project1,
    alt: "Handcrafted eyewear displayed on a beige pedestal",
  },
  {
    id: "appflow",
    title: "AppFlow",
    meta: "Product design — 2025",
    image: project2,
    alt: "Fintech mobile app interface on a blue gradient background",
  },
  {
    id: "verdant",
    title: "Verdant Goods",
    meta: "Identity — 2024",
    image: project3,
    alt: "Green branded stationery and packaging flat lay",
  },
  {
    id: "signal-xr",
    title: "Signal XR",
    meta: "Campaign — 2024",
    image: project4,
    alt: "Person wearing a VR headset lit with red and blue light",
  },
];

export const processSteps = [
  {
    num: "1",
    title: "Discovery",
    text: "We map the business, the audience and the constraints before a single frame is drawn.",
    image: process2,
    alt: "Two designers reviewing sticky notes on a glass wall",
  },
  {
    num: "2",
    title: "Strategy",
    text: "Positioning, messaging and a project roadmap that everyone signs off on.",
    image: process3,
    alt: "Hands typing code on a laptop next to a second monitor",
  },
  {
    num: "3",
    title: "Design",
    text: "Concepts, then a full system — typography, colour, motion and component library.",
    image: process1,
    alt: "Person in an orange jacket working on a laptop against an orange backdrop",
  },
  {
    num: "4",
    title: "Build",
    text: "Front-end engineering with performance and accessibility as acceptance criteria.",
    image: process3,
    alt: "Close-up of a developer working on code",
  },
  {
    num: "5",
    title: "Delivering Success",
    text: "After a seamless launch we stay on for support and optimisation so results keep compounding.",
    image: process1,
    alt: "Creative professional working outdoors on a bright set",
  },
];

export const team = [
  { name: "Michael Rivera", role: "Brand Strategist", image: team1, alt: "Portrait of Michael Rivera" },
  { name: "Emily Carter", role: "Creative Director", image: team2, alt: "Portrait of Emily Carter" },
  { name: "Sarah Johnson", role: "Web Designer", image: team3, alt: "Portrait of Sarah Johnson" },
  { name: "Jason Lee", role: "Front-End Engineer", image: team4, alt: "Portrait of Jason Lee" },
  { name: "Anna Martinez", role: "Digital Marketing", image: team5, alt: "Portrait of Anna Martinez" },
  { name: "David Brown", role: "Motion Designer", image: team6, alt: "Portrait of David Brown" },
];

export const testimonials = [
  {
    quote:
      "They rebuilt our identity and site in eleven weeks and our demo requests doubled the month after launch.",
    author: "Priya Raman",
    role: "Founder, Northwind Labs",
  },
  {
    quote:
      "The most organised design partner we have worked with. Nothing was handed over half-finished.",
    author: "Tom Alvarez",
    role: "Head of Product, Kestrel",
  },
  {
    quote:
      "Every detail was considered — the motion, the copy, even the empty states. It feels expensive in the best way.",
    author: "Dana Whitfield",
    role: "CMO, Lumen",
  },
];

export const contact = {
  eyebrow: "{ Get in touch }",
  title: "Let's start your project today",
  person: {
    name: "Michael Bridges",
    role: `CEO, ${brand.name}`,
    avatar: team1,
  },
  bio: "At Brightedge we believe in building meaningful digital experiences. If you have questions or need guidance, I'm here to help — your success is our mission.",
  serviceOptions: ["Branding", "Web Design", "Development", "Marketing", "Something else"],
};

export const footerColumns = [
  {
    title: "Studio",
    links: [
      { label: "Services", href: "#services" },
      { label: "Our work", href: "#work" },
      { label: "Process", href: "#process" },
      { label: "Team", href: "#team" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: "#contact" },
      { label: "Instagram", href: "#contact" },
      { label: "LinkedIn", href: "#contact" },
      { label: "Behance", href: "#contact" },
    ],
  },
];
