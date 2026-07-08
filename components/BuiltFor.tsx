import Reveal from "./Reveal";

const people = [
  { role: "Founders", context: "building something." },
  { role: "Students", context: "preparing for exams." },
  { role: "Creators", context: "trying to finish their work." },
  { role: "Professionals", context: "balancing priorities." },
];

export default function BuiltFor() {
  return (
    <section className="px-6 py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="text-center font-display italic font-light text-[1.4rem] md:text-[1.7rem] mb-14 balance">
            Built for people who already know what matters&hellip;
          </p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {people.map((p, i) => (
            <Reveal key={p.role} delay={i * 0.08}>
              <div className="rounded-xl border border-border py-8 px-4 text-center h-full">
                <span className="font-display italic font-light text-[1.15rem] text-ink block">
                  {p.role}
                </span>
                <span className="mt-1.5 block text-muted text-[13px] font-sans">
                  {p.context}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
