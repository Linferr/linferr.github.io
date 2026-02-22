export default function Footer({ email, linkedin }) {
  return (
    <footer className="relative border-t border-line/90 bg-paper/70 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 text-sm text-ink/70 md:flex-row md:items-center">
        <p>
          {new Date().getFullYear()} Linfeng Gao. Built with React, Tailwind CSS, and Vite.
        </p>

        <details className="group">
          <summary className="cursor-pointer list-none rounded-full border border-accent/35 px-4 py-1.5 text-sm font-semibold text-accent transition hover:bg-accent hover:text-paper">
            Contact Me
          </summary>
          <div className="mt-2 rounded-xl border border-line/80 bg-white/90 p-3 text-sm text-ink/80">
            <a href={`mailto:${email}`} className="block link-strong">
              {email}
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="mt-1 block link-strong">
              LinkedIn
            </a>
          </div>
        </details>
      </div>
    </footer>
  );
}
