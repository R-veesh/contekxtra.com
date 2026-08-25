import Reveal from "./Reveal";
import { ArrowUpRight } from "./icons";

const docs = [
  { title: "Knowledge integration APIs", desc: "Connect any data source", href: "#pipeline" },
  { title: "Retrieval API documentation", desc: "Embed semantic search", href: "#capabilities" },
  { title: "Data connection guides", desc: "Secure pipeline setup", href: "#contact" },
  { title: "Platform SDK references", desc: "Build custom integrations", href: "/product" },
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
              <a className="doc-card" href={doc.href}>
                <span className="doc-card__title">{doc.title}</span>
                <span className="doc-card__desc">{doc.desc}</span>
                <span className="doc-card__icon"><ArrowUpRight /></span>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300} className="docs__coming-soon">
          <p>Developer documentation and integration resources are coming soon</p>
        </Reveal>
      </div>
    </section>
  );
}
