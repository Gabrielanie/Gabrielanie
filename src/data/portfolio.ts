export const personal = {
  name: 'Gabriel Anie',
  fullName: 'Gabriel Anietie Udoh',
  title: 'Software Developer',
  location: 'Nigeria — Remote Worldwide',
  email: 'younganiel@gmail.com',
  availability: 'Available for new projects',
  tagline: 'Building performant, scalable web & mobile applications with cutting-edge technologies and thoughtful user experiences.',
  bio: [
    "I'm a passionate software Developer with 6+ years of industry experience, specialising in scalable web and mobile applications. I combine clean architecture with intuitive UI/UX to deliver products users love.",
    "My work spans from WooCommerce storefronts to Next.js 15 SaaS dashboards and React Native cross-platform apps — always with a focus on performance, maintainability, and delightful user experience.",
    "When I'm not shipping code, I mentor developers, contribute to open-source, and explore emerging technologies to stay at the edge of the web ecosystem.",
  ],
  roles: [
    'Full Stack Developer',
    'React & Next.js Expert',
    'Mobile App Developer',
    'UI/UX Enthusiast',
    'Team Lead',
  ],
  socials: {
    github: 'https://github.com/gabrielanie',
    linkedin: 'https://www.linkedin.com/in/gabriel-udoh-85974616b/',
    email: 'mailto:younganiel@gmail.com',
  },
  stats: [
    { value: '6+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Delivered' },
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
    items: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'REST APIs', 'GraphQL', 'Redis', 'Prisma'],
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
    items: ['Git & GitHub', 'Docker', 'AWS', 'Vite', 'Vercel', 'CI/CD', 'Nginx', 'Figma', 'Radix UI', 'Formik / Yup', 'Recharts', 'Webpack'],
  },
  {
    id: 'cms',
    label: 'CMS & E-Commerce',
    color: '#0d9488',
    items: ['WordPress', 'WooCommerce', 'Elementor', 'Paystack API', 'Stripe', 'Headless CMS', 'SEO Optimisation', 'Performance Tuning'],
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
    longDescription: "Built with Next.js 15 App Router, this platform features internationalisation, role-based authentication, and a live analytics dashboard using Recharts. The anonymous feedback system helps companies surface honest employee sentiments, driving healthier workplaces.",
    liveUrl: 'https://rateo.ng/',
    githubUrl: 'https://github.com/Gabrielanie/web-admin-rateo-develop',
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
    longDescription: "Handles 500+ daily visitors with custom Elementor templates and performance-optimised queries. Integrated Paystack payment gateway, product filtering, wishlist functionality, and responsive design. Reduced page load time by 35% through query optimisation and caching strategies.",
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
    longDescription: "Serves users across multiple African countries with real-time location services, push notifications, and offline caching. Built with React Native and Expo for cross-platform delivery, backed by a Node.js/Express REST API with MongoDB for real-time location-based data.",
    liveUrl: 'https://www.otgafrica.com/',
    githubUrl: 'https://github.com/AVstudio1999/onthego',
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
    longDescription: "Features role-based access control, staff onboarding flows, payroll management, and exportable reports. Transformed complex HR requirements into an intuitive platform that teams love using daily. Includes audit trails, performance review cycles, and training module tracking.",
    liveUrl: 'https://greensagebconsult.com/',
    image: '/images/greensage.png',
    featured: true,
    color: '#22c55e',
  },
  {
    id: 'lgc',
    title: 'LGC Admin – E-Learning Management Dashboard',
    category: ['fullstack', 'frontend'],
    tech: ['React 19', 'TypeScript', 'Vite', 'Redux Toolkit', 'RTK Query', 'React Router 7', 'Tailwind CSS', 'Radix UI', 'Framer Motion', 'Formik', 'Yup', 'Axios', 'react-quill-new'],
    description: 'Comprehensive admin dashboard for managing an online learning platform — courses, orders, customers, articles, vouchers, and enrollments.',
    longDescription: "A fully-featured e-learning admin platform with a live analytics dashboard tracking revenue, enrollments, conversion rate, and recent visitor activity. Includes course creation with rich-text lesson management via react-quill-new, blog article publishing, order and transaction tracking, customer analytics, voucher and discount code management, and enrollment monitoring. Built with RTK Query for server state, Formik + Yup for form validation, Radix UI for accessible components, and JWT-based authentication with auto-refresh.",
    liveUrl: 'https://lgc-admin-sooty.vercel.app',
    image: '/images/lgc.png',
    featured: false,
    color: '#f59e0b',
  },
  {
    id: 'gabriel-digital',
    title: 'Gabriel Anie Digital Solutions',
    category: ['frontend'],
    tech: ['React', 'Vite', 'TypeScript', 'shadcn/ui', 'Tailwind CSS', 'Netlify'],
    description: 'Digital agency landing page and client portal with service showcase and pricing tiers.',
    longDescription: "A polished digital agency site featuring animated service showcases, tiered pricing plans, a client contact system, and a blog. Deployed on Netlify with continuous deployment from GitHub. Optimised for Core Web Vitals and SEO.",
    featured: false,
    color: '#15803d',
  },
  {
    id: 'analytics',
    title: 'Real-Time Analytics Dashboard',
    category: ['frontend', 'fullstack'],
    tech: ['Vue.js 3', 'D3.js', 'WebSockets', 'Chart.js', 'Vite', 'Laravel'],
    description: 'Real-time data visualisation platform with interactive charts and live WebSocket feeds.',
    longDescription: "A powerful analytics platform with live WebSocket data feeds, interactive D3.js charts, custom report generation, and exportable datasets. Built with Vue.js 3 Composition API on the frontend and Laravel providing the WebSocket broadcast layer.",
    githubUrl: 'https://github.com/Gabrielanie/dashboard-a1',
    featured: false,
    color: '#06b6d4',
  },
  {
    id: 'voyage-pal',
    title: 'Voyage Pal – AI Travel Planner',
    category: ['mobile', 'fullstack'],
    tech: ['React Native', 'TypeScript', 'Firebase', 'Claude AI', 'OpenAI', 'React Navigation', 'Amadeus API', 'Async Storage'],
    description: 'AI-powered cross-platform travel app for trip planning, destination discovery, and itinerary generation.',
    longDescription: "Voyage Pal integrates Claude and OpenAI to deliver intelligent travel recommendations, automated itinerary generation, and a real-time AI chat assistant. Users can discover destinations, plan multi-day trips with budget tracking, and book flights and hotels via the Amadeus API. Authentication is handled through Firebase with Google and Apple sign-in support.",
    githubUrl: 'https://github.com/TciOps3/Voyage-Pal',
    featured: true,
    color: '#0891b2',
  },
  {
    id: 'lareinegold',
    title: 'La Reine Gold Academy – E-Learning Platform',
    category: ['fullstack', 'frontend'],
    tech: ['React 19', 'Vite', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Framer Motion', 'i18next', 'React Router DOM', 'Formik', 'Radix UI', 'Axios', 'Sass'],
    description: 'Multi-language e-learning platform with course management, animated UI, and professional services.',
    longDescription: "La Reine Gold Academy is a feature-rich e-learning web application with multi-language support (i18next), Redux Toolkit for global state, Formik + Yup for form validation, and a polished animated UI powered by Framer Motion. Built on React 19 with Vite and TypeScript, it includes Radix UI accessible components, Axios API integration, and Sass for advanced styling.",
    githubUrl: 'https://github.com/LGC-1/lareinegold-1',
    featured: true,
    color: '#d97706',
  },
  {
    id: 'finance-tracker',
    title: 'Anie Finance Tracker – Mobile & API',
    category: ['mobile', 'fullstack'],
    tech: ['Flutter', 'Dart', 'Riverpod', 'GoRouter', 'Dio', 'Node.js', 'Express.js', 'UUID'],
    description: 'Cross-platform personal finance app with Flutter mobile UI and a Node.js REST API backend.',
    longDescription: "A full-stack finance tracking application built as a technical assessment. The Flutter frontend uses Riverpod for state management, GoRouter for declarative navigation, and Dio for HTTP requests. The Express.js backend exposes 6 RESTful endpoints for full CRUD operations on financial transactions and balance summaries, demonstrating clean separation of concerns across mobile and server layers.",
    githubUrl: 'https://github.com/Gabrielanie/Anie-finance-tracker',
    featured: false,
    color: '#16a34a',
  },
  {
    id: 'educve',
    title: 'EduCVE – Learning Management System',
    category: ['fullstack', 'backend'],
    tech: ['Laravel 10', 'PHP 8.1', 'MySQL', 'Blade Templates', 'Bootstrap', 'JavaScript', 'Composer'],
    description: 'Enterprise-grade LMS for educational institutions with multi-role dashboards, quizzes, and course management.',
    longDescription: "EduCVE is a comprehensive Learning Management System built on Laravel 10 with a modular architecture. It supports separate Admin, Instructor, and Student dashboards with full course creation, quiz management, progress tracking, certificate generation, and payment integration. Additional features include a blog, support ticket system, event calendar, and a built-in language management system.",
    githubUrl: 'https://github.com/phonixcode/educve',
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
      'Sustaining and enhancing a live AI-powered transcription and content analysis platform built on AWS, spanning the full product lifecycle from backend optimisations and frontend feature delivery to AI API integration, infrastructure management, and knowledge transfer to the in-house engineering team',
      'Maintain and evolve a live AI platform (AWS infrastructure) that transcribes and analyses audio/video content using OpenAI Whisper and NLP pipelines',
      'Deliver frontend and backend feature enhancements, bug fixes, and performance optimisations across React.js and Node.js layers',
      'Manage CI/CD deployments and infrastructure updates via AWS (EC2, S3, Lambda, CloudFront) and GitHub Actions',
      'Integrate and monitor third-party AI APIs (OpenAI, Whisper, Google Cloud Speech-to-Text) and explore model fine-tuning opportunities',
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
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'Gisela Vogue',
    initials: 'SJ',
    color: '#0d9488',
    quote: "Gabriel delivered an exceptional e-commerce platform for our fashion brand. His attention to detail and technical expertise resulted in a 40% increase in our online sales within the first month of launch.",
  },
  {
    name: 'Michael Thompson',
    role: 'Director',
    company: 'Greensage Consult',
    initials: 'MT',
    color: '#22c55e',
    quote: "Working with Gabriel on our HR software was a game-changer. He transformed complex requirements into an intuitive platform that our team loves using daily.",
  },
  {
    name: 'Jennifer Lee',
    role: 'Product Manager',
    company: 'TechCorp',
    initials: 'JL',
    color: '#06b6d4',
    quote: "Gabriel's expertise in React and Node.js helped us build a scalable platform. His clean code and documentation made future enhancements effortless.",
  },
];
