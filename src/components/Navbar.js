import React from "react";
import { NavLink } from "react-router-dom";
import { FaKey } from 'react-icons/fa';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">{/* <Logo /> */}</div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {/* <Hamburger /> */}
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

        <div style={{ background:"#84d7e9", padding: "10px 30px", borderRadius: 20 }}>Contact us</div>

        <div style={{ color:"white", display:"flex", alignItems:"center", padding: 5 }}><FaKey size={26}/>  <span style={{ marginLeft: 15 }}>Login</span></div>
      </div>
    </nav>
  );
}
