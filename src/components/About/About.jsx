import React from "react";
import "./About.css";
import profilePic from "../../assets/About Me Image.jpg"; // replace with your image path

export default function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="fw-bold text-white text-center mb-5">About Me</h2>

        <div className="row align-items-center justify-content-center text-light">
          {/* Left - Image */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src={profilePic}
              alt="Delong Zhu"
              className="img-fluid"
              style={{ maxWidth: "100%", borderRadius: "12px" }}
            />
          </div>

          {/* Right - Description */}
          <div className="col-md-7">
            <p className="fs-5 mb-4">
              I'm a recent graduate from Stony Brook University with a double
              major in Information Systems and Applied Mathematics & Statistics.
              I’m passionate about solving real-world problems at the
              intersection of technology, data, and design, and I love turning
              complex information into clean, intuitive web experiences and
              meaningful insights.
            </p>

            <p className="fs-5">
              When I’m not deep in a dataset or coding, you’ll probably find me
              grinding it out at the gym 🏋️ — living the gym rat life 💪. I also
              enjoy building Legos 🧩 and hunting down the next great food spot
              🍣🍜.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
