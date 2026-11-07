import { SITE_CONFIG } from "@/config/portfolio";

export const AMIT_KNOWLEDGE_BASE = {
  name: SITE_CONFIG.name,
  role: SITE_CONFIG.role,
  title: "Software Developer",
  status: SITE_CONFIG.currentStatus,
  education: `${SITE_CONFIG.education} (3rd Year Student)`,
  location: SITE_CONFIG.location,
  careerGoals:
    "Seeking software development internships, full-time junior software engineer positions, and opportunities to build high-impact, scalable web applications.",
  contact: {
    email: SITE_CONFIG.contact.email,
    phone: `+91 ${SITE_CONFIG.contact.phone}`,
    linkedin: SITE_CONFIG.contact.linkedin,
    github: SITE_CONFIG.contact.github,
  },
  skills: {
    frontend: [
      "HTML5 (Semantic architecture, SEO, Accessibility)",
      "CSS3 (Flexbox, CSS Grid, Responsive Design, Neo-Brutalist aesthetics)",
      "JavaScript (ES6+, Async/Await, DOM APIs, Event Loop)",
      "React 19 (Component-driven architecture, Custom Hooks, Reactive State)",
      "Next.js 16 (App Router, Turbopack, Server-Side Rendering, Server Components, API routes)",
      "Tailwind CSS v4 (Modern utility-first styling, theme customization)",
    ],
    backend: [
      "Node.js (Server-side runtime, REST APIs, JSON data processing, microservices)",
      "Java (Object-Oriented Programming, Data Structures & Algorithms, modular systems)",
    ],
    tools: [
      "Git & GitHub (Version control, branch management, pull requests)",
      "VS Code, NPM, Postman, Vercel",
    ],
  },
  featuredProject: {
    name: SITE_CONFIG.featuredProject.title,
    tag: SITE_CONFIG.featuredProject.tag,
    description: SITE_CONFIG.featuredProject.description,
    techStack: SITE_CONFIG.featuredProject.techStack.join(", "),
    features: SITE_CONFIG.featuredProject.features || [],
    liveUrl: SITE_CONFIG.featuredProject.liveUrl,
    githubUrl: SITE_CONFIG.featuredProject.githubUrl,
  },
  journey: SITE_CONFIG.journey.map(
    (item) => `${item.year}: ${item.title} — ${item.description}`
  ),
};

export const GEMINI_SYSTEM_PROMPT = `
You are the official AI Assistant for Amit Singh's software developer portfolio.
Your role is to represent Amit Singh to visitors, recruiters, hiring managers, and collaborators.

Here is verified knowledge about Amit Singh:
- Full Name: ${AMIT_KNOWLEDGE_BASE.name}
- Current Role: ${AMIT_KNOWLEDGE_BASE.role}
- Academic Status: ${AMIT_KNOWLEDGE_BASE.education}
- Location: ${AMIT_KNOWLEDGE_BASE.location}
- Career Goals: ${AMIT_KNOWLEDGE_BASE.careerGoals}

Contact Information:
- Email: ${AMIT_KNOWLEDGE_BASE.contact.email}
- Phone: ${AMIT_KNOWLEDGE_BASE.contact.phone}
- LinkedIn: ${AMIT_KNOWLEDGE_BASE.contact.linkedin}
- GitHub: ${AMIT_KNOWLEDGE_BASE.contact.github}

Core Skills:
- Frontend: ${AMIT_KNOWLEDGE_BASE.skills.frontend.join("; ")}
- Backend: ${AMIT_KNOWLEDGE_BASE.skills.backend.join("; ")}
- Tools: ${AMIT_KNOWLEDGE_BASE.skills.tools.join("; ")}

Featured Project:
- Name: ${AMIT_KNOWLEDGE_BASE.featuredProject.name}
- Tech Stack: ${AMIT_KNOWLEDGE_BASE.featuredProject.techStack}
- Description: ${AMIT_KNOWLEDGE_BASE.featuredProject.description}
- Key Highlights: ${AMIT_KNOWLEDGE_BASE.featuredProject.features.join(", ")}
- Live Demo: ${AMIT_KNOWLEDGE_BASE.featuredProject.liveUrl}
- GitHub Repository: ${AMIT_KNOWLEDGE_BASE.featuredProject.githubUrl}

Journey Timeline:
${AMIT_KNOWLEDGE_BASE.journey.map((j) => `- ${j}`).join("\n")}

Guidelines for your responses:
1. Persona: Professional, friendly, enthusiastic, articulate, and engineering-focused. Reflect Amit's passion for clean code, responsive UX, and learning by building.
2. Tone: Neo-brutalist clarity — concise, direct, helpful, and confident without being boastful.
3. Formatting: Use clean markdown with bullet points and bold text where appropriate so it's easy to read.
4. Accuracy: Only speak truth based on Amit's background. If asked about something Amit hasn't worked with, state honestly that Amit is eager to learn and picks up new technologies quickly.
5. Action-Oriented: When users ask how to get in touch, provide Amit's email (${AMIT_KNOWLEDGE_BASE.contact.email}) and LinkedIn link directly.
6. Keep answers relatively concise (typically 2-4 paragraphs or a short list) so they fit nicely in a chat bubble.
`;

/**
 * Intelligent local fallback generator for when an API key is not configured
 * or when offline. This ensures the portfolio chatbot is ALWAYS functional.
 */
export function generateFallbackResponse(userMessage: string): string {
  const query = userMessage.toLowerCase().trim();

  // Greetings
  if (
    query.match(
      /^(hi|hello|hey|greetings|hola|namaste|sup|yo|good morning|good evening)/i
    )
  ) {
    return (
      `Hello! 👋 I'm **Amit Singh's AI Assistant**.\n\n` +
      `Amit is a 3rd-year B.Tech student and software developer based in Chandigarh, India. ` +
      `He specializes in Next.js, React, Node.js, and Java.\n\n` +
      `How can I help you today? You can ask me about his **projects**, **skills**, **experience**, or **contact information**!`
    );
  }

  // Projects / CampusHub
  if (
    query.includes("project") ||
    query.includes("campushub") ||
    query.includes("campus hub") ||
    query.includes("work") ||
    query.includes("portfolio")
  ) {
    return (
      `### 🚀 Featured Project: **CampusHub**\n\n` +
      `**CampusHub** is Amit's flagship platform designed to unite college campuses and empower student collaboration.\n\n` +
      `* **Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, and Node.js.\n` +
      `* **Key Features:**\n` +
      `  • Campus Communities & Discussion Spaces\n` +
      `  • Event Discovery & College Directory\n` +
      `  • Student Team Finder for Hackathons & Projects\n` +
      `  • Academic Resource Hub & Verified Notices\n\n` +
      `🔗 **GitHub:** [${SITE_CONFIG.featuredProject.githubUrl}](${SITE_CONFIG.featuredProject.githubUrl})\n` +
      `🌐 **Live Demo:** [${SITE_CONFIG.featuredProject.liveUrl}](${SITE_CONFIG.featuredProject.liveUrl})\n\n` +
      `Amit is also actively building new web applications and algorithmic solutions in Java!`
    );
  }

  // Skills / Tech stack
  if (
    query.includes("skill") ||
    query.includes("stack") ||
    query.includes("tech") ||
    query.includes("react") ||
    query.includes("next") ||
    query.includes("language") ||
    query.includes("java")
  ) {
    return (
      `### 💻 Amit's Technical Toolbox\n\n` +
      `* **Frontend Engineering:** React 19, Next.js 16 (App Router, Turbopack, SSR), TypeScript, JavaScript (ES6+), Tailwind CSS v4, HTML5/CSS3.\n` +
      `* **Backend Development:** Node.js, Express/REST APIs, Java (Object-Oriented Programming, Data Structures & Algorithms).\n` +
      `* **Tools & Workflow:** Git, GitHub, VS Code, Postman, Vercel, Responsive Neo-Brutalist UI Design.\n\n` +
      `Amit combines clean component architecture with algorithmic problem-solving to build fast, accessible software.`
    );
  }

  // Contact / Email / Hire / Reach out
  if (
    query.includes("contact") ||
    query.includes("email") ||
    query.includes("phone") ||
    query.includes("hire") ||
    query.includes("reach") ||
    query.includes("call") ||
    query.includes("message") ||
    query.includes("interview") ||
    query.includes("job") ||
    query.includes("internship")
  ) {
    return (
      `### 📬 Get In Touch With Amit\n\n` +
      `Amit is currently open to **Software Developer roles, internships, and collaborative opportunities**!\n\n` +
      `* **Email:** [${SITE_CONFIG.contact.email}](mailto:${SITE_CONFIG.contact.email})\n` +
      `* **Phone:** [${SITE_CONFIG.contact.phone}](tel:${SITE_CONFIG.contact.phone})\n` +
      `* **LinkedIn:** [${SITE_CONFIG.contact.linkedinDisplay}](${SITE_CONFIG.contact.linkedin})\n` +
      `* **GitHub:** [github.com/amitsingh-dev](${SITE_CONFIG.contact.github})\n` +
      `* **Location:** Chandigarh, India (Open to on-site, hybrid, or remote work)\n\n` +
      `Feel free to reach out directly via email or LinkedIn—he typically responds promptly!`
    );
  }

  // Education / About / College / Journey
  if (
    query.includes("education") ||
    query.includes("about") ||
    query.includes("college") ||
    query.includes("degree") ||
    query.includes("journey") ||
    query.includes("background") ||
    query.includes("who is")
  ) {
    return (
      `### 🎓 About Amit Singh\n\n` +
      `* **Degree:** B.Tech (Undergraduate, 2024–2028)\n` +
      `* **Current Year:** 3rd Year Student\n` +
      `* **Location:** Chandigarh, India\n` +
      `* **Philosophy:** *"Learn by building."* Amit believes that the fastest way to master software engineering is to create real, production-ready applications that solve genuine problems.\n\n` +
      `Since starting his B.Tech in 2024, Amit has advanced from computer science core principles to engineering full-stack modern web platforms like CampusHub.`
    );
  }

  // Resume
  if (query.includes("resume") || query.includes("cv")) {
    return (
      `### 📄 Amit's Resume Summary\n\n` +
      `* **Name:** Amit Singh\n` +
      `* **Role:** Software Developer\n` +
      `* **Education:** B.Tech (2024–2028), Chandigarh, India\n` +
      `* **Top Skills:** Next.js, React, Node.js, Java, TypeScript, Tailwind CSS\n` +
      `* **Key Project:** CampusHub (College collaboration & resource platform)\n\n` +
      `To request a full PDF resume or discuss a role, please email Amit at [${SITE_CONFIG.contact.email}](mailto:${SITE_CONFIG.contact.email}) or connect on [LinkedIn](${SITE_CONFIG.contact.linkedin})!`
    );
  }

  // Default helpful response
  return (
    `Thanks for asking! As **Amit Singh's AI Assistant**, I can tell you all about his software development background:\n\n` +
    `* **Skills:** Next.js, React, Node.js, Java DSA, Tailwind CSS, TypeScript.\n` +
    `* **Featured Work:** CampusHub (student community & collaboration hub).\n` +
    `* **Education:** 3rd Year B.Tech student from Chandigarh, India.\n` +
    `* **Contact:** ${SITE_CONFIG.contact.email} | LinkedIn: ${SITE_CONFIG.contact.linkedinDisplay}\n\n` +
    `Try asking: *"What are your top skills?"*, *"Tell me about CampusHub"*, or *"How can I contact Amit?"*`
  );
}

