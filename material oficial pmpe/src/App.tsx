import { ArrowUp, ShieldHalf } from "lucide-react";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import HomePage from "./components/Home";
import Nav from "./components/Nav";
import Sidebar, { type NavItem } from "./components/Sidebar";
import SectionView from "./components/Content";
import { Divider } from "./components/ui";
import { PARTS } from "./data/parts";
import { ThemeProvider } from "./theme";

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className="fixed bottom-6 right-6 z-50 grid place-items-center w-12 h-12 rounded-full bg-accent text-accent-ink shadow-[0_0_30px_var(--accent-border)] hover:scale-105 transition-transform cursor-pointer"
    >
      <ArrowUp size={20} />
    </button>
  );
}

function Shell() {
  const [partId, setPartId] = useState<number | null>(null);
  const part = partId === null ? null : PARTS.find((p) => p.id === partId) ?? null;

  const toTop = () => window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

  const goPart = (p: number) => {
    setPartId(p);
    toTop();
  };
  const goHome = () => {
    setPartId(null);
    toTop();
  };

  useEffect(() => {
    document.title = part ? part.docTitle : "PMPE Oficial · Guia de Estudo completo";
  }, [part]);

  const navItems: NavItem[] = (part?.sections ?? []).map((s) => ({
    id: s.id,
    num: s.num,
    label: s.title.replace(/==/g, "").replace(/`/g, ""),
  }));

  return (
    <div className="noise min-h-screen app-bg antialiased">
      <Nav
        onHome={goHome}
        partTitle={part ? part.tabLabel : "Todas as disciplinas do edital"}
      />

      <div className="xl:pr-[300px]">
        {part === null ? (
          <HomePage parts={PARTS} onSelectPart={goPart} />
        ) : (
          <>
            <Hero data={part.hero} key={part.id} />

            <main className="relative bg-blueprint">
              <div className="mx-auto max-w-6xl px-5 sm:px-8">
                <div className="pt-10 pb-24">
                  <div className="study-content min-w-0">
                    {part.sections.map((s, i) => (
                      <div key={s.id}>
                        <SectionView section={s} />
                        {i < part.sections.length - 1 && <Divider />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </>
        )}

        <footer className="border-t border-app app-bg-2">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-accent text-accent-ink">
                <ShieldHalf size={20} />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-strong">Oficial PMPE · Guia de Estudo</p>
                <p className="text-[11.5px] text-faint">
                  Conteúdos mantidos do edital
                  {part ? ` · ${part.footerNote}` : ` · ${PARTS.length} disciplinas`}
                </p>
              </div>
            </div>
            <div className="text-[12px] leading-relaxed text-faint sm:text-right">
              <p>Material didático elaborado com foco em Instituto AOCP, Cebraspe, FGV e afins.</p>
              <p className="text-muted">
                {part ? part.nextNote : "Escolha uma disciplina para começar os estudos."}
              </p>
            </div>
          </div>
        </footer>
      </div>

      <Sidebar
        parts={PARTS.map((p) => ({
          id: p.id,
          short: p.tabShort,
          label: p.tabLabel.replace(/^Prompt\s*\d+\s*·\s*/, ""),
        }))}
        currentPart={partId}
        onSelectPart={goPart}
        onHome={goHome}
        items={navItems}
        itemsLabel={part?.tocLabel ?? "Assuntos"}
        bancas={part?.bancas ?? []}
      />

      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Shell />
    </ThemeProvider>
  );
}
