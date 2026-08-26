import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import { useForm, ValidationError } from "@formspree/react";

export default function Newsletter() {
  const [state, handleSubmit] = useForm("xnparbaw");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("newsletter_subscribed") === "true") {
      setIsSubscribed(true);
    }
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      setIsSubscribed(true);
      localStorage.setItem("newsletter_subscribed", "true");
      setEmail("");
    }
  }, [state.succeeded]);

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
                  name="email"
                  className="newsletter__input" 
                  placeholder="Enter your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={state.submitting || isSubscribed}
                  required 
                />
                <button 
                  type="submit" 
                  className="newsletter__submit"
                  disabled={state.submitting || isSubscribed}
                >
                  {state.submitting ? "Subscribing..." : (isSubscribed ? "Subscribed" : "Subscribe")}
                </button>
              </form>
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              
              {(state.succeeded || isSubscribed) && (
                <p style={{ marginTop: "12px", color: "#4ade80", fontSize: "0.9rem" }}>
                  {isSubscribed && !state.succeeded ? "You are already subscribed!" : "Thanks for subscribing!"}
                </p>
              )}
              {state.errors && state.errors.length > 0 && (
                <p style={{ marginTop: "12px", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
                  Something went wrong. Please try again.
                </p>
              )}

              <p className="newsletter__disclaimer" style={{ marginTop: (state.succeeded || state.errors?.length || isSubscribed) ? "4px" : "16px" }}>
                We care about your data in our <a href="/privacy">privacy policy</a>.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
