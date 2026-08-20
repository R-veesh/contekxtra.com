import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { about, stats, clientLogos } from "@/data/content";
import { useReveal } from "@/hooks/useReveal";
import { useCountUp } from "@/hooks/useCountUp";
import Reveal from "./Reveal";

function Stat({ value, suffix, label, delay }) {
  const [ref, visible] = useReveal();
  const count = useCountUp(value, { start: visible });
  return (
    <div
      ref={ref}
      className={`stats__item reveal${visible ? " is-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="stats__value">
        {count}
        <sup>{suffix}</sup>
      </span>
      <span className="stats__label">{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <section className="section" id="platform">
      <div className="container">
        <div className="about">
          <Reveal variant="left" className="about__media">
            {about.images.map((img) => (
              <div className="about__shot" key={img.src}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </Reveal>

          <Reveal variant="right" className="about__copy">
            <span className="eyebrow">{about.eyebrow}</span>
            <h2 className="section-title">{about.title}</h2>
            {about.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
        </div>

        <div className="enterprise-env">
          <Reveal>
            <span className="eyebrow">{'{ Enterprise Solutions }'}</span>
            <h3 className="section-title">Designed for complex enterprise knowledge environments</h3>
            <p className="enterprise-env__desc">
              Built to support teams working across distributed information, operational systems and organizational knowledge sources.
            </p>
            <div className="enterprise-env__actions">
              <Link to="/product" className="btn">
                <span>Explore the Product</span>
                <ArrowUpRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Logos() {
  // Hidden as per user request
  return null;
}
