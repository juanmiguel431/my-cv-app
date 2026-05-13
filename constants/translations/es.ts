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
    curriculumVitae: "Currículum Vitae",
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
    summary: "Ingeniero de Software Senior con más de 15 años de experiencia diseñando y desarrollando soluciones escalables para las industrias financiera, de seguros y de salud. Experiencia en .NET (C#), Java, Python, TypeScript y React, combinada con conocimientos en la nube en AWS y Azure. Sólida trayectoria en la construcción de plataformas confiables, de alto rendimiento y centradas en el usuario, contribuyendo además a la arquitectura de software y a la toma de decisiones técnicas.",
  },
  experiences: [
    {
      company: "Billet",
      contract: true,
      description: "Plataforma fintech para pagos digitales y servicios financieros, habilitando transacciones en tiempo real, onboarding de clientes y cumplimiento regulatorio mediante integraciones con sistemas bancarios (p. ej., Banco BHD).",
      roles: [
        {
          name: "Senior Software Engineer",
          period: "2024 - 2025",
          contributions: [
            "Mejoré la productividad de los desarrolladores al habilitar entornos locales de alta fidelidad utilizando LocalStack y bases de datos contenerizadas (Redis, PostgreSQL, DynamoDB).",
            "Incrementé la cobertura de pruebas automatizadas en servicios Serverless desarrollados en Java (Spring Boot) y Python, mejorando la confiabilidad del CI/CD con Bitbucket, AWS CodePipeline y SonarQube.",
            "Lideré los esfuerzos de migración de Java 11 a Java 17 para servicios Spring Boot, reduciendo la deuda técnica y mejorando la mantenibilidad.",
            "Mejoré la confiabilidad de flujos financieros asíncronos al reducir errores de procesamiento en SNS/SQS e implementar controles de idempotencia basados en Redis.",
            "Desarrollé servicios Serverless de evaluación de clientes y puntuación de riesgo para respaldar flujos de cumplimiento (KYC, PEP, listas de vigilancia).",
            "Reforcé la seguridad de integraciones bancarias trasladando lógica sensible de procesamiento al Backend."
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
        }
      ],

    },
    {
      company: "Member Care",
      description: "Plataforma de salud multi-tenant que conecta pacientes, proveedores y equipos de cuidado con una arquitectura escalable orientada a eventos.",
      roles: [
        {
          name: "Senior Software Engineer",
          period: "2021 - 2025",
          contributions: [
            "Diseñé e implementé APIs RESTful utilizando .NET/C#, aplicando principios de Clean Architecture para garantizar mantenibilidad y escalabilidad.",
            "Arquitecté un Worker Service contenerizado (.NET + Quartz) para orquestar procesos en segundo plano programados y orientados a eventos, con ejecución idempotente para una recuperación confiable ante fallos.",
            "Diseñé flujos de notificaciones multicanal sensibles al tiempo (recordatorios, monitoreo y firma de documentos) utilizando SendGrid, OneSignal, Twilio y SignalR, garantizando entregas precisas entre distintas zonas horarias.",
            "Arquitecté procesamiento basado en colas utilizando Azure Service Bus, descargando tareas pesadas de las Web APIs y mejorando la escalabilidad y capacidad de respuesta del sistema.",
            "Mejoré el módulo de Chronic Care Management (CCM) mediante Dashboards analíticos y reportes en Excel/PDF.",
            "Contribuí a iniciativas de IA diseñando e implementando soluciones basadas en RAG y plugins de IA utilizando Semantic Kernel, Azure OpenAI y Azure AI Search, habilitando respuestas contextualizadas y acceso seguro a datos de clientes.",
          ],
          technologies: [".NET", "C#", "Azure", "React", "Next.js", "SQL Server", "Cosmos DB"]
        }
      ]
    },
    {
      company: "Grupo Universal",
      description: "Uno de los principales grupos financieros en la República Dominicana que ofrece servicios en seguros, salud, inversiones y soluciones de retiro.",
      roles: [
        {
          name: "Arquitecto de Soluciones",
          period: "2018 - 2020",
          contributions: [
            "Contribuí a la transformación digital empresarial migrando servicios core de seguros desde sistemas Oracle legacy hacia Microsoft Azure.",
            "Desarrollé tableros analíticos y reportes utilizando Microsoft Power BI, integrando fuentes de datos heterogéneas como Oracle Database y Microsoft SQL Server para fortalecer la toma de decisiones basada en datos en toda la organización.",
            "Produje modelos UML y documentación técnica para alinear arquitectura entre equipos.",
          ],
          technologies: [
            "ASP.NET",
            "C#",
            "SQL Server",
            "Oracle",
            "Microsoft Azure",
            "Microsoft Power BI",
            "Enterprise Architect",
          ]
        },
        {
          name: "Líder de Proyectos",
          period: "2011 - 2018",
          contributions: [
            "Diseñé integraciones entre plataformas de Seguros Generales y Salud/ARS, habilitando una vista 360 unificada para más de 500,000 afiliados.",
            "Apoyé integración de datos empresarial y pipelines ETL usando SAS.",
            "Participé en iniciativas de evaluación técnica y selección de proveedores para nuevas unidades de negocio, contribuyendo posteriormente a las integraciones de sistemas."
          ],
          technologies: [
            "ASP.NET",
            "C#",
            "SQL Server",
            "Oracle",
            "SAS",
          ]
        },
        {
          name: "Analista de Sistemas",
          period: "2008 - 2011",
          contributions: [
            "Gestioné incidentes en producción, corrección de errores y actividades de mantenimiento para plataformas core de seguros desarrolladas con Oracle Forms & Reports.",
            "Colaboré con usuarios para investigar incidencias, validar requerimientos y coordinar pruebas UAT y despliegues a producción.",
            "Elaboré documentación técnica y entregables de despliegue, cumpliendo consistentemente con los objetivos de resolución de incidentes y satisfacción del cliente.",
          ],
          technologies: [
            "Oracle Database",
            "Oracle Forms & Reports",
            "PL/SQL",
          ]
        }
      ]
    },
    {
      company: "Instituto Tecnológico de las Américas - ITLA",
      description: "Un instituto técnico líder en la República Dominicana, especializado en tecnologías de la información, desarrollo de software, ciberseguridad e innovación digital.",
      roles: [
        {
          name: "Docente de TI",
          period: "2019",
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
      description: "Universidad privada en la República Dominicana reconocida por sus programas en tecnología, ingeniería, negocios y ciencias de la salud.",
      roles: [
        {
          name: "Instructor Técnico",
          period: "2008",
          contributions: [
            "Impartí sesiones de capacitación técnica para instructores y estudiantes, traduciendo conceptos técnicos en guías accesibles y fáciles de seguir.",
            "Brindé soporte e inducción en herramientas y flujos de trabajo educativos basados en Moodle.",
          ],
          technologies: ["Moodle"],
        }
      ]
    },
  ],
  techGroups: [
    { title: "Ingeniería de Software", items: "Desarrollo web Full-Stack / Diseño y Desarrollo de Backend APIs" },
    { title: "Lenguajes de Programación", items: "C# / Java / Python / TypeScript" },
    { title: "Backend", items: ".NET / Spring Boot" },
    { title: "Frontend", items: "React / Next.js / React Native" },
    { title: "Arquitecturas", items: "Microservicios / Basada en eventos / Serverless" },
    { title: "Cloud & DevOps", items: "AWS / Azure / Docker / Kubernetes / Automatización CI/CD" },
    { title: "Base de datos", items: "Modelado de Datos (SQL y NoSQL) / SQL Server / PostgreSQL / Amazon DynamoDB / Azure Cosmos DB / Oracle" },
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
