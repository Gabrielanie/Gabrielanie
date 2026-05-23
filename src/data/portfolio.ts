export const personal = {
  name: 'Gabriel Anie',
  fullName: 'Gabriel Anietie Udoh',
  title: 'Software Developer',
  location: 'Lagos, Nigeria',
  email: 'younganiel@gmail.com',
  availability: 'Available for new projects',
  tagline: 'Building performant, scalable web, mobile & AI-integrated applications — from SaaS platforms and enterprise systems to cross-platform mobile apps.',
  bio: [
    "I'm Gabriel Anie, a full-stack developer based in Lagos. I've been building for the web and mobile for over 6 years now starting out as a freelancer, growing into a role leading engineering at a London-based venture studio, and picking up a lot of hard lessons along the way.",
    "My work covers a pretty wide range: e-commerce stores, enterprise SaaS platforms, HR systems, membership portals, cross-platform mobile apps, and more recently products that integrate AI in meaningful ways. I genuinely enjoy the problem-solving side of this work. Getting the architecture right, sweating the performance details, making sure what gets shipped actually holds up that's the part I care about.",
    "When I'm not coding, I spend time mentoring developers who are earlier in their journey. I remember what it was like to figure things out without much support, so I try to show up for others the way I wish someone had for me. I'm also just curious by nature — always digging into something new, whether it's a new framework, an AI model, or just a better way to solve an old problem.",
  ],
  roles: [
    'Full Stack Developer',
    'React & Next.js Expert',
    'AI Integration Engineer',
    'Mobile App Developer',
    'Team Lead',
  ],
  socials: {
    github: 'https://github.com/gabrielanie',
    linkedin: 'https://www.linkedin.com/in/gabriel-udoh-85974616b/',
    email: 'mailto:younganiel@gmail.com',
  },
  stats: [
    { value: '6+', label: 'Years Experience' },
    { value: '25+', label: 'Projects Delivered' },
    { value: '15+', label: 'Happy Clients' },
  ],
};

export type SkillCategory = {
  id: string;
  label: string;
  color: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#15803d',
    items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Vue.js', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Redux Toolkit', 'React Query', 'SASS', 'Bootstrap'],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: '#06b6d4',
    items: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Supabase', 'Prisma', 'Socket.io', 'REST APIs', 'GraphQL', 'Redis', 'Zod'],
  },
  {
    id: 'ai',
    label: 'AI & Integrations',
    color: '#8b5cf6',
    items: ['Claude AI (Anthropic)', 'OpenAI API', 'Whisper (Speech-to-Text)', 'Google Cloud Speech', 'OpenRouter', 'AI Prompt Engineering', 'Amadeus API', 'Paystack API', 'Stripe', 'Mailchimp API'],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    color: '#22c55e',
    items: ['React Native', 'TypeScript', 'Expo', 'React Navigation', 'AsyncStorage', 'Push Notifications', 'Geolocation', 'Offline Caching'],
  },
  {
    id: 'devops',
    label: 'DevOps & Tools',
    color: '#f59e0b',
    items: ['Git & GitHub', 'Docker', 'AWS', 'Azure', 'Vercel', 'Railway', 'GitHub Actions', 'Nginx', 'Vite', 'Figma', 'Radix UI', 'Formik / Yup'],
  },
  {
    id: 'cms',
    label: 'CMS & E-Commerce',
    color: '#0d9488',
    items: ['WordPress', 'WooCommerce', 'Elementor', 'Headless CMS', 'SEO Optimisation', 'Performance Tuning'],
  },
];

export type Project = {
  id: string;
  title: string;
  category: string[];
  tech: string[];
  description: string;
  longDescription: string;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured: boolean;
  color: string;
};

export const projects: Project[] = [
  {
    id: 'rateo',
    title: "Rate'O – Workplace Feedback Platform",
    category: ['fullstack', 'frontend', 'backend'],
    tech: ['Next.js 15', 'TypeScript', 'React 19', 'TanStack Query', 'shadcn/ui', 'Tailwind CSS', 'Node.js', 'MySQL', 'Framer Motion'],
    description: 'Anonymous workplace feedback platform that fosters transparency and improves employee experiences.',
    longDescription: "A modern anonymous workplace feedback platform built with Next.js 15 App Router. Features role-based authentication, internationalisation support, and a live analytics dashboard with interactive data visualisations. Designed to help organisations surface honest employee sentiment and build healthier, more transparent workplace cultures.",
    liveUrl: 'https://rateo.ng/',
    image: '/images/rateo.png',
    featured: true,
    color: '#15803d',
  },
  {
    id: 'gisela',
    title: 'Gisela Vogue – Fashion E-Commerce',
    category: ['fullstack', 'cms'],
    tech: ['WordPress', 'WooCommerce', 'Elementor', 'Paystack API', 'PHP', 'MySQL', 'JavaScript', 'CSS3'],
    description: 'Full-featured fashion e-commerce store with real-time inventory and secure payment gateway.',
    longDescription: "A high-performance fashion e-commerce store handling hundreds of daily visitors. Built with custom templates, performance-optimised queries, and seamless payment gateway integration. Features advanced product filtering, wishlist functionality, and a fully responsive design — with significant improvements to page load performance through caching and optimisation strategies.",
    liveUrl: 'https://www.giselavogue.com',
    image: '/images/gisela.png',
    featured: true,
    color: '#0d9488',
  },
  {
    id: 'onthego',
    title: 'OnTheGo – Wi-Fi & Hotspot Finder',
    category: ['mobile', 'fullstack'],
    tech: ['React Native', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Geolocation API'],
    description: 'Cross-platform mobile app helping users discover free Wi-Fi hotspots and restaurants across Africa.',
    longDescription: "A cross-platform mobile application serving users across multiple African countries with real-time location services, push notifications, and offline caching capabilities. Delivers a smooth, native-feel experience on both iOS and Android from a single codebase, backed by a performant REST API for real-time location-based data.",
    liveUrl: 'https://www.otgafrica.com/',
    image: '/images/onthego.png',
    featured: true,
    color: '#06b6d4',
  },
  {
    id: 'greensage',
    title: 'Greensage – HR Management System',
    category: ['fullstack', 'backend'],
    tech: ['Laravel', 'PHP', 'React.js', 'MySQL', 'Bootstrap', 'REST API'],
    description: 'Comprehensive HRMS for organisational performance tracking, payroll, and training solutions.',
    longDescription: "A comprehensive HR management platform covering staff onboarding, payroll management, performance reviews, and training module tracking. Features role-based access control, exportable reports, and audit trails — transforming complex HR requirements into an intuitive platform used by teams daily.",
    liveUrl: 'https://greensagebconsult.com/',
    image: '/images/greensage.png',
    featured: true,
    color: '#22c55e',
  },
  {
    id: 'lgc',
    title: 'LGC Admin – E-Learning Management Dashboard',
    category: ['fullstack', 'frontend'],
    tech: ['React 19', 'TypeScript', 'Vite', 'Redux Toolkit', 'RTK Query', 'React Router 7', 'Tailwind CSS', 'Radix UI', 'Framer Motion', 'Formik', 'Yup', 'Axios'],
    description: 'Comprehensive admin dashboard for managing an online learning platform — courses, orders, customers, articles, vouchers, and enrollments.',
    longDescription: "A fully-featured e-learning administration platform with a live analytics dashboard tracking revenue, enrollments, and conversion metrics. Includes rich-text course and lesson management, article publishing, order and transaction tracking, customer analytics, voucher management, and enrollment monitoring — built with a focus on performance, accessible components, and a clean, maintainable codebase.",
    liveUrl: 'https://lgc-admin-sooty.vercel.app',
    image: '/images/lgc.png',
    featured: true,
    color: '#f59e0b',
  },
  {
    id: 'analytics',
    title: 'Real-Time Analytics Dashboard',
    category: ['frontend', 'fullstack'],
    tech: ['Vue.js 3', 'D3.js', 'WebSockets', 'Chart.js', 'Vite', 'Laravel'],
    description: 'Real-time data visualisation platform with interactive charts and live WebSocket feeds.',
    longDescription: "A powerful real-time data visualisation platform featuring live data feeds, interactive charts, custom report generation, and exportable datasets. Built with Vue.js 3 Composition API and D3.js for rich visual interactions, with a Laravel backend powering the real-time broadcast layer.",
    featured: false,
    color: '#06b6d4',
  },
  {
    id: 'voyage-pal',
    title: 'Voyage Pal – AI Travel Planner',
    category: ['mobile', 'fullstack'],
    tech: ['React Native', 'TypeScript', 'Firebase', 'Claude AI', 'OpenAI', 'React Navigation', 'Amadeus API', 'Async Storage'],
    description: 'AI-powered cross-platform travel app for trip planning, destination discovery, and itinerary generation.',
    longDescription: "An AI-powered cross-platform travel application for intelligent trip planning and destination discovery. Integrates multiple AI services to deliver personalised travel recommendations, automated itinerary generation, and a conversational travel assistant. Users can plan multi-day trips with budget tracking and access real-time flight and hotel data.",
    featured: true,
    color: '#0891b2',
  },
  {
    id: 'lareinegold',
    title: 'La Reine Gold Academy – E-Learning Platform',
    category: ['fullstack', 'frontend'],
    tech: ['React 19', 'Vite', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Framer Motion', 'i18next', 'React Router DOM', 'Formik', 'Radix UI', 'Axios', 'Sass'],
    description: 'Multi-language e-learning platform with course management, animated UI, and professional services.',
    longDescription: "A feature-rich multi-language e-learning web application supporting course management, animated UI interactions, and professional services. Built with React 19, TypeScript, and a robust global state setup — featuring full internationalisation, accessible component architecture, and a polished animated interface.",
    featured: true,
    color: '#d97706',
  },
  {
    id: 'praxispq',
    title: 'PraxisPQ – AI-Powered Organisational Assessment Platform',
    category: ['fullstack', 'backend', 'frontend'],
    tech: ['React 18', 'TypeScript', 'Vite', 'shadcn/ui', 'Tailwind CSS', 'React Query', 'Node.js', 'PostgreSQL', 'Docker', 'Jest'],
    description: 'Enterprise AI-powered assessment SaaS for DEIB, Workforce Transformation, People-First Maturity, and Culture Change Readiness.',
    longDescription: "An enterprise-grade multi-tenant assessment SaaS platform delivering AI-generated organisational insight reports across DEIB, Workforce Transformation, and Culture Change Readiness. The platform features role-based access control, real-time analytics, a global question bank supporting multiple question formats, WCAG 2.2 AA compliant frontend, and bulk data import with PDF report export — deployed on a cloud-native infrastructure.",
    liveUrl: 'https://project-kio2t.vercel.app',
    featured: true,
    color: '#6366f1',
  },
  {
    id: 'acgc',
    title: 'ACGC – Professional Association Platform & Member Portal',
    category: ['fullstack', 'backend', 'frontend'],
    tech: ['React', 'Vite', 'TailwindCSS', 'Framer Motion', 'Node.js', 'Express.js', 'PostgreSQL', 'Stripe', 'JWT'],
    description: 'Full-featured professional association platform with public site, authenticated member portal, conference registration, events, resources, leaderboard, and messaging.',
    longDescription: "A comprehensive membership community platform for a professional association. The public site features an advisory board, team directory, events calendar, resource hub, insights blog, careers board, and conference registration with integrated payments. The authenticated member portal includes a personalised dashboard, real-time messaging, member directory, rich-text content management, and a gamified leaderboard — with full transactional email and newsletter capabilities.",
    featured: true,
    color: '#0ea5e9',
  },
  {
    id: 'finance-tracker',
    title: 'Anie Finance Tracker – Mobile & API',
    category: ['mobile', 'fullstack'],
    tech: ['Flutter', 'Dart', 'Riverpod', 'GoRouter', 'Dio', 'Node.js', 'Express.js'],
    description: 'Cross-platform personal finance app with Flutter mobile UI and a Node.js REST API backend.',
    longDescription: "A full-stack personal finance tracking application with a cross-platform mobile frontend and a RESTful API backend. Features declarative state management, navigation, and HTTP handling on the mobile layer, with a clean REST API supporting full CRUD operations on financial transactions and balance summaries — demonstrating clear separation of concerns across mobile and server layers.",
    featured: false,
    color: '#16a34a',
  },
  {
    id: 'educve',
    title: 'EduCVE – Learning Management System',
    category: ['fullstack', 'backend'],
    tech: ['Laravel 10', 'PHP 8.1', 'MySQL', 'Blade Templates', 'Bootstrap', 'JavaScript'],
    description: 'Enterprise-grade LMS for educational institutions with multi-role dashboards, quizzes, and course management.',
    longDescription: "A comprehensive Learning Management System for educational institutions with a modular architecture. Supports separate Admin, Instructor, and Student dashboards with full course creation, quiz management, progress tracking, certificate generation, and payment integration — alongside a blog, support ticket system, event calendar, and language management.",
    featured: false,
    color: '#7c3aed',
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    role: 'Fullstack Developer — Maintenance, Support & AI Integration',
    company: 'Musenotes',
    period: 'Jan 2026 – Present',
    location: 'Remote · Part-Time / Contract',
    current: true,
    achievements: [
      'Sustaining and enhancing a live AI-powered transcription and content analysis platform, spanning the full product lifecycle from backend optimisations and frontend feature delivery to AI integration, infrastructure management, and knowledge transfer to the in-house engineering team',
      'Maintain and evolve a production AI platform that transcribes and analyses audio/video content using state-of-the-art speech and NLP services',
      'Deliver frontend and backend feature enhancements, bug fixes, and performance optimisations across the full stack',
      'Manage CI/CD deployments and cloud infrastructure updates, ensuring platform reliability and scalability',
      'Integrate and monitor third-party AI APIs and explore model optimisation opportunities to improve accuracy and cost efficiency',
      'Maintain documentation for infrastructure, APIs, and deployment processes to support in-house technical transition',
    ],
  },
  {
    role: 'Senior Full Stack Developer',
    company: 'A Venture Studio',
    period: 'Oct 2024 – Jul 2025',
    location: 'Remote · London, UK',
    achievements: [
      'Led full-stack development of multiple startup products simultaneously at a London-based venture studio, owning architecture, engineering execution, and team coordination across two flagship products — OnTheGo (mobile) and Rate\'O (web platform)',
      'Led development of OnTheGo, a cross-platform React Native mobile app serving users across Africa',
      'Architected Node.js/Express REST APIs with MongoDB for real-time location-based services',
      'Led a distributed team of 4 developers, conducting code reviews and sprint planning',
      'Built the Rate\'O feedback platform using Next.js 15, TypeScript, and TanStack Query',
    ],
  },
  {
    role: 'Frontend Developer & Coding Instructor',
    company: 'Melodia Coding Academy',
    period: '2023 – 2024',
    location: 'On-site · Nigeria',
    achievements: [
      'Held a dual role as a practising frontend developer and full-time coding instructor, building and maintaining the academy\'s web presence while designing a structured curriculum that bridged real-world development with accessible, project-based teaching for aspiring developers',
      'Developed and maintained responsive web applications using React, Vue.js, and modern CSS',
      'Designed and delivered curriculum covering HTML/CSS, JavaScript, React, and Git workflows',
      'Mentored 30+ students through hands-on projects and code reviews',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'Firstlincoln Technology',
    period: '2020 – 2022',
    location: 'On-site · Nigeria',
    achievements: [
      'Collaborated with senior engineers to build and maintain client-facing web applications, focusing on pixel-perfect responsive design and front-end performance optimisation while gaining solid foundations in professional development workflows and team collaboration',
      'Assisted senior developers in building and maintaining websites and web applications',
      'Implemented responsive designs using HTML5, CSS3, JavaScript, and Bootstrap',
      'Optimised page-load performance, reducing average load time by 35%',
    ],
  },
  {
    role: 'Freelance Web Developer & Digital Strategist',
    company: 'Self-Employed',
    period: '2018 – Present',
    current: true,
    location: 'Remote · Worldwide',
    achievements: [
      'Running an independent practice spanning 8+ years, partnering with SMEs across Nigeria and the UK to deliver end-to-end digital solutions — from custom websites and e-commerce stores to payment integrations and brand strategy, serving as both a technical partner and digital advisor for growing businesses',
      'Built 20+ production websites and e-commerce stores for SMEs across Nigeria and the UK',
      'Integrated payment gateways (Paystack, Stripe) and third-party APIs',
      'Provided digital strategy, SEO, and brand development alongside technical delivery',
    ],
  },
];

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
  color: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Chinenye Anuchi',
    role: 'CEO',
    company: 'Gisela Vogue',
    initials: 'SJ',
    color: '#0d9488',
    quote: "Gabriel delivered an exceptional e-commerce platform for our fashion brand. His attention to detail and technical expertise resulted in a 40% increase in our online sales within the first month of launch.",
  },
  {
    name: 'Effie Iheggie',
    role: 'Director',
    company: 'Greensage Consult',
    initials: 'MT',
    color: '#22c55e',
    quote: "Working with Gabriel on our HR software was a game-changer. He transformed complex requirements into an intuitive platform that our team loves using daily.",
  },
  {
    name: 'Joshep Udu',
    role: 'Product Manager',
    company: 'Spencer Venture Studio',
    initials: 'JL',
    color: '#06b6d4',
    quote: "Gabriel's expertise in React and Node.js helped us build a scalable platform. His clean code and documentation made future enhancements effortless.",
  },
];
