import Quiz from "./Quiz";
import {
  CalloutGrid,
  Callout,
  CardGrid,
  DataTable,
  KeyValue,
  ListBlock,
  P,
  Pills,
  Quadro,
  Reveal,
  Rich,
  SectionShell,
  Steps,
  TwoCol,
} from "./ui";
import type { Block, Section } from "../data/types";

function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case "p":
      return (
        <P>
          <Rich text={block.text} />
        </P>
      );
    case "callout":
      return (
        <Callout variant={block.variant} title={block.title}>
          {block.text && (
            <p>
              <Rich text={block.text} />
            </p>
          )}
          {block.items && (
            <ul className="space-y-1.5 mt-1">
              {block.items.map((it, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 rounded-full bg-current opacity-50 shrink-0" />
                  <span>
                    <Rich text={it} />
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Callout>
      );
    case "cards":
      return <CardGrid cols={block.cols} tone={block.tone} cards={block.cards} />;
    case "table":
      return <DataTable caption={block.caption} head={block.head} rows={block.rows} />;
    case "twocol":
      return <TwoCol title={block.title} left={block.left} right={block.right} />;
    case "steps":
      return <Steps title={block.title} items={block.items} />;
    case "list":
      return <ListBlock variant={block.variant} title={block.title} items={block.items} />;
    case "quadro":
      return <Quadro title={block.title} items={block.items} />;
    case "keyvalue":
      return <KeyValue title={block.title} rows={block.rows} />;
    case "pills":
      return <Pills label={block.label} items={block.items} />;
    case "callout-grid":
      return <CalloutGrid items={block.items} />;
    case "quiz":
      return (
        <div className="my-8">
          {block.title && (
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent mb-5">
              {block.title}
            </p>
          )}
          <Quiz questions={block.questions} />
        </div>
      );
  }
}

export default function SectionView({ section }: { section: Section }) {
  return (
    <SectionShell
      id={section.id}
      num={section.num}
      kicker={section.kicker}
      icon={section.icon}
      title={<Rich text={section.title} />}
      lead={section.lead ? <Rich text={section.lead} /> : undefined}
    >
      <div className="space-y-1">
        {section.blocks.map((b, i) => (
          <Reveal key={i} delay={i % 3 === 0 ? 0 : 0.05}>
            <BlockView block={b} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
