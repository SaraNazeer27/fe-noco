import React, { useState } from "react";
import "./PreviousPage.css";

export default function PreviousPage() {
  const [password, setPassword] = useState("");

  function handleInputChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="newFolder">
      <h3>Go to Previous Page </h3>
      <div>
        <label htmlFor="options">Only when:</label> &nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
}
