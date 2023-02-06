import React, { useState } from "react";
import { FaUserCircle, FaTrash } from "react-icons/fa";
import { GrAppsRounded } from "react-icons/gr";
import { MdOutlineSettingsSuggest } from "react-icons/md";
// import Configure from "./Workflow/Components/NewComponents/AddEvent/GeneralConfiguration/Configure";
// import Configure from "./Configure";
// import Configure from "./Configure";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import "./Configure.css";
import "./Pop.css";

export default function Pop() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="token-flex">
        <div className="token-box" onClick={toggleModal}>
          click to add event..
        </div>{" "}
        &nbsp;&nbsp;&nbsp;
        <div className="token" onClick={toggleModal}>
          click to add event..
          <FaTrash className="trash" />
          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content"></div>
            </div>
          )}
        </div>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <ul>
              <div className="dropdown">
                <div className="ele1">
                  <FaUserCircle /> &nbsp;&nbsp;&nbsp; General
                  <div className="dropdown-content">
                    <a href="1">User is logged in</a>

                    {/* <a href="2" onClick={() => <Configure></Configure>}>User is logged out</a> */}
                    <a href="3">Page is loaded</a>
                    <a href="4">Do every 5 seconds</a>
                    <a href="5">Do when condition is True</a>
                    <a href="6">An unhandled error occurs</a>
                  </div>
                </div>
              </div>
              <br></br>
              {/* <br></br> */}
              <hr></hr>

              <div className="dropdown">
                <div className="ele2">
                  <GrAppsRounded /> &nbsp;&nbsp;&nbsp; Elements
                  <div className="dropdown-content">
                    <a href="1">An element is clicked</a>
                    <a href="2">An input's value is changed</a>
                    <a href="3">A map's marker is clicked</a>
                    <a href="4">A popup is closed</a>
                    <a href="5">A popup is opened</a>
                    <a href="6">An element has an error running a workflow</a>

                    {/* <datalist>
                <option value="Interner">Internet</option>
                <option value="Interner">Internet</option>
                <option value="Interner">Internet</option>
              </datalist> */}
                  </div>
                </div>
              </div>
              <br></br>
              {/* <br></br> */}
              <hr></hr>

              <div className="dropdown">
                <div className="ele3">
                  <MdOutlineSettingsSuggest /> &nbsp;&nbsp;&nbsp; Custom
                  <div className="dropdown-content">
                    <a href="1">Create a custom event..</a>
                  </div>
                  <br></br>
                </div>
              </div>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
