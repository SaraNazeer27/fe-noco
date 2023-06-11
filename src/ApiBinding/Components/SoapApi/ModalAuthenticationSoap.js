import React, { useState } from "react";
import "./ModalAuthenticationSoap.css";

function ModalAuthSoap({ closeModalSoap }) {
  const [selectedAuthenticationSoap, setSelectedAuthenticationSoap] =
    useState("option1");
  const [applicationSoap, setApplicationSoap] = useState("");
  const [showBasicSoap, setShowBasicSoap] = useState(false);
  const [usernameSoap, setUsernameSoap] = useState("");
  const [passwordSoap, setPasswordSoap] = useState("");

  const handleSubmitSoap = (event) => {
    event.preventDefault();
    const formDataSoap = {
      application,
      username,
      password,
    };
    const formDataJsonSoap = JSON.stringify(formDataSoap);
    console.log(formDataJsonSoap);
    closeModalSoap(); // Close the modal after form submission
  };

  const handleChangeSoap = (event) => {
    setSelectedAuthenticationSoap(event.target.value);
    setShowBasicSoap(event.target.value === "option2");
  };

  const handleCancelSoap = () => {
    closeModalSoap(); // Close the modal when "Cancel" button is clicked
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
            <button type="submit" className="btn_okSoap">
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
}

export default ModalAuthSoap;
