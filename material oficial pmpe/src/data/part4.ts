import {
  BookOpenCheck,
  Timer,
  ListChecks,
  Lightbulb,
  Layers,
  Type,
  Cable,
  Waypoints,
  ScanSearch,
  Globe,
  GraduationCap,
} from "lucide-react";
import type { Part } from "./types";

export const PART4: Part = {
  id: 2,
  tabShort: "Inglês",
  tabLabel: "Língua Inglesa",
  docTitle: "PMPE Oficial · Língua Inglesa",
  footerNote: "Língua Inglesa",
  nextNote: "➡️ Próxima disciplina: Língua Espanhola.",
  bancas: ["Instituto AOCP", "Cebraspe", "FGV", "FCC", "IBFC"],
  tocLabel: "Nesta disciplina",
  hero: {
    eyebrow:
      "Oficial PMPE · Disciplina 2 de 13 · Língua Estrangeira · Banca Instituto AOCP",
    title: "Língua ==Inglesa==",
    subtitle:
      "compreensão de gêneros textuais, vocabulário aplicado e toda a gramática do edital — dos tempos verbais aos condicionais e question tags, do jeito que o Instituto AOCP cobra",
    description:
      "Um guia **completo e denso** do inglês de prova: **reading strategies**, **false friends**, **phrasal verbs**, os **12 tempos verbais**, **modais**, **voz passiva**, **conditionals**, **relative clauses** e **question tags**. Explicado em português, com exemplos policial-militares, ==pegadinhas mapeadas==, quadros-resumo, macetes e um grande banco de questões-treino comentadas no estilo da banca **Instituto AOCP** (predominância de múltipla escolha A–E).",
    stats: [
      { icon: BookOpenCheck, big: "3", small: "eixos do edital" },
      { icon: Timer, big: "~1h15", small: "de leitura focada" },
      { icon: ListChecks, big: "57", small: "questões comentadas" },
      { icon: Lightbulb, big: "AOCP", small: "foco na banca e no cargo" },
    ],
    terms: [
      "skimming × scanning",
      "cognates × false friends",
      "phrasal verbs",
      "countable × uncountable",
      "comparative · superlative",
      "in / on / at",
      "Present Perfect",
      "Past Simple × Present Perfect",
      "modals: must / have to",
      "passive voice (be + p.p.)",
      "zero/1st/2nd/3rd conditional",
      "defining × non-defining",
      "who / which / whose",
      "gerund × infinitive",
      "question tags",
    ],
    palette: "azure",
    termsLabel: "Most tested terms (AOCP)",
    startId: "panorama4",
  },
  sections: [
    /* ============================ PANORAMA ============================ */
    {
      id: "panorama4",
      num: "01",
      kicker: "Como usar este material",
      icon: GraduationCap,
      title: "Panorama da ==disciplina==",
      lead: "Três eixos do edital: ler e interpretar em inglês, dominar o vocabulário (inclusive os falsos amigos) e conhecer as estruturas gramaticais que a banca repete todo ano.",
      blocks: [
        {
          t: "p",
          text: "Em concursos, a prova de inglês é, antes de tudo, **prova de leitura**: você raramente precisa escrever — precisa **entender** um texto e reconhecer estruturas. Por isso, invista em **estratégias de leitura**, em **vocabulário** (cognatos e falsos cognatos) e na **gramática de reconhecimento** (identificar tempos, modais, voz passiva).",
        },
        {
          t: "cards",
          cols: 3,
          tone: "c",
          cards: [
            { icon: ScanSearch, title: "1. Reading", text: "Compreensão e interpretação de **gêneros textuais** em inglês: skimming, scanning e inferência de sentido pelo contexto." },
            { icon: Globe, title: "2. Vocabulary", text: "Conhecimento vocabular aplicado: cognatos, **false friends**, **phrasal verbs** e vocabulário do dia a dia policial." },
            { icon: Layers, title: "3. Grammar", text: "Substantivos, adjetivos, advérbios, preposições, artigos, pronomes, **12 tempos verbais**, modais, voz passiva, orações e question tags." },
          ],
        },
        {
          t: "callout",
          variant: "macete",
          title: "estratégia",
          text: "Não traduza palavra por palavra. Leia o **título e a fonte** (gênero), faça **skimming** para a ideia geral, depois **scanning** para achar a resposta. Vocabulário desconhecido? Deduza pelo **contexto** e pelos **cognatos**.",
        },
      ],
    },

    /* ============= TÓPICO — READING, VOCABULARY, PHRASAL ============= */
    {
      id: "reading",
      num: "02",
      kicker: "Eixos 1 e 2 · leitura e vocabulário",
      icon: ScanSearch,
      title: "Reading, ==vocabulary== & phrasal verbs",
      lead: "Estratégias de leitura, os falsos amigos que enganam o brasileiro e os phrasal verbs mais cobrados. É onde se ganham (ou se perdem) pontos rápidos.",
      blocks: [
        {
          t: "cards",
          cols: 2,
          tone: "c",
          cards: [
            { icon: ScanSearch, title: "Skimming", text: "Leitura **rápida e global** para captar a ideia principal (gist). Passe os olhos por título, primeira/última frases de cada parágrafo." },
            { icon: ScanSearch, title: "Scanning", text: "Leitura **de busca**: procurar uma informação específica (nome, data, número) sem ler tudo. Ideal para questões objetivas." },
          ],
        },
        {
          t: "callout",
          variant: "conceito",
          title: "cognates × false friends",
          text: "**Cognatos** (cognates) são palavras parecidas com o português e de mesmo sentido: *police, information, violence*. **Falsos cognatos** (false friends) parecem, mas enganam — é o que a banca adora testar.",
        },
        {
          t: "table",
          caption: "False friends — os que mais derrubam",
          head: ["Inglês", "Parece (mas NÃO é)", "Significa de verdade"],
          rows: [
            ["actually", "atualmente", "na verdade / de fato"],
            ["eventually", "eventualmente", "finalmente / por fim"],
            ["pretend", "pretender", "fingir"],
            ["push", "puxar", "empurrar"],
            ["realize", "realizar", "perceber / dar-se conta"],
            ["parents", "parentes", "pais (mãe e pai)"],
            ["intend", "entender", "pretender / ter a intenção"],
            ["comprehensive", "compreensivo", "abrangente / completo"],
          ],
        },
        {
          t: "table",
          caption: "Phrasal verbs frequentes em prova",
          head: ["Phrasal verb", "Sentido", "Exemplo"],
          rows: [
            ["carry out", "realizar / executar", "The officers **carried out** the operation."],
            ["look into", "investigar", "Detectives will **look into** the case."],
            ["find out", "descobrir", "They **found out** the truth."],
            ["give up", "desistir", "Never **give up** on duty."],
            ["call off", "cancelar", "They **called off** the search."],
            ["break into", "arrombar / invadir", "Thieves **broke into** the store."],
            ["put out", "apagar (fogo)", "Firefighters **put out** the fire."],
            ["show up", "aparecer / comparecer", "Backup **showed up** quickly."],
          ],
        },
        {
          t: "callout",
          variant: "prova",
          text: "Cai muito: (1) **ideia central** do texto (skimming); (2) sentido de uma palavra **no contexto**; (3) **false friends** (actually, eventually, pretend, push); (4) significado de **phrasal verbs**. Muitas questões são “The word X in line Y can be replaced by...”.",
        },
        {
          t: "callout",
          variant: "pegadinha",
          text: "**actually ≠ atualmente** (é ‘na verdade’); **eventually ≠ eventualmente** (é ‘finalmente’); **pretend ≠ pretender** (é ‘fingir’); **push ≠ puxar** (é ‘empurrar’; puxar é *pull*). Trocar o falso amigo pelo cognato falso é a armadilha número um.",
        },
        {
          t: "callout",
          variant: "exemplo",
          title: "temática policial-militar",
          text: "*“The police **carried out** a raid and **found out** that the suspects had **broken into** the warehouse.”* → A polícia **realizou** uma batida e **descobriu** que os suspeitos haviam **invadido** o galpão. Três phrasal verbs numa frase típica de prova.",
        },
        {
          t: "callout",
          variant: "macete",
          text: "**ACTUALLY = ‘na atualidade’? NÃO — é ‘na verdade’.** Para ‘atualmente’, use **currently/nowadays**. E lembre: **push = empurrar** (nas portas ‘PUSH’ = empurre; ‘PULL’ = puxe).",
        },
        {
          t: "quadro",
          title: "Quadro-resumo · Reading & vocabulary",
          items: [
            "Skimming = ideia geral; scanning = informação específica.",
            "Cognatos ajudam; false friends enganam.",
            "actually = na verdade; eventually = finalmente.",
            "pretend = fingir; push = empurrar (pull = puxar).",
            "parents = pais; realize = perceber.",
            "Phrasal verb = verbo + partícula com sentido próprio.",
            "carry out = executar; look into = investigar; find out = descobrir.",
            "Deduza vocabulário desconhecido pelo contexto.",
          ],
        },
        {
          t: "quiz",
          title: "Questões-treino · Reading & vocabulary",
          questions: [
            {
              id: 1,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "In the sentence “The officer actually filed the report yesterday”, the word “actually” means “atualmente” (nowadays).",
              correct: "E",
              comentario:
                "ERRADO. “Actually” é falso cognato: significa “na verdade / de fato”, não “atualmente”. Para “atualmente”, usa-se “currently” ou “nowadays”.",
            },
            {
              id: 2,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "The phrasal verb in “The detectives will LOOK INTO the crime” means:",
              options: [
                { key: "a", label: "to cancel" },
                { key: "b", label: "to investigate" },
                { key: "c", label: "to give up" },
                { key: "d", label: "to look outside" },
                { key: "e", label: "to find a place" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Look into” significa investigar/examinar. “Call off” = cancelar; “give up” = desistir.",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "Choose the correct meaning of the false friend “pretend”:",
              options: [
                { key: "a", label: "pretender" },
                { key: "b", label: "fingir" },
                { key: "c", label: "entender" },
                { key: "d", label: "prender" },
                { key: "e", label: "aprender" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Pretend” significa “fingir”. Para “pretender”, usa-se “intend/plan to”. Falso cognato clássico.",
            },
            {
              id: 4,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "In “Thieves BROKE INTO the warehouse and stole the equipment”, the phrasal verb “broke into” means:",
              options: [
                { key: "a", label: "to leave quickly" },
                { key: "b", label: "to break down" },
                { key: "c", label: "to enter by force / burglarize" },
                { key: "d", label: "to give up" },
                { key: "e", label: "to look for" },
              ],
              correct: "c",
              comentario:
                "Letra C. “Break into” = arrombar/invadir (entrar à força). Não confunda com “break down” (quebrar/enguiçar) nem “break up” (terminar um relacionamento).",
            },
            {
              id: 5,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Read: “The police CALLED OFF the search after the missing child was found.” The phrasal verb “called off” can be replaced by:",
              options: [
                { key: "a", label: "canceled" },
                { key: "b", label: "started" },
                { key: "c", label: "repeated" },
                { key: "d", label: "delayed" },
                { key: "e", label: "recorded" },
              ],
              correct: "a",
              comentario:
                "Letra A. “Call off” = cancelar/suspender. A busca foi cancelada após a criança ser encontrada.",
            },
            {
              id: 6,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "A word that looks similar to a Portuguese word but has a DIFFERENT meaning is called:",
              options: [
                { key: "a", label: "a cognate" },
                { key: "b", label: "a false friend (false cognate)" },
                { key: "c", label: "a synonym" },
                { key: "d", label: "a phrasal verb" },
                { key: "e", label: "an antonym" },
              ],
              correct: "b",
              comentario:
                "Letra B. False friend (falso cognato) é a palavra parecida com o português, mas de sentido diferente (actually, eventually, pretend). Cognato verdadeiro mantém o sentido (police, information).",
            },
          ],
        },
      ],
    },

    /* ============= NOUNS, ARTICLES, ADJECTIVES, ADVERBS ============= */
    {
      id: "nouns",
      num: "03",
      kicker: "Grammar · nomes e modificadores",
      icon: Type,
      title: "Nouns, articles, ==adjectives & adverbs==",
      lead: "Substantivos (contáveis e incontáveis), o uso de a/an/the, os graus comparativo e superlativo e a formação e posição dos advérbios.",
      blocks: [
        {
          t: "keyvalue",
          title: "Nouns — plural e contabilidade",
          rows: [
            { k: "Plurais irregulares", v: "man→**men**, woman→**women**, child→**children**, foot→**feet**, tooth→**teeth**, person→**people**, mouse→**mice**." },
            { k: "Countable × uncountable", v: "contáveis aceitam plural e *many* (two guns, many cars); incontáveis não (information, advice, money) e pedem *much/some*." },
            { k: "much / many / a lot of", v: "**many** + contável; **much** + incontável (geralmente em negativas/perguntas); **a lot of** serve para os dois." },
          ],
        },
        {
          t: "keyvalue",
          title: "Articles — a / an / the",
          rows: [
            { k: "a / an", v: "indefinidos (um/uma). **an** antes de som de vogal: *an officer, an hour* (h mudo), *a university* (som de ‘y’)." },
            { k: "the", v: "definido, algo específico/já mencionado: *the suspect we arrested*." },
            { k: "zero article", v: "sem artigo em generalizações e nomes próprios: *Police protect citizens*; *Brazil*; *breakfast*." },
          ],
        },
        {
          t: "table",
          caption: "Comparative & superlative",
          head: ["Adjetivo", "Comparative", "Superlative"],
          rows: [
            ["curto (1 sílaba): fast", "fast**er** than", "the fast**est**"],
            ["-y: easy", "eas**ier** than", "the eas**iest**"],
            ["longo: dangerous", "**more** dangerous than", "the **most** dangerous"],
            ["good", "**better** than", "the **best**"],
            ["bad", "**worse** than", "the **worst**"],
            ["far", "**further/farther** than", "the **furthest/farthest**"],
          ],
        },
        {
          t: "keyvalue",
          title: "Adverbs — formação, posição e tipos",
          rows: [
            { k: "Formação", v: "em geral adjetivo + **-ly**: quick→quickly, careful→carefully. Irregulares: good→**well**, fast→**fast**, hard→**hard**." },
            { k: "Frequência", v: "always, usually, often, sometimes, rarely, never — vêm **antes do verbo principal** e **depois do verbo to be**: *He is always ready*." },
            { k: "Ordem (quando juntos)", v: "modo + lugar + tempo: *She worked **hard** (modo) **at the station** (lugar) **yesterday** (tempo)*." },
          ],
        },
        {
          t: "callout",
          variant: "prova",
          text: "Cai muito: (1) **plurais irregulares** (people, children, men); (2) **countable × uncountable** com much/many; (3) **comparative/superlative** (more... × -er; irregulares good/better/best); (4) **posição do advérbio de frequência**; (5) **a × an** por SOM, não por letra.",
        },
        {
          t: "callout",
          variant: "pegadinha",
          text: "É **an hour** (h mudo, som de vogal) e **a university** (som de ‘iu’, consoante). Não existe **“more better”** nem **“more easier”** — comparativo é *better* / *easier*. E **information/advice/money** são **incontáveis**: nada de *informations*.",
        },
        {
          t: "callout",
          variant: "exemplo",
          title: "temática policial-militar",
          text: "*“This is **the most dangerous** area in the city, but our team is **better** trained than last year and **always** responds quickly.”* → comparativo irregular (better), superlativo (the most dangerous) e advérbio de frequência (always) antes do verbo.",
        },
        {
          t: "callout",
          variant: "macete",
          text: "**1 sílaba → -er/-est; 3+ sílabas → more/most.** Decore os 3 irregulares: **good–better–best**, **bad–worse–worst**, **far–further–farthest**. Advérbio de frequência: **antes do verbo, depois do to be**.",
        },
        {
          t: "quadro",
          title: "Quadro-resumo · Nouns, articles, adjectives, adverbs",
          items: [
            "Plurais irregulares: men, women, children, people, feet, teeth, mice.",
            "Incontáveis: information, advice, money, news (sem plural).",
            "many + contável; much + incontável; a lot of para ambos.",
            "an antes de SOM de vogal (an hour); a antes de som de consoante (a university).",
            "Comparativo: adj+er / more+adj than; superlativo: the...est / the most.",
            "Irregulares: good/better/best, bad/worse/worst, far/further/furthest.",
            "Advérbio: adj + -ly; irregulares good→well, fast, hard.",
            "Frequência: antes do verbo principal, depois do to be.",
          ],
        },
        {
          t: "quiz",
          title: "Questões-treino · Nouns, adjectives & adverbs",
          questions: [
            {
              id: 1,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "Choose the correct comparative form: “A knife is ___ a gun in close combat.”",
              options: [
                { key: "a", label: "more dangerous that" },
                { key: "b", label: "dangerouser than" },
                { key: "c", label: "as dangerous than" },
                { key: "d", label: "more dangerous than" },
                { key: "e", label: "the most dangerous than" },
              ],
              correct: "d",
              comentario:
                "Letra D. “Dangerous” é adjetivo longo: comparativo com “more ... than”. Não se diz “dangerouser” nem “more dangerous that”.",
            },
            {
              id: 2,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "In “The chief gave us useful information about the case”, the noun “information” is uncountable and, therefore, has no plural form such as “informations”.",
              correct: "C",
              comentario:
                "CERTO. “Information” é incontável em inglês: não recebe plural. O mesmo vale para advice, money, news, furniture.",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "Choose the sentence with the adverb of frequency in the correct position:",
              options: [
                { key: "a", label: "He always is ready for duty." },
                { key: "b", label: "He is always ready for duty." },
                { key: "c", label: "Always he is ready for duty." },
                { key: "d", label: "He is ready always for duty." },
                { key: "e", label: "He is ready for always duty." },
              ],
              correct: "b",
              comentario:
                "Letra B. Advérbios de frequência vêm DEPOIS do verbo “to be”: He is always ready. Com verbos principais, viriam antes (He always works).",
            },
            {
              id: 4,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado: "Choose the sentence with the CORRECT plural form:",
              options: [
                { key: "a", label: "The two mans were arrested." },
                { key: "b", label: "The two men were arrested." },
                { key: "c", label: "The two mens were arrested." },
                { key: "d", label: "The two menes were arrested." },
                { key: "e", label: "The two mens' were arrested." },
              ],
              correct: "b",
              comentario:
                "Letra B. “Man” tem plural irregular: men. Outros irregulares: woman→women, child→children, foot→feet, person→people.",
            },
            {
              id: 5,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado: "Complete with the correct article: “The officer waited for ___ hour at ___ university.”",
              options: [
                { key: "a", label: "a / a" },
                { key: "b", label: "an / an" },
                { key: "c", label: "an / a" },
                { key: "d", label: "a / an" },
                { key: "e", label: "the / the" },
              ],
              correct: "c",
              comentario:
                "Letra C. “Hour” tem h mudo (som de vogal) → an hour. “University” começa com som de ‘y’ (consoante) → a university. O artigo depende do SOM, não da letra.",
            },
            {
              id: 6,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado: "Choose the correct comparative: “Today the situation is ___ than yesterday.”",
              options: [
                { key: "a", label: "more worse" },
                { key: "b", label: "baddest" },
                { key: "c", label: "worse" },
                { key: "d", label: "worst" },
                { key: "e", label: "more bad" },
              ],
              correct: "c",
              comentario:
                "Letra C. “Bad” é irregular: comparativo “worse” (than), superlativo “the worst”. Não existe “more worse” nem “more bad”.",
            },
          ],
        },
      ],
    },

    /* ================= PRONOUNS & PREPOSITIONS ================= */
    {
      id: "pronouns",
      num: "04",
      kicker: "Grammar · pronomes e preposições",
      icon: Waypoints,
      title: "Pronouns & ==prepositions==",
      lead: "Os pronomes pessoais, objetos, possessivos e reflexivos — e o trio in/on/at, campeão de pegadinhas de tempo e lugar.",
      blocks: [
        {
          t: "table",
          caption: "Pronouns — o quadro completo",
          head: ["Subject", "Object", "Possessive adj.", "Possessive pron. / Reflexive"],
          rows: [
            ["I", "me", "my", "mine / myself"],
            ["you", "you", "your", "yours / yourself"],
            ["he / she / it", "him / her / it", "his / her / its", "his / hers / — / himself..."],
            ["we", "us", "our", "ours / ourselves"],
            ["they", "them", "their", "theirs / themselves"],
          ],
        },
        {
          t: "keyvalue",
          title: "Tipos e usos",
          rows: [
            { k: "Subject × object", v: "sujeito pratica (**He** arrested them); objeto recebe (She saw **him**)." },
            { k: "Possessive adj. × pron.", v: "adjetivo acompanha o nome (**my** gun); pronome substitui (that gun is **mine**)." },
            { k: "Demonstrativos", v: "**this/these** (perto), **that/those** (longe)." },
            { k: "Reflexivos", v: "-self/-selves: *The officer defended **himself***. Também dão ênfase: *I did it **myself***." },
          ],
        },
        {
          t: "table",
          caption: "In / On / At — tempo e lugar",
          head: ["Prep.", "Tempo", "Lugar"],
          rows: [
            ["at", "horas (at 8 pm), at night", "ponto exato: at the door, at the station"],
            ["on", "dias/datas: on Monday, on May 3rd", "superfícies: on the table, on the wall"],
            ["in", "meses/anos/períodos: in 2026, in the morning", "áreas/espaços: in Recife, in the car"],
          ],
        },
        {
          t: "keyvalue",
          title: "Preposições de movimento & campeãs de prova",
          rows: [
            { k: "Movimento", v: "**to** (direção: go **to** the base), **into** (para dentro), **out of** (para fora), **through** (através), **across** (atravessar)." },
            { k: "Muito cobradas", v: "**arrive at** (lugar pequeno) / **arrive in** (cidade/país); **interested in**; **good at**; **depend on**; **listen to**." },
          ],
        },
        {
          t: "callout",
          variant: "prova",
          text: "Cai muito: (1) **subject × object** e **possessive adj. × pronoun** (his × him × himself); (2) **in/on/at** em tempo e lugar; (3) **arrive at/in**; (4) preposições fixas de verbos/adjetivos (interested **in**, depend **on**, listen **to**).",
        },
        {
          t: "callout",
          variant: "pegadinha",
          text: "**at night** (não ‘in the night’), mas **in the morning/afternoon/evening**. **on Monday** (dias), **in July** (meses), **at 5 o’clock** (horas). E **its** (posse: its color) ≠ **it’s** (it is).",
        },
        {
          t: "callout",
          variant: "exemplo",
          title: "temática policial-militar",
          text: "*“The suspects arrived **in** the city **on** Friday and were seen **at** the bus station **at** night. **They** hid **themselves** **in** the car.”* → in (cidade), on (dia), at (ponto/horas), reflexivo (themselves).",
        },
        {
          t: "callout",
          variant: "macete",
          text: "**AT = ponto; ON = linha/superfície; IN = dentro/área.** Do menor para o maior tempo: **at** (hora) → **on** (dia) → **in** (mês/ano). Possessivo termina em -self? É **reflexivo**.",
        },
        {
          t: "quadro",
          title: "Quadro-resumo · Pronouns & prepositions",
          items: [
            "Subject: I/you/he/she/it/we/they; Object: me/you/him/her/it/us/them.",
            "Possessive adj. (my) acompanha; pronoun (mine) substitui.",
            "Reflexivos -self/-selves (himself, themselves).",
            "at hora/ponto; on dia/superfície; in mês-ano/área.",
            "at night, in the morning, on Monday, in 2026.",
            "arrive at (lugar pequeno) × arrive in (cidade/país).",
            "Preposições fixas: interested in, depend on, listen to, good at.",
            "its (posse) ≠ it’s (it is).",
          ],
        },
        {
          t: "quiz",
          title: "Questões-treino · Pronouns & prepositions",
          questions: [
            {
              id: 1,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "Complete: “The operation started ___ Monday ___ 6 a.m. ___ March.”",
              options: [
                { key: "a", label: "in / on / at" },
                { key: "b", label: "on / at / in" },
                { key: "c", label: "at / in / on" },
                { key: "d", label: "on / in / at" },
                { key: "e", label: "at / on / in" },
              ],
              correct: "b",
              comentario:
                "Letra B. Dia da semana → on (Monday); hora → at (6 a.m.); mês → in (March). Regra clássica do in/on/at para tempo.",
            },
            {
              id: 2,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "In “The officer defended himself during the confrontation”, the word “himself” is a reflexive pronoun referring back to the subject.",
              correct: "C",
              comentario:
                "CERTO. “Himself” é pronome reflexivo (-self) e retoma o sujeito (the officer), indicando que a ação recai sobre ele mesmo.",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "Choose the correct option: “That patrol car is ___; ours is over there.”",
              options: [
                { key: "a", label: "their" },
                { key: "b", label: "them" },
                { key: "c", label: "theirs" },
                { key: "d", label: "they" },
                { key: "e", label: "there" },
              ],
              correct: "c",
              comentario:
                "Letra C. Precisa-se de um pronome possessivo (substitui o nome): “theirs” (deles). “Their” é adjetivo possessivo (acompanha o nome); “them” é objeto.",
            },
            {
              id: 4,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado: "Complete: “The suspects arrived ___ Recife and were caught ___ the airport.”",
              options: [
                { key: "a", label: "at / in" },
                { key: "b", label: "in / at" },
                { key: "c", label: "on / in" },
                { key: "d", label: "in / on" },
                { key: "e", label: "at / on" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Arrive in” + cidade/país (in Recife); “at” + ponto específico (at the airport). Regra: arrive AT (lugar pequeno) × arrive IN (cidade/país).",
            },
            {
              id: 5,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado: "Complete: “Good detectives are interested ___ solving crimes and depend ___ reliable evidence.”",
              options: [
                { key: "a", label: "on / in" },
                { key: "b", label: "in / on" },
                { key: "c", label: "at / to" },
                { key: "d", label: "in / at" },
                { key: "e", label: "to / on" },
              ],
              correct: "b",
              comentario:
                "Letra B. Preposições fixas: “interested IN” e “depend ON”. Após preposição, o verbo vem no gerúndio (interested in solving).",
            },
            {
              id: 6,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "In “The patrol works at night to keep the city safe”, the preposition “at” is correctly used before “night”.",
              correct: "C",
              comentario:
                "CERTO. Usa-se “at night” (não ‘in the night’). Compare: in the morning/afternoon/evening, mas AT night.",
            },
          ],
        },
      ],
    },

    /* ================= VERB TENSES ================= */
    {
      id: "tenses",
      num: "05",
      kicker: "Grammar · o coração da prova",
      icon: Timer,
      title: "Verb ==tenses== (os 12 tempos)",
      lead: "Present, Past e Future, cada um em quatro aspectos (Simple, Continuous, Perfect, Perfect Continuous). Reconhecer a forma e o marcador de tempo resolve a questão.",
      blocks: [
        {
          t: "table",
          caption: "Present — formas e marcadores",
          head: ["Tempo", "Forma (afirmativa)", "Marcadores / uso"],
          rows: [
            ["Present Simple", "I work / He work**s**", "rotina: always, usually, every day"],
            ["Present Continuous", "am/is/are + **-ing**", "agora: now, at the moment"],
            ["Present Perfect", "have/has + **p.p.**", "passado ligado ao presente: already, yet, ever, just, since, for"],
            ["Present Perfect Cont.", "have/has been + **-ing**", "ação em curso até agora: for, since, how long"],
          ],
        },
        {
          t: "table",
          caption: "Past — formas e marcadores",
          head: ["Tempo", "Forma (afirmativa)", "Marcadores / uso"],
          rows: [
            ["Past Simple", "worked / went", "passado concluído: yesterday, ago, last, in 1990"],
            ["Past Continuous", "was/were + **-ing**", "ação em progresso no passado: while, when"],
            ["Past Perfect", "**had** + p.p.", "o passado do passado: before, after, already"],
            ["Past Perfect Cont.", "had been + **-ing**", "duração antes de outro fato passado: for, since"],
          ],
        },
        {
          t: "table",
          caption: "Future — formas e marcadores",
          head: ["Tempo", "Forma (afirmativa)", "Marcadores / uso"],
          rows: [
            ["Future Simple", "**will** + verbo", "decisão/previsão: tomorrow, soon, next"],
            ["Future Continuous", "will be + **-ing**", "ação em curso no futuro: at this time tomorrow"],
            ["Future Perfect", "will have + **p.p.**", "concluída antes de um ponto futuro: by (2030)"],
            ["Future Perfect Cont.", "will have been + **-ing**", "duração até um ponto futuro: by ... for"],
          ],
        },
        {
          t: "callout",
          variant: "conceito",
          title: "a batalha clássica: Past Simple × Present Perfect",
          text: "**Past Simple** = passado **concluído**, com tempo definido (*I saw him **yesterday***). **Present Perfect** = passado **conectado ao agora**, sem tempo definido (*I **have seen** him* — em algum momento até agora). Marcadores como *yesterday/ago/last* pedem Past Simple; *already/yet/ever/just/since/for* pedem Present Perfect.",
        },
        {
          t: "callout",
          variant: "prova",
          text: "Cai muito: (1) escolher o tempo pelo **marcador** (since/for → perfect; yesterday → past simple); (2) **Past Simple × Present Perfect**; (3) formas negativa/interrogativa com **do/does/did** e **have/has**; (4) **Past Perfect** (had + p.p.) como ‘passado do passado’.",
        },
        {
          t: "callout",
          variant: "pegadinha",
          text: "Com **since** (ponto: since 2020) e **for** (período: for 5 years) use **Present Perfect**, não Past Simple. Na negativa/pergunta do passado, o verbo **volta à forma base**: *Did you **see**?* (não ‘did you saw’). E *ago* sempre com **Past Simple** (two days ago).",
        },
        {
          t: "callout",
          variant: "exemplo",
          title: "temática policial-militar",
          text: "*“The squad **has patrolled** this area since 2020 (Present Perfect + since). Last night they **arrested** two suspects (Past Simple + last night). When the backup arrived, the officers **were securing** the perimeter (Past Continuous).”*",
        },
        {
          t: "callout",
          variant: "macete",
          text: "**SINCE/FOR/ALREADY/YET/EVER/JUST = Present Perfect (have + p.p.).** **YESTERDAY/AGO/LAST = Past Simple.** **HAD + p.p. = o mais antigo dos passados.** Ache o marcador e o tempo se revela.",
        },
        {
          t: "quadro",
          title: "Quadro-resumo · Verb tenses",
          items: [
            "Present Simple: rotina (works); Present Continuous: agora (is working).",
            "Present Perfect: have/has + p.p. (already, yet, ever, since, for).",
            "Past Simple: ação concluída (yesterday, ago, last).",
            "Past Continuous: was/were + -ing (while, when).",
            "Past Perfect: had + p.p. (o passado do passado).",
            "Future Simple: will + verbo; Future Perfect: will have + p.p.",
            "since (ponto) / for (período) → Present Perfect.",
            "Negativa/pergunta no passado: did + verbo base (did you see?).",
          ],
        },
        {
          t: "quiz",
          title: "Questões-treino · Verb tenses",
          questions: [
            {
              id: 1,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "Complete: “The police ___ this neighborhood since last year.”",
              options: [
                { key: "a", label: "patrolled" },
                { key: "b", label: "patrol" },
                { key: "c", label: "have patrolled" },
                { key: "d", label: "are patrolling" },
                { key: "e", label: "will patrol" },
              ],
              correct: "c",
              comentario:
                "Letra C. “Since last year” indica ação iniciada no passado e ligada ao presente → Present Perfect: have patrolled. “Since/for” são marcadores típicos do Present Perfect.",
            },
            {
              id: 2,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "The sentence “The officers arrested the suspect yesterday” is correctly written in the Past Simple.",
              correct: "C",
              comentario:
                "CERTO. “Yesterday” indica tempo passado definido, exigindo o Past Simple (arrested). Se fosse “already/just”, pediria Present Perfect.",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "Choose the correct question form: “___ you see the report last night?”",
              options: [
                { key: "a", label: "Did / saw" },
                { key: "b", label: "Do / see" },
                { key: "c", label: "Did / see" },
                { key: "d", label: "Have / seen" },
                { key: "e", label: "Was / see" },
              ],
              correct: "c",
              comentario:
                "Letra C. No passado interrogativo, usa-se “Did” + verbo na forma base: “Did you see...?”. “Did you saw” é erro clássico.",
            },
            {
              id: 4,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Complete with the correct tense: “When the backup ___, the officers ___ the perimeter.”",
              options: [
                { key: "a", label: "arrived / were securing" },
                { key: "b", label: "was arriving / secured" },
                { key: "c", label: "arrives / secure" },
                { key: "d", label: "has arrived / secure" },
                { key: "e", label: "arrived / have secured" },
              ],
              correct: "a",
              comentario:
                "Letra A. Ação pontual no passado (arrived, Past Simple) interrompendo uma ação em progresso (were securing, Past Continuous). Estrutura típica: when + past simple / past continuous.",
            },
            {
              id: 5,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Choose the correct option: “By the time the police arrived, the thieves ___ already ___.”",
              options: [
                { key: "a", label: "have / escaped" },
                { key: "b", label: "had / escaped" },
                { key: "c", label: "has / escaped" },
                { key: "d", label: "were / escaping" },
                { key: "e", label: "did / escape" },
              ],
              correct: "b",
              comentario:
                "Letra B. Uma ação anterior a outra ação passada → Past Perfect (had + p.p.): the thieves had already escaped. É o “passado do passado”.",
            },
            {
              id: 6,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "In “The unit has been patrolling the border for three months”, the Present Perfect Continuous emphasizes an action that started in the past and is still in progress.",
              correct: "C",
              comentario:
                "CERTO. Present Perfect Continuous (has/have been + -ing) com “for” enfatiza a duração de uma ação iniciada no passado e ainda em curso: has been patrolling for three months.",
            },
          ],
        },
      ],
    },

    /* ================= MODALS ================= */
    {
      id: "modals",
      num: "06",
      kicker: "Grammar · verbos modais",
      icon: Layers,
      title: "Modal ==verbs==",
      lead: "Can, could, must, should, may, might, have to... Modais expressam capacidade, obrigação, permissão, probabilidade e conselho — sempre seguidos do verbo na forma base.",
      blocks: [
        {
          t: "table",
          caption: "Modais — sentido e uso",
          head: ["Modal", "Sentido", "Exemplo"],
          rows: [
            ["can / could", "capacidade / permissão / possibilidade", "Officers **can** carry weapons."],
            ["must", "obrigação forte / dedução (certeza)", "You **must** obey the law."],
            ["have to", "obrigação (externa)", "We **have to** file a report."],
            ["should / ought to", "conselho / recomendação", "You **should** wear the vest."],
            ["may / might", "permissão / probabilidade", "The suspect **may** be armed."],
            ["would", "condicional / cortesia", "I **would** help if I could."],
            ["need (to)", "necessidade", "You **needn’t** worry."],
            ["had better", "conselho enfático (senão...)", "You **had better** leave now."],
          ],
        },
        {
          t: "keyvalue",
          title: "Detalhes que caem",
          rows: [
            { k: "Forma", v: "modal + **verbo base** (sem ‘to’, exceto have to/ought to/need to): *She can **drive*** (nunca ‘can drives’)." },
            { k: "must × have to (negativa)", v: "**mustn’t** = proibição (não pode); **don’t have to** = ausência de obrigação (não precisa). Cuidado, são diferentes!" },
            { k: "must (dedução)", v: "certeza lógica: *He **must** be the officer* (deve ser, com certeza). Oposto: *can’t be* (não pode ser)." },
            { k: "Negativas", v: "cannot/can’t, mustn’t, shouldn’t, may not, might not — sem do/does." },
          ],
        },
        {
          t: "callout",
          variant: "prova",
          text: "Cai muito: (1) **mustn’t (proibição) × don’t have to (não é obrigatório)** — a pegadinha nº 1; (2) **should** para conselho; (3) **may/might** para probabilidade; (4) modal + **verbo base**; (5) **must** como dedução de certeza.",
        },
        {
          t: "callout",
          variant: "pegadinha",
          text: "**mustn’t ≠ don’t have to.** *You **mustn’t** smoke here* = é proibido. *You **don’t have to** come* = não precisa (mas pode). Trocar um pelo outro inverte o sentido. E jamais use ‘to’ depois de can/must/should (*can to go* está errado).",
        },
        {
          t: "callout",
          variant: "exemplo",
          title: "temática policial-militar",
          text: "*“Officers **must** wear their badges (obrigação), but they **don’t have to** work on holidays (não é obrigatório). You **mustn’t** enter the crime scene (proibido). The suspect **might** be dangerous (probabilidade).”*",
        },
        {
          t: "callout",
          variant: "macete",
          text: "**mustN’T = ‘Não pode’ (proibição). don’t HAVE TO = ‘Não precisa’.** Modal nunca leva ‘s’ nem ‘to’: *he can, she must, it may*. Dedução de certeza? **must be** (positivo) / **can’t be** (negativo).",
        },
        {
          t: "quadro",
          title: "Quadro-resumo · Modal verbs",
          items: [
            "Modal + verbo na forma base (sem to, sem -s).",
            "can/could: capacidade, permissão, possibilidade.",
            "must / have to: obrigação; must também = dedução (certeza).",
            "should / ought to / had better: conselho.",
            "may / might: permissão e probabilidade.",
            "mustn’t = proibição; don’t have to = não é obrigatório.",
            "Negativas sem do/does: can’t, shouldn’t, may not.",
            "must be (certeza positiva) × can’t be (certeza negativa).",
          ],
        },
        {
          t: "quiz",
          title: "Questões-treino · Modal verbs",
          questions: [
            {
              id: 1,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "Choose the correct option: “You ___ enter the restricted area; it is strictly forbidden.”",
              options: [
                { key: "a", label: "don’t have to" },
                { key: "b", label: "mustn’t" },
                { key: "c", label: "should" },
                { key: "d", label: "can" },
                { key: "e", label: "might" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Strictly forbidden” = proibição → mustn’t (não pode). “Don’t have to” significaria apenas “não é obrigatório”, o que muda o sentido.",
            },
            {
              id: 2,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "In “She can to drive the armored vehicle”, the modal verb is correctly used.",
              correct: "E",
              comentario:
                "ERRADO. Após o modal “can”, o verbo vai na forma base sem “to”: “She can drive”. Modais não são seguidos de “to” (exceto have to/ought to/need to).",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "Which modal best expresses advice in “You ___ wear a bulletproof vest on duty”?",
              options: [
                { key: "a", label: "should" },
                { key: "b", label: "might" },
                { key: "c", label: "can" },
                { key: "d", label: "would" },
                { key: "e", label: "may" },
              ],
              correct: "a",
              comentario:
                "Letra A. “Should” expressa conselho/recomendação. “Might/may” = probabilidade/permissão; “can” = capacidade; “would” = condicional.",
            },
            {
              id: 4,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Choose the option that expresses ABSENCE OF OBLIGATION: “Officers ___ work on their day off; it is optional.”",
              options: [
                { key: "a", label: "mustn’t" },
                { key: "b", label: "can’t" },
                { key: "c", label: "don’t have to" },
                { key: "d", label: "shouldn’t" },
                { key: "e", label: "may not" },
              ],
              correct: "c",
              comentario:
                "Letra C. “Don’t have to” = não é obrigatório (é opcional). “Mustn’t/can’t/may not” expressariam proibição, invertendo o sentido.",
            },
            {
              id: 5,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Complete (deduction/certainty): “The lights are on and the door is open — someone ___ be inside.”",
              options: [
                { key: "a", label: "must" },
                { key: "b", label: "can’t" },
                { key: "c", label: "needn’t" },
                { key: "d", label: "mustn’t" },
                { key: "e", label: "shouldn’t" },
              ],
              correct: "a",
              comentario:
                "Letra A. “Must” também expressa dedução de certeza (deve estar, com certeza): someone must be inside. O oposto seria “can’t be” (não pode estar).",
            },
            {
              id: 6,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "In “You had better leave the crime scene now”, the expression “had better” gives an emphatic piece of advice/warning.",
              correct: "C",
              comentario:
                "CERTO. “Had better” dá conselho enfático, com ideia de advertência (senão...): you had better leave now. É seguido do verbo na forma base.",
            },
          ],
        },
      ],
    },

    /* ================= PASSIVE & VERB PATTERNS ================= */
    {
      id: "passive",
      num: "07",
      kicker: "Grammar · voz passiva e padrões",
      icon: Cable,
      title: "Passive voice & ==verb patterns==",
      lead: "A voz passiva (be + particípio) e os padrões verbais: quando usar infinitivo (to do), infinitivo puro (do) ou gerúndio (-ing) após outro verbo.",
      blocks: [
        {
          t: "callout",
          variant: "conceito",
          title: "voz passiva — a fórmula",
          text: "**Passive = verbo TO BE (no tempo original) + particípio passado (p.p.)**. O objeto vira sujeito; o agente vem com **by**. Ativa: *Police **arrested** the man*. Passiva: *The man **was arrested** by the police*.",
        },
        {
          t: "table",
          caption: "Passiva em cada tempo (com ‘build’)",
          head: ["Tempo", "Ativa", "Passiva (be + p.p.)"],
          rows: [
            ["Present Simple", "They build it", "It **is built**"],
            ["Present Continuous", "They are building it", "It **is being built**"],
            ["Past Simple", "They built it", "It **was built**"],
            ["Present Perfect", "They have built it", "It **has been built**"],
            ["Future (will)", "They will build it", "It **will be built**"],
            ["Modal", "They must build it", "It **must be built**"],
          ],
        },
        {
          t: "keyvalue",
          title: "Quando usar a passiva",
          rows: [
            { k: "Agente irrelevante/desconhecido", v: "*The car **was stolen*** (não importa quem)." },
            { k: "Foco na ação/vítima", v: "*The victim **was rescued***." },
            { k: "Linguagem formal/impessoal", v: "relatórios, notícias, textos oficiais." },
          ],
        },
        {
          t: "table",
          caption: "Verb patterns — o que vem depois do verbo",
          head: ["Padrão", "Verbos típicos", "Exemplo"],
          rows: [
            ["verb + to + infinitive", "want, decide, need, hope, agree, promise", "They decided **to leave**."],
            ["verb + gerund (-ing)", "enjoy, avoid, finish, suggest, mind, keep", "He avoided **being** seen."],
            ["verb + bare infinitive", "modais; make/let + objeto", "The chief made him **confess**."],
            ["após preposição", "sempre gerúndio", "interested in **learning**"],
          ],
        },
        {
          t: "callout",
          variant: "prova",
          text: "Cai muito: (1) **transformar ativa → passiva** no tempo correto; (2) identificar **be + p.p.**; (3) **gerund × infinitive** após certos verbos (enjoy + -ing; want + to); (4) **make/let + objeto + verbo base**; (5) gerúndio **após preposição**.",
        },
        {
          t: "callout",
          variant: "pegadinha",
          text: "A passiva mantém o **tempo verbal original**: Present Perfect ativo → *has arrested* vira *has been arrested* (passivo). E cuidado: **enjoy/avoid/finish** pedem **-ing** (não ‘to’): *I enjoy **working***, nunca ‘enjoy to work’. Após preposição, **sempre -ing**.",
        },
        {
          t: "callout",
          variant: "exemplo",
          title: "temática policial-militar",
          text: "Ativa: *The officers **arrested** the suspect*. Passiva: *The suspect **was arrested** (by the officers)*. Padrões: *They **decided to** search the house*; *He **avoided** answering*; *The sergeant **made** them **wait***.",
        },
        {
          t: "callout",
          variant: "macete",
          text: "**Passiva = BE + particípio, mesmo tempo da ativa.** Depois de **want/need/decide → to + verbo**; depois de **enjoy/avoid/finish/after preposition → -ing**; depois de **make/let → verbo puro** (no ‘to’).",
        },
        {
          t: "quadro",
          title: "Quadro-resumo · Passive & verb patterns",
          items: [
            "Passiva = to be (no tempo original) + particípio passado.",
            "Objeto vira sujeito; agente com ‘by’.",
            "Present Perfect passivo: has/have been + p.p.",
            "Modal passivo: modal + be + p.p. (must be built).",
            "want/need/decide/hope + to + infinitive.",
            "enjoy/avoid/finish/suggest/mind + gerund (-ing).",
            "make/let + objeto + verbo base (bare infinitive).",
            "Após preposição, sempre gerúndio (good at swimming).",
          ],
        },
        {
          t: "quiz",
          title: "Questões-treino · Passive & verb patterns",
          questions: [
            {
              id: 1,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "Change to the passive voice: “The police have arrested the suspect.”",
              options: [
                { key: "a", label: "The suspect is arrested by the police." },
                { key: "b", label: "The suspect was arrested by the police." },
                { key: "c", label: "The suspect has been arrested by the police." },
                { key: "d", label: "The suspect have arrested by the police." },
                { key: "e", label: "The suspect will be arrested by the police." },
              ],
              correct: "c",
              comentario:
                "Letra C. Present Perfect ativo (have arrested) → passivo com “has/have been + p.p.”: has been arrested. A passiva conserva o tempo verbal da ativa.",
            },
            {
              id: 2,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "In “The recruits avoided making noise during the operation”, the verb after “avoided” is correctly in the gerund form.",
              correct: "C",
              comentario:
                "CERTO. “Avoid” é um verbo seguido de gerúndio (-ing): avoided making. Outros: enjoy, finish, suggest, mind, keep. “Avoid to make” estaria errado.",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "Complete: “The commander made the soldiers ___ the perimeter immediately.”",
              options: [
                { key: "a", label: "to secure" },
                { key: "b", label: "securing" },
                { key: "c", label: "secured" },
                { key: "d", label: "secure" },
                { key: "e", label: "secures" },
              ],
              correct: "d",
              comentario:
                "Letra D. Após “make + objeto”, usa-se o infinitivo sem “to” (bare infinitive): made the soldiers secure. O mesmo vale para “let”.",
            },
            {
              id: 4,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado: "Change to the passive voice: “Someone stole the patrol car last night.”",
              options: [
                { key: "a", label: "The patrol car is stolen last night." },
                { key: "b", label: "The patrol car was stolen last night." },
                { key: "c", label: "The patrol car has been stolen last night." },
                { key: "d", label: "The patrol car stole last night." },
                { key: "e", label: "The patrol car will be stolen last night." },
              ],
              correct: "b",
              comentario:
                "Letra B. Past Simple ativo (stole) → passivo com “was/were + p.p.”: was stolen. Como o agente é indefinido (someone), pode ser omitido — uso típico da passiva.",
            },
            {
              id: 5,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado: "Complete: “The recruits finished ___ the reports before lunch.”",
              options: [
                { key: "a", label: "to write" },
                { key: "b", label: "writing" },
                { key: "c", label: "write" },
                { key: "d", label: "wrote" },
                { key: "e", label: "written" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Finish” é seguido de gerúndio (-ing): finished writing. Outros verbos com gerúndio: enjoy, avoid, suggest, mind, keep.",
            },
            {
              id: 6,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "In “All weapons must be registered by the police”, the modal passive is correctly formed with “modal + be + past participle”.",
              correct: "C",
              comentario:
                "CERTO. A passiva com modal segue a fórmula modal + be + particípio: must be registered. Ex.: can be seen, should be done, will be built.",
            },
          ],
        },
      ],
    },

    /* ================= CLAUSES & QUESTION TAGS ================= */
    {
      id: "clauses",
      num: "08",
      kicker: "Grammar · orações e tags",
      icon: Waypoints,
      title: "Clauses & ==question tags==",
      lead: "As orações adverbiais, os quatro tipos de condicionais, as relativas (defining × non-defining) e as question tags — as ‘perguntinhas’ do fim da frase.",
      blocks: [
        {
          t: "table",
          caption: "Conditionals — os quatro tipos",
          head: ["Tipo", "Estrutura", "Uso / exemplo"],
          rows: [
            ["Zero", "If + present, present", "verdade geral: If you heat ice, it **melts**."],
            ["First", "If + present, will + base", "real/provável: If they resist, we **will** act."],
            ["Second", "If + past, would + base", "hipotético/improvável: If I **were** you, I **would** call backup."],
            ["Third", "If + past perfect, would have + p.p.", "passado impossível: If they **had warned** us, we **would have prevented** it."],
          ],
        },
        {
          t: "keyvalue",
          title: "Adverbial clauses (orações adverbiais)",
          rows: [
            { k: "Time", v: "when, while, before, after, as soon as: *As soon as they arrive, call me.*" },
            { k: "Reason", v: "because, since, as: *We stopped **because** it was dangerous.*" },
            { k: "Contrast", v: "although, though, even though, while: *Although tired, he continued.*" },
            { k: "Purpose", v: "to, in order to, so that: *He ran **so that** he could catch the thief.*" },
            { k: "Result", v: "so...that, such...that: *It was **so** dark **that** we used flashlights.*" },
          ],
        },
        {
          t: "twocol",
          title: "Relative clauses",
          left: { label: "Defining (essencial, sem vírgula)", text: "identifica o termo; não se separa por vírgula: *The officer **who** arrested him is here.* (‘that’ pode substituir who/which)." },
          right: { label: "Non-defining (extra, com vírgula)", text: "informação adicional, entre vírgulas; **não** usa ‘that’: *Chief Silva, **who** leads the unit, spoke.*" },
        },
        {
          t: "keyvalue",
          title: "Relative pronouns & question tags",
          rows: [
            { k: "who / which / that", v: "**who** = pessoas; **which** = coisas; **that** = ambos (só em defining)." },
            { k: "whose / whom / where", v: "**whose** = posse; **whom** = objeto (formal); **where** = lugar." },
            { k: "Question tags", v: "afirmativa → tag **negativa**, e vice-versa, repetindo o auxiliar: *You are an officer, **aren’t you**? / She can’t drive, **can she**?*" },
          ],
        },
        {
          t: "callout",
          variant: "prova",
          text: "Cai muito: (1) identificar o **tipo de conditional** pela estrutura; (2) **defining × non-defining** (vírgula e ‘that’); (3) **who/which/whose**; (4) montar a **question tag** correta (auxiliar + inversão de polaridade); (5) conjunções adverbiais (although, so that, because).",
        },
        {
          t: "callout",
          variant: "pegadinha",
          text: "No **Second Conditional** usa-se **were** para todas as pessoas: *If I **were** you*. Em **non-defining**, jamais use **that** e nunca esqueça as vírgulas. E a **question tag** inverte a polaridade: afirmativa pede tag negativa (*..., isn’t it?*).",
        },
        {
          t: "callout",
          variant: "exemplo",
          title: "temática policial-militar",
          text: "*“If the suspect **resists**, the officers **will** use force (1st cond.). The detective **who** solved the case, **whose** report was praised, got a medal. You saw the getaway car, **didn’t you**?”*",
        },
        {
          t: "callout",
          variant: "macete",
          text: "**Conditionals: 0=sempre; 1=real; 2=sonho (were/would); 3=arrependimento (had + would have).** Question tag: **‘verdade, né?’** → repete o auxiliar e troca o sinal (positiva→negativa).",
        },
        {
          t: "quadro",
          title: "Quadro-resumo · Clauses & question tags",
          items: [
            "Zero cond.: if + present, present (verdade geral).",
            "First: if + present, will + base (real/provável).",
            "Second: if + past (were), would + base (hipotético).",
            "Third: if + past perfect, would have + p.p. (passado impossível).",
            "Defining: sem vírgula, aceita ‘that’; Non-defining: com vírgula, sem ‘that’.",
            "who (pessoa), which (coisa), that (ambos), whose (posse).",
            "Adverbiais: although (contraste), because (causa), so that (finalidade).",
            "Question tag: inverte a polaridade e repete o auxiliar.",
          ],
        },
        {
          t: "quiz",
          title: "Questões-treino · Clauses & question tags",
          questions: [
            {
              id: 1,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "Complete (second conditional): “If I ___ the commander, I ___ more patrols.”",
              options: [
                { key: "a", label: "am / will send" },
                { key: "b", label: "were / would send" },
                { key: "c", label: "was / will send" },
                { key: "d", label: "had been / would have sent" },
                { key: "e", label: "were / will send" },
              ],
              correct: "b",
              comentario:
                "Letra B. Second conditional (hipótese improvável): If + past (were, para todas as pessoas) + would + verbo base: If I were... I would send. A opção D é o Third conditional.",
            },
            {
              id: 2,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "In “The officer who arrested the suspect received a medal”, the relative clause is defining and, therefore, is not set off by commas.",
              correct: "C",
              comentario:
                "CERTO. A oração “who arrested the suspect” é essencial para identificar de qual oficial se fala (defining) e não vem entre vírgulas. Se fosse informação extra (non-defining), levaria vírgulas.",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "Choose the correct question tag: “You are on duty tonight, ___?”",
              options: [
                { key: "a", label: "are you" },
                { key: "b", label: "don’t you" },
                { key: "c", label: "aren’t you" },
                { key: "d", label: "isn’t it" },
                { key: "e", label: "won’t you" },
              ],
              correct: "c",
              comentario:
                "Letra C. Frase afirmativa com “are” → tag negativa com o mesmo auxiliar e sujeito: aren’t you. Inversão de polaridade é a regra das question tags.",
            },
            {
              id: 4,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Complete (third conditional): “If the guards ___ the alarm, the robbery ___.”",
              options: [
                { key: "a", label: "heard / would be prevented" },
                { key: "b", label: "had heard / would have been prevented" },
                { key: "c", label: "hear / will prevent" },
                { key: "d", label: "have heard / would prevent" },
                { key: "e", label: "were hearing / prevented" },
              ],
              correct: "b",
              comentario:
                "Letra B. Third conditional (passado impossível/arrependimento): If + past perfect (had heard), would have + p.p. (would have been prevented). Fala de algo que NÃO aconteceu no passado.",
            },
            {
              id: 5,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Choose the correct relative pronoun: “The station ___ the suspects were held is downtown.”",
              options: [
                { key: "a", label: "who" },
                { key: "b", label: "whose" },
                { key: "c", label: "which" },
                { key: "d", label: "where" },
                { key: "e", label: "whom" },
              ],
              correct: "d",
              comentario:
                "Letra D. “Where” retoma lugar (a delegacia em que...): The station where the suspects were held. “Who/whom” = pessoas; “which” = coisas; “whose” = posse.",
            },
            {
              id: 6,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "In “Although he was injured, the officer continued the pursuit”, the word “although” introduces an idea of contrast/concession.",
              correct: "C",
              comentario:
                "CERTO. “Although” (embora/apesar de) introduz oração adverbial de contraste/concessão: mesmo ferido, ele continuou. Equivale a though/even though.",
            },
          ],
        },
      ],
    },

    /* ==================== SIMULADO ==================== */
    {
      id: "questoes",
      num: "09",
      kicker: "Time to practice",
      icon: ListChecks,
      title: "Simulado ==de Inglês==",
      lead: "Quinze itens misturando vocabulário, tempos verbais, modais, voz passiva, condicionais e relativas, com predominância do estilo Instituto AOCP (múltipla escolha A–E). Responda sem consultar.",
      blocks: [
        {
          t: "quiz",
          questions: [
            {
              id: 1,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "The word “eventually” in “They eventually caught the thief” means:",
              options: [
                { key: "a", label: "eventualmente / às vezes" },
                { key: "b", label: "finalmente / por fim" },
                { key: "c", label: "provavelmente" },
                { key: "d", label: "rapidamente" },
                { key: "e", label: "raramente" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Eventually” é falso cognato: significa “finalmente/por fim”, não “eventualmente”.",
            },
            {
              id: 2,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado: "In “The team has worked here for ten years”, the Present Perfect is correctly used with “for”.",
              correct: "C",
              comentario:
                "CERTO. “For” (período) é marcador do Present Perfect quando a ação continua até o presente: has worked for ten years.",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "Complete: “You ___ smoke in the fuel depot; it’s extremely dangerous.”",
              options: [
                { key: "a", label: "don’t have to" },
                { key: "b", label: "mustn’t" },
                { key: "c", label: "should" },
                { key: "d", label: "might" },
                { key: "e", label: "can" },
              ],
              correct: "b",
              comentario:
                "Letra B. Proibição → mustn’t. “Don’t have to” significaria ‘não é obrigatório’, o oposto do sentido.",
            },
            {
              id: 4,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "Passive voice of “Officers will investigate the case”:",
              options: [
                { key: "a", label: "The case is investigated by officers." },
                { key: "b", label: "The case was investigated by officers." },
                { key: "c", label: "The case will be investigated by officers." },
                { key: "d", label: "The case has been investigated by officers." },
                { key: "e", label: "The case will investigated by officers." },
              ],
              correct: "c",
              comentario:
                "Letra C. Future (will) passivo: will be + p.p. → will be investigated.",
            },
            {
              id: 5,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado: "The phrasal verb “carry out” means “to execute / to perform” (an operation, a plan).",
              correct: "C",
              comentario:
                "CERTO. “Carry out” = realizar/executar. Ex.: carry out an operation.",
            },
            {
              id: 6,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "Complete: “There isn’t ___ information about the suspect.”",
              options: [
                { key: "a", label: "many" },
                { key: "b", label: "much" },
                { key: "c", label: "a lot" },
                { key: "d", label: "few" },
                { key: "e", label: "several" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Information” é incontável → usa-se “much” (much information). “Many/few/several” combinam com contáveis.",
            },
            {
              id: 7,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "Choose the correct relative pronoun: “The officer ___ car was stolen filed a report.”",
              options: [
                { key: "a", label: "who" },
                { key: "b", label: "which" },
                { key: "c", label: "whose" },
                { key: "d", label: "whom" },
                { key: "e", label: "where" },
              ],
              correct: "c",
              comentario:
                "Letra C. Indica posse (o carro do oficial) → whose. “Who” é sujeito pessoa; “which” é coisa; “whom” é objeto; “where” é lugar.",
            },
            {
              id: 8,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "Complete (first conditional): “If the alarm ___, the guards ___ immediately.”",
              options: [
                { key: "a", label: "rings / will respond" },
                { key: "b", label: "rings / would respond" },
                { key: "c", label: "rang / will respond" },
                { key: "d", label: "will ring / respond" },
                { key: "e", label: "had rung / would respond" },
              ],
              correct: "a",
              comentario:
                "Letra A. First conditional (real/provável): If + present simple, will + verbo base → If the alarm rings, the guards will respond.",
            },
            {
              id: 9,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado: "In the question “Did the officers found the weapon?”, the verb form is correct.",
              correct: "E",
              comentario:
                "ERRADO. No passado interrogativo, após “did” o verbo fica na forma base: “Did the officers FIND the weapon?”. “Did ... found” é erro.",
            },
            {
              id: 10,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "Choose the correct superlative: “This is ___ district in the city.”",
              options: [
                { key: "a", label: "the more dangerous" },
                { key: "b", label: "the dangerousest" },
                { key: "c", label: "the most dangerous" },
                { key: "d", label: "the most dangerousest" },
                { key: "e", label: "the danger" },
              ],
              correct: "c",
              comentario:
                "Letra C. Adjetivo longo → superlativo com “the most”: the most dangerous.",
            },
            {
              id: 11,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "Complete: “The sergeant let the recruits ___ earlier today.”",
              options: [
                { key: "a", label: "to leave" },
                { key: "b", label: "leaving" },
                { key: "c", label: "left" },
                { key: "d", label: "leave" },
                { key: "e", label: "leaves" },
              ],
              correct: "d",
              comentario:
                "Letra D. Após “let + objeto”, verbo na forma base (bare infinitive): let the recruits leave. Igual a “make”.",
            },
            {
              id: 12,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "The question tag for “She can handle the weapon” is “can’t she?”.",
              correct: "C",
              comentario:
                "CERTO. Frase afirmativa com modal “can” → tag negativa com o mesmo auxiliar: can’t she? Inversão de polaridade.",
            },
            {
              id: 13,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "The word “realize” in “The officer realized that the door was open” means:",
              options: [
                { key: "a", label: "realizar / executar" },
                { key: "b", label: "perceber / dar-se conta" },
                { key: "c", label: "consertar" },
                { key: "d", label: "fechar" },
                { key: "e", label: "ignorar" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Realize” é falso cognato: significa “perceber/dar-se conta”, não “realizar”. Para “realizar”, usa-se “carry out / accomplish”.",
            },
            {
              id: 14,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Complete: “The chief wants the team ___ the evidence before they ___ the scene.”",
              options: [
                { key: "a", label: "to collect / leave" },
                { key: "b", label: "collecting / leaving" },
                { key: "c", label: "collect / to leave" },
                { key: "d", label: "to collect / leaving" },
                { key: "e", label: "collected / left" },
              ],
              correct: "a",
              comentario:
                "Letra A. “Want + object + to + infinitive” (wants the team to collect). Após “before” usa-se present simple para futuro (before they leave). Padrão verbal + conjunção temporal.",
            },
            {
              id: 15,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado: "Choose the correct passive form: “The report ___ by the sergeant every morning.”",
              options: [
                { key: "a", label: "writes" },
                { key: "b", label: "is written" },
                { key: "c", label: "is writing" },
                { key: "d", label: "has written" },
                { key: "e", label: "wrote" },
              ],
              correct: "b",
              comentario:
                "Letra B. Present Simple passivo (rotina, “every morning”): is/are + p.p. → is written. O relatório é escrito (recebe a ação).",
            },
          ],
        },
      ],
    },

    /* ==================== RESUMO ==================== */
    {
      id: "resumo",
      num: "10",
      kicker: "Revisão final · leia na véspera",
      icon: BookOpenCheck,
      title: "Resumo ==de véspera==",
      lead: "O inglês da prova destilado em duas listas: o que costuma ser verdadeiro e as armadilhas que mais derrubam.",
      blocks: [
        {
          t: "list",
          variant: "check",
          title: "Regras que costumam ser CERTAS",
          items: [
            "Skimming = ideia geral; scanning = informação específica.",
            "since/for/already/yet/ever/just → Present Perfect (have + p.p.).",
            "yesterday/ago/last → Past Simple.",
            "Modal + verbo base (can drive, must go).",
            "mustn’t = proibição; don’t have to = não é obrigatório.",
            "Passiva = be (tempo original) + particípio; agente com ‘by’.",
            "enjoy/avoid/finish + gerund; want/decide/need + to + infinitive.",
            "Second conditional usa ‘were’ para todas as pessoas.",
          ],
        },
        {
          t: "list",
          variant: "x",
          title: "Armadilhas que são quase sempre ERRADAS",
          items: [
            "actually = ‘atualmente’ (é ‘na verdade’); eventually = ‘eventualmente’ (é ‘finalmente’).",
            "pretend = ‘pretender’ (é ‘fingir’); push = ‘puxar’ (é ‘empurrar’).",
            "‘informations’, ‘advices’ (incontáveis, sem plural).",
            "‘more better’, ‘more easier’ (comparativos errados).",
            "‘Did you saw?’ (o certo é ‘Did you see?’).",
            "‘can to drive’ (modal não leva ‘to’).",
            "‘enjoy to work’ (o certo é ‘enjoy working’).",
            "Usar ‘that’ em oração relativa non-defining (com vírgulas).",
          ],
        },
        {
          t: "callout",
          variant: "macete",
          title: "para fechar",
          text: "Se sobrar 5 minutos: revise os **false friends**, os **marcadores de tempo** (since/for × yesterday/ago), **mustn’t × don’t have to** e os **quatro conditionals**. São os pontos mais recorrentes.",
        },
        {
          t: "callout",
          variant: "prova",
          title: "próximo passo",
          text: 'Encerramos a **Língua Inglesa**. A próxima disciplina é **Língua Espanhola**: determinantes, substantivos, adjetivos, pronomes, verbos, perífrases, acentuação e as divergências português × espanhol (heterossemânticos e falsos cognatos).',
        },
      ],
    },
  ],
};
