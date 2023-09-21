import React from "react";
import { NavLink } from "react-router-dom";
import key from "../asset/key.svg";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="menu-container">
          <div className="logo">
            {" "}
            <img src="circleFour.png" />
          </div>

          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-btn-wrapper">
          <button className="contact-btn">Contact us</button>

          <button className="login-btn">
            <img src={key} /> <span>Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
