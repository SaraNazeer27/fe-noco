import React, { useState } from "react";
import "./ModalAuthentication.css";

const ModalAuthentication = (props) => {
  const [selectedAuthentication, setSelectedAuthentication] = useState("None");
  const [showBasic, setShowBasic] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formDataModalAuthentication = {
    showBasic,
    username,
    password,
  };

  const resetState = () => {
    setShowBasic(true);
    setUsername("");
    setPassword("");
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
    if (selectedAuthentication === "Basic") {
      if (!showBasic || !username || !password) {
        alert("Please fill in all required fields");
        return false;
      }
    }

    return true;
  };

  const handleChange = (event) => {
    setSelectedAuthentication(event.target.value);
    setShowBasic(event.target.value === "Basic");
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
              value={selectedAuthentication}
              onChange={handleChange}
            >
              <option value="None">None</option>
              <option value="Basic">Basic</option>
            </select>
          </div>

          {showBasic && (
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <br />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
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

export default ModalAuthentication;
