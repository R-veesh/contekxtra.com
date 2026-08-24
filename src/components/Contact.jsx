import { useState } from "react";
import { contact } from "@/data/content";
import { sendContactMessage } from "@/services/api";
import { Turnstile } from "@marsidev/react-turnstile";
import { ArrowUpRight } from "./icons";
import Reveal from "./Reveal";

const EMPTY = { name: "", email: "", company: "", service: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please tell us your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Enter a valid business email address.";
  if (!values.company.trim()) errors.company = "Please tell us your company.";
  if (!values.service) errors.service = "Choose an enquiry type.";
  if (values.message.trim().length < 12)
    errors.message = "A little more detail helps (12 characters minimum).";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [token, setToken] = useState("");

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus("Please fix the highlighted fields.");
      return;
    }
    if (!token) {
      setStatus("Please complete the security check.");
      return;
    }
    setSending(true);
    setStatus("Sending…");
    try {
      const res = await sendContactMessage({ ...values, "cf-turnstile-response": token });
      setStatus(res.message ?? "Thanks — we'll be in touch shortly.");
      setValues(EMPTY);
    } catch {
      setStatus("Something went wrong. Please email us directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact__grid">
          <Reveal variant="left">
            <span className="eyebrow">{contact.eyebrow}</span>
            <h2 className="section-title">{contact.title}</h2>
            <div className="contact__person">
              <img
                className="contact__avatar"
                src={contact.person.avatar}
                alt={contact.person.name}
                loading="lazy"
              />
              <p className="contact__name">
                {contact.person.name}
                <span>{contact.person.role}</span>
              </p>
            </div>
            <p className="contact__bio">{contact.bio}</p>

            <div className="contact__locations">
              <div>
                <h4>USA Office</h4>
                <p>535 Mission Street, San Francisco, CA 94105, USA</p>
                <p>+1 415 555 2147</p>
              </div>
              <div>
                <h4>Sri Lanka Office</h4>
                <p>Level 4, Orion City, Dr Danister de Silva Mawatha, Colombo 09, Sri Lanka</p>
                <p>+94 11 245 7812</p>
              </div>
              <div>
                <h4>General Enquiries</h4>
                <p><a href="mailto:info@contekxtra.com">info@contekxtra.com</a></p>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <form className="form" onSubmit={onSubmit} noValidate>
              <div className="form__field">
                <label className="form__label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  className="form__input"
                  value={values.name}
                  onChange={update("name")}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                />
                {errors.name ? <span className="form__error">{errors.name}</span> : null}
              </div>

              <div className="form__field">
                <label className="form__label" htmlFor="email">
                  Business Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form__input"
                  value={values.email}
                  onChange={update("email")}
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email ? <span className="form__error">{errors.email}</span> : null}
              </div>

              <div className="form__field form__field--full">
                <label className="form__label" htmlFor="company">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  className="form__input"
                  value={values.company}
                  onChange={update("company")}
                  placeholder="Your organization"
                  aria-invalid={!!errors.company}
                />
                {errors.company ? <span className="form__error">{errors.company}</span> : null}
              </div>

              <div className="form__field form__field--full">
                <label className="form__label" htmlFor="service">
                  Enquiry Type
                </label>
                <select
                  id="service"
                  className="form__select"
                  value={values.service}
                  onChange={update("service")}
                  aria-invalid={!!errors.service}
                >
                  <option value="">Select an enquiry type</option>
                  {contact.serviceOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
                {errors.service ? <span className="form__error">{errors.service}</span> : null}
              </div>

              <div className="form__field form__field--full">
                <label className="form__label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="form__textarea"
                  value={values.message}
                  onChange={update("message")}
                  placeholder="Tell us about your organization's knowledge challenges..."
                  aria-invalid={!!errors.message}
                />
                {errors.message ? <span className="form__error">{errors.message}</span> : null}
              </div>

              <p className="form__status" role="status" aria-live="polite">
                {status}
              </p>

              <div className="form__field form__field--full" style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}>
                <Turnstile
                  siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                  onSuccess={(token) => {
                    setToken(token);
                    setStatus("");
                  }}
                  onError={() => setStatus("Security check failed. Please try again.")}
                  onExpire={() => {
                    setToken("");
                    setStatus("Security check expired. Please complete it again.");
                  }}
                />
              </div>

              <div className="form__field form__field--full">
                <button className="btn" type="submit" disabled={sending}>
                  <span>{sending ? "Sending…" : "Contact Our Team"}</span>
                  <ArrowUpRight />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
