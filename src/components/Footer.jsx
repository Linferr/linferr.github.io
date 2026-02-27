export default function Footer({ email, linkedin }) {
  return (
    <footer className="relative border-t border-line/90 bg-paper/70 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 text-sm text-ink/70 md:flex-row md:items-center">
        <p>
          {new Date().getFullYear()} Linfeng Gao. Built with React, Tailwind CSS, and Vite.
        </p>

        <details className="group relative">
          <summary className="cursor-pointer list-none rounded-full border border-accent/35 px-4 py-1.5 text-sm font-semibold text-accent transition hover:bg-accent hover:text-paper">
            Contact Me
          </summary>
          {/* Adjust Contact Me popup width here via min-w/max-w classes. */}
          <div className="absolute bottom-full right-0 z-30 mb-2 min-w-[7rem] max-w-[12rem] rounded-lg border border-line/80 bg-white/95 p-1.5 text-xs text-ink/80 shadow-lg backdrop-blur">
            <a
              href={`mailto:${email}`}
              className="block rounded-md px-3 py-1.5 font-semibold text-accent transition hover:bg-accent/10"
            >
              Email
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-0.5 block rounded-md px-3 py-1.5 font-semibold text-accent transition hover:bg-accent/10"
            >
              LinkedIn
            </a>
          </div>
        </details>
      </div>
    </footer>
  );
}
