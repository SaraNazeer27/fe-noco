import React, { useState } from "react";
import { FaUserCircle, FaElementor } from "react-icons/fa";
// import { GrAppsRounded } from "react-icons/gr";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import ElementClicked from "./GeneralConfiguration/ElementClicked";
import Modal from "./GeneralConfiguration/Modal";
// import UserLoggedIn from "./GeneralConfiguration/UserLoggedIn";
// import UserLoggedOut from "./GeneralConfiguration/UserLoggedOut";
import "./Pop.css";

export default function Pop() {
  const [modal, setModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  // const handleOptionClick = () => {
  //   setShowModal(true);
  // };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <ul>
              <div className="dropdown">
                <div className="ele1">
                  <FaUserCircle /> &nbsp;&nbsp;&nbsp; General
                  <ul className="dropdown-content">
                    <li>
                      <Modal></Modal>
                    </li>
                  </ul>
                </div>
              </div>
              <br></br>
              <hr></hr>

              <div className="dropdown">
                <div className="ele1">
                  <FaElementor /> &nbsp;&nbsp;&nbsp; Element
                  <ul className="dropdown-content">
                    <li>
                      <div>
                        <li onClick={openModal}>An Element is clicked</li>{" "}
                        {showModal ? (
                          <div className="modal">
                            <div className="modal-content">
                              <span className="close" onClick={closeModal}>
                                &times;
                              </span>

                              <ElementClicked></ElementClicked>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </li>
                    <li>A popup is closed</li>
                    <li>A popup is opened</li>
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
