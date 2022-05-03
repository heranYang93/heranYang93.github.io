import React from "react";
import Footer from "../../components/Footer";
import "./index.css";
import { AppData } from "../../Data";

const Resume = () => {
  return (
    <>
      <section className="hero is-info animate__animated animate__fadeInLeft">
        <div className="hero-body">
          <p className="title">Download my Resume</p>
          <button
            className="button is-rounded is-small"
            href="https://heranyang93.github.io/Full-stack-developer-portfolio/resources/content/hyResume.pdf"
          >
            click me to download ..
          </button>
        </div>
      </section>

      <br></br>

      {AppData.SkillArr.map((singleSkillData) => {
        return (
          <>
            <section className="columns">
              <br></br>
              <div className="column is-3"></div>
              <div className="column is-1 content is-small has-text-centered">
                {singleSkillData.type}
              </div>
              <div className="column is-1 has-text-centered">
                {singleSkillData.icon}
              </div>
              <div className="column is-1 content is-small has-text-centered">
                {singleSkillData.technology}
              </div>
              <div className="column is-2">
                <progress
                  className="progress is-small"
                  value={singleSkillData.proficiency}
                  max="100"
                ></progress>
              </div>
              <br></br>
            </section>
          </>
        );
      })}

      <Footer />
    </>
  );
};

export default Resume;
