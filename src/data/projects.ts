export interface Project {
  id: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  longDescription: { es: string; en: string };
  category: string;
  icon: string;
  image: string;
  images?: string[];
  technologies: string[];
  url?: string;
  github?: string;
  features?: { es: string[]; en: string[] };
}

export const projectsData: Project[] = [
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
    category: "web",
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
    category: "web",
    icon: "🍋",
    image: "/brands/lemon.png",
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
];

