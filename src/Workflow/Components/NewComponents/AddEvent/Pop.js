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
        configurationFields: [
          {
            key: 1,
            label: "Event color",
            fieldType: "dropdown", //input number text
            options: [
              {
                displayValue: "Blue",
                value: "Blue",
              },
            ],
          },
        ],
      },
      {
        id: 21,
        name: "User is logged out",
        configurationFields: [
          {
            key: 2,
            label: "Event color",
            fieldType: "dropdown",
            options: [
              {
                displayValue: "Blue",
                value: "Blue",
              },
              {
                displayValue: "Green",
                value: "Green",
              },
              {
                displayValue: "Yellow",
                value: "Yellow",
              },
            ],
          },
        ],
      },
      {
        id: 31,
        name: "Do when condition is True",
        configurationFields: [
          {
            key: 3,
            label: "Run this",
            fieldType: "dropdown",
            options: [
              {
                displayValue: "Just once",
                value: "Just once",
              },
              {
                displayValue: "Every time",
                value: "Every time",
              },
            ],
          },
          {
            key: 4,
            label: "Event color",
            fieldType: "dropdown",
            options: [
              {
                displayValue: "Blue",
                value: "Blue",
              },
              {
                displayValue: "Green",
                value: "Green",
              },
              {
                displayValue: "Yellow",
                value: "Yellow",
              },
            ],
          },
        ],
      },
      {
        id: 1,
        name: "An unhandled error occurs",
        configurationFields: [
          {
            key: 1,
            label: "Event color",
            fieldType: "dropdown", //input number text
            options: [
              {
                displayValue: "Blue",
                value: "Blue",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    type: "Element",
    subTypes: [
      {
        id: 12,
        name: "An Element is clicked",
        configurationFields: [
          {
            key: 1,
            label: "Element",
            fieldType: "dropdown", //input number text
            options: [
              {
                displayValue: "",
                value: "",
              },
            ],
          },
          {
            key: 2,
            label: "Event color",
            fieldType: "dropdown", //input number text
            options: [
              {
                displayValue: "Blue",
                value: "Blue",
              },
            ],
          },
        ],
      },

      {
        id: 22,
        name: "Pop up is closed",
      },
      {
        id: 32,
        name: "Pop up is opened",
      },
      {
        id: 42,
        name: "Error occured",
      },
    ],
  },
  {
    id: 3,
    type: "Custom",
    subTypes: [
      {
        id: 13,
        name: "Create a custom event",
      },
    ],
  },
];

export default function Pop() {
  const [modal, setModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [eventTypes, setEventTypes] = useState(EVENT_TYPES);
  const [selectedType, setSelectedType] = useState({});
  const [isClosed, setIsClosed] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const openModal = (selectedType) => () => {
    console.log(selectedType);
    setSelectedType({ ...selectedType });
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
              {eventTypes.map((eventType) => (
                <div className="dropdown" key={eventType.id}>
                  <div className="ele1">
                    {eventType.type}
                    {eventType.subTypes && (
                      <ul className="dropdown-content">
                        {eventType.subTypes.map((subType) => (
                          <li key={subType.id} onClick={openModal(subType)}>
                            {subType.name}
                          </li>
                        ))}
                      </ul>
                    )}
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
