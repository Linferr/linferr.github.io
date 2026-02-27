import PageShell from "../components/PageShell";
import coursesData from "../data/coursesData.js";
import resumeData from "../data/resumeData.js";

function CourseTable({ courses }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[760px] w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-line/80 bg-paper/70">
            <th className="px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] text-ink/70">
              Code
            </th>
            <th className="px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] text-ink/70">
              Course
            </th>
            <th className="px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] text-ink/70">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.code} className="border-b border-line/60 last:border-b-0">
              <td className="px-4 py-3 align-top font-mono text-sm text-accent">{course.code}</td>
              <td className="px-4 py-3 align-top text-sm font-semibold text-ink">{course.name}</td>
              <td className="px-4 py-3 align-top text-sm text-ink/75">{course.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CoursesPage() {
  const { basics } = resumeData;

  return (
    <PageShell
      currentPage="courses"
      cvOptions={basics.cvOptions}
      email={basics.email}
      linkedin={basics.linkedin}
      mainClassName="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 pt-28"
    >
      <section className="panel p-6 md:p-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-pine/80">
          Coursework
        </p>
        <h1 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
          Systematic training in systems, ML, and cloud engineering.
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-ink/80">
          This page keeps course detail separate from the main CV narrative. It covers
          representative coursework across UBC BASc and UofT MEng programs.
        </p>
      </section>

      {coursesData.map((school) => (
        <section key={school.school} className="panel p-6 md:p-8">
          <div className="flex flex-col gap-6 border-b border-line/80 pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-3xl text-ink">{school.school}</h2>
              <p className="mt-2 text-base text-ink/75">{school.program}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-pine/80">
                {school.period}
              </p>
            </div>
            <img
              src={school.logo}
              alt={`${school.school} logo`}
              className="h-12 w-auto object-contain md:h-16"
              loading="lazy"
            />
          </div>

          <div className="mt-6 space-y-6">
            {school.terms.map((term) => (
              <article key={term.name} className="rounded-2xl border border-line/80 bg-white/80">
                <h3 className="border-b border-line/70 px-4 py-3 font-semibold text-ink">
                  {term.name}
                </h3>
                <CourseTable courses={term.courses} />
              </article>
            ))}
          </div>
        </section>
      ))}
    </PageShell>
  );
}
