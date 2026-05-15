"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";

import {
  CalendarIcon,
  ChipIcon,
  ExperienceIcon,
  GithubIcon,
  GraduationIcon,
  LinkedinIcon,
  MailIcon,
  MoonIcon,
  PhoneIcon,
  SummaryIcon,
  SunIcon,
} from "@/components/icons";
import type { CvDictionary, Locale } from "@/models/cv";

type CurriculumProps = {
  dictionary: CvDictionary;
  currentLocale: Locale;
};

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

export default function Curriculum({ dictionary, currentLocale }: CurriculumProps) {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getPreferredTheme,
    getServerThemeSnapshot
  );

  useEffect(() => {
    document.documentElement.lang = currentLocale;
    document.documentElement.style.colorScheme = theme;
  }, [currentLocale, theme]);

  const setTheme = (nextTheme: ThemeMode) => {
    window.localStorage.setItem("theme", nextTheme);
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  const { labels, profile, experiences, techGroups, education, pdfFileName } = dictionary;
  const phoneHref = `tel:${profile.phone.replace(/[^\d+]/g, "")}`;
  const githubUrl = `https://${profile.github}`;
  const linkedinUrl = `https://${profile.linkedin}`;
  const availableLocales: Locale[] = ["en", "es"];

  const isDark = theme === "dark";

const styles = isDark
  ? {
      pageBg: "bg-[radial-gradient(circle_at_top,_#0f172a_0%,_#020617_60%,_#020617_100%)] text-slate-100",
      card: "border-slate-700/60 bg-slate-900/70 shadow-black/30",
      sectionTitle: "text-slate-100",
      mutedText: "text-slate-300",
      accentChip: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
      heroBadge: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
      heroRoleText: "text-cyan-300",
      subtleCard: "border-slate-700/70 bg-slate-800/60",
      periodText: "text-cyan-200",
      periodLengthText: "text-slate-400",
      linkStyle: `hover:text-cyan-300`,
    }
  : {
      pageBg: "bg-[radial-gradient(circle_at_top,_#cffafe_0%,_#eff6ff_45%,_#f8fafc_100%)] text-slate-900",
      card: "border-slate-200/80 bg-white/85 shadow-slate-300/30",
      sectionTitle: "text-slate-900",
      mutedText: "text-slate-700",
      accentChip: "border-cyan-200 bg-cyan-100 text-cyan-800",
      heroBadge: "border-sky-300 bg-sky-200/90 text-sky-950 shadow-sm shadow-sky-100/70",
      heroRoleText: "text-sky-950",
      subtleCard: "border-slate-200 bg-slate-50/90",
      periodText: "text-cyan-700",
      periodLengthText: "text-slate-500",
      linkStyle: `hover:text-cyan-600`,
    };

  return (
    <main
      className={`min-h-screen px-4 py-8 transition-colors duration-300 sm:px-6 lg:px-10 ${styles.pageBg}`}
    >
      <div className="mx-auto w-full max-w-screen-2xl">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] border ${styles.heroBadge}`}
            >
              {labels.curriculumVitae}
            </p>
            <h1 className={`mt-3 text-2xl font-black tracking-tight sm:text-3xl ${styles.sectionTitle}`}>
              {profile.name}
            </h1>
            <p className={`mt-1 text-sm font-semibold sm:text-base ${styles.heroRoleText}`}>
              {profile.role}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2">
              <div
                className={`inline-flex rounded-full border p-1 ${
                  isDark ? "border-slate-600 bg-slate-800" : "border-slate-300 bg-white"
                }`}
              >
                {availableLocales.map((locale) => {
                  const isActiveLocale = locale === currentLocale;
                  const localeLabel = locale.toUpperCase();

                  return (
                    <Link
                      key={locale}
                      href={`/${locale}`}
                      aria-current={isActiveLocale ? "page" : undefined}
                      className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                        isActiveLocale
                          ? isDark
                            ? "bg-cyan-400/20 text-cyan-200"
                            : "bg-cyan-100 text-cyan-900"
                          : isDark
                            ? "text-slate-300 hover:bg-slate-700"
                            : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {localeLabel}
                    </Link>
                  );
                })}
              </div>
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
              <span>{isDark ? labels.themeLight : labels.themeDark}</span>
            </button>

            <a
              href={`/cv/${pdfFileName}`}
              download
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                isDark
                  ? "border border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700"
                  : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
              }`}
            >
              {labels.download}
            </a>

          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <aside className={`rounded-3xl p-6 lg:sticky lg:top-6 lg:h-fit border shadow-lg ${styles.card}`}>
            <div className="mx-auto mb-5 flex w-fit items-center justify-center">
              <div
                className={`relative h-44 w-44 overflow-hidden rounded-full border-4 ${
                  isDark ? "border-cyan-400/50" : "border-cyan-200"
                }`}
              >
                <Image
                  src="/profile.jpg"
                  alt={profile.profileImageAlt}
                  fill
                  priority
                  sizes="11rem"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="space-y-3 text-base">
              <a
                href={`mailto:${profile.email}`}
                className={`flex items-center gap-2 rounded-2xl border px-3 py-2 transition ${styles.subtleCard} ${
                  isDark ? "hover:border-cyan-400/50" : "hover:border-cyan-300"
                }`}
              >
                <MailIcon className={`h-4 w-4 ${isDark ? "text-cyan-300" : "text-cyan-700"}`} />
                <span className={styles.mutedText}>{profile.email}</span>
              </a>
              <a
                href={phoneHref}
                className={`flex items-center gap-2 rounded-2xl border px-3 py-2 transition ${styles.subtleCard} ${
                  isDark ? "hover:border-cyan-400/50" : "hover:border-cyan-300"
                }`}
              >
                <PhoneIcon className={`h-4 w-4 ${isDark ? "text-cyan-300" : "text-cyan-700"}`} />
                <span className={styles.mutedText}>{profile.phone}</span>
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 rounded-2xl border px-3 py-2 transition ${styles.subtleCard} ${
                  isDark ? "hover:border-cyan-400/50" : "hover:border-cyan-300"
                }`}
              >
                <GithubIcon className="h-4 w-4" />
                <span className={styles.mutedText}>{profile.github}</span>
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 rounded-2xl border px-3 py-2 transition ${styles.subtleCard} ${
                  isDark ? "hover:border-cyan-400/50" : "hover:border-cyan-300"
                }`}
              >
                <LinkedinIcon className="h-4 w-4" />
                <span className={styles.mutedText}>{profile.linkedin}</span>
              </a>
            </div>
          </aside>

          <div className="space-y-6">
            <article className={`rounded-3xl p-6 border shadow-lg ${styles.card}`}>
              <h2 className={`mb-4 flex items-center gap-2 text-xl font-bold ${styles.sectionTitle}`}>
                <SummaryIcon className={`h-5 w-5 ${isDark ? "text-cyan-300" : "text-cyan-700"}`} />
                {labels.professionalSummary}
              </h2>
              <p className={`text-base leading-7 ${styles.mutedText}`}>{profile.summary}</p>
            </article>

            <article className={`rounded-3xl p-6 border shadow-lg ${styles.card}`}>
              <h2 className={`mb-4 flex items-center gap-2 text-xl font-bold ${styles.sectionTitle}`}>
                <ChipIcon className={`h-5 w-5 ${isDark ? "text-cyan-300" : "text-cyan-700"}`} />
                {labels.coreSkills}
              </h2>

              <div className="grid gap-3 md:grid-flow-col md:grid-rows-3">
                {techGroups.map((group) => (
                  <div key={group.title} className={`rounded-2xl border p-3 ${styles.subtleCard}`}>
                    <h3 className={`text-base font-semibold ${styles.sectionTitle}`}>
                      {group.title}
                    </h3>

                    <p className={`mt-1 text-base ${styles.mutedText}`}>
                      {group.items}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className={`rounded-3xl p-6 border shadow-lg ${styles.card}`}>
              <h2 className={`mb-4 flex items-center gap-2 text-xl font-bold ${styles.sectionTitle}`}>
                <ExperienceIcon className={`h-5 w-5 ${isDark ? "text-cyan-300" : "text-cyan-700"}`} />
                {labels.experience}
              </h2>
              <div className="space-y-4">
                {experiences.map((experience) => (

                  <section
                    key={experience.company}
                    className={`rounded-2xl border p-4 ${styles.subtleCard}`}
                  >
                      <div>
                        <h3 className={`text-lg font-bold ${styles.sectionTitle}`}>
                          <a
                            href={experience.url}
                            target="_blank"
                            rel="noreferrer"
                            className={`transition-all duration-200 hover:underline underline-offset-4 ${styles.linkStyle}`}
                          >
                            {experience.company}
                          </a>
                        </h3>
                        <p className={`mt-3 text-base leading-6 ${styles.mutedText}`}>{experience.description}</p>

                        {experience.roles.map((role) => (
                          <div key={role.name} className="mt-6">
                            <div>
                              <div>
                                <p
                                  className={`text-base font-semibold ${
                                    isDark ? "text-cyan-300" : "text-cyan-700"
                                  }`}
                                >
                                  {role.name}
                                </p>

                                <div className="mt-1 flex items-center">
                                  <div
                                    className={`inline-flex items-center gap-1  py-1 text-sm font-semibold ${styles.periodText}`}
                                  >
                                    <CalendarIcon className="h-3.5 w-3.5" />
                                    <span>{role.period}</span>
                                  </div>

                                  <span
                                    className={`ml-1 text-xs font-medium ${styles.periodLengthText}`}
                                  >
                                    · {role.periodLength}
                                  </span>
                                </div>
                              </div>
                            </div>


                            <ul className={`mt-3 list-disc space-y-4 pl-5 text-base leading-6 ${styles.mutedText}`}>
                              {role.contributions.map((contribution) => (
                                <li key={contribution}>{contribution}</li>
                              ))}
                            </ul>

                            <div className="mt-4 flex flex-wrap gap-2">
                              {role.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className={`rounded-full px-2.5 py-1 text-sm font-medium border ${styles.accentChip}`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                  </section>
                ))}
              </div>
            </article>

            <article className={`rounded-3xl p-6 border shadow-lg ${styles.card}`}>
              <h2 className={`mb-4 flex items-center gap-2 text-xl font-bold ${styles.sectionTitle}`}>
                <GraduationIcon className={`h-5 w-5 ${isDark ? "text-cyan-300" : "text-cyan-700"}`} />
                {labels.education}
              </h2>
              <div className="space-y-3">
                {education.map((item) => (
                  <div key={item.degree} className={`rounded-2xl border p-3 ${styles.subtleCard}`}>
                    <h3 className={`text-base font-semibold ${styles.sectionTitle}`}>{item.degree}</h3>

                    <div
                      className={`inline-flex items-center gap-1  py-1 text-sm font-semibold ${styles.periodText}`}
                    >
                      <CalendarIcon className="h-3.5 w-3.5" />
                      <span>{item.period}</span>
                    </div>

                    <p className={`mt-1 text-base ${styles.mutedText}`}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`transition-all duration-200 hover:underline underline-offset-4 ${styles.linkStyle}`}
                      >
                        {item.institution}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </article>


            <div className="grid gap-6 xl:grid-cols-2">
              <div className="space-y-6">
              </div>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
