import * as React from "react";
import { useContext, useStatus } from "react";
import { useNavbarBurgerContext } from "../../providers/NavbarBurger";
import TopLeftImg from "../../images/HY.png";
import "./index.css";

export default function Navbar() {
  const { navbarBurgerState, switchBurgerState } = useNavbarBurgerContext();

  const handleClickBurger = (e) => {
    e.preventDefault();
    switchBurgerState();
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <h1 className="top-left-title animate__animated animate__pulse animate__infinite	infinite">
            HY
          </h1>
        </a>

        <div
          role="button"
          className={navbarBurgerState.buttonState}
          aria-label="menu"
          aria-expanded="true"
          data-target="navbarBasicExample"
          onClick={(e) => {
            handleClickBurger(e);
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <aside className={navbarBurgerState.menu_display}>
        <ul className="menu-list">
          <li>
            <a className="navbar-item" href="/projects">
              Projects
            </a>
          </li>
          <li>
            <a className="navbar-item" href="/resume">
              Resume
            </a>
          </li>
          <li>
            <a className="navbar-item" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </aside>

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
