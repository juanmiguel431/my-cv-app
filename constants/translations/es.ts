import type { CvDictionary } from "@/models/cv";

export const cvEs: CvDictionary = {
  locale: "es",
  metadata: {
    title: "Juan Miguel Paulino Carpio | CV Ingeniero de Software Senior",
    description:
      "Currículum vitae de Juan Miguel Paulino Carpio, Ingeniero de Software Senior con más de 15 años de experiencia en .NET, Java, Python, Next.js, AWS y Azure en fintech, seguros y salud.",
    openGraphTitle: "Juan Miguel Paulino Carpio | CV Ingeniero de Software Senior",
    openGraphDescription:
      "Experiencia profesional, stack técnico y formación académica de Juan Miguel Paulino Carpio.",
    openGraphLocale: "es_ES",
    twitterTitle: "Juan Miguel Paulino Carpio | CV Ingeniero de Software Senior",
    twitterDescription:
      "Experiencia profesional, stack técnico y formación académica de Juan Miguel Paulino Carpio.",
  },
  labels: {
    curriculumVitae: "Currículum Vitae",
    themeLight: "Modo claro",
    themeDark: "Modo oscuro",
    language: "Idioma",
    coreStack: "Stack Principal",
    professionalSummary: "Resumen Profesional",
    experience: "Experiencia",
    technologies: "Tecnologías",
    education: "Formación Académica",
    continuingEducation: "Educación Continua",
  },
  profile: {
    name: "Juan Miguel Paulino Carpio",
    role: "Ingeniero de Software Senior",
    email: "juanmiguel431@gmail.com",
    phone: "+1 (829) 820-5436",
    github: "github.com/juanmiguel431",
    linkedin: "linkedin.com/in/juanmiguel431",
    profileImageAlt: "Foto de perfil de Juan Miguel Paulino Carpio",
    summary:
      "Soy Ingeniero de Software con más de 15 años de experiencia desarrollando soluciones en los sectores financiero, seguros y salud. Me especializo en .NET (C#), Java, Python, TypeScript y React, con experiencia desplegando aplicaciones en AWS y Azure. Me enfoco en construir plataformas confiables, escalables y centradas en el usuario, mejorando continuamente la experiencia de uso. Me interesan roles donde pueda aportar como desarrollador y también en decisiones de arquitectura.",
    coreStack: [".NET", "Java", "Python", "React", "Next.js", "AWS", "Azure"],
  },
  experiences: [
    {
      role: "Senior Software Engineer",
      company: "NAXMEK / BILLET",
      period: "2024 - 2025",
      contract: "Contrato",
      description:
        "Plataforma fintech para pagos digitales y servicios financieros, habilitando transacciones en tiempo real, onboarding de clientes y cumplimiento regulatorio mediante integraciones con sistemas bancarios (p. ej., Banco BHD).",
      contributions: [
        "Mejoré la productividad del equipo con entornos locales de alta fidelidad usando LocalStack y Redis, PostgreSQL y DynamoDB en contenedores.",
        "Habilité acceso seguro a bases de datos mediante AWS VPN Client para desarrollo local similar a producción.",
        "Aumenté la cobertura de pruebas automatizadas en servicios Java Spring Boot y Python serverless, estabilizando CI/CD en Bitbucket, AWS CodePipeline y SonarQube.",
        "Reduje errores de procesamiento SNS/SQS, mejorando la confiabilidad de flujos financieros asíncronos.",
        "Lideré la estrategia de migración de Java 11 a Java 17 para servicios Spring Boot.",
        "Implementé controles de idempotencia con Redis para eliminar notificaciones push duplicadas.",
        "Implementé servicios serverless de evaluación de clientes y scoring de riesgo para cumplimiento KYC, PEP y listas de observación.",
        "Fortalecí la seguridad de integraciones bancarias moviendo lógica sensible al backend.",
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
        "Plataforma de salud multi-tenant que conecta pacientes, proveedores y equipos de cuidado con una arquitectura escalable orientada a eventos.",
      contributions: [
        "Diseñé e implementé APIs REST en .NET/C# con Clean Architecture para mantenibilidad y escalabilidad.",
        "Arquitecté un Worker Service contenedorizado (.NET + Quartz) para procesos programados y orientados a eventos con ejecución idempotente.",
        "Diseñé flujos multicanal sensibles al tiempo usando SendGrid, OneSignal, Twilio y SignalR.",
        "Arquitecté procesamiento por colas con Azure Service Bus para descargar cargas pesadas de las Web APIs.",
        "Fortalecí el módulo de Chronic Care Management con dashboards y reportes en Excel/PDF.",
        "Contribuí a soluciones de IA basadas en RAG y plugins usando Semantic Kernel, Azure OpenAI y Azure AI Search.",
      ],
      technologies: [".NET", "C#", "Azure", "React", "Next.js", "SQL Server", "Cosmos DB"],
    },
    {
      role: "Arquitecto de Soluciones TI / Líder de Proyecto",
      company: "GRUPO UNIVERSAL",
      period: "2008 - 2020",
      description:
        "Grupo asegurador líder en República Dominicana, especializado en Seguros Generales y servicios de salud.",
      contributions: [
        "Contribuí a la transformación digital empresarial migrando servicios core de seguros desde sistemas Oracle legacy hacia Microsoft Azure.",
        "Diseñé integraciones entre plataformas de Seguros Generales y Salud/ARS, habilitando una vista 360 unificada para más de 500,000 afiliados.",
        "Apoyé integración de datos empresarial y pipelines ETL usando SAS.",
        "Produje modelos UML y documentación técnica para alinear arquitectura entre equipos.",
        "Participé en evaluación técnica y selección de proveedores para nuevas unidades de negocio.",
        "Rol previo: Analista de Sistemas dando soporte a plataformas core de seguros (2008 - 2012).",
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
      role: "Instructor TI",
      company: "UNIBE / ITLA",
      period: "2008 - 2019",
      description: "Instituciones de educación superior enfocadas en disciplinas de tecnología.",
      contributions: [
        "Impartí cursos de programación (C#, Java) y fundamentos de bases de datos.",
        "Brindé capacitación técnica a docentes y estudiantes.",
      ],
      technologies: ["C#", "Java", "Bases de Datos", "Capacitación Técnica"],
    },
  ],
  techGroups: [
    { title: "Backend", items: ".NET / C# / REST APIs / Spring Boot / Java / Python" },
    { title: "Frontend", items: "React / Next.js / TypeScript / React Native" },
    { title: "Cloud y DevOps", items: "AWS / Azure / Docker / CI/CD" },
    { title: "Arquitectura", items: "Microservicios / Event-Driven / Serverless" },
    { title: "Bases de Datos", items: "SQL Server / PostgreSQL / DynamoDB / Cosmos DB / Oracle" },
  ],
  education: [
    {
      degree: "Licenciatura en Tecnologías de la Información y Comunicación (TIC)",
      period: "2007 - 2011",
      institution: "Universidad Iberoamericana (UNIBE)",
    },
    {
      degree: "Tecnólogo en Electrónica Industrial (Sistemas Digitales)",
      period: "2003 - 2007",
      institution: "Instituto Politécnico Loyola (IPL)",
    },
  ],
  continuingEducation: [
    "Docker y Kubernetes",
    "Patrones de Diseño en C#",
    "Spring Boot y Hibernate",
    "React Avanzado y Next.js",
  ],
};
