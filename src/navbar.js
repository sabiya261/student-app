import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Main navigation bar for the Student Portal */}
      <h2>Student Portal</h2>

      <ul>
        <li>Home</li>
        <li>Students</li>
        <li>Register</li>
      </ul>
    </nav>
  );
}

export default Navbar;