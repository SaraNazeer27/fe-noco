import React, { useState } from "react";
import "./LogIn.css";
import MultipleClick from './MultipleClick';

export default function LogIn() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="newFolder">
      <h3>Log User in </h3>
      <div>
        <label htmlFor="options">Email:</label> &nbsp;&nbsp;&nbsp;
      </div>
      <div>
        <label htmlFor="options">Password:</label> &nbsp;&nbsp;&nbsp;
      </div>
      <div>
        <label htmlFor="options">Stay Logged in:</label> &nbsp;&nbsp;&nbsp;
        <select
          id="options"
          value={selectedOption}
          onChange={handleSelectOption}
        >
          <option value=""></option>
          <option value="option1">Yes</option>
          <option value="option2">No</option>
        </select>
      </div>
      <div>
        <label htmlFor="options">Only when: <MultipleClick/></label> &nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
}
