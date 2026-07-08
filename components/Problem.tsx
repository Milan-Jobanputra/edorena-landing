import Reveal from "./Reveal";

const cards = [
  {
    lines: ["You knew what mattered.", "Yet somehow it never happened."],
    art: (
      <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none">
        <circle cx="32" cy="32" r="21" stroke="currentColor" strokeWidth="1.4" opacity="0.35" />
        <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="1.4" opacity="0.55" />
        <circle cx="32" cy="32" r="2.4" fill="currentColor" />
        <path d="M32 6v7M58 32h-7M32 58v-7M6 32h7" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      </svg>
    ),
  },
  {
    lines: ["You weren't lazy.", "The day just filled itself."],
    art: (
      <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none">
        <circle cx="26" cy="28" r="15" stroke="currentColor" strokeWidth="1.4" opacity="0.4" />
        <circle cx="38" cy="38" r="15" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
      </svg>
    ),
  },
  {
    lines: ["By evening...", "you're wondering where your time actually went."],
    art: (
      <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none">
        <path
          d="M6 40c8-16 44-16 52 0"
          stroke="currentColor"
          strokeWidth="1.4"
          opacity="0.5"
        />
        <circle cx="32" cy="40" r="1.8" fill="currentColor" />
        <path d="M32 40V16" stroke="currentColor" strokeWidth="1.4" opacity="0.3" strokeDasharray="2 3" />
      </svg>
    ),
  },
];

export default function Problem() {
  return (
    <section className="px-6 py-28 md:py-36 border-t border-border">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="text-center text-faint text-[13px] tracking-[0.14em] uppercase mb-14">
            A familiar pattern
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div className="h-full rounded-2xl border border-border bg-surface p-8 flex flex-col justify-between min-h-[220px]">
                <div className="text-accent/80">{card.art}</div>
                <p className="font-display italic font-light text-[1.35rem] leading-snug text-ink mt-10 balance">
                  {card.lines[0]}
                  <br />
                  <span className="text-muted not-italic text-[1.05rem]">
                    {card.lines[1]}
                  </span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
