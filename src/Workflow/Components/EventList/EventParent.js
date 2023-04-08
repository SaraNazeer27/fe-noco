import React, { useState } from "react";
import EventList from "./EventList";

const EventParent = () => {
  const [subtype, setSubtype] = useState({ name: "" });

  const handleEventClick = (eventName) => {
    setSubtype({ name: eventName });
  };

  // Sample addedEvents array
  const addedEvents = [
    { id: 1, name: "Event 1" },
    { id: 2, name: "Event 2" },
    { id: 3, name: "Event 3" },
  ];

  return (
    <>
      <EventList addedEvents={addedEvents} onEventClick={handleEventClick} />
      <div className="eventConfiguration">
        <h2>Event Configuration</h2>
        <p>Subtype Name: {subtype.name}</p>
      </div>
    </>
  );
};

export default EventParent;
