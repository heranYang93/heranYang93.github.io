import React from "react";
import "./index.css";
import Footer from "../../components/Footer";
import { AppData } from "../../Data";

const projectData = AppData.ProjectArr;

const Projects = () => {
  return (
    <>
      <section class="column is-12 hero is-link animate__animated animate__fadeInLeft">
        <div class="hero-body">
          <p class="title">My Projects</p>
        </div>
      </section>
      <div className="is-flex">
        {projectData.map((singleProjectData) => {})}
      </div>
      <Footer />
    </>
  );
};

export default Projects;
