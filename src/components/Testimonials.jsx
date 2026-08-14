import { testimonials } from "@/data/content";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{"{ What Our Clients Are Saying }"}</span>
          <h2 className="section-title">TESTIMONIALS THAT INSPIRE CONFIDENCE</h2>
        </Reveal>
        
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 50} className="testimonial-card">
              <div className="testimonial-card__header">
                <img src={t.image} alt={t.author} className="testimonial-card__avatar" />
                <div className="testimonial-card__meta">
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
              <p className="testimonial-card__quote">{t.quote}</p>
              <div className="testimonial-card__stars" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
