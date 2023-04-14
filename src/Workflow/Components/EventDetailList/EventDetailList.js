import React from "react";
import "./EventDetailList.css";

const EventDetailList = (props) => {
  console.log(props.addedActions);
  const handleActionClick = (addedActions) => {
    props.onEventClick(addedActions);
  };

  return (
    <>
      {props.addedActions &&
        props.addedActions.map((addedAction) => (
          <div className="actionBoxSaved">{addedAction.name}</div>
        ))}
    </>
  );
};

export default EventDetailList;
