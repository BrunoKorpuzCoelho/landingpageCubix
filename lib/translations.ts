export type Language = "en" | "pt" | "es" | "fr"

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
      title: "THE FIRST ERP WITH AI THAT",
      titleHighlight: "WORKS AUTONOMOUSLY",
      titleEnd: ", NOT JUST ASSISTS",
      subtitle: "90% Autonomy",
      subtitleFeatures: "Auto-Fixes Bugs • 24/7 Instant Support • Zero Consultants",
      ctaPrimary: "Sign up for free MVP",
      ctaSecondary: "Watch How It Works",
      imageAlt: "CUBIX ERP Dashboard",
    },
    // Problem Section
    problem: {
      title: "TRADITIONAL ERPs ARE",
      titleHighlight: "OBSOLETE",
      painPoints: [
        { title: "Ticket-based support", description: "Days of waiting for simple fixes" },
        { title: "Bug resolution", description: "4+ hours per incident" },
        { title: "Expensive consultants", description: "€100-200/hour ongoing costs" },
        { title: "AI as add-on", description: "No real autonomy, just assistance" },
        { title: "Zero proactive optimization", description: "Reactive systems, not predictive" },
      ],
      quote:
        "SAP, Oracle, Odoo... have AI. But it's an ASSISTANT that needs humans. We have an AGENT that works autonomously.",
    },
    // Solution Section
    solution: {
      title: "CUBIX:",
      titleHighlight: "STRUCTURAL AI",
      titleEnd: ", NOT ADD-ON",
      subtitle: "Built from the ground up with AI at its core, not bolted on as an afterthought",
      features: [
        { title: "90% Autonomy", description: "AI handles operations end-to-end without human intervention" },
        {
          title: "Bugs Auto-Fix Themselves",
          description: "Self-healing system detects and resolves issues automatically",
        },
        { title: "24/7 Support <1sec", description: "Instant AI responses, no tickets, no waiting" },
        { title: "Zero Consultants", description: "Save €100-200/hour with autonomous operations" },
        { title: "MTTR: 30min vs 4h", description: "8x faster mean time to resolution" },
        { title: "Self-Evolving System", description: "Learns and optimizes continuously from your data" },
      ],
    },
    // Architecture Section
    architecture: {
      title: "MULTI-LAYER",
      titleHighlight: "4-TIER AI ARCHITECTURE",
      subtitle: "Confidence-based escalation system routes queries to the optimal AI layer",
      layers: [
        {
          name: "LOCAL AI",
          model: "DeepSeek R1 8B",
          description: "70% queries resolved locally, <100ms response time",
        },
        { name: "SUPPORT AI", model: "Llama 3.2 11B", description: "Specialized 24/7 analysis, no tickets required" },
        {
          name: "CENTRAL AI",
          model: "Llama 3.3 70B",
          description: "Complex bug optimization and system-wide decisions",
        },
        {
          name: "DEVOPS AI",
          model: "DeepSeek Coder 33B",
          description: "Code auto-healing, autonomous resolution, continuous deployment",
        },
      ],
      cta: "See Technical Demo",
    },
    // Comparison Section
    comparison: {
      title: "CUBIX vs",
      titleEnd: "SAP/ORACLE/ODOO",
      tableHeaders: {
        feature: "Feature",
        traditional: "Traditional ERPs",
        cubix: "CUBIX",
      },
      features: [
        { feature: "AI native in core" },
        { feature: "Full autonomy (90%)" },
        { feature: "Auto-healing bugs" },
        { feature: "Instant support (<1sec)" },
        { feature: "Zero consultants needed" },
        { feature: "Response time", traditional: "Hours/Days", cubix: "<1 second" },
        { feature: "Mean time to repair", traditional: "4+ hours", cubix: "30 minutes" },
      ],
    },
    // Modules Section
    modules: {
      title: "MVP",
      titleHighlight: "MODULES INCLUDED",
      subtitle: "Core features ready for your business launch",
      items: [
        { name: "CRM & Leads", description: "Customer relationship management and lead tracking" },
        { name: "Sales & Invoicing", description: "Complete sales cycle and automated billing" },
        { name: "Purchase Orders", description: "Procurement and supplier management" },
        { name: "Inventory Management", description: "Real-time stock control and warehousing" },
        { name: "Accounting", description: "Full financial management and reporting" },
        { name: "AI-Powered Reports", description: "Intelligent analytics and forecasting" },
        { name: "Automated Workflows", description: "Custom business process automation" },
        { name: "Permissions & Security", description: "Role-based access and data protection" },
        { name: "Multi-language", description: "International support and localization" },
      ],
      note: "These 9 core modules are included in the MVP. The final product will feature 70+ comprehensive modules.",
    },
    // Roadmap Section
    roadmap: {
      title: "ROADMAP:",
      titleHighlight: "12-16 MONTHS TO COMPLETE MVP",
      subtitle: "Structured development timeline with parallel execution",
      timeline: {
        title: "Product Launch Timeline",
        closedAlpha: {
          date: "May 15, 2026",
          label: "CLOSED ALPHA",
          description: "Limited access for early testers",
        },
        openBeta: {
          date: "August 1, 2026",
          label: "OPEN BETA",
          description: "Public testing phase begins",
        },
        mvp: {
          date: "January 1, 2027",
          label: "MVP LAUNCH",
          description: "Full product release",
        },
      },
      phases: [
        {
          phase: "Phase 1",
          name: "CORE BASE",
          duration: "0-6/8 months",
          features: [
            "Complete system foundation",
            "Database & ORM",
            "Authentication & Security",
            "Views & UI",
            "REST API",
            "Native AI",
          ],
        },
        {
          phase: "Phase 2",
          name: "CRM APP",
          duration: "1-2 months",
          features: ["Complete CRM Module", "Leads & Opportunities", "Marketing Automation"],
        },
        {
          phase: "Phase 3",
          name: "SALES APP",
          duration: "1-2 months",
          features: ["Complete Sales Module", "Quotes & Orders", "Invoices & Payments"],
        },
        {
          phase: "Phase 4",
          name: "INVENTORY APP",
          duration: "1-2 months",
          features: ["Complete Inventory Module", "Warehouses & Stock", "Batches & Serial Numbers"],
        },
        {
          phase: "Phase 5",
          name: "PURCHASE APP",
          duration: "1-2 months",
          features: ["Complete Purchase Module", "Requisitions & Orders", "Supplier Management"],
        },
        {
          phase: "Phase 6",
          name: "ACCOUNTING APP",
          duration: "1-2 months",
          features: ["Complete Accounting Module", "Financial Management", "Advanced Reporting"],
        },
      ],
      note: "Parallel development after Phase 1 accelerates time to market",
    },
    // Tech Stack Section
    techStack: {
      title: "BUILT WITH",
      titleHighlight: "CUTTING-EDGE TECHNOLOGY",
      patentTitle: "PATENTED ARCHITECTURE",
      quote: "Unique confidence-based escalation system",
      metrics: ["Over 150,000 lines of code", "16 autonomous analysis modules", "100+ intelligent analysis functions"],
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
            description: "Alpha testers get 30% off first 2 years. Beta testers get 10% off first year.",
          },
          {
            icon: "Zap",
            title: "Priority Support",
            description: "Dedicated support channel with faster response times for all early testers.",
          },
          {
            icon: "Trophy",
            title: "Founder Status",
            description: "Recognized as a founding user with exclusive badge and lifetime perks.",
          },
          {
            icon: "Target",
            title: "Shape the Product",
            description: "Your feedback directly influences features and roadmap priorities.",
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
      subtitle: "Experienced engineers building the future of autonomous ERP systems",
      members: [
        {
          name: "Bruno Coelho",
          roles: ["Founder", "AI Engineer / ML Engineer", "Data Scientist / Database Architect", "Full-Stack Engineer"],
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
      titleEnd: "FOR YOUR BUSINESS",
      subtitle: "All plans include 3 users as base. Scale to unlimited users by adjusting your monthly fee.",
      tiers: [
        {
          name: "SaaS",
          subtitle: "Shared Infrastructure",
          features: [
            "Base: 3 users included",
            "Scale to unlimited users",
            "All modules included",
            "Full support",
            "Monthly updates",
            "AI Support (3 layers: Support, Central, DevOps)",
            "No structural AI (shared environment)",
          ],
        },
        {
          name: "SERVER HOSTING",
          subtitle: "Dedicated VPS",
          features: [
            "Base: 3 users included",
            "Scale to unlimited users",
            "All modules included",
            "Full support",
            "Monthly updates",
            "Custom development available",
            "Structural AI (All 4 AI layers including Local)",
            "Dedicated server resources",
          ],
        },
      ],
      cta: "Contact Us",
      alert:
        "MVP includes Local AI and Central AI layers. DevOps and Support AI layers will be added in the full product launch. Until then, the Central AI layer handles DevOps operations and has full capacity to do so.",
    },
    // Demo Section
    demo: {
      title: "SIGN UP FOR FREE",
      titleHighlight: "MVP ACCESS",
      subtitle: "Join early adopters and be the first to experience CUBIX's AI-powered business management",
      form: {
        fullName: "Full Name",
        email: "Business Email",
        company: "Company",
        phone: "Phone",
        employees: "Number of Employees",
        comments: "Comments",
        commentsPlaceholder: "Tell us about your needs...",
        privacy: "I accept the privacy policy",
        submit: "Sign up for Your Free MVP",
        submitting: "Sending...",
        required: "*",
        selectPlaceholder: "Select...",
        employeeOptions: {
          "1-10": "1-10",
          "11-50": "11-50",
          "51-200": "51-200",
          "200+": "200+",
        },
        securityNote: "Your data is secure",
        contactTime: "Contact within 24h",
        alert: "⚠️ Limited MVP slots available - early adopters get exclusive benefits",
      },
      success: {
        title: "Welcome to CUBIX MVP!",
        message:
          "Thank you for signing up! You'll receive detailed information about our Alpha, Beta, and MVP programs. Our team will contact you within 24 hours with program details and next steps.",
      },
    },
    // FAQ Section
    faq: {
      title: "FREQUENTLY ASKED",
      titleHighlight: "QUESTIONS",
      items: [
        {
          question: "Does CUBIX really work without consultants?",
          answer:
            "CUBIX doesn't require consultants for implementation, unlike traditional ERPs. We offer optional consulting services if you prefer human contact, but we also have integrated artificial intelligence that can answer any question in the best possible way. This is a competitive advantage because consulting is optional, not mandatory. Companies can save money by using the built-in AI instead of paying for expensive consulting fees.",
        },
        {
          question: "If I want to switch from an ERP that I already have to CUBIX, what are my advantages?",
          answer:
            "We have a system that can run simultaneously with your existing ERP, allowing you to test CUBIX at the same time. All data created in both CUBIX and your other ERP is shared between the two systems. We capture all data from both sides and sync it automatically. For example, create an invoice in either system and it appears in both. Your ERP needs to be compatible with webhook or API connections for this integration. This way, you can test CUBIX thoroughly before fully migrating.",
        },
        {
          question: "How does local AI vs central AI work?",
          answer:
            "CUBIX uses a unique 4-tier confidence-based escalation system. Simple queries (70%) are handled by Local AI (<100ms). More complex issues escalate to Support AI, then Central AI, and finally DevOps AI for code-level fixes. This ensures optimal response time while maintaining high accuracy.",
        },
        {
          question: "How long does implementation take?",
          answer:
            "Implementation is significantly faster than traditional ERPs. Basic setup can be completed in days, not months. The AI assists with data migration, configuration, and user training. Most companies are operational within 2-4 weeks, compared to 6-12 months for legacy systems.",
        },
        {
          question: "Is my data secure?",
          answer:
            "Absolutely. CUBIX follows enterprise-grade security standards with end-to-end encryption, role-based access control, and regular security audits. We offer both cloud and on-premise deployment options. All AI processing respects your data privacy, and we never train on your proprietary information.",
        },
        {
          question: "Can I integrate with existing systems?",
          answer:
            "Yes, CUBIX offers a comprehensive REST API and supports standard integration protocols. Our AI can help map and migrate data from existing systems including SAP, Oracle, Odoo, and custom solutions. We also provide pre-built connectors for common business tools.",
        },
        {
          question: "What's the difference vs SAP/Oracle/Odoo?",
          answer:
            "Traditional ERPs bolt AI on as an assistant - it still requires human intervention. CUBIX has AI in its structural core, enabling true autonomy. We achieve 90% autonomous operation, <1 second support response, 30-minute MTTR vs 4+ hours, and eliminate consulting costs entirely.",
        },
      ],
      cta: "Still have questions? Contact us",
    },
    // Footer
    footer: {
      tagline: "The first ERP with AI that works autonomously",
      product: {
        title: "PRODUCT",
        features: "Features",
        technology: "Technology",
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
      copyright: "© 2025 CUBIX ERP. All rights reserved.",
    },
    // Construction Banner
    banner: {
      message: "🚧 This page is currently under development. Features and content may change.",
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
      title: "O PRIMEIRO ERP COM IA QUE",
      titleHighlight: "FUNCIONA AUTONOMAMENTE",
      titleEnd: ", NÃO APENAS ASSISTE",
      subtitle: "90% de Autonomia",
      subtitleFeatures: "Correção Automática de Bugs • Suporte Instantâneo 24/7 • Zero Consultores",
      ctaPrimary: "Inscrever-se no MVP gratuito",
      ctaSecondary: "Ver Como Funciona",
      imageAlt: "Painel CUBIX ERP",
    },
    // Problem Section
    problem: {
      title: "OS ERPs TRADICIONAIS SÃO",
      titleHighlight: "OBSOLETOS",
      painPoints: [
        { title: "Suporte baseado em tickets", description: "Dias de espera para correções simples" },
        { title: "Resolução de bugs", description: "Mais de 4 horas por incidente" },
        { title: "Consultores caros", description: "100-200€/hora de custos contínuos" },
        { title: "IA como complemento", description: "Sem autonomia real, apenas assistência" },
        { title: "Zero otimização proativa", description: "Sistemas reativos, não preditivos" },
      ],
      quote:
        "SAP, Oracle, Odoo... têm IA. Mas é um ASSISTENTE que precisa de humanos. Temos um AGENTE que funciona autonomamente.",
    },
    // Solution Section
    solution: {
      title: "CUBIX:",
      titleHighlight: "IA ESTRUTURAL",
      titleEnd: ", NÃO COMPLEMENTO",
      subtitle: "Construído de raiz com IA no seu núcleo, não como um complemento",
      features: [
        { title: "90% de Autonomia", description: "A IA gere operações de ponta a ponta sem intervenção humana" },
        {
          title: "Bugs Corrigem-se Automaticamente",
          description: "Sistema auto-reparador deteta e resolve problemas automaticamente",
        },
        { title: "Suporte 24/7 <1seg", description: "Respostas instantâneas da IA, sem tickets, sem espera" },
        { title: "Zero Consultores", description: "Poupe 100-200€/hora com operações autónomas" },
        { title: "MTTR: 30min vs 4h", description: "8x mais rápido no tempo médio de resolução" },
        { title: "Sistema Auto-Evolutivo", description: "Aprende e otimiza continuamente a partir dos seus dados" },
      ],
    },
    // Architecture Section
    architecture: {
      title: "ARQUITETURA",
      titleHighlight: "IA DE 4 CAMADAS MULTINÍVEL",
      subtitle: "Sistema de escalamento baseado em confiança encaminha consultas para a camada ideal de IA",
      layers: [
        {
          name: "IA LOCAL",
          model: "DeepSeek R1 8B",
          description: "70% das consultas resolvidas localmente, <100ms tempo de resposta",
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
          description: "Auto-reparação de código, resolução autónoma, implementação contínua",
        },
      ],
      cta: "Ver Demonstração Técnica",
    },
    // Comparison Section
    comparison: {
      title: "CUBIX vs",
      titleEnd: "SAP/ORACLE/ODOO",
      tableHeaders: {
        feature: "Funcionalidade",
        traditional: "ERPs Tradicionais",
        cubix: "CUBIX",
      },
      features: [
        { feature: "IA nativa no núcleo" },
        { feature: "Autonomia total (90%)" },
        { feature: "Bugs auto-reparadores" },
        { feature: "Suporte instantâneo (<1seg)" },
        { feature: "Zero consultores necessários" },
        { feature: "Tempo de resposta", traditional: "Horas/Dias", cubix: "<1 segundo" },
        { feature: "Tempo médio de reparação", traditional: "Mais de 4 horas", cubix: "30 minutos" },
      ],
    },
    // Modules Section
    modules: {
      title: "MÓDULOS",
      titleHighlight: "INCLUÍDOS NO MVP",
      subtitle: "Funcionalidades essenciais prontas para o lançamento do seu negócio",
      items: [
        { name: "CRM e Leads", description: "Gestão de relacionamento com clientes e rastreamento de leads" },
        { name: "Vendas e Faturação", description: "Ciclo completo de vendas e faturação automatizada" },
        { name: "Encomendas de Compra", description: "Aprovisionamento e gestão de fornecedores" },
        { name: "Gestão de Inventário", description: "Controlo de stock em tempo real e armazenamento" },
        { name: "Contabilidade", description: "Gestão financeira completa e relatórios" },
        { name: "Relatórios com IA", description: "Análises inteligentes e previsões" },
        { name: "Fluxos Automatizados", description: "Automação personalizada de processos de negócio" },
        { name: "Permissões e Segurança", description: "Acesso baseado em funções e proteção de dados" },
        { name: "Multi-idioma", description: "Suporte internacional e localização" },
      ],
      note: "Estes 9 módulos principais estão incluídos no MVP. O produto final terá mais de 70 módulos abrangentes.",
    },
    // Roadmap Section
    roadmap: {
      title: "ROTEIRO:",
      titleHighlight: "12-16 MESES PARA CONCLUIR O MVP",
      subtitle: "Cronograma de desenvolvimento estruturado com execução paralela",
      timeline: {
        title: "Cronograma de Lançamento do Produto",
        closedAlpha: {
          date: "15 de Maio de 2026",
          label: "ALPHA FECHADO",
          description: "Acesso limitado para testadores iniciais",
        },
        openBeta: {
          date: "1 de Agosto de 2026",
          label: "BETA ABERTO",
          description: "Fase de testes públicos começa",
        },
        mvp: {
          date: "1 de Janeiro de 2027",
          label: "LANÇAMENTO MVP",
          description: "Lançamento completo do produto",
        },
      },
      phases: [
        {
          phase: "Fase 1",
          name: "BASE PRINCIPAL",
          duration: "0-6/8 meses",
          features: [
            "Base completa do sistema",
            "Base de dados e ORM",
            "Autenticação e Segurança",
            "Visualizações e IU",
            "API REST",
            "IA Nativa",
          ],
        },
        {
          phase: "Fase 2",
          name: "APP CRM",
          duration: "1-2 meses",
          features: ["Módulo CRM Completo", "Leads e Oportunidades", "Automação de Marketing"],
        },
        {
          phase: "Fase 3",
          name: "APP VENDAS",
          duration: "1-2 meses",
          features: ["Módulo de Vendas Completo", "Orçamentos e Encomendas", "Faturas e Pagamentos"],
        },
        {
          phase: "Fase 4",
          name: "APP INVENTÁRIO",
          duration: "1-2 meses",
          features: ["Módulo de Inventário Completo", "Armazéns e Stock", "Lotes e Números de Série"],
        },
        {
          phase: "Fase 5",
          name: "APP COMPRAS",
          duration: "1-2 meses",
          features: ["Módulo de Compras Completo", "Requisições e Encomendas", "Gestão de Fornecedores"],
        },
        {
          phase: "Fase 6",
          name: "APP CONTABILIDADE",
          duration: "1-2 meses",
          features: ["Módulo de Contabilidade Completo", "Gestão Financeira", "Relatórios Avançados"],
        },
      ],
      note: "Desenvolvimento paralelo após a Fase 1 acelera o tempo até ao mercado",
    },
    // Tech Stack Section
    techStack: {
      title: "CONSTRUÍDO COM",
      titleHighlight: "TECNOLOGIA DE PONTA",
      patentTitle: "ARQUITETURA PATENTEADA",
      quote: "Sistema único de escalamento baseado em confiança",
      metrics: [
        "Mais de 150.000 linhas de código",
        "16 módulos de análise autónomos",
        "Mais de 100 funções de análise inteligente",
      ],
      badge: "Código Aberto e Privacidade em Primeiro Lugar",
      dateNote: "Funcionalidades implementadas em 27 de Novembro de 2025",
    },
    earlyAccess: {
      title: "JUNTE-SE AO NOSSO",
      titleHighlight: "PROGRAMA DE ACESSO ANTECIPADO",
      subtitle: "Seja dos primeiros a experimentar o CUBIX e moldar o seu futuro",
      tiers: [
        {
          name: "ALPHA FECHADO",
          date: "15 de Maio de 2026",
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
          date: "1 de Agosto de 2026",
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
            description: "Reconhecido como utilizador fundador com distintivo exclusivo e benefícios vitalícios.",
          },
          {
            icon: "Target",
            title: "Moldar o Produto",
            description: "O seu feedback influencia diretamente as funcionalidades e prioridades do roteiro.",
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
      subtitle: "Engenheiros experientes a construir o futuro dos sistemas ERP autónomos",
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
      titleEnd: "PARA O SEU NEGÓCIO",
      subtitle:
        "Todos os planos incluem 3 utilizadores base. Escale até utilizadores ilimitados ajustando a mensalidade.",
      tiers: [
        {
          name: "SaaS",
          subtitle: "Infraestrutura Partilhada",
          features: [
            "Base: 3 utilizadores incluídos",
            "Escala até utilizadores ilimitados",
            "Todos os módulos incluídos",
            "Suporte completo",
            "Atualizações mensais",
            "IA de Suporte (3 camadas: Suporte, Central, DevOps)",
            "Sem IA estrutural (ambiente partilhado)",
          ],
        },
        {
          name: "SERVER HOSTING",
          subtitle: "VPS Dedicado",
          features: [
            "Base: 3 utilizadores incluídos",
            "Escala até utilizadores ilimitados",
            "Todos os módulos incluídos",
            "Suporte completo",
            "Atualizações mensais",
            "Desenvolvimento personalizado disponível",
            "IA Estrutural (Todas as 4 camadas de IA incluindo Local)",
            "Recursos de servidor dedicados",
          ],
        },
      ],
      cta: "Contacte-nos",
      alert:
        "O MVP inclui as camadas IA Local e IA Central. As camadas IA DevOps e IA de Suporte serão adicionadas no lançamento completo do produto. Até lá, a camada IA Central trata das operações DevOps e tem capacidade total para o fazer.",
    },
    // Demo Section
    demo: {
      title: "INSCREVA-SE GRATUITAMENTE",
      titleHighlight: "ACESSO AO MVP",
      subtitle: "Junte-se aos early adopters e seja o primeiro a experimentar a gestão empresarial com IA do CUBIX",
      form: {
        fullName: "Nome Completo",
        email: "Email Empresarial",
        company: "Empresa",
        phone: "Telefone",
        employees: "Número de Funcionários",
        comments: "Comentários",
        commentsPlaceholder: "Conte-nos sobre as suas necessidades...",
        privacy: "Aceito a política de privacidade",
        submit: "Inscrever-se no Seu MVP Gratuito",
        submitting: "A enviar...",
        required: "*",
        selectPlaceholder: "Selecione...",
        employeeOptions: {
          "1-10": "1-10",
          "11-50": "11-50",
          "51-200": "51-200",
          "200+": "200+",
        },
        securityNote: "Os seus dados estão seguros",
        contactTime: "Contacto dentro de 24 horas",
        alert: "⚠️ Slots limitados de MVP disponíveis - os adoptantes antecipados obtêm benefícios exclusivos",
      },
      success: {
        title: "Bem-vindo ao MVP do CUBIX!",
        message:
          "Obrigado por se inscrever! Irá receber informações detalhadas sobre os nossos programas Alpha, Beta e MVP. A nossa equipa contactará o dentro de 24 horas com detalhes do programa e os próximos passos.",
      },
    },
    // FAQ Section
    faq: {
      title: "PERGUNTAS",
      titleHighlight: "MAIS FREQUENTES",
      items: [
        {
          question: "O CUBIX funciona realmente sem consultores?",
          answer:
            "O CUBIX não requer consultores para implementação, ao contrário dos ERPs tradicionais. Oferecemos serviços de consultoria opcionais se preferir contacto humano, mas também temos inteligência artificial integrada que pode responder a qualquer pergunta da melhor forma possível. Esta é uma vantagem competitiva porque a consultoria é opcional, não obrigatória. As empresas podem poupar dinheiro ao usar a IA incorporada em vez de pagar por taxas caras de consultoria.",
        },
        {
          question: "Se quero mudar do ERP que já tenho para o CUBIX, quais são as minhas vantagens?",
          answer:
            "Temos um sistema que pode funcionar simultaneamente com o seu ERP existente, permitindo-lhe testar o CUBIX ao mesmo tempo. Todos os dados criados tanto no CUBIX quanto no seu outro ERP são partilhados entre os dois sistemas. Capturamos todos os dados de ambos os lados e sincronizamos-os automaticamente. Por exemplo, crie uma fatura em qualquer um dos sistemas e ela aparece em ambos. O seu ERP precisa de ser compatível com conexões webhook ou API para esta integração. Deste modo, pode testar o CUBIX completamente antes de migrar totalmente.",
        },
        {
          question: "Como funciona a IA local vs central?",
          answer:
            "O CUBIX utiliza um sistema único de escalamento de quatro camadas baseado em confiança. Consultas simples (70%) são tratadas pela IA Local (<100ms). Problemas mais complexos escalam para a IA de Suporte, depois para a IA Central e, finalmente, para a IA DevOps para correções de nível de código. Isto garante um tempo de resposta óptimo enquanto mantém uma alta precisão.",
        },
        {
          question: "Quanto tempo leva a implementação?",
          answer:
            "A implementação é significativamente mais rápida do que os ERPs tradicionais. A configuração básica pode ser concluída em dias, não em meses. A IA assiste na migração de dados, configuração e treino de utilizadores. A maioria das empresas está operacional dentro de 2-4 semanas, em comparação com 6-12 meses para sistemas legados.",
        },
        {
          question: "Os meus dados estão seguros?",
          answer:
            "Absolutamente. O CUBIX segue padrões de segurança empresariais com encriptação de ponta a ponta, controlo de acesso baseado em funções e auditorias de segurança regulares. Oferecemos opções de implementação em nuvem e no local. Todas as operações de IA respeitam a privacidade dos seus dados e nunca treinamos em informações proprietárias.",
        },
        {
          question: "Posso integrar com sistemas existentes?",
          answer:
            "Sim, o CUBIX oferece uma API REST abrangente e apoia protocolos de integração padrão. A IA pode ajudar a mapear e migrar dados dos seus sistemas existentes, incluindo SAP, Oracle, Odoo e soluções personalizadas. Também fornecemos conectores pré-construídos para ferramentas de negócio comuns.",
        },
        {
          question: "Qual é a diferença em relação ao SAP/Oracle/Odoo?",
          answer:
            "Os ERPs tradicionais colam a IA como um assistente - ainda requer intervenção humana. O CUBIX tem IA no seu núcleo estrutural, permitindo verdadeira autonomia. Conseguimos 90% de operações autónomas, suporte de <1 segundo, MTTR de 30 minutos vs 4+ horas e eliminamos totalmente os custos de consultoria.",
        },
      ],
      cta: "Ainda tem perguntas? Contacte-nos",
    },
    // Footer
    footer: {
      tagline: "O primeiro ERP com IA que funciona autonomamente",
      product: {
        title: "PRODUTO",
        features: "Funcionalidades",
        technology: "Tecnologia",
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
      copyright: "© 2025 CUBIX ERP. Todos os direitos reservados.",
    },
    // Construction Banner
    banner: {
      message: "🚧 Esta página está atualmente em desenvolvimento. As funcionalidades e o conteúdo podem mudar.",
    },
    underConstruction: {
      title: "PÁGINA EM",
      titleHighlight: "CONSTRUÇÃO",
      subtitle: "Estamos a trabalhar arduamente para trazer-lhe esta funcionalidade",
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
      title: "EL PRIMER ERP CON IA QUE",
      titleHighlight: "FUNCIONA AUTÓNOMAMENTE",
      titleEnd: ", NO SOLO ASISTE",
      subtitle: "90% de Autonomía",
      subtitleFeatures: "Auto-Reparación de Bugs • Soporte Instantáneo 24/7 • Sin Consultores",
      ctaPrimary: "Registrarse para MVP gratuito",
      ctaSecondary: "Ver Cómo Funciona",
      imageAlt: "Panel de CUBIX ERP",
    },
    // Problem Section
    problem: {
      title: "LOS ERPs TRADICIONALES SON",
      titleHighlight: "OBSOLETOS",
      painPoints: [
        { title: "Soporte basado en tickets", description: "Días de espera para correcciones simples" },
        { title: "Resolución de bugs", description: "Más de 4 horas por incidente" },
        { title: "Consultores caros", description: "Costos continuos de €100-200/hora" },
        { title: "IA como complemento", description: "Sin autonomía real, solo asistencia" },
        { title: "Sin optimización proactiva", description: "Sistemas reactivos, no predictivos" },
      ],
      quote:
        "SAP, Oracle, Odoo... tienen IA. Pero es un ASISTENTE que necesita humanos. Tenemos un AGENTE que funciona autónomamente.",
    },
    // Solution Section
    solution: {
      title: "CUBIX:",
      titleHighlight: "IA ESTRUCTURAL",
      titleEnd: ", NO COMPLEMENTO",
      subtitle: "Construido desde cero con IA en su núcleo, no como un complemento",
      features: [
        {
          title: "90% de Autonomía",
          description: "La IA maneja operaciones de principio a fin sin intervención humana",
        },
        {
          title: "Los Bugs Se Auto-Reparan",
          description: "Sistema auto-reparador detecta y resuelve problemas automáticamente",
        },
        { title: "Soporte 24/7 <1seg", description: "Respuestas instantáneas de IA, sin tickets, sin espera" },
        { title: "Sin Consultores", description: "Ahorre €100-200/hora con operaciones autónomas" },
        { title: "MTTR: 30min vs 4h", description: "8 veces más rápido en tiempo medio de resolución" },
        { title: "Sistema Auto-Evolucionario", description: "Aprende y optimiza continuamente a partir de sus datos" },
      ],
    },
    // Architecture Section
    architecture: {
      title: "ARQUITECTURA",
      titleHighlight: "MULTICAPA DE IA DE 4 NIVELES",
      subtitle: "Sistema de escalada basado en confianza enruta consultas a la capa óptima de IA",
      layers: [
        {
          name: "IA LOCAL",
          model: "DeepSeek R1 8B",
          description: "70% de consultas resueltas localmente, tiempo de respuesta <100ms",
        },
        {
          name: "IA DE SOPORTE",
          model: "Llama 3.2 11B",
          description: "Análisis especializado 24/7, sin necesidad de tickets",
        },
        {
          name: "IA CENTRAL",
          model: "Llama 3.3 70B",
          description: "Optimización compleja de bugs y decisiones a nivel de sistema",
        },
        {
          name: "IA DEVOPS",
          model: "DeepSeek Coder 33B",
          description: "Auto-reparación de código, resolución autónoma, implementación continua",
        },
      ],
      cta: "Ver Demostración Técnica",
    },
    // Comparison Section
    comparison: {
      title: "CUBIX vs",
      titleEnd: "SAP/ORACLE/ODOO",
      tableHeaders: {
        feature: "Característica",
        traditional: "ERPs Tradicionales",
        cubix: "CUBIX",
      },
      features: [
        { feature: "IA nativa en el núcleo" },
        { feature: "Autonomía total (90%)" },
        { feature: "Bugs auto-reparadores" },
        { feature: "Soporte instantáneo (<1seg)" },
        { feature: "Sin consultores necesarios" },
        { feature: "Tiempo de respuesta", traditional: "Horas/Días", cubix: "<1 segundo" },
        { feature: "Tiempo medio de reparación", traditional: "Más de 4 horas", cubix: "30 minutos" },
      ],
    },
    // Modules Section
    modules: {
      title: "MVP",
      titleHighlight: "MÓDULOS INCLUIDOS",
      subtitle: "Características principales listas para el lanzamiento de su negocio",
      items: [
        { name: "CRM y Leads", description: "Gestión de relaciones con clientes y seguimiento de leads" },
        { name: "Ventas y Facturación", description: "Ciclo completo de ventas y facturación automatizada" },
        { name: "Pedidos de Compra", description: "Adquisición y gestión de proveedores" },
        { name: "Gestión de Inventario", description: "Control de stock en tiempo real y almacenes" },
        { name: "Contabilidad", description: "Gestión financiera completa y informes" },
        { name: "Informes con IA", description: "Análisis inteligentes y pronósticos" },
        { name: "Flujos Automatizados", description: "Automatización personalizada de procesos de negocio" },
        { name: "Permisos y Seguridad", description: "Acceso basado en roles y protección de datos" },
        { name: "Multi-idioma", description: "Soporte internacional y localización" },
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
          features: ["Módulo CRM Completo", "Leads y Oportunidades", "Automatización de Marketing"],
        },
        {
          phase: "Fase 3",
          name: "APP VENTAS",
          duration: "1-2 meses",
          features: ["Módulo de Ventas Completo", "Presupuestos y Pedidos", "Facturas y Pagos"],
        },
        {
          phase: "Fase 4",
          name: "APP INVENTARIO",
          duration: "1-2 meses",
          features: ["Módulo de Inventario Completo", "Almacenes y Stock", "Lotes y Números de Serie"],
        },
        {
          phase: "Fase 5",
          name: "APP COMPRAS",
          duration: "1-2 meses",
          features: ["Módulo de Compras Completo", "Requisiciones y Pedidos", "Gestión de Proveedores"],
        },
        {
          phase: "Fase 6",
          name: "APP CONTABILIDAD",
          duration: "1-2 meses",
          features: ["Módulo de Contabilidad Completo", "Gestión Financiera", "Informes Avanzados"],
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
      subtitle: "Sea uno de los primeros en experimentar CUBIX y moldear su futuro",
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
            description: "Reconocido como usuario fundador con distintivo exclusivo y beneficios vitales.",
          },
          {
            icon: "Target",
            title: "Moldar el Producto",
            description: "Su feedback influye directamente en las características y prioridades de la ruta.",
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
      subtitle: "Ingenieros experimentados construyendo el futuro de los sistemas ERP autónomos",
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
      subtitle: "Rejoignez les early adopters et soyez le premier à découvrir la gestion d'entreprise avec IA de CUBIX",
      form: {
        fullName: "Nom Complet",
        email: "Email Professionnel",
        company: "Entreprise",
        phone: "Téléphone",
        employees: "Nombre d'Employés",
        comments: "Commentaires",
        commentsPlaceholder: "Parlez-nous de vos besoins...",
        privacy: "J'accepte la politique de confidentialité",
        submit: "S'inscrire pour Votre MVP Gratuit",
        submitting: "Envoi...",
        required: "*",
        selectPlaceholder: "Sélectionner...",
        employeeOptions: {
          "1-10": "1-10",
          "11-50": "11-50",
          "51-200": "51-200",
          "200+": "200+",
        },
        securityNote: "Vos données sont sécurisées",
        contactTime: "Contact sous 24h",
        alert: "⚠️ Places limitées pour le MVP - les early adopters reçoivent des avantages exclusifs",
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
          question: "Si quiero cambiar de un ERP que ya tengo a CUBIX, ¿cuáles son mis ventajas?",
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
      tagline: "El primer ERP con IA que funciona autónomamente",
      product: {
        title: "PRODUCTO",
        features: "Características",
        technology: "Tecnología",
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
      copyright: "© 2025 CUBIX ERP. Todos los derechos reservados.",
    },
    // Construction Banner
    banner: {
      message: "🚧 Esta página está actualmente en desarrollo. Las características y el contenido pueden cambiar.",
    },
    underConstruction: {
      title: "PÁGINA EN",
      titleHighlight: "CONSTRUCCIÓN",
      subtitle: "Estamos trabajando arduamente para traerle esta característica",
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
      subtitleFeatures: "Auto-Réparation des Bugs • Support Instantané 24/7 • Aucun Consultant",
      ctaPrimary: "S'inscrire pour le MVP gratuit",
      ctaSecondary: "Voir Comment Cela Fonctionne",
      imageAlt: "Tableau de bord CUBIX ERP",
    },
    // Problem Section
    problem: {
      title: "LES ERP TRADITIONNELS SONT",
      titleHighlight: "OBSOLÈTES",
      painPoints: [
        { title: "Support basé sur les tickets", description: "Jours d'attente pour les corrections simples" },
        { title: "Résolution des bugs", description: "Plus de 4 heures par incident" },
        { title: "Consultants coûteux", description: "Coûts continuels de €100-200/h" },
        { title: "IA comme complément", description: "Aucune véritable autonomie, juste assistance" },
        { title: "Aucune optimisation proactive", description: "Systèmes réactifs, pas prédictifs" },
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
        { title: "90% d'Autonomie", description: "L'IA gère les opérations de bout en bout sans intervention humaine" },
        {
          title: "Les Bugs S'Auto-Réparent",
          description: "Système auto-réparateur détecte et résout les problèmes automatiquement",
        },
        { title: "Support 24/7 <1sec", description: "Réponses instantanées de l'IA, sans tickets, sans attente" },
        { title: "Aucun Consultant", description: "Économisez €100-200/h avec des opérations autonomes" },
        { title: "MTTR: 30min vs 4h", description: "8 fois plus rapide pour le temps moyen de résolution" },
        { title: "Système Auto-Évoluant", description: "Apprend et optimise continuellement à partir de vos données" },
      ],
    },
    // Architecture Section
    architecture: {
      title: "ARCHITECTURE",
      titleHighlight: "ARCHECTURE IA DE 4 COUCES MULTINIVEAUX",
      subtitle: "Système d'escalade basé sur la confiance dirige les requêtes vers la couche optimale d'IA",
      layers: [
        {
          name: "IA LOCALE",
          model: "DeepSeek R1 8B",
          description: "70% des requêtes résolues localement, temps de réponse <100ms",
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
          description: "Auto-réparation de code, résolution autonome, déploiement continu",
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
        { feature: "Temps de réponse", traditional: "Heures/Jours", cubix: "<1 seconde" },
        { feature: "Temps moyen de réparation", traditional: "Plus de 4 heures", cubix: "30 minutes" },
      ],
    },
    // Modules Section
    modules: {
      title: "MVP",
      titleHighlight: "MODULES INCLUS",
      subtitle: "Fonctionnalités principales prêtes pour le lancement de votre entreprise",
      items: [
        { name: "CRM et Leads", description: "Gestion des relations clients et suivi des leads" },
        { name: "Ventes et Facturation", description: "Cycle de vente complet et facturation automatique" },
        { name: "Commandes d'Achat", description: "Approvisionnement et gestion des fournisseurs" },
        { name: "Gestion de Stock", description: "Contrôle de stock en temps réel et entrepôt" },
        { name: "Comptabilité", description: "Gestion financière complète et rapports" },
        { name: "Rapports avec IA", description: "Analyses intelligentes et prévisions" },
        { name: "Flux Automatisés", description: "Automatisation personnalisée de processus métier" },
        { name: "Permissions et Sécurité", description: "Accès basé sur les rôles et protection des données" },
        { name: "Multi-langue", description: "Support international et localisation" },
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
          features: ["Module CRM Complet", "Leads et Opportunités", "Automatisation Marketing"],
        },
        {
          phase: "Phase 3",
          name: "APP VENTES",
          duration: "1-2 mois",
          features: ["Module Ventes Complet", "Devis et Commandes", "Factures et Paiements"],
        },
        {
          phase: "Phase 4",
          name: "APP INVENTAIRE",
          duration: "1-2 mois",
          features: ["Module Inventaire Complet", "Entrepôts et Stock", "Lots et Numéros de Série"],
        },
        {
          phase: "Phase 5",
          name: "APP ACHATS",
          duration: "1-2 mois",
          features: ["Module Achats Complet", "Requêtes et Commandes", "Gestion des Fournisseurs"],
        },
        {
          phase: "Phase 6",
          name: "APP COMPTABILITÉ",
          duration: "1-2 mois",
          features: ["Module Comptabilité Complet", "Gestion Financière", "Rapports Avancés"],
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
      subtitle: "Soyez parmi les premiers à expérimenter CUBIX et façonner son avenir",
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
            description: "Reconnu comme utilisateur fondateur avec badge exclusif et avantages vitaux.",
          },
          {
            icon: "Target",
            title: "Faire Évoluer le Produit",
            description: "Votre feedback influence directement les fonctionnalités et les priorités de la route.",
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
      subtitle: "Ingénieurs expérimentés construisant l'avenir des systèmes ERP autonomes",
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
      subtitle: "Rejoignez les early adopters et soyez le premier à découvrir la gestion d'entreprise avec IA de CUBIX",
      form: {
        fullName: "Nom Complet",
        email: "Email Professionnel",
        company: "Entreprise",
        phone: "Téléphone",
        employees: "Nombre d'Employés",
        comments: "Commentaires",
        commentsPlaceholder: "Parlez-nous de vos besoins...",
        privacy: "J'accepte la politique de confidentialité",
        submit: "S'inscrire pour Votre MVP Gratuit",
        submitting: "Envoi...",
        required: "*",
        selectPlaceholder: "Sélectionner...",
        employeeOptions: {
          "1-10": "1-10",
          "11-50": "11-50",
          "51-200": "51-200",
          "200+": "200+",
        },
        securityNote: "Vos données sont sécurisées",
        contactTime: "Contact sous 24h",
        alert: "⚠️ Places limitées pour le MVP - les early adopters reçoivent des avantages exclusifs",
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
          question: "Si je veux passer de l'ERP que j'ai déjà à CUBIX, quels sont mes avantages?",
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
      tagline: "Le premier ERP avec IA qui fonctionne de manière autonome",
      product: {
        title: "PRODUIT",
        features: "Fonctionnalités",
        technology: "Technologie",
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
      copyright: "© 2025 CUBIX ERP. Tous droits réservés.",
    },
    // Construction Banner
    banner: {
      message: "🚧 Cette page est actuellement en développement. Les fonctionnalités et le contenu peuvent changer.",
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
}
