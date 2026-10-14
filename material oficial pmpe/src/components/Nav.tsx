import { motion, useScroll, useSpring } from "framer-motion";
import { Moon, ShieldHalf, Sun } from "lucide-react";
import { useTheme } from "../theme";

export default function Nav({ onHome, partTitle }: { onHome: () => void; partTitle: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });
  const { theme, toggle } = useTheme();

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-app app-bg/80 backdrop-blur-xl">
      <div className="xl:pr-[300px]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 h-[60px] flex items-center justify-between gap-4">
          <button onClick={onHome} className="flex items-center gap-3 group shrink-0 cursor-pointer">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-accent text-accent-ink shadow-[0_0_24px_var(--accent-border)] group-hover:rotate-6 transition-transform">
              <ShieldHalf size={19} strokeWidth={2.2} />
            </span>
            <span className="leading-tight text-left">
              <span className="block text-[13px] font-bold text-strong tracking-wide">
                PMPE · Oficial
              </span>
              <span className="block text-[10.5px] font-semibold uppercase tracking-[0.18em] text-faint max-w-[55vw] sm:max-w-none truncate">
                {partTitle}
              </span>
            </span>
          </button>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={toggle}
              aria-label="Alternar tema claro/escuro"
              title={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
              className="grid place-items-center w-9 h-9 rounded-full border border-app surface text-body hover:text-accent hover:border-accent transition-colors cursor-pointer"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-amber-400 via-amber-300 to-cyan-400"
        style={{ scaleX }}
      />
    </header>
  );
}
