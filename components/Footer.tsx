export default function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-border">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-faint text-[13px] font-sans">
          &copy; {new Date().getFullYear()} Edorena
        </p>
        <div className="flex items-center gap-6 text-[13px] text-muted font-sans">
          <a href="/privacy" className="hover:text-ink transition-colors duration-300">
            
          </a>
          <a
            href="mailto:edorena.ai@gmail.com"
            className="hover:text-ink transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/milan-jobanputra"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink transition-colors duration-300"
          >
            LinkedIn
          </a>
           <a
            href="/privacy"
            className="hover:text-ink transition-colors duration-300"
          >
            Privacy
          </a>
           <a
            href="/terms"
            className="hover:text-ink transition-colors duration-300"
          >
            Terms
          </a>
        </div>
       
      </div>
    </footer>
  );
}
