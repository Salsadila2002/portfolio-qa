const LinkedInIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.371-1.852 3.604 0 4.271 2.372 4.271 5.455v6.288zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.574v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577 0-.286-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.468-2.381 1.235-3.22-.124-.304-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.872.118 3.176.768.839 1.235 1.91 1.235 3.22 0 4.61-2.804 5.62-5.475 5.92.43.372.815 1.103.815 2.222 0 1.606-.014 2.898-.014 3.286 0 .32.218.693.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const MailIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.91l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.22 8.903A2.25 2.25 0 0 1 2.15 6.993V6.75" />
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          Manual QA Enthusiast
        </div>
        <h1 className="mb-4 text-4xl font-bold text-dark md:text-6xl">
          Salsadila Puspitasari
        </h1>
        <p className="max-w-xl text-lg text-slate-600">
          Detail-oriented beginner in Quality Assurance. I help teams ship
          better software by learning how to find, report, and track bugs
          with clarity.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="rounded-lg bg-primary px-6 py-3 font-medium text-white transition hover:bg-sky-600"
          >
            Get in Touch
          </a>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-600">
          <a
            href="#experience"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 transition hover:border-primary hover:text-primary"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 transition hover:border-primary hover:text-primary"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 transition hover:border-primary hover:text-primary"
          >
            Projects
          </a>
          <a
            href="#certifications"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 transition hover:border-primary hover:text-primary"
          >
            Certifications
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-6 text-2xl font-bold text-dark">About Me</h2>
        <p className="leading-relaxed text-slate-600">
          I am starting my journey in software quality assurance, focusing on
          manual testing fundamentals. I enjoy breaking down requirements,
          writing clear test cases, and learning how users actually experience a
          product. My current goal is to master manual QA workflows and grow
          toward test automation.
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-dark">Experience</h2>
          <div className="space-y-6">
            {[
              {
                role: "QA Intern",
                company: "Company Name",
                period: "Month Year - Month Year",
                desc: "Assisted in manual testing, wrote test cases, and reported bugs using spreadsheets.",
              },
              {
                role: "Secretary",
                company: "Organization Name",
                period: "Month Year - Month Year",
                desc: "Managed documentation, meeting minutes, and internal communications.",
              },
            ].map((exp) => (
              <div
                key={exp.role}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6 transition hover:border-primary/40"
              >
                <div className="mb-2 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <h3 className="font-semibold text-dark">{exp.role}</h3>
                  <span className="text-sm text-slate-500">{exp.period}</span>
                </div>
                <p className="mb-2 text-sm font-medium text-primary">
                  {exp.company}
                </p>
                <p className="text-sm text-slate-600">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-dark">
            Skills & Tools
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              { title: "Manual Testing", desc: "Functional, regression, UAT" },
              { title: "Test Case Design", desc: "Scenario, step-by-step execution" },
              { title: "Bug Reporting", desc: "Clear reproduction steps & evidence" },
              { title: "Microsoft Excel", desc: "Test data & traceability matrices" },
              { title: "Google Spreadsheet", desc: "Collaborative test planning" },
              { title: "Postman", desc: "API testing basics" },
            ].map((skill) => (
              <div
                key={skill.title}
                className="rounded-xl border border-slate-100 bg-slate-50 p-5 transition hover:shadow-md"
              >
                <h3 className="font-semibold text-dark">{skill.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-6 text-2xl font-bold text-dark">Learning Projects</h2>
        <p className="mb-8 text-slate-600">
          Hands-on exercises to practice QA workflows. Links will be added as
          projects are completed.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "E-Commerce Test Cases",
              desc: "Manual test cases for login, cart, and checkout flows.",
              tag: "Manual QA",
            },
            {
              title: "API Testing with Postman",
              desc: "Collection of basic GET/POST requests and status checks.",
              tag: "API",
            },
            {
              title: "Bug Report Sample",
              desc: "Template and example bug reports with severity/priority.",
              tag: "Documentation",
            },
            {
              title: "Spreadsheet Test Plan",
              desc: "Traceability matrix and execution report in Google Sheets.",
              tag: "Planning",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-slate-200 bg-white p-6 transition hover:border-primary/40"
            >
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                {project.tag}
              </span>
              <h3 className="mb-2 font-semibold text-dark">{project.title}</h3>
              <p className="text-sm text-slate-600">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-6 text-2xl font-bold text-dark">Certifications</h2>
        <p className="mb-8 text-slate-600">
          Certificates earned from online learning platforms.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Software Quality Assurance",
              provider: "MySkill",
              url: "https://storage.googleapis.com/myskill-v2-certificates/learning-path-2XhR1x0FsrUJBeFiFI45/4BvLPSKSWjdBdi4o27X1QgLiNY92-LCR3Eq66nBhQKlq4KHb0.pdf",
            },
            {
              title: "SkillAcademy Certificate",
              provider: "SkillAcademy",
              url: "https://skillacademy.com/sertifikat/GOIOEJF5KP1SJQ",
            },
          ].map((cert) => (
            <a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-primary/40"
            >
              <div className="flex h-40 items-center justify-center bg-slate-100 text-sm text-slate-400">
                <span>Certificate Image</span>
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-semibold text-dark">{cert.title}</h3>
                </div>
                <p className="text-sm text-slate-500">{cert.provider}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-dark px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold">Let&apos;s Connect</h2>
          <p className="mb-8 text-slate-300">
            Open to QA internships, freelance testing, and learning
            opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/salsadila-puspitasari-194353335/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg bg-white/10 px-5 py-2.5 transition hover:bg-white/20"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              href="https://github.com/Salsadila2002"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg bg-white/10 px-5 py-2.5 transition hover:bg-white/20"
            >
              <GithubIcon /> GitHub
            </a>
            <a
              href="mailto:salsadilapuspitasari@gmail.com"
              className="flex items-center gap-2 rounded-lg bg-white/10 px-5 py-2.5 transition hover:bg-white/20"
            >
              <MailIcon /> Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Salsadila Puspitasari. Built with Next.js
        &amp; Tailwind.
      </footer>
    </main>
  );
}
