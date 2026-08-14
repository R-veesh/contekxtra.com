import { useState } from "react";
import { contact } from "@/data/content";
import { sendContactMessage } from "@/services/api";
import { ArrowUpRight } from "./icons";
import Reveal from "./Reveal";

const EMPTY = { name: "", email: "", service: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please tell us your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Enter a valid email address.";
  if (!values.service) errors.service = "Choose a service.";
  if (values.message.trim().length < 12)
    errors.message = "A little more detail helps (12 characters minimum).";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

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
    setSending(true);
    setStatus("Sending…");
    try {
      const res = await sendContactMessage(values);
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
                  Email
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
                <label className="form__label" htmlFor="service">
                  Service
                </label>
                <select
                  id="service"
                  className="form__select"
                  value={values.service}
                  onChange={update("service")}
                  aria-invalid={!!errors.service}
                >
                  <option value="">Select a service</option>
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

              <div className="form__field form__field--full">
                <button className="btn" type="submit" disabled={sending}>
                  <span>{sending ? "Sending…" : "Send message"}</span>
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
