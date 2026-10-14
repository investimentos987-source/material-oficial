import { AnimatePresence, motion } from "framer-motion";
import { Check, MessageSquareQuote, RotateCcw, Trophy, X } from "lucide-react";
import { useMemo, useState } from "react";
import type { Question } from "../data/types";
import { Rich } from "./ui";

export default function Quiz({ questions }: { questions: Question[] }) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const QUESTIONS = questions;

  const answered = Object.keys(answers).length;
  const correctCount = useMemo(
    () => QUESTIONS.filter((q) => answers[q.id] === q.correct).length,
    [answers, QUESTIONS]
  );

  const choose = (qid: number, key: string) => {
    if (answers[qid]) return;
    setAnswers((a) => ({ ...a, [qid]: key }));
  };

  return (
    <div>
      {/* placar */}
      <div className="sticky top-[72px] z-30 mb-8 rounded-2xl border border-app app-bg-2/90 backdrop-blur-xl p-4 sm:p-5 flex flex-wrap items-center gap-x-8 gap-y-3">
        <div className="flex items-center gap-3">
          <Trophy size={20} className="text-accent" />
          <div className="leading-tight">
            <p className="font-display text-xl font-semibold text-strong">
              {correctCount}
              <span className="text-faint text-sm font-sans font-normal"> / {QUESTIONS.length} corretas</span>
            </p>
            <p className="text-[11px] text-faint">
              {answered < QUESTIONS.length
                ? `${answered} respondida${answered !== 1 ? "s" : ""} — continue!`
                : correctCount / QUESTIONS.length >= 0.8
                  ? "Excelente! Você está pronto(a) para a banca."
                  : correctCount / QUESTIONS.length >= 0.6
                    ? "Bom desempenho — revise os itens que ficaram para trás."
                    : "Bom treino — revise os tópicos marcados e tente de novo."}
            </p>
          </div>
        </div>
        <div className="flex-1 min-w-[140px] h-2 rounded-full surface-strong overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-amber-400 to-emerald-400"
            animate={{ width: `${(answered / QUESTIONS.length) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        {answered > 0 && (
          <button
            onClick={() => setAnswers({})}
            className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-faint hover:text-accent transition-colors cursor-pointer"
          >
            <RotateCcw size={12} /> Refazer
          </button>
        )}
      </div>

      <ol className="space-y-6">
        {QUESTIONS.map((q, qi) => {
          const chosen = answers[q.id];
          const isDone = !!chosen;
          const options =
            q.tipo === "ce"
              ? [
                  { key: "C", label: "Certo" },
                  { key: "E", label: "Errado" },
                ]
              : q.options!;
          return (
            <li key={q.id} className="rounded-2xl border border-app surface p-5 sm:p-7">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="font-mono text-[11px] font-bold text-accent-ink bg-accent rounded-full px-2.5 py-1">
                  Q{qi + 1}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-faint">
                  {q.banca}
                </span>
                {isDone &&
                  (chosen === q.correct ? (
                    <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-300">
                      <Check size={13} /> Você acertou
                    </span>
                  ) : (
                    <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-rose-500 dark:text-rose-300">
                      <X size={13} /> Veja o comentário
                    </span>
                  ))}
              </div>

              <p className="text-[15.5px] leading-relaxed text-strong mb-5">
                <Rich text={q.enunciado} />
              </p>

              <div className={`grid gap-2.5 ${q.tipo === "ce" ? "grid-cols-2 max-w-sm" : ""}`}>
                {options.map((op) => {
                  const isCorrect = q.correct === op.key;
                  const isChosen = chosen === op.key;
                  let cls =
                    "border-app surface hover:border-amber-400/50 hover:bg-amber-300/[0.06] text-body";
                  if (isDone) {
                    if (isCorrect) cls = "border-emerald-400/60 bg-emerald-400/[0.12] text-emerald-700 dark:text-emerald-200";
                    else if (isChosen) cls = "border-rose-400/60 bg-rose-400/[0.1] text-rose-700 dark:text-rose-200";
                    else cls = "border-app-soft bg-transparent text-faint opacity-70";
                  }
                  return (
                    <button
                      key={op.key}
                      onClick={() => choose(q.id, op.key)}
                      disabled={isDone}
                      className={`flex items-start gap-3 rounded-xl border p-3.5 text-left text-[14px] leading-relaxed transition-all cursor-pointer disabled:cursor-default ${cls}`}
                    >
                      <span
                        className={`shrink-0 grid place-items-center w-6 h-6 rounded-md font-mono text-[11px] font-bold uppercase ${
                          isDone && isCorrect
                            ? "bg-emerald-400 text-[#0a0910]"
                            : isDone && isChosen
                              ? "bg-rose-400 text-[#0a0910]"
                              : "surface-strong text-body"
                        }`}
                      >
                        {op.key}
                      </span>
                      <span className="pt-0.5">
                        <Rich text={op.label} />
                      </span>
                      {isDone && isCorrect && <Check size={16} className="ml-auto mt-1 shrink-0" />}
                      {isDone && isChosen && !isCorrect && <X size={16} className="ml-auto mt-1 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {isDone && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 rounded-xl border border-accent bg-accent-soft p-4 sm:p-5">
                      <p className="flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.18em] text-accent mb-2">
                        <MessageSquareQuote size={14} />
                        Gabarito comentado
                      </p>
                      <p className="text-[14px] leading-relaxed text-body">
                        <Rich text={q.comentario} />
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
