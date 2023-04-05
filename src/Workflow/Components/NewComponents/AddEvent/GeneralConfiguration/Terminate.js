import React, { useState } from "react";
import "./Terminate.css";

export default function Terminate() {
  const [password, setPassword] = useState("");

  function handleInputChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="newFolder">
      <h3>Terminate the Workflow </h3>
      <div>
        <label htmlFor="options">Only when:</label> &nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
}
