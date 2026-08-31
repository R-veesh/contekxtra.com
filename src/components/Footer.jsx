import { brand, footerColumns } from "@/data/content";
import logoUrl from "@/images/Contekxtra Logo.svg";
import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <Link className="footer__brand" to="/" hash="top">
              <img src={logoUrl} alt={brand.name} />
            </Link>
            <p className="footer__pitch">
              ContekXtra helps teams navigate complex organizational information by revealing meaning, relevance, and relationships across connected resources.
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="footer__col-title">{col.title}</p>
              <nav className="footer__links" aria-label={col.title}>
                {col.links.map((l) => {
                  // Handle /#hash links (e.g. /#capabilities → navigate to / with hash)
                  const hashMatch = l.href.match(/^\/(#.+)$/);
                  if (hashMatch) {
                    return (
                      <Link key={l.label} to="/" hash={hashMatch[1].slice(1)}>
                        {l.label}
                      </Link>
                    );
                  }
                  // Handle page routes (e.g. /privacy, /terms)
                  if (l.href.startsWith("/")) {
                    return (
                      <Link key={l.label} to={l.href}>
                        {l.label}
                      </Link>
                    );
                  }
                  // Fallback for any plain hash or external links
                  return (
                    <a key={l.label} href={l.href}>
                      {l.label}
                    </a>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>

        <p className="footer__wordmark" aria-hidden="true">
          {brand.name}
        </p>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {brand.legalName || brand.name}. All rights reserved.
          </span>
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
        </div>
      </div>
    </footer>
  );
}
