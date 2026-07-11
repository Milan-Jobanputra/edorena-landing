import Reveal from "./Reveal";

const flow = [
  { label: "Monthly Focus", note: "Know what matters this month." },
  { label: "Life State", note: "Choose what deserves your attention right now." },
  { label: "Promises", note: "Small commitments you don't want to quietly break." },
  { label: "Decisions", note: "Capture important choices as they happen." },
  { label: "Insights", note: "See patterns that memory misses." },
];

export default function WhyEdorena() {
  return (
    <section className="px-6 py-28 md:py-36 border-t border-border">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="max-w-2xl mx-auto text-center font-display italic font-light text-[1.6rem] md:text-[2.1rem] leading-snug balance">
            Most productivity tools help you organize tasks.
            <br />
            <span className="text-accent not-italic">
              Edorena helps you stay connected to what you decided matters.
            </span>
          </p>
        </Reveal>

        <div className="mt-20 relative flex flex-col md:flex-row items-stretch gap-0">
          {flow.map((step, i) => (
            <div key={step.label} className="flex-1 flex flex-col md:flex-row items-stretch">
              <Reveal delay={i * 0.08} className="flex-1">
                <div className="rounded-xl border border-border bg-surface px-5 py-5 text-center h-full">
                  <p className="text-ink text-[15px] font-medium">{step.label}</p>
                  <p className="mt-1.5 text-muted text-[13px] leading-snug font-sans">
                    {step.note}
                  </p>
                </div>
              </Reveal>

              {i < flow.length - 1 && (
                <>
                  <div className="md:hidden h-6 flex items-center justify-center">
                    <div className="drift-line-v" style={{ animationDelay: `${i * 0.4}s` }} />
                  </div>
                  <div className="hidden md:flex items-center px-2 w-10 shrink-0">
                    <div className="drift-line" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
