import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
function Nav() {
  return (
    <div>
      <nav className="navbar">
        {/* LOGO */}
        <div className="logo">Fitin'Fit</div>
        {/* NAVIGATION MENU */}
        <ul className="nav-links" style={{ marginBottom: "0rem" }}>
          {/* USING CHECKBOX HACK */}
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            ☰
          </label>
          {/* NAVIGATION MENUS */}
          <div className="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li className="services">
              <a href="/">Services</a>
              {/* DROPDOWN MENU */}
              <ul className="dropdown">
                <li>
                  <a href="/">Runnig </a>
                </li>
                <li>
                  <a href="/">Cycling</a>
                </li>
                <li>
                  <a href="/">Swimming</a>
                </li>
                <li>
                  <a href="/">Walking</a>
                </li>
                <li>
                  <a href="/">Hiking</a>
                </li>
              </ul>
            </li>
            {/* <LogIn/> */}
            <li>
              <Link
                to="/login"
                className="bt p-2 px-3"
                style={{ color: "#131D28" }}
              >
                Log In
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="bt p-2 "
                style={{ color: "#131D28" }}
              >
                Sign Up
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
