// Skills.jsx
import React from "react";
import "./Skills.css";
import { FaCode, FaDatabase, FaTools, FaGlobe, FaLaptopCode, FaLanguage, FaServer } from "react-icons/fa";

const skillsData = [
  {
    title: "Programming & Developments",
    icon: <FaCode />,
    items: ["Python", "SQL", "R", "Java", "JavaScript", "HTML/CSS", "Ruby"],
  },
  {
    title: "Libraries & Frameworks",
    icon: <FaLaptopCode />,
    items: ["React","NumPy", "Pandas", "Seaborn", "Matplotlib", "D3.js", "scikit-learn"],
  },
  {
    title: "Data & Visualization Tools",
    icon: <FaDatabase />,
    items: ["MySQL", "MongoDB", "Tableau", "Power BI", "Excel"],
  },
  {
    title: "Tools & Platforms",
    icon: <FaTools />,
    items: ["GitHub", "VS Code", "AWS", "Google Cloud Platform", "Jupyter Notebook", "RStudio", "Figma", "Microsoft 365"],
  },
  {
    title: "Operating Systems",
    icon: <FaGlobe />,
    items: ["Linux/Unix", "Windows 10/11", "macOS"],
  },
  {
    title: "Languages",
    icon: <FaLanguage />,
    items: ["English (Native)", "Chinese (Mandarin - Native)"],
  },
];

export default function Skills() {
  return (
    

    <section id="skills" className="skills-section container text-center">
      <div className="container">
        <h2 className="fw-bold text-white text-center mb-5">Skills & Tools</h2>
        <div className="row g-4">
          {skillsData.map((skill, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <div className="skill-card text-center h-100 p-4">
                <div className="skill-icon mb-3">{skill.icon}</div>
                <h3 className="skill-title mb-3">{skill.title}</h3>
                <ul className="skill-list list-unstyled">
                  {skill.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
