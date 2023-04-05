import React, { useState } from "react";
import ConditionTrue from "./ConditionTrue";
// import Pop from "../Pop";
import "./Modal.css";
import UserLoggedIn from "./UserLoggedIn";
import UserLoggedOut from "./UserLoggedOut";
import ErrorOccurs from "./ErrorOccurs";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <ul className="dropdown-content">
        <div>
          <li onClick={openModal}>User is Logged in</li>{" "}
          {showModal ? (
            <div className="modal">
              <span className="close" onClick={closeModal}>
                &times;
              </span>

              <UserLoggedIn></UserLoggedIn>
            </div>
          ) : null}
        </div>

        <div>
          <li onClick={openModal}>User is Logged out</li>{" "}
          {showModal ? (
            <div className="modal">
              <span className="close" onClick={closeModal}>
                &times;
              </span>

              <UserLoggedOut></UserLoggedOut>
            </div>
          ) : null}
        </div>

        <div>
          <li onClick={openModal}> Do when condition is True</li>{" "}
          {showModal ? (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>

                <ConditionTrue></ConditionTrue>
              </div>
            </div>
          ) : null}
        </div>

        <div>
          <li onClick={openModal}>An Unhandled Error occurs</li>{" "}
          {showModal ? (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <ErrorOccurs></ErrorOccurs>
              </div>
            </div>
          ) : null}
        </div>
      </ul>
    </>
  );
}
