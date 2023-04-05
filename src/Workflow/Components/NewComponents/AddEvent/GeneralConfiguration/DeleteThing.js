import React, { useState } from "react";
import "./DeleteThing.css";

export default function DeleteThing() {
  const [remove, setRemove] = useState("");

  function handleInputChange(event) {
    setRemove(event.target.value);
  }

  return (
    <div className="newFolder">
      <h3>Delete Thing </h3>
      <div>
        <label htmlFor="options">To delete:</label> &nbsp;&nbsp;&nbsp;
      </div>
      <div>
        <label htmlFor="options">Only when:</label> &nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
}
