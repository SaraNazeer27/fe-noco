import React, { useState } from "react";
import "./ModalAuthenticationSoap.css";

const ModalAuthenticationSoap = (props) => {
  const [selectedAuthenticationSoap, setSelectedAuthenticationSoap] =
    useState("option1");
  const [showBasicSoap, setShowBasicSoap] = useState(true);
  const [usernameSoap, setUsernameSoap] = useState("");
  const [passwordSoap, setPasswordSoap] = useState("");

  const formDataSoap = {
    showBasicSoap,
    usernameSoap,
    passwordSoap,
  };

  const handleSubmitSoap = (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    console.log(JSON.stringify(formDataSoap));
    props.onAddModalAuthentication(formDataSoap);
    props.toClose();
  };

  const validateForm = () => {
    // Check if the required fields are filled in
    if (selectedAuthenticationSoap === "option2") {
      if (!showBasicSoap || !usernameSoap || !passwordSoap) {
        alert("Please fill in all required fields");
        return false;
      }
    }

    return true;
  };

  const handleChangeSoap = (event) => {
    setSelectedAuthenticationSoap(event.target.value);
    setShowBasicSoap(event.target.value === "option2");
  };

  const handleCancelSoap = () => {
    // closeModalSoap(); // Close the modal when "Cancel" button is clicked
    props.toClose();
  };

  return (
    <div className="modalAuthSoap">
      <div className="modal-contentAuthSoap">
        <form onSubmit={handleSubmitSoap}>
          <div>
            <label htmlFor="dropdownSoap">Authentication:</label>
            <select
              id="dropdownSoap"
              value={selectedAuthenticationSoap}
              onChange={handleChangeSoap}
            >
              <option value="option1">None</option>
              <option value="option2">Basic</option>
            </select>
          </div>

          {showBasicSoap && (
            <div>
              <label htmlFor="usernameSoap">Username:</label>
              <input
                type="text"
                id="usernameSoap"
                name="usernameSoap"
                value={usernameSoap}
                onChange={(event) => setUsernameSoap(event.target.value)}
              />
              <br />
              <label htmlFor="passwordSoap">Password:</label>
              <input
                type="password"
                id="passwordSoap"
                name="passwordSoap"
                value={passwordSoap}
                onChange={(event) => setPasswordSoap(event.target.value)}
              />
            </div>
          )}
          <br />
          <div className="modal-buttonsSoap">
            <button
              type="submit"
              className="btn_okSoap"
              onClick={handleSubmitSoap}
            >
              OK
            </button>
            <button
              type="button"
              className="btn_cancelSoap"
              onClick={handleCancelSoap}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAuthenticationSoap;
