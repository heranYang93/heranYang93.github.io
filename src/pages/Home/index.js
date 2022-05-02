import React from "react";
import "./index.css";
import Footer from "../../components/Footer";
import Image from "../../images/profile.jpg";

const Home = () => {
  return (
    <section className="hero is-danger is-fullheight">
      <div className="hero-body">
        <div className="">
          <p className="title animate__animated animate__fadeInDown">
            Hi there! 👋
          </p>
          <p className="subtitle animate__animated animate__fadeInDown">
            My name is Heran
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
