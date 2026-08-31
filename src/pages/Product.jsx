import { Link } from "@tanstack/react-router";
import { useState } from "react";
import Rail, { Menu } from "@/components/Rail";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ArrowUpRight, ArrowDown } from "@/components/icons";
import {
  productInfo,
  sampleQueries,
  coreCapabilities,
  useCases,
  technicalDetailsNvidia,
  pipelineSteps,
  productFaq,
} from "@/data/productData";
import "@/styles/main.scss";

export default function Product() {
  const [menuOpen, setMenuOpen] = useState(false);

  // State for Live Query Demonstrator Sandbox
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const activeQuery = sampleQueries[activeQueryIndex];

  // State for Use Cases tab
  const [activeUseCaseId, setActiveUseCaseId] = useState("research");
  const activeUseCase = useCases.find((u) => u.id === activeUseCaseId) || useCases[0];

  // State for ROI Calculator
  const [teamSize, setTeamSize] = useState(25);
  const [hoursPerWeek, setHoursPerWeek] = useState(8);

  const calculateHoursSaved = () => {
    // Estimating 65% reduction in search and synthesis time
    const totalHoursPerYear = teamSize * hoursPerWeek * 48;
    const hoursSavedPerYear = Math.round(totalHoursPerYear * 0.65);
    const estimatedCostSavings = (hoursSavedPerYear * 65).toLocaleString("en-US");
    return { hoursSavedPerYear, estimatedCostSavings };
  };

  const { hoursSavedPerYear, estimatedCostSavings } = calculateHoursSaved();

  // State for Pipeline Simulator
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // State for Accordion FAQ
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <>
      <Rail open={menuOpen} onToggle={() => setMenuOpen((o) => !o)} />
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="site">
        <main className="product-page">
          {/* SECTION 1: HERO SECTION */}
          <section className="section product-hero">
            <div className="container">
              <Reveal>
                <div className="product-hero__badge">
                  <span className="dot" />
                  {productInfo.version}
                </div>
                <h1 className="product-hero__title">
                  The Neural Context Engine for <em>Next-Gen Enterprise</em> Intelligence.
                </h1>
                <p className="product-hero__subtitle">
                  {productInfo.heroSubtitle}
                </p>
                <div className="product-hero__actions">
                  <a
                    href={productInfo.liveAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn product-hero__primary-cta"
                  >
                    <span>Launch ContekXtra C.1</span>
                    <ArrowUpRight />
                  </a>
                  <a href="#capabilities" className="btn btn--ghost">
                    <span>Explore Features</span>
                  </a>
                </div>
              </Reveal>

              {/* Interactive Live Query Sandbox */}
              <Reveal variant="scale" className="query-sandbox">
                <div className="query-sandbox__header">
                  <div className="query-sandbox__chips">
                    {sampleQueries.map((q, idx) => (
                      <button
                        key={q.id}
                        type="button"
                        className={`query-sandbox__chip ${
                          idx === activeQueryIndex ? "query-sandbox__chip--active" : ""
                        }`}
                        onClick={() => setActiveQueryIndex(idx)}
                      >
                        {q.label}
                      </button>
                    ))}
                  </div>
                  <div className="query-sandbox__metrics">
                    <div className="metric">
                      <span>Latency</span>
                      <strong>{activeQuery.latency}</strong>
                    </div>
                    <div className="metric">
                      <span>Accuracy</span>
                      <strong>{activeQuery.accuracy}</strong>
                    </div>
                  </div>
                </div>

                <div className="query-sandbox__box">
                  <div className="query-sandbox__input-row">
                    <span className="prompt-symbol">C.1 &gt;</span>
                    <span>{activeQuery.query}</span>
                  </div>
                  <p className="query-sandbox__answer">{activeQuery.answer}</p>
                  <div className="query-sandbox__sources">
                    <span className="source-label">Source Citations:</span>
                    {activeQuery.sources.map((src, i) => (
                      <span className="source-pill" key={i}>
                        📄 {src.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* SECTION 2: CORE PLATFORM CAPABILITIES */}
          <section className="section section--tight" id="capabilities">
            <div className="container">
              <Reveal className="section-head">
                <span className="eyebrow">{"{ Core Capabilities }"}</span>
                <h2 className="section-title">Designed for Enterprise Scale &amp; Precision</h2>
              </Reveal>

              <div className="capability-grid">
                {coreCapabilities.map((cap, i) => (
                  <Reveal key={cap.id} style={{ transitionDelay: `${i * 0.08}s` }}>
                    <div className="capability-grid__card">
                      <div className="capability-grid__header">
                        <span className="capability-grid__metric">{cap.metric}</span>
                      </div>
                      <h3 className="capability-grid__title">{cap.title}</h3>
                      <p className="capability-grid__desc">{cap.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 3: ENTERPRISE USE CASES & ROI CALCULATOR */}
          <section className="section use-cases" id="solutions">
            <div className="container">
              <Reveal className="section-head">
                <span className="eyebrow">{"{ Enterprise Solutions }"}</span>
                <h2 className="section-title">Built for How High-Performing Teams Work</h2>
              </Reveal>

              <Reveal className="use-cases__tabs">
                {useCases.map((uc) => (
                  <button
                    key={uc.id}
                    type="button"
                    className={`use-cases__tab ${
                      uc.id === activeUseCaseId ? "use-cases__tab--active" : ""
                    }`}
                    onClick={() => setActiveUseCaseId(uc.id)}
                  >
                    {uc.title}
                  </button>
                ))}
              </Reveal>

              <Reveal className="use-cases__panel">
                <div>
                  <h3 className="use-cases__tagline">{activeUseCase.tagline}</h3>
                  <p className="use-cases__summary">{activeUseCase.summary}</p>
                  <ul className="use-cases__highlights">
                    {activeUseCase.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
                <div className="use-cases__impact-card">
                  <div className="label">Measured Business Impact</div>
                  <div className="value">{activeUseCase.impact}</div>
                </div>
              </Reveal>

              {/* Interactive ROI Calculator */}
              <Reveal className="roi-calculator">
                <h3 className="roi-calculator__title">Calculate Your Organization's Productivity Gain</h3>
                <p className="roi-calculator__desc">
                  See how much time and resources your enterprise saves with ContekXtra C.1's automated context discovery.
                </p>
                <div className="roi-calculator__grid">
                  <div className="roi-calculator__controls">
                    <div className="roi-calculator__slider-group">
                      <label htmlFor="team-size-slider">
                        <span>Knowledge Workers:</span>
                        <strong>{teamSize} Employees</strong>
                      </label>
                      <input
                        id="team-size-slider"
                        type="range"
                        min="5"
                        max="500"
                        step="5"
                        value={teamSize}
                        onChange={(e) => setTeamSize(Number(e.target.value))}
                      />
                    </div>
                    <div className="roi-calculator__slider-group">
                      <label htmlFor="hours-slider">
                        <span>Search &amp; Synthesis Time:</span>
                        <strong>{hoursPerWeek} Hours / Employee / Week</strong>
                      </label>
                      <input
                        id="hours-slider"
                        type="range"
                        min="2"
                        max="20"
                        step="1"
                        value={hoursPerWeek}
                        onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                      />
                    </div>
                  </div>
                  <div className="roi-calculator__result">
                    <div className="number">{hoursSavedPerYear.toLocaleString()} hrs</div>
                    <div className="unit">Saved Annually Across Your Team</div>
                    <div className="subtext">
                      Estimated value of reclaimed capacity: <strong>${estimatedCostSavings} / year</strong>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* SECTION 4: SCANNABLE NVIDIA ACCELERATED AI STACK */}
          <section className="section section--dark tech-details" id="architecture">
            <div className="container">
              <Reveal className="section-head">
                <span className="eyebrow" style={{ color: "var(--color-accent)" }}>
                  {"{ Core Technology & Infrastructure }"}
                </span>
                <h2 className="section-title" style={{ color: "#ffffff" }}>
                  Powered by NVIDIA Accelerated Computing
                </h2>
                <p style={{ color: "rgba(255, 255, 255, 0.72)", maxWidth: "56ch", marginTop: "16px", fontSize: "1.1rem" }}>
                  ContekXtra C.1 integrates NVIDIA's enterprise AI microservices and GPU-accelerated SDKs to deliver sub second response times and real time context mapping.
                </p>
              </Reveal>

              <div className="tech-details__grid">
                {technicalDetailsNvidia.map((item, idx) => (
                  <Reveal key={item.id} style={{ transitionDelay: `${idx * 0.08}s` }}>
                    <div className="tech-details__card">
                      <div className="tech-details__top">
                        <span className="tech-details__cat">{item.category}</span>
                        <span className="tech-details__badge">{item.badge}</span>
                      </div>
                      <h3 className="tech-details__sdk-name">{item.sdk}</h3>
                      <p className="tech-details__desc">{item.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 5: INTERACTIVE PIPELINE SIMULATOR */}
          <section className="section" id="pipeline">
            <div className="container">
              <Reveal className="section-head">
                <span className="eyebrow">{"{ Pipeline Execution }"}</span>
                <h2 className="section-title">End-to-End Context Pipeline</h2>
              </Reveal>

              <Reveal className="pipeline-sim">
                <div className="pipeline-sim__steps">
                  {pipelineSteps.map((step, idx) => (
                    <div
                      key={step.step}
                      className={`pipeline-sim__step ${
                        idx === activeStepIndex ? "pipeline-sim__step--active" : ""
                      }`}
                      onClick={() => setActiveStepIndex(idx)}
                    >
                      <div className="step-num">{step.step}</div>
                      <div className="step-title">{step.title}</div>
                      <div className="step-tech">{step.tech}</div>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    background: "var(--color-canvas)",
                    padding: "28px",
                    borderRadius: "16px",
                    border: "1px solid rgba(26, 26, 26, 0.1)",
                  }}
                >
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", marginBottom: "8px" }}>
                    Stage {pipelineSteps[activeStepIndex].step}: {pipelineSteps[activeStepIndex].title}
                  </h4>
                  <p style={{ color: "var(--color-ink-soft)", fontSize: "1.05rem", lineHeight: "1.65" }}>
                    {pipelineSteps[activeStepIndex].desc}
                  </p>
                </div>
              </Reveal>
            </div>
          </section>

          {/* SECTION 6: FAQ & FINAL HERO CTA BANNER */}
          <section className="section" id="faq">
            <div className="container">
              <Reveal className="section-head">
                <span className="eyebrow">{"{ FAQ }"}</span>
                <h2 className="section-title">Frequently Asked Questions</h2>
              </Reveal>

              <div style={{ maxWidth: "800px", margin: "0 auto 80px auto", display: "grid", gap: "16px" }}>
                {productFaq.map((faqItem, i) => {
                  const isOpen = openFaqIndex === i;
                  return (
                    <Reveal key={i}>
                      <div
                        style={{
                          background: "var(--color-white)",
                          border: "1px solid var(--color-line)",
                          borderRadius: "16px",
                          overflow: "hidden",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaqIndex(isOpen ? -1 : i)}
                          style={{
                            width: "100%",
                            padding: "24px 28px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            textAlign: "left",
                            fontFamily: "var(--font-display)",
                            fontSize: "1.15rem",
                            fontWeight: "700",
                            color: "var(--color-ink)",
                          }}
                        >
                          <span>{faqItem.q}</span>
                          <span style={{ fontSize: "1.4rem", color: "var(--color-accent)", marginLeft: "16px" }}>
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                        {isOpen && (
                          <div
                            style={{
                              padding: "0 28px 24px 28px",
                              color: "var(--color-ink-soft)",
                              fontSize: "1rem",
                              lineHeight: "1.65",
                              borderTop: "1px solid rgba(26,26,26,0.06)",
                              paddingTop: "16px",
                            }}
                          >
                            {faqItem.a}
                          </div>
                        )}
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              {/* Bottom CTA Card */}
              <Reveal>
                <div className="product-cta-banner">
                  <span className="eyebrow">
                    {"{ Get Started Today }"}
                  </span>
                  <h2 className="product-cta-banner__title">
                    Unlock sub second Enterprise Context Intelligence
                  </h2>
                  <p className="product-cta-banner__desc">
                    Experience ContekXtra C.1 in action or connect with our enterprise architecture team for a tailored demo.
                  </p>
                  <div className="product-cta-banner__actions">
                    <a
                      href={productInfo.liveAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn product-hero__primary-cta"
                    >
                      <span>Launch ContekXtra C.1</span>
                      <ArrowUpRight />
                    </a>
                    <a href="/#contact" className="btn btn--ghost" style={{ borderColor: "rgba(255,255,255,0.3)", color: "#ffffff" }}>
                      <span>Request Enterprise Demo</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
