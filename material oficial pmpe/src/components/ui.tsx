import { motion } from "framer-motion";
import {
  AlertTriangle,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Lightbulb,
  Target,
  XCircle,
  type LucideIcon,
} from "lucide-react";
import { Fragment, type ReactNode } from "react";
import type { CalloutVariant, Tone } from "../data/types";

/* ============ termo destacado (marca-texto) ============ */
export function Hot({ tone = "y", children }: { tone?: Tone; children: ReactNode }) {
  const map = { y: "hl hl-y", c: "hl hl-c", v: "hl hl-v", e: "hl hl-e", r: "hl hl-r" };
  return <span className={map[tone]}>{children}</span>;
}

/* ============ mini-markup inline ============
   **negrito**   ==destaque==   `mono`                            */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|==[^=]+==|`[^`]+`)/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**"))
          return (
            <strong key={i} className="font-semibold text-strong">
              {p.slice(2, -2)}
            </strong>
          );
        if (p.startsWith("==") && p.endsWith("=="))
          return <Hot key={i}>{p.slice(2, -2)}</Hot>;
        if (p.startsWith("`") && p.endsWith("`"))
          return (
            <code
              key={i}
              className="font-mono text-[0.86em] rounded-md px-1.5 py-0.5 surface-strong text-strong"
            >
              {p.slice(1, -1)}
            </code>
          );
        return <Fragment key={i}>{p}</Fragment>;
      })}
    </>
  );
}

/* ============ caixas didáticas ============ */
const VARIANTS: Record<
  CalloutVariant,
  { label: string; icon: LucideIcon; cls: string; accent: string }
> = {
  conceito: { label: "Conceito", icon: BookOpen, cls: "cq-v", accent: "text-violet-500 dark:text-violet-300" },
  prova: { label: "Cai na prova!", icon: Target, cls: "cq-y", accent: "text-amber-600 dark:text-yellow-300" },
  pegadinha: { label: "Pegadinha clássica", icon: AlertTriangle, cls: "cq-r", accent: "text-rose-500 dark:text-rose-300" },
  macete: { label: "Macete do professor", icon: BrainCircuit, cls: "cq-e", accent: "text-emerald-600 dark:text-emerald-300" },
  exemplo: { label: "Exemplo prático", icon: Lightbulb, cls: "cq-c", accent: "text-cyan-600 dark:text-cyan-300" },
};

const CQ: Record<string, { border: string; bg: string }> = {
  "cq-v": { border: "border-violet-400/30", bg: "bg-violet-400/[0.07]" },
  "cq-y": { border: "border-amber-400/35", bg: "bg-amber-300/[0.09]" },
  "cq-r": { border: "border-rose-400/35", bg: "bg-rose-400/[0.07]" },
  "cq-e": { border: "border-emerald-400/35", bg: "bg-emerald-400/[0.07]" },
  "cq-c": { border: "border-cyan-400/35", bg: "bg-cyan-400/[0.07]" },
};

export function Callout({
  variant,
  title,
  children,
}: {
  variant: CalloutVariant;
  title?: string;
  children: ReactNode;
}) {
  const v = VARIANTS[variant];
  const Icon = v.icon;
  const c = CQ[v.cls];
  return (
    <div className={`my-5 rounded-2xl border ${c.border} ${c.bg} p-5 sm:p-6`}>
      <div className="flex items-center gap-2.5 mb-3">
        <span className={`grid place-items-center w-7 h-7 rounded-lg border ${c.border} ${v.accent}`}>
          <Icon size={15} strokeWidth={2.2} />
        </span>
        <span className={`text-[11px] font-bold uppercase tracking-[0.18em] ${v.accent}`}>
          {v.label}
        </span>
        {title && <span className="text-sm font-semibold text-strong">— {title}</span>}
      </div>
      <div className="text-[15px] leading-relaxed text-body space-y-2">{children}</div>
    </div>
  );
}

/* ============ reveal on scroll ============ */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============ cabeçalho de capítulo ============ */
export function SectionShell({
  id,
  num,
  kicker,
  title,
  icon: Icon,
  lead,
  children,
}: {
  id: string;
  num: string;
  kicker: string;
  title: ReactNode;
  icon?: LucideIcon;
  lead?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-14 sm:py-20">
      <Reveal>
        <div className="flex items-start gap-5 sm:gap-8">
          <span aria-hidden className="ghost-num font-display font-black text-[64px] sm:text-[96px] shrink-0 -mt-2">
            {num}
          </span>
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
              {Icon && <Icon size={14} />}
              {kicker}
            </span>
            <h2 className="font-display text-[32px] sm:text-5xl font-semibold leading-[1.05] text-strong mt-2 mb-4">
              {title}
            </h2>
            {lead && <p className="text-base sm:text-lg leading-relaxed text-muted max-w-2xl">{lead}</p>}
          </div>
        </div>
      </Reveal>
      <div className="mt-8 sm:mt-10">{children}</div>
    </section>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-[16px] sm:text-[16.5px] leading-[1.85] text-body mb-4">{children}</p>;
}

/* ============ blocos visuais ============ */
export function CardGrid({
  cols = 2,
  tone = "c",
  cards,
}: {
  cols?: 2 | 3;
  tone?: Tone;
  cards: { icon?: LucideIcon; title: string; text: string }[];
}) {
  const toneCls: Record<Tone, string> = {
    y: "hover:border-amber-400/40 text-amber-600 dark:text-yellow-300",
    c: "hover:border-cyan-400/40 text-cyan-600 dark:text-cyan-300",
    v: "hover:border-violet-400/40 text-violet-600 dark:text-violet-300",
    e: "hover:border-emerald-400/40 text-emerald-600 dark:text-emerald-300",
    r: "hover:border-rose-400/40 text-rose-600 dark:text-rose-300",
  };
  return (
    <div className={`grid gap-4 my-6 ${cols === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}>
      {cards.map((c) => (
        <div
          key={c.title}
          className={`group rounded-2xl border border-app surface p-5 transition-colors ${toneCls[tone]}`}
        >
          {c.icon && <c.icon size={20} className="mb-3" />}
          <h3 className="text-[15px] font-bold text-strong mb-1.5">
            <Rich text={c.title} />
          </h3>
          <p className="text-[13.5px] leading-relaxed text-muted">
            <Rich text={c.text} />
          </p>
        </div>
      ))}
    </div>
  );
}

export function DataTable({
  caption,
  head,
  rows,
}: {
  caption?: string;
  head: string[];
  rows: string[][];
}) {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-app">
      {caption && (
        <div className="bg-accent-soft border-b border-app px-5 py-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">{caption}</p>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[520px]">
          <thead>
            <tr className="surface-strong">
              {head.map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-strong border-b border-app"
                >
                  <Rich text={h} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={ri} className={ri % 2 ? "surface" : ""}>
                {r.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-4 py-3 text-[13.5px] leading-relaxed border-b border-app-soft align-top ${
                      ci === 0 ? "font-semibold text-strong" : "text-body"
                    }`}
                  >
                    <Rich text={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function TwoCol({
  title,
  left,
  right,
}: {
  title?: string;
  left: { label: string; text: string };
  right: { label: string; text: string };
}) {
  return (
    <div className="my-6 rounded-2xl border border-accent bg-accent-soft p-6 sm:p-7">
      {title && (
        <h3 className="font-display text-xl text-strong mb-4">
          <Rich text={title} />
        </h3>
      )}
      <div className="grid sm:grid-cols-2 gap-5 text-[14.5px] leading-relaxed">
        {[left, right].map((col, i) => (
          <div key={i}>
            <p
              className={`text-[11px] font-bold uppercase tracking-[0.18em] mb-2 ${
                i === 0 ? "text-cyan-600 dark:text-cyan-300" : "text-amber-600 dark:text-yellow-300"
              }`}
            >
              {col.label}
            </p>
            <p className="text-body">
              <Rich text={col.text} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Steps({ title, items }: { title?: string; items: { title: string; text: string }[] }) {
  return (
    <div className="my-6">
      {title && (
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent mb-4">{title}</p>
      )}
      <ol className="relative space-y-4 border-l-2 border-app pl-6">
        {items.map((it, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[31px] grid place-items-center w-6 h-6 rounded-full bg-accent text-accent-ink font-mono text-[11px] font-bold">
              {i + 1}
            </span>
            <h4 className="text-[14.5px] font-bold text-strong mb-0.5">
              <Rich text={it.title} />
            </h4>
            <p className="text-[13.5px] leading-relaxed text-muted">
              <Rich text={it.text} />
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ListBlock({
  variant = "dot",
  title,
  items,
}: {
  variant?: "check" | "x" | "dot";
  title?: string;
  items: string[];
}) {
  const Icon = variant === "check" ? CheckCircle2 : variant === "x" ? XCircle : null;
  const color =
    variant === "check"
      ? "text-emerald-600 dark:text-emerald-300"
      : variant === "x"
        ? "text-rose-500 dark:text-rose-300"
        : "text-accent";
  const border =
    variant === "check"
      ? "border-emerald-400/25 bg-emerald-400/[0.05]"
      : variant === "x"
        ? "border-rose-400/25 bg-rose-400/[0.05]"
        : "border-app surface";
  return (
    <div className={`my-6 rounded-2xl border ${border} p-6 sm:p-7`}>
      {title && (
        <p className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] mb-4 ${color}`}>
          {Icon && <Icon size={14} />}
          {title}
        </p>
      )}
      <ul className="space-y-3">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-3 text-[14px] leading-relaxed text-body">
            {Icon ? (
              <Icon size={16} className={`${color} mt-0.5 shrink-0`} />
            ) : (
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            )}
            <span>
              <Rich text={it} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Quadro({ title = "Quadro-resumo", items }: { title?: string; items: string[] }) {
  return (
    <div className="my-6 rounded-2xl border border-accent bg-accent-soft p-6 sm:p-7">
      <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-accent mb-4">
        <BookOpen size={14} /> {title}
      </p>
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-body">
            <span className="font-mono text-[11px] text-accent mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
            <span>
              <Rich text={it} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function KeyValue({ title, rows }: { title?: string; rows: { k: string; v: string }[] }) {
  return (
    <div className="my-6 rounded-2xl border border-app surface p-6 sm:p-7">
      {title && (
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent mb-4">{title}</p>
      )}
      <dl className="divide-y divide-[color:var(--border-soft)]">
        {rows.map((r, i) => (
          <div key={i} className="grid sm:grid-cols-[minmax(120px,180px)_1fr] gap-x-5 gap-y-1 py-3 first:pt-0 last:pb-0">
            <dt className="text-[13.5px] font-bold text-strong">
              <Rich text={r.k} />
            </dt>
            <dd className="text-[13.5px] leading-relaxed text-body">
              <Rich text={r.v} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function Pills({ label, items }: { label?: string; items: string[] }) {
  return (
    <div className="my-6 flex flex-wrap items-center gap-2">
      {label && (
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent mr-1">{label}</span>
      )}
      {items.map((it) => (
        <span
          key={it}
          className="text-[12.5px] font-semibold text-body border border-app surface rounded-full px-3 py-1.5"
        >
          <Rich text={it} />
        </span>
      ))}
    </div>
  );
}

export function CalloutGrid({ items }: { items: { variant: CalloutVariant; text: string }[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4 my-6">
      {items.map((it, i) => {
        const v = VARIANTS[it.variant];
        const Icon = v.icon;
        const c = CQ[v.cls];
        return (
          <div key={i} className={`rounded-2xl border ${c.border} ${c.bg} p-5`}>
            <div className="flex items-center gap-2 mb-2">
              <Icon size={14} className={v.accent} />
              <span className={`text-[10.5px] font-bold uppercase tracking-[0.16em] ${v.accent}`}>
                {v.label}
              </span>
            </div>
            <p className="text-[14px] leading-relaxed text-body">
              <Rich text={it.text} />
            </p>
          </div>
        );
      })}
    </div>
  );
}

export function Divider() {
  return (
    <div className="flex items-center gap-4 py-2" aria-hidden>
      <span className="h-px flex-1 bg-[color:var(--border)]" />
      <span className="w-1.5 h-1.5 rotate-45 bg-accent/70" />
      <span className="h-px flex-1 bg-[color:var(--border)]" />
    </div>
  );
}
