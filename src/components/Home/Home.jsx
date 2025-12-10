import React from "react";
import myPhoto from "../../assets/me.png";
import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="home section">
      <div className="hero">
        <div className="avatar">
          <img src={myPhoto} alt="Portrait of Delong Zhu" />
        </div>

        <h1>
          Hi, I’m <span>Delong</span>
        </h1>

        <p className="tagline">Data Analyst | Web Developer | IT Specialist</p>

        <p className="summary">
          Aspiring data analyst who loves turning complex data into clear, actionable insights 📊 and crafting intuitive, user-first web experiences 💻
        </p>

        <div className="accent-line" aria-hidden="true" />
      </div>
    </section>
  );
}
