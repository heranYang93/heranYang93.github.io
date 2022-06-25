import React from "react";
import Footer from "../../components/Footer";
import "./index.css";
import { AppData } from "../../Data";
import useWindowDimensions from "../../utils/windowDim";

function Resume() {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <section className="hero is-info animate__animated animate__fadeInLeft">
        <div className="hero-body">
          <p className="title">Download my Resume</p>
          <a
            className="button is-rounded is-small"
            href="https://github.com/heranYang93/heranYang93.github.io/raw/main/public/downloadables/HeranYang.pdf"
            download="HeranYangCV"
          >
            Download
          </a>
        </div>
      </section>

      <br></br>
      <section className="skill_list animate__animated animate__slideInUp">
        {AppData.SkillArr.map((singleSkillData) => {
          if (width >= 768) {
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
          } else {
            return (
              <>
                <section className="columns is-mobile">
                  <br></br>
                  <div className="column is-5 content is-small has-text-left">
                    {singleSkillData.type}
                  </div>
                  <div className="column is-2 has-text-centered">
                    {singleSkillData.icon}
                  </div>
                  <div className="column is-5 content is-small has-text-right">
                    {singleSkillData.technology}
                  </div>
                </section>
              </>
            );
          }
        })}
      </section>
      <div className="placeHolder"></div>
      <Footer />
    </>
  );
}

export default Resume;
