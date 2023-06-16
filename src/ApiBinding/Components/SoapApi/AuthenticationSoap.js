import React, { useState } from "react";
import "./AuthenticationSoap.css";
import ModalAuthenticationSoap from "../SoapApi/ModalAuthenticationSoap";

const AuthenticationSoap = (props) => {
  const [selectedAuthenticationSoap, setSelectedAuthenticationSoap] =
    useState("None");

  const [showBasicSoap, setShowBasicSoap] = useState(false);
  const [showAuthSoap, setShowAuthSoap] = useState(false);
  const [usernameSoap, setUsernameSoap] = useState("");
  const [passwordSoap, setPasswordSoap] = useState("");
  const [isModalOpenSoap, setIsModalOpenSoap] = useState(props.isModalOpen);
  const [authenticationSoap, setAuthenticationSoap] = useState({});

  const formDataAuthentication = {
    selectedAuthenticationSoap,
    usernameSoap,
    passwordSoap,
  };

  const resetState = () => {
    setSelectedAuthenticationSoap("None");
    setUsernameSoap("");
    setPasswordSoap("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formDataAuthentication));
    props.onHandleAddAuthenticationRest(formDataAuthentication);
    closeModalRest();
  };

  const handleChange = (event) => {
    setSelectedAuthenticationSoap(event.target.value);
    setShowBasicSoap(event.target.value === "None");
    setShowAuthSoap(event.target.value === "Basic");
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
