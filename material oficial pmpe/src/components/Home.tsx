import { motion } from "framer-motion";
import { ArrowRight, BookOpenCheck, ListChecks, Layers, ShieldHalf, Sparkles } from "lucide-react";
import NetworkCanvas from "./NetworkCanvas";
import type { Part } from "../data/types";

const ease = [0.22, 1, 0.36, 1] as const;

const RING: Record<string, string> = {
  warm: "from-yellow-300/25 to-amber-500/5",
  cool: "from-rose-300/25 to-rose-500/5",
  fresh: "from-violet-300/25 to-violet-500/5",
  azure: "from-sky-400/25 to-blue-500/5",
  leaf: "from-emerald-400/25 to-emerald-600/5",
  ember: "from-orange-400/25 to-orange-600/5",
  teal: "from-teal-400/25 to-teal-600/5",
  lime: "from-lime-400/25 to-lime-600/5",
  rose: "from-rose-400/25 to-pink-600/5",
};

const DOT: Record<string, string> = {
  warm: "bg-yellow-300",
  cool: "bg-rose-300",
  fresh: "bg-violet-300",
  azure: "bg-sky-400",
  leaf: "bg-emerald-400",
  ember: "bg-orange-400",
  teal: "bg-teal-400",
  lime: "bg-lime-400",
  rose: "bg-rose-400",
};

function countQuestions(part: Part) {
  let n = 0;
  for (const s of part.sections)
    for (const b of s.blocks) if (b.t === "quiz") n += b.questions.length;
  return n;
}

function readingTime(part: Part) {
  const t = part.hero.stats.find((s) => s.small.includes("leitura"));
  return t ? t.big.replace("~", "") : null;
}

function cleanLabel(part: Part) {
  return part.tabLabel.replace(/^Prompt\s*\d+\s*·\s*/, "");
}

export default function Home({
  parts,
  onSelectPart,
}: {
  parts: Part[];
  onSelectPart: (id: number) => void;
}) {
  const totalQ = parts.reduce((a, p) => a + countQuestions(p), 0);
  const totalS = parts.reduce((a, p) => a + p.sections.length, 0);

  return (
    <div id="inicio" className="relative">
      {/* ===== capa ===== */}
      <section className="relative overflow-hidden min-h-[82svh] flex items-center">
        <NetworkCanvas className="absolute inset-0 w-full h-full opacity-70" variant="warm" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, var(--bg-hero-fade-0), transparent, var(--bg-hero-fade))",
          }}
        />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[120px] pointer-events-none bg-yellow-300/[0.07]" />

        <div className="relative mx-auto max-w-7xl w-full px-5 sm:px-8 pt-28 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent-soft px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
              <ShieldHalf size={13} /> Concurso PMPE · Cargo Oficial
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight text-strong leading-[1.05]">
              Guia de Estudo <span className="text-accent">completo</span> para o novo edital
            </h1>
            <p className="mt-5 text-[15.5px] sm:text-[17px] leading-relaxed text-body max-w-2xl text-justify">
              Todas as disciplinas do edital em um só lugar, com teoria densa, pegadinhas de prova,
              macetes, quadros-resumo e milhares de questões comentadas no estilo do
              <strong className="text-strong"> Instituto AOCP</strong>. Escolha uma disciplina
              abaixo para começar — ou use a barra lateral à direita para navegar a qualquer momento.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: Layers, big: String(parts.length), small: "disciplinas" },
                { icon: BookOpenCheck, big: String(totalS), small: "blocos de estudo" },
                { icon: ListChecks, big: String(totalQ), small: "questões comentadas" },
                { icon: Sparkles, big: "🆕", small: "conteúdos novos do edital" },
              ].map((s) => (
                <div
                  key={s.small}
                  className="flex items-center gap-3 rounded-2xl border border-app surface px-4 py-3"
                >
                  <span className="grid place-items-center w-9 h-9 rounded-xl bg-accent-soft text-accent">
                    <s.icon size={17} />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[17px] font-black text-strong">{s.big}</span>
                    <span className="block text-[11px] font-semibold text-faint uppercase tracking-wider">
                      {s.small}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== cards das disciplinas ===== */}
      <section className="relative bg-blueprint border-t border-app">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.24em] text-faint">
            Escolha por onde começar
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-black text-strong tracking-tight">
            As <span className="text-accent">{parts.length} disciplinas</span> do guia
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {parts.map((p, i) => {
              const q = countQuestions(p);
              return (
                <motion.button
                  key={p.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, ease, delay: Math.min(i * 0.03, 0.3) }}
                  onClick={() => onSelectPart(p.id)}
                  className="group relative text-left rounded-2xl border border-app surface p-5 overflow-hidden hover:border-accent transition-colors cursor-pointer"
                >
                  <div
                    className={`absolute -top-16 -right-10 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br ${
                      RING[p.hero.palette] ?? RING.warm
                    } opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none`}
                  />
                  <div className="relative flex items-start justify-between gap-3">
                    <span className="grid place-items-center w-10 h-10 rounded-xl border border-app app-bg-2 font-mono text-[13px] font-black text-strong">
                      {String(p.id).padStart(2, "0")}
                    </span>
                    <span
                      className={`mt-1 w-2 h-2 rounded-full ${DOT[p.hero.palette] ?? DOT.warm}`}
                    />
                  </div>

                  <h3 className="relative mt-4 text-[17px] font-black text-strong leading-snug">
                    {p.tabShort}
                  </h3>
                  <p className="relative mt-1 text-[12px] font-semibold text-faint">
                    {cleanLabel(p)}
                  </p>
                  <p className="relative mt-3 text-[13px] leading-relaxed text-muted line-clamp-3 text-justify">
                    {p.hero.subtitle}
                  </p>

                  <div className="relative mt-4 flex flex-wrap items-center gap-2">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-muted border border-app rounded-full px-2.5 py-1">
                      {p.sections.length} blocos
                    </span>
                    {readingTime(p) && (
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-muted border border-app rounded-full px-2.5 py-1">
                        {readingTime(p)} de leitura
                      </span>
                    )}
                    {q > 0 && (
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-accent border border-accent bg-accent-soft rounded-full px-2.5 py-1">
                        {q} questões
                      </span>
                    )}
                  </div>

                  <span className="relative mt-5 inline-flex items-center gap-2 text-[12.5px] font-bold text-accent">
                    Estudar agora
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
