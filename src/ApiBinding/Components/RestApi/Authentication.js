import React, { useState } from "react";
import "./Authentication.css";
import ModalAuthentication from "./ModalAuthentication";

const Authentication = (props) => {
  const [selectedAuthentication, setSelectedAuthentication] = useState("None");
  const [showBasic, setShowBasic] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(props.isModalOpen);
  const [authenticationRest, setAuthenticationRest] = useState({});

  const formDataAuthentication = {
    selectedAuthentication,
    username,
    password,
  };

  const resetState = () => {
    setSelectedAuthentication("None");
    setUsername("");
    setPassword("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formDataAuthentication));
    props.onHandleAddAuthenticationRest(formDataAuthentication);
    closeModalRest();
  };

  const handleChange = (event) => {
    setSelectedAuthentication(event.target.value);
    setShowBasic(event.target.value === "None");
  };

  const handleAuthenticationClick = () => {
    setIsModalOpen(true);
  };

  const closeModalRest = () => {
    setIsModalOpen(false);
  };

  const handleModalAuthenticationRest = (parameter) => {
    setAuthenticationRest((prevParameters) => ({
      ...prevParameters,
      ...parameter,
    }));
  };

  return (
    isModalOpen && (
      <div>
        <div className="modalAuth">
          <div onClick={closeModalRest}></div>
          <div className="modal-contentAuth">
            <ModalAuthentication
              closeModalRest={closeModalRest}
              onAddModalAuthenticationRest={handleModalAuthenticationRest}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Authentication;
