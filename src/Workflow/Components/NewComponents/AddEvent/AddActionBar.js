import React, { useEffect, useRef, useState } from "react";
import "./AddActionBar.css";
import Action from "./Action";
import { IoCloseSharp } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

const AddActionBar = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const ref = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  return (
    <div>
      <div className="actionBar-flex">
        <div className="actionBar-box" onClick={toggleModal}>
          click to add an event..
        </div>
        <div className="arrow">
          <BsArrowRight size={25} />
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="action-box" onClick={toggleModal}>
          Step
          <br />
          click to add event..
          <div className="delete">
            {" "}
            <FaTrash className="delete" />
          </div>
        </div>
        <button className="close">
          <IoCloseSharp className="close-sym" size={25} />
        </button>
      </div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content"></div>
          <Action></Action>)
        </div>
      )}
      {/* 
<div className="wrapper">
      <button className="button" onClick={() => setIsMenuOpen(true)}>
        Click Me
      </button>
      {isMenuOpen && (
        <ul className="list" ref={ref}>
          <li className="list-item">dropdown option 1</li>
          <li className="list-item">dropdown option 2</li>
          <li className="list-item">dropdown option 3</li>
          <li className="list-item">dropdown option 4</li>
        </ul>
      )}
    </div> */}
    </div>
  );
};

export default AddActionBar;
