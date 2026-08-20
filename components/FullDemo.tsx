// components/FullDemo.tsx
"use client";

import { useRef, useState } from "react";
import Reveal from "./Reveal";

export default function FullDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  };

  return (
    <section id="demo" className="px-6 py-20 md:py-28 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="text-faint text-[13px] tracking-[0.14em] uppercase mb-3">
            Want to see more?
          </p>
          <p className="text-muted text-[15px] mb-8">
            A full walkthrough of Edorena — every screen, step by step.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-surface">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              controls={playing}
              preload="none"
              poster="/full-demo-poster.svg"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
            >
              <source src="/Edorena-Demo-Tutorial.mp4" type="video/mp4" />
            </video>

            {!playing && (
              <button
                type="button"
                onClick={handlePlay}
                aria-label="Play the full walkthrough"
                className="absolute inset-0 flex items-center justify-center group"
              >
                <span className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-bg/70 border border-border backdrop-blur-sm group-hover:border-accent group-hover:bg-accent-soft transition-colors duration-300">
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    className="ml-1"
                  >
                    <path
                      d="M1 1.6v18.8a1 1 0 0 0 1.53.85l15-9.4a1 1 0 0 0 0-1.7l-15-9.4A1 1 0 0 0 1 1.6Z"
                      fill="#F2F1ED"
                    />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
   
          