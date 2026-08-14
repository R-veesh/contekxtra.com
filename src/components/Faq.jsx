import { useState } from "react";
import { faq } from "@/data/content";
import { Plus } from "./icons";
import Reveal from "./Reveal";

export default function Faq() {
  const [active, setActive] = useState(null);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="faq__layout">
          <div className="faq__sticky">
            <Reveal className="section-head">
              <span className="eyebrow">{faq.eyebrow}</span>
              <h2 className="section-title">{faq.title}</h2>
            </Reveal>
            <Reveal delay={100} className="faq__media">
              <img src={faq.image} alt="FAQ context" />
            </Reveal>
          </div>
          
          <div className="faq__list">
            {faq.questions.map((item, i) => {
              const isOpen = active === i;
              return (
                <Reveal key={i} delay={i * 50} className={`faq__item${isOpen ? " is-open" : ""}`}>
                  <button 
                    type="button"
                    className="faq__question"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span>{item.q}</span>
                    <span className="faq__icon" aria-hidden="true">
                      <Plus />
                    </span>
                  </button>
                  <div className="faq__answer" id={`faq-answer-${i}`}>
                    <div className="faq__answer-inner">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
