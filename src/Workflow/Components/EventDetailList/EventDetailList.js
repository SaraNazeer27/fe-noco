import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import "./EventDetailList.css";

const EventDetailList = (props) => {
  const handleActionClick = (addedActions) => {
    props.onEventClick(addedActions);
  };

  // const handleActionClick = (addedAction) => {
  //   // add clicked action to the array
  //   setClickedActions([...clickedActions, addedAction]);
  //   props.ACTION_TYPES[addedAction.name] = true;

  //   // pass clicked action to the parent component
  //   props.onActionClick(addedAction);
  //   console.log(handleActionClick);
  // };

  return <div>dfsdfsfsddf</div>;
};

export default EventDetailList;
