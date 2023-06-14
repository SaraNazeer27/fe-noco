import React, { useState } from "react";
import "./ModalAuthentication.css";

const ModalAuthentication = (props) => {
  const [selectedAuthentication, setSelectedAuthentication] =
    useState("option1");
  const [showBasic, setShowBasic] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formData = {
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

    console.log(JSON.stringify(formData));
    props.onAddModalAuthenticationRest(formData);
    props.toCloseRest();
  };

  const validateForm = () => {
    // Check if the required fields are filled in
    if (selectedAuthentication === "option2") {
      if (!showBasic || !username || !password) {
        alert("Please fill in all required fields");
        return false;
      }
    }

    return true;
  };

  const handleChange = (event) => {
    setSelectedAuthentication(event.target.value);
    setShowBasic(event.target.value === "option2");
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
              <option value="option1">None</option>
              <option value="option2">Basic</option>
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
