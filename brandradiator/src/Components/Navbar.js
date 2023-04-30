import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/App.css";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  //used to open and close hamburger

  function toggleMenu() {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  }

  return (
    <div id="nav">
      <div>
        <div id="nav_logo">
          <Link to={"/"}>
            <div id="logo">
              <span>
                <h1 id="move">BR</h1>
              </span>
            </div>
          </Link>
        </div>
        {/* Links to be shown in desktop view in navbar */}
        <div id="links">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="/about">
              <li> About</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
            <Link to="/admin">
              <li>Admin</li>
            </Link>
          </ul>
        </div>
        {/* hamburger with onClickEvent made with respective CSS */}
        <div
          id="ham"
          className={`hamburger_${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          {!menuOpen ? (
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <div className="cancel">X</div>
          )}
           {/* Links to be shown in Side Nav of mobile view */}
          <ul className={`menu_${menuOpen ? "active" : "hide"}`}>
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="/about">
              <li> About</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
            <Link to="/admin">
              <li>Admin</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
