type Lang = "es" | "en";

interface Stat {
  label: string;
  value: string;
}

interface SkillGroup {
  category: string;
  items: string[];
}

interface AboutContent {
  title: string;
  subtitle: string;
  description: string;
  stats: Stat[];
  skillGroups: SkillGroup[];
}

const aboutText: Record<Lang, AboutContent> = {
  es: {
    title: "Sobre mí",
    subtitle: "Desarrollador Full Stack enfocado en construir aplicaciones y soluciones web escalables.",
    description: "Soy Bryan, un desarrollador apasionado por conectar el diseño visual con un excelente rendimiento técnico. Me especializo en ecosistemas modernos (React/Next.js) acompañados de arquitecturas backend robustas (Node.js/Serverless), creando y automatizando experiencias digitales eficientes que transforman ideas en productos reales.",
    stats: [
      { label: "Años de Exp.", value: "4+" },
      { label: "Proyectos", value: "20+" },
    ],
    skillGroups: [
      {
        category: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Serverless", "AWS SAM", "Stripe API"],
      },
      {
        category: "CRM Platforms",
        items: ["HubSpot CMS", "CRM Objects", "API Integrations"],
      },
    ],
  },
  en: {
    title: "About Me",
    subtitle: "Full Stack Developer focused on building scalable applications and web solutions.",
    description: "I'm Bryan, a developer passionate about connecting visual design with excellent technical performance. I specialize in modern ecosystems (React/Next.js) coupled with robust backend architectures (Node.js/Serverless), creating and automating efficient digital experiences that transform ideas into real products.",
    stats: [
      { label: "Years Exp.", value: "4+" },
      { label: "Projects", value: "20+" },
    ],
    skillGroups: [
      {
        category: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Serverless", "AWS SAM", "Stripe API"],
      },
      {
        category: "CRM Platforms",
        items: ["HubSpot CMS", "CRM Objects", "API Integrations"],
      },
    ],
  },
};

export default aboutText;
