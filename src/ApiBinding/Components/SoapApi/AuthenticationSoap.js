import React, { useState } from "react";
import "./AuthenticationSoap.css";
import ModalAuthenticationSoap from "../SoapApi/ModalAuthenticationSoap";
import zIndex from "@mui/material/styles/zIndex";

const AuthenticationSoap = (props) => {
  const [selectedAuthenticationSoap, setSelectedAuthenticationSoap] =
    useState("option1");
  const [showBasicSoap, setShowBasicSoap] = useState(false);
  const [showAuthSoap, setShowAuthSoap] = useState(false);
  const [usernameSoap, setUsernameSoap] = useState("");
  const [passwordSoap, setPasswordSoap] = useState("");
  const [isModalOpenSoap, setIsModalOpenSoap] = useState(props.isModalOpen);
  const [authenticationSoap, setAuthenticationSoap] = useState({});

  const formDataSoap = {
    selectedAuthenticationSoap,
    usernameSoap,
    passwordSoap,
  };

  const resetState = () => {
    setSelectedAuthenticationSoap("option1");
    setUsernameSoap("");
    setPasswordSoap("");
  };

  const handleSubmitSoap = async (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formDataSoap));
    props.onHandleAuthentication(formDataSoap);
    closeModalSoap();
  };

  const handleChangeSoap = (event) => {
    setSelectedAuthenticationSoap(event.target.value);
    setShowBasicSoap(event.target.value === "option2");
    setShowAuthSoap(event.target.value === "option3");
  };

  const handleAuthenticationClickSoap = () => {
    setIsModalOpenSoap(true);
  };

  const closeModalSoap = () => {
    setIsModalOpenSoap(false);
  };

  const handleModalAuthenticationSoap = (parameter) => {
    setAuthenticationSoap((prevParameters) => ({
      ...prevParameters,
      ...parameter,
    }));
  };

  return (
    <div>
      <div className="modalAuthSoap">
        <div onClick={closeModalSoap}></div>
        <div className="modal-contentAuthSoap">
          <ModalAuthenticationSoap
            closeModalSoap={closeModalSoap}
            onAddModalAuthentication={handleModalAuthenticationSoap}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthenticationSoap;
