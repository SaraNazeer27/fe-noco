import React, { useEffect, useState } from "react";
import "./Pop.css";
import EventConfiguration from "../../EventConfiguration/EventConfiguration";
import EventList from "../../EventList/EventList";
import EventDetailBar from "../../EventDetailBar/EventDetailBar";
import EventDetailConfiguration from "../../EventDetailConfiguration/EventDetailConfiguration";

const ADDED_EVENTS = [];

export default function Pop({ items }) {
  const [modal, setModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [eventTypes, setEventTypes] = useState([]);
  const [selectedType, setSelectedType] = useState({});
  const [addedEvents, setAddedEvents] = useState(ADDED_EVENTS);
  const [eventDetail, setEventDetail] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchEventTypes();
  }, []);

  const fetchEventTypes = () => {
    fetch("/api/eventtypes")
      .then((response) => response.json())
      .then((data) => {
        setEventTypes(data);
      })
      .catch((error) => {
        console.error("Error retrieving event types:", error);
      });
  };

  const closeModalContent = () => {
    setModal(false);
  };

  const toggleModal = () => {
    setShowModal(false);
    setModal((prevState) => !prevState);
  };

  const openModal = (selectedType) => () => {
    setSelectedType(selectedType);
    setAddedEvents((prevAddedEvents) => [selectedType, ...prevAddedEvents]);
    setShowModal(true);
  };

  useEffect(() => {
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [modal]);

  const onEventClick = (selectedType) => {
    setSelectedType(selectedType);
    setEventDetail(true);
    onChangeConfigurationPopup(true);
  };

  const onChangeConfigurationPopup = (show) => {
    setShowModal(show);
  };

  return (
    <>
      <div className="token-flex">
        {addedEvents.length > 0 && (
          <EventList onEventClick={onEventClick} addedEvents={addedEvents} />
        )}
        <div className="token-box" onClick={toggleModal}>
          click to add event..
        </div>{" "}
        &nbsp;&nbsp;&nbsp;
        {modal && (
          <div className="modal">
            <div onClick={toggleModal}></div>
            <div className="modal-content"></div>
          </div>
        )}
      </div>
      {eventDetail && <EventDetailBar />}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content" onClick={closeModalContent}>
            <ul>
              {eventTypes.map((eventType) => (
                <div className="dropdown" key={eventType._id}>
                  <div className="ele1">
                    {eventType.type}
                    {Array.isArray(eventType.subTypes) &&
                      eventType.subTypes.length > 0 && (
                        <ul className="dropdown-content">
                          {eventType.subTypes.map((subType) => (
                            <li
                              key={`${eventType._id}-${subType.id}`}
                              onClick={openModal(subType)}
                            >
                              {subType.name}
                            </li>
                          ))}
                        </ul>
                      )}
                    {!Array.isArray(eventType.subTypes) &&
                      eventType.subTypes && (
                        <ul className="dropdown-content">
                          <li
                            key={eventType.subTypes.id}
                            onClick={openModal(eventType.subTypes)}
                          >
                            {eventType.subTypes.name}
                          </li>
                        </ul>
                      )}
                  </div>
                </div>
              ))}
            </ul>
            <></>
          </div>
        </div>
      )}

      {showModal && (
        <EventConfiguration
          onChangeConfigurationPopup={onChangeConfigurationPopup}
          selectedType={selectedType}
        />
      )}
    </>
  );
}
