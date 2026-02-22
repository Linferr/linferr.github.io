import { FileText, Github, GraduationCap, Linkedin, Mail, MapPin } from "lucide-react";

export default function Hero({ data, education = [] }) {
  return (
    <section className="panel overflow-hidden p-6 md:p-8">
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-pine/85">Profile</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.04] text-ink md:text-7xl">
            {data.name}
          </h1>
          <p className="mt-4 max-w-2xl text-2xl font-semibold text-accent">{data.role}</p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/85">{data.summary}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`mailto:${data.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-accent/90"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
            <a
              href={data.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line/90 bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-ink/25 hover:bg-ink/5"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line/90 bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-ink/25 hover:bg-ink/5"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href={data.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-paper px-5 py-2.5 text-sm font-semibold text-accent transition hover:bg-accent hover:text-paper"
            >
              <FileText size={16} />
              <span>One-Page CV</span>
            </a>
          </div>
        </div>

        <aside className="rounded-2xl border border-line/80 bg-paper/75 p-5">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-pine/80">
            Availability and Education
          </p>
          <p className="mt-3 text-lg font-semibold text-ink">
            {data.availabilityRole ?? "SDE / AI Engineer"}
          </p>
          <p className="mt-2 text-sm text-ink/75">{data.availability}</p>
          {data.expectedGraduation ? (
            <p className="mt-2 inline-block rounded bg-accent/10 px-2 py-1 text-sm font-semibold text-accent">
              {data.expectedGraduation}
            </p>
          ) : null}

          <div className="mt-6 flex items-center gap-2 text-sm text-ink/80">
            <MapPin size={16} className="text-accent" />
            <span>{data.location}</span>
          </div>

          <div className="mt-5 border-t border-line/80 pt-4">
            <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-pine/80">
              <GraduationCap size={14} className="text-accent" />
              <span>Education</span>
            </p>
            <div className="mt-3 space-y-3">
              {education.map((entry) => (
                <div key={`${entry.school}-${entry.date}`} className="rounded-xl bg-white/80 p-3">
                  <p className="text-sm font-semibold text-ink">{entry.school}</p>
                  <p className="mt-1 text-xs text-ink/80">{entry.degree}</p>
                  <p className="mt-1 text-xs text-ink/70">{entry.date}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

