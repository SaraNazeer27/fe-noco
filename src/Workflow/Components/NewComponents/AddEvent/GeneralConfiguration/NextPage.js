import React, { useState } from "react";
import "./NextPage.css";

export default function NextPage() {
  const [password, setPassword] = useState("");

  function handleInputChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="newFolder">
      <h3>Go to Next Page </h3>
      <div>
        <label htmlFor="options">Only when:</label> &nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
}
