import { BrainCircuit, Code2, Server, ShieldCheck } from "lucide-react";
import SectionTitle from "./SectionTitle";

const iconMap = {
  languages: Code2,
  systems: Server,
  ai: BrainCircuit,
  testing: ShieldCheck
};

export default function Skills({ data }) {
  return (
    <section className="panel p-6 md:p-8">
      <SectionTitle
        eyebrow="Technical Skills"
        title="Build systems that are measurable, reliable, and scalable."
      />

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {data.map((group) => {
          const Icon = iconMap[group.id] ?? Code2;
          return (
            <article key={group.id} className="rounded-2xl border border-line/80 bg-paper/70 p-4">
              <div className="flex items-center gap-2 text-ink">
                <Icon size={18} className="text-accent" />
                <h3 className="text-base font-semibold">{group.category}</h3>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line/90 bg-white px-2.5 py-1 text-xs text-ink/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
