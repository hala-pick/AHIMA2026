import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Icon } from "../lib/icons";
import "./FeatureCard.css";

export default function FeatureCard({ feature }) {
  const [open, setOpen] = useState(false);

  return (
    <article className={`feature-card ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="feature-card__trigger"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="feature-card__icon">
          <Icon name={feature.icon} size={22} />
        </span>
        <span className="feature-card__heading">
          <span className="feature-card__title">{feature.title}</span>
          <span className="feature-card__short">{feature.short}</span>
        </span>
        <ChevronDown className="feature-card__chevron" size={20} />
      </button>

      <div className="feature-card__panel">
        <div className="feature-card__panel-inner">
          <p>{feature.detail}</p>
        </div>
      </div>
    </article>
  );
}
