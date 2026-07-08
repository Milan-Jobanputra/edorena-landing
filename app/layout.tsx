import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OrbitOS — Stay connected to what matters",
  description:
    "OrbitOS helps you notice when your daily decisions quietly move away from what you intended.",
  openGraph: {
    title: "OrbitOS — Stay connected to what matters",
    description:
      "OrbitOS helps you notice when your daily decisions quietly move away from what you intended.",
    type: "website",
  },
  metadataBase: new URL("https://orbitos.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-bg text-ink">{children}</body>
    </html>
  );
}
