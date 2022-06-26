import React from "react";
import "./index.css";
import Footer from "../../components/Footer";
import MainProject from "../../components/MainProject";
import OtherProject from "../../components/OtherProject";

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

      <div className="card-container">
        {projectData.map((singleProject) => {
          return singleProject.isMain ? (
            <MainProject data={singleProject} />
          ) : (
            <OtherProject data={singleProject} />
          );
        })}
      </div>

      <Footer />
    </>
  );
};

export default Projects;
