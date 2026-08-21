import { brand, footerColumns } from "@/data/content";
import logoUrl from "@/images/Contekxtra Logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <a className="footer__brand" href="#top">
              <img src={logoUrl} alt={brand.name} />
            </a>
            <p className="footer__pitch">
              ContekXtra helps teams navigate complex organizational information by revealing meaning, relevance, and relationships across connected resources.
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="footer__col-title">{col.title}</p>
              <nav className="footer__links" aria-label={col.title}>
                {col.links.map((l) => (
                  <a key={l.label} href={l.href}>
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <p className="footer__wordmark" aria-hidden="true">
          {brand.name}
        </p>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </span>
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
        </div>
      </div>
    </footer>
  );
}
