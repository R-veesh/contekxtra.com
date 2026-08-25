import { pricingPlans } from "@/data/content";
import Reveal from "./Reveal";
import { ArrowUpRight } from "./icons";

export default function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{"{ Pricing }"}</span>
          <h2 className="section-title">CHOOSE YOUR PLAN</h2>
        </Reveal>

        <div className="pricing__grid">
          {pricingPlans.map((plan, i) => (
            <Reveal
              key={plan.id}
              delay={i * 80}
              className={`pricing-card${plan.highlight ? " pricing-card--highlight" : ""}`}
            >
              <div className="pricing-card__head">
                <h3 className="pricing-card__name">{plan.name}</h3>
                <div className="pricing-card__price">
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <p className="pricing-card__desc">{plan.description}</p>
              </div>
              <div className="pricing-card__body">
                <ul className="pricing-card__features">
                  {plan.features.map((feature, j) => (
                    <li key={j}>
                      <span className="bullet" aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pricing-card__foot">
                <a
                  className={plan.highlight ? "btn" : "btn btn--outline"}
                  href={plan.href || "#contact"}
                  target={plan.href ? "_blank" : "_self"}
                  rel={plan.href ? "noopener noreferrer" : ""}
                >
                  <span>{plan.cta}</span>
                  <ArrowUpRight />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
