import React, { useState } from "react";
import "./ModalAuthentication.css";

function ModalAuth({ closeModal }) {
  const [selectedAuthentication, setSelectedAuthentication] =
    useState("option1");
  const [application, setApplication] = useState("");
  const [showBasic, setShowBasic] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      application,
      username,
      password,
    };
    const formDataJson = JSON.stringify(formData);
    console.log(formDataJson);
    closeModal(); // Close the modal after form submission
  };

  const handleChange = (event) => {
    setSelectedAuthentication(event.target.value);
    setShowBasic(event.target.value === "option2");
  };

  const handleCancel = () => {
    closeModal(); // Close the modal when "Cancel" button is clicked
  };

  return (
    <div className="modalAuth">
      <div className="modal-contentAuth">
        <form onSubmit={handleSubmit}>
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
            <button type="submit" className="btn_ok">
              OK
            </button>
            <button type="button" className="btn_cancel" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalAuth;
