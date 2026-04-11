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
    id: "busca-tu-placa",
    title: {
      es: "Busca Tu Placa",
      en: "Busca Tu Placa",
    },
    description: {
      es: "Plataforma web que conecta a personas que perdieron la placa de su vehículo con quienes la encontraron. Sin intermediarios, sin trámites, sin costo.",
      en: "Web platform that connects people who lost their vehicle plate with those who found it. No middlemen, no paperwork, no cost.",
    },
    longDescription: {
      es: "Tras experimentar lo tedioso del proceso de reposición de placas vehiculares en la región, desarrollé Busca Tu Placa: el primer directorio centralizado para reportar y localizar placas extraviadas en 22 países.\n\nA nivel técnico, la plataforma está construida con Next.js 16 y TypeScript, respaldada por PostgreSQL (Supabase). Para garantizar una adopción rápida y sin fricción, implementé autenticación passwordless (Magic Link) y geo-detección automática usando cabeceras de Vercel para filtrar el contenido según el país del usuario.\n\nEl núcleo de la aplicación es un buscador altamente tolerante a errores, impulsado por un algoritmo de normalización que procesa formatos irregulares de placas al instante. Además, integra optimización de imágenes con Cloudinary y múltiples canales de contacto seguro (WhatsApp y correo enmascarado).",
      en: "After experiencing the tedious process of replacing vehicle license plates in the region, I developed Busca Tu Placa: the first centralized directory for reporting and locating lost plates in 22 countries.\n\nOn a technical level, the platform is built with Next.js 16 and TypeScript, backed by PostgreSQL (Supabase). To ensure fast and frictionless adoption, I implemented passwordless authentication (Magic Link) and automatic geo-detection using Vercel headers to filter content based on the user's country.\n\nThe core of the application is a highly fault-tolerant search engine, powered by a normalization algorithm that processes irregular license plate formats instantly. Additionally, it integrates image optimization with Cloudinary and multiple secure contact channels (WhatsApp and masked email).",
    },
    category: "fullstack",
    icon: "🚗",
    image: "/brands/btp.png",
    images: [
      "/brands/btp.png",
    ],
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth.js", "Cloudinary", "Tailwind CSS", "Vercel"],
    url: "https://btp-steel.vercel.app",
    features: {
      es: [
        "Buscador instantáneo con normalización inteligente de formatos de placa.",
        "Geo-detección automática del país del usuario para filtrar publicaciones relevantes.",
        "Autenticación sin contraseñas mediante Magic Link (solo con email).",
        "Galería interactiva de imágenes con subida optimizada vía Cloudinary.",
        "Contacto seguro por correo enmascarado y WhatsApp directo.",
        "Soporte para 22 países de Latinoamérica, España y Estados Unidos.",
      ],
      en: [
        "Instant search engine with intelligent license plate format normalization.",
        "Automatic country geo-detection to filter relevant listings by location.",
        "Passwordless authentication via Magic Link (email only).",
        "Interactive image gallery with optimized uploads via Cloudinary.",
        "Secure contact through masked email and direct WhatsApp button.",
        "Support for 22 countries across Latin America, Spain, and the United States.",
      ],
    },
  },
  {
    id: "food-scan-ia",
    title: {
      es: "Food Scan IA",
      en: "Food Scan IA",
    },
    description: {
      es: "Aplicación móvil que utiliza IA para analizar fotografías de alimentos, identificando ingredientes y emitiendo alertas dietéticas personalizadas.",
      en: "Mobile app that uses AI to analyze food photos, identifying ingredients and issuing personalized dietary alerts.",
    },
    longDescription: {
      es: "Desarrollé una aplicación móvil con React Native y Expo que se integra con el modelo de inteligencia artificial Gemini 2.5 Flash de Google. Esta herramienta permite a los usuarios tomar una fotografía de su comida y recibir un análisis instantáneo del platillo y sus posibles ingredientes. Implementé un sistema de perfiles locales donde el usuario puede registrar su dieta, alergias y síntomas actuales; la IA procesa estos datos en tiempo real para generar advertencias médicas altamente personalizadas. Mi rol abarcó el desarrollo del frontend, la integración nativa de la cámara, la gestión de almacenamiento local para el historial de escaneos y la ingeniería de prompts para optimizar las respuestas generativas.",
      en: "I developed a mobile application using React Native and Expo that integrates Google's Gemini 2.5 Flash AI model. This app allows users to snap a picture of their meal and instantly receive an analysis of the dish and its potential ingredients. I implemented a local profile system where users can log their current diet, allergies, and symptoms; the AI processes this data in real-time to generate highly personalized medical warnings. My role spanned the entire frontend development, native camera integration, local storage management for the scan history, and prompt engineering to optimize the generative AI responses.",
    },
    category: "mobile",
    icon: "🥗",
    image: "/brands/food-scan.png",
    images: [
      "/brands/food-scan.png",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Gemini AI", "AsyncStorage"],
    url: "https://expo.dev/artifacts/eas/jhm3TBEYBXi76Hwz3nfoux.apk",
    github: "https://github.com/Beck2301/food-scan-ia",
    features: {
      es: [
        "Escaneo visual e identificación de platillos usando la cámara del dispositivo.",
        "Análisis rápido de ingredientes impulsado por el motor de Gemini 2.5 Flash.",
        "Alertas médicas personalizadas cruzadas con alergias y dietas del usuario.",
        "Historial persistente y local de escaneos usando AsyncStorage.",
        "Interfaz de usuario moderna implementando BlurView (Glassmorphism) y gradientes dinámicos."
      ],
      en: [
        "Visual food scanning and dish identification using the device camera.",
        "Instant ingredient analysis powered by the Gemini 2.5 Flash engine.",
        "Custom medical alerts referencing the user's specific allergies and diets.",
        "Persistent local history of past food scans using AsyncStorage.",
        "Modern User Interface featuring BlurView (glassmorphism) and dynamic gradients."
      ],
    },
  },
  {
    id: "mapi",
    title: {
      es: "Mapi",
      en: "Mapi",
    },
    description: {
      es: "Mapa interactivo para visualizar y explorar digitalmente los recorridos del transporte colectivo de El Salvador.",
      en: "Interactive map to digitally visualize and explore public transportation routes in El Salvador.",
    },
    longDescription: {
      es: "Proyecto conceptual para transformar datos oficiales del VMT en una aplicación interactiva enfocada en la experiencia del usuario (UX) para el ciudadano. Desarrollé todo desde cero: integré de forma eficiente múltiples coordenadas GIS (GeoJSON) usando algoritmos de renderizado para mapas dinámicos. En el frontend, construí una interfaz minimalista centrada en mapas (como Uber/Google Maps) con personalización de temas (oscuro, claro, satélite). Resolví retos considerables de optimización al cargar cientos de trazos poligonales en la red vial sin perder fluidez ni afectar el rendimiento en teléfonos móviles.",
      en: "Conceptual project to transform official VMT data into an interactive application focused on citizen user experience (UX). I developed everything from scratch: efficiently integrated multiple GIS coordinates (GeoJSON) using rendering algorithms for dynamic maps. On the frontend, I built a minimalist map-centric interface (similar to Uber/Google Maps) with theme customization (dark, light, satellite). I solved considerable optimization challenges when loading hundreds of polygonal traces onto the road network without losing fluidity or affecting performance on mobile devices.",
    },
    category: "fullstack",
    icon: "🚌",
    image: "/brands/mapi.png",
    images: [
      "/brands/mapi.png",
    ],
    technologies: ["Next.js", "React 19", "Tailwind CSS v4", "Postgres", "Leaflet"],
    url: "https://mapi-app-seven.vercel.app",
    github: "https://github.com/Beck2301/mapi-app",
    features: {
      es: [
        "Renderizado masivo y dinámico de coordenadas espaciales (GeoJSON).",
        "Seguimiento en tiempo real vía la API de Geolocalización nativa del navegador.",
        "Buscador de rutas con renderizado de recorridos en capas dependientes: ida, regreso o completas.",
        "Gestión de estado global para múltiples capas de mapas y preferencias visuales (Claro/Oscuro/Automático).",
        "Diseño minimalista y responsive, enfocado 100% en el rendimiento móvil."
      ],
      en: [
        "Massive and dynamic rendering of spatial coordinates (GeoJSON).",
        "Real-time tracking via native Geolocation API in the browser.",
        "Route search engine with interactive layer rendering: outbound, return, or full routes.",
        "Global state management for multiple map layers and visual preferences (Light/Dark/Auto).",
        "Minimalist and responsive design, focused 100% on mobile performance."
      ],
    },
  },
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

