import { useState } from "react";
import Reveal from "./Reveal";
import { sendNewsletterUpdate } from "@/services/api";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("Subscribing...");
    try {
      await sendNewsletterUpdate({ email });
      setStatus("Thanks for subscribing!");
      setEmail("");
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  };

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
              <form className="newsletter__form" onSubmit={handleSubmit}>
                <input 
                  type="email" 
                  className="newsletter__input" 
                  placeholder="Enter your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
                <button type="submit" className="newsletter__submit">
                  Subscribe
                </button>
              </form>
              {status && <p style={{ marginTop: "12px", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>{status}</p>}
              <p className="newsletter__disclaimer" style={{ marginTop: status ? "4px" : "16px" }}>
                We care about your data in our <a href="#">privacy policy</a>.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
