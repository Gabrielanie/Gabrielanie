import { Mail, Link2, Code2, Layout, Smartphone, Sparkles, ShoppingBag, Users } from 'lucide-react';

export const studio = {
  name: 'Gabriel Anie',
  wordmark: 'GA',
  tagline: 'A boutique studio for web, mobile & AI-integrated products.',
  positioning: "We're a small, senior-led team — not a subcontracted agency — so the person who scopes your project is the person who builds it.",
};

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
    email: 'mailto:younganiel@gmail.com?subject=Let%27s%20work%20together',
  },
  stats: [
    { value: '6+', label: 'Years Experience' },
    { value: '25+', label: 'Projects Delivered' },
    { value: '15+', label: 'Happy Clients' },
  ],
};

export const socialLinks = [
  { href: personal.socials.github, Icon: Code2, label: 'GitHub' },
  { href: personal.socials.linkedin, Icon: Link2, label: 'LinkedIn' },
  { href: personal.socials.email, Icon: Mail, label: 'Email' },
];

export type NavLink = { href: string; label: string };

export const navLinks: NavLink[] = [
  { href: '#home',     label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#work',     label: 'Work' },
  { href: '#process',  label: 'Process' },
  { href: '#about',    label: 'About' },
  { href: '#contact',  label: 'Contact' },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  Icon: typeof Layout;
  deliverables: string[];
};

export const services: Service[] = [
  {
    id: 'web',
    title: 'Web App Development',
    description: 'Full-stack web applications and SaaS platforms built for speed, scale, and long-term maintainability.',
    Icon: Layout,
    deliverables: ['Next.js & React front-ends', 'Node.js / Laravel APIs', 'PostgreSQL & MySQL data layers', 'CI/CD & cloud deployment'],
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    description: 'Cross-platform iOS and Android apps that feel native, shipped from a single React Native or Flutter codebase.',
    Icon: Smartphone,
    deliverables: ['React Native & Flutter builds', 'Push notifications & offline sync', 'App Store / Play Store release', 'Native device integrations'],
  },
  {
    id: 'ai',
    title: 'AI Integration',
    description: 'Practical AI features — not novelty demos — wired into real products with Claude, OpenAI, and speech APIs.',
    Icon: Sparkles,
    deliverables: ['LLM-powered product features', 'Prompt engineering & evaluation', 'Speech-to-text pipelines', 'Cost & latency optimisation'],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & CMS',
    description: 'Fast, conversion-focused storefronts and content platforms on WordPress, WooCommerce, and headless CMS.',
    Icon: ShoppingBag,
    deliverables: ['WooCommerce storefronts', 'Payment gateway integration', 'Headless CMS builds', 'Performance & SEO tuning'],
  },
  {
    id: 'consulting',
    title: 'Technical Leadership',
    description: 'Architecture reviews, engineering leadership, and hands-on mentoring for teams shipping under pressure.',
    Icon: Users,
    deliverables: ['Architecture & code review', 'Engineering team leadership', 'Developer mentoring', 'Technical due diligence'],
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  { step: '01', title: 'Discover', description: "We start by understanding your goals, users, and constraints — no build begins without a clear brief." },
  { step: '02', title: 'Design & Plan', description: 'We map the architecture and user experience up front, so the build has a solid foundation to move fast on.' },
  { step: '03', title: 'Build', description: 'Iterative development with regular check-ins — you see real progress every week, not just at the end.' },
  { step: '04', title: 'Ship', description: 'Rigorous QA, staged rollouts, and a considered launch — nothing goes live untested.' },
  { step: '05', title: 'Support', description: 'We stay involved after launch — monitoring, fixing, and iterating as real usage comes in.' },
];

export type SkillCategory = {
  id: string;
  label: string;
  color: string;
  solid: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#15803d',
    solid: '#15803d',
    items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Vue.js', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Redux Toolkit', 'React Query', 'SASS', 'Bootstrap'],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: '#06b6d4',
    solid: '#0e7490',
    items: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Supabase', 'Prisma', 'Socket.io', 'REST APIs', 'GraphQL', 'Redis', 'Zod'],
  },
  {
    id: 'ai',
    label: 'AI & Integrations',
    color: '#8b5cf6',
    solid: '#6d28d9',
    items: ['Claude AI (Anthropic)', 'OpenAI API', 'Whisper (Speech-to-Text)', 'Google Cloud Speech', 'OpenRouter', 'AI Prompt Engineering', 'Amadeus API', 'Paystack API', 'Stripe', 'Mailchimp API'],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    color: '#22c55e',
    solid: '#047857',
    items: ['React Native', 'TypeScript', 'Expo', 'React Navigation', 'AsyncStorage', 'Push Notifications', 'Geolocation', 'Offline Caching'],
  },
  {
    id: 'devops',
    label: 'DevOps & Tools',
    color: '#f59e0b',
    solid: '#b45309',
    items: ['Git & GitHub', 'Docker', 'AWS', 'Azure', 'Vercel', 'Railway', 'GitHub Actions', 'Nginx', 'Vite', 'Figma', 'Radix UI', 'Formik / Yup'],
  },
  {
    id: 'cms',
    label: 'CMS & E-Commerce',
    color: '#0d9488',
    solid: '#0f766e',
    items: ['WordPress', 'WooCommerce', 'Elementor', 'Headless CMS', 'SEO Optimisation', 'Performance Tuning'],
  },
];

export type CaseStudyMetric = { label: string; value: string };

export type CaseStudy = {
  problem: string;
  approach: string[];
  outcome: string;
  metrics?: CaseStudyMetric[];
};

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
  caseStudy?: CaseStudy;
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
    image: '/images/rateo.webp',
    featured: true,
    color: '#15803d',
    caseStudy: {
      problem: "Companies wanted honest feedback from employees, but existing tools weren't anonymous enough to build real trust.",
      approach: [
        "Built on Next.js 15's App Router with role-based auth so responses stay genuinely anonymous.",
        'Added internationalisation so the same platform serves teams across multiple regions.',
        'Shipped a live analytics dashboard so leadership sees sentiment trends without seeing who said what.',
      ],
      outcome: "Rate'O is live in production as an anonymous feedback platform, giving organisations a trustworthy channel for employee sentiment.",
      metrics: [{ label: 'Status', value: 'Live in production' }, { label: 'Reach', value: 'Multi-region' }],
    },
  },
  {
    id: 'gisela',
    title: 'Gisela Vogue – Fashion E-Commerce',
    category: ['fullstack', 'cms'],
    tech: ['WordPress', 'WooCommerce', 'Elementor', 'Paystack API', 'PHP', 'MySQL', 'JavaScript', 'CSS3'],
    description: 'Full-featured fashion e-commerce store with real-time inventory and secure payment gateway.',
    longDescription: "A high-performance fashion e-commerce store handling hundreds of daily visitors. Built with custom templates, performance-optimised queries, and seamless payment gateway integration. Features advanced product filtering, wishlist functionality, and a fully responsive design — with significant improvements to page load performance through caching and optimisation strategies.",
    liveUrl: 'https://www.giselavogue.com',
    image: '/images/gisela.webp',
    featured: true,
    color: '#0d9488',
    caseStudy: {
      problem: 'Gisela Vogue needed an online store that could handle real traffic and payments without the typical WooCommerce slowdowns.',
      approach: [
        'Built custom WooCommerce templates and optimised database queries for faster page loads.',
        'Integrated Paystack for secure, local payment processing.',
        'Added product filtering, wishlists, and a fully responsive layout.',
      ],
      outcome: 'The store now handles hundreds of daily visitors with meaningfully faster load times.',
      metrics: [{ label: 'Online sales', value: '+40% in month 1' }, { label: 'Traffic', value: 'Hundreds of visitors/day' }],
    },
  },
  {
    id: 'onthego',
    title: 'OnTheGo – Wi-Fi & Hotspot Finder',
    category: ['mobile', 'fullstack'],
    tech: ['React Native', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Geolocation API'],
    description: 'Cross-platform mobile app helping users discover free Wi-Fi hotspots and restaurants across Africa.',
    longDescription: "A cross-platform mobile application serving users across multiple African countries with real-time location services, push notifications, and offline caching capabilities. Delivers a smooth, native-feel experience on both iOS and Android from a single codebase, backed by a performant REST API for real-time location-based data.",
    liveUrl: 'https://www.otgafrica.com/',
    image: '/images/onthego.webp',
    featured: true,
    color: '#06b6d4',
    caseStudy: {
      problem: 'Millions of people across Africa needed a reliable way to find free Wi-Fi and food nearby — with patchy connectivity part of the problem.',
      approach: [
        'Built a single React Native codebase serving both iOS and Android.',
        'Layered in offline caching so the app stays useful on a weak connection.',
        'Backed it with a Node.js/Express REST API for real-time, location-based data.',
      ],
      outcome: 'OnTheGo shipped across multiple African countries and contributed to a reported increase in user adoption.',
      metrics: [{ label: 'User adoption', value: '+40%' }, { label: 'Platforms', value: 'iOS & Android' }],
    },
  },
  {
    id: 'greensage',
    title: 'Greensage – HR Management System',
    category: ['fullstack', 'backend'],
    tech: ['Laravel', 'PHP', 'React.js', 'MySQL', 'Bootstrap', 'REST API'],
    description: 'Comprehensive HRMS for organisational performance tracking, payroll, and training solutions.',
    longDescription: "A comprehensive HR management platform covering staff onboarding, payroll management, performance reviews, and training module tracking. Features role-based access control, exportable reports, and audit trails — transforming complex HR requirements into an intuitive platform used by teams daily.",
    liveUrl: 'https://greensagebconsult.com/',
    image: '/images/greensage.webp',
    featured: true,
    color: '#22c55e',
    caseStudy: {
      problem: 'Greensage needed to replace scattered spreadsheets and manual processes with one system for payroll, performance, and training.',
      approach: [
        'Built a Laravel + React HRMS covering onboarding, payroll, and performance reviews.',
        'Added role-based access control and exportable audit trails for compliance.',
        'Designed the UI around the daily workflows HR teams actually use.',
      ],
      outcome: "Greensage's team now runs HR operations through one platform, in place of manual processes.",
      metrics: [{ label: 'Adoption', value: 'Used daily by HR team' }],
    },
  },
  {
    id: 'lgc',
    title: 'LGC Admin – E-Learning Management Dashboard',
    category: ['fullstack', 'frontend'],
    tech: ['React 19', 'TypeScript', 'Vite', 'Redux Toolkit', 'RTK Query', 'React Router 7', 'Tailwind CSS', 'Radix UI', 'Framer Motion', 'Formik', 'Yup', 'Axios'],
    description: 'Comprehensive admin dashboard for managing an online learning platform — courses, orders, customers, articles, vouchers, and enrollments.',
    longDescription: "A fully-featured e-learning administration platform with a live analytics dashboard tracking revenue, enrollments, and conversion metrics. Includes rich-text course and lesson management, article publishing, order and transaction tracking, customer analytics, voucher management, and enrollment monitoring — built with a focus on performance, accessible components, and a clean, maintainable codebase.",
    liveUrl: 'https://lgc-admin-sooty.vercel.app',
    image: '/images/lgc.webp',
    featured: true,
    color: '#f59e0b',
    caseStudy: {
      problem: 'LGC needed a single dashboard to run their e-learning business — courses, orders, customers, and content — without juggling separate tools.',
      approach: [
        'Built the dashboard in React 19 + Redux Toolkit with RTK Query for a fast, consistent data layer.',
        'Shipped live analytics for revenue, enrollments, and conversion.',
        'Covered course management, article publishing, vouchers, and customer tracking in one accessible UI.',
      ],
      outcome: "LGC's team manages the full learning platform — content, commerce, and customers — from a single admin dashboard.",
      metrics: [{ label: 'Status', value: 'Live admin platform' }],
    },
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
    caseStudy: {
      problem: 'Trip planning is scattered across apps — flights, hotels, itineraries. Voyage Pal set out to bring it into one AI-guided flow.',
      approach: [
        'Built a cross-platform React Native app integrating Claude and OpenAI for personalised recommendations.',
        'Connected the Amadeus API for real-time flight and hotel data.',
        'Added budget tracking and automated, editable itinerary generation.',
      ],
      outcome: 'Voyage Pal gives travellers an AI-guided planning flow, from destination discovery through to a bookable itinerary.',
      metrics: [{ label: 'Capability', value: 'AI-guided trip planning' }],
    },
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
    caseStudy: {
      problem: 'La Reine Gold Academy needed a multi-language platform to manage courses and reach students across regions.',
      approach: [
        'Built with React 19, TypeScript, and Redux Toolkit for a robust, scalable front-end.',
        'Added full internationalisation with i18next.',
        'Focused on accessible component architecture and polished, animated interactions.',
      ],
      outcome: 'The academy runs course management and student-facing content through one multi-language platform.',
      metrics: [{ label: 'Reach', value: 'Multi-language' }],
    },
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
    caseStudy: {
      problem: 'Organisations needed to run structured DEIB and culture-change assessments at scale, with AI-generated insight rather than raw survey data.',
      approach: [
        'Built a multi-tenant SaaS on React 18, Node.js, and PostgreSQL, containerised with Docker.',
        'Built a global question bank supporting multiple assessment formats.',
        'Made the frontend WCAG 2.2 AA compliant and added bulk import plus PDF report export.',
      ],
      outcome: 'PraxisPQ delivers AI-generated organisational insight reports across DEIB, workforce transformation, and culture-change readiness — built to serve multiple client organisations from one platform.',
      metrics: [{ label: 'Accessibility', value: 'WCAG 2.2 AA' }, { label: 'Architecture', value: 'Multi-tenant SaaS' }],
    },
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
    caseStudy: {
      problem: 'A professional association needed both a public-facing site and a private member portal — events, payments, messaging, and community — in one platform.',
      approach: [
        'Built the public site (advisory board, events, resources, blog, careers) alongside a separate authenticated member portal.',
        'Integrated Stripe for conference registration and payments, JWT for member auth.',
        'Added real-time messaging, a member directory, and a gamified leaderboard.',
      ],
      outcome: "ACGC runs its full member experience — from public recruitment to private community engagement — on one platform.",
      metrics: [{ label: 'Scope', value: 'Public site + member portal' }],
    },
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
    initials: 'CA',
    color: '#0f766e',
    quote: "Gabriel delivered an exceptional e-commerce platform for our fashion brand. His attention to detail and technical expertise resulted in a 40% increase in our online sales within the first month of launch.",
  },
  {
    name: 'Effie Iheggie',
    role: 'Director',
    company: 'Greensage Consult',
    initials: 'EI',
    color: '#15803d',
    quote: "Working with Gabriel on our HR software was a game-changer. He transformed complex requirements into an intuitive platform that our team loves using daily.",
  },
  {
    name: 'Joseph Udu',
    role: 'Product Manager',
    company: 'Spencer Venture Studio',
    initials: 'JU',
    color: '#0e7490',
    quote: "Gabriel's expertise in React and Node.js helped us build a scalable platform. His clean code and documentation made future enhancements effortless.",
  },
];
