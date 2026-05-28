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
    download: "Descargar",
  },
  profile: {
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
    { title: "Arquitecturas", items: "Microservicios / Monolito Modular / SaaS Multi-tenant / Basada en eventos / Serverless" },
    { title: "Cloud & DevOps", items: "AWS / Azure / Docker / Kubernetes / Automatización CI/CD" },
    { title: "Base de datos", items: "SQL Server / PostgreSQL / DynamoDB / Cosmos DB / Oracle Database" },
  ],
  experiences: [
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
  ]
};
