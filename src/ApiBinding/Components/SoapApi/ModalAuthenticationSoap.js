import React, { useState } from "react";
import "./ModalAuthenticationSoap.css";

const ModalAuthenticationSoap = (props) => {
  const [selectedSAuthentication, setSelectedSAuthentication] =
    useState("None");
  const [showSBasic, setShowSBasic] = useState(false);
  const [susername, setSUsername] = useState("");
  const [spassword, setSPassword] = useState("");

  const formDataModalAuthentication = {
    showSBasic,
    susername,
    spassword,
  };

  const resetState = () => {
    setShowSBasic(true);
    setSUsername("");
    setSPassword("");
  };

  const handleSubmitRest = (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    console.log(JSON.stringify(formDataModalAuthentication));
    props.onAddModalAuthenticationRest(formDataModalAuthentication);
    props.toCloseRest();
  };

  const validateForm = () => {
    // Check if the required fields are filled in
    if (selectedSAuthentication === "Basic") {
      if (!showSBasic || !susername || !spassword) {
        alert("Please fill in all required fields");
        return false;
      }
    }

    return true;
  };

  const handleChange = (event) => {
    setSelectedSAuthentication(event.target.value);
    setShowSBasic(event.target.value === "Basic");
  };

  const handleCancelRest = () => {
    props.toCloseRest(); // Close the modal when "Cancel" button is clicked
  };

  return (
    <div className="modalAuth">
      <div className="modal-contentAuth">
        <form onSubmit={handleSubmitRest}>
          <div>
            <label htmlFor="dropdown">Authentication:</label>
            <select
              id="dropdown"
              value={selectedSAuthentication}
              onChange={handleChange}
            >
              <option value="None">None</option>
              <option value="Basic">Basic</option>
            </select>
          </div>

          {showSBasic && (
            <div>
              <label htmlFor="susername">Username:</label>
              <input
                type="text"
                id="susername"
                name="susername"
                value={susername}
                onChange={(event) => setSUsername(event.target.value)}
              />
              <br />
              <label htmlFor="spassword">Password:</label>
              <input
                type="spassword"
                id="spassword"
                name="spassword"
                value={spassword}
                onChange={(event) => setSPassword(event.target.value)}
              />
            </div>
          )}
          <br />
          <div className="modal-buttons">
            <button type="submit" className="btn_ok" onClick={handleSubmitRest}>
              OK
            </button>
            <button
              type="button"
              className="btn_cancel"
              onClick={handleCancelRest}
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
