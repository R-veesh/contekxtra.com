import { Link } from "@tanstack/react-router";
import "@/styles/main.scss";

export default function Product() {
  return (
    <div className="site">
      <main className="product-page" style={{ paddingTop: "clamp(80px, 12vw, 160px)", minHeight: "100vh" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="eyebrow">Enterprise Context Intelligence</span>
          <h1 className="section-title" style={{ margin: "16px auto", maxWidth: "20ch" }}>
            The ContekXtra Platform
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontSize: "1.2rem", marginTop: "24px", color: "var(--color-ink-soft)" }}>
            Connect all your fragmented data sources into a single, unified intelligence layer.
          </p>
          
          <div style={{ marginTop: "60px", display: "flex", justifyContent: "center", gap: "20px" }}>
            <Link to="/" className="button">
              <span className="arrow" style={{ transform: "rotate(-180deg)", display: "inline-block", marginRight: "8px" }}>↗</span> Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
