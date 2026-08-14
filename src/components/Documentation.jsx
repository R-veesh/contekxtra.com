import Reveal from "./Reveal";
import { ArrowUpRight } from "./icons";

const docs = [
  { title: "Knowledge integration APIs", desc: "Connect any data source" },
  { title: "Retrieval API documentation", desc: "Embed semantic search" },
  { title: "Data connection guides", desc: "Secure pipeline setup" },
  { title: "Platform SDK references", desc: "Build custom integrations" },
];

export default function Documentation() {
  return (
    <section className="section docs" id="documentation">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{"{ Documentation }"}</span>
          <h2 className="section-title">Developer API & Resources</h2>
        </Reveal>

        <div className="docs__grid">
          {docs.map((doc, i) => (
            <Reveal key={doc.title} delay={i * 60}>
              <a className="doc-card" href="#">
                <span className="doc-card__title">{doc.title}</span>
                <span className="doc-card__desc">{doc.desc}</span>
                <span className="doc-card__icon"><ArrowUpRight /></span>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300} className="docs__coming-soon">
          <p>Full Developer Documentation Coming Soon.</p>
        </Reveal>
      </div>
    </section>
  );
}
