import React, { useState } from "react";
import "./CheckPassword.css";

export default function CheckPassword() {
  const [password, setPassword] = useState("");

  function handleInputChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="newFolder">
      <h3>Check Password for the Current User </h3>
      <div>
        <label htmlFor="options">Password to check:</label> &nbsp;&nbsp;&nbsp;
        <label htmlFor="textInput">Enter some text:</label>
        <input
          type="text"
          id="textInput"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="options">Only when:</label> &nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
}
