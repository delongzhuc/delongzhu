import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <h2 className="fw-bold mb-4 text-center contact-title">Contact</h2>

        <div className="row gy-4 contact-grid justify-content-center">
          {/* LOCATION (not clickable, but still has hover effect) */}
          <div className="col-12 col-md-3">
            <div className="contact-block text-center text-md-start">
              <h3 className="contact-label">Location</h3>
              <p className="contact-value">
                <span className="contact-icon-circle contact-inline-circle">
                  <svg viewBox="0 0 24 24" className="contact-icon-svg">
                    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
                  </svg>
                </span>
                <span className="contact-text">New York, NY</span>
              </p>
            </div>
          </div>

          {/* PHONE (icon + text clickable) */}
          <div className="col-12 col-md-3">
            <div className="contact-block text-center text-md-start">
              <h3 className="contact-label">Phone</h3>
              <a
                href="tel:+19173627190"
                className="contact-value contact-link-row"
              >
                <span className="contact-icon-circle contact-inline-circle">
                  <svg viewBox="0 0 24 24" className="contact-icon-svg">
                    <path d="M6.6 10.8c1.1 2.1 2.8 3.8 4.9 4.9l1.6-1.6c.3-.3.8-.4 1.2-.2 1.3.4 2.7.7 4.1.7.7 0 1.2.5 1.2 1.2v2.6c0 .7-.5 1.2-1.2 1.2C9.9 20 4 14.1 4 6.8 4 6.1 4.5 5.6 5.2 5.6H7.8c.7 0 1.2.5 1.2 1.2 0 1.4.3 2.8.7 4.1.1.4 0 .9-.2 1.2l-1.7 1.7z" />
                  </svg>
                </span>
                <span className="contact-text">(917) 362-7190</span>
              </a>
            </div>
          </div>

          {/* EMAIL (icon + text clickable) */}
          <div className="col-12 col-md-3">
            <div className="contact-block text-center text-md-start">
              <h3 className="contact-label">Email</h3>
              <a
                href="mailto:delongzhuc@gmail.com"
                className="contact-value contact-link-row"
              >
                <span className="contact-icon-circle contact-inline-circle">
                  <svg viewBox="0 0 24 24" className="contact-icon-svg">
                    <path d="M4 6c-.8 0-1.4.6-1.4 1.4v9.2C2.6 17.4 3.2 18 4 18h16c.8 0 1.4-.6 1.4-1.4V7.4C21.4 6.6 20.8 6 20 6H4zm.7 2h14.6L12 13.3 4.7 8z" />
                  </svg>
                </span>
                <span className="contact-text">delongzhuc@gmail.com</span>
              </a>
            </div>
          </div>

          {/* SOCIAL (already clickable rows) */}
          <div className="col-12 col-md-3">
            <div className="contact-block text-center text-md-start">
              <h3 className="contact-label">Connect</h3>

              <div className="contact-social-list">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/delongzhu/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-link"
                >
                  <span className="contact-icon-circle">
                    <svg viewBox="0 0 24 24" className="contact-icon-svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <text
                        x="12"
                        y="16"
                        textAnchor="middle"
                        fontSize="10"
                        fontWeight="700"
                        fill="#e5e7eb"
                      >
                        in
                      </text>
                    </svg>
                  </span>
                  <span className="contact-text">
                    linkedin.com/in/delongzhu
                  </span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/delongzhuc"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-link"
                >
                  <span className="contact-icon-circle">
                    <svg viewBox="0 0 24 24" className="contact-icon-svg">
                      <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 7 9.6.5.1.7-.2.7-.5v-1.7c-2.9.7-3.5-1.4-3.5-1.4-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.2-4.7-5.3 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.9 1.1.8-.2 1.6-.3 2.4-.3.8 0 1.6.1 2.4.3 2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.5.1 2.8.7.8 1.1 1.8 1.1 2.9 0 4.1-2.4 5-4.7 5.3.4.3.8 1 .8 2v2.9c0 .3.2.6.7.5 4.1-1.3 7-5.1 7-9.6C22 6.6 17.5 2 12 2Z" />
                    </svg>
                  </span>
                  <span className="contact-text">github.com/delongzhuc</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
