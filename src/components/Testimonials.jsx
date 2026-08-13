import { useEffect, useState } from "react";
import { testimonials } from "@/data/content";
import Reveal from "./Reveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [swapping, setSwapping] = useState(false);

  useEffect(() => {
    const id = setInterval(() => go((i) => (i + 1) % testimonials.length), 7000);
    return () => clearInterval(id);
  }, []);

  function go(next) {
    setSwapping(true);
    setTimeout(() => {
      setIndex(next);
      setSwapping(false);
    }, 300);
  }

  const active = testimonials[index];

  return (
    <section className="section section--tight quotes">
      <div className="container">
        <Reveal className="quotes__inner">
          <span className="quotes__mark" aria-hidden="true">
            &ldquo;
          </span>
          <p className={`quotes__text${swapping ? " is-swapping" : ""}`} aria-live="polite">
            {active.quote}
          </p>
          <div className="quotes__foot">
            <p className="quotes__author">
              {active.author}
              <span>{active.role}</span>
            </p>
            <div className="quotes__dots">
              {testimonials.map((t, i) => (
                <button
                  key={t.author}
                  type="button"
                  className={`quotes__dot${i === index ? " is-active" : ""}`}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => go(i)}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
