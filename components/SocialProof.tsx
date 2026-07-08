import Reveal from "./Reveal";

const fragments = [
  "I knew what I had to do... I just didn't do it.",
  "By Thursday I had no idea where my week went.",
  "I spent more time organizing than actually doing.",
];

export default function SocialProof() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="text-center text-faint text-[12px] tracking-[0.14em] uppercase mb-8">
            Things people say before they find OrbitOS
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {fragments.map((q, i) => (
            <Reveal key={q} delay={i * 0.1}>
              <p className="text-center font-display italic font-light text-muted text-[15px] leading-relaxed balance">
                &ldquo;{q}&rdquo;
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
