import { useState } from "react";
import { contact } from "@/data/content";
import { useForm, ValidationError } from "@formspree/react";
import { ArrowUpRight } from "./icons";
import Reveal from "./Reveal";

export default function Contact() {
  const [state, handleSubmit] = useForm("mbgrbarq");
  
  // Local state for tracking input values to manage placeholder/controlled styles if necessary,
  // but Formspree handles the actual submission.
  const [values, setValues] = useState({ name: "", email: "", company: "", service: "", message: "" });

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
  };

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
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__field">
                <label className="form__label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="form__input"
                  value={values.name}
                  onChange={update("name")}
                  placeholder="Your name"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="form__error" />
              </div>

              <div className="form__field">
                <label className="form__label" htmlFor="email">
                  Business Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form__input"
                  value={values.email}
                  onChange={update("email")}
                  placeholder="you@company.com"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="form__error" />
              </div>

              <div className="form__field form__field--full">
                <label className="form__label" htmlFor="company">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  className="form__input"
                  value={values.company}
                  onChange={update("company")}
                  placeholder="Your organization"
                  required
                />
                <ValidationError prefix="Company" field="company" errors={state.errors} className="form__error" />
              </div>

              <div className="form__field form__field--full">
                <label className="form__label" htmlFor="service">
                  Enquiry Type
                </label>
                <select
                  id="service"
                  name="service"
                  className="form__select"
                  value={values.service}
                  onChange={update("service")}
                  required
                >
                  <option value="">Select an enquiry type</option>
                  {contact.serviceOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
                <ValidationError prefix="Enquiry Type" field="service" errors={state.errors} className="form__error" />
              </div>

              <div className="form__field form__field--full">
                <label className="form__label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form__textarea"
                  value={values.message}
                  onChange={update("message")}
                  placeholder="Tell us about your organization's knowledge challenges..."
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="form__error" />
              </div>

              {state.succeeded && (
                <p className="form__status" role="status" aria-live="polite">
                  Thanks — we'll be in touch shortly.
                </p>
              )}

              {state.errors && state.errors.length > 0 && (
                <p className="form__status" role="status" aria-live="polite">
                  Please fix the errors above or complete the security check.
                </p>
              )}

              <div className="form__field form__field--full">
                <button className="btn" type="submit" disabled={state.submitting}>
                  <span>{state.submitting ? "Sending…" : "Contact Our Team"}</span>
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
