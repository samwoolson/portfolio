import myportfolio from "../assets/myportfolio.png";
import myrush from "../assets/MyRushApp-Mockup.jpg";
import rushmockup from "../assets/rushmockup.jpg";
import CWmockup from "../assets/CW-OCE-mockup.jpg"; 


export const projects = [
  {
    title: "Personal Portfolio",
    category: "Design Engineering (Web)",
    image: myportfolio,
    summary: "Designed and built a minimalist, single-page portfolio to help recruiters get the full picture fast.",
    overview: "A single-page portfolio built to respect how little time recruiters and hiring managers actually spend per candidate. Rather than a multi-page site or long-form case studies, the site condenses navigation, projects, and contact into one continuous scroll — designed to get a reviewer to the point fast, with more depth available on request.",
    role: "Solo Designer & Developer",
    timeline: "June 2026 (ongoing)",
    stack: ["React, ", "Vite, ", "Tailwind CSS, ", "Framer Motion, ", "EmailJS"],
    challenges: "Balancing a minimalist, scannable format against the expectation that design case studies follow a more traditional, in-depth structure. The core tension: hiring managers reviewing dozens of portfolios a day benefit from brevity, but some also use full case-study depth as a signal of thoroughness — those two needs pull in opposite directions.",
    solution: "Adopted a deliberate TLDR-first approach: condensed project summaries in a shared modal component instead of dedicated case study pages, anchor-link navigation instead of routed multi-page architecture, and a warm stone/orange Tailwind palette to reflect a straightforward, approachable personality. Project content is decoupled from presentation — a single modal component renders any case study from a centralized data file, so adding a new project means adding an entry, not writing new markup.",
    liveLink: "https://www.samwoolson.dev"
  },
    {
    id: 2,
    title: "My Rush Mobile App",
    category: "Product Design (Mobile)",
    image: myrush,
    summary: "Redesigned and relaunched Rush’s mobile app to deliver a personalized, streamlined patient experience.",
    overview: "My Rush replaces a generic, white-labeled MyChart app with a personalized, action-oriented dashboard — centralizing scheduling, care information, and key patient actions into a single mobile hub built on Epic's MyChart backend.",
    role: "Independent UX/UI Contractor",
    timeline: "December – April (Released 4/15)",
    stack: ["Figma, ", "Epic MyChart SDK/framework"],
    challenges: "Working within the constraints of a third-party MyChart framework while delivering a differentiated, branded experience. Balancing personalization with technical feasibility required close collaboration and iterative QA validation.",
    solution: "Designed a modular, personalized dashboard with prioritized quick links, improved scheduling flows, and a clear color-coded system to guide care actions — helping patients quickly distinguish urgent items from routine ones. Launch metrics showed strong early engagement, including a 77.8% microsite-to-app store conversion rate and nearly 5x login growth within three days.",
    liveLink: "https://apps.apple.com/us/app/my-rush/id6740248396"
  },
  {
    id: 3,
    title: "UI Refresh for a Large Academic Health System",
    category: "UX/UI Design",
    image: rushmockup,
    summary: "A modern website and appointment‑page redesign that streamlines scheduling, highlights virtual‑care options, and boosts user engagement for a major academic health system.",
    overview: "Redesigned the public website and appointment flow for a large academic health system, integrating Epic MyChart deep‑links, high‑visibility CTAs, and a refreshed visual language. The project improved traffic, conversion rates, and overall usability while staying on schedule.",
    role: "UX/UI Designer II",
    timeline: "3 Months (Aug – Oct 2024)",
    stack: ["Figma, ", "Jira, ", "Epic MyChart, ", "Confluence. ", "Slack, ", "Zoom, "],
    challenges: "Modernizing an outdated, fragmented appointment experience while keeping the site stable, surfacing virtual‑care options, and ensuring the new UI worked seamlessly with Epic MyChart deep‑linking.",
    solution: "Introduced a pill‑shaped “Schedule Appointment” CTA in the global navigation, integrated direct MyChart deep‑links to bypass redundant steps, and built reusable, modular design templates for specialty pages. Design cues were drawn from leading consumer‑health brands to balance warmth with professionalism.",
    liveLink: "https://www.rush.edu/schedule-your-medical-appointment-rush"
  },
  {
    id: 4,
    title: "App Feature for a Pediatric Health System",
    category: "UX/UI Design",
    image: CWmockup,
    summary: "A mobile‑first, responsive UI that centralizes on‑campus resources for families navigating the Children’s Wisconsin hospital campus.",
    overview: "Designed and implemented a mobile‑first UI for Children’s Wisconsin’s app, creating a centralized hub for dining, lodging, family‑support services, and way‑finding. The solution emphasizes accessibility, large touch targets, and clear visual hierarchy for both young patients and their caregivers.",
    role: "UX/UI Designer II",
    timeline: "4 months",
    stack: ["Figma, ", "Epic MyChart SDK/framework"],
    challenges: "Consolidating a wide variety of on‑site resources into a single, easy‑to‑navigate hub while supporting both on‑site (location‑enabled) and off‑site access, and ensuring the interface remained calm and usable during stressful hospital visits.",
    solution: "Developed an accordion‑style UI with distinct icons and ‘New’ badges, added location‑based visibility logic with a fallback menu entry, and created large touch targets and clear hierarchy to reduce cognitive load for families and young users.",
    liveLink: "https://play.google.com/store/apps/details?id=org.chw.mychart&hl=en",
  }
]

