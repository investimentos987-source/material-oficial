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

export const PART5: Part = {
  id: 3,
  tabShort: "Espanhol",
  tabLabel: "Língua Espanhola",
  docTitle: "PMPE Oficial · Língua Espanhola",
  footerNote: "Língua Espanhola",
  nextNote: "➡️ Próxima disciplina: Raciocínio Lógico e Estatística.",
  bancas: ["Instituto AOCP", "Cebraspe", "FGV", "FCC", "IBFC"],
  tocLabel: "Nesta disciplina",
  hero: {
    eyebrow:
      "Oficial PMPE · Disciplina 3 de 13 · Língua Estrangeira · Banca Instituto AOCP",
    title: "Língua ==Espanhola==",
    subtitle:
      "determinantes, substantivos e adjetivos, pronomes, verbos e perífrases, acentuação e as divergências português × espanhol — do jeito que o Instituto AOCP cobra",
    description:
      "Um guia **completo e denso** do espanhol de prova, sempre **comparando com o português**: determinantes (del, al), gênero e número, verbos irregulares e **perífrases**, a acentuação (com a **tilde diacrítica**) e os traiçoeiros **falsos amigos** (heterossemânticos). Com exemplos policial-militares, ==pegadinhas mapeadas==, quadros-resumo, macetes e um grande banco de questões-treino comentadas no estilo da banca **Instituto AOCP** (predominância de múltipla escolha A–E).",
    stats: [
      { icon: BookOpenCheck, big: "8", small: "grandes tópicos" },
      { icon: Timer, big: "~1h30", small: "de leitura focada" },
      { icon: ListChecks, big: "63", small: "questões comentadas" },
      { icon: Lightbulb, big: "AOCP", small: "foco na banca e no cargo" },
    ],
    terms: [
      "contrações: del · al",
      "artículo neutro lo",
      "posesivos: mi / mío",
      "este · ese · aquel",
      "ser × estar",
      "haber × tener",
      "e→ie · o→ue · e→i",
      "ir a + infinitivo",
      "tener que + infinitivo",
      "agudas · llanas · esdrújulas",
      "tilde diacrítica",
      "heterogenéricos (la leche)",
      "heterotónicos (alcohol)",
      "falsos amigos",
      "exquisito · largo · oficina",
    ],
    palette: "ember",
    termsLabel: "Términos más cobrados (AOCP)",
    startId: "panorama5",
  },
  sections: [
    /* ============================ PANORAMA ============================ */
    {
      id: "panorama5",
      num: "01",
      kicker: "Como usar este material",
      icon: GraduationCap,
      title: "Panorama da ==disciplina==",
      lead: "Espanhol e português são línguas irmãs — e é justamente por isso que a banca cobra as DIFERENÇAS. Aqui você estuda cada tópico comparando com o português.",
      blocks: [
        {
          t: "p",
          text: "A proximidade entre as línguas ajuda na leitura, mas engana na hora da precisão. O concurso explora exatamente os pontos em que espanhol e português **divergem**: gênero das palavras, sílaba tônica, acentuação e, sobretudo, os **falsos amigos** (heterossemânticos). Estude sempre perguntando: *como é em português?*",
        },
        {
          t: "cards",
          cols: 3,
          tone: "y",
          cards: [
            { icon: ScanSearch, title: "Comprensión", text: "Leitura e interpretação de textos em espanhol + sinônimos e antônimos aplicados ao contexto." },
            { icon: Layers, title: "Morfología", text: "Determinantes, substantivos, adjetivos, pronomes e verbos (regulares, irregulares e perífrases)." },
            { icon: Globe, title: "Diferenças PT × ES", text: "Acentuação, heterogenéricos, heterotônicos e os falsos amigos — onde as línguas se separam." },
          ],
        },
        {
          t: "callout",
          variant: "macete",
          title: "estratégia",
          text: "Em espanhol, quase tudo que você sabe de português ajuda — **menos** quando a banca marca uma pegadinha. Foque energia nos **heterossemânticos**, na **acentuação** e nos **heterogenéricos**: é ali que os pontos são ganhos ou perdidos.",
        },
      ],
    },

    /* ============= COMPRENSIÓN & VOCABULARIO ============= */
    {
      id: "comprension",
      num: "02",
      kicker: "Tópicos 1 e 10 · leitura e vocabulário",
      icon: ScanSearch,
      title: "Comprensión & ==vocabulario==",
      lead: "Interpretar textos em espanhol e dominar sinônimos e antônimos. A leitura é facilitada pela semelhança, mas exige atenção aos detalhes de sentido.",
      blocks: [
        {
          t: "callout",
          variant: "conceito",
          title: "contexto e natureza (comparação com o português)",
          text: "Ler em espanhol é, para o brasileiro, mais **fácil** que em inglês — muitos cognatos verdadeiros. Mas a interpretação de prova cobra o **sentido exato**: sinônimos adequados ao contexto e a diferença entre o que o texto **diz** e o que **sugere**, como em português.",
        },
        {
          t: "keyvalue",
          title: "Sinónimos y antónimos frequentes",
          rows: [
            { k: "Sinónimos", v: "**empezar = comenzar** (começar); **rápido = veloz**; **bonito = hermoso** (bonito); **enfadarse = enojarse** (irritar-se)." },
            { k: "Antónimos", v: "**subir × bajar** (subir/descer); **entrar × salir**; **abierto × cerrado**; **peligroso × seguro** (perigoso/seguro)." },
            { k: "Conectores úteis", v: "**pero** (mas), **sin embargo** (no entanto), **por lo tanto** (portanto), **aunque** (embora), **porque** (porque)." },
          ],
        },
        {
          t: "callout",
          variant: "prova",
          text: "Cai muito: (1) **ideia central** do texto; (2) **sinônimo** que substitui uma palavra sem mudar o sentido; (3) reconhecer **conectores** (pero, sin embargo, aunque); (4) o sentido de uma expressão **no contexto**.",
        },
        {
          t: "callout",
          variant: "pegadinha",
          text: "**pero** = ‘mas’ (oposição); **sino** = ‘mas sim’ (correção após negação): *No es rojo, **sino** azul*. Trocar um pelo outro é erro clássico. E **aunque** = ‘embora/ainda que’, não ‘a menos que’.",
        },
        {
          t: "callout",
          variant: "exemplo",
          title: "temática policial-militar",
          text: "*“El agente no huyó, **sino** que enfrentó el peligro; **sin embargo**, pidió refuerzos.”* → O agente não fugiu, **mas sim** enfrentou o perigo; **no entanto**, pediu reforços. Note o *sino* (correção) e o *sin embargo* (oposição).",
        },
        {
          t: "callout",
          variant: "macete",
          text: "**SINO corrige, PERO opõe.** Se antes houver negação e a ideia for ‘e sim’, use **sino**. ‘Sin embargo’ e ‘no obstante’ = ‘no entanto’; ‘por lo tanto’ = ‘portanto’.",
        },
        {
          t: "quadro",
          title: "Quadro-resumo · Comprensión & vocabulario",
          items: [
            "Muitos cognatos verdadeiros facilitam a leitura.",
            "empezar = comenzar (começar); hermoso = bonito.",
            "subir × bajar; entrar × salir; abierto × cerrado.",
            "pero = mas (oposição); sino = mas sim (correção).",
            "sin embargo / no obstante = no entanto.",
            "aunque = embora / ainda que; por lo tanto = portanto.",
            "Deduza vocabulário desconhecido pelo contexto.",
            "Cuidado com falsos amigos (ver tópico 09).",
          ],
        },
        {
          t: "quiz",
          title: "Questões-treino · Comprensión & vocabulario",
          questions: [
            {
              id: 1,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "En “El sospechoso no colaboró, sino que se resistió”, la palabra “sino” indica:",
              options: [
                { key: "a", label: "oposição simples (= mas)" },
                { key: "b", label: "correção após negação (= mas sim)" },
                { key: "c", label: "condição (= se)" },
                { key: "d", label: "conclusão (= portanto)" },
                { key: "e", label: "causa (= porque)" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Sino” aparece após uma negação para corrigir/contrapor (mas sim): no colaboró, sino que se resistió. Para oposição simples usaria-se “pero”.",
            },
            {
              id: 2,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado: "En español, la conjunción “aunque” equivale, en portugués, a “embora/ainda que”.",
              correct: "C",
              comentario:
                "CERTO. “Aunque” tem valor concessivo, correspondendo a “embora/ainda que” em português.",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "El sinónimo de “empezar” es:",
              options: [
                { key: "a", label: "terminar" },
                { key: "b", label: "comenzar" },
                { key: "c", label: "cerrar" },
                { key: "d", label: "bajar" },
                { key: "e", label: "salir" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Empezar” e “comenzar” são sinônimos (começar). “Terminar” é o antônimo.",
            },
            {
              id: 4,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Lea: “Los agentes acudieron rápidamente al lugar del delito.” La palabra “acudieron” puede sustituirse, sin cambiar el sentido, por:",
              options: [
                { key: "a", label: "se fueron" },
                { key: "b", label: "llegaron / se dirigieron" },
                { key: "c", label: "se negaron" },
                { key: "d", label: "durmieron" },
                { key: "e", label: "olvidaron" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Acudir” significa comparecer/dirigir-se a um lugar. Os agentes chegaram/dirigiram-se ao local do delito. Não confunda com “huir” (fugir).",
            },
            {
              id: 5,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado: "El antónimo de “culpable” en español es:",
              options: [
                { key: "a", label: "reo" },
                { key: "b", label: "acusado" },
                { key: "c", label: "inocente" },
                { key: "d", label: "sospechoso" },
                { key: "e", label: "detenido" },
              ],
              correct: "c",
              comentario:
                "Letra C. “Inocente” é o antônimo de “culpable”. As demais (reo, acusado, sospechoso, detenido) estão no campo semântico da culpa/investigação.",
            },
            {
              id: 6,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "En la frase “El comisario trabaja en una oficina en el centro”, la palabra “oficina” significa “oficina/taller” (local de reparos), igual que en portugués.",
              correct: "E",
              comentario:
                "ERRADO. “Oficina” em espanhol é falso amigo (heterossemântico): significa “escritório/repartição”, não “oficina de reparos” (que em espanhol é “taller”). O comissário trabalha em um escritório no centro.",
            },
          ],
        },
      ],
    },

    /* ============= DETERMINANTES ============= */
    {
      id: "determinantes",
      num: "03",
      kicker: "Tópico 2 · determinantes do nome",
      icon: Type,
      title: "Determinantes ==del nombre==",
      lead: "Artigos (e as contrações del/al), possessivos, demonstrativos, numerais, indefinidos, relativos, interrogativos e exclamativos — tudo o que acompanha o substantivo.",
      blocks: [
        {
          t: "keyvalue",
          title: "Artigos e contrações",
          rows: [
            { k: "Definidos", v: "**el, la, los, las** + o neutro **lo** (não existe em português): *lo importante* = ‘o importante/o que é importante’." },
            { k: "Indefinidos", v: "**un, una, unos, unas**." },
            { k: "Contrações (só duas!)", v: "**a + el = al**; **de + el = del**: *Voy **al** cuartel; la puerta **del** coche*. Só com o artigo masculino ‘el’." },
            { k: "‘el’ antes de a/ha tônico", v: "substantivo feminino iniciado por **a/ha tônico** usa ‘el’: **el agua**, **el águila**, **el hambre** (mas ‘las aguas’)." },
          ],
        },
        {
          t: "table",
          caption: "Possessivos, demonstrativos e demais determinantes",
          head: ["Tipo", "Formas", "Observação PT × ES"],
          rows: [
            ["Posesivos átonos", "mi, tu, su, nuestro, vuestro, su", "antecedem o nome: **mi** placa"],
            ["Posesivos tónicos", "mío, tuyo, suyo, nuestro, vuestro, suyo", "vêm depois: un amigo **mío**"],
            ["Demostrativos", "este, ese, aquel (+ neutros esto, eso, aquello)", "**ese** = perto do ouvinte (não existe igual em PT)"],
            ["Numerales", "uno, dos... / primero, segundo...", "‘uno’ → **un** antes de masc.: **un** coche"],
            ["Indefinidos", "algún, ningún, todo, mucho, poco, cualquier", "**algún/ningún** apocopados antes de masc."],
            ["Relativos", "que, quien, cuyo, el que, donde", "**cuyo** = posse (como em PT)"],
            ["Interrog./Exclam.", "qué, quién, cuál, cuánto, cómo, dónde", "**sempre com tilde**: ¿**Qué** pasó? ¡**Qué** susto!"],
          ],
        },
        {
          t: "callout",
          variant: "prova",
          text: "Cai muito: (1) as **contrações al/del** (só essas duas!); (2) o **artigo neutro lo**; (3) **el agua/el hambre** (a tônico); (4) **apócope** (un, algún, ningún, buen, gran, primer, tercer); (5) interrogativos/exclamativos **com tilde**.",
        },
        {
          t: "callout",
          variant: "pegadinha",
          text: "Em espanhol há **só duas** contrações obrigatórias: **al** e **del**. Não existe ‘na, no, da, do, pela’ como em português — usa-se **en la, en el, de la, por la**. E ‘**el agua**’ continua **feminino** (‘el agua fría’, ‘las aguas’): o ‘el’ é só fonético.",
        },
        {
          t: "callout",
          variant: "exemplo",
          title: "temática policial-militar",
          text: "*“El agente fue **al** lugar **del** crimen. Revisó **el arma** (fem. com a-tônico) y tomó **un** buen informe. ¿**Cuál** es su placa?”* → contrações al/del, ‘el arma’, apócope ‘buen’, interrogativo com tilde.",
        },
        {
          t: "callout",
          variant: "macete",
          title: "apócope",
          text: "**Antes de substantivo masculino singular, alguns determinantes ‘encurtam’ (apócope):** uno→**un**, bueno→**buen**, malo→**mal**, primero→**primer**, tercero→**tercer**, alguno→**algún**, ninguno→**ningún**, grande→**gran** (antes de qualquer gênero).",
        },
        {
          t: "quadro",
          title: "Quadro-resumo · Determinantes",
          items: [
            "Artigos: el, la, los, las, un(a)(os)(as) + neutro ‘lo’.",
            "Contrações: só a+el=al e de+el=del.",
            "el agua, el hambre (fem. com a/ha tônico) — mas ‘las aguas’.",
            "Posesivos átonos antes (mi); tônicos depois (mío).",
            "Demostrativos: este/ese/aquel + neutros esto/eso/aquello.",
            "Apócope: un, buen, mal, primer, tercer, algún, ningún, gran.",
            "cuyo = posse; que = relativo universal.",
            "Interrogativos/exclamativos sempre com tilde (qué, cuál, cómo).",
          ],
        },
        {
          t: "quiz",
          title: "Questões-treino · Determinantes",
          questions: [
            {
              id: 1,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "Complete: “El comisario fue ___ despacho ___ jefe.”",
              options: [
                { key: "a", label: "a el / de el" },
                { key: "b", label: "al / del" },
                { key: "c", label: "al / de el" },
                { key: "d", label: "a el / del" },
                { key: "e", label: "en el / de la" },
              ],
              correct: "b",
              comentario:
                "Letra B. As contrações são obrigatórias: a + el = al; de + el = del. “Fue al despacho del jefe”.",
            },
            {
              id: 2,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "En “el agua estaba fría”, aunque se use el artículo “el”, la palabra “agua” es femenina, lo que se confirma en “las aguas”.",
              correct: "C",
              comentario:
                "CERTO. Substantivos femininos iniciados por a-/ha- tônico usam “el” no singular por questão fonética (el agua, el hambre, el águila), mas permanecem femininos: el agua fría, las aguas.",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "Assinale a forma com apócope correta antes de substantivo masculino:",
              options: [
                { key: "a", label: "uno coche" },
                { key: "b", label: "primero informe" },
                { key: "c", label: "un buen agente" },
                { key: "d", label: "alguno problema" },
                { key: "e", label: "grande error (antes do nome)" },
              ],
              correct: "c",
              comentario:
                "Letra C. Antes de masculino singular: uno→un, bueno→buen (un buen agente). As demais deveriam ser: un coche, primer informe, algún problema, gran error.",
            },
            {
              id: 4,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Complete correctamente con las contracciones: “El comisario fue ___ cuartel y habló ___ jefe de la unidad.”",
              options: [
                { key: "a", label: "a el / de el" },
                { key: "b", label: "al / del" },
                { key: "c", label: "al / de el" },
                { key: "d", label: "a el / del" },
                { key: "e", label: "del / al" },
              ],
              correct: "b",
              comentario:
                "Letra B. Em espanhol só existem duas contrações obrigatórias: a + el = al; de + el = del. Logo: fue al cuartel / habló del jefe. Nunca se escreve “a el” ou “de el”.",
            },
            {
              id: 5,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Sobre o artigo neutro “lo”, assinale a alternativa correta:",
              options: [
                { key: "a", label: "“lo” acompanha substantivos masculinos: lo coche" },
                { key: "b", label: "“lo” é plural de “el”" },
                { key: "c", label: "“lo” substantiva adjetivos/ideias abstratas: lo importante es actuar" },
                { key: "d", label: "“lo” equivale ao artigo feminino" },
                { key: "e", label: "“lo” não existe em espanhol" },
              ],
              correct: "c",
              comentario:
                "Letra C. O artigo neutro “lo” não acompanha substantivos; ele substantiva adjetivos ou expressa ideias abstratas: “lo importante” (o importante), “lo mejor” (o melhor). É uma peculiaridade do espanhol.",
            },
            {
              id: 6,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "En español, ante sustantivos femeninos que empiezan por “a-” o “ha-” tónica, se usa el artículo “el” en singular, como en “el agua” y “el arma”.",
              correct: "C",
              comentario:
                "CERTO. Diante de substantivo feminino iniciado por a-/ha- tônica, usa-se “el” no singular por eufonia: el agua, el arma, el hacha. No plural volta ao feminino: las armas, las aguas.",
            },
          ],
        },
      ],
    },

    /* ============= SUSTANTIVOS Y ADJETIVOS ============= */
    {
      id: "sustantivos",
      num: "04",
      kicker: "Tópicos 3 e 4 · nome e adjetivo",
      icon: Layers,
      title: "Sustantivos y ==adjetivos==",
      lead: "Gênero, número e grau. A grande armadilha é o gênero: muitas palavras mudam de gênero entre português e espanhol (heterogenéricos).",
      blocks: [
        {
          t: "keyvalue",
          title: "Gênero e número do substantivo",
          rows: [
            { k: "Regra geral", v: "**-o** masculino, **-a** feminino (el chico / la chica). Exceções: **el día**, **la mano**, **el mapa**, **el problema**." },
            { k: "Plural", v: "+**-s** após vogal (casa→casas); +**-es** após consoante (ciudad→ciudades). **-z → -ces**: lápiz → **lápices**." },
            { k: "Heterogenéricos", v: "gênero diferente do português: **la leche** (o leite), **la sangre** (o sangue), **el color** (a cor), **el viaje** (a viagem)." },
          ],
        },
        {
          t: "table",
          caption: "Heterogenéricos — o gênero muda! (campeões de prova)",
          head: ["Espanhol", "Português", "Espanhol", "Português"],
          rows: [
            ["la leche", "o leite", "el viaje", "a viagem"],
            ["la sangre", "o sangue", "el color", "a cor"],
            ["la nariz", "o nariz", "el dolor", "a dor"],
            ["la sal", "o sal", "el puente", "a ponte"],
            ["la miel", "o mel", "el árbol", "a árvore"],
            ["la costumbre", "o costume", "el origen", "a origem"],
          ],
        },
        {
          t: "keyvalue",
          title: "Adjetivo — flexão e grau",
          rows: [
            { k: "Concordância", v: "concorda com o nome em gênero e número: *coches **rápidos***, *unidades **especializadas***." },
            { k: "Comparativo", v: "**más ... que** (mais que), **menos ... que**, **tan ... como** (tão quanto)." },
            { k: "Superlativo", v: "**el más ...**; superlativo absoluto em **-ísimo**: *rapidísimo*, *grandísimo*." },
            { k: "Irregulares", v: "**mejor** (melhor), **peor** (pior), **mayor** (maior), **menor** (menor)." },
          ],
        },
        {
          t: "callout",
          variant: "prova",
          text: "Cai muito: (1) **heterogenéricos** (la leche, el color, el viaje); (2) **plural em -es e -ces** (ciudades, lápices); (3) comparativo **tan...como / más...que**; (4) superlativo **-ísimo**; (5) irregulares mejor/peor.",
        },
        {
          t: "callout",
          variant: "pegadinha",
          text: "**la leche, la sangre, la nariz, la sal, la miel** são femininas em espanhol (masculinas em PT). E **el color, el dolor, el viaje, el árbol, el origen** são masculinas em espanhol (femininas em PT). A banca troca o artigo para testar você.",
        },
        {
          t: "callout",
          variant: "exemplo",
          title: "temática policial-militar",
          text: "*“El agente perdió mucha **sangre** (a sangue → la sangre), pero el **viaje** (a viagem → el viaje) al hospital fue rapidísimo (superlativo). Fue el **mejor** desenlace posible.”*",
        },
        {
          t: "callout",
          variant: "macete",
          title: "heterogenéricos",
          text: "Decore em blocos: **‘LA’ do corpo/líquidos** — la sangre, la leche, la miel, la sal, la nariz. **‘EL’ do que em PT é feminino** — el color, el dolor, el viaje, el árbol, el puente, el origen.",
        },
        {
          t: "quadro",
          title: "Quadro-resumo · Sustantivos y adjetivos",
          items: [
            "Regra: -o masc., -a fem.; exceções: el día, la mano, el mapa, el problema.",
            "Plural: -s após vogal, -es após consoante, -z→-ces (lápices).",
            "Heterogenéricos: la leche, la sangre, la nariz, la sal, la miel.",
            "Heterogenéricos: el color, el dolor, el viaje, el árbol, el origen.",
            "Comparativo: más/menos ... que; tan ... como.",
            "Superlativo absoluto: -ísimo (rapidísimo).",
            "Irregulares: mejor, peor, mayor, menor.",
            "Adjetivo concorda em gênero e número.",
          ],
        },
        {
          t: "quiz",
          title: "Questões-treino · Sustantivos y adjetivos",
          questions: [
            {
              id: 1,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "Assinale a alternativa em que o artigo concorda corretamente com o substantivo em espanhol:",
              options: [
                { key: "a", label: "el leche / el sangre" },
                { key: "b", label: "la color / la dolor" },
                { key: "c", label: "la leche / la sangre" },
                { key: "d", label: "el leche / la color" },
                { key: "e", label: "la viaje / el sal" },
              ],
              correct: "c",
              comentario:
                "Letra C. Em espanhol, “leche” e “sangre” são femininas: la leche, la sangre (heterogenéricos — em português são masculinas). Já color, dolor e viaje são masculinos (el color, el dolor, el viaje).",
            },
            {
              id: 2,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado: "El plural de “lápiz” en español es “lápices”.",
              correct: "C",
              comentario:
                "CERTO. Palavras terminadas em -z fazem plural em -ces: lápiz → lápices; luz → luces; vez → veces.",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "El superlativo absoluto de “rápido” en español es:",
              options: [
                { key: "a", label: "más rápido" },
                { key: "b", label: "el más rápido" },
                { key: "c", label: "rapidísimo" },
                { key: "d", label: "muy más rápido" },
                { key: "e", label: "rapidérrimo" },
              ],
              correct: "c",
              comentario:
                "Letra C. O superlativo absoluto sintético usa -ísimo: rapidísimo. “Más rápido” é comparativo; “el más rápido”, superlativo relativo.",
            },
            {
              id: 4,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Assinale a palavra HETEROGENÉRICA (gênero diferente do português):",
              options: [
                { key: "a", label: "la casa" },
                { key: "b", label: "la sangre (o sangue, em português)" },
                { key: "c", label: "el gato" },
                { key: "d", label: "la mesa" },
                { key: "e", label: "el libro" },
              ],
              correct: "b",
              comentario:
                "Letra B. “La sangre” é feminino em espanhol, enquanto “o sangue” é masculino em português — heterogenérico. Outros: el color (a cor), la leche (o leite), el árbol (a árvore), la nariz (o nariz).",
            },
            {
              id: 5,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado: "Assinale o plural CORRETO em espanhol:",
              options: [
                { key: "a", label: "el lápiz → los lápizes" },
                { key: "b", label: "el lápiz → los lápices" },
                { key: "c", label: "la ley → las leys" },
                { key: "d", label: "el rey → los rey" },
                { key: "e", label: "la voz → las voses" },
              ],
              correct: "b",
              comentario:
                "Letra B. Palavras terminadas em -z fazem plural em -ces: lápiz→lápices, voz→voces, luz→luces. Terminadas em -y acrescentam -es: ley→leyes, rey→reyes.",
            },
            {
              id: 6,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "En español, el adjetivo “grande” se apocopa a “gran” cuando antecede a un sustantivo singular, sea masculino o femenino: “un gran agente”, “una gran operación”.",
              correct: "C",
              comentario:
                "CERTO. “Grande” sofre apócope para “gran” antes de qualquer substantivo singular (masc. ou fem.): un gran agente, una gran operación. No plural volta: grandes agentes.",
            },
          ],
        },
      ],
    },

    /* ============= PRONOMBRES ============= */
    {
      id: "pronombres",
      num: "05",
      kicker: "Tópico 5 · pronomes",
      icon: Waypoints,
      title: "==Pronombres==",
      lead: "Pessoais (sujeito e complemento), possessivos, demonstrativos, relativos e indefinidos. Atenção ao ‘usted’ e à colocação dos pronomes átonos.",
      blocks: [
        {
          t: "table",
          caption: "Pronomes pessoais",
          head: ["Sujeito", "Compl. direto", "Compl. indireto"],
          rows: [
            ["yo", "me", "me"],
            ["tú / usted", "te / lo, la", "te / le"],
            ["él, ella", "lo, la", "le (se)"],
            ["nosotros/as", "nos", "nos"],
            ["vosotros/as / ustedes", "os / los, las", "os / les"],
            ["ellos, ellas", "los, las", "les (se)"],
          ],
        },
        {
          t: "keyvalue",
          title: "Detalhes que caem",
          rows: [
            { k: "usted / ustedes", v: "tratamento formal, mas concorda em **3ª pessoa**: *¿Cómo está **usted**?* (‘o senhor’)." },
            { k: "Colocação", v: "átonos vêm **antes** do verbo conjugado (*te veo*) e podem juntar-se ao **infinitivo/gerúndio/imperativo** (*verte, viéndote, ¡dímelo!*)." },
            { k: "Duplo pronome", v: "indireto **le/les** vira **se** antes de lo/la/los/las: *Se lo di* (‘dei-lho’), nunca ‘le lo di’." },
            { k: "Relativos/indefinidos", v: "**que, quien, cuyo, el cual**; **alguien/nadie** (pessoa), **algo/nada** (coisa)." },
          ],
        },
        {
          t: "callout",
          variant: "prova",
          text: "Cai muito: (1) **usted** com verbo na 3ª pessoa; (2) **colocação** do pronome átono (antes do verbo, ênclise no imperativo/infinitivo); (3) **le → se** (se lo dije); (4) **alguien/nadie × algo/nada**.",
        },
        {
          t: "callout",
          variant: "pegadinha",
          text: "**usted/ustedes** parecem 2ª pessoa (você/vocês), mas o verbo vai na **3ª**: *usted **tiene***, *ustedes **tienen***. E o pronome de OI **le/les** vira **se** diante de lo/la: *Se lo entregué* (não ‘le lo entregué’).",
        },
        {
          t: "callout",
          variant: "exemplo",
          title: "temática policial-militar",
          text: "*“Señor, ¿puede **usted** identificarse? — Sí, aquí **lo** tiene. — Gracias, **se lo** agradezco.”* → usted (3ª pessoa), ‘lo’ (CD), ‘se lo’ (le+lo).",
        },
        {
          t: "callout",
          variant: "macete",
          text: "**USTED = ‘o senhor’, mas verbo na 3ª pessoa.** Ênclise obrigatória no **imperativo afirmativo, infinitivo e gerúndio** (dímelo, verte, diciéndolo). **le/les + lo/la = se lo / se la.**",
        },
        {
          t: "quadro",
          title: "Quadro-resumo · Pronombres",
          items: [
            "Sujeito: yo, tú, él/ella, nosotros, vosotros, ellos + usted(es).",
            "CD: me, te, lo/la, nos, os, los/las; CI: me, te, le, nos, os, les.",
            "usted/ustedes = tratamento formal com verbo na 3ª pessoa.",
            "Átonos antes do verbo conjugado (te veo).",
            "Ênclise no imperativo/infinitivo/gerúndio (dímelo, verte).",
            "le/les vira ‘se’ antes de lo/la/los/las (se lo di).",
            "Relativos: que, quien, cuyo, el cual.",
            "alguien/nadie (pessoa) × algo/nada (coisa).",
          ],
        },
        {
          t: "quiz",
          title: "Questões-treino · Pronombres",
          questions: [
            {
              id: 1,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "En español, el pronombre de tratamiento “usted” exige que el verbo se conjugue en la tercera persona, aunque se refiera a la persona con quien se habla.",
              correct: "C",
              comentario:
                "CERTO. “Usted” (tratamento formal, equivalente a ‘o senhor/a senhora’) concorda com o verbo na 3ª pessoa: usted tiene, usted está.",
            },
            {
              id: 2,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "Complete corretamente: “El informe, ya ___ entregué al comisario.” (le + lo)",
              options: [
                { key: "a", label: "le lo" },
                { key: "b", label: "lo le" },
                { key: "c", label: "se lo" },
                { key: "d", label: "se le" },
                { key: "e", label: "le se" },
              ],
              correct: "c",
              comentario:
                "Letra C. Quando os pronomes le/les antecedem lo/la/los/las, le/les transformam-se em “se”: se lo entregué. “Le lo” é sempre incorreto.",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "Assinale a colocação pronominal correta no imperativo afirmativo:",
              options: [
                { key: "a", label: "Me dilo." },
                { key: "b", label: "Lo dime." },
                { key: "c", label: "Dímelo." },
                { key: "d", label: "Me lo di (imperativo)." },
                { key: "e", label: "Di me lo." },
              ],
              correct: "c",
              comentario:
                "Letra C. No imperativo afirmativo, os pronomes vêm em ênclise, unidos ao verbo: dímelo (di + me + lo). Na forma negativa, seria próclise: “no me lo digas”.",
            },
            {
              id: 4,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Assinale a alternativa que emprega corretamente o pronome de tratamento formal em espanhol:",
              options: [
                { key: "a", label: "Usted es muy amable. (com verbo em 3ª pessoa)" },
                { key: "b", label: "Usted eres muy amable." },
                { key: "c", label: "Tú es muy amable." },
                { key: "d", label: "Vos sois muy amable (Espanha padrão)." },
                { key: "e", label: "Usted sois muy amable." },
              ],
              correct: "a",
              comentario:
                "Letra A. “Usted” (tratamento formal) concorda com o verbo na 3ª pessoa: usted es, usted tiene. Diferente do português, é o pronome de cortesia mais usado. “Tú” é informal (tú eres).",
            },
            {
              id: 5,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Complete: “A los detenidos ___ leyeron sus derechos.” (pronome de objeto indireto plural)",
              options: [
                { key: "a", label: "los" },
                { key: "b", label: "les" },
                { key: "c", label: "las" },
                { key: "d", label: "lo" },
                { key: "e", label: "le" },
              ],
              correct: "b",
              comentario:
                "Letra B. O objeto indireto plural em espanhol é “les” (a eles/a elas): les leyeron sus derechos. “Los/las” são objeto direto; “le” é indireto singular.",
            },
            {
              id: 6,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "En español, cuando el pronombre “le/les” precede a “lo/la/los/las”, se transforma en “se”, como en “Se lo dije” (a él/a ella).",
              correct: "C",
              comentario:
                "CERTO. Quando dois pronomes de 3ª pessoa se encontram (le/les + lo/la), o indireto vira “se”: “le lo dije” → “se lo dije”. É uma regra própria do espanhol, sem equivalente em português.",
            },
          ],
        },
      ],
    },

    /* ============= VERBOS ============= */
    {
      id: "verbos",
      num: "06",
      kicker: "Tópico 6 · verbos e perífrases",
      icon: Timer,
      title: "==Verbos== y perífrasis",
      lead: "Auxiliares (ser, estar, haber, tener), regulares e irregulares (com as alternâncias vocálicas) e as perífrases verbais que expressam futuro, obrigação, duração e mais.",
      blocks: [
        {
          t: "keyvalue",
          title: "Verbos auxiliares",
          rows: [
            { k: "ser × estar", v: "**ser** = essência/permanente (*es policía*, *es alto*); **estar** = estado/lugar (*está de servicio*, *está en la comisaría*)." },
            { k: "haber", v: "auxiliar dos tempos compostos (*he comido* = ‘tenho comido/comi’) e impessoal **hay** (‘há’)." },
            { k: "tener", v: "posse (*tengo una pistola*) e em perífrase de obrigação (*tener que*)." },
          ],
        },
        {
          t: "table",
          caption: "Irregularidades comuns (alternância vocálica)",
          head: ["Tipo", "Exemplo (infinitivo → 1ª pes.)", "Outros verbos"],
          rows: [
            ["e → ie", "querer → **quiero**; pensar → **pienso**", "empezar, cerrar, entender"],
            ["o → ue", "poder → **puedo**; dormir → **duermo**", "volver, contar, encontrar"],
            ["e → i", "pedir → **pido**; servir → **sirvo**", "repetir, seguir, medir"],
            ["u → ue", "jugar → **juego**", "(único verbo comum)"],
          ],
        },
        {
          t: "table",
          caption: "Perífrasis verbales — as que caem",
          head: ["Perífrase", "Sentido", "Exemplo"],
          rows: [
            ["ir a + infinitivo", "futuro próximo", "**Voy a** patrullar el centro."],
            ["estar + gerundio", "ação em curso", "**Está** interrogando al testigo."],
            ["tener que + infinitivo", "obrigação (pessoal)", "**Tienes que** presentarte."],
            ["hay que + infinitivo", "obrigação impessoal", "**Hay que** cumplir las normas."],
            ["acabar de + infinitivo", "acabou de", "**Acaba de** llegar la orden."],
            ["volver a + infinitivo", "voltar a / de novo", "**Volvió a** cometer el delito."],
            ["dejar de + infinitivo", "deixar de / parar", "**Dejó de** resistir."],
          ],
        },
        {
          t: "callout",
          variant: "prova",
          text: "Cai muito: (1) **ser × estar**; (2) **hay** (impessoal, invariável) × **tener**; (3) **alternância vocálica** (quiero, puedo, pido); (4) as **perífrases** (ir a, tener que, acabar de, volver a, dejar de) e seu significado.",
        },
        {
          t: "callout",
          variant: "pegadinha",
          text: "**hay** é impessoal e **invariável** (‘há/tem’): *hay un problema*, *hay muchos problemas* (nunca ‘hayn’). E o pretérito perfeito composto **he comido** = ‘comi/tenho comido’; não confunda o auxiliar **haber** (tempos) com **tener** (posse).",
        },
        {
          t: "callout",
          variant: "exemplo",
          title: "temática policial-militar",
          text: "*“**Hay** un sospechoso en la zona. **Tenemos que** actuar ya. **Voy a** pedir refuerzos; el agente **está** vigilando la salida y **acaba de** confirmar la ubicación.”* → hay, tener que, ir a, estar + gerundio, acabar de.",
        },
        {
          t: "callout",
          variant: "macete",
          title: "ser × estar",
          text: "**SER = característica que define (DOCTOR): Descrição, Origem, Caráter, Time/hora, Ofício, Relação.** **ESTAR = situação passageira (PLACE): Posição, Local, Ação em curso, Condição, Estado/emoção.**",
        },
        {
          t: "quadro",
          title: "Quadro-resumo · Verbos y perífrasis",
          items: [
            "ser = permanente/essência; estar = estado/lugar.",
            "haber: auxiliar (he comido) e impessoal ‘hay’ (invariável).",
            "tener: posse e obrigação (tener que).",
            "e→ie (quiero), o→ue (puedo), e→i (pido), u→ue (juego).",
            "ir a + inf. = futuro; estar + gerundio = ação em curso.",
            "tener que / hay que = obrigação (pessoal / impessoal).",
            "acabar de = acabou de; volver a = voltar a; dejar de = parar.",
            "‘hay’ nunca varia (hay uno / hay muchos).",
          ],
        },
        {
          t: "quiz",
          title: "Questões-treino · Verbos y perífrasis",
          questions: [
            {
              id: 1,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "Complete corretamente: “El agente ___ cansado, pero ___ muy responsable.”",
              options: [
                { key: "a", label: "es / está" },
                { key: "b", label: "está / es" },
                { key: "c", label: "es / es" },
                { key: "d", label: "está / está" },
                { key: "e", label: "hay / es" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Cansado” é estado passageiro → estar (está cansado); “responsable” é característica → ser (es responsable). Distinção clássica ser × estar.",
            },
            {
              id: 2,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "La perífrasis “tener que + infinitivo” expresa obligación, como en “Tienes que presentarte al servicio”.",
              correct: "C",
              comentario:
                "CERTO. “Tener que + infinitivo” indica obrigação/necessidade (ter que). Ex.: tienes que presentarte. A forma impessoal correspondente é “hay que”.",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "Assinale a conjugação irregular correta do verbo “poder” (o→ue) na 1ª pessoa do singular:",
              options: [
                { key: "a", label: "podo" },
                { key: "b", label: "puedo" },
                { key: "c", label: "poido" },
                { key: "d", label: "puedro" },
                { key: "e", label: "pudo" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Poder” tem alternância o→ue nas formas tônicas: puedo, puedes, puede, pueden. “Pudo” é pretérito (3ª pessoa).",
            },
            {
              id: 4,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Assinale a perífrase que expressa uma ação em andamento (equivalente ao gerúndio do português):",
              options: [
                { key: "a", label: "acabar de + infinitivo" },
                { key: "b", label: "estar + gerundio (está patrullando)" },
                { key: "c", label: "volver a + infinitivo" },
                { key: "d", label: "tener que + infinitivo" },
                { key: "e", label: "ir a + infinitivo" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Estar + gerundio” indica ação em curso: está patrullando (está patrulhando). “Acabar de” = acabou de; “volver a” = tornar a; “tener que” = ter que; “ir a” = futuro próximo.",
            },
            {
              id: 5,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "A perífrase “acabar de + infinitivo” em “El agente acaba de llegar” significa que o agente:",
              options: [
                { key: "a", label: "vai chegar em breve" },
                { key: "b", label: "chegou há pouquíssimo tempo" },
                { key: "c", label: "costuma chegar" },
                { key: "d", label: "terminou de chegar (parou de vir)" },
                { key: "e", label: "precisa chegar" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Acabar de + infinitivo” indica passado imediato: acaba de llegar = acabou de chegar (há instantes). Não confunda com o sentido literal de “terminar”.",
            },
            {
              id: 6,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "En español, la distinción entre “ser” y “estar” es semejante a la del portugués: “ser” para características permanentes y “estar” para estados y localización transitorios.",
              correct: "C",
              comentario:
                "CERTO. Assim como no português, “ser” expressa características essenciais/permanentes (es policía) e “estar” expressa estados transitórios e localização (está cansado, está en el cuartel).",
            },
          ],
        },
      ],
    },

    /* ============= ADVERBIOS Y CONJUNCIONES ============= */
    {
      id: "adverbios",
      num: "07",
      kicker: "Tópicos 7 e 8 · advérbios e conjunções",
      icon: Cable,
      title: "Adverbios y ==conjunciones==",
      lead: "Os advérbios e locuções adverbiais e as conjunções coordenativas e subordinativas — incluindo os famosos ‘pero’, ‘sino’, ‘aunque’ e ‘pues’.",
      blocks: [
        {
          t: "keyvalue",
          title: "Advérbios e locuções",
          rows: [
            { k: "Formação", v: "adjetivo (feminino) + **-mente**: rápida → **rápidamente**; fácil → **fácilmente**." },
            { k: "Lugar/tempo", v: "**aquí/acá, allí/allá, cerca, lejos; hoy, ayer, mañana, ahora, siempre, nunca, ya, todavía** (ainda)." },
            { k: "Muito cobrados", v: "**muy** (antes de adj./adv.: *muy rápido*) × **mucho** (com verbo/substantivo: *trabaja mucho*). **también** (também) × **tampoco** (tampouco)." },
          ],
        },
        {
          t: "table",
          caption: "Conjunções — as que caem",
          head: ["Tipo", "Conjunções", "Sentido"],
          rows: [
            ["Aditiva", "y (e), e (antes de i-), ni", "**y** vira **e** antes de i/hi: *padre **e** hijo*"],
            ["Alternativa", "o (ou), u (antes de o-)", "**o** vira **u** antes de o/ho: *siete **u** ocho*"],
            ["Adversativa", "pero, sino, mas, no obstante", "**pero** = mas; **sino** = mas sim"],
            ["Causal/consec.", "porque, pues, ya que, así que", "**pues** = pois; **ya que** = já que"],
            ["Concessiva", "aunque, aun cuando, a pesar de", "**aunque** = embora"],
            ["Condicional", "si, con tal de que, a menos que", "**si** = se (sem tilde!)"],
          ],
        },
        {
          t: "callout",
          variant: "prova",
          text: "Cai muito: (1) **muy × mucho**; (2) **también × tampoco**; (3) **y→e** e **o→u** por eufonia; (4) **pero × sino**; (5) **aunque** (concessivo). ‘todavía’ = ‘ainda’ (não ‘todavia’ — este é falso amigo!).",
        },
        {
          t: "callout",
          variant: "pegadinha",
          text: "**todavía = ainda** (falso amigo: NÃO é ‘todavia’). ‘Ainda não’ = **todavía no**. E **muy ≠ mucho**: *muy* acompanha adjetivo/advérbio (muy bueno); *mucho* acompanha verbo/substantivo (come mucho, mucho trabajo). ‘y’ vira ‘e’ antes de i-/hi- e ‘o’ vira ‘u’ antes de o-/ho-.",
        },
        {
          t: "callout",
          variant: "exemplo",
          title: "temática policial-militar",
          text: "*“El sospechoso **todavía** no ha confesado; el agente **también** insiste, pero **tampoco** logra respuesta. Actuó **rápidamente**, **aunque** el riesgo era alto.”* → todavía (ainda), también/tampoco, rápidamente, aunque.",
        },
        {
          t: "callout",
          variant: "macete",
          text: "**MUY + adjetivo (muy fuerte); MUCHO + verbo/substantivo (corre mucho).** **TAMBIÉN** confirma o positivo; **TAMPOCO** confirma o negativo (‘Yo tampoco’ = ‘eu também não’). **todavía = ainda.**",
        },
        {
          t: "quadro",
          title: "Quadro-resumo · Adverbios y conjunciones",
          items: [
            "Advérbio de modo: adjetivo fem. + -mente (rápidamente).",
            "muy + adj./adv.; mucho + verbo/substantivo.",
            "también (também) × tampoco (tampouco / também não).",
            "todavía = ainda (não ‘todavia’ — falso amigo).",
            "y → e antes de i-/hi-; o → u antes de o-/ho-.",
            "pero = mas; sino = mas sim (após negação).",
            "aunque = embora; ya que = já que; pues = pois.",
            "si = se (condicional, sem tilde).",
          ],
        },
        {
          t: "quiz",
          title: "Questões-treino · Adverbios y conjunciones",
          questions: [
            {
              id: 1,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado: "En español, la palabra “todavía” corresponde, en portugués, a “ainda”, y no a “todavia”.",
              correct: "C",
              comentario:
                "CERTO. “Todavía” é falso amigo: significa “ainda”. “Ainda não” = “todavía no”. O ‘todavia’ do português (mas/porém) seria “sin embargo/no obstante”.",
            },
            {
              id: 2,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "Complete: “El caso es ___ complejo; el agente trabaja ___.”",
              options: [
                { key: "a", label: "mucho / muy" },
                { key: "b", label: "muy / mucho" },
                { key: "c", label: "muy / muy" },
                { key: "d", label: "mucho / mucho" },
                { key: "e", label: "más / muy" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Muy” antecede adjetivo/advérbio (muy complejo); “mucho” acompanha o verbo (trabaja mucho). Trocar os dois é erro clássico.",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "Assinale a alternativa correta quanto à eufonia das conjunções:",
              options: [
                { key: "a", label: "padre y hijo / siete o ocho" },
                { key: "b", label: "padre e hijo / siete u ocho" },
                { key: "c", label: "padre e hijo / siete o ocho" },
                { key: "d", label: "padre y hijo / siete u ocho" },
                { key: "e", label: "padre u hijo / siete e ocho" },
              ],
              correct: "b",
              comentario:
                "Letra B. Antes de palavra iniciada por i-/hi-, “y” vira “e” (padre e hijo); antes de o-/ho-, “o” vira “u” (siete u ocho). Regra de eufonia.",
            },
            {
              id: 4,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Assinale a alternativa que apresenta a conjunção adversativa espanhola equivalente ao português “mas”:",
              options: [
                { key: "a", label: "pero" },
                { key: "b", label: "porque" },
                { key: "c", label: "aunque" },
                { key: "d", label: "mientras" },
                { key: "e", label: "así que" },
              ],
              correct: "a",
              comentario:
                "Letra A. “Pero” é a adversativa equivalente a “mas”: corrió, pero fue detenido. “Porque” = causa; “aunque” = concessão; “mientras” = tempo; “así que” = conclusão.",
            },
            {
              id: 5,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "En “La operación fue difícil, sino imposible”, ¿el uso de “sino” es correcto? Marque la mejor explicación:",
              options: [
                { key: "a", label: "Sí, “sino” siempre equivale a “se não”." },
                { key: "b", label: "No; aquí cabría “si no” separado (condición)." },
                { key: "c", label: "“Sino” contrapone dos elementos (no X, sino Y) y aquí está bien usado." },
                { key: "d", label: "“Sino” es un adverbio de tiempo." },
                { key: "e", label: "“Sino” solo existe en portugués." },
              ],
              correct: "c",
              comentario:
                "Letra C. “Sino” (junto) é conjunção adversativa que contrapõe (no fue difícil, sino imposible = não foi difícil, mas sim impossível). Diferente de “si no” (separado), que é condicional (se não).",
            },
            {
              id: 6,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "En español, el adverbio de negación “no” se coloca antes del verbo, como en “El sospechoso no confesó”.",
              correct: "C",
              comentario:
                "CERTO. Assim como no português, o advérbio “no” antecede o verbo: no confesó, no está aquí. Em respostas curtas, também funciona como negação: —¿Vino? —No.",
            },
          ],
        },
      ],
    },

    /* ============= ACENTUACIÓN ============= */
    {
      id: "acentuacion",
      num: "08",
      kicker: "Tópico 9 · acentuação",
      icon: Type,
      title: "Acentuación ==en español==",
      lead: "Em espanhol só existe um acento gráfico: a tilde (´). As regras são quase o inverso das paroxítonas do português — e há a tilde diacrítica dos monossílabos.",
      blocks: [
        {
          t: "callout",
          variant: "conceito",
          title: "contexto (comparação com o português)",
          text: "O espanhol usa **apenas a tilde aguda (´)** — não há circunflexo, grave nem til (~). A classificação por sílaba tônica é parecida com a do português, mas as **regras de acentuação são diferentes**, especialmente nas paroxítonas (llanas).",
        },
        {
          t: "table",
          caption: "Regras gerais de acentuação",
          head: ["Classe", "Acentua quando...", "Exemplos"],
          rows: [
            ["Agudas (oxítonas)", "termina em **-n, -s ou vogal**", "canción, café, además, comió"],
            ["Llanas/graves (paroxítonas)", "**NÃO** termina em -n, -s ou vogal", "árbol, cárcel, lápiz, González"],
            ["Esdrújulas (proparoxítonas)", "**SEMPRE** acentuam", "teléfono, música, rápido"],
            ["Sobresdrújulas", "**SEMPRE** acentuam", "dígamelo, cómpramelo"],
          ],
        },
        {
          t: "keyvalue",
          title: "Tilde diacrítica — monossílabos que mudam de sentido",
          rows: [
            { k: "tú × tu", v: "**tú** = você (pronome) × **tu** = teu (possessivo)." },
            { k: "él × el", v: "**él** = ele (pronome) × **el** = o (artigo)." },
            { k: "mí × mi", v: "**mí** = mim (pronome) × **mi** = meu (possessivo)." },
            { k: "sé × se", v: "**sé** = eu sei / sê × **se** = pronome se." },
            { k: "sí × si", v: "**sí** = sim × **si** = se (condicional)." },
            { k: "más × mas", v: "**más** = mais × **mas** = mas (= pero)." },
            { k: "té × te", v: "**té** = chá × **te** = pronome te." },
            { k: "Interrog./exclam.", v: "sempre com tilde: **qué, quién, cómo, cuándo, dónde, cuánto**." },
          ],
        },
        {
          t: "callout",
          variant: "prova",
          text: "Cai muito: (1) **llanas** acentuam o que NÃO termina em -n/-s/vogal (árbol, lápiz) — o inverso das oxítonas; (2) **esdrújulas sempre** (teléfono); (3) **tilde diacrítica** (tú/tu, él/el, sí/si, más/mas); (4) **interrogativos com tilde**.",
        },
        {
          t: "callout",
          variant: "pegadinha",
          text: "Atenção às **heterotônicas** — a sílaba tônica muda entre as línguas: **alcohol** (aguda em ES) × álcool (PT), **nivel** (aguda) × nível, **teléfono** (esdrújula) × telefone, **océano** × oceano. E lembre: só a tilde aguda existe (não há ‘à’, ‘â’, ‘ã’ em espanhol).",
        },
        {
          t: "callout",
          variant: "exemplo",
          title: "temática policial-militar",
          text: "*“¿**Qué** dijo el testigo? **Sí**, **él** confirmó **más** detalles, pero **mi** informe **todavía** no está listo.”* → interrogativo com tilde (qué), diacríticos (sí, él, más, mi), advérbio todavía.",
        },
        {
          t: "callout",
          variant: "macete",
          title: "llanas × português",
          text: "**Regra de ouro das llanas:** acentuam quando terminam em **consoante que NÃO seja -n ou -s** (árbol, lápiz, cárcel). É quase o **oposto** das oxítonas espanholas (que acentuam em -n, -s, vogal).",
        },
        {
          t: "quadro",
          title: "Quadro-resumo · Acentuación",
          items: [
            "Espanhol usa só a tilde aguda (´). Sem ^, ` ou ~.",
            "Agudas: acentuam em -n, -s ou vogal (café, canción).",
            "Llanas: acentuam quando NÃO terminam em -n, -s ou vogal (árbol, lápiz).",
            "Esdrújulas e sobresdrújulas: sempre acentuadas.",
            "Diacrítica: tú/tu, él/el, mí/mi, sé/se, sí/si, más/mas, té/te.",
            "Interrogativos e exclamativos sempre com tilde (qué, cómo).",
            "Heterotônicos: alcohol, nivel, teléfono, océano.",
            "¿ ¡ abrem interrogação e exclamação.",
          ],
        },
        {
          t: "quiz",
          title: "Questões-treino · Acentuación",
          questions: [
            {
              id: 1,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "Assinale a palavra corretamente classificada e acentuada como “llana” (grave):",
              options: [
                { key: "a", label: "canción (por terminar em vogal)" },
                { key: "b", label: "árbol (por não terminar em -n, -s ou vogal)" },
                { key: "c", label: "teléfono (por ser aguda)" },
                { key: "d", label: "café (por ser esdrújula)" },
                { key: "e", label: "rápido (por ser aguda)" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Árbol” é llana (paroxítona) e acentua por terminar em -l (consoante diferente de -n/-s). “Canción” e “café” são agudas; “teléfono” e “rápido” são esdrújulas.",
            },
            {
              id: 2,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "En “Sí, él trae más pruebas”, las palabras “sí”, “él” y “más” llevan tilde diacrítica para distinguirse de “si”, “el” y “mas”.",
              correct: "C",
              comentario:
                "CERTO. A tilde diacrítica distingue monossílabos: sí (sim) ≠ si (se); él (ele) ≠ el (o); más (mais) ≠ mas (mas/pero).",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "Assinale a alternativa em que a palavra é heterotônica em relação ao português:",
              options: [
                { key: "a", label: "gato" },
                { key: "b", label: "casa" },
                { key: "c", label: "alcohol" },
                { key: "d", label: "mesa" },
                { key: "e", label: "libro" },
              ],
              correct: "c",
              comentario:
                "Letra C. “Alcohol” é oxítona (aguda) em espanhol, enquanto “álcool” é proparoxítona em português — logo, heterotônica. As demais mantêm a mesma sílaba tônica.",
            },
            {
              id: 4,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Sobre a acentuação em espanhol, assinale a alternativa CORRETA:",
              options: [
                { key: "a", label: "As palavras agudas (oxítonas) sempre levam tilde." },
                { key: "b", label: "As agudas levam tilde quando terminam em vogal, -n ou -s (así, camión)." },
                { key: "c", label: "As llanas (paroxítonas) sempre levam tilde." },
                { key: "d", label: "As esdrújulas (proparoxítonas) nunca levam tilde." },
                { key: "e", label: "O espanhol não usa acento gráfico." },
              ],
              correct: "b",
              comentario:
                "Letra B. As agudas (oxítonas) recebem tilde quando terminam em vogal, -n ou -s: así, camión, después. As llanas acentuam-se no caso contrário; as esdrújulas (proparoxítonas) levam tilde SEMPRE (rápido, médico).",
            },
            {
              id: 5,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Assinale a alternativa em que a tilde diacrítica distingue corretamente as palavras:",
              options: [
                { key: "a", label: "“tu” (posse) × “tú” (pronome: tú eres el agente)" },
                { key: "b", label: "“el” (pronome) × “él” (artigo)" },
                { key: "c", label: "“si” (afirmação) × “sí” (condição)" },
                { key: "d", label: "“mas” (mais) × “más” (mas/porém)" },
                { key: "e", label: "“de” (verbo dar) × “dé” (preposição)" },
              ],
              correct: "a",
              comentario:
                "Letra A. “Tu” = adjetivo possessivo (tu coche); “tú” = pronome pessoal (tú eres). As demais estão invertidas: él (pronome) / el (artigo); sí (afirmação/condicional reforçado) / si (condição); más (mais) / mas (porém); dé (verbo dar) / de (preposição).",
            },
            {
              id: 6,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "En español, todas las palabras esdrújulas (proparoxítonas) llevan tilde, como en “rápido”, “médico” y “teléfono”.",
              correct: "C",
              comentario:
                "CERTO. Diferentemente do português (que também acentua todas as proparoxítonas), em espanhol as esdrújulas recebem tilde sem exceção: rápido, médico, teléfono, público.",
            },
          ],
        },
      ],
    },

    /* ============= DIVERGENCIAS PT × ES ============= */
    {
      id: "divergencias",
      num: "09",
      kicker: "Tópico 11 · o campo de minas",
      icon: Globe,
      title: "Divergências ==português × espanhol==",
      lead: "Heterográficos, heteroprosódicos, heterogenéricos e — os mais perigosos — os heterossemânticos, os falsos amigos que trocam o sentido inteiro da frase.",
      blocks: [
        {
          t: "keyvalue",
          title: "As quatro classes de divergência",
          rows: [
            { k: "Heterográficos", v: "mesmo sentido, **grafia diferente**: es *dirección* / pt direção; es *comisión* / pt comissão; es *análisis* / pt análise." },
            { k: "Heteroprosódicos", v: "muda o **som/sílaba tônica** (heterofônicos e heterotônicos): es *alcohol* / pt álcool; es *nivel* / pt nível; es *teléfono* / pt telefone." },
            { k: "Heterogenéricos", v: "muda o **gênero**: es *la leche* / pt o leite; es *el color* / pt a cor; es *el viaje* / pt a viagem." },
            { k: "Heterossemânticos", v: "os **falsos amigos**: forma parecida, **sentido diferente** — os mais cobrados." },
          ],
        },
        {
          t: "table",
          caption: "Falsos amigos (heterossemânticos) campeões de prova",
          head: ["Espanhol", "Parece (mas NÃO é)", "Significa de verdade"],
          rows: [
            ["exquisito", "esquisito", "requintado / delicioso"],
            ["largo", "largo", "comprido / longo (largo = ancho)"],
            ["oficina", "oficina", "escritório (oficina = taller)"],
            ["embarazada", "envergonhada", "grávida"],
            ["rato", "rato (animal)", "momento / instante (rato = ratón)"],
            ["vaso", "vaso", "copo (vaso de planta = maceta)"],
            ["cena", "cena", "jantar (cena = escena)"],
            ["cachorro", "cachorro adulto", "filhote (cão = perro)"],
            ["presumir/presunto", "presunto (frios)", "presumível/suposto (presunto = jamón)"],
            ["berro", "berro (grito)", "agrião"],
          ],
        },
        {
          t: "callout",
          variant: "prova",
          text: "Cai muito: (1) **classificar** o tipo de divergência (o enunciado pede ‘heterogenérico’, ‘heterossemântico’ etc.); (2) o **sentido real** do falso amigo dentro da frase; (3) heterotônicos (alcohol, nivel); (4) heterogenéricos (la leche, el color).",
        },
        {
          t: "callout",
          variant: "pegadinha",
          text: "**exquisito** = requintado/delicioso (NÃO ‘esquisito’, que é *raro/extraño*); **largo** = comprido (largo é *ancho*); **oficina** = escritório (oficina mecânica é *taller*); **embarazada** = grávida (NÃO ‘envergonhada’, que é *avergonzada*).",
        },
        {
          t: "callout",
          variant: "exemplo",
          title: "temática policial-militar",
          text: "*“El agente redactó el informe en la **oficina** (escritório), tomó un **vaso** (copo) de agua y esperó un **rato** (um instante) antes de la **cena** (jantar).”* Quatro falsos amigos numa frase de rotina.",
        },
        {
          t: "callout",
          variant: "macete",
          title: "os quatro ‘hetero-’",
          text: "**HeteroGRÁFICO = grafia; heteroPROSÓDICO = som/tônica; heteroGENÉRICO = gênero; heteroSSEMÂNTICO = sentido (falso amigo).** A raiz grega entrega a resposta: -gráfico (escrita), -gênero (gênero), -semântico (significado).",
        },
        {
          t: "quadro",
          title: "Quadro-resumo · Divergências PT × ES",
          items: [
            "Heterográficos: grafia diferente (dirección, comisión, análisis).",
            "Heteroprosódicos: som/tônica diferente (alcohol, nivel, teléfono).",
            "Heterogenéricos: gênero diferente (la leche, el color, el viaje).",
            "Heterossemânticos: falsos amigos (sentido diferente).",
            "exquisito = requintado; largo = comprido; oficina = escritório.",
            "embarazada = grávida; rato = momento; vaso = copo.",
            "cena = jantar; cachorro = filhote; presunto = suposto.",
            "Classificar o tipo de divergência é pedido recorrente.",
          ],
        },
        {
          t: "quiz",
          title: "Questões-treino · Divergências PT × ES",
          questions: [
            {
              id: 1,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "En español, la palabra “exquisito” significa, en portugués:",
              options: [
                { key: "a", label: "esquisito / estranho" },
                { key: "b", label: "requintado / delicioso" },
                { key: "c", label: "exigente" },
                { key: "d", label: "esquecido" },
                { key: "e", label: "exausto" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Exquisito” é falso amigo (heterossemântico): significa requintado/delicioso. “Esquisito” (estranho) seria “raro/extraño”.",
            },
            {
              id: 2,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "El par español “la leche” / portugués “o leite” es un ejemplo de heterogenérico, pues cambia el género entre las lenguas.",
              correct: "C",
              comentario:
                "CERTO. Heterogenéricos são palavras que mudam de gênero entre as línguas: “leche” é feminina em espanhol (la leche) e masculina em português (o leite).",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "La divergencia entre “alcohol” (español) y “álcool” (portugués) se clasifica como:",
              options: [
                { key: "a", label: "heterográfica" },
                { key: "b", label: "heterogenérica" },
                { key: "c", label: "heterosemántica" },
                { key: "d", label: "heteroprosódica (heterotónica)" },
                { key: "e", label: "sinonímica" },
              ],
              correct: "d",
              comentario:
                "Letra D. A diferença está na sílaba tônica (alcohol é aguda; álcool é proparoxítona), o que caracteriza um heterotônico — tipo de divergência heteroprosódica.",
            },
            {
              id: 4,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Assinale a alternativa em que o falso amigo (heterossemântico) está corretamente traduzido:",
              options: [
                { key: "a", label: "“exquisito” = esquisito" },
                { key: "b", label: "“exquisito” = requintado / delicioso" },
                { key: "c", label: "“largo” = largo (de largura)" },
                { key: "d", label: "“rojo” = roxo" },
                { key: "e", label: "“polvo” = polvo (animal)" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Exquisito” = requintado/delicioso (não ‘esquisito’). Outros falsos amigos: “largo” = comprido (não largo); “rojo” = vermelho (não roxo); “polvo” = pó/poeira (não polvo, que é ‘pulpo’).",
            },
            {
              id: 5,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Na frase “El testigo dio una declaración en la comisaría”, as palavras “testigo” e “comisaría” significam, respectivamente:",
              options: [
                { key: "a", label: "atestado e comissária de bordo" },
                { key: "b", label: "testemunha e delegacia" },
                { key: "c", label: "testamento e comissão" },
                { key: "d", label: "teste e comissário" },
                { key: "e", label: "testemunho e comércio" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Testigo” = testemunha; “comisaría” = delegacia/posto policial. Vocabulário policial recorrente — cuidado com a semelhança enganosa com ‘comissária’.",
            },
            {
              id: 6,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "En español, la palabra “embarazada” es un falso amigo, pues significa “grávida”, y no “envergonhada/embaraçada”.",
              correct: "C",
              comentario:
                "CERTO. “Embarazada” = grávida (heterossemântico clássico). Para “envergonhada”, usa-se “avergonzada”. Trocar os dois gera erro grave de compreensão.",
            },
          ],
        },
      ],
    },

    /* ==================== SIMULADO ==================== */
    {
      id: "questoes",
      num: "10",
      kicker: "Hora de treinar de verdade",
      icon: ListChecks,
      title: "Simulado ==de Espanhol==",
      lead: "Quinze itens misturando determinantes, gênero, verbos, acentuação e falsos amigos, com predominância do estilo Instituto AOCP (múltipla escolha A–E). Responda sem consultar.",
      blocks: [
        {
          t: "quiz",
          questions: [
            {
              id: 1,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "Complete: “La patrulla volvió ___ cuartel después ___ operativo.”",
              options: [
                { key: "a", label: "a el / de el" },
                { key: "b", label: "al / del" },
                { key: "c", label: "en el / del" },
                { key: "d", label: "al / de la" },
                { key: "e", label: "a la / del" },
              ],
              correct: "b",
              comentario:
                "Letra B. Contrações obrigatórias: a + el = al; de + el = del. “Volvió al cuartel después del operativo”.",
            },
            {
              id: 2,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado: "En español, “oficina” significa “escritório”, no “oficina mecânica”, que sería “taller”.",
              correct: "C",
              comentario:
                "CERTO. “Oficina” é falso amigo: significa escritório. A oficina mecânica em espanhol é “taller”.",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "Assinale a alternativa com o gênero correto em espanhol:",
              options: [
                { key: "a", label: "el sangre / la color" },
                { key: "b", label: "la sangre / el color" },
                { key: "c", label: "la sangre / la color" },
                { key: "d", label: "el sangre / el color" },
                { key: "e", label: "la sangre / la viaje" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Sangre” é feminina (la sangre) e “color” é masculino (el color) — heterogenéricos em relação ao português.",
            },
            {
              id: 4,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "Complete corretamente com ser/estar: “El operativo ___ en el centro y ___ muy peligroso.”",
              options: [
                { key: "a", label: "es / está" },
                { key: "b", label: "está / es" },
                { key: "c", label: "es / es" },
                { key: "d", label: "está / está" },
                { key: "e", label: "hay / es" },
              ],
              correct: "b",
              comentario:
                "Letra B. Localização → estar (está en el centro); característica/juízo → ser (es peligroso).",
            },
            {
              id: 5,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado: "En “Hay muchos sospechosos en la zona”, el verbo “haber” impersonal se mantiene invariable.",
              correct: "C",
              comentario:
                "CERTO. “Hay” é impessoal e invariável, tanto no singular quanto no plural: hay un sospechoso / hay muchos sospechosos.",
            },
            {
              id: 6,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "El pronombre “usted” exige el verbo en:",
              options: [
                { key: "a", label: "primeira pessoa" },
                { key: "b", label: "segunda pessoa" },
                { key: "c", label: "terceira pessoa" },
                { key: "d", label: "qualquer pessoa" },
                { key: "e", label: "primeira do plural" },
              ],
              correct: "c",
              comentario:
                "Letra C. “Usted” é tratamento formal e concorda na 3ª pessoa (usted tiene, usted está).",
            },
            {
              id: 7,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "Complete: “El agente ___ no ha llegado.” (ainda)",
              options: [
                { key: "a", label: "todavia" },
                { key: "b", label: "todavía" },
                { key: "c", label: "sin embargo" },
                { key: "d", label: "ya" },
                { key: "e", label: "tampoco" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Todavía” = ainda (com tilde). “Todavía no ha llegado” = ainda não chegou. ‘Todavia’ (sem tilde) não existe com esse sentido.",
            },
            {
              id: 8,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado: "La palabra “teléfono” es esdrújula y, por eso, siempre lleva tilde.",
              correct: "C",
              comentario:
                "CERTO. Esdrújulas (proparoxítonas) sempre são acentuadas: teléfono, música, rápido. Em português, “telefone” é paroxítona — logo, também é heterotônica.",
            },
            {
              id: 9,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "Assinale a conjugação irregular correta (e→ie) do verbo “querer”:",
              options: [
                { key: "a", label: "quero" },
                { key: "b", label: "quiero" },
                { key: "c", label: "quere" },
                { key: "d", label: "querio" },
                { key: "e", label: "quise (presente)" },
              ],
              correct: "b",
              comentario:
                "Letra B. “Querer” tem alternância e→ie: quiero, quieres, quiere, quieren. “Quise” é pretérito.",
            },
            {
              id: 10,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "A perífrase que expressa futuro próximo é:",
              options: [
                { key: "a", label: "tener que + infinitivo" },
                { key: "b", label: "acabar de + infinitivo" },
                { key: "c", label: "ir a + infinitivo" },
                { key: "d", label: "dejar de + infinitivo" },
                { key: "e", label: "volver a + infinitivo" },
              ],
              correct: "c",
              comentario:
                "Letra C. “Ir a + infinitivo” expressa futuro próximo: voy a patrullar. As demais indicam obrigação, ação recém-concluída, cessação e repetição.",
            },
            {
              id: 11,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado: "En “padre e hijo”, la conjunción “y” se convierte en “e” por la palabra siguiente empezar por “i”.",
              correct: "C",
              comentario:
                "CERTO. Por eufonia, “y” vira “e” antes de palavra iniciada por i-/hi-: padre e hijo, madre e hija. O mesmo com “o”→“u” antes de o-/ho-.",
            },
            {
              id: 12,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "A divergência entre “la leche” (es) e “o leite” (pt) é do tipo:",
              options: [
                { key: "a", label: "heterográfica" },
                { key: "b", label: "heterosemántica" },
                { key: "c", label: "heteroprosódica" },
                { key: "d", label: "heterogenérica" },
                { key: "e", label: "sinonímica" },
              ],
              correct: "d",
              comentario:
                "Letra D. A diferença é de gênero (feminino em espanhol, masculino em português) → heterogenérica.",
            },
            {
              id: 13,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Complete correctamente: “El agente ___ que presentar el informe ___ comisario antes ___ mediodía.”",
              options: [
                { key: "a", label: "tiene / al / del" },
                { key: "b", label: "tiene / a el / de el" },
                { key: "c", label: "tienes / al / del" },
                { key: "d", label: "tener / al / de" },
                { key: "e", label: "tiene / el / del" },
              ],
              correct: "a",
              comentario:
                "Letra A. “Tener que + infinitivo” = obrigação (tiene que presentar); contrações obrigatórias a+el=al (al comisario) e de+el=del... aqui “antes del mediodía”. As formas “a el/de el” não existem.",
            },
            {
              id: 14,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "En “El ladrón intentó huir, pero fue detenido”, las palabras “ladrón” y “detenido” significan:",
              options: [
                { key: "a", label: "ladrão e detido/preso" },
                { key: "b", label: "ladrilho e detento" },
                { key: "c", label: "ladeira e detetive" },
                { key: "d", label: "senhor e delatado" },
                { key: "e", label: "líder e derrotado" },
              ],
              correct: "a",
              comentario:
                "Letra A. “Ladrón” = ladrão; “detenido” = detido/preso. Vocabulário policial recorrente na AOCP. “Pero” = mas (adversativa).",
            },
            {
              id: 15,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "En la frase “Lo importante es actuar con rapidez”, el término “lo” es un artículo neutro que sustantiva el adjetivo “importante”.",
              correct: "C",
              comentario:
                "CERTO. O artigo neutro “lo” substantiva o adjetivo: “lo importante” (o importante). É uma estrutura típica do espanhol, sem correspondente formal idêntico em português.",
            },
          ],
        },
      ],
    },

    /* ==================== RESUMO ==================== */
    {
      id: "resumo",
      num: "11",
      kicker: "Revisão final · leia na véspera",
      icon: BookOpenCheck,
      title: "Resumo ==de véspera==",
      lead: "O espanhol da prova destilado em duas listas: o que costuma ser verdadeiro e as armadilhas que mais derrubam o brasileiro.",
      blocks: [
        {
          t: "list",
          variant: "check",
          title: "Regras que costumam ser CERTAS",
          items: [
            "Só há duas contrações: a+el=al e de+el=del.",
            "el agua/el hambre (a-tônico), mas continuam femininas.",
            "ser = permanente; estar = estado/lugar.",
            "hay é impessoal e invariável (hay uno / hay muchos).",
            "usted/ustedes → verbo na 3ª pessoa.",
            "Agudas acentuam em -n/-s/vogal; llanas, o contrário; esdrújulas sempre.",
            "todavía = ainda; muy + adjetivo, mucho + verbo.",
            "Heterogenéricos: la leche, la sangre; el color, el viaje.",
          ],
        },
        {
          t: "list",
          variant: "x",
          title: "Armadilhas que são quase sempre ERRADAS",
          items: [
            "exquisito = ‘esquisito’ (é requintado); largo = ‘largo’ (é comprido).",
            "oficina = ‘oficina mecânica’ (é escritório; taller = oficina).",
            "embarazada = ‘envergonhada’ (é grávida).",
            "rato = ‘rato animal’ (é momento); vaso = ‘vaso’ (é copo).",
            "‘le lo di’ (o certo é ‘se lo di’).",
            "Conjugar ‘usted’ na 2ª pessoa.",
            "Achar que ‘todavía’ = ‘todavia/porém’.",
            "Usar acento circunflexo/til em espanhol (só existe a tilde ´).",
          ],
        },
        {
          t: "callout",
          variant: "macete",
          title: "para fechar",
          text: "Se sobrar 5 minutos: revise os **falsos amigos** (exquisito, largo, oficina, embarazada, rato, vaso), os **heterogenéricos** (la leche, el color) e as **regras das llanas**. É o que mais aparece.",
        },
        {
          t: "callout",
          variant: "prova",
          title: "próximo passo",
          text: 'Encerramos as línguas estrangeiras. A próxima disciplina é **Raciocínio Lógico e Estatística**: proposições e conectivos, quantificadores, diagramas, contagem e probabilidade, além de toda a estatística descritiva e inferencial.',
        },
      ],
    },
  ],
};
