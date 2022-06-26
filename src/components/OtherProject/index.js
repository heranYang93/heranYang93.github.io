import * as React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { MdOutlineOpenInNew } from "react-icons/md";

export default function OtherProject({ data }) {
  return (
    <section className="normal-card animate__animated animate__slideInRight">
      <section className="normal-imageWrapper">
        <img className="normal-card-image" src={data.images[0]} />
      </section>
      <section className="normal-card-title">
        <p className="subtitle is-5">{data.name}</p>
      </section>
      <section className="normal-card-link-wrapper">
        <a className="icon" alt={data.github} href={data.github}>
          <AiOutlineGithub />
        </a>
        <a className="icon" alt={data.deployLink} href={data.deployLink}>
          <MdOutlineOpenInNew />
        </a>
      </section>
      <section className="normal-card-stack-wrapper">
        {data.technologyArr.map((singleTech) => {
          return (
            <>
              <span className="tech-tag tag is-info is-light">
                {singleTech}
              </span>
            </>
          );
        })}
      </section>
    </section>
  );
}
