import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import "./EventDetailList.css";

const EventDetailList = (props) => {
  const handleEventClick = (addedAction) => {
    props.onActionClick(addedAction);
  };

  return (
    <div className="actionContainer">
      {props.addedActions &&
        props.addedActions.map((addedAction) => (
          <div
            className="action-flex"
            key={addedAction.id}
            onClick={() => handleEventClick(addedAction)}
          >
            <div className="actionSaved position-relative">
              <h3>When</h3>
              {addedAction.name.toString()}
              <FaRegTrashAlt className="faReg" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default EventDetailList;
