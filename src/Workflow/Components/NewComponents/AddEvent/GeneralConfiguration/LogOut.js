import React, { useState } from "react";
import "./LogOut.css";

export default function LogIn() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="newFolder">
      <h3>Log User out </h3>
      <div>
        <label htmlFor="options">Only when:</label> &nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
}
