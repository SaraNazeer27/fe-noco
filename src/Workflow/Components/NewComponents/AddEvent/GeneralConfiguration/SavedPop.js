import { React, useState } from "react";
import { FaTrash } from "react-icons/fa";
import "./SavedPop.css";

export default function SavedPop() {
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
    </>
  );
}
