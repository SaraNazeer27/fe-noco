import React, { useState } from "react";
import "./Authentication.css";
import ModalAuthentication from "./ModalAuthentication";

const Authentication = (props) => {
  const [selectedAuthentication, setSelectedAuthentication] =
    useState("option1");
  const [application, setApplication] = useState("");
  const [showBasic, setShowBasic] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(props.isModalOpen);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      selectedAuthentication,
      application,
      username,
      password,
    };
    const formDataJson = JSON.stringify(formData);
    console.log(formDataJson);
    closeModal();
  };

  const handleChange = (event) => {
    setSelectedAuthentication(event.target.value);
    setShowBasic(event.target.value === "option2");
    setShowAuth(event.target.value === "option3");
  };

  const handleAuthenticationClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    props.toClose(false);
  };

  return (
    <div>
      <div className="modalAuth">
        <div onClick={closeModal}></div>
        <div className="modal-contentAuth">
          <ModalAuthentication closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
