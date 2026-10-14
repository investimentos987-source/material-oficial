import type { LucideIcon } from "lucide-react";

export type Tone = "y" | "c" | "v" | "e" | "r";
export type Palette =
  | "warm" | "cool" | "fresh" | "azure" | "leaf" | "ember" | "teal" | "lime" | "rose";
export type CalloutVariant = "conceito" | "prova" | "pegadinha" | "macete" | "exemplo";

/* ---- questão (quiz) ---- */
export type QuestionType = "ce" | "multi";
export interface Question {
  id: number;
  banca: string;
  tipo: QuestionType;
  enunciado: string;
  options?: { key: string; label: string }[];
  correct: string;
  comentario: string;
}

/* ---- blocos de conteúdo ---- */
export type Block =
  | { t: "p"; text: string }
  | { t: "callout"; variant: CalloutVariant; title?: string; text?: string; items?: string[] }
  | { t: "cards"; cols?: 2 | 3; tone?: Tone; cards: { icon?: LucideIcon; title: string; text: string }[] }
  | { t: "table"; caption?: string; head: string[]; rows: string[][]; tone?: Tone }
  | { t: "twocol"; title?: string; left: { label: string; text: string }; right: { label: string; text: string } }
  | { t: "steps"; title?: string; items: { title: string; text: string }[] }
  | { t: "list"; variant?: "check" | "x" | "dot"; title?: string; items: string[] }
  | { t: "quadro"; title?: string; items: string[] }
  | { t: "keyvalue"; title?: string; rows: { k: string; v: string }[] }
  | { t: "pills"; label?: string; items: string[] }
  | { t: "callout-grid"; items: { variant: CalloutVariant; text: string }[] }
  | { t: "quiz"; title?: string; questions: Question[] };

export interface Section {
  id: string;
  num: string;
  kicker: string;
  title: string;      // pode conter ==destaque==
  icon?: LucideIcon;
  lead?: string;      // pode conter ==destaque==
  blocks: Block[];
}

export interface HeroStat {
  icon: LucideIcon;
  big: string;
  small: string;
}

export interface Hero {
  eyebrow: string;
  title: string;      // pode conter ==destaque==
  subtitle: string;
  description: string;
  stats: HeroStat[];
  terms: string[];
  palette: Palette;
  termsLabel: string;
  startId: string;
}

export interface Part {
  id: number;
  tabShort: string;    // rótulo curto no seletor
  tabLabel: string;    // subtítulo no cabeçalho
  docTitle: string;
  footerNote: string;
  nextNote: string;
  hero: Hero;
  sections: Section[];
  bancas?: string[];
  tocLabel?: string;
}
