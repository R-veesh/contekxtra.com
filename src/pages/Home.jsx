import { useState } from "react";
import Rail, { Menu } from "@/components/Rail";
import Hero, { Marquee } from "@/components/Hero";
import Services from "@/components/Services";
import About, { Logos } from "@/components/About";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import TechShowcase from "@/components/TechShowcase";
import Pricing from "@/components/Pricing";
import Documentation from "@/components/Documentation";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import "@/styles/main.scss";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Rail open={menuOpen} onToggle={() => setMenuOpen((o) => !o)} />
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="site">
        <main>
          <Hero />
          <Marquee />
          <Services />
          <About />
          <Logos />
          <Projects />
          <Process />
          <TechShowcase />
          <Pricing />
          <Documentation />
          <Team />
          <Testimonials />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
