import Image from "next/image";
import { JSX } from 'react';

type IconProps = {
  className?: string;
};

type Experience = {
  role: string;
  company: string;
  period: string;
  contract?: string;
  description: string;
  contributions: string[];
  technologies: string[];
};

type TechGroup = {
  title: string;
  items: string;
};

type Education = {
  degree: string;
  period: string;
  institution: string;
};

const experiences: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "NAXMEK / BILLET",
    period: "2024 - 2025",
    contract: "Contract",
    description:
      "Fintech platform for digital payments and financial services, enabling real-time transactions, customer onboarding, and regulatory compliance through integrations with banking systems (e.g., Banco BHD).",
    contributions: [
      "Improved developer productivity with high-fidelity local environments using LocalStack and containerized Redis, PostgreSQL, and DynamoDB.",
      "Enabled secure database access through AWS VPN Client for production-like local development.",
      "Increased automated test coverage in Java Spring Boot and Python serverless services, stabilizing CI/CD in Bitbucket, AWS CodePipeline, and SonarQube.",
      "Reduced SNS/SQS processing errors, improving reliability of asynchronous financial workflows.",
      "Led Java 11 to Java 17 migration strategy for Spring Boot services.",
      "Implemented Redis idempotency controls to eliminate duplicate push notifications.",
      "Implemented serverless customer screening and risk scoring services for KYC, PEP, and watchlist compliance.",
      "Strengthened security for banking integrations by moving sensitive logic to the backend."
    ],
    technologies: [
      "AWS",
      "Java",
      "Python",
      "Spring Boot",
      "Serverless",
      "Docker",
      "Redis",
      "React Native"
    ]
  },
  {
    role: "Senior Software Engineer",
    company: "MEMBER CARE",
    period: "2021 - 2025",
    description:
      "Multi-tenant healthcare platform connecting patients, providers, and care teams through scalable, event-driven architecture.",
    contributions: [
      "Designed and implemented RESTful APIs in .NET/C# with Clean Architecture for maintainability and scalability.",
      "Architected a containerized Worker Service (.NET + Quartz) for scheduled and event-driven jobs with idempotent execution.",
      "Designed time-sensitive, multi-channel workflows using SendGrid, OneSignal, Twilio, and SignalR.",
      "Architected queue-based processing with Azure Service Bus to offload heavy workloads from Web APIs.",
      "Enhanced the Chronic Care Management module with dashboards and reporting in Excel/PDF.",
      "Contributed to RAG-based AI solutions and plugins using Semantic Kernel, Azure OpenAI, and Azure AI Search."
    ],
    technologies: [
      ".NET",
      "C#",
      "Azure",
      "React",
      "Next.js",
      "SQL Server",
      "Cosmos DB"
    ]
  },
  {
    role: "IT Solutions Architect / Project Lead",
    company: "GRUPO UNIVERSAL",
    period: "2008 - 2020",
    description:
      "Leading insurance group in the Dominican Republic specializing in General Insurance and Health services.",
    contributions: [
      "Contributed to enterprise digital transformation by migrating core insurance services from legacy Oracle systems to Microsoft Azure.",
      "Designed integrations across General Insurance and Health/ARS platforms, enabling a unified 360-degree customer view for 500,000+ affiliates.",
      "Supported enterprise data integration and ETL pipelines using SAS.",
      "Produced UML models and technical documentation to align architecture across teams.",
      "Participated in technical evaluation and vendor selection for new business units.",
      "Earlier role: Systems Analyst supporting core insurance platforms (2008 - 2012)."
    ],
    technologies: [
      "ASP.NET",
      "C#",
      "SQL Server",
      "Oracle",
      "Microsoft Azure",
      "SAS",
      "Enterprise Architect"
    ]
  },
  {
    role: "IT Instructor",
    company: "UNIBE / ITLA",
    period: "2008 - 2019",
    description:
      "Higher-education institutions focused on information technology disciplines.",
    contributions: [
      "Taught programming courses (C#, Java) and database fundamentals.",
      "Provided technical training to instructors and students."
    ],
    technologies: ["C#", "Java", "Databases", "Technical Training"]
  }
];

const techGroups: TechGroup[] = [
  { title: "Backend", items: ".NET / C# / REST APIs / Spring Boot / Java / Python" },
  { title: "Frontend", items: "React / Next.js / TypeScript / React Native" },
  { title: "Cloud & DevOps", items: "AWS / Azure / Docker / CI/CD" },
  { title: "Architecture", items: "Microservices / Event-Driven / Serverless" },
  { title: "Databases", items: "SQL Server / PostgreSQL / DynamoDB / Cosmos DB / Oracle" }
];

const education: Education[] = [
  {
    degree: "Bachelor's Degree in Information and Communication Technologies (ICT)",
    period: "2007 - 2011",
    institution: "Iberoamerican University (UNIBE)"
  },
  {
    degree: "Industrial Electronics Technologist (Digital Systems)",
    period: "2003 - 2007",
    institution: "Loyola Polytechnical Institute (IPL)"
  }
];

const continuingEducation: string[] = [
  "Docker & Kubernetes",
  "Design Patterns in C#",
  "Spring Boot & Hibernate",
  "Advanced React & Next.js"
];

function MailIcon({ className = "h-4 w-4" }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M3 6h18v12H3z" />
      <path d="m4 7 8 7 8-7" />
    </svg>
  );
}

function PhoneIcon({ className = "h-4 w-4" }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M6.5 3.5 4 6a2 2 0 0 0-.3 2.4A35 35 0 0 0 15.6 20.3 2 2 0 0 0 18 20l2.5-2.5a2 2 0 0 0 .2-2.6l-1.8-2.3a2 2 0 0 0-2.5-.6l-1.7.9a2 2 0 0 1-2.2-.3l-2.2-2.2a2 2 0 0 1-.3-2.2l.9-1.7a2 2 0 0 0-.6-2.5L9.1 3.3a2 2 0 0 0-2.6.2Z" />
    </svg>
  );
}

function GithubIcon({ className = "h-4 w-4" }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4a3.1 3.1 0 0 0-1.3-1.7c-1-.6.1-.6.1-.6a2.5 2.5 0 0 1 1.9 1.3 2.5 2.5 0 0 0 3.5 1 2.5 2.5 0 0 1 .8-1.6c-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.5 1.3-3.3a4.8 4.8 0 0 1 .1-3.2s1.1-.3 3.5 1.3a12 12 0 0 1 6.4 0c2.4-1.6 3.5-1.3 3.5-1.3.5 1 .5 2.3.1 3.2.8.8 1.3 2 1.3 3.3 0 4.6-2.8 5.6-5.5 5.9a2.9 2.9 0 0 1 .8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function SummaryIcon({ className = "h-4 w-4" }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 5h16v14H4z" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </svg>
  );
}

function ExperienceIcon({ className = "h-4 w-4" }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M3 7h18v13H3z" />
      <path d="M8 7V5h8v2" />
      <path d="M3 12h18" />
    </svg>
  );
}

function ChipIcon({ className = "h-4 w-4" }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
    </svg>
  );
}

function GraduationIcon({ className = "h-4 w-4" }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="m2 9 10-5 10 5-10 5-10-5Z" />
      <path d="M6 11v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4" />
    </svg>
  );
}

function BookIcon({ className = "h-4 w-4" }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 5a2 2 0 0 1 2-2h14v18H6a2 2 0 0 1-2-2V5Z" />
      <path d="M8 3v18" />
    </svg>
  );
}

function CalendarIcon({ className = "h-4 w-4" }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}

export default function Home(): JSX.Element {
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
