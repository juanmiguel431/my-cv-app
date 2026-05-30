import type { CvDictionary } from "@/models/cv";

export const cvEn: CvDictionary = {
  locale: "en",
  metadata: {
    title: "Juan Miguel Paulino Carpio | Senior Software Engineer CV",
    description: "Curriculum vitae of Juan Miguel Paulino Carpio, Senior Software Engineer with 15+ years of experience in .NET, Java, Python, Next.js, AWS, and Azure across fintech, insurance, and healthcare.",
    openGraphTitle: "Juan Miguel Paulino Carpio | Senior Software Engineer CV",
    openGraphDescription: "Professional experience, technical stack, and education of Juan Miguel Paulino Carpio.",
    openGraphLocale: "en_US",
    twitterTitle: "Juan Miguel Paulino Carpio | Senior Software Engineer CV",
    twitterDescription: "Professional experience, technical stack, and education of Juan Miguel Paulino Carpio.",
  },
  pdfFileName: "Resume - Juan Miguel Paulino - EN.pdf",
  labels: {
    curriculumVitae: "Resume",
    themeLight: "Light mode",
    themeDark: "Dark mode",
    language: "Language",
    coreStack: "Core Stack",
    professionalSummary: "Professional Summary",
    experience: "Work Experience",
    coreSkills: "Core Skills",
    education: "Education",
    download: "Download",
  },
  profile: {
    username: "juanmiguel431",
    name: "Juan Miguel Paulino Carpio",
    role: "Senior Software Engineer",
    email: "juanmiguel431@gmail.com",
    phone: "+1 (829) 820-5436",
    github: "github.com/juanmiguel431",
    linkedin: "linkedin.com/in/juanmiguel431",
    profileImageAlt: "Juan Miguel Paulino Carpio profile picture",
    summary: "Senior Software Engineer with 15+ years of experience building enterprise and cloud-native applications using .NET, Java, Python, TypeScript, React, AWS, and Azure. Strong background in distributed systems and scalable backend architectures, focused on building reliable, secure, and high-performance applications with a strong emphasis on user experience. Experience delivering solutions across fintech, insurance, and healthcare industries.",
  },
  techGroups: [
    { title: "Programming Languages", items: "C# / Java / Python / TypeScript" },
    { title: "Backend", items: ".NET / Spring Boot" },
    { title: "Frontend", items: "React / Next.js / React Native" },
    { title: "Architectures", items: "Microservices / Modular Monolith / Multi-Tenant SaaS / Event-Driven / Serverless" },
    { title: "Cloud & DevOps", items: "AWS / Azure / Docker / Kubernetes / CI/CD Automation" },
    { title: "Databases", items: "SQL Server / PostgreSQL / DynamoDB / Cosmos DB / Oracle Database" },
  ],
  experiences: [
    {
      company: "Billet",
      url: "https://billet.do",
      contract: true,
      description: "Fintech platform for digital payments and financial services, enabling real-time transactions, customer onboarding, and regulatory compliance through integrations with banking systems (e.g., Banco BHD).",
      roles: [
        {
          name: "Senior Software Engineer",
          period: "Sep 2024 - Dec 2025",
          periodLength: "1 year 4 months",
          contributions: [
            "Improved developer productivity by enabling high-fidelity local environments using LocalStack and containerized databases (Redis, PostgreSQL, DynamoDB).",
            "Increased automated test coverage across Java (Spring Boot) and Python serverless services, improving CI/CD reliability with Bitbucket, AWS CodePipeline, and SonarQube.",
            "Led Java 11 → Java 17 migration efforts for Spring Boot services, reducing technical debt and improving maintainability.",
            "Improved reliability of asynchronous financial workflows by reducing SNS/SQS processing errors and implementing Redis-based idempotency controls.",
            "Developed customer screening and risk scoring services supporting compliance workflows (KYC, PEP, watchlists).",
            "Strengthened security for banking integrations by moving sensitive processing logic to the backend."
          ],
          technologies: [
            // Backend & Languages
            "Java",
            "Spring Boot",
            "Python",

            // Frontend
            "React Native",

            // Cloud & Infrastructure
            "AWS",
            "EC2",
            "Lambda",
            "API Gateway",
            "S3",
            "SNS",
            "SQS",
            "CloudWatch",
            "Parameter Store",
            "Secrets Manager",
            "Cognito",

            // Databases & Caching
            "PostgreSQL",
            "DynamoDB",
            "Redis",

            // DevOps & Deployment
            "Docker",
            "LocalStack",
            "Serverless Framework",
            "CodePipeline",
            "SonarQube",

            // Collaboration & Methodologies
            "Git",
            "Bitbucket",
            "Jira",
            "Confluence",
          ]
        }
      ]
    },
    {
      company: "Member Care",
      url: "https://www.membercare.net",
      description: "Multi-tenant healthcare platform connecting patients, providers, and care teams through scalable, event-driven architecture.",
      roles: [
        {
          name: "Senior Software Engineer",
          period: "Sep 2020 - Jan 2026",
          periodLength: "5 years 5 months",
          contributions: [
            "Developed RESTful APIs using .NET/C#, focusing on maintainability, scalability, and clean code principles.",
            "Architected a containerized Worker Service (.NET + Quartz) for scheduled and event-driven jobs with idempotent execution.",
            "Designed time-sensitive, multi-channel workflows using SendGrid, OneSignal, Twilio, and SignalR.",
            "Architected queue-based processing with Azure Service Bus to offload heavy workloads from Web APIs.",
            "Enhanced the Chronic Care Management module with dashboards and reporting in Excel/PDF.",
            "Contributed to RAG-based AI solutions and plugins using Semantic Kernel, Azure OpenAI, and Azure AI Search.",
          ],
          technologies: [
            // Backend & Languages
            ".NET",
            "C#",

            // AI & LLM
            "Semantic Kernel",
            "OpenAI",
            "RAG",
            "Azure AI Search",

            // Frontend
            "React",
            "Next.js",
            "TypeScript",

            // UI Libraries & State Management
            "Ant Design",
            "MobX",
            "Axios",
            "ApexCharts",

            // Cloud & Azure Services
            "Azure App Service",
            "Azure Service Bus",
            "Azure Service Fabric",
            "Azure Blob Storage",
            "Azure Application Insights",

            // Databases & Caching
            "SQL Server",
            "Cosmos DB",
            "Redis",

            "SignalR",

            // Background Jobs & Processing
            "Quartz.NET",

            // Documents & Reporting
            "GemBox Document",
            "QuestPDF",

            // Notifications & Communication
            "SendGrid",
            "OneSignal",
            "Twilio SMS",

            // DevOps & Tooling
            "Docker",
            "Rush Monorepo",
            "Azure DevOps",
            "Git",
          ],
        }
      ]
    },
    {
      company: "Political Campaign Platform",
      url: "",
      description: "Custom web platform developed for a presidential political movement to manage member enrollment, regional growth tracking, and targeted communication campaigns.",
      roles: [
        {
          name: "Senior Software Engineer",
          period: "Oct 2018 - Mar 2020",
          periodLength: "1 years 6 months",
          contributions: [
            "Designed and developed a responsive web platform optimized for desktop, tablet, and mobile workflows to support large-scale political campaign enrollment operations",
            "Implemented hierarchical member referral tracking, enabling administrators to measure recruitment performance and visualize regional growth by province.",
            "Developed audience segmentation and notification features for targeted communication campaigns based on groups and geographic regions.",
            "Integrated WordPress as a content management portal for publishing campaign news and movement updates.",
            "Managed deployment and maintenance of Linux-based infrastructure on DigitalOcean servers.",
            "Integrated Mailgun for transactional and campaign email delivery workflows.",
          ],
          technologies: [
            "Laravel",
            "PHP",
            "MySQL",
            "Apache",
            "Ubuntu",
            "DigitalOcean",
            "Mailgun",
            "WordPress",
            "JavaScript",
            "jQuery",
            "Materialize CSS",
            "Supervisor",
            "phpMyAdmin",
          ],
        }
      ]
    },
    {
      company: "Grupo Universal",
      url: "https://universal.com.do",
      description: "One of the leading financial groups in the Dominican Republic, offering services across insurance, health, investments, and retirement solutions.",
      roles: [
        {
          name: "Solutions Architect",
          period: "Jan 2018 - Nov 2020",
          periodLength: "2 years 11 months",
          contributions: [
            "Contributed to enterprise digital transformation by migrating core insurance services from legacy Oracle systems to Microsoft Azure.",
            "Developed analytical dashboards and reports using Microsoft Power BI, integrating heterogeneous data sources including Oracle Database and Microsoft SQL Server to enhance data-driven decision-making across the organization.",
            "Produced UML models and technical documentation to align architecture across teams.",
          ],
          technologies: [
            // Backend & Languages
            "C#",
            "ASP.NET",

            // Databases & Data Access
            "Oracle Database",
            "SQL Server",
            "Entity Framework",
            "Dapper",

            // Database Tools & Administration
            "Oracle Enterprise Manager",

            // APIs & Integration
            "SOAP Web Services",

            // Cloud
            "Azure",

            // Reporting & Analytics
            "Microsoft Power BI",
            "SQL Reporting Services (SSRS)",

            // Architecture & Modeling
            "Enterprise Architect",
          ],
        },
        {
          name: "Project Lead",
          period: "Jan 2012 - Dec 2017",
          periodLength: "6 years",
          contributions: [
            "Designed integrations across General Insurance and Health/ARS platforms, enabling a unified 360-degree customer view for 500,000+ affiliates.",
            "Supported enterprise data integration and ETL pipelines using SAS.",
            "Participated in technical evaluation and vendor selection initiatives for new business units, later contributing to system integrations.",
          ],
          technologies: [
            // Backend & Languages
            "C#",
            "ASP.NET",
            "PL/SQL",

            // Databases
            "Oracle Database",
            "SQL Server",

            // Oracle Ecosystem & Tools
            "Oracle Forms & Reports",

            // Infrastructure
            "Internet Information Services (IIS)",

            // Data & Analytics
            "SAS",
            "ETL",
            "Data Warehouse",
          ],
        },
        {
          name: "Systems Analyst",
          period: "Nov 2008 - Dec 2011",
          periodLength: "3 years 2 months",
          contributions: [
            "Managed production incidents, bug fixes, and maintenance activities for core insurance platforms built with Oracle Forms & Reports.",
            "Collaborated with users to investigate issues, validate requirements, and coordinate UAT and production releases.",
            "Produced technical documentation and deployment deliverables while consistently meeting incident resolution and client satisfaction targets.",
          ],
          technologies: [
            // Database & Language
            "Oracle Database",
            "PL/SQL",

            // Oracle Ecosystem & Tools
            "Oracle Forms & Reports",
          ]
        }
      ]
    },
    {
      company: "Technological Institute of the Americas - ITLA",
      url: "https://itla.edu.do",
      description: "A leading technical institute in the Dominican Republic specializing in information technology, software development, cybersecurity, and digital innovation programs.",
      roles: [
        {
          name: "IT Instructor",
          period: "Jun 2018 - Mar 2019",
          periodLength: "10 months",
          contributions: [
            "Taught programming courses in C#, Java, and database fundamentals.",
            "Developed practical and beginner-friendly learning materials to simplify complex programming concepts and improve student engagement.",
          ],
          technologies: ["C#", "Java", "MySQL", "Google Classroom"]
        }
      ]
    },
    {
      company: "Ibero-American University - UNIBE",
      url: "https://www.unibe.edu.do",
      description: "A private university in the Dominican Republic recognized for its programs in technology, engineering, business, and health sciences.",
      roles: [
        {
          name: "Technical Instructor",
          period: "Jan 2008 - Oct 2008",
          periodLength: "10 months",
          contributions: [
            "Delivered technical training sessions for instructors and students, translating technical concepts into accessible and easy-to-follow guidance.",
            "Provided support and onboarding for Moodle-based educational tools and workflows.",
          ],
          technologies: ["Moodle"],
        }
      ]
    },
  ],
  education: [
    {
      degree: "Bachelor’s Degree in Information and Communication Technology Engineering",
      period: "2007 - 2011",
      institution: "Ibero-American University (UNIBE)",
      url: "https://www.unibe.edu.do",
    },
    {
      degree: "Associate Degree in Industrial Electronics (Digital Systems)",
      period: "2003 - 2007",
      institution: "Loyola Polytechnical Institute (IPL)",
      url: "https://ipl.edu.do",
    },
  ]
};
