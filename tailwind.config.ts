import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0B0B",
        surface: "#161616",
        surface2: "#1C1C1E",
        border: "rgba(255,255,255,0.08)",
        ink: "#F2F1ED",
        muted: "#9A9A9E",
        faint: "#5C5C60",
        accent: "#5E7CE2",
        "accent-dim": "#3F5390",
        "accent-soft": "rgba(94,124,226,0.12)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        prose: "38rem",
        content: "72rem",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
