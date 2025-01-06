import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiLink } from "react-icons/ri";

const Projects = () => (
  <div className="project-container" id="projects">
    <h1 className="project_heading">Projects</h1>
    <p className="project_para">Hover on Image to see the Project information. </p>
    <div className="cards">
      {/* Card 1 */}
      <div className="card card-1">
        <div className="card-i_t">
          <img src="mod-website.png" alt="Mod APK Website" />
          <div className="card-text">
            <h3>Mod APK Website</h3>
            <p>
              All apps mod apk file Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <a
              href="projects/cat website/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <RiLink />
              </span>
              <span>Visit</span>
            </a>
            <a
              href="projects/cat website/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <FaGithub />
              </span>
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
