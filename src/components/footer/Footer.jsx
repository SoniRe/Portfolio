import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Aditya</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/aditya-verma-976618249/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>{" "}
          </a>

          <a
            href="https://github.com/SoniRe"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>

          <a
            href="https://twitter.com/Aditya_Xode"
            className="footer__social-link"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Aditya Verma. All rights reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
