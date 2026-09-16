import { Rocket } from "lucide-react";
import { features } from "../data/features";
import { Icon } from "../lib/icons";
import { handleTiltMove, handleTiltLeave } from "../lib/tilt";
import Reveal from "./Reveal";
import "./Spotlight.css";

const SPOTLIGHT_IDS = ["ai-suite", "dynamic-forms", "recommendation-bank"];

export default function Spotlight() {
  const items = SPOTLIGHT_IDS.map((id) => features.find((f) => f.id === id)).filter(Boolean);

  return (
    <section className="section spotlight cv-auto">
      <div className="spotlight__pattern" aria-hidden="true" />
      <div className="spotlight__blobs" aria-hidden="true">
        <span className="spotlight__blob spotlight__blob--1" />
        <span className="spotlight__blob spotlight__blob--2" />
      </div>

      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">
            <Rocket size={13} /> Fresh in ReviewMate 8
          </span>
          <h2>The upgrades you'll actually brag about</h2>
          <p>Three headline features, straight off the release notes. The other ten are below.</p>
        </Reveal>

        <div className="spotlight__grid">
          {items.map((feature, i) => (
            <Reveal
              as="article"
              key={feature.id}
              className="spotlight__card"
              delay={i * 90}
              onMouseMove={(e) => handleTiltMove(e, { maxTiltX: 10, maxTiltY: 12, lift: 6, perspective: 700 })}
              onMouseLeave={handleTiltLeave}
            >
              <span className="spotlight__badge">New</span>
              <span className="spotlight__icon">
                <Icon name={feature.icon} size={26} />
              </span>
              <span className="spotlight__title">{feature.title}</span>
              <p className="spotlight__hook">{feature.hook}</p>
              <p className="spotlight__short">{feature.short}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="spotlight__more">
          <a href="#features" className="btn btn-outline">
            See all 13 upgrades ↓
          </a>
        </Reveal>
      </div>
    </section>
  );
}
