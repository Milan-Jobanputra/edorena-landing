"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <nav className="max-w-content mx-auto flex items-center justify-between px-6 md:px-10 h-16">
        <a
          href="#top"
          className="flex items-center gap-2 text-ink tracking-tight"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          <span className="font-medium text-[15px]">Edorena</span>
        </a>

        <div className="flex items-center gap-6 md:gap-8 text-[14px]">
          <a
            href="#story"
            className="text-muted hover:text-ink transition-colors duration-300"
          >
            Story
          </a>
          <a
            href="https://orbit.inventive9.com/login"
            className="rounded-full bg-ink text-bg px-4 py-2 font-medium hover:bg-accent hover:text-white transition-colors duration-300"
          >
            Try Edorena
          </a>
        </div>
      </nav>
    </header>
  );
}
