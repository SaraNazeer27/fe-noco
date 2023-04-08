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

import React from "react";
import "./EventList.css";

const EventList = (props) => {
  const handleEventClick = (event) => {
    props.onEventClick(event);
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
            <div className="token-boxSaved">{addedEvent.name.toString()}</div>
          </div>
        ))}
    </div>
  );
};

export default EventList;
