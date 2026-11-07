export interface Project {
  id: string;
  projectNumber: string;
  title: string;
  subtitle?: string;
  tag: string;
  description: string;
  features?: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillItem {
  id: string;
  name: string;
  index: string;
  category: "Frontend" | "Backend" | "Tools";
  description: string;
  badge: string;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
  current?: boolean;
}

export const SITE_CONFIG = {
  name: "Amit Singh",
  initials: "AS",
  handle: "@amitsingh",
  role: "SOFTWARE DEVELOPER",
  careerGoal: "Software Developer",
  location: "Chandigarh, India",
  education: "B.Tech, 2024–2028",
  currentStatus: "3rd Year Student",
  focus: "Software Development",
  mangaAvatar: "/manga-avatar.jpg",
  originalPhoto: "/original-photo.jpg",

  // Hero Section Exact Specifications
  hero: {
    line1: "HELLO,",
    line2: "I'M AMIT.",
    line3: "SOFTWARE",
    line4: "DEVELOPER.",
    intro:
      "3rd-year B.Tech student from Chandigarh, passionate about building modern web experiences and solving real-world problems through code.",
    metadata: [
      "[ CHANDIGARH, INDIA ]",
      "[ B.TECH 2024—2028 ]",
      "[ SOFTWARE DEVELOPER ]",
    ],
    ctaWork: "VIEW MY WORK",
    ctaConnect: "LET'S CONNECT",
  },

  // About Section Exact Specifications
  about: {
    heading: "// ABOUT ME",
    statement: "I LIKE TO LEARN BY BUILDING.",
    intro:
      "I'm Amit Singh, a B.Tech student based in Chandigarh with a strong interest in software development. I enjoy turning ideas into useful, well-designed digital products and continuously improving my skills through real projects.",
    infoBlocks: [
      {
        label: "LOCATION",
        value: "Chandigarh, India",
        badge: "01",
      },
      {
        label: "EDUCATION",
        value: "B.Tech — 2024–2028",
        badge: "02",
      },
      {
        label: "STATUS",
        value: "3rd Year Student",
        badge: "03",
      },
      {
        label: "FOCUS",
        value: "Software Development",
        badge: "04",
      },
    ],
  },

  // Featured Project: CampusHub
  featuredProject: {
    id: "campushub",
    projectNumber: "PROJECT #01",
    title: "CAMPUSHUB",
    tag: "FEATURED PROJECT",
    description:
      "A student-focused digital platform concept designed to help students connect, discover opportunities, find teammates, join communities, and collaborate on college projects.",
    techStack: ["NEXT.JS", "REACT", "TYPESCRIPT", "TAILWIND", "NODE.JS"],
    liveUrl: "https://campushub.demo",
    githubUrl: "https://github.com/amitsingh-dev/campushub",
    features: [
      "CAMPUS COMMUNITIES",
      "EVENT DISCOVERY & DIRECTORY",
      "STUDENT TEAM FINDER",
      "ACADEMIC RESOURCE HUB",
      "NOTICES & COLLABORATION",
    ],
  },

  // Tech Stack / Skills
  skills: [
    {
      id: "html",
      name: "HTML",
      index: "01",
      category: "Frontend",
      description: "Semantic layouts, accessibility, SEO structure, modern HTML5 elements.",
      badge: "Structure",
    },
    {
      id: "css",
      name: "CSS",
      index: "02",
      category: "Frontend",
      description: "Responsive layouts, Flexbox, CSS Grid, custom keyframes, neo-brutalist styling.",
      badge: "Styling",
    },
    {
      id: "javascript",
      name: "JAVASCRIPT",
      index: "03",
      category: "Frontend",
      description: "Modern ES6+, asynchronous programming, DOM APIs, clean modular logic.",
      badge: "Language",
    },
    {
      id: "react",
      name: "REACT",
      index: "04",
      category: "Frontend",
      description: "Declarative component trees, custom hooks, reactive state, optimized rendering.",
      badge: "Framework",
    },
    {
      id: "nextjs",
      name: "NEXT.JS",
      index: "05",
      category: "Frontend",
      description: "App Router architecture, SSR/SSG, Server Components, API routes, Turbopack.",
      badge: "Full-Stack",
    },
    {
      id: "nodejs",
      name: "NODE.JS",
      index: "06",
      category: "Backend",
      description: "Server-side runtime, REST APIs, JSON data processing, event-driven backends.",
      badge: "Backend",
    },
    {
      id: "java",
      name: "JAVA",
      index: "07",
      category: "Backend",
      description: "Object-oriented programming, data structures, algorithms, robust modular systems.",
      badge: "OOP & DSA",
    },
    {
      id: "git",
      name: "GIT",
      index: "08",
      category: "Tools",
      description: "Version control workflows, atomic commits, branch management, code history.",
      badge: "VCS",
    },
    {
      id: "github",
      name: "GITHUB",
      index: "09",
      category: "Tools",
      description: "Remote repositories, code collaboration, pull requests, project tracking.",
      badge: "Collaboration",
    },
  ] as SkillItem[],

  // Journey Section
  journey: [
    {
      year: "2024",
      title: "Started B.Tech",
      description:
        "Started B.Tech undergraduate degree in Chandigarh, diving deep into computer science fundamentals, logic design, and programming foundations.",
    },
    {
      year: "2025",
      title: "Started building web development projects",
      description:
        "Started building web development projects and improving programming skills. Created responsive websites and learned interactive frontend engineering.",
    },
    {
      year: "2026",
      title: "Focused on software development & modern stack",
      description:
        "Focused on software development, React, Next.js, Node.js and building real-world products. Engineered CampusHub as a featured project.",
    },
    {
      year: "CURRENT",
      title: "Building, learning and preparing for opportunities",
      description:
        "Building, learning and preparing for opportunities as a software developer. Open to internships, software engineering roles, and high-impact teams.",
      current: true,
    },
  ] as JourneyMilestone[],

  // Contact
  contact: {
    headingLine1: "LET'S",
    headingLine2: "BUILD",
    headingLine3: "SOMETHING.",
    text: "Have an idea, project, opportunity or just want to connect? Let's talk.",
    email: "singhamit6509@gmail.com",
    phone: "7050881354",
    linkedin: "https://www.linkedin.com/in/amit-singh-835a17342",
    linkedinDisplay: "linkedin.com/in/amit-singh-835a17342",
    github: "https://github.com/amitsingh-dev",
    cta: "GET IN TOUCH →",
  },
};
