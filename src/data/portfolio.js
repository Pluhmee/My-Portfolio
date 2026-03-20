// ============================================
// PORTFOLIO DATA
// ============================================

export const ownerInfo = {
  name: "Adedokun Jesupelumi Zachariah",
  shortName: "Pelumi",
  title: "Web Developer",
  subtitle: "B.Sc Computer Science in View",
  bio: "A passionate web developer and computer science student focused on building scalable web applications, management systems, and intelligent digital solutions.",
  email: "adedokunpelumi0@gmail.com",
  github: "https://github.com/Pluhmee",
  linkedin: "https://www.linkedin.com/in/adedokun-pelumi-080124295",
  location: "Nigeria",
};

export const projects = [
  {
    id: 1,
    title: "Digital Staff Management System",
    description:
      "A Flask-based system with admin and user roles, staff management, leave requests, photo uploads, activity logs, and data export. Built for organizational efficiency and modern HR workflows.",
    tech: ["Python", "Flask", "SQLite", "HTML/CSS", "JavaScript"],
    github: "https://github.com/Pluhmee",
    demo: "#",
    category: "Backend",
    featured: true,
    color: "#6c63ff",
    icon: "👥",
  },
  {
    id: 2,
    title: "Digital Asset & Inventory Management",
    description:
      "A web application designed to manage digital assets and track inventory with admin panel, file upload capability, and comprehensive reporting features.",
    tech: ["Flask", "Python", "Bootstrap", "SQLAlchemy", "Jinja2"],
    github: "https://github.com/Pluhmee",
    demo: "#",
    category: "Fullstack",
    featured: true,
    color: "#ff6584",
    icon: "📦",
  },
  {
    id: 3,
    title: "AI Music Assistant Player",
    description:
      "A smart web-based music player integrating AI-powered features for music discovery, playlist generation, and seamless playback. Modern UI with intelligent recommendations.",
    tech: ["JavaScript", "HTML5", "CSS3", "Web Audio API", "AI API"],
    github: "https://github.com/Pluhmee",
    demo: "#",
    category: "Frontend",
    featured: true,
    color: "#00d4aa",
    icon: "🎵",
  },
];

export const skills = {
  Frontend: [
    { name: "HTML5", level: 92, icon: "🌐" },
    { name: "CSS3", level: 88, icon: "🎨" },
    { name: "JavaScript", level: 82, icon: "⚡" },
    { name: "React", level: 70, icon: "⚛️" },
    { name: "Responsive Design", level: 90, icon: "📱" },
  ],
  Backend: [
    { name: "Python", level: 85, icon: "🐍" },
    { name: "Flask", level: 80, icon: "🔥" },
    { name: "REST APIs", level: 75, icon: "🔌" },
    { name: "Node.js", level: 60, icon: "🟩" },
  ],
  Tools: [
    { name: "Git & GitHub", level: 85, icon: "🐙" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Vercel", level: 78, icon: "▲" },
    { name: "Figma", level: 65, icon: "✏️" },
    { name: "Postman", level: 72, icon: "📬" },
  ],
  Databases: [
    { name: "SQLite", level: 82, icon: "🗄️" },
    { name: "SQLAlchemy", level: 78, icon: "🔗" },
    { name: "MySQL", level: 70, icon: "🐬" },
    { name: "Firebase", level: 58, icon: "🔥" },
  ],
};

export const certifications = [
  {
    id: 1,
    title: "Responsive Web Design",
    org: "Globatech Computer Institute",
    year: "2023",
    color: "#6c63ff",
    link: "#",
  },
  {
    id: 2,
    title: "JavaScript Algorithms & Data Structures",
    org: "freeCodeCamp",
    year: "2023",
    color: "#ff6584",
    link: "#",
  },
  {
    id: 3,
    title: "Python for Everybody",
    org: "Coursera / University of Michigan",
    year: "2024",
    color: "#00d4aa",
    link: "#",
  },
  {
    id: 4,
    title: "Flask Web Development",
    org: "Udemy",
    year: "2024",
    color: "#ffb347",
    link: "#",
  },
  {
    id: 5,
    title: "Introduction to Computer Science",
    org: "Lagos state university",
    year: "2022-2026",
    color: "#a855f7",
    link: "#",
  },
  {
    id: 6,
    title: "Git & GitHub Essentials",
    org: "Youtube Learning",
    year: "2024",
    color: "#06b6d4",
    link: "#",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Building a Staff Management System with Flask",
    excerpt:
      "A deep dive into architecting a multi-role Flask application with authentication, file uploads, and data export capabilities.",
    date: "2024-12-15",
    readTime: "7 min read",
    tags: ["Flask", "Python", "Backend"],
    color: "#6c63ff",
  },
  {
    id: 2,
    title: "Why I Chose React Over Vanilla JS for My Portfolio",
    excerpt:
      "Exploring the trade-offs between React's component-based architecture and plain JavaScript for a personal developer portfolio.",
    date: "2025-01-10",
    readTime: "5 min read",
    tags: ["React", "JavaScript", "Frontend"],
    color: "#ff6584",
  },
  {
    id: 3,
    title: "AI-Powered Web Apps: My Experience Integrating AI APIs",
    excerpt:
      "Lessons learned while building an AI Music Assistant — from API rate limits to creative UX decisions.",
    date: "2025-02-20",
    readTime: "6 min read",
    tags: ["AI", "APIs", "JavaScript"],
    color: "#00d4aa",
  },
];
