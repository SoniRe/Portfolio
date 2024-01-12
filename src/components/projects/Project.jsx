import "./project.css";
import projectimage1 from "../../assets/project1.png";
import projectimage2 from "../../assets/project2.png";
import projectimage3 from "../../assets/project3.png";

const Project = () => {
  return (
    <section className="section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Personal Projects</span>

      <div className="project__container">
        <div className="project1 project-ex">
          <img src={projectimage1} alt="project-img" className="project__img" />
          <div className="about__data project__data">
            <h1 className="project__title">Youtube</h1>
            <p className="about__project">
              🎥 Developed a top-notch video streaming platform with swift
              loading times and an integrated live chat system. 🔗 Seamless API
              polling facilitates real-time interactions. <br /> <br /> 🔍
              Enhanced search performance with intelligent debouncing, tailored
              API calls at less than 200ms keystroke intervals, and a strategic
              Map data structure for Order of 1 time complexity. 💡 Result?
              Lightning-fast suggestions with efficient caching. <br /> <br />{" "}
              🌟 Elevated UX design by implementing N-Level Nested comments
              using Recursive Component architecture. 🚀 Demonstrating
              proficiency in system enhancement. 👩‍💻
            </p>
            <div className="project__details">
              <a
                href="https://my-latest-youtube.netlify.app/"
                className="project__link"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/SoniRe/My-Youtube"
                className="project__link"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="project2 project-rev">
          <img
            src={projectimage2}
            alt="project-img"
            className="project__img2"
          />
          <div className="about__data project__data">
            <h1 className="project__title">Netflix AI</h1>
            <p className="about__project">
              🛠 Tech Stack: React, Redux, Firebase, Tailwind CSS. <br /> <br />{" "}
              🧠 AI Magic: Gemini Pro for movie recommendations. <br /> <br />{" "}
              🎥 Content Galore: TMDB API integration for diverse content.{" "}
              <br /> <br />
              🌐 Impact: Elevating user engagement with AI-driven suggestions.
            </p>
            <div className="project__details">
              <a
                href="https://netflix-googleai.netlify.app/"
                className="project__link"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/SoniRe/Netflix-AI"
                className="project__link"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="project3 project-ex">
          <img src={projectimage3} alt="project-img" className="project__img" />
          <div className="about__data project__data">
            <h1 className="project__title">Foodiez</h1>
            <p className="about__project">
              Foodiez a food delivery app built solely with React! 🍔📲 Key
              Features: <br />
              <br />
              1️⃣ Config Driven UI: Tailored user experience through dynamic
              configuration. <br />
              <br />
              2️⃣ Lightning-fast Performance: Thanks to React's efficient DOM
              manipulation. <br />
              <br />
              3️⃣ Client Side Routing: Seamless navigation for a smooth user
              journey.
              <br />
              <br /> 4️⃣ Redux Magic: Say goodbye to props drilling! Leveraged
              Redux store for cleaner, more maintainable code. <br />
              <br />
              5️⃣ Custom Hooks FTW: Embracing Single Responsibility Principle
              with custom hooks.
            </p>
            <div className="project__details">
              <a
                href="https://fooodiezz.netlify.app/"
                className="project__link"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/SoniRe/Foodiez"
                className="project__link"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
