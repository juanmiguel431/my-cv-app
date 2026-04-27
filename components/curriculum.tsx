"use client";

import Image from "next/image";
import { useEffect, useSyncExternalStore } from "react";

import {
  BookIcon,
  CalendarIcon,
  ChipIcon,
  ExperienceIcon,
  GithubIcon,
  GraduationIcon,
  MailIcon,
  MoonIcon,
  PhoneIcon,
  SummaryIcon,
  SunIcon,
} from "@/components/icons";
import {
  continuingEducation,
  education,
  experiences,
  techGroups,
} from "@/constants/cv-data";

type ThemeMode = "light" | "dark";
const THEME_EVENT = "theme-preference-change";

function getPreferredTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "light";
  }
  const storedTheme = window.localStorage.getItem("theme");
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getServerThemeSnapshot(): ThemeMode {
  return "light";
}

function subscribeTheme(onStoreChange: () => void): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleChange = () => onStoreChange();

  window.addEventListener("storage", handleChange);
  window.addEventListener(THEME_EVENT, handleChange);
  mediaQuery.addEventListener("change", handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener(THEME_EVENT, handleChange);
    mediaQuery.removeEventListener("change", handleChange);
  };
}

export default function Curriculum() {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getPreferredTheme,
    getServerThemeSnapshot
  );

  useEffect(() => {
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const setTheme = (nextTheme: ThemeMode) => {
    window.localStorage.setItem("theme", nextTheme);
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  const isDark = theme === "dark";
  const pageBg = isDark
    ? "bg-[radial-gradient(circle_at_top,_#0f172a_0%,_#020617_60%,_#020617_100%)] text-slate-100"
    : "bg-[radial-gradient(circle_at_top,_#cffafe_0%,_#eff6ff_45%,_#f8fafc_100%)] text-slate-900";
  const card = isDark
    ? "border border-slate-700/60 bg-slate-900/70 shadow-lg shadow-black/30"
    : "border border-slate-200/80 bg-white/85 shadow-lg shadow-slate-300/30";
  const sectionTitle = isDark ? "text-slate-100" : "text-slate-900";
  const mutedText = isDark ? "text-slate-300" : "text-slate-700";
  const accentChip = isDark
    ? "border border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
    : "border border-cyan-200 bg-cyan-100 text-cyan-800";
  const subtleCard = isDark
    ? "rounded-2xl border border-slate-700/70 bg-slate-800/60"
    : "rounded-2xl border border-slate-200 bg-slate-50/90";

  return (
    <main
      className={`min-h-screen px-4 py-8 transition-colors duration-300 sm:px-6 lg:px-10 ${pageBg}`}
    >
      <div className="mx-auto w-full max-w-7xl">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] ${accentChip}`}
            >
              Curriculum Vitae
            </p>
            <h1 className={`mt-3 text-2xl font-black tracking-tight sm:text-3xl ${sectionTitle}`}>
              Juan Miguel Paulino Carpio
            </h1>
            <p
              className={`mt-1 text-sm font-medium sm:text-base ${isDark ? "text-cyan-300" : "text-cyan-700"}`}
            >
              Senior Software Engineer
            </p>
          </div>

          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
              isDark
                ? "border border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700"
                : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
            }`}
          >
            <span aria-hidden="true">
              {isDark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
            </span>
            <span>{isDark ? "Light mode" : "Dark mode"}</span>
          </button>
        </header>

        <section className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <aside className={`rounded-3xl p-6 lg:sticky lg:top-6 lg:h-fit ${card}`}>
            <div className="mx-auto mb-5 flex w-fit items-center justify-center">
              <div
                className={`relative h-44 w-44 overflow-hidden rounded-full border-4 ${
                  isDark ? "border-cyan-400/50" : "border-cyan-200"
                }`}
              >
                <Image
                  src="/profile.jpg"
                  alt="Juan Miguel Paulino Carpio profile picture"
                  fill
                  priority
                  sizes="11rem"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <a
                href="mailto:juanmiguel431@gmail.com"
                className={`flex items-center gap-2 rounded-xl px-3 py-2 transition ${subtleCard} ${
                  isDark ? "hover:border-cyan-400/50" : "hover:border-cyan-300"
                }`}
              >
                <MailIcon className={`h-4 w-4 ${isDark ? "text-cyan-300" : "text-cyan-700"}`} />
                <span className={mutedText}>juanmiguel431@gmail.com</span>
              </a>
              <a
                href="tel:+18298205436"
                className={`flex items-center gap-2 rounded-xl px-3 py-2 transition ${subtleCard} ${
                  isDark ? "hover:border-cyan-400/50" : "hover:border-cyan-300"
                }`}
              >
                <PhoneIcon className={`h-4 w-4 ${isDark ? "text-cyan-300" : "text-cyan-700"}`} />
                <span className={mutedText}>+1 (829) 820-5436</span>
              </a>
              <a
                href="https://github.com/juanmiguel431"
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 rounded-xl px-3 py-2 transition ${subtleCard} ${
                  isDark ? "hover:border-cyan-400/50" : "hover:border-cyan-300"
                }`}
              >
                <GithubIcon className="h-4 w-4" />
                <span className={mutedText}>github.com/juanmiguel431</span>
              </a>
            </div>

            <div className="mt-6">
              <h3
                className={`mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide ${sectionTitle}`}
              >
                <ChipIcon className={`h-4 w-4 ${isDark ? "text-cyan-300" : "text-cyan-700"}`} />
                Core Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {[".NET", "Java", "Python", "Next.js", "AWS", "Azure"].map((item) => (
                  <span key={item} className={`rounded-full px-3 py-1 text-xs font-semibold ${accentChip}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            <article className={`rounded-3xl p-6 ${card}`}>
              <h2 className={`mb-4 flex items-center gap-2 text-lg font-bold ${sectionTitle}`}>
                <SummaryIcon className={`h-5 w-5 ${isDark ? "text-cyan-300" : "text-cyan-700"}`} />
                Professional Summary
              </h2>
              <p className={`text-sm leading-7 ${mutedText}`}>
                I am a Software Engineer with over 15 years of experience developing solutions in the financial,
                insurance, and healthcare sectors. I specialize in .NET (C#), Java, Python, TypeScript, and React,
                with experience deploying applications on AWS and Azure. I focus on building reliable, scalable,
                user-centered platforms and continuously improving the user experience. I am interested in roles where
                I can contribute both as a developer and to architectural decisions.
              </p>
            </article>

            <article className={`rounded-3xl p-6 ${card}`}>
              <h2 className={`mb-4 flex items-center gap-2 text-lg font-bold ${sectionTitle}`}>
                <ExperienceIcon className={`h-5 w-5 ${isDark ? "text-cyan-300" : "text-cyan-700"}`} />
                Experience
              </h2>
              <div className="space-y-4">
                {experiences.map((experience) => (
                  <section
                    key={`${experience.role}-${experience.company}`}
                    className={`rounded-2xl p-4 ${subtleCard}`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className={`text-base font-bold ${sectionTitle}`}>{experience.role}</h3>
                        <p
                          className={`text-sm font-medium ${
                            isDark ? "text-cyan-300" : "text-cyan-700"
                          }`}
                        >
                          {experience.company}
                        </p>
                      </div>
                      <div
                        className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${accentChip}`}
                      >
                        <CalendarIcon className="h-3.5 w-3.5" />
                        <span>{experience.period}</span>
                        {experience.contract ? <span>({experience.contract})</span> : null}
                      </div>
                    </div>
                    <p className={`mt-3 text-sm leading-6 ${mutedText}`}>{experience.description}</p>
                    <ul className={`mt-3 list-disc space-y-1 pl-5 text-sm leading-6 ${mutedText}`}>
                      {experience.contributions.map((contribution) => (
                        <li key={contribution}>{contribution}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${accentChip}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>

            <div className="grid gap-6 xl:grid-cols-2">
              <article className={`rounded-3xl p-6 ${card}`}>
                <h2 className={`mb-4 flex items-center gap-2 text-lg font-bold ${sectionTitle}`}>
                  <ChipIcon className={`h-5 w-5 ${isDark ? "text-cyan-300" : "text-cyan-700"}`} />
                  Technologies
                </h2>
                <div className="space-y-3">
                  {techGroups.map((group) => (
                    <div key={group.title} className={`p-3 ${subtleCard}`}>
                      <h3 className={`text-sm font-semibold ${sectionTitle}`}>{group.title}</h3>
                      <p className={`mt-1 text-sm ${mutedText}`}>{group.items}</p>
                    </div>
                  ))}
                </div>
              </article>

              <div className="space-y-6">
                <article className={`rounded-3xl p-6 ${card}`}>
                  <h2 className={`mb-4 flex items-center gap-2 text-lg font-bold ${sectionTitle}`}>
                    <GraduationIcon className={`h-5 w-5 ${isDark ? "text-cyan-300" : "text-cyan-700"}`} />
                    Education
                  </h2>
                  <div className="space-y-3">
                    {education.map((item) => (
                      <div key={item.degree} className={`p-3 ${subtleCard}`}>
                        <h3 className={`text-sm font-semibold ${sectionTitle}`}>{item.degree}</h3>
                        <p className={`mt-1 text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                          {item.period}
                        </p>
                        <p className={`mt-1 text-sm ${mutedText}`}>{item.institution}</p>
                      </div>
                    ))}
                  </div>
                </article>

                <article className={`rounded-3xl p-6 ${card}`}>
                  <h2 className={`mb-4 flex items-center gap-2 text-lg font-bold ${sectionTitle}`}>
                    <BookIcon className={`h-5 w-5 ${isDark ? "text-cyan-300" : "text-cyan-700"}`} />
                    Continuing Education
                  </h2>
                  <ul className="space-y-2 text-sm">
                    {continuingEducation.map((course) => (
                      <li key={course} className={`px-3 py-2 ${subtleCard} ${mutedText}`}>
                        {course}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
