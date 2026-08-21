export type ProjectCategory = "ai" | "fullstack" | "data" | "mobile" | "experiment";

export type ProjectLink = { label: string; href: string };

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  summary: string;
  description: string;
  tags: string[];
  image?: string;
  links: ProjectLink[];
  featured?: boolean;
};

export const projectCategories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI / RAG / ML" },
  { id: "fullstack", label: "Full-stack & web" },
  { id: "mobile", label: "Android / mobile" },
  { id: "data", label: "Data & automation" },
  { id: "experiment", label: "In progress" },
];

export const projects: Project[] = [
  {
    id: "nexmeet",
    title: "NexMeet",
    category: "experiment",
    year: "Active · under development",
    summary:
      "Web platform for one-on-one video and text chats with strangers — WebRTC, Firebase, real-time rooms, privacy-first design.",
    description:
      "Anonymous-friendly flows, smart session handling, and plans for interest-based matching and content moderation. Passion project for spontaneous networking without heavy sign-up friction.",
    tags: ["WebRTC", "Firebase", "JavaScript", "TypeScript", "Real-time", "Privacy"],
    links: [
      { label: "GitHub", href: "https://github.com/goutham037/nexmeet2" },
      { label: "Live", href: "#" },
    ],
    featured: false,
  },
  {
    id: "smart-holovision",
    title: "Smart Holovision",
    category: "mobile",
    year: "Awarded · research-backed",
    summary:
      "2D→3D reconstruction on Android with Python backend — EdTech angle with interactive 3D models for presentations.",
    description:
      "Depth estimation and rendering pipeline packaged for classroom and demo use. Winner at institute & district levels; Top 5 at state; research published in IJARST.",
    tags: ["Python", "Android", "3D reconstruction", "EdTech", "Research"],
    image: "/projects/smart-holovision.jpg",
    links: [
      { label: "View research", href: "https://ijarst.in/public/uploads/paper/622611742289897.pdf" },
      { label: "GitHub", href: "#" },
    ],
    featured: true,
  },
  {
    id: "greenbridge",
    title: "GreenBridge (StaticMarketplace)",
    category: "fullstack",
    year: "Full-stack",
    summary:
      "Multilingual rice e-commerce connecting buyers with local farmers — maps, schemes, and AI-assisted crop support.",
    description:
      "Location-based discovery, interactive maps, plant disease detection, government scheme integration, and support in English, Hindi, and Telugu for rural accessibility.",
    tags: ["Full-stack", "Multilingual", "Maps API", "AI", "Flask", "HTML", "Python", "CSS"],
    links: [
      { label: "Explore", href: "#" },
      { label: "GitHub", href: "https://github.com/goutham037/StaticMarketplace" },
    ],
    featured: false,
  },
  {
    id: "sbtet-rag",
    title: "Miss Minutes — SBTET RAG + Telegram",
    category: "ai",
    year: "Advanced",
    summary:
      "RAG-powered academic assistant for SBTET students with attendance/results dashboards, exam updates, and Telegram automation.",
    description:
      "Retrieval-augmented answers over scraped and indexed portal data; quizzes and reminders via Telegram Bot API; reduces time lost navigating official sites.",
    tags: ["Python", "JavaScript", "RAG", "Telegram API", "Android", "Web scraping"],
    image: "/projects/miss-minutes.jpg",
    links: [
      { label: "View system", href: "#" },
      { label: "GitHub", href: "#" },
    ],
    featured: true,
  },
  {
    id: "quizmaker",
    title: "Quizmaker Application",
    category: "mobile",
    year: "Commercial-ready",
    summary:
      "TGECET & APECET-style prep with personalized dashboards, AI question generation, and performance analytics.",
    description:
      "Kotlin / Firebase / Android app with adaptive difficulty, admin tooling, and chatbot integration — prepared for market launch.",
    tags: ["Kotlin", "Firebase", "Android", "Educational", "Analytics", "AI"],
    image: "/projects/quizmaker.jpg",
    links: [
      { label: "Try demo", href: "https://drive.google.com/file/d/1zwvOJlAuujuDQRJq25FhygAIvcvYcc6N/view?usp=drivesdk" },
      { label: "GitHub", href: "#" },
    ],
    featured: true,
  },
  {
    id: "kmit-rag",
    title: "KMIT RAG chatbot",
    category: "ai",
    year: "Shipped",
    summary:
      "Campus assistant with RAG over college data — attendance, results, resume builder, mental health prompts.",
    description:
      "Web scraping and document indexing to structure messy institutional data; dashboards and automated login flows for students and faculty.",
    tags: ["Python", "JavaScript", "HTML", "RAG", "Scraping"],
    links: [
      { label: "GitHub", href: "https://github.com/NakshathraBathula/BotMinds" },
      { label: "Live", href: "#" },
    ],
    featured: false,
  },
  {
    id: "ask-griet",
    title: "Ask GRIET",
    category: "ai",
    year: "Live · 4+ institutions",
    summary:
      "AI-powered assistants for 4+ educational institutions — RAG, semantic search, and intelligent web crawling built into institution-specific knowledge bases.",
    description:
      "Automates retrieval of attendance, results, timetables, regulations, placements, admissions, faculty info, and student services through both web and WhatsApp interfaces.",
    tags: ["Python", "FastAPI", "React", "Qdrant", "Gemini", "RAG", "WhatsApp"],
    image: "/projects/ask-griet.jpg",
    links: [{ label: "Live Demo", href: "https://g-ssc.netlify.app/" }],
    featured: true,
  },
  {
    id: "college-cms",
    title: "College Management System",
    category: "mobile",
    year: "Java desktop",
    summary: "Java & JavaFX academic platform — attendance, results, paper evaluation, integrated AI chatbot.",
    description:
      "Modular desktop app for students, faculty, and admins with secure data handling. Institute & district winner at Srujana Tech Fest; Top 10 at state.",
    tags: ["Java", "JavaFX", "Chatbot", "Institute winner"],
    links: [{ label: "GitHub", href: "#" }],
    featured: false,
  },
  {
    id: "twitter-monitor",
    title: "Twitter Stream Monitor",
    category: "data",
    year: "Shipped",
    summary:
      "Real-time tweet monitoring via web automation — avoids costly Twitter API by using Selenium-style flows.",
    description:
      "Tracks hashtags, keywords, and sentiment from live feeds for brands and researchers. Roadmap: dashboard and alert system.",
    tags: ["Python", "JavaScript", "HTML", "CSS", "Selenium", "Scraping"],
    links: [{ label: "GitHub", href: "https://github.com/goutham037/TwitterStreamMonitor" }],
    featured: false,
  },
  {
    id: "myportfolio",
    title: "My portfolio (this site)",
    category: "fullstack",
    year: "Live",
    summary:
      "Interactive developer portfolio highlighting AI apps, automation, Holovision, NexMeet, GreenBridge, Twitter monitor, and certifications.",
    description:
      "Built for clean UI/UX, accessibility, and performance — maintained as a living gallery of ongoing work.",
    tags: ["TypeScript", "React", "Tailwind", "Vite"],
    links: [{ label: "Source", href: "https://github.com/goutham037/Myport" }],
    featured: false,
  },
  {
    id: "gspt-mcp",
    title: "GSPT — GRIET Portal MCP Server",
    category: "ai",
    year: "Shipped · 2026",
    summary:
      "High-performance MCP server that turns a legacy student portal (no API) into AI-native infrastructure — 75% faster with persistent browser pool, AJAX interception, and Grok-automated daily attendance intelligence.",
    description:
      "5 engineering optimizations (AJAX interception, persistent Chromium pool, selective caching, concurrency semaphore, projection engine) cut response times from ~15s to 4s. Attendance is never cached — always real-time. Grok delivers automated reports at 8 AM and 9 PM daily. Serves concurrent multi-student use on Render's free tier.",
    tags: ["Python", "MCP SDK", "Playwright", "Grok Automation", "AsyncIO", "Concurrency", "Render"],
    image: "/projects/gspt-mcp.jpg",
    links: [
      { label: "Case study", href: "/projects/gspt-mcp" },
      { label: "GitHub", href: "https://github.com/goutham037/gspt" },
    ],
    featured: true,
  },
  {
    id: "insta-mcp",
  title: "TheML.Matrix — Instagram Publisher MCP Server",
  category: "ai",
    year: "Shipped · 2026",

    summary:
    "MCP server that enables AI assistants to create, process, and publish Instagram content for TheML.Matrix — including individual posts and multi-slide carousels.",

    description:
    "A production MCP server that connects AI-driven content workflows with Instagram publishing. It handles generated media, carousel slide processing, image uploads, and automated publishing to the @theml.matrix Instagram account. The system uses browser automation and request interception to reliably extract and process media from AI-generated content, while exposing publishing capabilities as AI-callable MCP tools.",

    tags: [
    "Python",
    "FastMCP",
    "Playwright",
    "BeautifulSoup4",
    "Instagram Graph API",
    "MCP",
    "AI Automation",
    "Carousel Publishing",
    "AsyncIO"
    ],

    image: "/projects/insta-mcp.jpg",

    links: [
    { label: "Case study", href: "/projects/insta-mcp" },
    { label: "GitHub", href: "https://github.com/goutham037/instagram-automation" }
    ],

    featured: true,
    },

];

export function featuredProjects(limit = 4) {
  const starred = projects.filter((p) => p.featured);
  return starred.slice(0, limit);
}
