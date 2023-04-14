import React, { useState } from "react";
import "./Pop.css";
import EventConfiguration from "../../EventConfiguration/EventConfiguration";
import EventList from "../../EventList/EventList";
import EventDetailBar from "../../EventDetailBar/EventDetailBar";
import EventDetailConfiguration from "../../EventDetailConfiguration/EventDetailConfiguration";

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
            key: 111,
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
        id: 12,
        name: "User is logged out",
        configurationFields: [
          {
            key: 112,
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
        id: 13,
        name: "Do when condition is True",
        configurationFields: [
          {
            key: 113,
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
            key: 114,
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
        id: 14,
        name: "An unhandled error occurs",
        configurationFields: [
          {
            key: 115,
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
        id: 21,
        name: "An Element is clicked",
        configurationFields: [
          {
            key: 211,
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
            key: 212,
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
        id: 23,
        name: "Pop up is opened",
      },
      {
        id: 24,
        name: "Error occured",
      },
    ],
  },
  {
    id: 3,
    type: "Custom",
    subTypes: [
      {
        id: 31,
        name: "Create a custom event",
      },
    ],
  },
];

const ADDED_EVENTS = [];

export default function Pop() {
  const [modal, setModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [eventTypes, setEventTypes] = useState(EVENT_TYPES);
  const [selectedType, setSelectedType] = useState({});
  const [addedEvents, setAddedEvents] = useState(ADDED_EVENTS);
  const [eventdetail, setEventDetail] = useState(false);

  const closeModalContent = () => {
    setModal(() => false);
  };

  const toggleModal = () => {
    setShowModal(() => false);
    setModal(() => !modal);
  };

  const openModal = (selectedType) => () => {
    console.log(selectedType);
    setSelectedType(() => selectedType);
    setAddedEvents((prevAddedEvents) => {
      return [selectedType, ...prevAddedEvents];
    });
    setShowModal(() => true);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const onEventClick = (selectedType) => {
    setSelectedType(() => selectedType);
    setEventDetail(() => true);
    onChangeConfigurationPopup(true);
  };
  const onChangeConfigurationPopup = (show) => {
    setShowModal(() => show);
    console.log(showModal);
  };

  return (
    <>
      <div className="token-flex">
        {addedEvents && (
          <EventList onEventClick={onEventClick} addedEvents={addedEvents} />
        )}
        <div className="token-box" onClick={toggleModal}>
          click to add event..
        </div>{" "}
        &nbsp;&nbsp;&nbsp;
        {modal && (
          <div className="modal">
            <div onClick={toggleModal}></div>
            <div className="modal-content"></div>
          </div>
        )}
      </div>
      {eventdetail && <EventDetailBar />}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content" onClick={closeModalContent}>
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
            <></>
          </div>
        </div>
      )}

      {showModal && (
        <EventConfiguration
          onChangeConfigurationPopup={onChangeConfigurationPopup}
          selectedType={selectedType}
        />
      )}
    </>
  );
}
