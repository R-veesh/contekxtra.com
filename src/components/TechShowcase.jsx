import Reveal from "./Reveal";

const techStack = [
  "NeMo Retriever",
  "NeMo",
  "NIM",
  "Triton",
  "RAPIDS"
];

export default function TechShowcase() {
  return (
    <section className="section section--tight tech-showcase" id="technology">
      <div className="container">
        <Reveal className="tech-showcase__inner">
          <span className="eyebrow">{"{ SDK / Technology Integration }"}</span>
          <h2 className="tech-showcase__title">Powered by Advanced AI Technologies</h2>
          <p className="tech-showcase__desc">
            ContekXtra leverages state-of-the-art AI infrastructure and models to process enterprise data securely and intelligently.
          </p>
          <div className="tech-showcase__grid">
            {techStack.map((tech, i) => (
              <span className="tech-showcase__item" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
