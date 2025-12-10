import React, { useEffect, useRef } from "react";
import "./Experience.css";

const EXPERIENCE = [
  {
    title: "Support Desk Analyst",
    company: "Method Group Inc.",
    link: "https://methodgroup.com/",
    dates: "July 2025 – Present",
    location: "New York, NY",
    bullets: [
      "Deliver technical support and systems administration across 80+ MSP client environments, including Microsoft 365, Google Workspace, Active Directory/Entra ID, and Intune endpoint management.",
      "Investigate and resolve security and technical issues, including phishing incidents, authentication failures, malware alerts, system misconfigurations, and service outages to ensure reliable and secure operations.",
      "Maintain data continuity and collaboration through Datto backups, SharePoint/OneDrive administration, recovery testing, and documenting procedures and environments in IT Glue for consistent SLA-compliant support.",
      "Provide professional onsite support, deploying and configuring server hardware, ISP equipment, routers, switches, access points, and performing rack setup, cabling, and environment health checks."
    ],
  },
  {
    title: "Computer Science Student Intern",
    company: "Stony Brook Univeristy | New Computer Science",
    link: "https://www.stonybrook.edu/commcms/csbuilding/",
    dates: "Sep 2022 – May 2025",
    location: "Stony Brook, NY",
    bullets: [
      "Organized and executed departmental events and graduate projects for 200+ students, achieving a 95% satisfaction rate while enhancing collaboration and program visibility.",
      "Streamlined administrative operations by improving office supply tracking in Excel and refining support workflows, reducing workload by 15% and boosting inventory management efficiency.",
      "Coordinated large-scale student/faculty fairs and provided daily departmental support, while also using downtime to strengthen programming foundations and contribute to technical initiatives.",
    ],
  },
  {
    title: "AI Research Assistant",
    company: "AI & EdTech Research Lab",
    link: "#",
    dates: "Jan 2025 – May 2025",
    location: "Stony Brook, NY",
    bullets: [
     "Collaborated on an LLM-powered diagnostic tool (Python, JavaScript, HTML/CSS) designed to support personalized tutoring for students with learning disorders including dyscalculia, ADHD, and dyslexia.",
    "Developed adaptive questioning, error detection logic, and interactive JSON/CSV visualizations with dashboards (pie charts, bar charts, line graphs) to provide targeted feedback for students, teachers, and parents.",
    "Contributed to a responsive, accessible front-end interface with role-based views and real-time updates, while leading UI/UX testing cycles that improved clarity, accessibility, and engagement for neurodiverse learners."
    ],
  },
  {
    title: "Data Center Technician",
    company: "Center of Excellence Wireless and Information Technology",
    link: "https://www.cewit.org/",
    dates: "Jan 2025 – May 2025",
    location: "Stony Brook, NY",
    bullets: [
      "Installed, configured, and decommissioned servers, improving scalability and system efficiency.",
      "Resolved hardware issues and optimized system performance through ticket-based support.",
      "Collaborated with supervisor on technical tasks and facility maintenance in enterprise server environments.",
    ],
  },
  {
    title: "IT Technician",
    company: "Stony Brook University | CEAS Dean's Office ",
    link: "https://www.cewit.org/",
    dates: "September 2021 – May 2022",
    location: "Stony Brook, NY",
    bullets: [
      "Provided Level 1 & 2 support via Microsoft ToDo, reducing ticket backlog and improving resolution times.",
      "Performed hardware replacements (SSD, CPU, GPU) to enhance lab system performance.",
      "Maintained 200+ Windows-based lab systems with automated deployment and command-line scripting.",
    ],
  },
  {
    title: "B.S. Applied Mathematics & Statistics",
    company: "Stony Brook University",
    link: "https://www.stonybrook.edu/",
    dates: "Aug 2021 – May 2025",
    location: "Stony Brook, NY",
    bullets: [
      "Mathematical Foundations: Calculus I–IV, Linear Algebra, Mathematical Structures.",
      "Probability & Statistics: Probability Theory, Statistics, Data Analysis.",
      "Advanced Methods: Numerical Analysis, Analysis of Algorithms, Regression & Modeling techniques.",
    ],
  },
  {
    title: "B.S. Information Systems",
    company: "Stony Brook University",
    link: "https://www.stonybrook.edu/",
    dates: "Aug 2021 – May 2025",
    location: "Stony Brook, NY",
    bullets: [
      "Specialization: System & Network Administration.",
      "Programming & Development: Object Oriented Programming, Data Structures, Scripting Languages, User Interface Development, Multimedia Systems.",
      "Systems & IT Management: Systems Administration, Network Administration, Computer Security, Information Management, IT Operations, Computer Networks Management.",
      "Database & Visualization: Database Design, Data Visualization, Technical Communication.",
    ],
  },
];

export default function Experience() {
  const wrapRef = useRef(null);

  // spine progress + per-item dot progress
  useEffect(() => {
    const root = wrapRef.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll(".exp-item"));

    const calc = () => {
      const r = root.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;

      // overall spine fill
      const entered = Math.min(Math.max(vh - r.top, 0), r.height + vh);
      const progress = Math.min(Math.max(entered / (r.height + vh), 0), 1);
      root.style.setProperty("--exp-progress", String(progress));

      // per-item progress for the circular loader
      items.forEach((el) => {
        const cr = el.getBoundingClientRect();
        const visible = Math.min(cr.bottom, vh) - Math.max(cr.top, 0);
        const ratio = Math.max(0, Math.min(visible / cr.height, 1)); // 0..1
        el.style.setProperty("--dot", String(ratio));
      });
    };

    calc();
    window.addEventListener("scroll", calc, { passive: true });
    window.addEventListener("resize", calc);
    return () => {
      window.removeEventListener("scroll", calc);
      window.removeEventListener("resize", calc);
    };
  }, []);

  // reveal animation
  useEffect(() => {
    const nodes = document.querySelectorAll(".exp-item");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("in")
        ),
      { threshold: 0.15 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>

      <div className="exp-timeline" ref={wrapRef}>
        <div className="exp-spine" aria-hidden="true" />
        <div className="exp-progress" aria-hidden="true" />

        <ol className="exp-list">
          {EXPERIENCE.map((x, i) => (
            <li className="exp-item" key={i}>
              <article className="exp-card">
                {/* progress dot in top-right of the card */}
                <div className="exp-dot" aria-hidden="true" />
                <h3 className="exp-role">
                  {x.title}{" "}
                  <a className="exp-company" href={x.link}>
                    @{x.company}
                  </a>
                </h3>
                <div className="exp-meta">
                  <span>{x.dates}</span> <span>•</span>{" "}
                  <span>{x.location}</span>
                </div>
                <ul className="exp-bullets">
                  {x.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
