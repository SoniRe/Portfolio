import "./project.css";
import projectimage1 from "../../assets/project1.jpeg";
import projectimage2 from "../../assets/project2.png";
import projectimage3 from "../../assets/project3.png";

const Project = () => {
  return (
    <section className="section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Personal Projects</span>

      <div className="project__container">
        <div className="project1 project-ex">
          <img src={projectimage3} alt="project-img" className="project__img" />
          <div className="about__data project__data">
            <h1 className="project__title">Youtube Clone</h1>
            <p className="about__project">
              YourTube, the ultimate video streaming app that brings
              entertainment, education, and inspiration right to your
              fingertips. With YourTube, you can explore a vast library of
              videos, discover new content creators, and engage with a vibrant
              community of viewers, all in one seamless platform.
            </p>
            <div className="project__details">
              <a
                href="https://modern-yourtube.netlify.app/"
                className="project__link"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/SoniRe/youtube-clone"
                className="project__link"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="project2 project-rev">
          <img src={projectimage1} alt="project-img" className="project__img" />
          <div className="about__data project__data">
            <h1 className="project__title">Hikers</h1>
            <p className="about__project">
              Hikers is a web application for booking tours and hikes. It
              provides users with an intuitive and seamless experience for
              discovering, booking, and managing various outdoor activities.
              This repository contains the source code for the Hikers web app.
            </p>
            <div className="project__details">
              <a
                href="https://origin-hikers.netlify.app/"
                className="project__link"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/SoniRe/Hikers"
                className="project__link"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="project3 project-ex">
          <img src={projectimage2} alt="project-img" className="project__img" />
          <div className="about__data project__data">
            <h1 className="project__title">Tindog</h1>
            <p className="about__project">
              Tindog, the ultimate social networking app for pets, is here to
              revolutionize the way your furry friend connects with others.
              Whether you have a playful pup, a curious cat, or an adventurous
              rabbit, Tindog is designed to bring pets and their owners together
              in a fun and interactive way.
            </p>
            <div className="project__details">
              <a
                href="https://sonire.github.io/tindog/"
                className="project__link"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/SoniRe/tindog"
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
