import Reveal from "./Reveal";

const cards = [
  { title: "Monthly Focus", note: "Know what matters this month." },
  { title: "Promises", note: "Small commitments you don't want to quietly break." },
  { title: "Insights", note: "See patterns memory never could." },
];

function DashboardMock() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4 md:p-6">
      <div className="rounded-xl bg-bg border border-border p-6 md:p-10">
        <div className="flex items-center justify-between mb-6">
          <span className="text-faint text-[12px] tracking-widest uppercase font-sans">
            Now
          </span>
          <span className="flex items-center gap-1.5 text-[12px] text-muted font-sans">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Deep Work
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-3">
            <div className="h-3 w-2/3 rounded-full bg-surface2" />
            <div className="h-3 w-1/2 rounded-full bg-surface2" />
            <div className="mt-5 rounded-lg border border-border bg-surface p-4 space-y-2">
              <div className="h-2.5 w-1/3 rounded-full bg-accent-soft" />
              <div className="h-2 w-full rounded-full bg-surface2" />
              <div className="h-2 w-4/5 rounded-full bg-surface2" />
            </div>
            <div className="flex gap-2 mt-4">
              <div className="h-7 w-24 rounded-md bg-ink/90" />
              <div className="h-7 w-20 rounded-md border border-border" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-lg border border-border bg-surface p-3">
              <div className="h-2 w-1/2 rounded-full bg-surface2 mb-2" />
              <div className="h-1.5 w-full rounded-full bg-surface2 mb-1.5" />
              <div className="h-1.5 w-3/4 rounded-full bg-surface2" />
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <div className="h-2 w-2/3 rounded-full bg-surface2 mb-2" />
              <div className="flex items-end gap-1 h-10">
                {[40, 70, 30, 90, 55].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-sm bg-accent/50"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Product() {
  return (
    <section className="px-6 py-28 md:py-36 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <Reveal y={26}>
          <DashboardMock />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="text-center md:text-left">
                <p className="text-ink font-medium text-[16px]">{c.title}</p>
                <p className="mt-2 text-muted text-[14px] leading-relaxed font-sans">
                  {c.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
