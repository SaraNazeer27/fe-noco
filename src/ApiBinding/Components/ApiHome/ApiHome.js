// import React, { useState } from "react";
// import ApiConfiguration from "./ApiConfiguration";
// const ACTION_TYPES = [
//   {
//     id: 1,
//     type: "Rest",
//     subTypes: [
//       {
//         id: 11,
//         name: "Sign the User up",
//         configurationFields: [
//           {
//             key: 111,
//             label: "Email",
//             fieldType: "email", //input number text
//           },
//           {
//             key: 112,
//             label: "Password",
//             fieldType: "password", //input number text
//           },
//           {
//             key: 113,
//             label: "Require a Password confirmation",
//             fieldType: "checkbox", //input number text
//           },
//         ],
//       },
//     ],
//   },

//   {
//     id: 2,
//     type: "Soap",
//     subTypes: [
//       {
//         id: 21,
//         name: "Go to Next Page",
//       },

//       {
//         id: 22,
//         name: "Go to Previous Page",
//       },
//       {
//         id: 23,
//         name: "Terminate the Workflow",
//       },
//     ],
//   },
// ];

// const ADDED_ACTIONS = [];

// const ApiHome = (props) => {
//   const [actionTypes, setActionTypes] = useState(ACTION_TYPES);
//   const [selectedActionType, setSelectedActionType] = useState({});
//   const [addedActions, setAddedActions] = useState(ADDED_ACTIONS);
//   const [showActionModal, setShowActionModal] = useState(false);
//   const [actionModal, setActionModal] = useState(false);

//   const closeActionModalContent = () => {
//     setActionModal(() => false);
//   };

//   const toggleActionModal = () => {
//     setActionModal(!actionModal);
//   };

//   if (actionModal) {
//     document.body.classList.add("active-modal");
//   } else {
//     document.body.classList.remove("active-modal");
//   }

//   const openActionModal = (selectedActionType) => () => {
//     console.log(selectedActionType);
//     setSelectedActionType(() => selectedActionType);
//     setAddedActions((prevAddedActions) => {
//       return [selectedActionType, ...prevAddedActions];
//     });
//     setShowActionModal(true);
//   };

//   const onActionClick = (selectedActionType) => {
//     setSelectedActionType(() => selectedActionType);
//     onChangeConfigurationPopup(true);
//   };
//   const onChangeConfigurationPopup = (show) => {
//     setShowActionModal(() => show);
//     console.log(showActionModal);
//   };

//   return (
//     <>
//       <div className="action-flex">
//         <button onClick={toggleActionModal}>+ New integration</button>{" "}
//         &nbsp;&nbsp;&nbsp;
//         {actionModal && (
//           <div className="action-modal">
//             <div onClick={toggleActionModal}></div>
//             <div className="action-modal-content"></div>
//           </div>
//         )}
//       </div>
//       {actionModal && (
//         <div className="action-modal">
//           <div onClick={toggleActionModal} className="overlay"></div>
//           <div
//             className="action-modal-content"
//             onClick={closeActionModalContent}
//           >
//             <ul className="action-menu">
//               {actionTypes.map((actionType) => (
//                 <div className="dropdown" key={actionType.id}>
//                   <div className="ele1">
//                     {actionType.type}
//                     {actionType.subTypes && (
//                           <ul className="dropdown-content">
//                         {actionType.subTypes.map((subType) => (
//                           <li
//                             key={subType.id}
//                             onClick={openActionModal(subType)}
//                           >
//                             {subType.name}
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//       {showActionModal && (
//         <ApiConfiguration
//           onChangeConfigurationPopup={onChangeConfigurationPopup}
//           selectedActionType={selectedActionType}
//         />
//       )}
//     </>
//   );
// };

// export default ApiHome;

import React, { useState } from "react";

function ApiHome() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      {/* <button onClick={handleClick}>Open Modal</button>
      {showModal && <Modal />} */}
    </>
  );
}

export default ApiHome;
