import * as React from "react";
import { useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { MdOutlineOpenInNew } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function MainProject({ data }) {
  const [Pic, setPic] = useState(data.images[0]);
  const swapPicture = (e) => {
    setPic(e.target.src);
  };
  return (
    <section className="main-card animate__animated animate__slideInRight">
      <section className="imageWrapper">
        <img className="main-card-image" src={Pic} />
        <section className="main-card-gallery">
          {data.images.map((singleImg) => {
            return (
              <>
                <section className="gallery-image-wrapper">
                  <img
                    className="gallery-image"
                    src={singleImg}
                    alt="Placeholder image"
                    onMouseEnter={swapPicture}
                  />
                </section>
              </>
            );
          })}
        </section>
      </section>
      <section className="main-card-title">
        <p className="title is-4">{data.name}</p>
      </section>
      <section className="main-card-intro">
        <p className="is-size-7">{data.description}</p>
        <a className="icon is-small" alt={data.github} href={data.github}>
          <HiOutlineDotsHorizontal />
        </a>
      </section>
      <section className="main-card-link-wrapper">
        <a className="icon is-large" alt={data.github} href={data.github}>
          <AiOutlineGithub />
        </a>
        <a
          className="icon is-large"
          alt={data.deployLink}
          href={data.deployLink}
        >
          <MdOutlineOpenInNew />
        </a>
      </section>

      <section className="main-card-stack-wrapper">
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
      <br></br>
    </section>
  );
}
