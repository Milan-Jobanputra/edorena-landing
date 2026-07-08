"use client";

import { motion } from "framer-motion";

const APP_URL = "https://orbit.inventive9.com/login";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden px-6"
    >
      {/* Subtle ambient background — no stock imagery, just quiet light */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-[560px] w-[560px] rounded-full opacity-[0.16] blur-[120px]"
          style={{ background: "#5E7CE2" }}
        />
        <div
          className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full opacity-[0.08] blur-[140px]"
          style={{ background: "#8AA0F2" }}
        />
      </div>

      <div className="max-w-content w-full mx-auto pt-24 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-muted text-[13px] tracking-[0.14em] uppercase mb-8"
        >
          11:07&nbsp;PM
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display italic font-light text-[2.4rem] leading-[1.15] sm:text-[3.2rem] sm:leading-[1.12] md:text-[4rem] md:leading-[1.08] max-w-4xl balance"
        >
          Have you ever finished the day
          <br className="hidden sm:block" /> wondering&nbsp;
          <span className="text-accent not-italic">
            &ldquo;what did I actually do today?&rdquo;
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-muted text-[17px] md:text-[18px] leading-relaxed font-sans"
        >
          OrbitOS helps you stay connected to what matters when daily
          decisions quietly pull your attention elsewhere.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <a
            href="#story"
            className="group inline-flex items-center gap-2.5 text-ink text-[15px] font-medium"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border group-hover:border-accent group-hover:bg-accent-soft transition-colors duration-300">
              <svg width="11" height="12" viewBox="0 0 11 12" fill="none">
                <path
                  d="M1 1.2v9.6a.6.6 0 0 0 .92.5l7.7-4.8a.6.6 0 0 0 0-1L1.92.7A.6.6 0 0 0 1 1.2Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Watch the 2-minute story
          </a>

          <a
            href={APP_URL}
            id="try"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-white hover:bg-[#4C69C9] transition-colors duration-300"
          >
            Try OrbitOS Alpha
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 inset-x-6 max-w-content mx-auto">
        <div className="drift-line" />
      </div>
    </section>
  );
}
