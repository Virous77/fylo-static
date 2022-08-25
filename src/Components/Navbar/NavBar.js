import React from "react";
import logo from "../images/logo.svg";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="ogo" className="logo" />
      <div className="nav-item">
        <ul className="nav-items">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
