import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import PageShell from "../components/PageShell";
import resumeData from "../data/resumeData.js";

export default function HomePage() {
  const { basics, skills, experience, projects, education, focus } = resumeData;

  return (
    <PageShell
      currentPage="home"
      cvOptions={basics.cvOptions}
      email={basics.email}
      linkedin={basics.linkedin}
      mainClassName="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-20 pt-28 md:gap-20"
    >
      <Hero data={basics} education={education} />

      <Experience data={experience} />
      <Projects data={projects} />
      <Skills data={skills} />

      <section className="panel p-6 md:p-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-pine/80">
          Current Focus
        </p>
        <ul className="mt-4 grid gap-3 text-base text-ink/90 md:grid-cols-3">
          {focus.map((item) => (
            <li key={item} className="rounded-xl bg-paper/70 px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink/70">
          Want course-by-course details? See the dedicated{" "}
          <a className="link-strong" href="/courses.html">
            coursework page
          </a>
          .
        </p>
      </section>
    </PageShell>
  );
}
