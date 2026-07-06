# Sam Woolson — Portfolio
 
A minimalist, single-page portfolio built to respect how little time recruiters and hiring managers actually spend per candidate. Instead of a multi-page site or long-form case studies, everything — intro, skills, projects, and contact — lives in one continuous scroll, with project details surfaced through a lightweight modal rather than dedicated pages.
 
**Live site:** [samwoolson.dev](https://samwoolson.dev)
 
---
 
## Why this exists
 
Most portfolios ask reviewers to dig. This one is designed around a simple idea: get to the point fast, without losing depth for anyone who wants it. Every structural decision below — single-page layout, anchor navigation, modal-based case studies — was made with that in mind, not just for convenience.
 
---
 
## Tech Stack
 
| Layer | Tools |
|---|---|
| Build tool | [Vite](https://vitejs.dev) |
| UI library | React (JavaScript) |
| Styling | [Tailwind CSS](https://tailwindcss.com) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Form handling | [EmailJS](https://www.emailjs.com/) |
| Linting | [oxlint](https://oxc.rs) |
| Deployment | [Netlify](https://www.netlify.com) |
 
**Why these choices:**
- **Vite** for fast local dev feedback and quick production builds.
- **Tailwind** for a consistent design system across sections without custom CSS sprawl.
- **Framer Motion** used sparingly for entrance animations, respecting `prefers-reduced-motion` so the minimalism stays intentional rather than static.
- **EmailJS** for direct contact-form email delivery without standing up a custom backend.
- **oxlint** for zero-config, correctness-focused linting well-suited to a project this size — see [oxc.rs](https://oxc.rs) for how it compares to ESLint.
---
 
## Project Structure
 
```
src/
├── components/
│   ├── Hero.jsx          # Landing section — intro, tagline, CTA
│   ├── Skills.jsx        # Skills/stack overview
│   ├── Projects.jsx      # Project grid, opens ProjectModal on click
│   ├── ProjectModal.jsx  # Shared modal — renders any project by ID
│   └── Contact.jsx       # Contact form (wired to EmailJS)
├── data/
│   └── projects.js       # Case study content, keyed by project ID
├── App.jsx
└── main.jsx
```
 
**Design note:** Project content is decoupled from presentation. A single `ProjectModal` component renders any case study by pulling from a centralized `data/projects.js` file and mapping by project ID — so adding a new project means adding a data entry, not writing new markup.
 
---
 
## Features
 
- **Single-page architecture** with anchor-link navigation between sections (Hero, Skills, Projects, Contact) — no routing overhead, no page-load friction.
- **Modal-based case studies** — condensed, scannable project summaries instead of full dedicated case study pages, prioritizing reviewer time.
- **Accessible by default** — semantic HTML, keyboard-navigable anchor links and modal, focus management on modal open/close, respects reduced-motion preferences.
- **Responsive layout** — designed mobile-first, verified across breakpoints.
- **Contact form** wired to EmailJS for real email delivery without a backend service.
---
 
## Getting Started
 
### Prerequisites
- Node.js (LTS recommended)
- npm
### Installation
 
```bash
git clone https://github.com/[your-username]/[repo-name].git
cd [repo-name]
npm install
```
 
### Environment Variables
 
This project uses EmailJS for the contact form. Create a `.env` file in the root:
 
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
 
> Never commit `.env` — it's already excluded via `.gitignore`.
 
### Development
 
```bash
npm run dev
```
 
Runs the app locally with hot module reload.
 
### Linting
 
```bash
npx oxlint .
```
 
### Build
 
```bash
npm run build
```
 
Outputs a production build to `/dist`.
 
### Preview production build locally
 
```bash
npm run preview
```
 
---
 
## Deployment
 
Deployed on [Netlify](https://www.netlify.com), connected directly to this repository for automatic deploys on push to `main`.
 
---
 
## Design Decisions Worth Noting
 
A few deliberate tradeoffs, in case you're reviewing this as a case study in itself:
 
- **Modal case studies over full pages:** a conscious TLDR-first choice — condensed for scannability, given how many portfolios a recruiter reviews in a day. Deeper walkthroughs are available on request.
- **Single-page over multi-page routing:** reduces the number of decisions/clicks required to see the full picture, while still behaving like separate, navigable sections via anchor links.
- **Warm stone/orange palette:** a deliberate move away from generic cold-tech blue, meant to reflect a straightforward, approachable personality.
---
 
## Contact
 
**Sam Woolson**
[samwoolson@gmail.com](mailto:samwoolson@gmail.com) · [samwoolson.dev](https://samwoolson.dev)