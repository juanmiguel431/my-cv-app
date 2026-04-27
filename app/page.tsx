import Image from "next/image";
import { BookIcon, CalendarIcon, ChipIcon, ExperienceIcon, GithubIcon, GraduationIcon, MailIcon, PhoneIcon, SummaryIcon } from "./components/icons";
import { continuingEducation, education, experiences, techGroups } from "./constants/cv-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#dbeafe_0%,_#f8fafc_42%,_#eef2ff_100%)] px-4 py-10 text-slate-900 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <section className="grid gap-6 rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-xl shadow-slate-300/20 backdrop-blur lg:grid-cols-3 lg:p-8">
          <div className="space-y-5 lg:col-span-2">
            <p className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700 uppercase">
              IT Engineer CV
            </p>
            <div>
              <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Juan Miguel Paulino Carpio
              </h1>
              <p className="mt-2 text-lg font-semibold text-blue-700">Senior Software Engineer</p>
            </div>
            <div className="grid gap-3 text-sm sm:grid-cols-2">
              <a
                href="mailto:juanmiguel431@gmail.com"
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <MailIcon className="h-4 w-4 text-blue-700" />
                <span>juanmiguel431@gmail.com</span>
              </a>
              <a
                href="tel:+18298205436"
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <PhoneIcon className="h-4 w-4 text-blue-700" />
                <span>+1 (829) 820-5436</span>
              </a>
              <a
                href="https://github.com/juanmiguel431"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 transition hover:border-blue-300 hover:bg-blue-50 sm:col-span-2"
              >
                <GithubIcon className="h-4 w-4 text-slate-900" />
                <span>github.com/juanmiguel431</span>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-blue-200 bg-slate-100 shadow-xl shadow-blue-200/60">
              <Image
                src="/profile.jpg"
                alt="Juan Miguel Paulino Carpio profile picture"
                fill
                priority
                sizes="(min-width: 1024px) 12rem, 12rem"
                className="object-cover object-top"
              />
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <article className="rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-lg shadow-slate-300/20">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900">
                <SummaryIcon className="h-5 w-5 text-blue-700" />
                Professional Summary
              </h2>
              <p className="text-sm leading-7 text-slate-700">
                I am a Software Engineer with over 15 years of experience developing solutions in the financial,
                insurance, and healthcare sectors. I specialize in .NET (C#), Java, Python, TypeScript, and React,
                with experience deploying applications on AWS and Azure. I focus on building reliable, scalable,
                user-centered platforms and continuously improving the user experience. I am interested in roles where
                I can contribute both as a developer and to architectural decisions.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-lg shadow-slate-300/20">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900">
                <ChipIcon className="h-5 w-5 text-blue-700" />
                Technologies
              </h2>
              <div className="space-y-3">
                {techGroups.map((group) => (
                  <div key={group.title} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <h3 className="text-sm font-semibold text-slate-900">{group.title}</h3>
                    <p className="mt-1 text-sm text-slate-700">{group.items}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-lg shadow-slate-300/20">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900">
                <GraduationIcon className="h-5 w-5 text-blue-700" />
                Education
              </h2>
              <div className="space-y-4">
                {education.map((item) => (
                  <div key={item.degree} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <h3 className="text-sm font-semibold text-slate-900">{item.degree}</h3>
                    <p className="mt-1 text-xs text-slate-500">{item.period}</p>
                    <p className="mt-1 text-sm text-slate-700">{item.institution}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-lg shadow-slate-300/20">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900">
                <BookIcon className="h-5 w-5 text-blue-700" />
                Continuing Education
              </h2>
              <ul className="space-y-2 text-sm text-slate-700">
                {continuingEducation.map((course) => (
                  <li key={course} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                    {course}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <article className="rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-lg shadow-slate-300/20">
            <h2 className="mb-5 flex items-center gap-2 text-lg font-bold text-slate-900">
              <ExperienceIcon className="h-5 w-5 text-blue-700" />
              Experience
            </h2>
            <div className="space-y-5">
              {experiences.map((experience) => (
                <section key={`${experience.role}-${experience.company}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{experience.role}</h3>
                      <p className="text-sm font-medium text-blue-700">{experience.company}</p>
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                      <CalendarIcon className="h-3.5 w-3.5" />
                      <span>{experience.period}</span>
                      {experience.contract ? <span>({experience.contract})</span> : null}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{experience.description}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                    {experience.contributions.map((contribution) => (
                      <li key={contribution}>{contribution}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
