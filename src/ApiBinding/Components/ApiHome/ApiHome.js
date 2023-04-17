import React, { useState } from "react";
import RestApi from "../RestApi/RestApi";
import "./ApiHome.css";


const API_TYPES = [
  {
 
            key: 1,
            fieldType: "dropdown", //input number text
            options: [
              {
                displayValue: "Rest",
                value: "Rest",
              },
            ],
          },
          {
            key: 2,
            fieldType: "dropdown", //input number text
            options: [
              {
                displayValue: "Soap",
                value: "Soap",
              },
            ],
          }
        ],
      



const ApiHome = () => {
  const [showModal, setShowModal] = useState(false);
  const [apiTypes, setApiTypes] = useState(API_TYPES);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
    <div>
      <button onClick={handleOpenModal}>+ New integration</button>
      <div className="modal-content" onClick={closeModalContent}>
            <ul>
              {eventTypes.map((eventType) => (
                <div className="dropdown" key={eventType.id}>
                  </div>
              ))}
                  </ul>

      {showModal && <RestApi onClose={handleCloseModal} /> && (
        <RestApi onClose={handleCloseModal} />
      )}
      </div>
    <>
  );
};

export default ApiHome;
