import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import "./EventList.css";

const EventList = (props) => {
  const handleEventClick = (addedEvent) => {
    props.onEventClick(addedEvent);
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
