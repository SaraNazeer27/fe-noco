import React from "react";
import "./EventDetailList.css";

const EventDetailList = (props) => {
  console.log(props.addedActions);
  const handleActionClick = (addedAction) => {
    props.onActionClick(addedAction);
  };

  return (
    <>
      {props.addedActions &&
        props.addedActions.map((addedAction) => (
          <div
            className="actionBoxSaved"
            onClick={() => handleActionClick(addedAction)}
          >
            {addedAction.name}
          </div>
        ))}
    </>
  );
};

export default EventDetailList;
