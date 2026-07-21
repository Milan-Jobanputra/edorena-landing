import Link from "next/link";
import Nav from "./Nav";
import Footer from "./Footer";

interface Props {
  title: string;
  updated: string;
  children: React.ReactNode;
}

export default function LegalLayout({
  title,
  updated,
  children,
}: Props) {
  return (
    <>
      <Nav />

      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-serif mb-3">
          {title}
        </h1>

        <p className="text-gray-500 mb-12">
          Effective Date: {updated}
        </p>

        <article className="prose prose-neutral max-w-none">
          {children}
        </article>

        <div className="mt-16 border-t pt-8">
          <Link href="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}