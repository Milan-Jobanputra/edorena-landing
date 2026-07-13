import Reveal from "./Reveal";

const APP_URL = "https://app.edorena.com/login";

export default function FinalCTA() {
  return (
    <section className="px-6 py-28 md:py-40 border-t border-border relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full opacity-[0.10] blur-[130px] -z-10"
        style={{ background: "#5E7CE2" }}
      />

      <div className="max-w-content mx-auto text-center">
        <Reveal>
          <p className="text-faint text-[13px] tracking-[0.14em] uppercase mb-6">
            Still early
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display italic font-light text-[2rem] md:text-[2.8rem] leading-tight max-w-3xl mx-auto balance">
            Edorena is still in alpha.
            <br />
            <span className="text-accent not-italic">
              I&rsquo;m looking for people willing to give honest feedback.
            </span>
          </h2>
          <p className="mt-5 text-muted text-[16px] font-sans">
            Not compliments. Real feedback.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={APP_URL}
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-[15px] font-medium text-white hover:bg-[#4C69C9] transition-colors duration-300"
            >
              Try Edorena
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-[15px] font-medium text-ink hover:border-accent hover:bg-accent-soft transition-colors duration-300"
            >
              Watch Story Again
            </a>
          </div>
          <p className="mt-5 text-faint text-[13px] font-sans">
            Free alpha &middot; takes about 2 minutes to get started.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
