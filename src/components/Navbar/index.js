import * as React from "react";
import TopLeftImg from "../../images/HY.png";
import "./index.css";

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <h1 className="top-left-title animate__animated animate__pulse animate__infinite	infinite">
            HY
          </h1>
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
        <div className="navbar-end">
          <a className="navbar-item" href="/projects">
            Projects
          </a>
          <a className="navbar-item" href="/resume">
            Resume
          </a>
          <a className="navbar-item" href="/contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
