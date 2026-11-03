
import React from "react";
import Navbar from "./Navbar";
import StudentForm from "./StudentForm";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>Welcome to Student Portal</h1>
        <p>Manage student information easily.</p>
      </div>

      <StudentForm />
    </div>
  );
}

export default App;
