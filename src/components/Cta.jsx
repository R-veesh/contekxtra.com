import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Cta() {
  return (
    <section className="section final-cta" id="final-cta">
      <div className="container">
        <Reveal>
          <div className="final-cta__card">
            <span className="eyebrow">Start a Conversation</span>
            <h2 className="final-cta__title">BRING CLARITY TO COMPLEX KNOWLEDGE</h2>
            <p className="final-cta__desc">
              Give your teams a smarter way to explore information, recognize connections and find what matters.
            </p>
            <div className="final-cta__actions">
              <a href="#contact" className="btn">
                <span>Request a Demo</span>
                <ArrowUpRight />
              </a>
              <Link to="/product" className="button">
                Explore the Platform
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
