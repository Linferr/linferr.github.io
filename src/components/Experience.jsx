import { CalendarRange, MapPin } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Experience({ data }) {
  return (
    <section className="panel p-6 md:p-8" id="experience">
      <SectionTitle eyebrow="Experience" title="Recent work focused on practical engineering impact." />

      <div className="mt-8 space-y-4">
        {data.map((item) => (
          <article key={`${item.company}-${item.date}`} className="rounded-2xl border border-line/80 bg-white/90 p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-ink">{item.role}</h3>
                <p className="mt-1 text-base font-medium text-accent">{item.company}</p>
              </div>
              <div className="space-y-1 text-sm text-ink/70">
                <p className="inline-flex items-center gap-1.5">
                  <CalendarRange size={14} className="text-accent" />
                  <span>{item.date}</span>
                </p>
                <p className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-accent" />
                  <span>{item.location}</span>
                </p>
              </div>
            </div>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/90">
              {item.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            {item.details?.length ? (
              <details className="mt-4 rounded-xl border border-line/75 bg-paper/70 px-4 py-3">
                <summary className="cursor-pointer text-sm font-semibold text-pine">
                  Background
                </summary>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink/80">
                  {item.details.map((extra) => (
                    <li key={extra}>{extra}</li>
                  ))}
                </ul>
              </details>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
