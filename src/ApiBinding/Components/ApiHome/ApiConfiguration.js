import React, { useState } from "react";
import "./ApiConfiguration.css";

function ApiConfiguration() {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <p>Modal content goes here</p>
      </div>
    </div>
  );
}

export default ApiConfiguration;
