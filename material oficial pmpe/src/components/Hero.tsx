import { motion } from "framer-motion";
import { ArrowDown, ListChecks } from "lucide-react";
import NetworkCanvas from "./NetworkCanvas";
import { Rich } from "./ui";
import type { Hero as HeroData } from "../data/types";

const ease = [0.22, 1, 0.36, 1] as const;

const GLOW: Record<string, string> = {
  warm: "bg-yellow-300/[0.06]",
  cool: "bg-rose-300/[0.06]",
  fresh: "bg-violet-300/[0.06]",
  azure: "bg-blue-400/[0.07]",
  leaf: "bg-emerald-400/[0.07]",
  ember: "bg-orange-400/[0.08]",
  teal: "bg-teal-400/[0.08]",
  lime: "bg-lime-400/[0.08]",
  rose: "bg-rose-400/[0.08]",
};

export default function Hero({ data }: { data: HeroData }) {
  return (
    <div id="inicio" className="relative min-h-[100svh] flex flex-col overflow-hidden">
      <NetworkCanvas className="absolute inset-0 w-full h-full opacity-70" variant={data.palette} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, var(--bg-hero-fade-0), transparent, var(--bg-hero-fade))",
        }}
      />
      <div
        className={`absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[120px] pointer-events-none ${
          GLOW[data.palette] ?? GLOW.warm
        }`}
      />

      <div className="relative flex-1 flex items-center">
        <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            className="inline-flex items-center gap-2.5 rounded-full border border-accent bg-accent-soft px-4 py-1.5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
              {data.eyebrow}
            </span>
          </motion.div>

          <h1 className="font-display font-semibold text-strong leading-[0.98] tracking-[-0.01em]">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease }}
              className="block text-[9.5vw] sm:text-6xl lg:text-[72px] max-w-5xl"
            >
              <Rich text={data.title} />
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.22, ease }}
              className="block text-[5vw] sm:text-2xl lg:text-[28px] mt-6 font-light italic text-muted max-w-4xl"
            >
              <Rich text={data.subtitle} />
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
            className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-muted"
          >
            <Rich text={data.description} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.48, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={`#${data.startId}`}
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-ink shadow-[0_0_40px_var(--accent-border)] hover:shadow-[0_0_60px_var(--accent-border)] transition-shadow"
            >
              Começar a leitura
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#questoes"
              className="inline-flex items-center gap-3 rounded-full border border-app px-7 py-3.5 text-sm font-semibold text-body hover:border-accent hover:text-accent transition-colors"
            >
              <ListChecks size={16} />
              Ir direto às questões
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 flex flex-wrap gap-x-10 gap-y-4"
          >
            {data.stats.map((s) => (
              <div key={s.small} className="flex items-center gap-3">
                <s.icon size={18} className="text-accent" />
                <div className="leading-tight">
                  <p className="font-display text-xl font-semibold text-strong">{s.big}</p>
                  <p className="text-[11.5px] text-faint">{s.small}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* marquee de termos mais cobrados */}
      <div className="relative border-t border-b border-app app-bg-2/80 backdrop-blur py-4 overflow-hidden">
        <p className="absolute left-5 sm:left-8 top-1/2 -translate-y-1/2 z-10 hidden md:block text-[10px] font-bold uppercase tracking-[0.22em] text-accent app-bg-2 pr-4">
          {data.termsLabel} →
        </p>
        <div className="flex w-max animate-marquee gap-0 md:pl-52">
          {[...data.terms, ...data.terms].map((t, i) => (
            <span
              key={i}
              className="mx-4 inline-flex items-center gap-3 whitespace-nowrap text-[12.5px] font-mono text-muted"
            >
              {t}
              <span className="w-1 h-1 rounded-full bg-accent/50" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
