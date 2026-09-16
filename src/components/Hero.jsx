import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Search,
  ShieldCheck,
  Activity,
  FileCheck2,
  Bot,
  BarChart3,
  ListChecks,
  Star,
  Layers,
  Lock,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { uiTicker } from "../data/features";
import { supportsTilt } from "../lib/tilt";
import "./Hero.css";

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export default function Hero() {
  const iconsRef = useRef(null);
  const orbsRef = useRef(null);
  const pendingRef = useRef(false);
  const baseOrientationRef = useRef(null);
  const [needsMotionPermission, setNeedsMotionPermission] = useState(false);
  const [motionActive, setMotionActive] = useState(false);

  function applyTilt(px, py) {
    if (iconsRef.current) {
      iconsRef.current.style.transform = `rotateX(${py * -10}deg) rotateY(${px * 14}deg)`;
    }
    if (orbsRef.current) {
      orbsRef.current.style.transform = `translate3d(${px * 24}px, ${py * 18}px, 0)`;
    }
  }

  function handleMouseMove(e) {
    if (!supportsTilt() || pendingRef.current) return;
    pendingRef.current = true;
    const target = e.currentTarget;
    const { clientX, clientY } = e;

    requestAnimationFrame(() => {
      pendingRef.current = false;
      const rect = target.getBoundingClientRect();
      const px = (clientX - rect.left) / rect.width - 0.5;
      const py = (clientY - rect.top) / rect.height - 0.5;
      applyTilt(px, py);
    });
  }

  function handleMouseLeave() {
    pendingRef.current = false;
    if (iconsRef.current) iconsRef.current.style.transform = "";
    if (orbsRef.current) orbsRef.current.style.transform = "";
  }

  function handleOrientation(e) {
    if (e.beta == null || e.gamma == null) return;
    if (!baseOrientationRef.current) {
      baseOrientationRef.current = { beta: e.beta, gamma: e.gamma };
    }
    if (pendingRef.current) return;
    pendingRef.current = true;

    requestAnimationFrame(() => {
      pendingRef.current = false;
      const base = baseOrientationRef.current;
      const px = clamp((e.gamma - base.gamma) / 30, -0.5, 0.5);
      const py = clamp((e.beta - base.beta) / 30, -0.5, 0.5);
      applyTilt(px, py);
      setMotionActive(true);
    });
  }

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia("(pointer: coarse)").matches) return undefined;
    if (typeof window.DeviceOrientationEvent === "undefined") return undefined;

    if (typeof window.DeviceOrientationEvent.requestPermission === "function") {
      setNeedsMotionPermission(true);
      return undefined;
    }

    window.addEventListener("deviceorientation", handleOrientation);
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, []);

  function handleEnableTilt() {
    window.DeviceOrientationEvent.requestPermission()
      .then((state) => {
        if (state === "granted") {
          window.addEventListener("deviceorientation", handleOrientation);
        }
        setNeedsMotionPermission(false);
      })
      .catch(() => setNeedsMotionPermission(false));
  }

  return (
    <section id="top" className="hero" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="hero__pattern" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__orbs" ref={orbsRef} aria-hidden="true">
        <span className="hero__orb hero__orb--1" />
        <span className="hero__orb hero__orb--2" />
        <span className="hero__orb hero__orb--3" />
      </div>

      <div className={`hero__icons ${motionActive ? "hero__icons--motion" : ""}`} ref={iconsRef} aria-hidden="true">
        <Search className="hero__icon hero__icon--1" strokeWidth={1.2} />
        <ShieldCheck className="hero__icon hero__icon--2" strokeWidth={1.2} />
        <Activity className="hero__icon hero__icon--3" strokeWidth={1.2} />
        <FileCheck2 className="hero__icon hero__icon--4" strokeWidth={1.2} />
        <Bot className="hero__icon hero__icon--5" strokeWidth={1.2} />
        <BarChart3 className="hero__icon hero__icon--6" strokeWidth={1.2} />
        <ListChecks className="hero__icon hero__icon--7" strokeWidth={1.2} />
        <Layers className="hero__icon hero__icon--8" strokeWidth={1.2} />
        <Lock className="hero__icon hero__icon--9" strokeWidth={1.2} />
        <TrendingUp className="hero__icon hero__icon--10" strokeWidth={1.2} />
      </div>

      <div className="container hero__inner">
        <div className="hero__badge">
          <MapPin size={14} />
          <span>Meet us at AHIMA 2026 — Booth #957</span>
        </div>

        {needsMotionPermission && (
          <button type="button" className="hero__tilt-btn" onClick={handleEnableTilt}>
            <Sparkles size={13} /> Tap to enable tilt
          </button>
        )}

        <h1 className="hero__title">
          <Star className="hero__title-star" strokeWidth={1.5} aria-hidden="true" />
          The <span className="hero__title-gold">Gold Standard</span> for
          <span className="hero__title-accent"> Medical Coding Audits</span>
          <span className="hero__title-punch"> — Just Got Smarter.</span>
        </h1>

        <p className="hero__subtitle">
          ReviewMate 8 is here — a smarter, AI-powered auditing platform with
          customizable views, a reimagined document manager, a drag-and-drop
          report builder, and full CDI & RVU support. Come see what's new.
        </p>

        <div className="hero__actions">
          <a href="#demo" className="btn btn-white">
            Schedule a Demo <ArrowRight size={18} />
          </a>
          <a href="#features" className="btn btn-ghost-white">
            Explore What's New
          </a>
        </div>

        <div className="hero__meta">
          <CalendarDays size={16} />
          <span>AHIMA 2026 &middot; October 4–6</span>
        </div>
      </div>

      <div className="hero__ticker" aria-label="Also new in ReviewMate 8">
        <div className="hero__ticker-track">
          {[...uiTicker, ...uiTicker, ...uiTicker, ...uiTicker].map((item, i) => (
            <span className="hero__ticker-item" key={`${item}-${i}`}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
