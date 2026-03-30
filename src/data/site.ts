export const defaultLanguage = "en";

const social = [
  { label: "GitHub", href: "https://github.com/rvizcaino80" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rogersvizcaino/" }
];

export const siteContent = {
  en: {
    meta: {
      title: "Rogers Vizcaino - Product Engineer"
    },
    labels: {
      availability: "Open to work (Remote)",
      about: "About",
      stack: "Capabilities",
      experience: "Experience",
      languages: "Languages",
      exportResume: "Export Resume PDF",
      navAria: "Primary",
      socialAria: "Social links"
    },
    profile: {
      name: "Rogers Vizcaino",
      role: "Product Engineer",
      intro: [
        "Product Engineer with 20+ years of experience in software development, with a focus on web applications."
      ],
      email: "rvizcaino@gmail.com",
      social
    },
    about: [
      "I build modern software products that turn requirements into working systems, with strengths in interfaces, application architecture, API integration, testing, and delivery.",
      "My background combines software engineering with graphic design, UX, and UI, which helps me shape products that are not only functional but also clear, usable, and visually intentional.",
      "I am strongest in web product development with React, Vue.js, TypeScript, Node.js, and modern deployment workflows, but I do not position myself as a narrow frontend specialist. I work as a product-oriented engineer who moves where the product needs leverage.",
      "I use AI tools as part of daily implementation, research, prototyping, and maintenance. I see AI as a force multiplier for a generalist developer who can own more of the product surface end to end."
    ],
    stack: [
      {
        category: "Product Engineering",
        items: [
          "Product-focused software delivery",
          "User Experience",
          "User Interfaces",
          "Feature ownership",
          "Cross-functional execution"
        ]
      },
      {
        category: "Application Development",
        items: [
          "React",
          "Vue.js",
          "TypeScript",
          "JavaScript",
          "Node.js",
          "Next.js",
          "Tailwind CSS",
          "Vite"
        ]
      },
      {
        category: "Architecture & Integration",
        items: [
          "Application architecture",
          "REST APIs",
          "BFF-friendly integration",
          "SQL databases (MySQL, Postgres)",
          "State management",
          "Microfrontends with Module Federation"
        ]
      },
      {
        category: "Quality & Delivery",
        items: [
          "Jest",
          "Vitest",
          "React Testing Library",
          "Playwright",
          "Cypress",
          "Core Web Vitals",
          "WCAG",
          "CI/CD"
        ]
      },
      {
        category: "Cloud & Tooling",
        items: [
          "Azure",
          "AWS",
          "Vercel",
          "Netlify",
          "GitHub Actions",
          "GitLab CI/CD",
          "Azure DevOps"
        ]
      },
      {
        category: "AI-Assisted Workflow",
        items: [
          "AI-assisted implementation",
          "Rapid prototyping",
          "Tooling acceleration",
          "Cursor",
          "Claude",
          "Codex"
        ]
      }
    ],
    experience: [
      {
        period: "2023 - 2025",
        title: "Product Engineer",
        company: "Authvia",
        description:
          "Worked on a live financial SaaS platform with active users, building and evolving production product workflows in Vue.js and TypeScript. Contributed reusable application patterns, shared UI systems, and cross-application integrations that supported real operational use cases.\n\nCollaborated closely with backend teams on API integrations, delivery workflows, and product execution. This role required moving beyond a narrow interface layer into architecture, integration, quality, and shipping decisions.\n\nThe work demanded autonomy, strong communication, thoughtful UX, and the ability to turn evolving product requirements into reliable software in production.\n\nHighlight: Built and evolved production workflows for a financial SaaS product with active users, contributing reusable systems, integration patterns, and architectural consistency across multiple application surfaces.",
        tags: [
          "Vue.js",
          "TypeScript",
          "Pinia",
          "Tailwind CSS",
          "API integration",
          "Module Federation",
          "Live product delivery"
        ]
      },
      {
        period: "2022 - 2023",
        title: "Software Engineer",
        company: "Crossbridge Global Partners",
        description:
          "Contributed to enterprise software platforms supporting internal digital operations, including work for Louis Vuitton. Built product interfaces in React and TypeScript, reusable component systems, and application capabilities tied to real business workflows and SQL-backed systems.\n\nThis work required ownership, collaboration, and the ability to move through ambiguity while keeping implementation maintainable and aligned with delivery goals.\n\nHighlight: Delivered maintainable application interfaces and reusable patterns for internal enterprise platforms, helping product workflows stay clearer, faster, and more consistent across teams.",
        tags: [
          "React",
          "TypeScript",
          "Enterprise software",
          "MySQL",
          "Postgres",
          "Ownership"
        ]
      },
      {
        period: "2021 - 2022",
        title: "Software Developer",
        company: "Zemoga / DIRECTV",
        description:
          "Worked on digital media and streaming products, building web application features, reusable interface components, and API-connected experiences used at scale. Contributed across implementation, integration, and product delivery for multiple web surfaces.\n\nHighlight: Shipped reusable web application features and API-connected experiences for media products operating across multiple surfaces and high-traffic user flows.",
        tags: ["JavaScript", "REST APIs", "Web applications", "Product delivery"]
      }
    ],
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "Professional working proficiency" }
    ]
  },
  es: {
    meta: {
      title: "Rogers Vizcaino - Product Engineer"
    },
    labels: {
      availability: "Disponible para trabajar (Remoto)",
      about: "Perfil",
      stack: "Capacidades",
      experience: "Experiencia",
      languages: "Idiomas",
      exportResume: "Exportar hoja de vida en PDF",
      navAria: "Navegación principal",
      socialAria: "Enlaces sociales"
    },
    profile: {
      name: "Rogers Vizcaino",
      role: "Product Engineer",
      intro: [
        "Product Engineer con más de 20 años de experiencia en desarrollo de software, con enfoque en aplicaciones web."
      ],
      email: "rvizcaino@gmail.com",
      social
    },
    about: [
      "Construyo productos de software modernos que convierten requerimientos en sistemas funcionales, con fortalezas en interfaces, arquitectura de aplicaciones, integración con APIs, testing y delivery.",
      "Mi trayectoria combina ingeniería de software con diseño gráfico, UX y UI, lo que me ayuda a crear productos que no solo funcionan bien, sino que también son claros, usables y visualmente intencionales.",
      "Mi fortaleza principal está en el desarrollo de productos web con React, Vue.js, TypeScript, Node.js y flujos modernos de despliegue, pero no me presento como un especialista frontend cerrado. Trabajo como un ingeniero orientado a producto que se mueve hacia donde el producto necesita más apalancamiento.",
      "Uso herramientas de IA como parte del trabajo diario de implementación, investigación, prototipado y mantenimiento. Veo la IA como un multiplicador para un developer generalista que puede asumir más del producto de punta a punta."
    ],
    stack: [
      {
        category: "Ingeniería de Producto",
        items: [
          "Entrega de software orientada a producto",
          "Experiencia de usuario",
          "Interfaces de usuario",
          "Ownership de features",
          "Ejecución cross-functional"
        ]
      },
      {
        category: "Desarrollo de Aplicaciones",
        items: [
          "React",
          "Vue.js",
          "TypeScript",
          "JavaScript",
          "Node.js",
          "Next.js",
          "Tailwind CSS",
          "Vite"
        ]
      },
      {
        category: "Arquitectura e Integración",
        items: [
          "Arquitectura de aplicaciones",
          "REST APIs",
          "Integración tipo BFF",
          "Bases de datos SQL (MySQL, Postgres)",
          "Manejo de estado",
          "Microfrontends con Module Federation"
        ]
      },
      {
        category: "Calidad y Delivery",
        items: [
          "Jest",
          "Vitest",
          "React Testing Library",
          "Playwright",
          "Cypress",
          "Core Web Vitals",
          "WCAG",
          "CI/CD"
        ]
      },
      {
        category: "Cloud y Tooling",
        items: [
          "Azure",
          "AWS",
          "Vercel",
          "Netlify",
          "GitHub Actions",
          "GitLab CI/CD",
          "Azure DevOps"
        ]
      },
      {
        category: "Flujo de Trabajo con IA",
        items: [
          "Implementación asistida por IA",
          "Prototipado rápido",
          "Aceleración con tooling",
          "Cursor",
          "Claude",
          "Codex"
        ]
      }
    ],
    experience: [
      {
        period: "2023 - 2025",
        title: "Product Engineer",
        company: "Authvia",
        description:
          "Trabajé en una plataforma financiera SaaS en producción con usuarios activos, construyendo y evolucionando flujos reales de producto en Vue.js y TypeScript. Aporté patrones reutilizables de aplicación, sistemas compartidos de UI e integraciones entre aplicaciones que soportaban casos de uso operativos reales.\n\nColaboré de cerca con equipos backend en integraciones con APIs, workflows de delivery y ejecución de producto. Este rol exigía ir más allá de una capa de interfaz limitada y participar en decisiones de arquitectura, integración, calidad y salida a producción.\n\nEl trabajo requería autonomía, buena comunicación, criterio de UX y la capacidad de convertir requerimientos cambiantes en software confiable en producción.\n\nHighlight: Construí y evolucioné workflows de producción para un producto SaaS financiero con usuarios activos, aportando sistemas reutilizables, patrones de integración y consistencia arquitectónica entre múltiples superficies de aplicación.",
        tags: [
          "Vue.js",
          "TypeScript",
          "Pinia",
          "Tailwind CSS",
          "Integración con APIs",
          "Module Federation",
          "Producto en producción"
        ]
      },
      {
        period: "2022 - 2023",
        title: "Software Engineer",
        company: "Crossbridge Global Partners",
        description:
          "Contribuí a plataformas de software empresarial para operaciones digitales internas, incluyendo trabajo para Louis Vuitton. Construí interfaces de producto en React y TypeScript, sistemas reutilizables de componentes y capacidades de aplicación conectadas a workflows reales del negocio y a sistemas respaldados por SQL.\n\nEste trabajo requería ownership, colaboración y la capacidad de moverse con claridad en contextos ambiguos, manteniendo la implementación alineada con objetivos de delivery.\n\nHighlight: Entregué interfaces mantenibles y patrones reutilizables para plataformas empresariales internas, ayudando a que los workflows de producto fueran más claros, rápidos y consistentes entre equipos.",
        tags: [
          "React",
          "TypeScript",
          "Software empresarial",
          "MySQL",
          "Postgres",
          "Ownership"
        ]
      },
      {
        period: "2021 - 2022",
        title: "Software Developer",
        company: "Zemoga / DIRECTV",
        description:
          "Trabajé en productos digitales de medios y streaming, construyendo funcionalidades web, componentes reutilizables e interfaces conectadas con APIs utilizadas a escala. Contribuí entre implementación, integración y delivery de producto en múltiples superficies web.\n\nHighlight: Entregué funcionalidades reutilizables e integraciones con APIs para productos de media operando sobre múltiples superficies web y flujos de alto tráfico.",
        tags: ["JavaScript", "REST APIs", "Aplicaciones web", "Delivery de producto"]
      }
    ],
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Nivel profesional de trabajo" }
    ]
  }
} as const;
