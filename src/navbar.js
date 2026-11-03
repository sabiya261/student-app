
import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Student Portal
      </div>

      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#students">Students</a></li>
        <li><a href="#register">Register</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
