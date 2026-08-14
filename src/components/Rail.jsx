import { useEffect, useState } from "react";
import { brand, navLinks } from "@/data/content";
import { Social } from "./icons";

const socials = ["instagram", "linkedin", "x", "behance"];

export default function Rail({ open, onToggle }) {
  return (
    <header className="rail">
      <div className="rail__brand">
        <span className="rail__mark" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c.4 4.9 5.1 9.6 10 10-4.9.4-9.6 5.1-10 10-.4-4.9-5.1-9.6-10-10 4.9-.4 9.6-5.1 10-10Z" />
          </svg>
        </span>
        <a href="#top" className="rail__wordmark">
          {brand.name}
        </a>
      </div>

      <button
        type="button"
        className="burger"
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={onToggle}
      >
        <span />
        <span />
      </button>

      <nav className="rail__socials" aria-label="Social links">
        {socials.map((s) => (
          <a key={s} className="rail__social" href="#contact" aria-label={s}>
            <Social name={s} />
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
      if (link.href.startsWith("#")) {
        const id = link.href.substring(1);
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
            const isActive = activeId === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
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
            <strong>Studio</strong>
            {brand.address}
          </div>
          <div>
            <strong>Email</strong>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
          </div>
          <div>
            <strong>Phone</strong>
            <a href={`tel:${brand.phone.replace(/\s/g, "")}`}>{brand.phone}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
