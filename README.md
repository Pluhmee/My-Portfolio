<<<<<<< HEAD
# Adedokun Jesupelumi — Developer Portfolio

A modern, premium developer portfolio built with React, Framer Motion, and a dark-first design system. Designed to impress recruiters, companies, and internship programs.

---

## 🗂 Project Structure

```
portfolio-site/
├── public/
│   └── index.html          ← SEO meta tags, Google Fonts
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       ← Sticky nav, mobile menu, theme toggle
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── ProjectCard.jsx  ← Reusable animated project card
│   │   └── ProjectCard.css
│   ├── pages/
│   │   ├── Home.jsx         ← Hero, featured projects, skills preview, CTA
│   │   ├── Home.css
│   │   ├── About.jsx        ← Bio, timeline, strengths, sidebar
│   │   ├── About.css
│   │   ├── Projects.jsx     ← Filterable project grid
│   │   ├── Projects.css
│   │   ├── Skills.jsx       ← Categorized skills with progress bars + icon cards
│   │   ├── Skills.css
│   │   ├── Certifications.jsx ← Certificate card grid
│   │   ├── Certifications.css
│   │   ├── Blog.jsx         ← Article cards with featured post
│   │   ├── Blog.css
│   │   ├── Contact.jsx      ← Contact form + social links
│   │   └── Contact.css
│   ├── data/
│   │   └── portfolio.js     ← ⭐ All your personal data (projects, skills, etc.)
│   ├── hooks/
│   │   ├── useTheme.js      ← Dark/light mode with localStorage
│   │   └── useScrollReveal.js
│   ├── styles/
│   │   └── globals.css      ← Design tokens, CSS variables, base styles
│   ├── App.js               ← Router + AnimatePresence
│   └── index.js
├── vercel.json              ← SPA routing config
├── .gitignore
├── package.json
└── README.md
```

---

## ⚡ Quick Start

### Prerequisites
- **Node.js** v16 or higher — download at https://nodejs.org
- **npm** (comes with Node.js) or **yarn**

### 1. Install dependencies

```bash
cd portfolio-site
npm install
```

### 2. Run locally

```bash
npm start
```

Opens at **http://localhost:3000** with hot-reload enabled.

### 3. Build for production

```bash
npm run build
```

Output goes to the `build/` folder — ready to deploy.

---

## 🎨 Personalizing Your Portfolio

All portfolio data lives in one file:

```
src/data/portfolio.js
```

Edit this file to update:
- Your name, title, bio, and contact info
- Projects (add/remove/edit)
- Skills and proficiency levels
- Certifications
- Blog post previews

### Adding a new project

```js
// In src/data/portfolio.js
export const projects = [
  // ... existing projects ...
  {
    id: 4,
    title: "My New Project",
    description: "A description of what it does.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Pluhmee/my-new-project",
    demo: "https://my-project.vercel.app",
    category: "Fullstack",   // "Frontend" | "Backend" | "Fullstack"
    featured: true,          // shows on Home page
    color: "#6c63ff",        // accent color for the card
    icon: "🚀",
  },
];
```

### Updating your theme colors

Edit CSS variables in `src/styles/globals.css`:

```css
:root {
  --accent-primary: #6c63ff;   /* Main purple */
  --accent-secondary: #ff6584; /* Pink accent */
  --accent-green: #00d4aa;     /* Green accent */
  --accent-amber: #ffb347;     /* Amber accent */
}
```

---

## 📧 Setting Up the Contact Form (EmailJS)

1. Create a free account at https://www.emailjs.com
2. Create an **Email Service** (e.g. Gmail)
3. Create an **Email Template** with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Get your **Service ID**, **Template ID**, and **Public Key**
5. Install EmailJS:
   ```bash
   npm install @emailjs/browser
   ```
6. Open `src/pages/Contact.jsx` and replace the placeholder with:

```jsx
import emailjs from '@emailjs/browser';

// Inside handleSubmit, replace the simulation:
await emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  e.target,
  'YOUR_PUBLIC_KEY'
);
```

---

## 📄 Adding Your Resume

1. Export your CV as a PDF named `resume.pdf`
2. Place it in the `public/` folder:
   ```
   public/resume.pdf
   ```
The **"Resume"** button in the navbar will automatically link to it for download.

---

## 🐙 Connecting to GitHub

### First-time setup

```bash
# Inside the portfolio-site folder
git init
git add .
git commit -m "Initial commit: portfolio v1"
```

### Link to a GitHub repository

1. Create a new repo at https://github.com/new (name it e.g. `portfolio`)
2. Run:
```bash
git remote add origin https://github.com/Pluhmee/portfolio.git
git branch -M main
git push -u origin main
```

### Pushing future updates

```bash
git add .
git commit -m "Update: add new project"
git push
```

---

## ▲ Deploying to Vercel

### Option A — Deploy via GitHub (Recommended)

1. Push your code to GitHub (steps above)
2. Go to https://vercel.com and sign in with GitHub
3. Click **"Add New Project"**
4. Select your `portfolio` repository
5. Vercel auto-detects React settings — click **"Deploy"**
6. Done! You'll get a URL like `https://portfolio-pluhmee.vercel.app`

Every time you `git push` to `main`, Vercel automatically redeploys. ✅

### Option B — Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# From inside portfolio-site/
vercel

# Follow the prompts — link to your account and project
```

### Custom Domain (Optional)

1. In Vercel dashboard → your project → **Settings → Domains**
2. Add your domain (e.g. `adedokunpelumi.dev`)
3. Follow DNS configuration instructions

---

## 🌗 Features Checklist

| Feature | Status |
|---|---|
| Dark / Light mode toggle | ✅ |
| Smooth page transitions (Framer Motion) | ✅ |
| Animated hero section with orbs | ✅ |
| Floating tech cards | ✅ |
| Responsive (mobile, tablet, desktop) | ✅ |
| Sticky navigation bar | ✅ |
| Mobile hamburger menu | ✅ |
| Project filter system | ✅ |
| Animated skill progress bars | ✅ |
| Scroll-triggered animations | ✅ |
| SEO meta tags | ✅ |
| Resume download button | ✅ (add resume.pdf to /public) |
| Contact form | ✅ (wire up EmailJS) |
| Vercel SPA routing config | ✅ |
| Noise texture overlay | ✅ |

---

## 🛠 Tech Stack

- **React 18** — UI framework
- **React Router v6** — client-side routing
- **Framer Motion** — animations and page transitions
- **CSS3** (Grid + Flexbox, CSS Variables) — styling
- **Syne + DM Sans** — typography (Google Fonts)

---

## 📬 Contact

Built by **Adedokun Jesupelumi Zachariah**
- Email: adedokunpelumi0@gmail.com
- GitHub: https://github.com/Pluhmee
- LinkedIn: https://www.linkedin.com/in/adedokun-pelumi-080124295
=======
# My-Portfolio
>>>>>>> e0cb085e746b89bd4c203dab08c81328bd6221dc
