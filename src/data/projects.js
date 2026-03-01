import myrush from "../assets/MyRushApp-Mockup.jpg";
import rushmockup from "../assets/rushmockup.jpg";
import CWmockup from "../assets/CW-OCE-mockup.jpg"; 
import ttlanding from "../assets/tt-landing.png";

export const projects = [
    {
    title: "My Rush Mobile App",
    category: "Product Design (Mobile)",
    image: myrush,
    summary: "Redesigned and relaunched Rush’s mobile app to deliver a personalized, streamlined patient experience.",
    overview: "My Rush is a reimagined mobile experience built on Epic’s MyChart backend, replacing a generic white-labeled app with a personalized, action-oriented dashboard. The project focused on improving appointment scheduling, surfacing relevant care information, and centralizing key patient actions into a single mobile hub.",
    role: "Independent UX/UI Contractor",
    timeline: "December – April (Released 4/15)",
    stack: ["Figma", "Mobile Design Systems", "Epic MyChart (3rd-party integration)"],
    challenges: "Working within the constraints of a third-party MyChart framework while delivering a differentiated, branded experience. Balancing personalization with technical feasibility required close collaboration and iterative QA validation.",
    solution: "Designed a modular, personalized dashboard with prioritized quick links, improved scheduling flows, and a clear color-coded system to guide care actions. Launch metrics showed strong early engagement, including a 77.8% microsite-to-app store conversion rate and nearly 5x login growth within three days.",
    liveLink: "https://apps.apple.com/us/app/my-rush/id6740248396"
  },
  {
    id: 2,
    title: "Tails & Trails",
    category: "UX/UI Design & Frontend Development",
    image: ttlanding,
    summary: "A conversion-focused landing page for a trusted, community-based pet walking service.",
    overview: "Tails & Trails is a responsive landing page designed for busy pet owners seeking reliable local walkers. The goal was to build trust quickly through clear hierarchy, familiar interaction patterns, and accessible design decisions while structuring the page as a reusable foundation for future expansion.",
    role: "UX/UI Designer & Frontend Developer",
    timeline: "2 Weeks",
    stack: ["HTML", "CSS", "JavaScript", "Figma"],
    challenges: "Designing a single landing page that establishes credibility and encourages action while maintaining accessibility standards and component reusability for future scaling.",
    solution: "Applied F-pattern hierarchy, competitor-informed layout structures, WCAG-compliant color contrast, and 44px minimum interactive targets. Built modular sections in code to support future expansion into a scalable multi-page platform.",
    liveLink: "https://tailstrails.netlify.app/",
    sourceLink: "https://github.com/sewoolson/tailsntrails/tree/main?tab=readme-ov-file"
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
    stack: ["Figma", "Jira", "Epic MyChart", "Confluence", "Slack", "Zoom"],
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
    challenges: "Consolidating a wide variety of on‑site resources into a single, easy‑to‑navigate hub while supporting both on‑site (location‑enabled) and off‑site access, and ensuring the interface remained calm and usable during stressful hospital visits.",
    solution: "Developed an accordion‑style UI with distinct icons and ‘New’ badges, added location‑based visibility logic with a fallback menu entry, and created large touch targets and clear hierarchy to reduce cognitive load for families and young users.",
    liveLink: "https://play.google.com/store/apps/details?id=org.chw.mychart&hl=en",
  }
]

