import { projects } from "@/data/content";
import { ArrowUpRight } from "./icons";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section className="section projects" id="solutions">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{"{ Enterprise Solutions }"}</span>
          <h2 className="section-title">Designed for modern knowledge organizations</h2>
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <a className="project-card" href="#contact">
                <span className="project-card__media">
                  <img src={project.image} alt={project.alt} loading="lazy" />
                  <span className="project-card__overlay">
                    <span className="project-card__chip">
                      View project <ArrowUpRight size={14} />
                    </span>
                  </span>
                </span>
                <span className="project-card__foot">
                  <span className="project-card__title">{project.title}</span>
                  <span className="project-card__meta">{project.meta}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
