import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { GrAppsRounded, GrConfigure } from "react-icons/gr";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import Configure from "./GeneralConfiguration/Configure";
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
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content"></div>
          </div>
        )}
      </div>
      {modal && <Configure></Configure>}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <ul>
              <div className="dropdown">
                <div className="ele1">
                  <FaUserCircle /> &nbsp;&nbsp;&nbsp; General
                  <ul className="dropdown-content">
                    <button onClick={Configure}>User logged in</button>
                    <li>Page is loaded</li>
                    <li>Do every 5 seconds</li>
                    <li>Do when condition is True</li>
                    <li>An unhandled error occurs</li>
                  </ul>
                </div>
              </div>
              <br></br>

              <hr></hr>

              <div className="dropdown">
                <div className="ele2">
                  <GrAppsRounded /> &nbsp;&nbsp;&nbsp; Elements
                  <ul className="dropdown-content" onClick={toggleModal}>
                    <li>An element is clicked</li>
                    <li>An input's value is changed</li>
                    <li>A map's marker is clicked</li>
                    <li>A popup is closed</li>
                    <li>A popup is opened</li>
                    <li>An element has an error running a workflow</li>
                  </ul>
                </div>
              </div>
              <br></br>

              <hr></hr>

              <div className="dropdown">
                <div className="ele3">
                  <MdOutlineSettingsSuggest /> &nbsp;&nbsp;&nbsp; Custom
                  <ul className="dropdown-content">
                    <li>Create a custom event..</li>
                  </ul>
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
