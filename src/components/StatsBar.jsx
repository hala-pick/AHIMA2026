import { Sparkles, LayoutDashboard, ShieldCheck, HeartPulse } from "lucide-react";
import "./StatsBar.css";

const STATS = [
  { icon: Sparkles, value: "14", label: "Major enhancements in v8" },
  { icon: LayoutDashboard, value: "AI", label: "Powered automation, built in" },
  { icon: ShieldCheck, value: "100%", label: "Configurable to your policies" },
  { icon: HeartPulse, value: "CDI + RVU", label: "Native clinical & financial insight" },
];

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="container stats-bar__grid">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div className="stats-bar__item" key={label}>
            <Icon size={20} />
            <div>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
