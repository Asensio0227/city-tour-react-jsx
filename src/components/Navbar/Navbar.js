import React, { Component } from 'react'
import logo from "../../logo.png"
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <img src={logo} alt="" />
        <ul className="nav-links">
          <li className="nav-link">
            <NavLink
              to="/"
              className={({ isActive })=>(isActive ? "active" : "null")}
            >
              home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/about"
              className={({ isActive })=>(isActive ? "active" : "null")}
            >
              about
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}
