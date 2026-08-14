import Reveal from "./Reveal";

export default function Newsletter() {
  return (
    <section className="section newsletter" id="newsletter">
      <div className="container">
        <Reveal>
          <div className="newsletter__card">
            <div className="newsletter__content">
              <span className="eyebrow">{"{ Stay Updated }"}</span>
              <h2 className="newsletter__title">Get the latest insights in your inbox</h2>
              <p className="newsletter__desc">
                Subscribe to our newsletter for the latest knowledge management trends, product updates, and enterprise solutions.
              </p>
            </div>
            <div className="newsletter__form-wrapper">
              <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  className="newsletter__input" 
                  placeholder="Enter your email address" 
                  required 
                />
                <button type="submit" className="newsletter__submit">
                  Subscribe
                </button>
              </form>
              <p className="newsletter__disclaimer">
                We care about your data in our <a href="#">privacy policy</a>.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
