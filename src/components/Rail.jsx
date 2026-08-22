import { useEffect, useState } from "react";
import { brand, navLinks } from "@/data/content";
import { Social, ArrowUpRight } from "./icons";
import logoUrl from "@/images/Contekxtra Logo.svg";

const socials = [
  { name: "instagram", url: "/#contact" },
  { name: "linkedin", url: "https://www.linkedin.com/company/contekxtra/" },
  { name: "x", url: "/#contact" },
  { name: "behance", url: "/#contact" },
];

export default function Rail({ open, onToggle }) {
  return (
    <header className="rail">
      <div className="rail__brand">
        <a href="/" className="rail__logo-link" aria-label={brand.name}>
          <img src={logoUrl} alt="ContekXtra Logo" className="rail__logo" />
        </a>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", order: 1 }}>
        <button
          className="burger"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={onToggle}
        >
          <span />
          <span />
        </button>
        <a
          href="/product"
          className="rail__cta-pill"
          title="ContekXtra C.1 Product Page"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "6px 12px",
            borderRadius: "999px",
            background: "var(--color-accent)",
            color: "#ffffff",
            fontSize: "0.72rem",
            fontWeight: "700",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 12px rgba(240, 82, 59, 0.3)",
            transition: "transform 0.25s ease",
          }}
        >
          C.1 App
        </a>
      </div>

      <nav className="rail__socials" aria-label="Social links">
        {socials.map((s) => (
          <a
            key={s.name}
            className="rail__social"
            href={s.url}
            aria-label={s.name}
            target={s.url !== "/#contact" ? "_blank" : undefined}
            rel={s.url !== "/#contact" ? "noopener noreferrer" : undefined}
          >
            <Social name={s.name} />
          </a>
        ))}
      </nav>
    </header>
  );
}

export function Menu({ open, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    navLinks.forEach((link) => {
      if (link.href.includes("#")) {
        const id = link.href.split("#")[1];
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [mounted]);

  return (
    <div id="site-menu" className={`menu${open ? " is-open" : ""}`} aria-hidden={!open}>
      <div className="menu__inner">
        <nav className="menu__list" aria-label="Primary">
          {navLinks.map((link, i) => {
            const linkId = link.href.includes("#") ? link.href.split("#")[1] : "";
            const isActive = linkId && activeId === linkId;
            const isHomePage = typeof window !== "undefined" && (window.location.pathname === "/" || window.location.pathname === "");
            const href = !isHomePage && link.href.startsWith("#") ? `/${link.href}` : link.href;

            return (
              <a
                key={link.href}
                href={href}
                className={`menu__link ${isActive ? "is-active" : ""}`}
                style={{ "--delay": `${0.08 * i + 0.15}s` }}
                tabIndex={open && mounted ? 0 : -1}
                onClick={onClose}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                {link.label}
              </a>
            );
          })}
        </nav>
        <div className="menu__aside">
          <div>
            <strong>Featured AI Product</strong>
            <p style={{ fontSize: "0.88rem", marginBottom: "12px", color: "rgba(255,255,255,0.7)" }}>
              Discover ContekXtra C.1 — Neural Context &amp; Enterprise Intelligence Engine.
            </p>
            <a
              href="/product"
              className="btn"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={onClose}
            >
              <span>Explore ContekXtra C.1</span>
              <ArrowUpRight />
            </a>
          </div>
          <div>
            <strong>USA Office</strong>
            535 Mission Street, San Francisco, CA 94105, USA
          </div>
          <div>
            <strong>Sri Lanka Office</strong>
            Level 4, Orion City, Dr Danister de Silva Mawatha, Colombo 09, Sri Lanka
          </div>
          <div>
            <strong>Email</strong>
            <a href="mailto:info@contekxtra.com">info@contekxtra.com</a>
          </div>
          <div>
            <strong>USA Phone</strong>
            <a href="tel:+14155552147">+1 415 555 2147</a>
          </div>
          <div>
            <strong>SL Phone</strong>
            <a href="tel:+94112457812">+94 11 245 7812</a>
          </div>
        </div>
      </div>
    </div>
  );
}
