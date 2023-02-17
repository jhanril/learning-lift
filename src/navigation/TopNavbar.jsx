import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navigation.css";
// import logo from "./logo.png";
import SearchIcon from "./search.svg";

function TopNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    const menuList = document.querySelector(".menu-list");
    menuList.style.animationFillMode = "forwards";
    menuList.style.animationName = menuOpen ? "slideOut" : "slideIn";
  };

  return (
    <header>
      <nav className="navigation">
        <div className="nav-top">
          <div className="logo">
            {/* <img src={`${logo}`} alt="" /> */}
            <Link to="/">
              <h1>Learning Lift</h1>
            </Link>
          </div>

          <div className="search">
            <input placeholder="Search" />
            <img src={SearchIcon} alt="" />
          </div>

          <div className="nav-buttons">
            <button className="btn-rounded">
              Sign up
              <div className="arrow-wrapper">
                <div className="arrow"></div>
              </div>
            </button>
            <button className="btn-rounded-outline">Teacher Login</button>
            <button className="btn-rounded-outline">Join Class</button>
          </div>

          <div className="humbarger" onClick={handleMenuToggle}>
            <div className="bar"></div>
            <div className="bar2 bar"></div>
            <div className="bar"></div>
          </div>
        </div>

        <div className="nav-menu">
          <ul className={`menu-list ${menuOpen ? "open" : ""}`}>
            <li>
              <Link to="/whatis">What Is Learning Lift?</Link>
            </li>
            <li>
              <Link to="/lessons">Lessons</Link>
            </li>
            <li>
              <Link to="/">How it works</Link>
            </li>
            <li>
              <Link to="/educators">Educators</Link>
            </li>
            <li>
              <div className="mobile-nav-buttons">
                <button className="btn-rounded">
                  Sign up
                  <div className="arrow-wrapper">
                    <div className="arrow"></div>
                  </div>
                </button>
                <button className="btn-rounded">Teacher Login</button>
                <button className="btn-rounded">Join Class</button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default TopNavbar;
