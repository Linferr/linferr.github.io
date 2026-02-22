import { ExternalLink } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Projects({ data }) {
  return (
    <section className="panel p-6 md:p-8" id="projects">
      <SectionTitle
        eyebrow="Projects"
        title="From research automation to edge AI deployment."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {data.map((project) => (
          <article
            key={project.name}
            className="flex h-full flex-col rounded-2xl border border-line/80 bg-white/90 p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-ink">{project.name}</h3>
                <p className="mt-1 text-sm text-ink/65">{project.period}</p>
              </div>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line/80 p-2 text-ink/70 transition hover:border-accent/35 hover:text-accent"
                  aria-label={`Open ${project.name}`}
                >
                  <ExternalLink size={16} />
                </a>
              ) : null}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-ink/80">{project.summary}</p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink/90">
              {project.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-2 pt-4">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line/85 bg-paper px-2.5 py-1 text-xs text-ink/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
