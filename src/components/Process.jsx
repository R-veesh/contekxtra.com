import { useEffect, useRef, useState } from "react";
import { processSteps } from "@/data/content";
import Reveal from "./Reveal";

export default function Process() {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = trackRef.current;
    if (!node) return undefined;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh * 0.4;
      const seen = vh * 0.7 - rect.top;
      setProgress(Math.max(0, Math.min(1, seen / total)) * 100);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="section process" id="pipeline">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{"{ Architecture Pipeline }"}</span>
          <h2 className="section-title">HOW CONTEKXTRA PROCESSES YOUR KNOWLEDGE</h2>
        </Reveal>

        <div className="process__track" ref={trackRef}>
          <span
            className="process__line"
            aria-hidden="true"
            style={{ "--progress": `${progress}%` }}
          />
          {processSteps.map((step, i) => (
            <Reveal
              key={step.num}
              variant={i % 2 === 0 ? "left" : "right"}
              className={`step${i % 2 === 1 ? " step--reverse" : ""}`}
            >
              <div className="step__media">
                <img src={step.image} alt={step.alt} loading="lazy" />
              </div>
              <span className="step__dot" aria-hidden="true" />
              <div className="step__body">
                <span className="step__num">{step.num}</span>
                <div>
                  <h3 className="step__title">{step.title}</h3>
                  <p className="step__text">{step.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
