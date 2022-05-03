import React from "react";
import "./index.css";
import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <>
      <section className="hero is-warning animate__animated animate__fadeInLeft">
        <div className="hero-body">
          <p className="title">Contact Me</p>
          <p className="my-message">Let's have a chat! 😃 </p>
          <p className="my-message">
            Please leave your information and I'll get back to you ASAP!
          </p>
        </div>
      </section>

      <div className="contact-form-space columns animate__animated animate__fadeInRight">
        <div className="column is-1"></div>
        <div className="column">
          <br></br>
          <div className="field">
            <label className="label">Name</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="text" placeholder="Your name" />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                placeholder="john.doe@mail.com"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Your message ..."
              ></textarea>
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-warning">Submit</button>
            </div>
            <div className="control">
              <button className="button is-warning is-light" href="/">
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div className="column"></div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
