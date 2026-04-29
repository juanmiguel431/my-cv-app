import type { CvDictionary } from "@/models/cv";

export const cvEn: CvDictionary = {
  locale: "en",
  metadata: {
    title: "Juan Miguel Paulino Carpio | Senior Software Engineer CV",
    description:
      "Curriculum vitae of Juan Miguel Paulino Carpio, Senior Software Engineer with 15+ years of experience in .NET, Java, Python, Next.js, AWS, and Azure across fintech, insurance, and healthcare.",
    openGraphTitle: "Juan Miguel Paulino Carpio | Senior Software Engineer CV",
    openGraphDescription:
      "Professional experience, technical stack, and education of Juan Miguel Paulino Carpio.",
    openGraphLocale: "en_US",
    twitterTitle: "Juan Miguel Paulino Carpio | Senior Software Engineer CV",
    twitterDescription:
      "Professional experience, technical stack, and education of Juan Miguel Paulino Carpio.",
  },
  labels: {
    curriculumVitae: "Curriculum Vitae",
    themeLight: "Light mode",
    themeDark: "Dark mode",
    language: "Language",
    coreStack: "Core Stack",
    professionalSummary: "Professional Summary",
    experience: "Experience",
    technologies: "Technologies",
    education: "Education",
    continuingEducation: "Continuing Education",
  },
  profile: {
    name: "Juan Miguel Paulino Carpio",
    role: "Senior Software Engineer",
    email: "juanmiguel431@gmail.com",
    phone: "+1 (829) 820-5436",
    github: "github.com/juanmiguel431",
    linkedin: "linkedin.com/in/juanmiguel431",
    profileImageAlt: "Juan Miguel Paulino Carpio profile picture",
    summary:
      "I am a Software Engineer with over 15 years of experience developing solutions in the financial, insurance, and healthcare sectors. I specialize in .NET (C#), Java, Python, TypeScript, and React, with experience deploying applications on AWS and Azure. I focus on building reliable, scalable, user-centered platforms and continuously improving the user experience. I am interested in roles where I can contribute both as a developer and to architectural decisions.",
    coreStack: [".NET", "Java", "Python", "React", "Next.js", "AWS", "Azure"],
  },
  experiences: [
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
        "Strengthened security for banking integrations by moving sensitive logic to the backend.",
      ],
      technologies: [
        "AWS",
        "Java",
        "Python",
        "Spring Boot",
        "Serverless",
        "Docker",
        "Redis",
        "React Native",
      ],
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
        "Contributed to RAG-based AI solutions and plugins using Semantic Kernel, Azure OpenAI, and Azure AI Search.",
      ],
      technologies: [".NET", "C#", "Azure", "React", "Next.js", "SQL Server", "Cosmos DB"],
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
        "Earlier role: Systems Analyst supporting core insurance platforms (2008 - 2012).",
      ],
      technologies: [
        "ASP.NET",
        "C#",
        "SQL Server",
        "Oracle",
        "Microsoft Azure",
        "SAS",
        "Enterprise Architect",
      ],
    },
    {
      role: "IT Instructor",
      company: "UNIBE / ITLA",
      period: "2008 - 2019",
      description: "Higher-education institutions focused on information technology disciplines.",
      contributions: [
        "Taught programming courses (C#, Java) and database fundamentals.",
        "Provided technical training to instructors and students.",
      ],
      technologies: ["C#", "Java", "Databases", "Technical Training"],
    },
  ],
  techGroups: [
    { title: "Backend", items: ".NET / C# / REST APIs / Spring Boot / Java / Python" },
    { title: "Frontend", items: "React / Next.js / TypeScript / React Native" },
    { title: "Cloud & DevOps", items: "AWS / Azure / Docker / CI/CD" },
    { title: "Architecture", items: "Microservices / Event-Driven / Serverless" },
    { title: "Databases", items: "SQL Server / PostgreSQL / DynamoDB / Cosmos DB / Oracle" },
  ],
  education: [
    {
      degree: "Bachelor's Degree in Information and Communication Technologies (ICT)",
      period: "2007 - 2011",
      institution: "Iberoamerican University (UNIBE)",
    },
    {
      degree: "Industrial Electronics Technologist (Digital Systems)",
      period: "2003 - 2007",
      institution: "Loyola Polytechnical Institute (IPL)",
    },
  ],
  continuingEducation: [
    "Docker & Kubernetes",
    "Design Patterns in C#",
    "Spring Boot & Hibernate",
    "Advanced React & Next.js",
  ],
};
