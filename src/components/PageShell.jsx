import SiteHeader from "./SiteHeader";
import Footer from "./Footer";

export default function PageShell({
  currentPage,
  cvOptions,
  email,
  linkedin,
  mainClassName,
  children
}) {
  return (
    <div className="relative min-h-screen text-ink selection:bg-accent/20">
      <div className="site-background" aria-hidden="true" />
      <SiteHeader currentPage={currentPage} cvOptions={cvOptions} />

      <main id="main-content" className={mainClassName}>
        {children}
      </main>

      <Footer email={email} linkedin={linkedin} />
    </div>
  );
}
