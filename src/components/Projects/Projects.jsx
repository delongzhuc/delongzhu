import React, { useState } from "react";
import "./Projects.css";
import nbaImg from "../../assets/NBA Project.png";
import smokeImg from "../../assets/Smoke and Insurance Project.png";
import diabetesImg from "../../assets/Diabetes.png";
import geneEnvImg from "../../assets/Gene-Environment Interaction.png";
import missingImg from "../../assets/Missing Data Imputation & Regression Modeling.png";

const projects = [
  {
    title: "NBA Database Dashboard",
    description:
      "Full-stack NBA analytics dashboard using 2023–2024 playoff data, with MySQL, Python (PCA/MDS), and D3.js visualizations for interactive player and team insights.",
    image: nbaImg, // ✅ FIXED
    tools: [
      "Python",
      "JavaScript",
      "HTML/CSS",
      "SQL (MySQL)",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "D3.js",
    ],
    link: "https://github.com/yourusername/nba-database-dashboard",
  },
  {
    title: "Smoking & Insurance Cost Analysis",
    description:
      "Modeled medical charges from a Kaggle dataset and showed smokers incur ~5× higher costs than non-smokers using log-transformed regression and visual analysis.",
    image: smokeImg, // ✅ FIXED
    tools: [
      "Python",
      "Jupyter Notebook",
      "Pandas",
      "NumPy",
      "Seaborn",
      "Matplotlib",
      "scikit-learn",
    ],
    link: "https://github.com/yourusername/smoking-insurance-analysis",
  },
  {
    title: "Diabetes Progression Analysis",
    description:
      "Regression-based analysis of scikit-learn’s medical dataset to identify key predictors of diabetes progression such as BMI and cholesterol.",
    image: diabetesImg, // ✅ FIXED
    tools: [
      "Python",
      "scikit-learn",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Linear Regression",
    ],
    link: "https://github.com/yourusername/diabetes-analysis",
  },
  {
    title: "Gene–Environment Interaction Modeling",
    description:
      "R modeling pipeline evaluating gene–environment effects using multiple regression, Box–Cox transforms, and stepwise model selection.",
    image: geneEnvImg, // ✅ FIXED
    tools: [
      "R",
      "RStudio",
      "ggplot2",
      "MASS",
      "Multiple Regression",
      "Box–Cox Transformation",
      "Interaction Modeling",
      "Bonferroni Correction",
    ],
    link: "https://github.com/yourusername/gene-environment-modeling",
  },
  {
    title: "Missing Data Imputation & Regression Modeling",
    description:
      "Applied multiple imputation (mice) to recover missing data, then fit a regression model validated with ANOVA, achieving an adjusted R² of 0.80.",
    image: missingImg, // ✅ FIXED
    tools: [
      "R",
      "RStudio",
      "dplyr",
      "mice",
      "Multiple Imputation",
      "Linear Regression",
      "ANOVA",
      "Statistical Analysis",
    ],
    link: "https://github.com/yourusername/missing-data-imputation",
  },
];

export default function Projects() {
  const [activeImage, setActiveImage] = useState(null); // { src, alt } | null

  const openImage = (src, alt) => {
    setActiveImage({ src, alt });
  };

  const closeImage = () => {
    setActiveImage(null);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">
        <h2 className="projects-title">Projects</h2>

        <div className="row g-4">
          {projects.map((p, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              {/* 1 per row mobile, 2 per row tablet, 3 per row desktop+ */}
              <article className="project-card h-100 d-flex flex-column">
                <button
                  type="button"
                  className="project-image-button"
                  onClick={() => openImage(p.image, p.title)}
                >
                  <div className="project-image-wrapper">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="project-image"
                    />
                  </div>
                </button>

                <div className="project-body d-flex flex-column">
                  <h3 className="project-name">{p.title}</h3>
                  <p className="project-description">{p.description}</p>

                  <div className="project-tools mt-3">
                    <p className="project-tools-label">
                      🛠 <span>Tools &amp; Techniques:</span>
                    </p>
                    <div className="project-tools-badges">
                      {p.tools.map((tool, idx) => (
                        <span key={idx} className="project-tool-badge">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-3">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-button"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {activeImage && (
        <div className="project-lightbox" onClick={closeImage}>
          <div
            className="project-lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="project-lightbox-close"
              onClick={closeImage}
              aria-label="Close image"
            >
              ×
            </button>
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="project-lightbox-image"
            />
            <p className="project-lightbox-caption">{activeImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
