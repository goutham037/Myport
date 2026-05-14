import { SITE } from "./site";

export type ExperienceKind = "work" | "education" | "recognition";

export type ExperienceItem = {
  id: string;
  kind: ExperienceKind;
  title: string;
  org: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  stack?: string[];
};

export const experienceItems: ExperienceItem[] = [
  {
    id: "polytechnic",
    kind: "work",
    title: "Diploma CSE — technical projects & competitions",
    org: "Govt Polytechnic Nalgonda",
    period: "Aug 2022 – May 2025",
    location: "Nalgonda, Telangana",
    summary:
      "Led and shipped full-stack, AI, and Android projects for tech fests and real users — from RAG chatbots and Telegram assistants to WebRTC meetups and research-backed 3D reconstruction.",
    highlights: [
      "Twice winner at institute & district levels (Srujana Tech Fest); Top 5 at state level (2025); Top 10 / participated at state (2024–2025).",
      "Published research (IJARST) tied to Smart Holovision; multiple production-shaped builds (Quizmaker, GreenBridge, SBTET bot, KMIT RAG).",
      "Maintained a live developer portfolio showcasing AI, automation, and full-stack work.",
    ],
    stack: [
      "Python",
      "Java",
      "JavaScript",
      "React",
      "Android",
      "Firebase",
      "WebRTC",
      "RAG",
      "Telegram API",
      "MongoDB",
      "SQL",
    ],
  },
  {
    id: "diploma",
    kind: "education",
    title: "Diploma in Computer Science & Engineering",
    org: "Govt Polytechnic Nalgonda",
    period: "2022 – 2025",
    location: "Nalgonda, Telangana",
    summary: "Formal training in software engineering, data structures, databases, and project-driven delivery.",
    highlights: ["CGPA: 9.52 / 10.0", "Competition-led builds across AI, web, and mobile tracks."],
  },
  {
    id: "school-10",
    kind: "education",
    title: "Class 10 (SSC / matriculation)",
    org: "Saint Therese High School",
    period: "Jul 2021 – May 2022",
    location: "Khammam, Telangana",
    summary: "Strong foundations in mathematics and sciences before entering the diploma programme.",
    highlights: ["CGPA: 10.0 / 10.0"],
  },
  {
    id: "srujana",
    kind: "recognition",
    title: "Srujana Tech Fest — institute, district & state",
    org: "TGSBTET",
    period: "2024 – 2025",
    summary: "Consistent performance in technical competitions at district and state levels.",
    highlights: [
      "Won district-level Srujana Tech Fest twice.",
      "Top 5 placement at state level (2025); Top 10 / participated at state level (2024 & 2025).",
    ],
  },
  {
    id: "ijarst",
    kind: "recognition",
    title: "Published research",
    org: "International Journal of Advanced Research in Science and Technology (IJARST)",
    period: "—",
    summary: "Research publication associated with the Smart Holovision 2D→3D reconstruction project.",
    highlights: ["Peer-reviewed publication documenting methodology and results from the Holovision build."],
  },
  {
    id: "hackerrank-sql",
    kind: "recognition",
    title: "Certificate of accomplishment — SQL (Basic)",
    org: "HackerRank",
    period: "—",
    summary: "Validated core SQL querying and relational thinking.",
    highlights: ["Official HackerRank credential for SQL fundamentals."],
  },
];
