import React, { useState } from "react";
import "./AuthenticationSoap.css";
import ModalAuthenticationSoap from "../SoapApi/ModalAuthenticationSoap";

const AuthenticationSoap = (props) => {
  const [selectedAuthenticationSoap, setSelectedAuthenticationSoap] =
    useState("option1");
  const [applicationSoap, setApplicationSoap] = useState("");
  const [showBasicSoap, setShowBasicSoap] = useState(false);
  const [showAuthSoap, setShowAuthSoap] = useState(false);
  const [usernameSoap, setUsernameSoap] = useState("");
  const [passwordSoap, setPasswordSoap] = useState("");
  const [isModalOpenSoap, setIsModalOpenSoap] = useState(props.isModalOpenSoap);

  const handleSubmitSoap = (event) => {
    event.preventDefault();
    const formDataSoap = {
      selectedAuthenticationSoap,
      applicationSoap,
      usernameSoap,
      passwordSoap,
    };
    const formDataJsonSoap = JSON.stringify(formDataSoap);
    console.log(formDataJsonSoap);
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
    props.toCloseSoap(false);
  };

  return (
    <div>
      <div className="modalAuthSoap">
        <div onClick={closeModalSoap}></div>
        <div className="modal-contentAuthSoap">
          <ModalAuthenticationSoap closeModal={closeModalSoap} />
        </div>
      </div>
    </div>
  );
};

export default AuthenticationSoap;
