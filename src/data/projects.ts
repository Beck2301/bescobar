export interface Project {
  id: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  longDescription: { es: string; en: string };
  category: string;
  isPrivate?: boolean;
  icon: string;
  image: string;
  featuredImage?: string;
  images?: string[];
  technologies: string[];
  url?: string;
  github?: string;
  features?: { es: string[]; en: string[] };
}

export const projectsData: Project[] = [
  {
    id: "mts-multiservicios",
    title: {
      es: "MTS Multiservicios",
      en: "MTS Multiservicios",
    },
    description: {
      es: "Plataforma corporativa integral diseñada para una empresa líder en maquinaria pesada y transporte, optimizada para la conversión y soporte técnico.",
      en: "Comprehensive corporate platform designed for a leader in heavy machinery and transportation, optimized for conversion and technical support.",
    },
    longDescription: {
      es: "Desarrollo completo de un sitio web corporativo robusto para MTS Multiservicios utilizando HubSpot CMS. El proyecto integra herramientas avanzadas de gestión de contenido y diseño moderno con Tailwind CSS. Me encargué de toda la implementación del código, desde la estructura hasta los componentes interactivos en JavaScript. La plataforma está enfocada en presentar su catálogo de maquinaria pesada, servicios de postventa y soporte técnico, incluyendo integraciones de contacto directo como WhatsApp y formularios personalizados de HubSpot para la generación de leads.",
      en: "Full development of a robust corporate website for MTS Multiservicios using HubSpot CMS. The project integrates advanced content management tools and modern design with Tailwind CSS. I was responsible for the entire code implementation, from structure to interactive components in JavaScript. The platform focuses on presenting their heavy machinery catalog, after-sales services, and technical support, including direct contact integrations like WhatsApp and custom HubSpot forms for lead generation.",
    },
    category: "frontend",
    icon: "🚜",
    image: "/brands/mts.png",
    images: [
      "/brands/mts.png",
    ],
    technologies: ["HubSpot CMS", "Tailwind CSS", "JavaScript", "HTML/CSS"],
    url: "https://mtsmultiservicios.net/",
    features: {
      es: [
        "Desarrollo completo Hubspot CMS",
        "Implementación de Tailwind CSS para diseño moderno",
        "Componentes interactivos con JavaScript",
        "Integración de formularios de HubSpot para leads",
        "Optimización de rendimiento y SEO",
        "Diseño responsive enfocado en maquinaria industrial",
      ],
      en: [
        "Full HubSpot CMS development",
        "Tailwind CSS implementation for modern design",
        "Interactive components with JavaScript",
        "HubSpot forms integration for lead generation",
        "Performance and SEO optimization",
        "Responsive design focused on industrial machinery",
      ],
    },
  },
  {
    id: "wlh-grandes-alturas",
    title: {
      es: "WLH Grandes Alturas",
      en: "WLH Grandes Alturas",
    },
    description: {
      es: "Proyecto completo desde cero: diseño de identidad visual, sitio web corporativo y estrategia SEO para empresa de limpieza en grandes alturas.",
      en: "Complete project from scratch: visual identity design, corporate website and SEO strategy for a high-altitude cleaning company.",
    },
    longDescription: {
      es: "Proyecto integral desarrollado desde cero para WLH Grandes Alturas. El cliente no contaba con presencia digital previa, por lo que realicé todo el proceso: diseño del logo e identidad visual, creación de contenido para redes sociales, diseño y desarrollo completo del sitio web corporativo, y finalmente la indexación y posicionamiento SEO para mejorar su visibilidad online. El sitio presenta información sobre sus servicios de limpieza y mantenimiento en alturas, certificaciones profesionales y galería de trabajos realizados.",
      en: "Comprehensive project developed from scratch for WLH Grandes Alturas. The client had no previous digital presence, so I handled the entire process: logo and visual identity design, social media content creation, complete corporate website design and development, and finally indexing and SEO positioning to improve their online visibility. The site presents information about their high-altitude cleaning and maintenance services, professional certifications and gallery of completed work.",
    },
    category: "frontend",
    icon: "🏗️",
    image: "/brands/wlh.png",
    images: [
      "/brands/wlh.png",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://wlhgrandesalturas.com/",
    features: {
      es: [
        "Diseño de logo e identidad visual",
        "Creación de contenido para redes sociales",
        "Diseño y desarrollo completo del sitio web",
        "Indexación y posicionamiento SEO",
        "Diseño responsive y moderno",
        "Galería de proyectos y formulario de contacto",
      ],
      en: [
        "Logo and visual identity design",
        "Social media content creation",
        "Complete website design and development",
        "SEO indexing and positioning",
        "Responsive and modern design",
        "Project gallery and contact form",
      ],
    },
  },
  {
    id: "lemon-dapp",
    title: {
      es: "Lemon dApp",
      en: "Lemon dApp",
    },
    description: {
      es: "Aplicación web interactiva tipo juego que genera trivias personalizadas con IA. Desarrollo colaborativo con enfoque en nuevas funcionalidades y experiencia de usuario.",
      en: "Interactive web application game that generates personalized AI-powered trivias. Collaborative development focused on new features and user experience.",
    },
    longDescription: {
      es: "Lemon es una aplicación web interactiva que funciona como un juego educativo. La plataforma genera trivias personalizadas utilizando inteligencia artificial basándose en el texto que el usuario proporciona. Trabajé en equipo con otros desarrolladores en este proyecto, donde mi contribución principal incluyó: implementación de nuevas páginas y rutas, desarrollo de la funcionalidad de 'Learning Paths' (rutas de aprendizaje) que permite a los usuarios seguir caminos estructurados de aprendizaje, y la implementación de un sistema de generación de imágenes con IA que crea imágenes contextuales según el contenido de cada trivia generada. Todo desarrollado con Next.js y TypeScript para garantizar un código escalable y mantenible.",
      en: "Lemon is an interactive web application that works as an educational game. The platform generates personalized trivias using artificial intelligence based on the text provided by the user. I worked in a team with other developers on this project, where my main contributions included: implementation of new pages and routes, development of the 'Learning Paths' functionality that allows users to follow structured learning paths, and the implementation of an AI image generation system that creates contextual images based on the content of each generated trivia. Everything developed with Next.js and TypeScript to ensure scalable and maintainable code.",
    },
    category: "frontend",
    icon: "🍋",
    image: "/brands/lemon.png",
    featuredImage: "/featured.png",
    images: [
      "/brands/lemon.png",
    ],
    technologies: ["Next.js", "TypeScript", "React", "AI Integration", "Tailwind CSS"],
    url: "https://x.com/lemon_dapp/photo",
    features: {
      es: [
        "Generación de trivias con IA según texto del usuario",
        "Implementación de Learning Paths (rutas de aprendizaje)",
        "Generación de imágenes con IA contextual",
        "Desarrollo de nuevas páginas y funcionalidades",
        "Trabajo colaborativo en equipo",
        "Arquitectura escalable con Next.js y TypeScript",
      ],
      en: [
        "AI-powered trivia generation based on user text",
        "Learning Paths implementation",
        "Contextual AI image generation",
        "New pages and features development",
        "Collaborative team work",
        "Scalable architecture with Next.js and TypeScript",
      ],
    },
  },
  {
    id: "dinterweb-onboarding",
    title: {
      es: "HubSpot Onboarding Plus",
      en: "HubSpot Onboarding Plus",
    },
    description: {
      es: "Herramienta interactiva de onboarding para HubSpot CRM, diseñada para optimizar la implementación y formación de equipos.",
      en: "Interactive onboarding tool for HubSpot CRM, designed to optimize implementation and team training.",
    },
    longDescription: {
      es: "Desarrollo de una plataforma interactiva de onboarding para Dinterweb, orientada a guiar a los clientes en su proceso de adopción de HubSpot. Utilicé una combinación de PHP para la lógica del servidor, JavaScript para la interactividad dinámica y CSS/HTML para un diseño limpio y funcional. El proyecto destaca por su integración profunda con la API de HubSpot, permitiendo filtrar objetivos según el licenciamiento del cliente y gestionar la selección de metas de forma personalizada. La herramienta facilita la configuración del CRM y el entrenamiento de equipos para maximizar el retorno de inversión.",
      en: "Development of an interactive onboarding platform for Dinterweb, aimed at guiding clients through their HubSpot adoption process. I used a combination of PHP for server-side logic, JavaScript for dynamic interactivity, and CSS/HTML for a clean and functional design. The project stands out for its deep integration with the HubSpot API, allowing objectives to be filtered according to the client's licensing and managing goal selection in a personalized way. The tool facilitates CRM configuration and team training to maximize return on investment.",
    },
    category: "frontend",
    icon: "🚀",
    image: "/brands/onboarding.png",
    images: [
      "/brands/onboarding.png",
    ],
    technologies: ["JavaScript", "PHP", "HubSpot API", "HTML/CSS"],
    url: "https://onboarding.dinterweb.com/es/usa/?filterobjetivo=off&ask_me_anything=0",
    features: {
      es: [
        "Filtrado dinámico por licenciamiento de HubSpot",
        "Selección personalizada de objetivos de negocio",
        "Integración con la API de HubSpot para gestión de datos",
        "Lógica de servidor desarrollada en PHP",
        "Interfaz de usuario interactiva y responsive",
        "Sistema multi-moneda y multi-idioma",
      ],
      en: [
        "Dynamic filtering by HubSpot licensing",
        "Personalized selection of business objectives",
        "HubSpot API integration for data management",
        "Server-side logic developed in PHP",
        "Interactive and responsive user interface",
        "Multi-currency and multi-language system",
      ],
    },
  },
  {
    id: "ecommerce-sync-engine",
    title: {
      es: "Middleware E-commerce: CRM Sync",
      en: "E-commerce Middleware: CRM Sync",
    },
    description: {
      es: "Implementación integral de un motor de sincronización de productos y pagos entre HubSpot CRM y Stripe API para flujos automatizados.",
      en: "Full implementation of a product and payment synchronization engine between HubSpot CRM and Stripe API for automated workflows.",
    },
    longDescription: {
      es: "Este proyecto consistió en el desarrollo técnico de un middleware alojado en HubSpot Serverless (Node.js) para orquestar la comunicación bidireccional con Stripe. Mi desempeño incluyó la arquitectura de la base de datos de productos en el CRM, la lógica de sincronización automática (limpieza, creación y edición de SKUs) y la integración del Checkout de Stripe en el frontend. Es una implementación robusta diseñada para eliminar la gestión manual de catálogos y centralizar las operaciones financieras dentro del CRM.",
      en: "This project involved the technical development of a middleware hosted on HubSpot Serverless (Node.js) to orchestrate bidirectional communication with Stripe. My performance included designing the CRM product database architecture, automatic synchronization logic (cleaning, creating, and editing SKUs), and integrating the Stripe Checkout into the frontend. It is a robust implementation designed to eliminate manual catalog management and centralize financial operations within the CRM.",
    },
    category: "backend",
    isPrivate: true,
    icon: "🔐",
    image: "",
    images: [],
    technologies: ["React", "TypeScript", "Node.js", "Serverless", "Stripe API", "HubSpot CMS", "Tailwind CSS"],
    features: {
      es: [
        "Sincronización CRUD automática entre HubSpot y Stripe",
        "Arquitectura Serverless con Node.js",
        "Integración de pagos con Stripe Checkout",
        "Gestión de productos centralizada",
        "Automatización de suscripciones y cancelaciones",
        "Log de transacciones en tiempo real",
      ],
      en: [
        "Automatic CRUD synchronization between HubSpot and Stripe",
        "Serverless architecture with Node.js",
        "Payment integration with Stripe Checkout",
        "Centralized product management",
        "Subscription and cancellation automation",
        "Real-time transaction logging",
      ],
    },
  },
  {
    id: "aws-bi-pipeline",
    title: {
      es: "Analytics Pipeline: HubSpot to Looker",
      en: "Analytics Pipeline: HubSpot to Looker",
    },
    description: {
      es: "Arquitectura serverless en AWS para la automatización de reportes dinámicos, sincronizando datos de CRM con Google Sheets y Looker Studio.",
      en: "AWS serverless architecture for dynamic reporting automation, syncing CRM data with Google Sheets and Looker Studio.",
    },
    longDescription: {
      es: "Diseño e implementación de un pipeline de datos automatizado utilizando AWS SAM y EventBridge. La solución ejecuta lambdas programadas (Cron 00:00) desarrolladas en TypeScript que extraen métricas críticas de Contactos y Negocios desde HubSpot API. Estos datos son procesados y volcados a una estructura optimizada en Google Sheets, sirviendo como fuente de datos en tiempo real para dashboards avanzados en Looker Studio. El proyecto destaca por su escalabilidad, manejo de límites de API y automatización total del flujo de Business Intelligence.",
      en: "Design and implementation of an automated data pipeline using AWS SAM and EventBridge. The solution runs scheduled lambdas (Cron 00:00) developed in TypeScript that extract critical metrics for Contacts and Deals from HubSpot API. This data is processed and dumped into an optimized structure in Google Sheets, serving as a real-time data source for advanced dashboards in Looker Studio. The project highlights scalability, API limit handling, and total automation of the Business Intelligence workflow.",
    },
    category: "backend",
    isPrivate: true,
    icon: "☁️",
    image: "",
    images: [],
    technologies: ["AWS Lambda", "AWS SAM", "EventBridge", "TypeScript", "HubSpot API", "Google Sheets API", "Looker Studio"],
    features: {
      es: [
        "Sincronización diaria automatizada (Cron Job)",
        "Arquitectura 100% Serverless con AWS Cloud",
        "Procesamiento de datos con Lambdas en TypeScript",
        "Integración de HubSpot CRM con Looker Studio",
        "Manejo de cuotas y límites de API",
        "Despliegue automatizado con AWS SAM",
      ],
      en: [
        "Daily automated synchronization (Cron Job)",
        "100% Serverless architecture with AWS Cloud",
        "Data processing with TypeScript Lambdas",
        "HubSpot CRM integration with Looker Studio",
        "API quota and limit management",
        "Automated deployment with AWS SAM",
      ],
    },
  },
];

