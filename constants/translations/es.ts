import type { CvDictionary } from "@/models/cv";

export const cvEs: CvDictionary = {
  locale: "es",
  metadata: {
    title: "Juan Miguel Paulino Carpio | CV Ingeniero de Software Senior",
    description: "Currículum vitae de Juan Miguel Paulino Carpio, Ingeniero de Software Senior con más de 15 años de experiencia en .NET, Java, Python, Next.js, AWS y Azure en fintech, seguros y salud.",
    openGraphTitle: "Juan Miguel Paulino Carpio | CV Ingeniero de Software Senior",
    openGraphDescription: "Experiencia profesional, stack técnico y formación académica de Juan Miguel Paulino Carpio.",
    openGraphLocale: "es_ES",
    twitterTitle: "Juan Miguel Paulino Carpio | CV Ingeniero de Software Senior",
    twitterDescription: "Experiencia profesional, stack técnico y formación académica de Juan Miguel Paulino Carpio.",
  },
  pdfFileName: "Curriculum - Juan Miguel Paulino - ES.pdf",
  labels: {
    curriculumVitae: "Currículum",
    themeLight: "Modo claro",
    themeDark: "Modo oscuro",
    language: "Idioma",
    coreStack: "Stack Principal",
    professionalSummary: "Resumen Profesional",
    experience: "Experiencia",
    coreSkills: "Habilidades Principales",
    education: "Formación Académica",
    courses: "Cursos y Certificaciones",
    certificate: "Certificado",
    download: "Descargar",
  },
  profile: {
    username: "juanmiguel431",
    name: "Juan Miguel Paulino Carpio",
    role: "Ingeniero de Software Senior",
    email: "juanmiguel431@gmail.com",
    phone: "+1 (829) 820-5436",
    github: "github.com/juanmiguel431",
    linkedin: "linkedin.com/in/juanmiguel431",
    profileImageAlt: "Foto de perfil de Juan Miguel Paulino Carpio",
    summary: "Ingeniero de Software Senior con más de 15 años de experiencia desarrollando aplicaciones empresariales y cloud-native utilizando .NET, Java, Python, TypeScript, React, AWS y Azure. Sólida experiencia en sistemas distribuidos y arquitecturas backend escalables, enfocado en construir aplicaciones confiables, seguras y de alto rendimiento con un fuerte énfasis en la experiencia de usuario. Experiencia desarrollando soluciones para las industrias fintech, seguros y salud.",
  },
  techGroups: [
    { title: "Lenguajes de Programación", items: "C# / Java / Python / TypeScript" },
    { title: "Backend", items: ".NET / Spring Boot" },
    { title: "Frontend", items: "React / Next.js / React Native" },
    { title: "Arquitecturas", items: "Microservicios / Monolito Modular / SaaS Multi-tenant / Basada en eventos" },
    { title: "Cloud & DevOps", items: "AWS / Azure / Docker / Kubernetes / Automatización CI/CD" },
    { title: "Base de datos", items: "SQL Server / PostgreSQL / DynamoDB / Cosmos DB / Oracle Database" },
  ],
  experiences: [
    {
      company: "Member Care",
      url: "https://www.membercare.net",
      description: "Plataforma de salud multi-tenant que conecta pacientes, proveedores y equipos de cuidado con una arquitectura escalable orientada a eventos.",
      roles: [
        {
          name: "Senior Software Engineer",
          period: "Sep 2020 - Ene 2026",
          periodLength: "5 años 5 meses",
          contributions: [
            "Desarrollé APIs RESTful utilizando .NET/C#, con enfoque en mantenibilidad, escalabilidad y principios de código limpio.",
            "Arquitecté un Worker Service contenerizado (.NET + Quartz) para orquestar procesos en segundo plano programados y orientados a eventos, con ejecución idempotente para una recuperación confiable ante fallos.",
            "Diseñé flujos de notificaciones multicanal sensibles al tiempo (recordatorios, monitoreo y firma de documentos) utilizando SendGrid, OneSignal, Twilio y SignalR, garantizando entregas precisas entre distintas zonas horarias.",
            "Arquitecté procesamiento basado en colas utilizando Azure Service Bus, descargando tareas pesadas de las Web APIs y mejorando la escalabilidad y capacidad de respuesta del sistema.",
            "Mejoré el módulo de Chronic Care Management (CCM) mediante Dashboards analíticos y reportes en Excel/PDF.",
            "Contribuí a iniciativas de IA diseñando e implementando soluciones basadas en RAG y plugins de IA utilizando Semantic Kernel, Azure OpenAI y Azure AI Search, habilitando respuestas contextualizadas y acceso seguro a datos de clientes.",
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
          ]
        }
      ]
    },
    {
      company: "Billet",
      url: "https://billet.do",
      contract: true,
      description: "Plataforma fintech para pagos digitales y servicios financieros, habilitando transacciones en tiempo real, onboarding de clientes y cumplimiento regulatorio mediante integraciones con sistemas bancarios (p. ej., Banco BHD).",
      roles: [
        {
          name: "Senior Software Engineer",
          period: "Sep 2024 - Dic 2025",
          periodLength: "1 año 4 meses",
          contributions: [
            "Mejoré la productividad de los desarrolladores al habilitar entornos locales de alta fidelidad utilizando LocalStack y bases de datos contenerizadas (Redis, PostgreSQL, DynamoDB).",
            "Incrementé la cobertura de pruebas automatizadas en servicios Serverless desarrollados en Java (Spring Boot) y Python, mejorando la confiabilidad del CI/CD con Bitbucket, AWS CodePipeline y SonarQube.",
            "Lideré la migración de servicios Spring Boot de Java 11 a 17, reduciendo deuda técnica y optimizando el mantenimiento.",
            "Mejoré la confiabilidad de flujos financieros asíncronos al reducir errores de procesamiento en SNS/SQS e implementar controles de idempotencia basados en Redis.",
            "Desarrollé servicios de evaluación de clientes y riesgo para flujos de cumplimiento (KYC, PEP, listas de vigilancia).",
            "Reforcé la seguridad de integraciones bancarias trasladando lógica sensible de procesamiento al Backend."
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
          ],
        }
      ],
    },
    {
      company: "Grupo Universal",
      url: "https://universal.com.do",
      description: "Uno de los principales grupos financieros en la República Dominicana que ofrece servicios en seguros, salud, inversiones y soluciones de retiro.",
      roles: [
        {
          name: "Arquitecto de Soluciones",
          period: "Ene 2018 - Nov 2020",
          periodLength: "2 años 11 meses",
          contributions: [
            "Contribuí a la transformación digital empresarial migrando servicios core de seguros desde sistemas Oracle legacy hacia Microsoft Azure.",
            "Desarrollé tableros analíticos y reportes utilizando Microsoft Power BI, integrando fuentes de datos heterogéneas como Oracle Database y Microsoft SQL Server para fortalecer la toma de decisiones basada en datos en toda la organización.",
            "Produje modelos UML y documentación técnica para alinear arquitectura entre equipos.",
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
          ]
        },
        {
          name: "Líder de Proyectos",
          period: "Ene 2012 - Dic 2017",
          periodLength: "6 años",
          contributions: [
            "Diseñé integraciones entre plataformas de Seguros Generales y Salud/ARS, habilitando una vista 360 unificada para más de 500,000 afiliados.",
            "Apoyé integración de datos empresarial y pipelines ETL usando SAS.",
            "Participé en iniciativas de evaluación técnica y selección de proveedores para nuevas unidades de negocio, contribuyendo posteriormente a las integraciones de sistemas."
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
          ]
        },
        {
          name: "Analista de Sistemas",
          period: "Nov 2008 - Dic 2011",
          periodLength: "3 años 2 meses",
          contributions: [
            "Gestioné incidentes en producción, corrección de errores y actividades de mantenimiento para plataformas core de seguros desarrolladas con Oracle Forms & Reports.",
            "Colaboré con usuarios para investigar incidencias, validar requerimientos y coordinar pruebas UAT y despliegues a producción.",
            "Elaboré documentación técnica y entregables de despliegue, cumpliendo consistentemente con los objetivos de resolución de incidentes y satisfacción del cliente.",
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
      company: "Plataforma de Campaña Política",
      url: "",
      description: "Plataforma web a la medida desarrollada para un movimiento político presidencial con el objetivo de gestionar la inscripción de miembros, el seguimiento del crecimiento regional y campañas de comunicación segmentadas.",
      roles: [
        {
          name: "Senior Software Engineer",
          period: "Oct 2018 - Mar 2020",
          periodLength: "1 año 6 meses",
          contributions: [
            "Diseñé y desarrollé una plataforma Web Responsive optimizada para flujos de trabajo en computadoras, tabletas y dispositivos móviles, orientada a soportar operaciones de inscripción de campañas políticas a gran escala.",
            "Implementé un sistema jerárquico de referencias de miembros, permitiendo a los administradores medir el rendimiento de reclutamiento y visualizar el crecimiento regional por provincia.",
            "Construí funcionalidades de segmentación de audiencia y notificaciones para campañas de comunicación dirigidas según grupos y regiones geográficas.",
            "Integré WordPress como portal de gestión de contenido para publicar noticias y actualizaciones del movimiento.",
            "Gestioné el despliegue y mantenimiento de infraestructura Linux en servidores de DigitalOcean.",
            "Integré Mailgun para la entrega de correos transaccionales y campañas de comunicación masiva.",
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
      company: "Instituto Tecnológico de las Américas - ITLA",
      url: "https://itla.edu.do",
      description: "Un instituto técnico líder en la República Dominicana, especializado en tecnologías de la información, desarrollo de software, ciberseguridad e innovación digital.",
      roles: [
        {
          name: "Docente de TI",
          period: "Jun 2018 - Mar 2019",
          periodLength: "10 meses",
          contributions: [
            "Impartí cursos de programación en C#, Java y fundamentos de bases de datos a estudiantes con diversos niveles técnicos.",
            "Desarrollé materiales de aprendizaje prácticos y orientados a principiantes para simplificar conceptos complejos de programación y mejorar la participación de los estudiantes.",
          ],
          technologies: ["C#", "Java", "MySQL", "Google Classroom"],
        }
      ]
    },
    {
      company: "Universidad Iberoamericana - UNIBE",
      url: "https://www.unibe.edu.do",
      description: "Universidad privada en la República Dominicana reconocida por sus programas en tecnología, ingeniería, negocios y ciencias de la salud.",
      roles: [
        {
          name: "Instructor Técnico",
          period: "Ene 2008 - Oct 2008",
          periodLength: "10 meses",
          contributions: [
            "Impartí sesiones de capacitación técnica para instructores y estudiantes, traduciendo conceptos técnicos en guías accesibles y fáciles de seguir.",
            "Brindé soporte e inducción en herramientas y flujos de trabajo educativos basados en Moodle.",
          ],
          technologies: ["Moodle"],
        }
      ]
    },
  ],
  education: [
    {
      degree: "Ingeniería en Tecnologías de la Información y Comunicación",
      period: "2007 - 2011",
      institution: "Universidad Iberoamericana (UNIBE)",
      url: "https://www.unibe.edu.do",
    },
    {
      degree: "Tecnólogo en Electrónica Industrial (Sistemas Digitales)",
      period: "2003 - 2007",
      institution: "Instituto Politécnico Loyola (IPL)",
      url: "https://ipl.edu.do",
    },
  ],
  courses: [
    {
      name: "Patrones de Diseño con C# y .NET",
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
      completedDate: "Ene, 2025",
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
      completedDate: "Dic, 2024",
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
      name: "Diseño Web Responsivo",
      courseUrl: "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-0bd005cc-0935-4c48-9215-22a794dd4b71",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-0bd005cc-0935-4c48-9215-22a794dd4b71.pdf",
      completedDate: "Ene, 2024",
      instructor: "Jonas Schmedtmann",
      duration: "37.5 hrs",
    },
    {
      name: "Programación Orientada a Objetos (JavaScript)",
      courseUrl: "https://www.udemy.com/course/javascript-object-oriented-programming",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-1d1913b4-3104-4f02-8d57-3abf01ca34d8",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-1d1913b4-3104-4f02-8d57-3abf01ca34d8.pdf",
      completedDate: "Dic, 2023",
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
      name: "React Native - Avanzado",
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
      completedDate: "Ago, 2023",
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
      completedDate: "Ago, 2023",
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
      name: "React & Typescript - Portafolio",
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
      name: "Microservicios & .NET Core",
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
      name: "C# Avanzado",
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
      name: "C# Intermedio: POO",
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
      name: "C# Fundamentos",
      courseUrl: "https://www.udemy.com/course/csharp-tutorial-for-beginners",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-519d2ea4-17f2-411d-88f8-1d2da3b17cc5",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-519d2ea4-17f2-411d-88f8-1d2da3b17cc5.pdf",
      completedDate: "Ago, 2022",
      instructor: "Mosh Hamedani",
      duration: "5.5 hrs",
    },
    {
      name: "Pruebas Unitarias & C#",
      courseUrl: "https://www.udemy.com/course/unit-testing-csharp",
      company: "Udemy",
      companyUrl: "https://www.udemy.com",
      certificateUrl: "https://www.udemy.com/certificate/UC-31581a9a-9dfd-4074-91c8-4caecdf2668b",
      certificatePdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-31581a9a-9dfd-4074-91c8-4caecdf2668b.pdf",
      completedDate: "Ago 2022",
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
      completedDate: "Ago, 2022",
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
      completedDate: "Ago, 2022",
      instructor: "Mosh Hamedani",
      duration: "7.5 hrs",
    },
    {
      name: "Administrador de Microsoft Azure",
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
      completedDate: "Ago, 2019",
      instructor: "Enmanuel Toribio",
      duration: "40 hrs",
    },
    {
      name: "Lenguaje Unificado de Modelado (UML)",
      courseUrl: "",
      company: "Argentum",
      companyUrl: "https://www.argentuminc.com",
      certificateUrl: "",
      certificatePdfUrl: "/courses/Unified Modeling Language (UML).pdf",
      completedDate: "Dic, 2018",
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
      name: "Código Limpio",
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
