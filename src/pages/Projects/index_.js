import React from "react";
import "./index.css";
import Footer from "../../components/Footer";

import { AppData } from "../../Data";
import { FaGitAlt, FaRegWindowMaximize } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const projectData = AppData.ProjectArr;

const Projects = () => {
  let navigate = useNavigate();

  return (
    <>
      <section className="column is-12 hero is-link animate__animated animate__fadeInLeft">
        <div className="hero-body">
          <p className="title">My Projects</p>
        </div>
      </section>

      <div className="card-container is-flex is-flex-wrap-wrap is-justify-content-center">
        {projectData.map((singleProject) => {
          const cardClass = singleProject.isMain
            ? "main-card dropdown is-hoverable"
            : "normal-card dropdown is-hoverable";
          return (
            <div className={cardClass}>
              <div className="dropdown-trigger">
                <figure
                  className="image is-16by9 extra-large"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu4"
                >
                  <img src={singleProject.images[0]} alt="Placeholder image" />
                </figure>

                <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                  <div className="dropdown-content">
                    <div className="dropdown-item">
                      <a
                        href={singleProject.github}
                        className="link-buttons button is-link is-outlined"
                      >
                        Github
                      </a>
                      <a
                        href={singleProject.deployLink}
                        className="link-buttons button is-link is-outlined"
                      >
                        Deployed
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  );
};

export default Projects;
