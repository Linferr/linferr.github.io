export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <header>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-pine/85">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-base text-ink/75">{subtitle}</p> : null}
    </header>
  );
}
