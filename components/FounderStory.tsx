import Reveal from "./Reveal";

export default function FounderStory() {
  return (
    <section className="px-6 py-28 md:py-36 border-t border-border">
      <div className="max-w-content mx-auto grid md:grid-cols-[auto,1fr] gap-10 md:gap-16 items-center">
        <Reveal>
          <div className="h-24 w-24 md:h-32 md:w-32 rounded-full bg-surface border border-border flex items-center justify-center shrink-0">
            <span className="font-display italic text-muted text-[13px]">
              MJ
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-display italic font-light text-[1.4rem] md:text-[1.9rem] leading-relaxed max-w-2xl balance">
            I built Edorena after one too many nights wondering where my day
            actually went.
            <br />
            <br />
            <span className="text-muted not-italic text-[1.1rem] md:text-[1.25rem]">
              Not because I didn&rsquo;t know what to do.
              <br />
              Because somehow&hellip; the important things kept getting
              pushed aside.
            </span>
            <br />
            <br />
            Edorena is my attempt to solve that.
          </p>
          <p className="mt-6 text-faint text-[14px] font-sans">
            — Milan Jobanputra, founder
          </p>
        </Reveal>
      </div>
    </section>
  );
}
