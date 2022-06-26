import React from "react";
import { useState, useRef } from "react";
import "./index.css";
import Footer from "../../components/Footer";
import { testEmail, testName, testMessage } from "../../utils/helper";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [bannerMessage, setBannerMessage] = useState({
    line1: "Contact Me",
    line2: "Let's have a chat! 😃 ",
    line3: "Please leave your information and I'll get back to you ASAP!",
  });

  const [buttonState, setButtonState] = useState({
    submit: "button is-warning",
    cancel: "button is-warning is-light",
  });

  const [emailFormat, setEmailFormat] = useState("input is-warning");
  const [userFormat, setUserFormat] = useState("input is-warning");
  const [messageFormat, setMessageFormat] = useState("textarea is-warning");
  const [warning, setWarning] = useState([
    "is-Hidden",
    "is-Hidden",
    "is-Hidden",
    "",
  ]);
  const [bannerFormat, setBannerFormat] = useState(
    "hero is-warning animate__animated animate__fadeInLeft"
  );

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonState({
      submit: "button is-warning is-loading",
      cancel: "button is-warning is-light",
    });
    emailjs
      .send(
        "service_21vnf6j",
        "template_p1jdo5i",
        { email, userName, message },
        "ffYuE6Jj7XIvGaRJj"
      )
      .then(
        (result) => {
          setEmail("");
          setUsername("");
          setMessage("");
          setBannerFormat(
            "hero is-primary animate__animated animate__fadeInLeft"
          );
          setBannerMessage({
            line1: "Message Sent!",
            line2: "",
            line3: "I'll get in touch with you shortly!",
          });
          setEmailFormat("input is-primary");
          setUserFormat("input is-primary");
          setMessageFormat("input is-primary");
          setButtonState({
            submit: "button is-primary",
            cancel: "button is-primary",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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

  const clearMessage = (e) => {
    setEmail("");
    setUsername("");
    setMessage("");
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
      <section className={bannerFormat}>
        <div className="hero-body">
          <p className="title">{bannerMessage.line1}</p>
          <p className="my-message">{bannerMessage.line2}</p>
          <p className="my-message">{bannerMessage.line3}</p>
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
              <button className={buttonState.submit} onClick={sendEmail}>
                Submit
              </button>
            </div>
            <div className="control">
              <button className={buttonState.cancel} onClick={clearMessage}>
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
