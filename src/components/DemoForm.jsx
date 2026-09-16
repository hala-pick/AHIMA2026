import { useState } from "react";
import { CalendarCheck, Loader2, Send } from "lucide-react";
import { handleTiltMove, handleTiltLeave } from "../lib/tilt";
import Reveal from "./Reveal";
import "./Forms.css";
import "./DemoForm.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialValues = {
  name: "",
  email: "",
  organization: "",
  teamSize: "",
  date: "",
  notes: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please tell us your name.";
  if (!values.email.trim()) {
    errors.email = "Work email is required.";
  } else if (!EMAIL_RE.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.organization.trim()) {
    errors.organization = "Organization is required.";
  }
  return errors;
}

export default function DemoForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const update = (field) => (e) =>
    setValues((v) => ({ ...v, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    // Visual-only for now — no backend/CRM wired up yet.
    window.setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 700);
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setDone(false);
  };

  return (
    <section id="demo" className="section demo cv-auto">
      <div className="container demo__inner">
        <Reveal as="div" className="demo__copy">
          <span className="eyebrow">Live at AHIMA 2026</span>
          <h2>See ReviewMate 8 in action</h2>
          <p>
            Bring your toughest audit workflow — we'll show you how System
            Views, the AI assistant, and the new Report Developer handle it
            live. Fifteen minutes, no pressure.
          </p>
          <ul className="demo__points">
            <li>Personalized walkthrough for your audit type</li>
            <li>Live Q&amp;A with a ReviewMate product specialist</li>
            <li>No commitment — just a look under the hood</li>
          </ul>
        </Reveal>

        <Reveal
          as="div"
          delay={80}
          className="demo__card tilt-card"
          onMouseMove={(e) => handleTiltMove(e, { maxTiltX: 4, maxTiltY: 5, lift: 0 })}
          onMouseLeave={handleTiltLeave}
        >
          {done ? (
            <div className="form-success">
              <div className="form-success__icon">
                <CalendarCheck size={26} />
              </div>
              <h3>Request received!</h3>
              <p>
                Thanks, {values.name.split(" ")[0] || "there"} — our team will
                reach out shortly to lock in your ReviewMate 8 demo.
              </p>
              <button type="button" className="btn btn-outline" onClick={reset}>
                Schedule another
              </button>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit}>
              <div className={`form-field ${errors.name ? "has-error" : ""}`}>
                <label htmlFor="demo-name">Full name</label>
                <input
                  id="demo-name"
                  type="text"
                  value={values.name}
                  onChange={update("name")}
                  placeholder="Jordan Rivera"
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className="form-row form-row--2">
                <div className={`form-field ${errors.email ? "has-error" : ""}`}>
                  <label htmlFor="demo-email">Work email</label>
                  <input
                    id="demo-email"
                    type="email"
                    value={values.email}
                    onChange={update("email")}
                    placeholder="jordan@healthsystem.org"
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className={`form-field ${errors.organization ? "has-error" : ""}`}>
                  <label htmlFor="demo-org">Organization</label>
                  <input
                    id="demo-org"
                    type="text"
                    value={values.organization}
                    onChange={update("organization")}
                    placeholder="Acme Health System"
                  />
                  {errors.organization && (
                    <span className="form-error">{errors.organization}</span>
                  )}
                </div>
              </div>

              <div className="form-row form-row--2">
                <div className="form-field">
                  <label htmlFor="demo-size">Coding team size</label>
                  <select id="demo-size" value={values.teamSize} onChange={update("teamSize")}>
                    <option value="">Select one</option>
                    <option value="1-10">1–10</option>
                    <option value="11-50">11–50</option>
                    <option value="51-200">51–200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="demo-date">Preferred date</label>
                  <input
                    id="demo-date"
                    type="date"
                    value={values.date}
                    onChange={update("date")}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="demo-notes">Anything you'd like us to cover?</label>
                <textarea
                  id="demo-notes"
                  value={values.notes}
                  onChange={update("notes")}
                  placeholder="e.g. Inpatient DRG workflow, CDI reporting..."
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
                {submitting ? (
                  <>
                    <Loader2 className="spin" size={18} /> Submitting...
                  </>
                ) : (
                  <>
                    Request my demo <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
