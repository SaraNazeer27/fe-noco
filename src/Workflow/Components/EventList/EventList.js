// import React from "react";
// import "./EventList.css";

// const EventList = (props) => {
//   return (
//     <div className="token-flex-container">
//       {props.addedEvents &&
//         props.addedEvents.map((addedEvent) => (
//           <div className="token-flex" key={addedEvent.id}>
//             <div className="token-box">{addedEvent.name.toString()}</div>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default EventList;

// Correct Code
import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import "./EventList.css";
import Pop from "../NewComponents/AddEvent/Pop";

const EventList = (props) => {
  const [modal, setModal] = useState(false);
  const handleEventClick = (addedEvent) => {
    props.onEventClick(addedEvent);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="token-flex-container">
      {props.addedEvents &&
        props.addedEvents.map((addedEvent) => (
          <div
            className="token-flex"
            key={addedEvent.id}
            onClick={() => handleEventClick(addedEvent)}
          >
            <div className="token-boxSaved position-relative">
              <h3>When</h3>
              {addedEvent.name.toString()}
              <FaRegTrashAlt className="faReg" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default EventList;
