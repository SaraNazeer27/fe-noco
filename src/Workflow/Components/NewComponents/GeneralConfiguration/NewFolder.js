import React from "react";
import "./NewFolder.css";

const NewFolder = () => {
  return (
    <div className="newFolder">
      <h3>New workflow folder</h3>
      <label>Folder name</label> &nbsp;&nbsp;&nbsp;
      <input type="text"></input>
      <br></br>
      <button className="ok">Okay</button>
      <button className="cancel">Cancel</button>
    </div>
  );
};

export default NewFolder;
