import { useCallback, useRef, useState } from "react";
import { services } from "@/data/content";
import { Plus } from "./icons";
import Reveal from "./Reveal";

export default function Services() {
  const [active, setActive] = useState(services[0].id);
  const [hovered, setHovered] = useState(null);
  const previewRef = useRef(null);

  const onMove = useCallback((e) => {
    const el = previewRef.current;
    if (!el) return;
    el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  }, []);

  const hoveredService = services.find((s) => s.id === hovered);

  return (
    <section className="section services" id="capabilities" onMouseMove={onMove}>
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{"{ Platform Capabilities }"}</span>
          <h2 className="section-title">CORE CONTEXT INTELLIGENCE CAPABILITIES.</h2>
        </Reveal>

        <div className="services__list">
          {services.map((service, i) => {
            const isActive = active === service.id;
            return (
              <Reveal
                key={service.id}
                delay={i * 60}
                className={`service${isActive ? " is-active" : ""}`}
              >
                <button
                  type="button"
                  className="service__row"
                  aria-expanded={isActive}
                  aria-controls={`panel-${service.id}`}
                  onClick={() => setActive(isActive ? null : service.id)}
                  onMouseEnter={() => setHovered(service.id)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(service.id)}
                  onBlur={() => setHovered(null)}
                >
                  <span className="service__index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="service__name">{service.name}</span>
                  <span className="service__tag">{service.tag}</span>
                  <span className="service__toggle" aria-hidden="true">
                    <Plus />
                  </span>
                </button>

                <div className="service__panel" id={`panel-${service.id}`}>
                  <div>
                    <div className="service__body">
                      <p>{service.description}</p>
                      <ul className="service__points">
                        {service.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div
        ref={previewRef}
        className={`service-preview${hoveredService ? " is-visible" : ""}`}
        aria-hidden="true"
      >
        {hoveredService ? <img src={hoveredService.image} alt="" /> : null}
      </div>
    </section>
  );
}
