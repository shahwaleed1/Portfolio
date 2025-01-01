import React from "react";

const Projects = () => (
  <div className="project-container" id="projects">
    <h1>Projects</h1>
    <div className="cards">
      {/* Card 1 */}
      <div className="card card-1">
        <div className="card-i_t">
          <img src="mod-website.png" alt="Mod APK Website" />
          <div className="card-text">
            <h3>Mod APK Website</h3>
            <p>All apps mod apk file Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="projects/cat website/index.html" target="_blank" rel="noreferrer">
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
