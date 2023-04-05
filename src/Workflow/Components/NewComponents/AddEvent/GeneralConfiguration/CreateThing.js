import React, { useState } from "react";
import "./CreateThing.css";

export default function CreateThing() {
  const [create, setCreate] = useState("");

  function handleInputChange(event) {
    setCreate(event.target.value);
  }

  return (
    <div className="newFolder">
      <h3>Create Thing </h3>
      <div>
        <label htmlFor="options">Run this:</label> &nbsp;&nbsp;&nbsp;
        <select id="options" value={create} onChange={handleInputChange}>
          <option value=""></option>
          <option value="option1">Create a new Type</option>
        </select>
      </div>
      <div>
        <label htmlFor="options">To delete:</label> &nbsp;&nbsp;&nbsp;
      </div>
      <div>
        <label htmlFor="options">Only when:</label> &nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
}
