import React, { useState } from "react";
import "./Authorizations.css";

export default function Authorizations() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="frame">
      <br></br>
      <label>Type:</label> &nbsp;&nbsp;&nbsp;&nbsp;
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value=""></option>
        <option value="option1">No Auth</option>
        <option value="option2">API Key</option>
        <option value="option3">Basic Auth</option>
        <option value="option3">Digest Auth</option>
      </select>{" "}
    </div>
  );
}
