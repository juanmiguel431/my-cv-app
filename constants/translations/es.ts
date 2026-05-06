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
    coreSkills: "Habilidades Principales",
    education: "Formación Académica",
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
      "Ingeniero de Software Senior con más de 15 años de experiencia diseñando y desarrollando soluciones escalables para las industrias financiera, de seguros y de salud. Experiencia en .NET (C#), Java, Python, TypeScript y React, combinada con conocimientos en la nube en AWS y Azure. Sólida trayectoria en la construcción de plataformas confiables, de alto rendimiento y centradas en el usuario, contribuyendo además a la arquitectura de software y a la toma de decisiones técnicas.",
  },
  experiences: [
    {
      role: "Senior Software Engineer",
      company: "BILLET",
      period: "2024 - 2025",
      contract: true,
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
      role: "Líder de Proyectos",
      company: "GRUPO UNIVERSAL",
      period: "2011 - 2020",
      description:
        "Uno de los principales grupos financieros y de seguros en la República Dominicana que ofrece servicios en seguros, salud, inversiones y soluciones de retiro.",
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
      role: "Analista de Sistemas",
      company: "SEGUROS UNIVERSAL",
      period: "2008 - 2011",
      description:
        "Es una filial del Grupo Universal especializada en seguros de automóviles, propiedades, incendios, marítimos y otros productos de seguros de riesgos comerciales.",
      contributions: [
        "Gestioné la resolución de incidentes en producción y corrección de errores de extremo a extremo para plataformas centrales de seguros.",
        "Colaboré directamente con usuarios de negocio para investigar problemas reportados, validar requerimientos y asegurar la satisfacción del cliente.",
        "Coordiné pruebas de aceptación de usuario (UAT) y actividades de liberación a producción para correcciones y mejoras de aplicaciones.",
        "Elaboré documentación técnica y entregables de despliegue para soportar liberaciones controladas en producción.",
        "Cumplí consistentemente con los objetivos de desempeño basados en métricas de cierre de incidentes e indicadores de satisfacción del cliente."
      ],
      technologies: [
        "Oracle Forms & Reports",
        "Oracle Database",
      ],
    },
    {
      role: "Docente de TI",
      company: "INSTITUTO TECNOLÓGICO DE LAS AMÉRICAS - ITLA",
      period: "2019",
      description: "Un instituto técnico líder en la República Dominicana, especializado en tecnologías de la información, desarrollo de software, ciberseguridad e innovación digital.",
      contributions: [
        "Impartí cursos de programación en C#, Java y fundamentos de bases de datos a estudiantes con diversos niveles técnicos.",
        "Desarrollé materiales de aprendizaje prácticos y orientados a principiantes para simplificar conceptos complejos de programación y mejorar la participación de los estudiantes.",
      ],
      technologies: ["C#", "Java", "MySQL", "Google Classroom"],
    },
    {
      role: "Instructor Técnico",
      company: "UNIVERSIDAD IBEROAMERICANA - UNIBE",
      period: "2008",
      description: "Universidad privada en la República Dominicana reconocida por sus programas en tecnología, ingeniería, negocios y ciencias de la salud.",
      contributions: [
        "Impartí sesiones de capacitación técnica para instructores y estudiantes, traduciendo conceptos técnicos en guías accesibles y fáciles de seguir.",
        "Brindé soporte e inducción en herramientas y flujos de trabajo educativos basados en Moodle.",
      ],
      technologies: ["Moddle"],
    },
  ],
  techGroups: [
    { title: "Ingeniería de Software", items: "Desarrollo web Full-Stack / Diseño y Desarrollo de APIs Backend" },
    { title: "Arquitecturas", items: "Microservicios / Basada en eventos / Serverless" },
    { title: "Backend", items: ".NET / Spring Boot" },
    { title: "Frontend", items: "React / Next.js / React Native" },
    { title: "Lenguajes de Programación", items: "C# / Java / Python / TypeScript" },
    { title: "Base de datos", items: "Modelado de Datos (SQL y NoSQL) / SQL Server / PostgreSQL / Amazon DynamoDB / Azure Cosmos DB / Oracle" },
    { title: "Cloud & DevOps", items: "AWS / Azure / Docker / Kubernetes / Automatización CI/CD" },
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
  ]
};
