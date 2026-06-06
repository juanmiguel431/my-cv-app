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
    courses: "Courses & Certifications",
    certificate: "Certificate",
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
    { title: "Architectures", items: "Microservices / Modular Monolith / Multi-Tenant SaaS / Event-Driven" },
    { title: "Cloud & DevOps", items: "AWS / Azure / Docker / Kubernetes / CI/CD Automation" },
    { title: "Databases", items: "SQL Server / PostgreSQL / DynamoDB / Cosmos DB / Oracle Database" },
  ],
  experiences: [
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
  ],
  courses: [
    {
      name: "Design Patterns with C# and .NET",
      courseUrl: "https://www.udemy.com/course/design-patterns-csharp-dotnet",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-d140c9a2-bccc-4270-9954-049b2e0ddc88",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-d140c9a2-bccc-4270-9954-049b2e0ddc88.pdf",
      completedDate: "Oct, 2025",
      instructor: "Dmitri Nesteruk",
      duration: "20.5 hrs",
    },
    {
      name: "Docker & Kubernetes",
      courseUrl: "https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-d80ad8f3-8aa9-459c-a3bf-44256e2cf395",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-d80ad8f3-8aa9-459c-a3bf-44256e2cf395.pdf",
      completedDate: "Jan, 2025",
      instructor: "Stephen Grider",
      duration: "22 hrs",
    },
    {
      name: "Spring Boot Unit Testing",
      courseUrl: "https://www.udemy.com/course/spring-boot-unit-testing",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-f52b0eeb-0f3d-41ef-aa5a-094313e9413c",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-f52b0eeb-0f3d-41ef-aa5a-094313e9413c.pdf",
      completedDate: "Dec, 2024",
      instructor: "Chad Darby, Eric Roby",
      duration: "10 hrs",
    },
    {
      name: "Spring Boot 3, Spring 6, Hibernate",
      courseUrl: "https://www.udemy.com/course/spring-hibernate-tutorial",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-5a8a7a96-e8c2-4fa2-a10e-9472b89d0420",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-5a8a7a96-e8c2-4fa2-a10e-9472b89d0420.pdf",
      completedDate: "Nov, 2024",
      instructor: "Chad Darby",
      duration: "33.5 hrs",
    },
    {
      name: "Responsive Web Design",
      courseUrl: "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-0bd005cc-0935-4c48-9215-22a794dd4b71",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-0bd005cc-0935-4c48-9215-22a794dd4b71.pdf",
      completedDate: "Jan, 2024",
      instructor: "Jonas Schmedtmann",
      duration: "37.5 hrs",
    },
    {
      name: "Object Oriented Programming (JavaScript)",
      courseUrl: "https://www.udemy.com/course/javascript-object-oriented-programming",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-1d1913b4-3104-4f02-8d57-3abf01ca34d8",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-1d1913b4-3104-4f02-8d57-3abf01ca34d8.pdf",
      completedDate: "Dec, 2023",
      instructor: "Mosh Hamedani",
      duration: "4 hrs",
    },
    {
      name: "GraphQL & React",
      courseUrl: "https://www.udemy.com/course/graphql-with-react-course",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-70a5ff91-5b44-4f10-a91c-3555a938d9d6",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-70a5ff91-5b44-4f10-a91c-3555a938d9d6.pdf",
      completedDate: "Nov, 2023",
      instructor: "Stephen Grider",
      duration: "13.5 hrs",
    },
    {
      name: "React Native - Advance",
      courseUrl: "https://www.udemy.com/course/react-native-advanced",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-1dba93de-844e-442f-8849-8cd918c0df52",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-1dba93de-844e-442f-8849-8cd918c0df52.pdf",
      completedDate: "Oct, 2023",
      instructor: "Stephen Grider",
      duration: "16.5 hrs",
    },
    {
      name: "React Native",
      courseUrl: "https://www.udemy.com/course/the-complete-react-native-and-redux-course",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-8d6a3a03-b3fb-4065-afca-455dca64431f",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-8d6a3a03-b3fb-4065-afca-455dca64431f.pdf",
      completedDate: "Oct, 2023",
      instructor: "Stephen Grider",
      duration: "38.5 hrs",
    },
    {
      name: "MobX & React",
      courseUrl: "https://www.udemy.com/course/mobx-in-depth-with-react",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-1c194152-bf4b-47e7-a35a-bbae9679f6b4",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-1c194152-bf4b-47e7-a35a-bbae9679f6b4.pdf",
      completedDate: "Aug, 2023",
      instructor: "Georgy Glezer",
      duration: "2.5 hrs",
    },
    {
      name: "Next.js",
      courseUrl: "https://www.udemy.com/course/nextjs-react-the-complete-guide",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-37eb0045-b824-46cf-96e4-58756c05e1cc",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-37eb0045-b824-46cf-96e4-58756c05e1cc.pdf",
      completedDate: "Aug, 2023",
      instructor: "Maximilian Schwarzmüller",
      duration: "25 hrs",
    },
    {
      name: "React Testing Library & Jest",
      courseUrl: "https://www.udemy.com/course/react-testing-library-and-jest",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-ddc26588-cc56-47f0-8f53-85a04bb94f2c",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-ddc26588-cc56-47f0-8f53-85a04bb94f2c.pdf",
      completedDate: "Jun, 2023",
      instructor: "Stephen Grider",
      duration: "7.5 hrs",
    },
    {
      name: "React & Typescript - Portfolio",
      courseUrl: "https://www.udemy.com/course/react-and-typescript-build-a-portfolio-project",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-6a9c3b26-4aee-435a-a280-3733ef0ff664",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-6a9c3b26-4aee-435a-a280-3733ef0ff664.pdf",
      completedDate: "Jun, 2023",
      instructor: "Stephen Grider",
      duration: "29.5 hrs",
    },
    {
      name: "Microservices with .NET Core",
      courseUrl: "https://www.udemy.com/course/net-core-microservices-the-complete-guide-net-6-mvc",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-78361803-78f6-4965-95f4-b4897dd59147",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-78361803-78f6-4965-95f4-b4897dd59147.pdf",
      completedDate: "Nov, 2022",
      instructor: "Bhrugen Patel",
      duration: "11.5 hrs",
    },
    {
      name: "React & Redux",
      courseUrl: "https://www.udemy.com/course/react-redux",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-16391cc1-c1d2-42fd-9017-88c2f897ed53",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-16391cc1-c1d2-42fd-9017-88c2f897ed53.pdf",
      completedDate: "Oct, 2022",
      instructor: "Stephen Grider",
      duration: "52.5 hrs",
    },
    {
      name: "C# Advance",
      courseUrl: "https://www.udemy.com/course/csharp-advanced",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-f5eccba5-b618-4425-9596-60c488d70fff",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-f5eccba5-b618-4425-9596-60c488d70fff.pdf",
      completedDate: "Sep, 2022",
      instructor: "Mosh Hamedani",
      duration: "3 hrs",
    },
    {
      name: "C# Intermediate: OOP",
      courseUrl: "https://www.udemy.com/course/csharp-intermediate-classes-interfaces-and-oop",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-9efbff0a-5c17-426f-a111-943dc13edf4b",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-9efbff0a-5c17-426f-a111-943dc13edf4b.pdf",
      completedDate: "Sep, 2022",
      instructor: "Mosh Hamedani",
      duration: "6 hrs",
    },
    {
      name: "C# Fundamentals",
      courseUrl: "https://www.udemy.com/course/csharp-tutorial-for-beginners",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-519d2ea4-17f2-411d-88f8-1d2da3b17cc5",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-519d2ea4-17f2-411d-88f8-1d2da3b17cc5.pdf",
      completedDate: "Aug, 2022",
      instructor: "Mosh Hamedani",
      duration: "5.5 hrs",
    },
    {
      name: "Unit Testing for C# Developers",
      courseUrl: "https://www.udemy.com/course/unit-testing-csharp",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-31581a9a-9dfd-4074-91c8-4caecdf2668b",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-31581a9a-9dfd-4074-91c8-4caecdf2668b.pdf",
      completedDate: "Aug, 2022",
      instructor: "Mosh Hamedani",
      duration: "6 hrs",
    },
    {
      name: "Entity Framework",
      courseUrl: "https://www.udemy.com/course/entity-framework-tutorial",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-934972f9-f4a0-45f5-b68d-18c3375bd2f8",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-934972f9-f4a0-45f5-b68d-18c3375bd2f8.pdf",
      completedDate: "Aug, 2022",
      instructor: "Mosh Hamedani",
      duration: "6.5 hrs",
    },
    {
      name: "ASP.NET MVC 5",
      courseUrl: "https://www.udemy.com/course/the-complete-aspnet-mvc-5-course",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-4cf7d3df-1cdc-43ba-aeb5-f78373ce77d3",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-4cf7d3df-1cdc-43ba-aeb5-f78373ce77d3.pdf",
      completedDate: "Aug, 2022",
      instructor: "Mosh Hamedani",
      duration: "7.5 hrs",
    },
    {
      name: "Microsoft Azure Administrator",
      courseUrl: "",
      company: "Interactive Technology Group",
      companyUrl: "https://itg.online",
      certificateUrl: "",
      certificatePdfUrl: "/courses/Microsoft Azure Administrator (AZ-103).pdf",
      completedDate: "May, 2020",
      instructor: "Edwin Mora",
      duration: "32 hrs",
    },
    {
      name: "Xamarin.Forms",
      courseUrl: "",
      company: "MegSoft",
      companyUrl: "https://megsoftconsulting.com",
      certificateUrl: "",
      certificatePdfUrl: "/courses/Xamarin.Forms.pdf",
      completedDate: "Aug, 2019",
      instructor: "Enmanuel Toribio",
      duration: "40 hrs",
    },
    {
      name: "Unified Modeling Language (UML)",
      courseUrl: "",
      company: "Argentum",
      companyUrl: "https://www.argentuminc.com",
      certificateUrl: "",
      certificatePdfUrl: "/courses/Unified Modeling Language (UML).pdf",
      completedDate: "Dec, 2018",
      instructor: "Lorenzo Solano",
      duration: "24 hrs",
    },
    {
      name: "Angular 6",
      courseUrl: "",
      company: "MegSoft",
      companyUrl: "https://megsoftconsulting.com",
      certificateUrl: "",
      certificatePdfUrl: "/courses/Angular Academy.pdf",
      completedDate: "Oct, 2018",
      instructor: "Laurent Duveau",
      duration: "3 hrs",
    },
    {
      name: "Clean Code",
      courseUrl: "",
      company: "Argentum",
      companyUrl: "https://www.argentuminc.com",
      certificateUrl: "",
      certificatePdfUrl: "/courses/Clean Code.pdf",
      completedDate: "Sep, 2018",
      instructor: "Lorenzo Solano",
      duration: "40 hrs",
    }
  ]
};
