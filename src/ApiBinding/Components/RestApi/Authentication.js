import React, { useState } from "react";
import "./Authentication.css";
import ModalAuthentication from "./ModalAuthentication";

const Authentication = (props) => {
  const [selectedAuthentication, setSelectedAuthentication] =
    useState("option1");

  const [showBasic, setShowBasic] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(props.isModalOpen);
  const [authenticationRest, setAuthenticationRest] = useState({});

  const formData = {
    selectedAuthentication,
    username,
    password,
  };

  const resetState = () => {
    setSelectedAuthentication("option1");
    setUsername("");
    setPassword("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formData));
    props.onHandleAddAuthenticationRest(formData);
    closeModalRest();
  };

  const handleChange = (event) => {
    setSelectedAuthentication(event.target.value);
    setShowBasic(event.target.value === "option2");
    setShowAuth(event.target.value === "option3");
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
