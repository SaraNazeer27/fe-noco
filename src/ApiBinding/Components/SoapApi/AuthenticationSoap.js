import React, { useState } from "react";
import "./AuthenticationSoap.css";
import ModalAuthenticationSoap from "../SoapApi/ModalAuthenticationSoap";

const AuthenticationSoap = (props) => {
  const [selectedAuthentication, setSelectedAuthentication] = useState("None");
  const [showBasic, setShowBasic] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpenSoap, setIsModalOpenSoap] = useState(props.isModalOpen);
  const [authenticationSoap, setAuthenticationSoap] = useState({});

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
    setIsModalOpenSoap(true);
  };

  const closeModalRest = () => {
    setIsModalOpenSoap(false);
  };

  const handleModalAuthenticationRest = (parameter) => {
    setAuthenticationSoap((prevParameters) => ({
      ...prevParameters,
      ...parameter,
    }));
  };

  return (
    isModalOpenSoap && (
      <div>
        <div className="modalAuth">
          <div onClick={closeModalRest}></div>
          <div className="modal-contentAuth">
            <ModalAuthenticationSoap
              closeModalRest={closeModalRest}
              onAddModalAuthenticationRest={handleModalAuthenticationRest}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default AuthenticationSoap;
