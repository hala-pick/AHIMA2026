import { useState } from "react";
import { Sparkles, BarChart3, ListChecks } from "lucide-react";
import { categories, features } from "../data/features";
import { Icon } from "../lib/icons";
import FeatureCard from "./FeatureCard";
import Reveal from "./Reveal";
import "./Features.css";

export default function Features() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find((c) => c.id === activeId);
  const visible = features.filter((f) => f.category === activeId);

  return (
    <section id="features" className="section features cv-auto">
      <div className="features__pattern" aria-hidden="true" />
      <div className="features__blobs" aria-hidden="true">
        <span className="features__blob features__blob--1" />
        <span className="features__blob features__blob--2" />
      </div>
      <div className="features__watermarks" aria-hidden="true">
        <Sparkles className="features__watermark features__watermark--1" strokeWidth={1} />
        <BarChart3 className="features__watermark features__watermark--2" strokeWidth={1} />
        <ListChecks className="features__watermark features__watermark--3" strokeWidth={1} />
      </div>

      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">What's New in ReviewMate 8</span>
          <h2>Everything auditors asked for. And a few things they didn't know to.</h2>
          <p>
            Fourteen major upgrades across the platform — grouped below so you
            can jump straight to what matters to your team.
          </p>
        </Reveal>

        <div className="features__tabs" role="tablist" aria-label="Feature categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={cat.id === activeId}
              className={`features__tab ${cat.id === activeId ? "is-active" : ""}`}
              onClick={() => setActiveId(cat.id)}
            >
              <Icon name={cat.icon} size={16} />
              {cat.label}
            </button>
          ))}
        </div>

        <p className="features__category-blurb">{active.blurb}</p>

        <div className="features__grid">
          {visible.map((feature, i) => (
            <Reveal as="div" key={feature.id} delay={i * 60}>
              <FeatureCard feature={feature} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
