import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiLink } from "react-icons/ri";

const Projects = () => (
  <div className="project-container" id="projects">
    <h1 className="project_heading">Projects</h1>
    <p className="project_para">
      Hover on Image to see the Project information.{" "}
    </p>
    <div className="cards">
      {/* Card 1 */}
      <div className="card card-1">
        <div className="card-i_t">
          <img src="hd_photo.png" alt="HD Photos" />
          <div className="card-text">
            <h3>HD Photos</h3>
            <p>
              HD Photos is Create in react js and tailwind css.It have a HD
              Photos to user use in project and wallpapers mobile size, laptop
              size etc.
            </p>
            <a
              href="https://hd-photos.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <RiLink />
              </span>
              <span>Visit</span>
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <span>
                <FaGithub />
              </span>
              Github
            </a>
          </div>
        </div>
      </div>
      {/* {card 2} */}

      <div className="card card-1">
        <div className="card-i_t">
          <img src="coffee.png" alt="coffee" />
          <div className="card-text">
            <h3>Shah Coffee</h3>
            <p>
              Shah-Coffee website create with react js and tailwind css.it for coffee shop website.
            </p>
            <a
              href="https://shahcoffee.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <RiLink />
              </span>
              <span>Visit</span>
            </a>
            <a href="/" target="_blank" rel="noreferrer">
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
