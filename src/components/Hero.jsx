import { hero, marqueeItems } from "@/data/content";
import { ArrowUpRight, ArrowDown } from "./icons";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__copy">
        <Reveal>
          <span className="hero__kicker">{hero.kicker}</span>
          <h1 className="hero__title">
            {hero.title} <em>.</em>
          </h1>
          <p className="hero__lede">{hero.lede}</p>
          <div className="hero__actions">
            <a className="btn" href="#contact">
              <span>Start a project</span>
              <ArrowUpRight />
            </a>
            <a className="circle-btn" href="#services" aria-label="Scroll to services">
              <ArrowDown />
            </a>
            <span className="hero__scroll-label">Scroll to explore</span>
          </div>
        </Reveal>
      </div>

      <Reveal variant="scale" className="hero__media">
        <img src={hero.image} alt={hero.imageAlt} />
      </Reveal>

      <span className="hero__badge">Est. 2015 — San Francisco</span>
    </section>
  );
}

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((item, i) => (
          <span className="marquee__item" key={`${item}-${i}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
