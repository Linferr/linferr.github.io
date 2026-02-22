function NavLink({ href, label, isActive }) {
  return (
    <a
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`rounded-full px-3 py-1.5 text-sm transition ${
        isActive
          ? "bg-ink text-paper"
          : "text-ink/75 hover:bg-ink/10 hover:text-ink"
      }`}
    >
      {label}
    </a>
  );
}

export default function SiteHeader({ currentPage, cvUrl }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-40 border-b border-line/85 bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="/" className="inline-flex items-baseline gap-2">
            <span className="font-display text-2xl text-ink">Linfeng</span>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              CV Site
            </span>
          </a>

          <nav className="flex items-center gap-1 md:gap-2" aria-label="Site navigation">
            <NavLink href="/" label="Home" isActive={currentPage === "home"} />
            <NavLink
              href="/courses.html"
              label="Courses"
              isActive={currentPage === "courses"}
            />
            <a
              href={cvUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-1 rounded-full border border-accent/35 px-3 py-1.5 text-sm font-semibold text-accent transition hover:bg-accent hover:text-paper"
            >
              CV PDF
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
