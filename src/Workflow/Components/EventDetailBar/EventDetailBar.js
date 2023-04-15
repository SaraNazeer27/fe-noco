import React, { useState } from "react";
import EventDetailConfiguration from "../EventDetailConfiguration/EventDetailConfiguration";
import EventDetailList from "../EventDetailList/EventDetailList";
import "./EventDetailBar.css";

const ACTION_TYPES = [
  {
    id: 1,
    type: "Account",
    subTypes: [
      {
        id: 11,
        name: "Sign the User up",
        configurationFields: [
          {
            key: 111,
            label: "Email",
            fieldType: "email", //input number text
          },
          {
            key: 112,
            label: "Password",
            fieldType: "password", //input number text
          },
          {
            key: 113,
            label: "Require a Password confirmation",
            fieldType: "checkbox", //input number text
          },
        ],
      },

      {
        id: 12,
        name: "Log the User in",
        configurationFields: [
          {
            key: 121,
            label: "Email",
            fieldType: "text", //input number text
          },
          {
            key: 122,
            label: "Password",
            fieldType: "text", //input number text
          },
          {
            key: 123,
            label: "Stay logged in",
            fieldType: "dropdown", //input number text
            options: [
              {
                displayValue: "Yes",
                value: "Yes",
              },
              {
                displayValue: "No",
                value: "No",
              },
            ],
          },
        ],
      },
      {
        id: 13,
        name: "Log the User Out",
      },
      {
        id: 14,
        name: "Check Password for the Current User",
        configurationFields: [
          {
            key: 141,
            label: "Password to check",
            fieldType: "password", //input number text
          },
        ],
      },
    ],
  },

  {
    id: 2,
    type: "Navigation",
    subTypes: [
      {
        id: 21,
        name: "Go to Next Page",
      },

      {
        id: 22,
        name: "Go to Previous Page",
      },
      {
        id: 23,
        name: "Terminate the Workflow",
      },
    ],
  },

  {
    id: 3,
    type: "Data(Things)",
    subTypes: [
      {
        id: 31,
        name: "Create a new thing...",
        configurationFields: [
          {
            key: 311,
            label: "Type",
            fieldType: "dropdown", //input number text
            options: [
              {
                displayValue: "Create a new type...",
                value: "Create a new type...",
              },
            ],
          },
        ],
      },
      {
        id: 32,
        name: "Delete thing...",
        configurationFields: [
          {
            key: 321,
            label: "To delete",
            fieldType: "", //input number text
          },
        ],
      },
      {
        id: 33,
        name: "Upload data as CSV",
        configurationFields: [
          {
            key: 331,
            label: "Type of Data",
            fieldType: "dropdown", //input number text
            options: [
              {
                displayValue: "",
                value: "",
              },
            ],
          },
          {
            key: 332,
            label: "CSV file",
            fieldType: "dropdown", //input number text
          },
          {
            key: 333,
            label: "Separator",
            fieldType: "dropdown", //input number text
            options: [
              {
                displayValue: ",",
                value: ",",
              },
              {
                displayValue: ";",
                value: ";",
              },
              {
                displayValue: "tab",
                value: "tab",
              },
              {
                displayValue: "|",
                value: "|",
              },
            ],
          },
        ],
      },
      {
        id: 34,
        name: "Delete an uploaded file",
        configurationFields: [
          {
            key: 341,
            label: "File URL",
            fieldType: "", //input number text
          },
        ],
      },
    ],
  },
  {
    id: 4,
    type: "Custom Events",
    subTypes: [
      {
        id: 41,
        name: "Schedule API Workflow",
        configurationFields: [
          {
            key: 411,
            label: "API Workflow",
            fieldType: "dropdown", //input number text
            options: [
              {
                displayValue: "",
                value: "",
              },
            ],
          },
          {
            key: 412,
            label: "Scheduled data",
            fieldType: "", //input number text
          },
        ],
      },
      {
        id: 42,
        name: "Cancel a scheduled API Workflow",
        configurationFields: [
          {
            key: 421,
            label: "Scheduled API id",
            fieldType: "", //input number text
          },
        ],
      },
    ],
  },
];

const ADDED_ACTIONS = [];

const EventDetailBar = (props) => {
  const [actionTypes, setActionTypes] = useState(ACTION_TYPES);
  const [selectedActionType, setSelectedActionType] = useState({});
  const [addedActions, setAddedActions] = useState(ADDED_ACTIONS);
  const [showActionModal, setShowActionModal] = useState(false);
  const [actionModal, setActionModal] = useState(false);

  const closeActionModalContent = () => {
    setActionModal(() => false);
  };

  const toggleActionModal = () => {
    setActionModal(() => !actionModal);
  };

  if (actionModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const openActionModal = (selectedActionType) => () => {
    console.log(selectedActionType);
    setSelectedActionType(() => selectedActionType);
    setAddedActions((prevAddedActions) => {
      return [selectedActionType, ...prevAddedActions];
    });
    setShowActionModal(true);
  };

  const onActionClick = (selectedActionType) => {
    setSelectedActionType(() => selectedActionType);
    onChangeConfigurationPopup(true);
  };
  const onChangeConfigurationPopup = (show) => {
    setShowActionModal(() => show);
    console.log(showActionModal);
  };

  return (
    <>
      <div className="action-flex">
        {addedActions && (
          <EventDetailList
            onActionClick={onActionClick}
            addedActions={addedActions}
          />
        )}
        <div className="action-box" onClick={toggleActionModal}>
          click to add action..
        </div>{" "}
        &nbsp;&nbsp;&nbsp;
        {actionModal && (
          <div className="action-modal">
            <div onClick={toggleActionModal}></div>
            <div className="action-modal-content"></div>
          </div>
        )}
      </div>
      {actionModal && (
        <div className="action-modal">
          <div onClick={toggleActionModal} className="overlay"></div>
          <div
            className="action-modal-content"
            onClick={closeActionModalContent}
          >
            <ul className="action-menu">
              {actionTypes.map((actionType) => (
                <div className="dropdown" key={actionType.id}>
                  <div className="ele1">
                    {actionType.type}
                    {actionType.subTypes && (
                      <ul className="dropdown-content">
                        {actionType.subTypes.map((subType) => (
                          <li
                            key={subType.id}
                            onClick={openActionModal(subType)}
                          >
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
      {showActionModal && (
        <EventDetailConfiguration
          onChangeConfigurationPopup={onChangeConfigurationPopup}
          selectedActionType={selectedActionType}
        />
      )}
    </>
  );
};

export default EventDetailBar;
