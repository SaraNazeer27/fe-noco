import React, { useState } from "react";
// import { FaUserCircle, FaElementor } from "react-icons/fa";
// import { MdOutlineSettingsSuggest } from "react-icons/md";
// import ElementClicked from "./GeneralConfiguration/ElementClicked";

// import UserLoggedIn from "./GeneralConfiguration/UserLoggedIn";
// import UserLoggedOut from "./GeneralConfiguration/UserLoggedOut";
// import ConditionTrue from "./GeneralConfiguration/ConditionTrue";
// import ErrorOccurs from "./GeneralConfiguration/ErrorOccurs";

import "./Pop.css";
import EventConfiguration from "../../EventConfiguration/EventConfiguration";

const EVENT_TYPES = [
  {
    id: 1,
    type: "General",
    subTypes: [
      {
        id: 11,
        name: "User is logged in",
        configurationFields:[
          {
            key:1,
            label:"Event color",
            fieldType:"dropdown", //input number text
            options:[
              {
                displayValue:"Blue",
                value:"Blue"
              }
            ]
          }
        ]
      },
      {
        id: 21,
        name: "User is logged out"
      }
    ]
  },
  {
    id: 2,
    type: "Element"
  },
  {
    id: 3,
    type: "Custom"
  }
];


export default function Pop() {
  const [modal, setModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [eventTypes, setEventTypes] = useState(EVENT_TYPES);
  const [selectedType, setSelectedType] = useState({});
  const toggleModal = () => {
    setModal(!modal);
  };


  
  const openModal = (selectedType) =>()=> {
    console.log(selectedType)
    setSelectedType({...selectedType})
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
          {/* <div onClick={toggleModal} className="overlay"></div> */}
          <div className="modal-content">
            <ul>
              {eventTypes.map(eventType => (

                <div className="dropdown" key={eventType.id}>
                  <div className="ele1">
                    {eventType.type}
                    {eventType.subTypes && <ul className="dropdown-content">
                      {eventType.subTypes.map(subType => (
                        <li key={subType.id} onClick={openModal(subType)}>{subType.name}</li>))}
                    </ul>}
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}
      {showModal && <EventConfiguration selectedType={selectedType} />}
    </>
  );
}
