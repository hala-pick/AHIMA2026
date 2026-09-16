import {
  Bot,
  PencilRuler,
  Columns3,
  BarChart3,
  FolderOpen,
  Library,
  ListChecks,
  CheckCircle2,
  Building2,
  Paperclip,
  Gauge,
  Stethoscope,
  CircleDollarSign,
  Sparkles,
  LayoutDashboard,
  FolderKanban,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";

export const iconMap = {
  Bot,
  PencilRuler,
  Columns3,
  BarChart3,
  FolderOpen,
  Library,
  ListChecks,
  CheckCircle2,
  Building2,
  Paperclip,
  Gauge,
  Stethoscope,
  CircleDollarSign,
  Sparkles,
  LayoutDashboard,
  FolderKanban,
  ShieldCheck,
  HeartPulse,
};

export function Icon({ name, ...rest }) {
  const Cmp = iconMap[name];
  if (!Cmp) return null;
  return <Cmp {...rest} />;
}
