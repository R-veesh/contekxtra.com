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
    <section className="section" id="studio">
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

        <div className="stats">
          {stats.map((s, i) => (
            <Stat key={s.label} {...s} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Logos() {
  return (
    <section className="section section--tight logos">
      <div className="container">
        <Reveal>
          <p className="logos__title">Trusted by teams at</p>
          <div className="logos__grid">
            {clientLogos.map((name) => (
              <span className="logos__item" key={name}>
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
