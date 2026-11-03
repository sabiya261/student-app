
import React, { useState } from "react";
import "./StudentForm.css";

function StudentForm() {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || rollNo.trim() === "") {
      setMessage("Please enter Name and Roll No.");
      return;
    }

    setMessage("Student registered successfully!");
  };

  return (
    <div className="student-form">
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Roll No:</label>
        <input
          type="text"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default StudentForm;
