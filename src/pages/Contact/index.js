import React from "react";
import { useState, useEffect, useRef } from "react";
import "./index.css";
import Footer from "../../components/Footer";
import { testEmail, testName, testMessage } from "../../utils/helper";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const [emailFormat, setEmailFormat] = useState("input is-warning");
  const [userFormat, setUserFormat] = useState("input is-warning");
  const [messageFormat, setMessageFormat] = useState("textarea is-warning");
  const [warning, setWarning] = useState([
    "is-Hidden",
    "is-Hidden",
    "is-Hidden",
    "",
  ]);

  // console.log("email", email, "userName", userName, "message", message);
  const handleChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setUsername(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleBlur = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      const emailIsValid = testEmail(email);
      if (emailIsValid) {
        setEmailFormat("input is-warning");
        setWarning(["is-Hidden", "is-Hidden", "is-Hidden", ""]);
      } else {
        setEmailFormat("input is-warning");
        setWarning([
          "dropdown-content animate__animated animate__slideInDown",
          "dropdown-item",
          "warning-message",
          "Check your email address ... ",
        ]);
      }
    } else if (inputType === "name") {
      testName(inputValue);
    } else if (inputType === "message") {
      testMessage(inputValue);
    }
  };

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
              <input
                className={userFormat}
                type="text"
                name="name"
                placeholder="Your name"
                value={userName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </div>
          </div>

          <div className="field ">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className={emailFormat}
                type="email"
                name="email"
                placeholder="john.doe@mail.com"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </div>

            <div className={warning[0]}>
              <div className={warning[1]}>
                <p className={warning[2]}>{warning[3]}</p>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                className={messageFormat}
                type="message"
                name="message"
                placeholder="Your message ..."
                value={message}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              ></textarea>
            </div>
          </div>
          <div className="last-buttons field is-grouped">
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
