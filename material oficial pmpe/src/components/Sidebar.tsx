import { useEffect, useState } from "react";
import { Home, LayoutGrid, ListTree, PanelRightClose, PanelRightOpen } from "lucide-react";

export interface NavItem {
  id: string;
  num: string;
  label: string;
}

export interface PartRef {
  id: number;
  short: string;
  label: string;
}

export default function Sidebar({
  parts,
  currentPart,
  onSelectPart,
  onHome,
  items,
  itemsLabel = "Assuntos desta disciplina",
  bancas = [],
}: {
  parts: PartRef[];
  currentPart: number | null;
  onSelectPart: (id: number) => void;
  onHome: () => void;
  items: NavItem[];
  itemsLabel?: string;
  bancas?: string[];
}) {
  const [tab, setTab] = useState<"temas" | "disciplinas">("temas");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    setTab(currentPart === null ? "disciplinas" : "temas");
  }, [currentPart]);

  useEffect(() => {
    if (!items.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px" }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  const body = (
    <div className="flex flex-col h-full">
      {/* cabeçalho / abas */}
      <div className="p-4 border-b border-app app-bg-2/60">
        <button
          onClick={() => {
            onHome();
            setOpen(false);
          }}
          className={`w-full flex items-center gap-2 rounded-xl border px-3 py-2.5 text-[12.5px] font-bold transition-colors cursor-pointer ${
            currentPart === null
              ? "border-accent bg-accent text-accent-ink"
              : "border-app surface text-body hover:text-accent hover:border-accent"
          }`}
        >
          <Home size={14} /> Página inicial
        </button>

        <div className="mt-3 grid grid-cols-2 gap-1 rounded-xl border border-app surface p-1">
          {(
            [
              { k: "temas", label: "Assuntos", icon: ListTree },
              { k: "disciplinas", label: "Disciplinas", icon: LayoutGrid },
            ] as const
          ).map((t) => (
            <button
              key={t.k}
              onClick={() => setTab(t.k)}
              className={`flex items-center justify-center gap-1.5 rounded-lg px-2 py-1.5 text-[11.5px] font-bold transition-colors cursor-pointer ${
                tab === t.k ? "bg-accent text-accent-ink" : "text-muted hover:text-strong"
              }`}
            >
              <t.icon size={13} />
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* conteúdo */}
      <div className="flex-1 overflow-y-auto px-4 py-4 no-scrollbar">
        {tab === "disciplinas" ? (
          <ul className="space-y-1">
            {parts.map((p) => (
              <li key={p.id}>
                <button
                  onClick={() => {
                    onSelectPart(p.id);
                    setOpen(false);
                  }}
                  className={`w-full text-left flex items-start gap-2.5 rounded-xl px-2.5 py-2 transition-colors cursor-pointer ${
                    currentPart === p.id
                      ? "bg-accent-soft border border-accent"
                      : "border border-transparent hover:bg-accent-soft"
                  }`}
                >
                  <span
                    className={`mt-[1px] grid place-items-center w-6 h-6 shrink-0 rounded-md font-mono text-[10.5px] font-black ${
                      currentPart === p.id
                        ? "bg-accent text-accent-ink"
                        : "border border-app text-faint"
                    }`}
                  >
                    {String(p.id).padStart(2, "0")}
                  </span>
                  <span className="leading-tight min-w-0">
                    <span
                      className={`block text-[12.5px] font-bold truncate ${
                        currentPart === p.id ? "text-accent" : "text-strong"
                      }`}
                    >
                      {p.short}
                    </span>
                    <span className="block text-[10.5px] text-faint truncate">{p.label}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ) : items.length ? (
          <>
            <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-faint mb-3 pl-2">
              {itemsLabel}
            </p>
            <ul className="space-y-0.5 border-l border-app">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={`toc-link group flex items-start gap-2.5 -ml-px pl-3 py-[7px] text-[12.5px] text-muted hover:text-strong ${
                      active === item.id ? "active" : ""
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-60 mt-[2px]">{item.num}</span>
                    <span className="font-medium leading-snug">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-[12.5px] text-muted leading-relaxed px-1">
            Selecione uma disciplina na aba <strong className="text-strong">Disciplinas</strong>{" "}
            para ver os assuntos.
          </p>
        )}
      </div>

      {bancas.length > 0 && (
        <div className="border-t border-app p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-2">
            Bancas-alvo
          </p>
          <div className="flex flex-wrap gap-1.5">
            {bancas.map((b) => (
              <span
                key={b}
                className="text-[10px] font-semibold text-muted border border-app rounded-full px-2 py-0.5"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* botão flutuante (telas menores) */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir navegação"
        className="xl:hidden fixed bottom-6 right-20 z-50 grid place-items-center w-12 h-12 rounded-full border border-accent bg-accent-soft app-bg/90 backdrop-blur text-accent shadow-lg cursor-pointer"
      >
        {open ? <PanelRightClose size={18} /> : <PanelRightOpen size={18} />}
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="xl:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        />
      )}

      <aside
        className={`fixed top-[60px] right-0 z-40 h-[calc(100vh-60px)] w-[300px] border-l border-app app-bg/95 backdrop-blur-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } xl:translate-x-0`}
      >
        {body}
      </aside>
    </>
  );
}
