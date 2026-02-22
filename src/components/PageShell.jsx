import SiteHeader from "./SiteHeader";
import Footer from "./Footer";

export default function PageShell({
  currentPage,
  cvUrl,
  email,
  linkedin,
  mainClassName,
  children
}) {
  return (
    <div className="relative min-h-screen text-ink selection:bg-accent/20">
      <div className="site-background" aria-hidden="true" />
      <SiteHeader currentPage={currentPage} cvUrl={cvUrl} />

      <main id="main-content" className={mainClassName}>
        {children}
      </main>

      <Footer email={email} linkedin={linkedin} />
    </div>
  );
}
