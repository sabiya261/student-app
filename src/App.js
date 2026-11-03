
import React from "react";
import Navbar from "./navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="welcome-section">
        <h1>Welcome to Student Portal</h1>
        <p>Manage student information easily.</p>
      </div>
    </div>
  );
}

export default App;
