 //import { React, useState } from "react";
// import { FaTrash } from "react-icons/fa";
// import "./SavedPop.css";
// import ActionConfiguration from "../../../ActionConfiguration/ActionConfiguration";

// const ACTION_TYPES = [
//   {
//     id: 1,
//     type: "Account",
//     subTypes: [
//       {
//         id: 11,
//         name: "Sign the user up",
//       },
//       {
//         id: 21,
//         name: "Log the user in",
//         configurationFields: [
//           {
//             key: 1,
//             label: "Log the user in",
//             fieldType: "dropdown",
//             options: [
//               {
//                 displayValue: "Yes",
//                 value: "Yes",
//               },
//               {
//                 displayValue: "No",
//                 value: "No",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         id: 31,
//         name: "Log the user out",
//       },
//     ],
//   },
//   {
//     id: 2,
//     type: "Navigation",
//     subTypes: [
//       {
//         id: 12,
//         name: "Go to next page...",
//         configurationFields: [
//           {
//             key: 1,
//             label: "Element",
//             fieldType: "dropdown",
//             options: [
//               {
//                 displayValue: "",
//                 value: "",
//               },
//             ],
//           },
//           {
//             key: 2,
//             label: "Event color",
//             fieldType: "dropdown",
//             options: [
//               {
//                 displayValue: "Blue",
//                 value: "Blue",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         id: 22,
//         name: "Go to previous page",
//       },
//       {
//         id: 32,
//         name: "Terminate this workflow",
//       },
//     ],
//   },
//   {
//     id: 3,
//     type: "Data (Things)",
//     subTypes: [
//       {
//         id: 14,
//         name: "Create a new Thing",
//         configurationFields: [
//           {
//             key: 1,
//             label: "Element",
//             fieldType: "dropdown",
//             options: [
//               {
//                 displayValue: "",
//                 value: "",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         id: 24,
//         name: "Delete thing",
//       },
//       {
//         id: 34,
//         name: "Upload file",
//       },
//       {
//         id: 44,
//         name: "Delete file",
//       },
//       {
//         id: 54,
//         name: "Make changes to things",
//       },
//     ],
//   },
//   {
//     id: 4,
//     type: "Custom Events",
//     subTypes: [
//       {
//         id: 14,
//         name: "Schedule API workflow",
//       },
//       {
//         id: 24,
//         name: "Cancel scheduled API workflow",
//       },
//     ],
//   },
// ];

// export default function SavedPop() {
//   const [modal, setModal] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [actionTypes, setActionTypes] = useState(ACTION_TYPES);
//   const [selectedType, setSelectedType] = useState({});
//   const [isClosed, setIsClosed] = useState(false);
//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   const openModal = (selectedType) => () => {
//     console.log(selectedType);
//     setSelectedType({ ...selectedType });
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   if (modal) {
//     document.body.classList.add("active-modal");
//   } else {
//     document.body.classList.remove("active-modal");
//   }

//   return (
//     <>
//       <div className="token-flex">
//         <div className="token" onClick={toggleModal}>
//           click to add event..
//           <FaTrash className="trash" />
//           {modal && (
//             <div className="modal">
//               <div onClick={toggleModal} className="overlay"></div>
//               {/* <div className="modal-content"></div> */}
//             </div>
//           )}
//           <ul>
//             {actionTypes.map((actionType) => (
//               <div className="dropdown" key={actionType.id}>
//                 <div className="ele1">
//                   {actionType.type}
//                   {actionType.subTypes && (
//                     <ul className="dropdown-content">
//                       {actionType.subTypes.map((subType) => (
//                         <li key={subType.id} onClick={openModal(subType)}>
//                           {subType.name}
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </ul>
//         </div>
//       </div>
//       {showModal && <ActionConfiguration selectedType={selectedType} />}
//     </>
//   );
// }

import React,{useState, useRef, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import "./SavedPop.css";
import ActionConfiguration from "../../../ActionConfiguration/ActionConfiguration";
const ACTION_TYPES = [
  {
    id: 1,
    type: "Account",
    subTypes: [
      {
        id: 11,
        name: "Sign the user up",
      },
      {
        id: 21,
        name: "Log the user in",
        configurationFields: [
          {
            key: 1,
            label: "Log the user in",
            fieldType: "dropdown",
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
        id: 31,
        name: "Log the user out",
      },
    ],
  },
  {
    id: 2,
    type: "Navigation",
    subTypes: [
      {
        id: 12,
        name: "Go to next page...",
        configurationFields: [
          {
            key: 1,
            label: "Element",
            fieldType: "dropdown",
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
            fieldType: "dropdown",
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
        name: "Go to previous page",
      },
      {
        id: 32,
        name: "Terminate this workflow",
      },
    ],
  },
  {
    id: 3,
    type: "Data (Things)",
    subTypes: [
      {
        id: 14,
        name: "Create a new Thing",
        configurationFields: [
          {
            key: 1,
            label: "Element",
            fieldType: "dropdown",
            options: [
              {
                displayValue: "",
                value: "",
              },
            ],
          },
        ],
      },
      {
        id: 24,
        name: "Delete thing",
      },
      {
        id: 34,
        name: "Upload file",
      },
      {
        id: 44,
        name: "Delete file",
      },
      {
        id: 54,
        name: "Make changes to things",
      },
    ],
  },
  {
    id: 4,
    type: "Custom Events",
    subTypes: [
      {
        id: 14,
        name: "Schedule API workflow",
      },
      {
        id: 24,
        name: "Cancel scheduled API workflow",
      },
    ],
  },
];

export default function SavedPop() {
  const [modal, setModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [actionTypes, setActionTypes] = useState(ACTION_TYPES);
  const [selectedType, setSelectedType] = useState({});
  const [isClosed, setIsClosed] = useState(false);
  const [showActionTypes, setShowActionTypes] = useState(false);
  const tokenRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (tokenRef.current && !tokenRef.current.contains(event.target)) {
        setModal(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {  
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [tokenRef]);







  const toggleModal = () => {
    setModal(!modal);
  
  };

 
  const openModal = (selectedType) => () => {
   
    setSelectedType({ ...selectedType });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="token-flex">
        <div className="token" onClick={toggleModal} ref={tokenRef}>
          click to add event..
          <FaTrash className="trash" />
          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              {/* <div className="modal-content"></div> */}
            </div>
          )}
          <ul>
            {actionTypes.map((actionType) => (
              <div className="dropdown" key={actionType.id}>
                <div className="ele1">
                  {actionType.type}
                  {actionType.subTypes && (
                    <ul className="dropdown-content">
                      {actionType.subTypes.map((subType) => (
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
        {showActionTypes && ( // added conditional rendering
          <div className="action-types-dropdown">
            <select
              onChange={(e) => {
                const selectedType = actionTypes.find(
                  (type) => type.type === e.target.value
                );
                setSelectedType(selectedType.subTypes[0]);
                setShowModal(true);
                setShowActionTypes(false);
              }}
            >
              <option value="">Choose an action type...</option>
              {actionTypes.map((type) => (
                <option key={type.id} value={type.type}>
                  {type.type}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      {showModal && <ActionConfiguration selectedType={selectedType} />}
    </>
  );
}

