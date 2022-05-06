import React from "react";
import "./index.css";
import Footer from "../../components/Footer";
import Image from "../../images/profile.jpg";

const Home = () => {
  return (
    <div className="columns">
      <div className="column is-12">
        <section className="home-hero hero is-4 is-danger is-fullheight is-flex is-flex-direction-column is-align-items-center is-justify-content-space-around">
          <figure class="image is-128x128 animate__animated animate__fadeInDown">
            <img class="is-rounded" src={Image} />
          </figure>

          <p className="title has-text-centered animate__animated animate__fadeInDown">
            Hi there! 👋 <span className="subtitle">My name is Heran</span>
          </p>
          <p className="intro subtitle animate__animated animate__fadeInDown">
            Full Stack Web Developer with a background in Building Engineering
            and life-long dedication to learning. Effective at combining
            creativity and problem solving to develop user-friendly
            applications.
          </p>

          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Home;
