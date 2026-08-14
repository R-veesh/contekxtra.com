import { brand, footerColumns } from "@/data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <a className="footer__brand" href="#top">
              {brand.name}
            </a>
            <p className="footer__pitch">
              {brand.tagline} building intelligent solutions for organizations who care about context.
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
