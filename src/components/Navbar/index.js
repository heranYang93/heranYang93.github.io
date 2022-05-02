import * as React from "react";
import TopLeftImg from "../../images/HY.png";

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={TopLeftImg} height="28" alt="whatev" />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            About
          </a>
          <a className="navbar-item" href="/">
            Projects
          </a>
          <a className="navbar-item" href="/contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
