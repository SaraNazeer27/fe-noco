import React, { useState } from "react";
import "./API.css";
import Table from "./Table";

export default function API() {
  const [selectedOption, setSelectedOption] = useState("");
  const [text, setText] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // const handleSaveClick = () => {
  //   console.log(`The text "${text}" has been saved!`);
  //   // You can write the code to save the text to a database or file here.
  // };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="outline">
      <div className="container">
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value=""></option>
          <option value="option1">GET</option>
          <option value="option2">POST</option>
          <option value="option3">PUT</option>
          <option value="option3">DELETE</option>
        </select>{" "}
        &nbsp;&nbsp;&nbsp;
        <textarea
          className="text-area"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter URL"
        ></textarea>
        &nbsp;&nbsp;&nbsp;
      </div>
      <div>
        <Table></Table>
      </div>
    </div>
  );
}
