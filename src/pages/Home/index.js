import React, { useEffect, useState, useContext } from "react";
import "./index.css";
import Footer from "../../components/Footer";
import Image from "../../images/profile.jpg";
import Intro from "../../components/Introduction";

const Home = () => {
  return (
    <div className="columns">
      <div className="column is-12">
        <section className="home-hero hero is-4 is-danger is-fullheight is-flex is-flex-direction-column is-align-items-center is-justify-content-space-around">
          <img
            className="profile_picture animate__animated animate__fadeInDown"
            src={Image}
          />
          <p className="large-hi title is-centered has-text-centered animate__animated animate__fadeInDown">
            Hi there! 👋 <span className="subtitle">My name is Heran</span>
          </p>

          <div className="small-hi">
            <p className="title is-centered has-text-centered animate__animated animate__fadeInDown">
              Hi there! 👋
            </p>
            <p className="subtitle is-centered has-text-centered animate__animated animate__fadeInDown">
              My name is Heran
            </p>
          </div>
          <Intro />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
