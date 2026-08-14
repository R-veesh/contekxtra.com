import { useRef } from "react";
import { projects } from "@/data/content";
import Reveal from "./Reveal";

function ProjectCard({ project }) {
  const cardRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <a 
      ref={cardRef}
      className="project-card" 
      href="#contact"
      onMouseMove={handleMouseMove}
    >
      <div className="project-card__media">
        <img src={project.image} alt={project.alt} loading="lazy" />
        <div className="project-card__overlay"></div>
      </div>
      
      <div className="project-card__content">
        <span className="project-card__pill">{project.meta}</span>
        <h3 className="project-card__title">{project.title}</h3>
      </div>
      
      <div className="project-card__view">
        <span className="project-card__view-text">View</span>
        <span className="project-card__view-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </span>
      </div>
    </a>
  );
}

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
            <Reveal 
              key={project.id} 
              delay={i * 80} 
              className="project-card-wrapper"
              style={{ '--index': i }}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
