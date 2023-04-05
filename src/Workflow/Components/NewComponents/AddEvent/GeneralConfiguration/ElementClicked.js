import React, { useState } from "react";
import "./ElementClicked.css";

export default function ElementClicked() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="newFolder">
      <h3>An Element is clicked </h3>
      <div>
        <label htmlFor="options">Element:</label> &nbsp;&nbsp;&nbsp;
        <select
          id="options"
          value={selectedOption}
          onChange={handleSelectOption}
        >
          <option value=""></option>
          {/* <option value="option1">Blue</option>
          <option value="option2">Red</option>
          <option value="option3">Green</option> */}
        </select>
      </div>
      <div>
        <label htmlFor="options">Event color:</label> &nbsp;&nbsp;&nbsp;
        <select
          id="options"
          value={selectedOption}
          onChange={handleSelectOption}
        >
          <option value=""></option>
          <option value="option1">Blue</option>
          <option value="option2">Red</option>
          <option value="option3">Green</option>
        </select>
      </div>
      <div>
        <lable>Only when:</lable> &nbsp;&nbsp;&nbsp;
      </div>
      <div>
        <label>Disable workflow:</label> &nbsp;&nbsp;&nbsp;
        <input type="checkbox" className="breakB" />
      </div>
    </div>
  );
}
