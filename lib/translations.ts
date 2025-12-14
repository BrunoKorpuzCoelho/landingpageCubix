export type Language = "en" | "pt" | "es" | "fr";

export const translations = {
  en: {
    // Header
    nav: {
      home: "Home",
      product: "Product",
      technology: "Technology",
      contact: "Contact",
      signUpMVP: "Sign up for MVP",
    },
    // Hero Section
    hero: {
      patentBadge: "PATENTED ARCHITECTURE",
      title: "THE FIRST SYSTEM BUILT FOR",
      titleHighlight: "CONSTRUCTION INDUSTRY",
      titleEnd: "",
      subtitle:
        "Automated project management with IoT integration and AI-powered quality control",
      subtitleFeatures:
        "IoT Ready • Quality Control • GPS Fleet Tracking • Legacy Equipment Integration",
      ctaPrimary: "Sign up for free MVP",
      ctaSecondary: "Watch How It Works",
      imageAlt: "CUBIX Construction Dashboard",
    },
    // Problem Section
    problem: {
      title: "TRADITIONAL CONSTRUCTION SOFTWARE IS",
      titleHighlight: "OUTDATED",
      painPoints: [
        {
          title: "No IoT integration",
          description: "Cannot connect to legacy machinery",
        },
        {
          title: "Manual quality control",
          description: "Clipboard to digital - inefficient",
        },
        {
          title: "Expensive per-user licensing",
          description: "Costs scale with every new user",
        },
        {
          title: "Poor fleet tracking",
          description: "No real-time equipment monitoring",
        },
        {
          title: "Complex setup",
          description: "Months of consultants and training",
        },
      ],
      quote:
        "Odoo, SAP, Procore, Primavera... are built for generic business. CUBIX is built specifically for construction with IoT, quality control, and fleet management from day one.",
    },
    // Solution Section
    solution: {
      title: "CUBIX:",
      titleHighlight: "STRUCTURAL AI",
      titleEnd: ", NOT ADD-ON",
      subtitle:
        "Built from the ground up with AI at its core, not bolted on as an afterthought",
      features: [
        {
          title: "IoT for Legacy Machinery",
          description:
            "Integrate old analog equipment using computer vision and simple sensors - no expensive retrofits needed",
        },
        {
          title: "Automated Quality Control",
          description:
            "Digital inspections with photo documentation, automatic issue detection, and instant compliance reports",
        },
        {
          title: "Smart Project Tracking",
          description:
            "Real-time project status, resource allocation, and timeline predictions powered by AI analysis",
        },
        {
          title: "Fleet & Equipment Management",
          description:
            "GPS tracking, fuel monitoring via OBD-II, maintenance schedules, and cost-per-project analytics",
        },
        {
          title: "Vision-Based Monitoring",
          description:
            "AI reads analog gauges, detects safety hazards, monitors material levels - all from camera feeds",
        },
        {
          title: "Predictive Maintenance",
          description:
            "Prevent equipment failures before they happen - AI analyzes sensor data and usage patterns",
        },
      ],
    },
    // Architecture Section
    architecture: {
      title: "MULTI-LAYER",
      titleHighlight: "4-TIER AI ARCHITECTURE",
      subtitle:
        "Confidence-based escalation system routes queries to the optimal AI layer",
      layers: [
        {
          name: "LOCAL AI",
          model: "DeepSeek R1 8B",
          description: "70% queries resolved locally, <100ms response time",
        },
        {
          name: "SUPPORT AI",
          model: "Llama 3.2 11B",
          description: "Specialized 24/7 analysis, no tickets required",
        },
        {
          name: "CENTRAL AI",
          model: "Llama 3.3 70B",
          description: "Complex bug optimization and system-wide decisions",
        },
        {
          name: "DEVOPS AI",
          model: "DeepSeek Coder 33B",
          description:
            "Code auto-healing, autonomous resolution, continuous deployment",
        },
      ],
      cta: "See Technical Demo",
    },
    // Comparison Section
    comparison: {
      title: "CUBIX vs",
      titleEnd: "TRADITIONAL CONSTRUCTION SOFTWARE",
      tableHeaders: {
        feature: "Feature",
        traditional: "Odoo, SAP, Procore, Primavera",
        cubix: "CUBIX Construction",
      },
      features: [
        { feature: "IoT integration for legacy machinery" },
        { feature: "Digital quality control with auto-reporting" },
        { feature: "Built for construction workflows" },
        { feature: "Affordable project-based pricing" },
        { feature: "AI-powered project insights" },
        {
          feature: "Setup time",
          traditional: "Months with consultants",
          cubix: "Plug-and-play, works immediately",
        },
        {
          feature: "Fleet/equipment tracking",
          traditional: "Limited or add-on",
          cubix: "GPS + OBD-II integration built-in",
        },
      ],
    },
    // Modules Section
    modules: {
      title: "CONSTRUCTION",
      titleHighlight: "CORE MODULES",
      subtitle:
        "Complete project lifecycle management built for the construction industry",
      items: [
        {
          name: "Projects",
          description:
            "Complete project lifecycle management - planning, execution, tracking, and closeout",
        },
        {
          name: "Quality Control",
          description:
            "Digital inspections, photo documentation, compliance checklists, automated reports",
        },
        {
          name: "IoT Integration",
          description:
            "Sensor monitoring, legacy machinery integration, real-time alerts, camera-based monitoring",
        },
        {
          name: "Fleet Tracking",
          description:
            "GPS vehicle tracking, route optimization, fuel monitoring, maintenance scheduling",
        },
        {
          name: "Equipment Management",
          description:
            "Asset tracking, usage logs, maintenance history, rental coordination",
        },
        {
          name: "Workforce Management",
          description:
            "Timesheets, crew assignments, skill tracking, safety certifications",
        },
        {
          name: "Materials & Inventory",
          description:
            "Stock levels, supplier management, delivery tracking, waste monitoring",
        },
        {
          name: "Document Management",
          description:
            "Blueprints, permits, contracts, RFIs, change orders - all centralized",
        },
        {
          name: "Financial Tracking",
          description:
            "Project budgets, cost tracking, invoicing, expense management",
        },
        {
          name: "Safety & Compliance",
          description:
            "Incident reporting, safety inspections, regulatory compliance, audit trails",
        },
      ],
      note: "These 10 core construction modules are included in the MVP. Full system will include 70+ modules.",
    },
    // Roadmap Section
    roadmap: {
      title: "DEVELOPMENT",
      titleHighlight: "ROADMAP",
      subtitle:
        "From foundation to enterprise-grade construction management system",
      timeline: {
        title: "Product Launch Timeline",
        closedAlpha: {
          date: "July 2026",
          label: "CLOSED ALPHA",
          description: "Limited access for early testers",
        },
        openBeta: {
          date: "September 2026",
          label: "OPEN BETA",
          description: "Public testing phase begins",
        },
        mvp: {
          date: "January 2027",
          label: "MVP LAUNCH",
          description: "Full product release",
        },
      },
      phases: [
        {
          phase: "Phase 1",
          name: "CORE FOUNDATION",
          duration: "Q1 2026 - COMPLETED",
          features: [
            "Multi-tenant architecture",
            "AI engine (4-layer system)",
            "Authentication & permissions",
            "Database & API infrastructure",
          ],
        },
        {
          phase: "Phase 2",
          name: "CONSTRUCTION MODULES",
          duration: "Q2 2026 - CURRENT",
          features: [
            "Projects module",
            "Quality Control (digital inspections)",
            "Equipment Management",
            "Document Management",
          ],
        },
        {
          phase: "Phase 3",
          name: "IoT & FLEET",
          duration: "Q3 2026",
          features: [
            "IoT basic integration",
            "Fleet tracking (GPS)",
            "Workforce timesheets",
            "Materials & Inventory",
          ],
        },
        {
          phase: "Phase 4",
          name: "ADVANCED IoT",
          duration: "Q4 2026",
          features: [
            "Vision-based monitoring (analog gauges)",
            "Sensor marketplace integration",
            "Predictive maintenance AI",
            "Equipment automation triggers",
          ],
        },
        {
          phase: "Phase 5",
          name: "ENTERPRISE & COMPLIANCE",
          duration: "Q1 2027",
          features: [
            "Multi-project portfolio management",
            "Advanced financial analytics",
            "ISO 9001 quality templates",
            "Portuguese tax authority integration (SAF-T)",
          ],
        },
        {
          phase: "Phase 6",
          name: "MVP LAUNCH",
          duration: "January 2027",
          features: [
            "All modules integrated",
            "Mobile app (iOS/Android)",
            "ERP integrations (SAP, Oracle)",
            "Full production release",
          ],
        },
      ],
      note: "Structured development with focus on construction-specific features and IoT integration",
    },
    // Tech Stack Section
    techStack: {
      title: "BUILT WITH",
      titleHighlight: "CUTTING-EDGE TECHNOLOGY",
      patentTitle: "PATENTED ARCHITECTURE",
      quote: "Unique confidence-based escalation system",
      metrics: [
        "Built for Construction Workflows",
        "AI Analyzes Photos, Sensors & Gauges",
        "IoT Ready for Legacy Equipment",
      ],
      badge: "Open Source & Privacy-First",
      dateNote: "Features implemented as of November 27, 2025",
    },
    earlyAccess: {
      title: "JOIN OUR",
      titleHighlight: "EARLY ACCESS PROGRAM",
      subtitle: "Be among the first to experience CUBIX and shape its future",
      tiers: [
        {
          name: "CLOSED ALPHA",
          date: "May 15, 2026",
          badge: "Limited Slots",
          features: [
            "Exclusive first access",
            "Direct developer communication",
            "Influence product direction",
            "Automatic Beta access",
          ],
        },
        {
          name: "BETA TESTING",
          date: "August 1, 2026",
          badge: "Public Testing",
          features: [
            "Early feature access",
            "Priority bug reporting",
            "Community feedback forum",
            "Production-ready experience",
          ],
        },
      ],
      benefits: {
        title: "Early Tester Benefits",
        items: [
          {
            icon: "Gift",
            title: "Exclusive Discounts",
            description:
              "Alpha testers get 30% off first 2 years. Beta testers get 10% off first year.",
          },
          {
            icon: "Zap",
            title: "Priority Support",
            description:
              "Dedicated support channel with faster response times for all early testers.",
          },
          {
            icon: "Trophy",
            title: "Founder Status",
            description:
              "Recognized as a founding user with exclusive badge and lifetime perks.",
          },
          {
            icon: "Target",
            title: "Shape the Product",
            description:
              "Your feedback directly influences features and roadmap priorities.",
          },
        ],
        note: "Discounts only apply to annual or 2-year payment plans (not available for monthly billing). Alpha testers must commit to 2-year plan for 30% discount. Beta testers must commit to annual plan for 10% discount. Discounts apply to active participants who provide meaningful feedback.",
      },
      cta: {
        alpha: "Apply for Closed Alpha",
        beta: "Sign up for Beta",
      },
    },
    // TEAM SECTION
    team: {
      title: "MEET THE",
      titleHighlight: "DEVELOPMENT TEAM",
      subtitle:
        "Experienced engineers building the future of autonomous ERP systems",
      members: [
        {
          name: "Bruno Coelho",
          roles: [
            "Founder",
            "AI Engineer / ML Engineer",
            "Data Scientist / Database Architect",
            "Full-Stack Engineer",
          ],
          experience: "2+ years",
          yearJoined: "Since 2023",
          bio: "Full-stack developer specializing in AI integration and enterprise systems. Leading the development of CUBIX's autonomous architecture.",
          photo: "/bruno-profile.png",
          github: "https://github.com/BrunoKorpuzCoelho",
          linkedin: "https://www.linkedin.com/in/bruno-coelho-aa4071212/",
        },
      ],
      learnMore: "Learn More",
      cta: "Join Our Team",
    },
    // Pricing Section
    pricing: {
      title: "FLEXIBLE",
      titleHighlight: "PLANS",
      titleEnd: "FOR YOUR PROJECTS",
      subtitle:
        "Choose the deployment that fits your construction company's needs",
      tiers: [
        {
          name: "SaaS (Cloud)",
          subtitle: "Cloud-hosted solution",
          features: [
            "Up to X active projects",
            "Unlimited users",
            "50GB storage (documents/photos)",
            "GPS tracking for Y vehicles",
            "Z IoT sensor connections",
            "Basic AI analytics",
            "Email support",
          ],
        },
        {
          name: "Self-Hosted",
          subtitle: "Complete Control",
          features: [
            "Unlimited projects",
            "Unlimited users",
            "Unlimited storage (your server)",
            "Unlimited vehicles/sensors",
            "Full AI capabilities",
            "White-label options",
            "Priority support + training",
          ],
        },
      ],
      cta: "Contact Us",
      alert:
        "Pricing details coming Q2 2026. Both plans include all core construction modules: Projects, Quality Control, IoT Integration, Fleet Tracking, and more.",
    },
    // Demo Section
    demo: {
      title: "SCHEDULE YOUR FREE",
      titleHighlight: "CONSTRUCTION DEMO",
      subtitle:
        "See how CUBIX can transform your construction project management",
      form: {
        fullName: "Full Name",
        email: "Business Email",
        company: "Company",
        phone: "Phone",
        employees: "Company Size",
        program: "Program",
        comments:
          "Number of Active Projects / Current Software Used (optional)",
        commentsPlaceholder:
          "Tell us about your projects and current software...",
        privacy: "I accept the privacy policy",
        submit: "Schedule Your Free Demo",
        submitAlpha: "Join Closed Alpha",
        submitBeta: "Join Open Beta",
        submitMVP: "Join MVP Launch",
        submitting: "Sending...",
        required: "*",
        selectPlaceholder: "Select...",
        employeeOptions: {
          "1-10": "1-10 employees",
          "11-50": "11-50 employees",
          "51-200": "51-200 employees",
          "200+": "200+ employees",
        },
        programOptions: {
          placeholder: "Select program...",
          alpha: "Closed Alpha (July 2026)",
          beta: "Open Beta (September 2026)",
          mvp: "MVP Launch (January 2027)",
        },
        securityNote: "Your data is secure",
        contactTime: "Contact within 24h",
        alert:
          "⚠️ Limited MVP slots available - early adopters get exclusive benefits",
      },
      success: {
        title: "Welcome to CUBIX Construction!",
        message:
          "Thank you for your interest! You'll receive detailed information about our construction management system. Our team will contact you within 24 hours to schedule your personalized demo.",
      },
    },
    // FAQ Section
    faq: {
      title: "FREQUENTLY ASKED",
      titleHighlight: "QUESTIONS",
      items: [
        {
          question: "How is Cubix different from Procore or Primavera?",
          answer:
            "Cubix is built AI-first with native IoT integration. Unlike traditional systems that bolt-on features, our architecture is designed for automation from the ground up. Plus, we work with legacy machinery - no expensive retrofits needed. We focus on practical construction solutions, not generic business software adapted for construction.",
        },
        {
          question: "Can it really integrate with old analog machinery?",
          answer:
            "Yes! Using computer vision AI, we can read analog gauges, manometers, and sensors from camera feeds. We also support simple IoT sensors for movement detection and basic monitoring on equipment from the 1980s-90s. No need to replace your existing machinery - we make it smart.",
        },
        {
          question: "What about data privacy and security?",
          answer:
            "Complete data isolation per company. Your project data never mixes with other clients. We're GDPR compliant and use enterprise-grade encryption. See our 130+ security rules documentation. For maximum control, choose our self-hosted option.",
        },
        {
          question: "Do I need to replace my existing ERP/accounting software?",
          answer:
            "No! Cubix focuses on construction operations (projects, quality, IoT, fleet). We integrate with your existing accounting software (SAP, Oracle, PHC, Primavera) via APIs. Run both systems simultaneously during testing, with automatic data synchronization.",
        },
        {
          question: "How does GPS fleet tracking work?",
          answer:
            "Simple GPS devices install in vehicles. We also support OBD-II integration for fuel consumption, engine diagnostics, and real-time cost tracking per project. Monitor your entire fleet from a single dashboard with route history and geofencing alerts.",
        },
        {
          question: "What's included in the MVP launch?",
          answer:
            "Projects, Quality Control (digital inspections), IoT basics (sensors + alerts), GPS Fleet Tracking, and Workforce Timesheets. Everything needed to start managing construction digitally. Full roadmap includes advanced IoT, predictive maintenance, and enterprise features by Q1 2027.",
        },
      ],
      cta: "Still have questions? Contact us",
    },
    // Footer
    footer: {
      tagline: "The first system built for the construction industry",
      product: {
        title: "PRODUCT",
        features: "Construction Features",
        technology: "IoT Technology",
        pricing: "Pricing",
      },
      company: {
        title: "COMPANY",
        about: "About Us",
        blog: "Blog",
        careers: "Careers",
      },
      legal: {
        title: "LEGAL",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookies: "Cookies",
      },
      copyright: "© 2025 CUBIX Construction. All rights reserved.",
    },
    // Construction Banner
    banner: {
      message:
        "🚧 This page is currently under development. Features and content may change.",
    },
    underConstruction: {
      title: "PAGE UNDER",
      titleHighlight: "CONSTRUCTION",
      subtitle: "We're working hard to bring you this feature",
      message:
        "This page is currently being developed. The CUBIX platform is under construction, and new features are being added regularly. Thank you for your patience as we build the future of autonomous ERP systems.",
      eta: "Expected completion: Q1 2026",
      backHome: "Back to Home",
      signUpMVP: "Sign Up for MVP",
    },
  },
  pt: {
    // Header
    nav: {
      home: "Início",
      product: "Produto",
      technology: "Tecnologia",
      contact: "Contacto",
      signUpMVP: "Inscrever-se no MVP",
    },
    // Hero Section
    hero: {
      patentBadge: "ARQUITETURA PATENTEADA",
      title: "O PRIMEIRO SISTEMA CONSTRUÍDO PARA A",
      titleHighlight: "INDÚstRIA DA CONSTRUÇÃO",
      titleEnd: "",
      subtitle:
        "Gestão automatizada de projetos com integração IoT e controlo de qualidade com IA",
      subtitleFeatures:
        "IoT Pronto • Controlo de Qualidade • Rastreamento de Frota GPS • Integração de Equipamento Legado",
      ctaPrimary: "Inscrever-se no MVP gratuito",
      ctaSecondary: "Ver Como Funciona",
      imageAlt: "Painel CUBIX Construção",
    },
    // Problem Section
    problem: {
      title: "O SOFTWARE DE CONSTRUÇÃO TRADICIONAL É",
      titleHighlight: "DESATUALIZADO",
      painPoints: [
        {
          title: "Sem integração IoT",
          description: "Não consegue conectar maquinária legada",
        },
        {
          title: "Controlo de qualidade manual",
          description: "Clipboard para digital - ineficiente",
        },
        {
          title: "Licenciamento caro por utilizador",
          description: "Custos aumentam com cada novo utilizador",
        },
        {
          title: "Rastreamento de frota fraco",
          description: "Sem monitorização de equipamento em tempo real",
        },
        {
          title: "Configuração complexa",
          description: "Meses de consultores e formação",
        },
      ],
      quote:
        "Odoo, SAP, Procore, Primavera... são construídos para negócios genéricos. CUBIX é construído especificamente para construção com IoT, controlo de qualidade e gestão de frota desde o primeiro dia.",
    },
    // Solution Section
    solution: {
      title: "CUBIX:",
      titleHighlight: "IA ESTRUTURAL",
      titleEnd: ", NÃO COMPLEMENTO",
      subtitle:
        "Construído de raiz com IA no seu núcleo, não como um complemento",
      features: [
        {
          title: "IoT para Maquinária Legada",
          description:
            "Integre equipamento analógico antigo usando visão computacional e sensores simples - sem retrofits caros",
        },
        {
          title: "Controlo de Qualidade Automatizado",
          description:
            "Inspeções digitais com documentação fotográfica, deteção automática de problemas e relatórios instantâneos de conformidade",
        },
        {
          title: "Rastreamento Inteligente de Projetos",
          description:
            "Estado do projeto em tempo real, alocação de recursos e previsões de cronograma alimentadas por análise de IA",
        },
        {
          title: "Gestão de Frota e Equipamento",
          description:
            "Rastreamento GPS, monitorização de combustível via OBD-II, agendamento de manutenção e análise de custos por projeto",
        },
        {
          title: "Monitorização Baseada em Visão",
          description:
            "IA lê manómetros analógicos, deteta perigos de segurança, monitoriza níveis de materiais - tudo a partir de feeds de câmera",
        },
        {
          title: "Manutenção Preditiva",
          description:
            "Previna falhas de equipamento antes que aconteçam - IA analisa dados de sensores e padrões de uso",
        },
      ],
    },
    // Architecture Section
    architecture: {
      title: "ARQUITETURA",
      titleHighlight: "IA DE 4 CAMADAS MULTINÍVEL",
      subtitle:
        "Sistema de escalamento baseado em confiança encaminha consultas para a camada ideal de IA",
      layers: [
        {
          name: "IA LOCAL",
          model: "DeepSeek R1 8B",
          description:
            "70% das consultas resolvidas localmente, <100ms tempo de resposta",
        },
        {
          name: "IA DE SUPORTE",
          model: "Llama 3.2 11B",
          description: "Análise especializada 24/7, sem tickets necessários",
        },
        {
          name: "IA CENTRAL",
          model: "Llama 3.3 70B",
          description: "Otimização complexa de bugs e decisões do sistema",
        },
        {
          name: "IA DEVOPS",
          model: "DeepSeek Coder 33B",
          description:
            "Auto-reparação de código, resolução autónoma, implementação contínua",
        },
      ],
      cta: "Ver Demonstração Técnica",
    },
    // Comparison Section
    comparison: {
      title: "CUBIX vs",
      titleEnd: "SOFTWARE DE CONSTRUÇÃO TRADICIONAL",
      tableHeaders: {
        feature: "Funcionalidade",
        traditional: "Odoo, SAP, Procore, Primavera",
        cubix: "CUBIX Construção",
      },
      features: [
        { feature: "Integração IoT para maquinária legada" },
        { feature: "Controlo de qualidade digital com auto-relatório" },
        { feature: "Construído para fluxos de trabalho de construção" },
        { feature: "Preços acessíveis baseados em projeto" },
        { feature: "Insights de projeto alimentados por IA" },
        {
          feature: "Tempo de configuração",
          traditional: "Meses com consultores",
          cubix: "Plug-and-play, funciona imediatamente",
        },
        {
          feature: "Rastreamento de frota/equipamento",
          traditional: "Limitado ou complemento",
          cubix: "Integração GPS + OBD-II incluída",
        },
      ],
    },
    // Modules Section
    modules: {
      title: "MÓDULOS",
      titleHighlight: "PRINCIPAIS DE CONSTRUÇÃO",
      subtitle:
        "Gestão completa do ciclo de vida do projeto construída para a indústria da construção",
      items: [
        {
          name: "Projetos",
          description:
            "Gestão completa do ciclo de vida do projeto - planeamento, execução, rastreamento e encerramento",
        },
        {
          name: "Controlo de Qualidade",
          description:
            "Inspeções digitais, documentação fotográfica, checklists de conformidade, relatórios automatizados",
        },
        {
          name: "Integração IoT",
          description:
            "Monitorização de sensores, integração de maquinária legada, alertas em tempo real, monitorização baseada em câmera",
        },
        {
          name: "Rastreamento de Frota",
          description:
            "Rastreamento GPS de veículos, otimização de rotas, monitorização de combustível, agendamento de manutenção",
        },
        {
          name: "Gestão de Equipamento",
          description:
            "Rastreamento de ativos, registos de uso, histórico de manutenção, coordenação de aluguer",
        },
        {
          name: "Gestão de Força de Trabalho",
          description:
            "Folhas de ponto, atribuições de equipa, rastreamento de competências, certificações de segurança",
        },
        {
          name: "Materiais e Inventário",
          description:
            "Níveis de stock, gestão de fornecedores, rastreamento de entregas, monitorização de desperdícios",
        },
        {
          name: "Gestão de Documentos",
          description:
            "Plantas, licenças, contratos, RFIs, ordens de alteração - tudo centralizado",
        },
        {
          name: "Rastreamento Financeiro",
          description:
            "Orçamentos de projeto, rastreamento de custos, faturação, gestão de despesas",
        },
        {
          name: "Segurança e Conformidade",
          description:
            "Relatório de incidentes, inspeções de segurança, conformidade regulamentar, trilhas de auditoria",
        },
      ],
      note: "Estes 10 módulos principais de construção estão incluídos no MVP. O sistema completo incluirá mais de 70 módulos.",
    },
    // Roadmap Section
    roadmap: {
      title: "ROTEIRO DE",
      titleHighlight: "DESENVOLVIMENTO",
      subtitle:
        "Da fundação ao sistema de gestão de construção de nível empresarial",
      timeline: {
        title: "Cronograma de Lançamento do Produto",
        closedAlpha: {
          date: "Julho 2026",
          label: "ALPHA FECHADO",
          description: "Acesso limitado para testadores iniciais",
        },
        openBeta: {
          date: "Setembro 2026",
          label: "BETA ABERTO",
          description: "Fase de testes públicos começa",
        },
        mvp: {
          date: "Janeiro 2027",
          label: "LANÇAMENTO MVP",
          description: "Lançamento completo do produto",
        },
      },
      phases: [
        {
          phase: "Fase 1",
          name: "FUNDAÇÃO PRINCIPAL",
          duration: "Q1 2026 - CONCLUÍDO",
          features: [
            "Arquitetura multi-tenant",
            "Motor de IA (sistema de 4 camadas)",
            "Autenticação e permissões",
            "Infraestrutura de base de dados e API",
          ],
        },
        {
          phase: "Fase 2",
          name: "MÓDULOS DE CONSTRUÇÃO",
          duration: "Q2 2026 - ATUAL",
          features: [
            "Módulo de projetos",
            "Controlo de Qualidade (inspeções digitais)",
            "Gestão de Equipamento",
            "Gestão de Documentos",
          ],
        },
        {
          phase: "Fase 3",
          name: "IoT E FROTA",
          duration: "Q3 2026",
          features: [
            "Integração IoT básica",
            "Rastreamento de frota (GPS)",
            "Folhas de ponto da força de trabalho",
            "Materiais e Inventário",
          ],
        },
        {
          phase: "Fase 4",
          name: "IoT AVANÇADO",
          duration: "Q4 2026",
          features: [
            "Monitorização baseada em visão (manómetros analógicos)",
            "Integração de marketplace de sensores",
            "IA de manutenção preditiva",
            "Gatilhos de automação de equipamento",
          ],
        },
        {
          phase: "Fase 5",
          name: "EMPRESA E CONFORMIDADE",
          duration: "Q1 2027",
          features: [
            "Gestão de portfólio multi-projeto",
            "Análises financeiras avançadas",
            "Modelos de qualidade ISO 9001",
            "Integração com autoridade fiscal portuguesa (SAF-T)",
          ],
        },
        {
          phase: "Fase 6",
          name: "LANÇAMENTO MVP",
          duration: "Janeiro 2027",
          features: [
            "Todos os módulos integrados",
            "App móvel (iOS/Android)",
            "Integrações ERP (SAP, Oracle)",
            "Lançamento completo em produção",
          ],
        },
      ],
      note: "Desenvolvimento estruturado com foco em recursos específicos de construção e integração IoT",
    },
    // Tech Stack Section
    techStack: {
      title: "CONSTRUÍDO COM",
      titleHighlight: "TECNOLOGIA DE PONTA",
      patentTitle: "ARQUITETURA PATENTEADA",
      quote: "Sistema único de escalamento baseado em confiança",
      metrics: [
        "Construído para Fluxos de Trabalho de Construção",
        "IA Analisa Fotos, Sensores e Manómetros",
        "IoT Pronto para Equipamento Legado",
      ],
      badge: "Código Aberto e Privacidade em Primeiro Lugar",
      dateNote: "Funcionalidades implementadas em 27 de Novembro de 2025",
    },
    earlyAccess: {
      title: "JUNTE-SE AO NOSSO",
      titleHighlight: "PROGRAMA DE ACESSO ANTECIPADO",
      subtitle:
        "Seja dos primeiros a experimentar o CUBIX e moldar o seu futuro",
      tiers: [
        {
          name: "ALPHA FECHADO",
          date: "Julho 2026",
          badge: "Vagas Limitadas",
          features: [
            "Acesso exclusivo em primeira mão",
            "Comunicação direta com programadores",
            "Influenciar a direção do produto",
            "Acesso automático à Beta",
          ],
        },
        {
          name: "TESTE BETA",
          date: "Setembro 2026",
          badge: "Teste Público",
          features: [
            "Acesso antecipado a funcionalidades",
            "Reporte prioritário de bugs",
            "Fórum de feedback da comunidade",
            "Experiência pronta para produção",
          ],
        },
      ],
      benefits: {
        title: "Benefícios para Testadores Antecipados",
        items: [
          {
            icon: "Gift",
            title: "Descontos Exclusivos",
            description:
              "Testadores Alpha recebem 30% de desconto nos primeiros 2 anos. Testadores Beta recebem 10% de desconto no primeiro ano.",
          },
          {
            icon: "Zap",
            title: "Suporte Prioritário",
            description:
              "Canal de suporte dedicado com tempos de resposta mais rápidos para todos os testadores antecipados.",
          },
          {
            icon: "Trophy",
            title: "Status de Fundador",
            description:
              "Reconhecido como utilizador fundador com distintivo exclusivo e benefícios vitalícios.",
          },
          {
            icon: "Target",
            title: "Moldar o Produto",
            description:
              "O seu feedback influencia diretamente as funcionalidades e prioridades do roteiro.",
          },
        ],
        note: "Os descontos aplicam-se apenas a planos de pagamento anual ou de 2 anos (não disponível para faturação mensal). Testadores Alpha devem comprometer-se com o plano de 2 anos para receberem 30% de desconto. Testadores Beta devem comprometer-se com o plano anual para receberem 10% de desconto. Os descontos aplicam-se a participantes ativos que fornecem feedback significativo.",
      },
      cta: {
        alpha: "Candidatar-se ao Alpha Fechado",
        beta: "Inscrever-se na Beta",
      },
    },
    // TEAM SECTION
    team: {
      title: "CONHEÇA A",
      titleHighlight: "EQUIPA DE DESENVOLVIMENTO",
      subtitle:
        "Engenheiros experientes a construir o futuro dos sistemas ERP autónomos",
      members: [
        {
          name: "Bruno Coelho",
          roles: [
            "Fundador",
            "Engenheiro de IA / Engenheiro de ML",
            "Cientista de Dados / Arquiteto de BD",
            "Engenheiro Full-Stack",
          ],
          experience: "Mais de 2 anos",
          yearJoined: "Desde 2023",
          bio: "Desenvolvedor full-stack especializado em integração de IA e sistemas empresariais. Lidera o desenvolvimento da arquitetura autónoma do CUBIX.",
          photo: "/bruno-profile.png",
          github: "https://github.com/BrunoKorpuzCoelho",
          linkedin: "https://www.linkedin.com/in/bruno-coelho-aa4071212/",
        },
      ],
      learnMore: "Saber Mais",
      cta: "Junte-se à Nossa Equipa",
    },
    // Pricing Section
    pricing: {
      title: "PLANOS",
      titleHighlight: "FLEXÍVEIS",
      titleEnd: "PARA OS SEUS PROJETOS",
      subtitle:
        "Escolha a implementação que se adequa às necessidades da sua empresa de construção",
      tiers: [
        {
          name: "SaaS (Cloud)",
          subtitle: "Solução hospedada na nuvem",
          features: [
            "Até X projetos ativos",
            "Utilizadores ilimitados",
            "50GB de armazenamento (documentos/fotos)",
            "Rastreamento GPS para Y veículos",
            "Z conexões de sensores IoT",
            "Análises de IA básicas",
            "Suporte por email",
          ],
        },
        {
          name: "Auto-Hospedado",
          subtitle: "Controlo Completo",
          features: [
            "Projetos ilimitados",
            "Utilizadores ilimitados",
            "Armazenamento ilimitado (seu servidor)",
            "Veículos/sensores ilimitados",
            "Capacidades completas de IA",
            "Opções white-label",
            "Suporte prioritário + formação",
          ],
        },
      ],
      cta: "Contacte-nos",
      alert:
        "Detalhes de preços chegam no Q2 2026. Ambos os planos incluem todos os módulos principais de construção: Projetos, Controlo de Qualidade, Integração IoT, Rastreamento de Frota e muito mais.",
    },
    // Demo Section
    demo: {
      title: "AGENDE A SUA",
      titleHighlight: "DEMO DE CONSTRUÇÃO GRATUITA",
      subtitle:
        "Veja como o CUBIX pode transformar a gestão dos seus projetos de construção",
      form: {
        fullName: "Nome Completo",
        email: "Email Empresarial",
        company: "Empresa",
        phone: "Telefone",
        employees: "Tamanho da Empresa",
        program: "Programa",
        comments:
          "Número de Projetos Ativos / Software Atual Utilizado (opcional)",
        commentsPlaceholder:
          "Conte-nos sobre os seus projetos e software atual...",
        privacy: "Aceito a política de privacidade",
        submit: "Agende a Sua Demo Gratuita",
        submitAlpha: "Juntar-me à Alpha Fechada",
        submitBeta: "Juntar-me à Beta Aberta",
        submitMVP: "Juntar-me ao Lançamento MVP",
        submitting: "A enviar...",
        required: "*",
        selectPlaceholder: "Selecione...",
        employeeOptions: {
          "1-10": "1-10 funcionários",
          "11-50": "11-50 funcionários",
          "51-200": "51-200 funcionários",
          "200+": "200+ funcionários",
        },
        programOptions: {
          placeholder: "Selecionar programa...",
          alpha: "Alpha Fechada (Julho 2026)",
          beta: "Beta Aberta (Setembro 2026)",
          mvp: "Lançamento MVP (Janeiro 2027)",
        },
        securityNote: "Os seus dados estão seguros",
        contactTime: "Contacto dentro de 24 horas",
        alert:
          "⚠️ Slots limitados de MVP disponíveis - os adotantes antecipados obtêm benefícios exclusivos",
      },
      success: {
        title: "Bem-vindo ao CUBIX Construção!",
        message:
          "Obrigado pelo seu interesse! Irá receber informações detalhadas sobre o nosso sistema de gestão de construção. A nossa equipa contactará o dentro de 24 horas para agendar a sua demo personalizada.",
      },
    },
    // FAQ Section
    faq: {
      title: "PERGUNTAS",
      titleHighlight: "MAIS FREQUENTES",
      items: [
        {
          question: "Como é que o Cubix é diferente do Procore ou Primavera?",
          answer:
            "O Cubix é construído com IA em primeiro lugar com integração IoT nativa. Ao contrário dos sistemas tradicionais que adicionam funcionalidades, a nossa arquitetura é projetada para automação desde o início. Além disso, trabalhamos com maquinária legada - sem retrofits caros necessários. Focamos em soluções práticas de construção, não software de negócios genérico adaptado para construção.",
        },
        {
          question: "Pode realmente integrar com maquinária analógica antiga?",
          answer:
            "Sim! Usando IA de visão computacional, podemos ler manómetros analógicos, manómetros e sensores a partir de feeds de câmera. Também suportamos sensores IoT simples para deteção de movimento e monitorização básica em equipamento dos anos 80-90. Não precisa de substituir a sua maquinária existente - nós tornamo-la inteligente.",
        },
        {
          question: "E quanto à privacidade e segurança dos dados?",
          answer:
            "Isolamento completo de dados por empresa. Os dados do seu projeto nunca se misturam com outros clientes. Somos compatíveis com GDPR e usamos encriptação de nível empresarial. Veja a nossa documentação de mais de 130 regras de segurança. Para máximo controlo, escolha a nossa opção auto-hospedada.",
        },
        {
          question:
            "Preciso de substituir o meu ERP/software de contabilidade existente?",
          answer:
            "Não! O Cubix foca em operações de construção (projetos, qualidade, IoT, frota). Integramos com o seu software de contabilidade existente (SAP, Oracle, PHC, Primavera) via APIs. Execute ambos os sistemas simultaneamente durante os testes, com sincronização automática de dados.",
        },
        {
          question: "Como funciona o rastreamento de frota GPS?",
          answer:
            "Dispositivos GPS simples instalam-se nos veículos. Também suportamos integração OBD-II para consumo de combustível, diagnósticos do motor e rastreamento de custos em tempo real por projeto. Monitorize toda a sua frota a partir de um único painel com histórico de rotas e alertas de geofencing.",
        },
        {
          question: "O que está incluído no lançamento do MVP?",
          answer:
            "Projetos, Controlo de Qualidade (inspeções digitais), IoT básico (sensores + alertas), Rastreamento de Frota GPS e Folhas de Ponto da Força de Trabalho. Tudo o que é necessário para começar a gerir construção digitalmente. O roteiro completo inclui IoT avançado, manutenção preditiva e funcionalidades empresariais até Q1 2027.",
        },
      ],
      cta: "Ainda tem perguntas? Contacte-nos",
    },
    // Footer
    footer: {
      tagline: "O primeiro sistema construído para a indústria da construção",
      product: {
        title: "PRODUTO",
        features: "Funcionalidades de Construção",
        technology: "Tecnologia IoT",
        pricing: "Preços",
      },
      company: {
        title: "EMPRESA",
        about: "Sobre Nós",
        blog: "Blog",
        careers: "Carreiras",
      },
      legal: {
        title: "LEGAL",
        privacy: "Política de Privacidade",
        terms: "Termos de Serviço",
        cookies: "Cookies",
      },
      copyright: "© 2025 CUBIX Construção. Todos os direitos reservados.",
    },
    // Construction Banner
    banner: {
      message:
        "🚧 Esta página está atualmente em desenvolvimento. As funcionalidades e o conteúdo podem mudar.",
    },
    underConstruction: {
      title: "PÁGINA EM",
      titleHighlight: "CONSTRUÇÃO",
      subtitle:
        "Estamos a trabalhar arduamente para trazer-lhe esta funcionalidade",
      message:
        "Esta página está atualmente em desenvolvimento. A plataforma CUBIX está em construção e novas funcionalidades estão a ser adicionadas regularmente. Obrigado pela sua paciência enquanto construímos o futuro dos sistemas ERP autónomos.",
      eta: "Conclusão esperada: Q1 2026",
      backHome: "Voltar para Início",
      signUpMVP: "Inscrever-se no MVP",
    },
  },
  es: {
    // Header
    nav: {
      home: "Inicio",
      product: "Producto",
      technology: "Tecnología",
      contact: "Contacto",
      signUpMVP: "Registrarse para MVP",
    },
    // Hero Section
    hero: {
      patentBadge: "ARQUITECTURA PATENTADA",
      title: "EL PRIMER SISTEMA CONSTRUIDO PARA LA",
      titleHighlight: "INDUSTRIA DE LA CONSTRUCCIÓN",
      titleEnd: "",
      subtitle:
        "Gestión automatizada de proyectos con integración IoT y control de calidad con IA",
      subtitleFeatures:
        "IoT Listo • Control de Calidad • Seguimiento de Flota GPS • Integración de Equipo Legado",
      ctaPrimary: "Registrarse para MVP gratuito",
      ctaSecondary: "Ver Cómo Funciona",
      imageAlt: "Panel de CUBIX Construcción",
    },
    // Problem Section
    problem: {
      title: "EL SOFTWARE DE CONSTRUCCIÓN TRADICIONAL ES",
      titleHighlight: "DESACTUALIZADO",
      painPoints: [
        {
          title: "Sin integración IoT",
          description: "No puede conectar maquinaria heredada",
        },
        {
          title: "Control de calidad manual",
          description: "Portapapeles a digital - ineficiente",
        },
        {
          title: "Licencias caras por usuario",
          description: "Costos aumentan con cada nuevo usuario",
        },
        {
          title: "Seguimiento de flota deficiente",
          description: "Sin monitoreo de equipo en tiempo real",
        },
        {
          title: "Configuración compleja",
          description: "Meses de consultores y capacitación",
        },
      ],
      quote:
        "Odoo, SAP, Procore, Primavera... están construidos para negocios genéricos. CUBIX está construido específicamente para construcción con IoT, control de calidad y gestión de flota desde el primer día.",
    },
    // Solution Section
    solution: {
      title: "CUBIX:",
      titleHighlight: "IA ESTRUCTURAL",
      titleEnd: ", NO COMPLEMENTO",
      subtitle:
        "Construido desde cero con IA en su núcleo, no como un complemento",
      features: [
        {
          title: "IoT para Maquinaria Heredada",
          description:
            "Integre equipo analógico antiguo usando visión computacional y sensores simples - sin retrofits caros necesarios",
        },
        {
          title: "Control de Calidad Automatizado",
          description:
            "Inspecciones digitales con documentación fotográfica, detección automática de problemas e informes instantáneos de cumplimiento",
        },
        {
          title: "Seguimiento Inteligente de Proyectos",
          description:
            "Estado del proyecto en tiempo real, asignación de recursos y predicciones de cronograma impulsadas por análisis de IA",
        },
        {
          title: "Gestión de Flota y Equipos",
          description:
            "Rastreo GPS, monitoreo de combustible vía OBD-II, programación de mantenimiento y análisis de costos por proyecto",
        },
        {
          title: "Monitoreo Basado en Visión",
          description:
            "La IA lee medidores analógicos, detecta peligros de seguridad, monitorea niveles de materiales - todo desde feeds de cámara",
        },
        {
          title: "Mantenimiento Predictivo",
          description:
            "Prevenga fallas de equipo antes de que sucedan - la IA analiza datos de sensores y patrones de uso",
        },
      ],
    },
    // Architecture Section
    architecture: {
      title: "ARQUITECTURA",
      titleHighlight: "MULTICAPA DE IA DE 4 NIVELES",
      subtitle:
        "Sistema de escalada basado en confianza enruta consultas a la capa óptima de IA",
      layers: [
        {
          name: "IA LOCAL",
          model: "DeepSeek R1 8B",
          description:
            "70% de consultas resueltas localmente, tiempo de respuesta <100ms",
        },
        {
          name: "IA DE SOPORTE",
          model: "Llama 3.2 11B",
          description: "Análisis especializado 24/7, sin necesidad de tickets",
        },
        {
          name: "IA CENTRAL",
          model: "Llama 3.3 70B",
          description:
            "Optimización compleja de bugs y decisiones a nivel de sistema",
        },
        {
          name: "IA DEVOPS",
          model: "DeepSeek Coder 33B",
          description:
            "Auto-reparación de código, resolución autónoma, implementación continua",
        },
      ],
      cta: "Ver Demostración Técnica",
    },
    // Comparison Section
    comparison: {
      title: "CUBIX vs",
      titleEnd: "SOFTWARE DE CONSTRUCCIÓN TRADICIONAL",
      tableHeaders: {
        feature: "Característica",
        traditional: "Odoo, SAP, Procore, Primavera",
        cubix: "CUBIX Construcción",
      },
      features: [
        { feature: "Integración IoT para maquinaria heredada" },
        { feature: "Control de calidad digital con auto-informe" },
        { feature: "Construido para flujos de trabajo de construcción" },
        { feature: "Precios asequibles basados en proyecto" },
        { feature: "Insights de proyecto impulsados por IA" },
        {
          feature: "Tiempo de configuración",
          traditional: "Meses con consultores",
          cubix: "Plug-and-play, funciona inmediatamente",
        },
        {
          feature: "Seguimiento de flota/equipo",
          traditional: "Limitado o complemento",
          cubix: "Integración GPS + OBD-II incorporada",
        },
      ],
    },
    // Modules Section
    modules: {
      title: "MVP",
      titleHighlight: "MÓDULOS INCLUIDOS",
      subtitle:
        "Características principales listas para el lanzamiento de su negocio",
      items: [
        {
          name: "CRM y Leads",
          description:
            "Gestión de relaciones con clientes y seguimiento de leads",
        },
        {
          name: "Ventas y Facturación",
          description: "Ciclo completo de ventas y facturación automatizada",
        },
        {
          name: "Pedidos de Compra",
          description: "Adquisición y gestión de proveedores",
        },
        {
          name: "Gestión de Inventario",
          description: "Control de stock en tiempo real y almacenes",
        },
        {
          name: "Contabilidad",
          description: "Gestión financiera completa y informes",
        },
        {
          name: "Informes con IA",
          description: "Análisis inteligentes y pronósticos",
        },
        {
          name: "Flujos Automatizados",
          description: "Automatización personalizada de procesos de negocio",
        },
        {
          name: "Permisos y Seguridad",
          description: "Acceso basado en roles y protección de datos",
        },
        {
          name: "Multi-idioma",
          description: "Soporte internacional y localización",
        },
      ],
      note: "Estos 9 módulos principales están incluidos en el MVP. El producto final tendrá más de 70 módulos abrangentes.",
    },
    // Roadmap Section
    roadmap: {
      title: "RUTA:",
      titleHighlight: "12-16 MESES PARA COMPLETAR MVP",
      subtitle: "Línea de tiempo estructurada con ejecución paralela",
      timeline: {
        title: "Línea de Tiempo de Lanzamiento del Producto",
        closedAlpha: {
          date: "15 de Mayo de 2026",
          label: "ALFA CERRADO",
          description: "Acceso limitado para pruebas iniciales",
        },
        openBeta: {
          date: "1 de Agosto de 2026",
          label: "BETA ABIERTA",
          description: "Fase de pruebas públicas comienza",
        },
        mvp: {
          date: "1 de Enero de 2027",
          label: "LANZAMIENTO MVP",
          description: "Lanzamiento completo del producto",
        },
      },
      phases: [
        {
          phase: "Fase 1",
          name: "BASE PRINCIPAL",
          duration: "0-6/8 meses",
          features: [
            "Base completa del sistema",
            "Base de datos y ORM",
            "Autenticación y Seguridad",
            "Vistas y UI",
            "API REST",
            "IA Nativa",
          ],
        },
        {
          phase: "Fase 2",
          name: "APP CRM",
          duration: "1-2 meses",
          features: [
            "Módulo CRM Completo",
            "Leads y Oportunidades",
            "Automatización de Marketing",
          ],
        },
        {
          phase: "Fase 3",
          name: "APP VENTAS",
          duration: "1-2 meses",
          features: [
            "Módulo de Ventas Completo",
            "Presupuestos y Pedidos",
            "Facturas y Pagos",
          ],
        },
        {
          phase: "Fase 4",
          name: "APP INVENTARIO",
          duration: "1-2 meses",
          features: [
            "Módulo de Inventario Completo",
            "Almacenes y Stock",
            "Lotes y Números de Serie",
          ],
        },
        {
          phase: "Fase 5",
          name: "APP COMPRAS",
          duration: "1-2 meses",
          features: [
            "Módulo de Compras Completo",
            "Requisiciones y Pedidos",
            "Gestión de Proveedores",
          ],
        },
        {
          phase: "Fase 6",
          name: "APP CONTABILIDAD",
          duration: "1-2 meses",
          features: [
            "Módulo de Contabilidad Completo",
            "Gestión Financiera",
            "Informes Avanzados",
          ],
        },
      ],
      note: "Desarrollo paralelo después de la Fase 1 acelera el tiempo al mercado",
    },
    // Tech Stack Section
    techStack: {
      title: "CONSTRUIDO CON",
      titleHighlight: "TECNOLOGÍA DE PUNTA",
      patentTitle: "ARQUITECTURA PATENTADA",
      quote: "Sistema único de escalada basado en confianza",
      metrics: [
        "Más de 150.000 líneas de código",
        "16 módulos de análisis autónomos",
        "Más de 100 funciones de análisis inteligente",
      ],
      badge: "Código Abierto y Privacidad Primero",
      dateNote: "Características implementadas el 27 de Noviembre de 2025",
    },
    earlyAccess: {
      title: "ÚNASE A NUESTRO",
      titleHighlight: "PROGRAMA DE ACCESO PRONTO",
      subtitle:
        "Sea uno de los primeros en experimentar CUBIX y moldear su futuro",
      tiers: [
        {
          name: "ALFA CERRADO",
          date: "15 de Mayo de 2026",
          badge: "Plazas Limitadas",
          features: [
            "Acceso exclusivo en primera mano",
            "Comunicación directa con desarrolladores",
            "Influenciar la dirección del producto",
            "Acceso automático a Beta",
          ],
        },
        {
          name: "PRUEBA BETA",
          date: "1 de Agosto de 2026",
          badge: "Prueba Pública",
          features: [
            "Acceso anticipado a características",
            "Reporte prioritario de bugs",
            "Foro de feedback de la comunidad",
            "Experiencia lista para producción",
          ],
        },
      ],
      benefits: {
        title: "Beneficios para Pruebaadores Tempranos",
        items: [
          {
            icon: "Gift",
            title: "Descuentos Exclusivos",
            description:
              "Los testadores Alpha obtienen un 30% de descuento en los primeros 2 años. Los testadores Beta obtienen un 10% de descuento en el primer año.",
          },
          {
            icon: "Zap",
            title: "Soporte Prioritario",
            description:
              "Canal de soporte dedicado con tiempos de respuesta más rápidos para todos los testadores tempranos.",
          },
          {
            icon: "Trophy",
            title: "Estado de Fundador",
            description:
              "Reconocido como usuario fundador con distintivo exclusivo y beneficios vitales.",
          },
          {
            icon: "Target",
            title: "Moldar el Producto",
            description:
              "Su feedback influye directamente en las características y prioridades de la ruta.",
          },
        ],
        note: "Los descuentos solo aplican a planes de pago anuales o de 2 años (no disponibles para facturación mensual). Los testadores Alpha deben comprometerse con el plan de 2 años para recibir un 30% de descuento. Los testadores Beta deben comprometerse con el plan anual para recibir un 10% de descuento. Los descuentos aplican a participantes activos que proporcionan feedback significativo.",
      },
      cta: {
        alpha: "Postularse para Alpha Cerrado",
        beta: "Registrarse en Beta",
      },
    },
    // TEAM SECTION
    team: {
      title: "CONOZCA A LA",
      titleHighlight: "EQUIPA DE DESARROLLO",
      subtitle:
        "Ingenieros experimentados construyendo el futuro de los sistemas ERP autónomos",
      members: [
        {
          name: "Bruno Coelho",
          roles: [
            "Fundador",
            "Ingeniero de IA / Ingeniero de ML",
            "Científico de Datos / Arquitecto de BD",
            "Desarrollador Full-Stack",
          ],
          experience: "Más de 2 años",
          yearJoined: "Desde 2023",
          bio: "Desarrollador full-stack especializado en integración de IA y sistemas empresariais. Lidera el desarrollo de la arquitectura autónoma de CUBIX.",
          photo: "/bruno-profile.png",
          github: "https://github.com/BrunoKorpuzCoelho",
          linkedin: "https://www.linkedin.com/in/bruno-coelho-aa4071212/",
        },
      ],
      learnMore: "Aprender Más",
      cta: "Únete a Nuestra Equipo",
    },
    // Pricing Section
    pricing: {
      title: "PLANOS",
      titleHighlight: "FLEXIBLES",
      titleEnd: "PARA SU NEGOCIO",
      subtitle:
        "Todos los planes incluyen 3 usuarios base. Escala hasta usuarios ilimitados ajustando la tarifa mensual.",
      tiers: [
        {
          name: "SaaS",
          subtitle: "Infraestructura Compartida",
          features: [
            "Base: 3 usuarios incluidos",
            "Escala hasta usuarios ilimitados",
            "Todos los módulos incluidos",
            "Soporte completo",
            "Actualizaciones mensuales",
            "IA de Soporte (3 capas: Soporte, Central, DevOps)",
            "Sin IA estructural (ambiente compartido)",
          ],
        },
        {
          name: "HOSTING DE SERVIDOR",
          subtitle: "VPS Dedicado",
          features: [
            "Base: 3 usuarios incluidos",
            "Escala hasta usuarios ilimitados",
            "Todos los módulos incluidos",
            "Soporte completo",
            "Actualizaciones mensuales",
            "Desarrollo personalizado disponible",
            "IA Estructural (Todas las 4 capas de IA incluyendo Local)",
            "Recursos de servidor dedicados",
          ],
        },
      ],
      cta: "Contacte-nos",
      alert:
        "El MVP incluye las capas IA Local y IA Central. Las capas IA DevOps y IA de Soporte serán agregadas en el lanzamiento completo del producto. Hasta entonces, la capa IA Central maneja operaciones DevOps y tiene capacidad total para hacerlo.",
    },
    // Demo Section
    demo: {
      title: "INSCRIVEZ-VOUS GRATUITEMENT",
      titleHighlight: "ACCÈS AU MVP",
      subtitle:
        "Rejoignez les early adopters et soyez le premier à découvrir la gestion d'entreprise avec IA de CUBIX",
      form: {
        fullName: "Nom Complet",
        email: "Email Professionnel",
        company: "Entreprise",
        phone: "Téléphone",
        employees: "Nombre d'Employés",
        program: "Programme",
        comments: "Commentaires",
        commentsPlaceholder: "Parlez-nous de vos besoins...",
        privacy: "J'accepte la politique de confidentialité",
        submit: "S'inscrire pour Votre MVP Gratuit",
        submitAlpha: "Rejoindre l'Alpha Fermée",
        submitBeta: "Rejoindre la Bêta Ouverte",
        submitMVP: "Rejoindre le Lancement MVP",
        submitting: "Envoi...",
        required: "*",
        selectPlaceholder: "Sélectionner...",
        employeeOptions: {
          "1-10": "1-10",
          "11-50": "11-50",
          "51-200": "51-200",
          "200+": "200+",
        },
        programOptions: {
          placeholder: "Sélectionner le programme...",
          alpha: "Alpha Fermée (Juillet 2026)",
          beta: "Bêta Ouverte (Septembre 2026)",
          mvp: "Lancement MVP (Janvier 2027)",
        },
        securityNote: "Vos données sont sécurisées",
        contactTime: "Contact sous 24h",
        alert:
          "⚠️ Places limitées pour le MVP - les early adopters reçoivent des avantages exclusifs",
      },
      success: {
        title: "¡Bienvenido al MVP de CUBIX!",
        message:
          "¡Gracias por registrarte! Recibirás información detallada sobre nuestros programas Alpha, Beta y MVP. Nuestro equipo se pondrá en contacto contigo en 24 horas con los detalles del programa y los próximos pasos.",
      },
    },
    // FAQ Section
    faq: {
      title: "PREGUNTAS",
      titleHighlight: "MÁS FRECUENTES",
      items: [
        {
          question: "¿Realmente funciona CUBIX sin consultores?",
          answer:
            "CUBIX no requiere consultores para la implementación, a diferencia de los ERPs tradicionales. Ofrecemos servicios de consultoría opcionales si prefiere contacto humano, pero también tenemos inteligencia artificial integrada que puede responder a cualquier pregunta de la mejor manera posible. Esta es una ventaja competitiva porque la consultoría es opcional, no obligatoria. Las empresas pueden ahorrar dinero usando la IA incorporada en lugar de pagar por costosas tarifas de consultoría.",
        },
        {
          question:
            "Si quiero cambiar de un ERP que ya tengo a CUBIX, ¿cuáles son mis ventajas?",
          answer:
            "Tenemos un sistema que puede run simultáneamente con su ERP existente, permitiéndole probar CUBIX al mismo tiempo. Todos los datos creados tanto en CUBIX como en su otro ERP se comparten entre los dos sistemas. Capturamos todos los datos de ambos lados y sincronizamoslos automáticamente. Por ejemplo, cree una factura en cualquier sistema y aparecerá en ambos. Su ERP necesita ser compatible con conexiones webhook o API para esta integración. De esta manera, puede probar CUBIX completamente antes de migrar totalmente.",
        },
        {
          question: "¿Cómo funciona la IA local vs central?",
          answer:
            "CUBIX utiliza un sistema único de escalada de cuatro capas basado en confianza. Consultas simples (70%) se manejan por IA Local (<100ms). Problemas más complejos escalan a IA de Soporte, luego a IA Central y finalmente a IA DevOps para correcciones de nivel de código. Esto garantiza un tiempo de respuesta óptimo mientras mantiene una alta precisión.",
        },
        {
          question: "¿Cuánto tiempo lleva la implementación?",
          answer:
            "La implementación es significativamente más rápida que los ERPs tradicionales. La configuración básica se puede completar en días, no en meses. La IA asiste en la migración de datos, configuración y capacitación de usuarios. La mayoría de las empresas están operativas dentro de 2-4 semanas, en comparación con 6-12 meses para sistemas legados.",
        },
        {
          question: "¿Mis datos están seguros?",
          answer:
            "Absolutamente. CUBIX sigue estándares de seguridad empresariales con encriptación de principio a fin, control de acceso basado en roles y auditorías de seguridad regulares. Ofrecemos opciones de implementación en la nube y en local. Todas las operaciones de IA respetan la privacidad de sus datos y nunca entrenamos en información propiedad.",
        },
        {
          question: "¿Puedo integrar con sistemas existentes?",
          answer:
            "Sí, CUBIX ofrece una API REST abrangente y soporta protocolos de integración estándar. La IA puede ayudar a mapear y migrar datos de sus sistemas existentes, incluyendo SAP, Oracle, Odoo y soluciones personalizadas. También proporcionamos conectores pre-construidos para herramientas de negocio comunes.",
        },
        {
          question: "¿Cuál es la diferencia con SAP/Oracle/Odoo?",
          answer:
            "Los ERPs tradicionales colan IA como un asistente - aún requiere intervención humana. CUBIX tiene IA en su núcleo estructural, permitiendo verdadera autonomía. Logramos 90% de operaciones autónomas, respuesta de soporte de <1 segundo, MTTR de 30 minutos vs 4+ horas y eliminamos completamente los costos de consultoría.",
        },
      ],
      cta: "¿Todavía tiene preguntas? Contacte con nosotros",
    },
    // Footer
    footer: {
      tagline:
        "El primer sistema construido para la industria de la construcción",
      product: {
        title: "PRODUCTO",
        features: "Características de Construcción",
        technology: "Tecnología IoT",
        pricing: "Precios",
      },
      company: {
        title: "EMPRESA",
        about: "Acerca de Nosotros",
        blog: "Blog",
        careers: "Oportunidades de Trabajo",
      },
      legal: {
        title: "LEGAL",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
        cookies: "Cookies",
      },
      copyright: "© 2025 CUBIX Construcción. Todos los derechos reservados.",
    },
    // Construction Banner
    banner: {
      message:
        "🚧 Esta página está actualmente en desarrollo. Las características y el contenido pueden cambiar.",
    },
    underConstruction: {
      title: "PÁGINA EN",
      titleHighlight: "CONSTRUCCIÓN",
      subtitle:
        "Estamos trabajando arduamente para traerle esta característica",
      message:
        "Esta página está actualmente en desarrollo. La plataforma CUBIX está en construcción y nuevas características están siendo agregadas regularmente. Gracias por su paciencia mientras construimos el futuro de los sistemas ERP autónomos.",
      eta: "Conclusión esperada: Q1 2026",
      backHome: "Volver a Inicio",
      signUpMVP: "Registrarse para MVP",
    },
  },
  fr: {
    // Header
    nav: {
      home: "Accueil",
      product: "Produit",
      technology: "Technologie",
      contact: "Contact",
      signUpMVP: "S'inscrire pour le MVP",
    },
    // Hero Section
    hero: {
      patentBadge: "ARCHITECTURE PATENTÉE",
      title: "LE PREMIER ERP AVEC IA QUI",
      titleHighlight: "FONCTIONNE AUTONOMEMENT",
      titleEnd: ", PASSEMENT DE L'ASSISTANCE",
      subtitle: "90% d'Autonomie",
      subtitleFeatures:
        "Auto-Réparation des Bugs • Support Instantané 24/7 • Aucun Consultant",
      ctaPrimary: "S'inscrire pour le MVP gratuit",
      ctaSecondary: "Voir Comment Cela Fonctionne",
      imageAlt: "Tableau de bord CUBIX ERP",
    },
    // Problem Section
    problem: {
      title: "LES ERP TRADITIONNELS SONT",
      titleHighlight: "OBSOLÈTES",
      painPoints: [
        {
          title: "Support basé sur les tickets",
          description: "Jours d'attente pour les corrections simples",
        },
        {
          title: "Résolution des bugs",
          description: "Plus de 4 heures par incident",
        },
        {
          title: "Consultants coûteux",
          description: "Coûts continuels de €100-200/h",
        },
        {
          title: "IA comme complément",
          description: "Aucune véritable autonomie, juste assistance",
        },
        {
          title: "Aucune optimisation proactive",
          description: "Systèmes réactifs, pas prédictifs",
        },
      ],
      quote:
        "SAP, Oracle, Odoo... ont de l'IA. Mais c'est un ASSISTANT qui nécessite des humains. Nous avons un AGENT qui fonctionne de manière autonome.",
    },
    // Solution Section
    solution: {
      title: "CUBIX:",
      titleHighlight: "IA STRUCTURÉE",
      titleEnd: ", PAS DE COMPLÉMENT",
      subtitle: "Construit de fond avec l'IA au cœur, pas comme un ajout",
      features: [
        {
          title: "90% d'Autonomie",
          description:
            "L'IA gère les opérations de bout en bout sans intervention humaine",
        },
        {
          title: "Les Bugs S'Auto-Réparent",
          description:
            "Système auto-réparateur détecte et résout les problèmes automatiquement",
        },
        {
          title: "Support 24/7 <1sec",
          description:
            "Réponses instantanées de l'IA, sans tickets, sans attente",
        },
        {
          title: "Aucun Consultant",
          description: "Économisez €100-200/h avec des opérations autonomes",
        },
        {
          title: "MTTR: 30min vs 4h",
          description: "8 fois plus rapide pour le temps moyen de résolution",
        },
        {
          title: "Système Auto-Évoluant",
          description:
            "Apprend et optimise continuellement à partir de vos données",
        },
      ],
    },
    // Architecture Section
    architecture: {
      title: "ARCHITECTURE",
      titleHighlight: "ARCHECTURE IA DE 4 COUCES MULTINIVEAUX",
      subtitle:
        "Système d'escalade basé sur la confiance dirige les requêtes vers la couche optimale d'IA",
      layers: [
        {
          name: "IA LOCALE",
          model: "DeepSeek R1 8B",
          description:
            "70% des requêtes résolues localement, temps de réponse <100ms",
        },
        {
          name: "IA DE SUPPORT",
          model: "Llama 3.2 11B",
          description: "Analyse spécialisée 24/7, pas de tickets nécessaires",
        },
        {
          name: "IA CENTRALE",
          model: "Llama 3.3 70B",
          description: "Optimisation complexe des bugs et décisions de système",
        },
        {
          name: "IA DEVOPS",
          model: "DeepSeek Coder 33B",
          description:
            "Auto-réparation de code, résolution autonome, déploiement continu",
        },
      ],
      cta: "Voir la Démo Technique",
    },
    // Comparison Section
    comparison: {
      title: "CUBIX vs",
      titleEnd: "SAP/ORACLE/ODOO",
      tableHeaders: {
        feature: "Fonctionnalité",
        traditional: "ERPs Traditionnels",
        cubix: "CUBIX",
      },
      features: [
        { feature: "IA native au cœur" },
        { feature: "Autonomie totale (90%)" },
        { feature: "Bugs auto-réparés" },
        { feature: "Support instantané (<1sec)" },
        { feature: "Aucun consultant nécessaire" },
        {
          feature: "Temps de réponse",
          traditional: "Heures/Jours",
          cubix: "<1 seconde",
        },
        {
          feature: "Temps moyen de réparation",
          traditional: "Plus de 4 heures",
          cubix: "30 minutes",
        },
      ],
    },
    // Modules Section
    modules: {
      title: "MVP",
      titleHighlight: "MODULES INCLUS",
      subtitle:
        "Fonctionnalités principales prêtes pour le lancement de votre entreprise",
      items: [
        {
          name: "CRM et Leads",
          description: "Gestion des relations clients et suivi des leads",
        },
        {
          name: "Ventes et Facturation",
          description: "Cycle de vente complet et facturation automatique",
        },
        {
          name: "Commandes d'Achat",
          description: "Approvisionnement et gestion des fournisseurs",
        },
        {
          name: "Gestion de Stock",
          description: "Contrôle de stock en temps réel et entrepôt",
        },
        {
          name: "Comptabilité",
          description: "Gestion financière complète et rapports",
        },
        {
          name: "Rapports avec IA",
          description: "Analyses intelligentes et prévisions",
        },
        {
          name: "Flux Automatisés",
          description: "Automatisation personnalisée de processus métier",
        },
        {
          name: "Permissions et Sécurité",
          description: "Accès basé sur les rôles et protection des données",
        },
        {
          name: "Multi-langue",
          description: "Support international et localisation",
        },
      ],
      note: "Ces 9 modules principaux sont inclus dans le MVP. Le produit final comptera plus de 70 modules abordatifs.",
    },
    // Roadmap Section
    roadmap: {
      title: "ROUTES:",
      titleHighlight: "12-16 MOIS POUR COMPLÉTER LE MVP",
      subtitle: "Timeline de développement structurée avec exécution parallèle",
      timeline: {
        title: "Timeline de Lancement du Produit",
        closedAlpha: {
          date: "15 Mai 2026",
          label: "ALPHA FERMÉ",
          description: "Accès limité pour les testeurs initiaux",
        },
        openBeta: {
          date: "1 Août 2026",
          label: "BETA OUVERT",
          description: "Début de la phase de test publique",
        },
        mvp: {
          date: "1 Janvier 2027",
          label: "LANÇEMENT MVP",
          description: "Lancement complet du produit",
        },
      },
      phases: [
        {
          phase: "Phase 1",
          name: "BASE PRINCIPALE",
          duration: "0-6/8 mois",
          features: [
            "Base complète du système",
            "Base de données et ORM",
            "Authentification et Sécurité",
            "Vues et UI",
            "API REST",
            "IA Native",
          ],
        },
        {
          phase: "Phase 2",
          name: "APP CRM",
          duration: "1-2 mois",
          features: [
            "Module CRM Complet",
            "Leads et Opportunités",
            "Automatisation Marketing",
          ],
        },
        {
          phase: "Phase 3",
          name: "APP VENTES",
          duration: "1-2 mois",
          features: [
            "Module Ventes Complet",
            "Devis et Commandes",
            "Factures et Paiements",
          ],
        },
        {
          phase: "Phase 4",
          name: "APP INVENTAIRE",
          duration: "1-2 mois",
          features: [
            "Module Inventaire Complet",
            "Entrepôts et Stock",
            "Lots et Numéros de Série",
          ],
        },
        {
          phase: "Phase 5",
          name: "APP ACHATS",
          duration: "1-2 mois",
          features: [
            "Module Achats Complet",
            "Requêtes et Commandes",
            "Gestion des Fournisseurs",
          ],
        },
        {
          phase: "Phase 6",
          name: "APP COMPTABILITÉ",
          duration: "1-2 mois",
          features: [
            "Module Comptabilité Complet",
            "Gestion Financière",
            "Rapports Avancés",
          ],
        },
      ],
      note: "Développement parallèle après la Phase 1 accélère le temps sur le marché",
    },
    // Tech Stack Section
    techStack: {
      title: "CONSTRUIT AVEC",
      titleHighlight: "TECHNOLOGIE DE POINTE",
      patentTitle: "ARCHITECTURE PATENTÉE",
      quote: "Système unique d'escalade basé sur la confiance",
      metrics: [
        "Plus de 150.000 lignes de code",
        "16 modules d'analyse autonomes",
        "Plus de 100 fonctions d'analyse intelligentes",
      ],
      badge: "Code Ouvert et Confidentialité en Première Position",
      dateNote: "Fonctionnalités implémentées le 27 Novembre 2025",
    },
    earlyAccess: {
      title: "JOIN NOTRE",
      titleHighlight: "PROGRAMME D'ACCÈS PRÉCOCE",
      subtitle:
        "Soyez parmi les premiers à expérimenter CUBIX et façonner son avenir",
      tiers: [
        {
          name: "ALPHA FERMÉ",
          date: "15 Mai 2026",
          badge: "Postes Limités",
          features: [
            "Accès exclusif en première main",
            "Communication directe avec les développeurs",
            "Influencer la direction du produit",
            "Accès automatique à la Beta",
          ],
        },
        {
          name: "TEST BETA",
          date: "1 Août 2026",
          badge: "Test Public",
          features: [
            "Accès anticipé aux fonctionnalités",
            "Signalement prioritaire des bugs",
            "Forum de feedback de la communauté",
            "Expérience prête pour la production",
          ],
        },
      ],
      benefits: {
        title: "Avantages pour les Testeurs Précoce",
        items: [
          {
            icon: "Gift",
            title: "Remises Exclusives",
            description:
              "Les testeurs Alpha obtiennent un 30% de remise sur les deux premières années. Les testeurs Beta obtiennent un 10% de remise sur la première année.",
          },
          {
            icon: "Zap",
            title: "Support Prioritaire",
            description:
              "Canal de support dédié avec des temps de réponse plus rapides pour tous les testeurs précoce.",
          },
          {
            icon: "Trophy",
            title: "Statut de Fondateur",
            description:
              "Reconnu comme utilisateur fondateur avec badge exclusif et avantages vitaux.",
          },
          {
            icon: "Target",
            title: "Faire Évoluer le Produit",
            description:
              "Votre feedback influence directement les fonctionnalités et les priorités de la route.",
          },
        ],
        note: "Les remises s'appliquent uniquement aux plans de paiement annuel ou biennal (non disponible pour la facturation mensuelle). Les testeurs Alpha doivent s'engager avec le plan biennal pour bénéficier d'un 30% de remise. Les testeurs Beta doivent s'engager avec le plan annuel pour bénéficier d'un 10% de remise. Les remises s'appliquent aux participants actifs qui fournissent un feedback significatif.",
      },
      cta: {
        alpha: "Postuler pour l'Alpha Fermé",
        beta: "S'inscrire pour la Beta",
      },
    },
    // TEAM SECTION
    team: {
      title: "CONNAÎTRE L'ÉQUIPE",
      titleHighlight: "DE DÉVELOPPEMENT",
      subtitle:
        "Ingénieurs expérimentés construisant l'avenir des systèmes ERP autonomes",
      members: [
        {
          name: "Bruno Coelho",
          roles: [
            "Fondateur",
            "Ingénieur IA / Ingénieur ML",
            "Scientifique des Données / Architecte de BD",
            "Développeur Full-Stack",
          ],
          experience: "Plus de 2 ans",
          yearJoined: "Depuis 2023",
          bio: "Développeur full-stack spécialisé dans l'intégration de l'IA et les systèmes d'entreprise. Dirige le développement de l'architecture autonome de CUBIX.",
          photo: "/bruno-profile.png",
          github: "https://github.com/BrunoKorpuzCoelho",
          linkedin: "https://www.linkedin.com/in/bruno-coelho-aa4071212/",
        },
      ],
      learnMore: "Apprendre Plus",
      cta: "Rejoignez Notre Équipe",
    },
    // Pricing Section
    pricing: {
      title: "PLANS",
      titleHighlight: "FLEXIBLES",
      titleEnd: "POUR VOTRE ENTREPRISE",
      subtitle:
        "Tous les plans incluent 3 utilisateurs de base. Échelle jusqu'à des utilisateurs illimités en ajustant le tarif mensuel.",
      tiers: [
        {
          name: "SaaS",
          subtitle: "Infrastructure Partagée",
          features: [
            "Base : 3 utilisateurs inclus",
            "Échelle jusqu'à des utilisateurs illimités",
            "Tous les modules inclus",
            "Support complet",
            "Mises à jour mensuelles",
            "Support IA (3 couches : Support, Central, DevOps)",
            "Pas d'IA structurée (environnement partagé)",
          ],
        },
        {
          name: "HOSTING DE SERVEUR",
          subtitle: "VPS Dédicé",
          features: [
            "Base : 3 utilisateurs inclus",
            "Échelle jusqu'à des utilisateurs illimités",
            "Tous les modules inclus",
            "Support complet",
            "Mises à jour mensuelles",
            "Développement personnalisé disponible",
            "IA Structurée (Toutes les 4 couches d'IA y compris Locale)",
            "Ressources de serveur dédiées",
          ],
        },
      ],
      cta: "Contactez-nous",
      alert:
        "Le MVP inclut les couches IA Locale et IA Centrale. Les couches IA DevOps et IA de Support seront ajoutées au lancement complet du produit. Jusqu'à ce jour, la couche IA Centrale gère les opérations DevOps et a une capacité totale pour le faire.",
    },
    // Demo Section
    demo: {
      title: "INSCRIVEZ-VOUS GRATUITEMENT",
      titleHighlight: "ACCÈS AU MVP",
      subtitle:
        "Rejoignez les early adopters et soyez le premier à découvrir la gestion d'entreprise avec IA de CUBIX",
      form: {
        fullName: "Nom Complet",
        email: "Email Professionnel",
        company: "Entreprise",
        phone: "Téléphone",
        employees: "Nombre d'Employés",
        program: "Programme",
        comments: "Commentaires",
        commentsPlaceholder: "Parlez-nous de vos besoins...",
        privacy: "J'accepte la politique de confidentialité",
        submit: "S'inscrire pour Votre MVP Gratuit",
        submitAlpha: "Rejoindre l'Alpha Fermée",
        submitBeta: "Rejoindre la Bêta Ouverte",
        submitMVP: "Rejoindre le Lancement MVP",
        submitting: "Envoi...",
        required: "*",
        selectPlaceholder: "Sélectionner...",
        employeeOptions: {
          "1-10": "1-10",
          "11-50": "11-50",
          "51-200": "51-200",
          "200+": "200+",
        },
        programOptions: {
          placeholder: "Sélectionner le programme...",
          alpha: "Alpha Fermée (Juillet 2026)",
          beta: "Bêta Ouverte (Septembre 2026)",
          mvp: "Lancement MVP (Janvier 2027)",
        },
        securityNote: "Vos données sont sécurisées",
        contactTime: "Contact sous 24h",
        alert:
          "⚠️ Places limitées pour le MVP - les early adopters reçoivent des avantages exclusifs",
      },
      success: {
        title: "Bienvenue au MVP de CUBIX !",
        message:
          "Merci pour votre inscription ! Vous recevrez des informations détaillées sur nos programmes Alpha, Beta et MVP. Notre équipe vous contactera dans les 24 heures avec les détails du programme et les prochaines étapes.",
      },
    },
    // FAQ Section
    faq: {
      title: "QUESTIONS",
      titleHighlight: "LES PLUS FRÉQUENTES",
      items: [
        {
          question: "CUBIX fonctionne-t-il vraiment sans consultants?",
          answer:
            "CUBIX ne nécessite pas de consultants pour l'implémentation, contrairement aux ERP traditionnels. Nous offrons des services de consulting optionnels si vous préférez un contact humain, mais nous avons également une intelligence artificielle intégrée qui peut répondre à toute question de la meilleure manière possible. C'est une avantage compétitif car le consulting est optionnel, pas obligatoire. Les entreprises peuvent économiser de l'argent en utilisant l'IA intégrée au lieu de payer des frais de consulting coûteux.",
        },
        {
          question:
            "Si je veux passer de l'ERP que j'ai déjà à CUBIX, quels sont mes avantages?",
          answer:
            "Nous avons un système qui peut fonctionner simultanément avec votre ERP existant, vous permettant de tester CUBIX en même temps. Tous les données créées à la fois dans CUBIX et votre autre ERP sont partagées entre les deux systèmes. Nous capturons tous les données des deux côtés et les synchronisons automatiquement. Par exemple, créez une facture dans l'un des deux systèmes et elle apparaît dans les deux. Votre ERP doit être compatible avec des connexions webhook ou API pour cette intégration. De cette façon, vous pouvez tester CUBIX complètement avant de migrer totalement.",
        },
        {
          question: "Comment fonctionne l'IA locale vs centrale?",
          answer:
            "CUBIX utilise un système unique d'escalade de quatre couches basé sur la confiance. Les requêtes simples (70%) sont gérées par IA Locale (<100ms). Les problèmes plus complexes escalent à IA de Support, puis à IA Centrale et enfin à IA DevOps pour les corrections de niveau de code. Cela garantit un temps de réponse optimal tout en maintenant une haute précision.",
        },
        {
          question: "Combien de temps faut-il pour l'implémentation?",
          answer:
            "L'implémentation est significativement plus rapide que les ERP traditionnels. La configuration de base peut être terminée en jours, pas en mois. L'IA aide à la migration des données, à la configuration et à la formation des utilisateurs. La plupart des entreprises sont opérationnelles dans les 2-4 semaines, en comparaison avec 6-12 mois pour les systèmes hérités.",
        },
        {
          question: "Mes données sont-elles sécurisées?",
          answer:
            "Absolument. CUBIX suit des normes de sécurité d'entreprise avec une cryptographie de bout en bout, un contrôle d'accès basé sur les rôles et des audits de sécurité réguliers. Nous offrons des options d'implémentation en cloud et sur site. Toutes les opérations d'IA respectent la confidentialité de vos données et nous ne formons jamais sur des informations propriétaires.",
        },
        {
          question: "Puis-je m'intégrer avec des systèmes existants?",
          answer:
            "Oui, CUBIX offre une API REST complète et prend en charge des protocoles d'intégration standard. L'IA peut aider à mapper et à migrer des données de vos systèmes existants, y compris SAP, Oracle, Odoo et des solutions personnalisées. Nous offrons également des connecteurs préconstruits pour des outils de business courants.",
        },
        {
          question: "Quelle est la différence avec SAP/Oracle/Odoo?",
          answer:
            "Les ERP traditionnels collent l'IA comme un assistant - elle nécessite toujours une intervention humaine. CUBIX a l'IA au cœur de sa structure, permettant une véritable autonomie. Nous atteignons une autonomie de 90%, un support de <1 seconde, un MTTR de 30 minutes contre 4+ heures et nous éliminons totalement les coûts de consulting.",
        },
      ],
      cta: "Toujours des questions ? Contactez-nous",
    },
    // Footer
    footer: {
      tagline:
        "Le premier système construit pour l'industrie de la construction",
      product: {
        title: "PRODUIT",
        features: "Fonctionnalités de Construction",
        technology: "Technologie IoT",
        pricing: "Tarifs",
      },
      company: {
        title: "ENTREPRISE",
        about: "À Propos de Nous",
        blog: "Blog",
        careers: "Carrières",
      },
      legal: {
        title: "LÉGAL",
        privacy: "Politique de Confidentialité",
        terms: "Conditions d'Utilisation",
        cookies: "Cookies",
      },
      copyright: "© 2025 CUBIX Construction. Tous droits réservés.",
    },
    // Construction Banner
    banner: {
      message:
        "🚧 Cette page est actuellement en développement. Les fonctionnalités et le contenu peuvent changer.",
    },
    underConstruction: {
      title: "PAGE EN",
      titleHighlight: "CONSTRUCTION",
      subtitle: "Nous travaillons dur pour vous apporter cette fonctionnalité",
      message:
        "Cette page est actuellement en développement. La plateforme CUBIX est en construction et de nouvelles fonctionnalités sont ajoutées régulièrement. Merci de votre patience pendant que nous construisons l'avenir des systèmes ERP autonomes.",
      eta: "Fin prévue : Q1 2026",
      backHome: "Retour à l'Accueil",
      signUpMVP: "S'inscrire pour le MVP",
    },
  },
};
