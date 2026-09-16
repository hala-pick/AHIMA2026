import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, Send } from "lucide-react";
import { handleTiltMove, handleTiltLeave } from "../lib/tilt";
import Reveal from "./Reveal";
import "./Forms.css";
import "./ContactSection.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CONTACT_CARDS = [
  {
    icon: Mail,
    label: "Email us",
    // TODO: replace with the real sales/contact inbox
    value: "sales@reviewmate.example",
    href: "mailto:sales@reviewmate.example",
  },
  {
    icon: Phone,
    label: "Call us",
    // TODO: replace with the real phone number
    value: "+1 (000) 000-0000",
    href: "tel:+10000000000",
  },
  {
    icon: MapPin,
    label: "Visit us at AHIMA 2026",
    value: "Booth #957",
    href: "#top",
  },
];

const initialValues = { name: "", email: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Tell us a bit about your question.";
  return errors;
}

export default function ContactSection() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const update = (field) => (e) =>
    setValues((v) => ({ ...v, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setDone(true);
  };

  return (
    <section id="contact" className="section contact cv-auto">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Let's Talk</span>
          <h2>Have a question before the demo?</h2>
          <p>Reach out any time — or stop by our booth at AHIMA 2026.</p>
        </Reveal>

        <div className="contact__grid">
          <Reveal as="div" className="contact__cards">
            {CONTACT_CARDS.map(({ icon: Icon, label, value, href }) => (
              <a className="contact-card" href={href} key={label}>
                <span className="contact-card__icon">
                  <Icon size={20} />
                </span>
                <span>
                  <span className="contact-card__label">{label}</span>
                  <span className="contact-card__value">{value}</span>
                </span>
              </a>
            ))}
          </Reveal>

          <Reveal
            as="div"
            delay={80}
            className="contact__form-card tilt-card"
            onMouseMove={(e) => handleTiltMove(e, { maxTiltX: 4, maxTiltY: 5, lift: 0 })}
            onMouseLeave={handleTiltLeave}
          >
            {done ? (
              <div className="form-success">
                <div className="form-success__icon">
                  <CheckCircle2 size={26} />
                </div>
                <h3>Message sent</h3>
                <p>Thanks for reaching out — we'll get back to you soon.</p>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => {
                    setValues(initialValues);
                    setDone(false);
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit}>
                <div className="form-row form-row--2">
                  <div className={`form-field ${errors.name ? "has-error" : ""}`}>
                    <label htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      value={values.name}
                      onChange={update("name")}
                      placeholder="Your name"
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  <div className={`form-field ${errors.email ? "has-error" : ""}`}>
                    <label htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      value={values.email}
                      onChange={update("email")}
                      placeholder="you@company.com"
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className={`form-field ${errors.message ? "has-error" : ""}`}>
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    value={values.message}
                    onChange={update("message")}
                    placeholder="How can we help?"
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Send message <Send size={16} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
