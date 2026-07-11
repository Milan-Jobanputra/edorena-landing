"use client";

import { useRef, useState } from "react";
import Reveal from "./Reveal";

export default function StoryVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  };

  return (
    <section id="story" className="px-6 py-28 md:py-36">
      <div className="max-w-content mx-auto">
        <Reveal>
          <div className="relative mx-auto max-w-4xl">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-surface">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                controls={playing}
                preload="metadata"
                poster="/video-poster.svg"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
              >
                <source src="/story.mp4" type="video/mp4" />
              </video>

              {!playing && (
                <button
                  type="button"
                  onClick={handlePlay}
                  aria-label="Play the story video"
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
                      <path d="M1 1.6v18.8a1 1 0 0 0 1.53.85l15-9.4a1 1 0 0 0 0-1.7l-15-9.4A1 1 0 0 0 1 1.6Z" fill="#F2F1ED" />
                    </svg>
                  </span>
                </button>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 text-center text-faint text-[13px] tracking-wide font-sans">
            Watch before trying Edorena.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
