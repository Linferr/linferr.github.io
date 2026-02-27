import { ChevronDown } from "lucide-react";

export default function CvMenu({ options = [], label, className = "", align = "right" }) {
  if (!options.length) {
    return null;
  }

  if (options.length === 1) {
    const only = options[0];
    return (
      <a
        href={only.href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <details className="group relative">
      <summary className={[className, "list-none", "inline-flex items-center gap-1.5"].join(" ")}>
        <span>{label}</span>
        <ChevronDown size={14} className="transition group-open:rotate-180" />
      </summary>
      <div
        className={[
          "absolute z-[90] mt-2 w-36 rounded-xl border border-line/80 bg-white/95 p-2 shadow-lg backdrop-blur",
          align === "left" ? "left-0" : "right-0"
        ].join(" ")}
      >
        {options.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="block rounded-lg px-3 py-2 text-sm font-medium text-ink/85 transition hover:bg-ink/6 hover:text-ink"
          >
            {item.label}
          </a>
        ))}
      </div>
    </details>
  );
}
