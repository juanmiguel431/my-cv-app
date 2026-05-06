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
  labels: {
    curriculumVitae: "Curriculum Vitae",
    themeLight: "Light mode",
    themeDark: "Dark mode",
    language: "Language",
    coreStack: "Core Stack",
    professionalSummary: "Professional Summary",
    experience: "Work Experience",
    coreSkills: "Core Skills",
    education: "Education",
  },
  profile: {
    name: "Juan Miguel Paulino Carpio",
    role: "Senior Software Engineer",
    email: "juanmiguel431@gmail.com",
    phone: "+1 (829) 820-5436",
    github: "github.com/juanmiguel431",
    linkedin: "linkedin.com/in/juanmiguel431",
    profileImageAlt: "Juan Miguel Paulino Carpio profile picture",
    summary: "Senior Software Engineer with over 15 years of experience designing and developing scalable solutions for the financial, insurance, and healthcare industries. Expertise in .NET (C#), Java, Python, TypeScript, and React, combined with cloud experience across AWS and Azure. Strong background in building reliable, high-performance, user-centered platforms while contributing to software architecture and technical decision-making.",
  },
  experiences: [
    {
      company: "Billet",
      contract: true,
      description: "Fintech platform for digital payments and financial services, enabling real-time transactions, customer onboarding, and regulatory compliance through integrations with banking systems (e.g., Banco BHD).",
      roles: [
        {
          name: "Senior Software Engineer",
          period: "2024 - 2025",
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
          ]
        }
      ]
    },
    {
      company: "Member Care",
      description: "Multi-tenant healthcare platform connecting patients, providers, and care teams through scalable, event-driven architecture.",
      roles: [
        {
          name: "Senior Software Engineer",
          period: "2021 - 2025",
          contributions: [
            "Designed and implemented RESTful APIs in .NET/C# with Clean Architecture for maintainability and scalability.",
            "Architected a containerized Worker Service (.NET + Quartz) for scheduled and event-driven jobs with idempotent execution.",
            "Designed time-sensitive, multi-channel workflows using SendGrid, OneSignal, Twilio, and SignalR.",
            "Architected queue-based processing with Azure Service Bus to offload heavy workloads from Web APIs.",
            "Enhanced the Chronic Care Management module with dashboards and reporting in Excel/PDF.",
            "Contributed to RAG-based AI solutions and plugins using Semantic Kernel, Azure OpenAI, and Azure AI Search.",
          ],
          technologies: [".NET", "C#", "Azure", "React", "Next.js", "SQL Server", "Cosmos DB"],
        }
      ]
    },
    {
      company: "Grupo Universal",
      description: "One of the leading financial groups in the Dominican Republic, offering services across insurance, health, investments, and retirement solutions.",
      roles: [
        {
          name: "Project Lead",
          period: "2011 - 2020",
          contributions: [
            "Contributed to enterprise digital transformation by migrating core insurance services from legacy Oracle systems to Microsoft Azure.",
            "Designed integrations across General Insurance and Health/ARS platforms, enabling a unified 360-degree customer view for 500,000+ affiliates.",
            "Supported enterprise data integration and ETL pipelines using SAS.",
            "Produced UML models and technical documentation to align architecture across teams.",
            "Participated in technical evaluation and vendor selection for new business units.",
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
          name: "Systems Analyst",
          period: "2008 - 2011",
          contributions: [
            "Managed end-to-end resolution of production incidents and bug fixes for core insurance platforms.",
            "Collaborated directly with business users to investigate reported issues, validate requirements, and ensure customer satisfaction.",
            "Coordinated user acceptance testing (UAT) and production release activities for application fixes and enhancements.",
            "Produced technical documentation and deployment deliverables to support controlled production releases.",
            "Consistently met performance targets based on incident closure metrics and client satisfaction indicators."
          ],
          technologies: [
            "Oracle Forms & Reports",
            "Oracle Database",
          ]
        }
      ]
    },
    {
      company: "Technological Institute of the Americas - ITLA",
      description: "A leading technical institute in the Dominican Republic specializing in information technology, software development, cybersecurity, and digital innovation programs.",
      roles: [
        {
          name: "IT Instructor",
          period: "2019",
          contributions: [
            "Taught programming courses in C#, Java, and database fundamentals to students with varying technical backgrounds.",
            "Developed practical and beginner-friendly learning materials to simplify complex programming concepts and improve student engagement.",
          ],
          technologies: ["C#", "Java", "MySQL", "Google Classroom"]
        }
      ]
    },
    {
      company: "Ibero-American University - UNIBE",
      description: "A private university in the Dominican Republic recognized for its programs in technology, engineering, business, and health sciences.",
      roles: [
        {
          name: "Technical Instructor",
          period: "2008",
          contributions: [
            "Delivered technical training sessions for instructors and students, translating technical concepts into accessible and easy-to-follow guidance.",
            "Provided support and onboarding for Moodle-based educational tools and workflows.",
          ],
          technologies: ["Moddle"],
        }
      ]
    },
  ],
  techGroups: [
    { title: "Software Engineering", items: "Full-Stack Web Development / Backend API Design and Development" },
    { title: "Architectures", items: "Microservices / Event-Driven / Serverless" },
    { title: "Backend", items: ".NET / Spring Boot" },
    { title: "Frontend", items: "React / Next.js / React Native" },
    { title: "Programming Languages", items: "C# / Java / Python / TypeScript" },
    { title: "Database Engineering", items: "SQL and NoSQL Data Modeling / SQL Server / PostgreSQL / Amazon DynamoDB / Azure Cosmos DB / Oracle" },
    { title: "Cloud & DevOps", items: "AWS / Azure / Docker / Kubernetes / CI/CD Automation" },
  ],
  education: [
    {
      degree: "Bachelor's Degree in Information and Communication Technologies (ICT)",
      period: "2007 - 2011",
      institution: "Ibero-American University (UNIBE)",
    },
    {
      degree: "Industrial Electronics Technologist (Digital Systems)",
      period: "2003 - 2007",
      institution: "Loyola Polytechnical Institute (IPL)",
    },
  ]
};
