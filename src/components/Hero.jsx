import { hero, marqueeItems } from "@/data/content";
import { ArrowUpRight, ArrowDown } from "./icons";
import Reveal from "./Reveal";
import videoUrl from "@/assets/heroSectionVideo.mp4";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__copy">
        <Reveal>
          <span className="hero__kicker">{hero.kicker}</span>
          <h1 className="hero__title">
            {hero.title}<em>.</em>
          </h1>
          <p className="hero__lede">{hero.lede}</p>
          <div className="hero__actions">
            <a className="btn" href="/product">
              <span>Explore the Platform</span>
              <ArrowUpRight />
            </a>
            <a className="circle-btn" href="#capabilities" aria-label="Scroll to capabilities">
              <ArrowDown />
            </a>
            <span className="hero__scroll-label">Scroll to explore</span>
          </div>
        </Reveal>
      </div>

      <Reveal variant="scale" className="hero__media">
        <video src={videoUrl} autoPlay loop muted playsInline />
      </Reveal>

      <span className="hero__badge">Global Headquarters — San Francisco</span>
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
