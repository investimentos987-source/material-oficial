import {
  BookOpenCheck,
  Timer,
  ListChecks,
  Lightbulb,
  Type,
  BrainCircuit,
  FileText,
  GraduationCap,
} from "lucide-react";
import type { Part } from "./types";

export const PART_EST: Part = {
  id: 5,
  tabShort: "Estatística",
  tabLabel: "Estatística",
  docTitle: "PMPE Oficial · Estatística",
  footerNote: "Estatística",
  nextNote: "➡️ Próxima disciplina: Direito Constitucional.",
  bancas: ["Instituto AOCP", "Cebraspe", "FGV", "FCC", "IBFC"],
  tocLabel: "Nesta disciplina",
  hero: {
    eyebrow: "Oficial PMPE · Estatística · Banca Instituto AOCP",
    title: "==Estatística== descritiva e inferencial",
    subtitle:
      "conceitos e amostragem, gráficos e tabelas, probabilidade, medidas de centralidade, posição e dispersão, distribuições, testes de hipóteses, correlação e regressão — todo o programa do edital",
    description:
      "Da **descrição** dos dados (média, mediana, moda, quartis, variância, desvio padrão, coeficiente de variação, boxplot) à **inferência** (Normal, Binomial, Poisson, intervalos de confiança, testes de hipóteses, p-valor, correlação e regressão). Material com fórmulas comentadas, exemplos policial-militares, ==pegadinhas mapeadas==, quadros-resumo, macetes e questões-treino no estilo **Instituto AOCP**.",
    stats: [
      { icon: BookOpenCheck, big: "3", small: "grandes eixos" },
      { icon: Timer, big: "~1h20", small: "de leitura focada" },
      { icon: ListChecks, big: "24", small: "questões comentadas" },
      { icon: Lightbulb, big: "AOCP", small: "foco na banca e no cargo" },
    ],
    terms: [
      "população × amostra",
      "amostragem probabilística",
      "variáveis qualitativas × quantitativas",
      "tabelas e gráficos",
      "média · mediana · moda",
      "quartis · percentis · boxplot",
      "variância · desvio padrão · CV",
      "assimetria · curtose",
      "Normal · Binomial · Poisson",
      "intervalo de confiança",
      "H0 × H1 · p-valor",
      "erro tipo I × erro tipo II",
      "correlação de Pearson · R²",
      "regressão linear simples",
    ],
    palette: "lime",
    termsLabel: "Termos mais cobrados pela AOCP",
    startId: "panorama-est",
  },
  sections: [
    {
      id: "panorama-est",
      num: "01",
      kicker: "Como usar este material",
      icon: GraduationCap,
      title: "Panorama da ==Estatística==",
      lead: "Da coleta dos dados à inferência: descrever, resumir e concluir com segurança — é isso que a banca cobra em Estatística.",
      blocks: [
        {
          t: "p",
          text: "Três blocos encadeados: **conceitos, amostragem, gráficos e probabilidade** (a base), **medidas de centralidade, posição e dispersão** (média, mediana, moda, quartis, variância, desvio padrão e coeficiente de variação) e **distribuições, testes de hipóteses e regressão** (Normal, Binomial, Poisson, p-valor, correlação e R²). Ao final, simulado comentado e resumo de véspera.",
        },
        {
          t: "callout",
          variant: "macete",
          title: "a rota mais curta",
          text: "Se o tempo estiver curto, priorize: **média × mediana × moda e o efeito dos outliers**, **variância × desvio padrão × coeficiente de variação**, **leitura do p-valor (p < α → rejeita H0)** e **correlação não implica causalidade**. São os campeões de incidência.",
        },
      ],
    },

    {
      id: "est-conceitos",
      num: "02",
      kicker: "Estatística · fundamentos",
      icon: FileText,
      title: "Conceitos, amostragem, gráficos & ==probabilidade==",
      lead: "População e amostra, censo e amostragem, os tipos de gráfico e as três definições de probabilidade que a banca gosta de comparar.",
      blocks: [
        {
          t: "keyvalue",
          title: "Conceitos básicos",
          rows: [
            { k: "População × amostra", v: "**população** = todos os elementos; **amostra** = subconjunto representativo." },
            { k: "Censo × amostragem", v: "**censo** = investiga toda a população; **amostragem** = investiga uma amostra." },
            { k: "Amostra aleatória", v: "cada elemento tem chance conhecida de ser escolhido (simples, sistemática, estratificada, por conglomerados)." },
            { k: "Parâmetro × estatística", v: "**parâmetro** descreve a população (μ, σ); **estatística** descreve a amostra (x̄, s)." },
          ],
        },
        {
          t: "table",
          caption: "Gráficos — quando usar cada um",
          head: ["Gráfico", "Uso"],
          rows: [
            ["Barras / Colunas", "comparar categorias (qualitativas)"],
            ["Linhas", "evolução ao longo do tempo (séries temporais)"],
            ["Setores (pizza)", "participação de cada parte no total (%)"],
            ["Pictograma", "dados com figuras ilustrativas"],
            ["Histograma", "distribuição de dados **contínuos** (barras coladas)"],
          ],
        },
        {
          t: "keyvalue",
          title: "As três definições de probabilidade",
          rows: [
            { k: "Clássica (Laplace)", v: "casos favoráveis / casos possíveis, em espaço **equiprovável**." },
            { k: "Geométrica", v: "razão entre **medidas** (comprimento, área, volume) — quando os resultados são contínuos." },
            { k: "Axiomática (Kolmogorov)", v: "define a probabilidade por **axiomas**: 0 ≤ P ≤ 1, P(Ω)=1 e aditividade para eventos disjuntos." },
          ],
        },
        {
          t: "callout",
          variant: "prova",
          text: "Cai muito: (1) **população × amostra** e **censo × amostragem**; (2) **parâmetro × estatística**; (3) escolher o **gráfico** adequado; (4) diferenciar as **três definições de probabilidade** (Laplace, geométrica, Kolmogorov).",
        },
        {
          t: "callout",
          variant: "pegadinha",
          text: "**Censo** investiga a **população inteira** (não uma amostra). E **histograma ≠ gráfico de barras**: o histograma é para variáveis **contínuas**, com barras **coladas**; o gráfico de barras é para categorias, com barras **separadas**.",
        },
        {
          t: "callout",
          variant: "exemplo",
          title: "temática policial-militar",
          text: "Para estudar a satisfação de **todos** os 20.000 policiais → **censo** (parâmetro μ). Para estimar a partir de 500 deles → **amostragem** (estatística x̄). A evolução mensal de ocorrências pede **gráfico de linhas**; a divisão por tipo de crime, **setores**.",
        },
        {
          t: "callout",
          variant: "macete",
          text: "**Censo = Completo (toda população); amostragem = amostra.** Parâmetro (P de População) × estatística (amostra). Histograma = ‘Contínuo, barras Coladas’; barras = categorias separadas.",
        },
        {
          t: "quadro",
          title: "Quadro-resumo · Conceitos e gráficos",
          items: [
            "População = todos; amostra = subconjunto representativo.",
            "Censo = toda a população; amostragem = amostra.",
            "Parâmetro (μ, σ) descreve população; estatística (x̄, s) a amostra.",
            "Barras/colunas: categorias; linhas: tempo; setores: % do total.",
            "Histograma: variável contínua, barras coladas.",
            "Laplace: favoráveis/possíveis (equiprovável).",
            "Geométrica: razão de medidas (área/comprimento).",
            "Axiomática (Kolmogorov): 0≤P≤1, P(Ω)=1, aditividade.",
          ],
        },
        {
          t: "quiz",
          title: "Questões-treino · Conceitos e probabilidade",
          questions: [
            {
              id: 1,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "Quando se investiga a totalidade dos elementos de uma população, realiza-se um censo, e não uma amostragem.",
              correct: "C",
              comentario:
                "CERTO. Censo abrange toda a população; amostragem investiga apenas uma parte (amostra) para inferir sobre o todo.",
            },
            {
              id: 2,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "O gráfico mais adequado para mostrar a participação percentual de cada tipo de ocorrência no total é o de:",
              options: [
                { key: "a", label: "linhas" },
                { key: "b", label: "setores (pizza)" },
                { key: "c", label: "dispersão" },
                { key: "d", label: "histograma" },
                { key: "e", label: "caixa (boxplot)" },
              ],
              correct: "b",
              comentario:
                "Letra B. O gráfico de setores (pizza) mostra a fração de cada categoria em relação ao total (percentuais). Linhas mostram evolução temporal; histograma, distribuição contínua.",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "A definição de probabilidade baseada em axiomas (0 ≤ P ≤ 1, P(Ω) = 1 e aditividade) é atribuída a:",
              options: [
                { key: "a", label: "Laplace" },
                { key: "b", label: "Pascal" },
                { key: "c", label: "Kolmogorov" },
                { key: "d", label: "Bayes" },
                { key: "e", label: "Gauss" },
              ],
              correct: "c",
              comentario:
                "Letra C. A definição axiomática da probabilidade deve-se a Kolmogorov. Laplace é a definição clássica (favoráveis/possíveis).",
            },
            {
              id: 4,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "O conjunto de TODOS os elementos de interesse de um estudo (por exemplo, todos os policiais do estado) é denominado:",
              options: [
                { key: "a", label: "amostra" },
                { key: "b", label: "população" },
                { key: "c", label: "variável" },
                { key: "d", label: "parâmetro" },
                { key: "e", label: "estimador" },
              ],
              correct: "b",
              comentario:
                "Letra B. A população é o conjunto de TODOS os elementos de interesse. A amostra é um subconjunto dela. Medida da população = parâmetro; medida da amostra = estatística/estimador.",
            },
            {
              id: 5,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "A variável “número de ocorrências atendidas por dia” classifica-se como:",
              options: [
                { key: "a", label: "qualitativa nominal" },
                { key: "b", label: "qualitativa ordinal" },
                { key: "c", label: "quantitativa discreta" },
                { key: "d", label: "quantitativa contínua" },
                { key: "e", label: "constante" },
              ],
              correct: "c",
              comentario:
                "Letra C. É contagem (números inteiros, sem valores intermediários) → quantitativa discreta. Se fosse medição contínua (peso, tempo), seria quantitativa contínua.",
            },
            {
              id: 6,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "Um parâmetro é uma medida que descreve uma característica da população, ao passo que uma estatística descreve uma característica da amostra.",
              correct: "C",
              comentario:
                "CERTO. Parâmetro refere-se à população (ex.: média populacional μ); estatística refere-se à amostra (ex.: média amostral x̄), sendo usada para estimar o parâmetro.",
            },
          ],
        },
      ],
    },

    /* ============= MEDIDAS ============= */
    {
      id: "medidas",
      num: "03",
      kicker: "Estatística · descrição de dados",
      icon: Type,
      title: "Medidas de ==centralidade, posição e dispersão==",
      lead: "Média, mediana e moda resumem o centro; quartis localizam; variância e desvio padrão medem o espalhamento. Histograma e boxplot dão a visão gráfica.",
      blocks: [
        {
          t: "table",
          caption: "Medidas de centralidade e posição",
          head: ["Medida", "O que é", "Observação"],
          rows: [
            ["Média (x̄)", "soma dos valores / quantidade", "sensível a **valores extremos** (outliers)"],
            ["Mediana", "valor central dos dados **ordenados**", "resistente a outliers; = Q2 = 50º percentil"],
            ["Moda", "valor **mais frequente**", "pode não existir ou ser múltipla"],
            ["Quartis Q1, Q2, Q3", "dividem os dados em 4 partes de 25%", "Q2 = mediana"],
            ["Percentis / decis", "dividem em 100 / 10 partes", "P50 = D5 = mediana"],
          ],
        },
        {
          t: "table",
          caption: "Medidas de dispersão",
          head: ["Medida", "Fórmula/ideia", "Observação"],
          rows: [
            ["Amplitude", "máximo − mínimo", "medida simples, sensível a extremos"],
            ["Variância (σ²/s²)", "média dos quadrados dos desvios", "unidade ao **quadrado**"],
            ["Desvio padrão (σ/s)", "raiz quadrada da variância", "mesma unidade dos dados"],
            ["Coef. de variação (CV)", "CV = (desvio padrão / média) × 100%", "dispersão **relativa** (%), compara conjuntos"],
          ],
        },
        {
          t: "keyvalue",
          title: "Histograma e boxplot",
          rows: [
            { k: "Histograma", v: "barras **coladas** representando a frequência de classes de uma variável **contínua**; mostra o formato da distribuição." },
            { k: "Boxplot (caixa e bigodes)", v: "resume **mínimo, Q1, Q2 (mediana), Q3 e máximo**; a ‘caixa’ vai de Q1 a Q3 (amplitude interquartil, IQR)." },
            { k: "Outliers", v: "valores fora de **Q1 − 1,5·IQR** ou **Q3 + 1,5·IQR** aparecem como pontos isolados no boxplot." },
          ],
        },
        {
          t: "callout",
          variant: "prova",
          text: "Cai muito: (1) **calcular média, mediana e moda**; (2) diferença **variância × desvio padrão** (o desvio é a raiz); (3) **coeficiente de variação** para comparar dispersões; (4) leitura de **boxplot** e identificação de **outliers**; (5) histograma × barras.",
        },
        {
          t: "callout",
          variant: "pegadinha",
          text: "A **média** é puxada por **outliers**; a **mediana** resiste — por isso, em dados assimétricos, a mediana representa melhor o ‘típico’. E o **desvio padrão** está na mesma unidade dos dados; a **variância** está ao **quadrado** (não confunda!).",
        },
        {
          t: "callout",
          variant: "exemplo",
          title: "temática policial-militar",
          text: "Ocorrências/dia: 2, 3, 3, 4, 18. **Média** = 30/5 = 6 (inflada pelo 18); **mediana** = 3 (valor central); **moda** = 3. Aqui a **mediana** descreve melhor o dia típico — o 18 é um provável **outlier**.",
        },
        {
          t: "callout",
          variant: "macete",
          text: "**Média MExe com todos (e sofre com outlier); MEDiana é o MEIO; MOda é a MODa (a que aparece mais).** Desvio padrão = **raiz** da variância. CV em % compara dispersões de conjuntos diferentes.",
        },
        {
          t: "quadro",
          title: "Quadro-resumo · Medidas",
          items: [
            "Média = soma/quantidade; sensível a outliers.",
            "Mediana = valor central (ordenado) = Q2; resiste a outliers.",
            "Moda = valor mais frequente.",
            "Quartis dividem em 25%; percentis em 1%; P50 = mediana.",
            "Variância = média dos quadrados dos desvios (unidade²).",
            "Desvio padrão = raiz da variância (mesma unidade).",
            "CV = (DP/média)×100% → dispersão relativa.",
            "Boxplot: mín, Q1, Q2, Q3, máx; outliers além de 1,5·IQR.",
          ],
        },
        {
          t: "quiz",
          title: "Questões-treino · Medidas",
          questions: [
            {
              id: 1,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "Considere os valores 4, 6, 6, 8, 16. A média e a mediana são, respectivamente:",
              options: [
                { key: "a", label: "8 e 6" },
                { key: "b", label: "6 e 6" },
                { key: "c", label: "8 e 8" },
                { key: "d", label: "6 e 8" },
                { key: "e", label: "10 e 6" },
              ],
              correct: "a",
              comentario:
                "Letra A. Média = (4+6+6+8+16)/5 = 40/5 = 8; mediana = valor central dos dados ordenados = 6. O 16 (outlier) puxa a média para cima, mas não afeta a mediana.",
            },
            {
              id: 2,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "O desvio padrão é a raiz quadrada da variância e é expresso na mesma unidade de medida dos dados originais.",
              correct: "C",
              comentario:
                "CERTO. Como a variância está em unidade ao quadrado, extrai-se a raiz para obter o desvio padrão, retornando à unidade original dos dados.",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "Em um boxplot, a ‘caixa’ vai de Q1 a Q3 e representa:",
              options: [
                { key: "a", label: "a amplitude total" },
                { key: "b", label: "a média ± desvio padrão" },
                { key: "c", label: "a amplitude interquartil (50% centrais dos dados)" },
                { key: "d", label: "apenas os outliers" },
                { key: "e", label: "a moda" },
              ],
              correct: "c",
              comentario:
                "Letra C. A caixa (de Q1 a Q3) contém os 50% centrais dos dados — a amplitude interquartil (IQR). Os ‘bigodes’ vão até os limites, e outliers aparecem além de 1,5·IQR.",
            },
            {
              id: 4,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Considere os tempos de resposta (em minutos): 4, 6, 6, 8, 16. A MÉDIA e a MEDIANA são, respectivamente:",
              options: [
                { key: "a", label: "8 e 6" },
                { key: "b", label: "6 e 8" },
                { key: "c", label: "8 e 8" },
                { key: "d", label: "6 e 6" },
                { key: "e", label: "40 e 6" },
              ],
              correct: "a",
              comentario:
                "Letra A. Média = (4+6+6+8+16)/5 = 40/5 = 8. Mediana = valor central do rol ordenado (4,6,6,8,16) = 6. O valor 16 (outlier) puxa a média para cima, mas não afeta a mediana — que é mais robusta.",
            },
            {
              id: 5,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "O coeficiente de variação (CV) é usado principalmente para:",
              options: [
                { key: "a", label: "medir a tendência central" },
                { key: "b", label: "comparar a dispersão relativa entre conjuntos de dados (CV = DP/média)" },
                { key: "c", label: "encontrar a moda" },
                { key: "d", label: "calcular a probabilidade" },
                { key: "e", label: "ordenar os dados" },
              ],
              correct: "b",
              comentario:
                "Letra B. O CV = desvio padrão / média (geralmente em %). Por ser adimensional, permite comparar a dispersão relativa de conjuntos com unidades ou médias diferentes. Menor CV = mais homogêneo.",
            },
            {
              id: 6,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "Em uma distribuição, a mediana é uma medida de tendência central menos sensível a valores extremos (outliers) do que a média.",
              correct: "C",
              comentario:
                "CERTO. A mediana depende apenas da posição central, sendo robusta a outliers. A média, por somar todos os valores, é fortemente influenciada por valores extremos.",
            },
          ],
        },
      ],
    },

    /* ============= DISTRIBUIÇÕES, TESTES, REGRESSÃO ============= */
    {
      id: "inferencia",
      num: "04",
      kicker: "Estatística · inferência",
      icon: BrainCircuit,
      title: "Distribuições, testes de hipóteses e ==regressão==",
      lead: "As principais distribuições (Normal, Binomial, Poisson), a lógica dos testes de hipóteses (H0/H1, erros, p-valor) e a regressão linear com correlação.",
      blocks: [
        {
          t: "table",
          caption: "Distribuições de probabilidade",
          head: ["Distribuição", "Tipo", "Usada para..."],
          rows: [
            ["Bernoulli", "discreta", "**um** ensaio com 2 resultados (sucesso/fracasso)"],
            ["Binomial", "discreta", "**n** ensaios de Bernoulli independentes"],
            ["Poisson", "discreta", "eventos **raros** num intervalo de tempo/espaço"],
            ["Normal (Gauss)", "contínua", "curva simétrica; **média = mediana = moda**"],
            ["t de Student", "contínua", "amostras pequenas / σ desconhecido"],
            ["Qui-quadrado (χ²)", "contínua", "aderência e independência"],
            ["F de Snedecor", "contínua", "comparação de variâncias / ANOVA"],
          ],
        },
        {
          t: "keyvalue",
          title: "Testes de hipóteses",
          rows: [
            { k: "H0 (nula) × H1 (alternativa)", v: "H0 é a hipótese ‘de igualdade/sem efeito’; H1 é o que se quer provar." },
            { k: "Erro tipo I (α)", v: "**rejeitar H0 sendo ela verdadeira**. α = nível de significância (ex.: 5%)." },
            { k: "Erro tipo II (β)", v: "**não rejeitar H0 sendo ela falsa**." },
            { k: "p-valor", v: "se **p < α**, rejeita-se H0; se **p ≥ α**, não se rejeita H0." },
            { k: "Teste t / F / ANOVA", v: "t compara médias; F compara variâncias; **ANOVA** compara médias de **3+** grupos." },
          ],
        },
        {
          t: "keyvalue",
          title: "Regressão linear e correlação",
          rows: [
            { k: "Correlação de Pearson (r)", v: "mede força e direção da relação linear; varia de **−1 a +1** (0 = sem correlação linear)." },
            { k: "Reta de regressão", v: "**ŷ = a + b·x**, sendo b o coeficiente angular (inclinação) e a o linear (intercepto)." },
            { k: "Coef. de determinação (R²)", v: "R² = r²; indica a **proporção da variação** de y explicada por x (0 a 1)." },
          ],
        },
        {
          t: "callout",
          variant: "prova",
          text: "Cai muito: (1) **quando usar** cada distribuição (Poisson = eventos raros; Normal = simétrica); (2) **erro I × erro II**; (3) a regra do **p-valor** (p < α → rejeita H0); (4) **ANOVA** para 3+ grupos; (5) interpretação de **r** e **R²**.",
        },
        {
          t: "callout",
          variant: "pegadinha",
          text: "**Erro tipo I = rejeitar H0 verdadeira** (‘alarme falso’); **erro tipo II = aceitar H0 falsa** (‘deixar passar’). E **correlação não implica causalidade**: um r alto entre duas variáveis não prova que uma cause a outra.",
        },
        {
          t: "callout",
          variant: "exemplo",
          title: "temática policial-militar",
          text: "Testar se um novo protocolo **reduz** o tempo de resposta: H0 = ‘não muda’; H1 = ‘reduz’. Se o **p-valor** der 0,02 e α = 0,05, então p < α → **rejeita-se H0** (há evidência de redução). Poisson modelaria bem o **nº de ocorrências por hora**.",
        },
        {
          t: "callout",
          variant: "macete",
          text: "**p pequeno, H0 pra escanteio (p < α → rejeita H0).** Erro I = ‘falso positivo’ (α); erro II = ‘falso negativo’ (β). Poisson = ‘raro no tempo’; Normal = ‘sino simétrico’. R² = quanto x ‘explica’ de y.",
        },
        {
          t: "quadro",
          title: "Quadro-resumo · Distribuições, testes e regressão",
          items: [
            "Bernoulli (1 ensaio) → Binomial (n ensaios).",
            "Poisson: eventos raros por intervalo de tempo/espaço.",
            "Normal: simétrica, média = mediana = moda.",
            "H0 = igualdade/sem efeito; H1 = o que se quer provar.",
            "Erro I (α): rejeitar H0 verdadeira; Erro II (β): aceitar H0 falsa.",
            "p < α → rejeita H0; p ≥ α → não rejeita.",
            "ANOVA compara médias de 3+ grupos (usa a distribuição F).",
            "Pearson r ∈ [−1, 1]; R² = r² = variação de y explicada por x.",
          ],
        },
        {
          t: "quiz",
          title: "Questões-treino · Distribuições, testes e regressão",
          questions: [
            {
              id: 1,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "O erro do tipo I ocorre quando se rejeita a hipótese nula (H0) apesar de ela ser verdadeira.",
              correct: "C",
              comentario:
                "CERTO. Erro tipo I = rejeitar H0 verdadeira (falso positivo), cuja probabilidade é o nível de significância α. O erro tipo II é não rejeitar H0 quando ela é falsa.",
            },
            {
              id: 2,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "Em um teste com nível de significância α = 0,05, obteve-se p-valor = 0,03. A decisão correta é:",
              options: [
                { key: "a", label: "não rejeitar H0, pois p > α" },
                { key: "b", label: "rejeitar H0, pois p < α" },
                { key: "c", label: "aceitar H0 e H1 simultaneamente" },
                { key: "d", label: "refazer o teste, pois p = α" },
                { key: "e", label: "nada se pode concluir" },
              ],
              correct: "b",
              comentario:
                "Letra B. Como p-valor (0,03) < α (0,05), rejeita-se H0. A regra é simples: p menor que α → rejeita a hipótese nula.",
            },
            {
              id: 3,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "O coeficiente de correlação de Pearson (r) pode assumir valores no intervalo:",
              options: [
                { key: "a", label: "de 0 a 1" },
                { key: "b", label: "de −1 a 1" },
                { key: "c", label: "de 0 a 100" },
                { key: "d", label: "de −∞ a +∞" },
                { key: "e", label: "de 1 a 10" },
              ],
              correct: "b",
              comentario:
                "Letra B. O r de Pearson varia de −1 (correlação linear negativa perfeita) a +1 (positiva perfeita), sendo 0 a ausência de correlação linear.",
            },
            {
              id: 4,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "Em um teste de hipóteses, rejeita-se a hipótese nula (H0) quando:",
              options: [
                { key: "a", label: "o p-valor é maior que o nível de significância (α)" },
                { key: "b", label: "o p-valor é menor ou igual ao nível de significância (α)" },
                { key: "c", label: "a amostra é pequena" },
                { key: "d", label: "a média é igual à mediana" },
                { key: "e", label: "o desvio padrão é zero" },
              ],
              correct: "b",
              comentario:
                "Letra B. Rejeita-se H0 quando o p-valor ≤ α (por exemplo, α = 0,05). Regra de ouro: “p pequeno, rejeita H0”. Se p > α, não se rejeita H0.",
            },
            {
              id: 5,
              banca: "Estilo Instituto AOCP · Múltipla escolha",
              tipo: "multi",
              enunciado:
                "A distribuição adequada para modelar o número de ocorrências de um evento raro em um intervalo fixo de tempo é a:",
              options: [
                { key: "a", label: "Normal" },
                { key: "b", label: "Binomial" },
                { key: "c", label: "Poisson" },
                { key: "d", label: "Uniforme" },
                { key: "e", label: "Exponencial inversa" },
              ],
              correct: "c",
              comentario:
                "Letra C. A distribuição de Poisson modela o número de ocorrências de eventos em um intervalo fixo (ex.: chamadas por hora, acidentes por dia). A Binomial conta sucessos em n tentativas; a Normal é contínua e simétrica.",
            },
            {
              id: 6,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "O erro do Tipo I consiste em rejeitar a hipótese nula quando ela é, na verdade, verdadeira.",
              correct: "C",
              comentario:
                "CERTO. Erro Tipo I = rejeitar H0 verdadeira (probabilidade α, ‘falso positivo’). Erro Tipo II = não rejeitar H0 falsa (probabilidade β, ‘falso negativo’).",
            },
          ],
        },
      ],
    },

    /* ==================== SIMULADO ==================== */
    {
      id: "questoes",
      num: "05",
      kicker: "Hora de treinar de verdade",
      icon: ListChecks,
      title: "Simulado ==de Estatística==",
      lead: "Seis itens de estatística descritiva e inferencial no estilo Instituto AOCP e Cebraspe. Responda sem consultar.",
      blocks: [
        {
          t: "quiz",
          questions: [
            {
              id: 5,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado: "A mediana é mais resistente à influência de valores extremos (outliers) do que a média.",
              correct: "C",
              comentario:
                "CERTO. A mediana depende apenas da posição central; outliers a afetam pouco. A média, por somar todos os valores, é puxada por extremos.",
            },
            {
              id: 6,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "A distribuição adequada para modelar o número de ocorrências raras por hora é a:",
              options: [
                { key: "a", label: "Normal" },
                { key: "b", label: "Binomial" },
                { key: "c", label: "Poisson" },
                { key: "d", label: "t de Student" },
                { key: "e", label: "Uniforme contínua" },
              ],
              correct: "c",
              comentario:
                "Letra C. A distribuição de Poisson modela a contagem de eventos raros em um intervalo de tempo ou espaço.",
            },
            {
              id: 8,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado: "Na distribuição Normal, média, mediana e moda coincidem no centro da curva.",
              correct: "C",
              comentario:
                "CERTO. A Normal é simétrica em torno da média; por isso média = mediana = moda, todas no pico central da curva de Gauss.",
            },
            {
              id: 10,
              banca: "Estilo FGV · Múltipla escolha",
              tipo: "multi",
              enunciado: "O coeficiente de variação (CV) é útil principalmente para:",
              options: [
                { key: "a", label: "medir a tendência central." },
                { key: "b", label: "comparar a dispersão relativa entre conjuntos diferentes." },
                { key: "c", label: "identificar a moda." },
                { key: "d", label: "calcular a probabilidade." },
                { key: "e", label: "ordenar os dados." },
              ],
              correct: "b",
              comentario:
                "Letra B. O CV (desvio padrão/média × 100%) expressa a dispersão em termos relativos (%), permitindo comparar a variabilidade de conjuntos com médias ou unidades diferentes.",
            },
            {
              id: 12,
              banca: "Estilo FCC · Múltipla escolha",
              tipo: "multi",
              enunciado: "A técnica estatística usada para comparar as médias de três ou mais grupos é a:",
              options: [
                { key: "a", label: "correlação de Pearson" },
                { key: "b", label: "regressão simples" },
                { key: "c", label: "ANOVA" },
                { key: "d", label: "distribuição binomial" },
                { key: "e", label: "amostragem estratificada" },
              ],
              correct: "c",
              comentario:
                "Letra C. A ANOVA (análise de variância) compara as médias de 3 ou mais grupos, utilizando a distribuição F.",
            },
            {
              id: 15,
              banca: "Estilo Cebraspe · Certo ou Errado",
              tipo: "ce",
              enunciado:
                "Em uma distribuição Normal, a média, a mediana e a moda coincidem e a curva é simétrica em torno da média.",
              correct: "C",
              comentario:
                "CERTO. Na distribuição Normal (curva em sino), média = mediana = moda, e a curva é perfeitamente simétrica em relação à média. É a base de muitos testes estatísticos.",
            },

          ],
        },
      ],
    },

    /* ==================== RESUMO ==================== */
    {
      id: "resumo-est",
      num: "06",
      kicker: "Revisão final · leia na véspera",
      icon: BookOpenCheck,
      title: "Resumo ==de véspera== — Estatística",
      lead: "A Estatística destilada em duas listas: o que costuma ser verdadeiro e as pegadinhas clássicas da banca.",
      blocks: [
        {
          t: "list",
          variant: "check",
          title: "Regras que costumam ser CERTAS",
          items: [
            "A mediana resiste a outliers; a média, não.",
            "Desvio padrão é a raiz quadrada da variância e tem a mesma unidade dos dados.",
            "O coeficiente de variação (CV) permite comparar dispersões de grandezas diferentes.",
            "Na distribuição Normal, média = mediana = moda e a curva é simétrica.",
            "Poisson modela eventos raros por intervalo; Binomial, número de sucessos em n tentativas.",
            "p-valor < α → rejeita-se H0; p-valor ≥ α → não se rejeita H0.",
            "O coeficiente de correlação de Pearson varia de −1 a +1; o R² varia de 0 a 1.",
            "Amostragem probabilística permite inferência; amostragem por conveniência, não.",
          ],
        },
        {
          t: "list",
          variant: "x",
          title: "Armadilhas que são quase sempre ERRADAS",
          items: [
            "Confundir variância (unidade²) com desvio padrão (unidade).",
            "Dizer que correlação alta implica causalidade.",
            "Afirmar que a média é sempre a melhor medida de posição (com outliers, não é).",
            "Trocar erro tipo I (rejeitar H0 verdadeira) por erro tipo II (não rejeitar H0 falsa).",
            "Interpretar o p-valor como “probabilidade de H0 ser verdadeira”.",
            "Supor que toda distribuição simétrica é Normal.",
          ],
        },
        {
          t: "callout",
          variant: "macete",
          title: "para fechar",
          text: "Se sobrar 5 minutos: revise **média × mediana × moda**, **variância × desvio padrão × CV**, **erro tipo I × erro tipo II** e a regra do **p-valor**.",
        },
      ],
    },
  ],
};
