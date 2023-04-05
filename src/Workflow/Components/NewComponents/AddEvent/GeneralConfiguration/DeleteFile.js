import React, { useState } from "react";
import "./DeleteFile.css";

export default function DeleteFile() {
  const [remove, setRemove] = useState("");

  function handleInputChange(event) {
    setRemove(event.target.value);
  }

  return (
    <div className="newFolder">
      <h3>Delete an Uploaded file </h3>
      <div>
        <label htmlFor="options">File URL:</label> &nbsp;&nbsp;&nbsp;
      </div>
      <div>
        <label htmlFor="options">Only when:</label> &nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
}
