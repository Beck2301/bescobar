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
    subtitle: "Desarrollador enfocado en soluciones escalables e integraciones CRM.",
    description: "Soy Bryan, un desarrollador apasionado por conectar el diseño con la funcionalidad técnica compleja. Mi especialidad radica en orquestar soluciones que viven entre el frontend moderno (React/Next.js) y ecosistemas de CRM como HubSpot, utilizando Serverless y APIs para automatizar procesos de negocio.",
    stats: [
      { label: "Años de Exp.", value: "3+" },
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
    subtitle: "Developer focused on scalable solutions and CRM integrations.",
    description: "I'm Bryan, a developer passionate about connecting design with complex technical functionality. My specialty lies in orchestrating solutions that live between the modern frontend (React/Next.js) and CRM ecosystems like HubSpot, using Serverless and APIs to automate business processes.",
    stats: [
      { label: "Years Exp.", value: "3+" },
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
