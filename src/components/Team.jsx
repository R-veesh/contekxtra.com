import { team } from "@/data/content";
import Reveal from "./Reveal";

export default function Team() {
  return (
    <section className="section team" id="team">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{"{ Leadership }"}</span>
          <h2 className="section-title">The team behind ContekXtra</h2>
        </Reveal>

        <div className="team__grid">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 70} className="member">
              <div className="member__media">
                <img src={member.image} alt={member.alt} loading="lazy" />
              </div>
              <h3 className="member__name">{member.name}</h3>
              <p className="member__role">{member.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
