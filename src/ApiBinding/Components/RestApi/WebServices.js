import React, { useState } from "react";
import "./WebServices.css";
import RequestParameter from "../RestApi/RequestParameter";
import ResponseParameter from "../RestApi/ResponseParameter";

const WebServices = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [fname, setFname] = useState("");
  const [webURI, setWebURI] = useState("");
  const [code, setCode] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [pack, setPack] = useState("");
  const [showRequestContent, setShowRequestContent] = useState(false);
  const [showResponseContent, setShowResponseContent] = useState(false);
  const [showResponseParameter, setShowResponseParameter] = useState(false);
  const [showRequestParameter, setShowRequestParameter] = useState(false);
  const [showRequestAddParameter, setShowRequestAddParameter] = useState(false);
  const [showResponseAddParameter, setShowResponseAddParameter] =
    useState(false);
  const [showModal, setShowModal] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false); // New state variable for request modal

  const handleRequestClick = () => {
    setShowRequestContent(!showRequestContent);
    setShowRequestAddParameter(false);
  };

  const handleResponseClick = () => {
    setShowResponseContent(!showResponseContent);
    setShowResponseAddParameter(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      selectedOption,
      fname,
      webURI,
      code,
      quantity,
      description,
      type,
      pack,
    };
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
    // Add your logic here to save the data
    // For example, you can make an API call or update a global state
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAddRequestParameters = () => {
    setShowRequestAddParameter(!showRequestAddParameter);
    setShowResponseAddParameter(false);
  };

  const handleAddResponseParameters = () => {
    setShowResponseAddParameter(!showResponseAddParameter);
    setShowRequestAddParameter(false);
  };

  const handleCloseClick = () => {
    setShowModal(false);
  };

  const handleTestRequestClick = () => {
    debugger;
    setShowPopup(() => true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleAddRequestModal = () => {
    setShowRequestModal(true);
  };

  return (
    <>
      {showModal && (
        <div className="web">
          <div className="container0">
            <button className="OK-web" type="submit">
              OK
            </button>
            <button
              className="cancel-web"
              onClick={handleCloseClick}
              type="button"
            >
              Cancel
            </button>
            <button
              className="testRequest"
              onClick={handleTestRequestClick}
              type="button"
            >
              Send Test Request
            </button>
          </div>
          <div className="container1">
            <form className="form1" onSubmit={handleSubmit}>
              <label htmlFor="fname">Name:</label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={fname}
                onChange={(event) => setFname(event.target.value)}
              />
              <br />
            </form>

            <form className="form2" onSubmit={handleSubmit}>
              <label htmlFor="dropdownModal">Request type:</label>
              <select
                id="dropdownModal"
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="option1">GET</option>
                <option value="option2">POST</option>
                <option value="option3">PUT</option>
                <option value="option4">DELETE</option>
              </select>
              <br />
            </form>

            <form className="form3" onSubmit={handleSubmit}>
              <label htmlFor="code">Code:</label>
              <input
                type="text"
                id="code"
                name="code"
                value={code}
                onChange={(event) => setCode(event.target.value)}
              />
              <br />
            </form>

            <form className="form4" onSubmit={handleSubmit}>
              <label htmlFor="dropdownType">Content type:</label>
              <select
                id="dropdownType"
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="option1">JSON</option>
                <option value="option2">XML</option>
              </select>
              <br />
            </form>

            <form className="form5" onSubmit={handleSubmit}>
              <label htmlFor="webURL">Method Address:</label>
              <input
                type="text"
                id="webURI"
                name="webURI"
                value={webURI}
                onChange={(event) => setWebURI(event.target.value)}
              />
              <br />
            </form>

            <form className="form6" onSubmit={handleSubmit}>
              <label htmlFor="quantity">Response timeout, ms:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
              />
              <br />
            </form>

            <form className="form7" onSubmit={handleSubmit}>
              <label htmlFor="webURL">Method Address:</label>
              <input
                type="text"
                id="webURI"
                name="webURI"
                value={webURI}
                onChange={(event) => setDescription(event.target.value)}
              />
              <br />
            </form>

            <form className="form8" onSubmit={handleSubmit}>
              <label htmlFor="authentication">Use authentication</label>
              <input
                type="checkbox"
                id="authentication"
                name="authentication"
                value="authentication"
              />
              <br />
            </form>

            <div className="container2">
              <div className="parameter-container">
                <div className="request-parameters">
                  <button className="request" onClick={handleRequestClick}>
                    Request Parameters
                  </button>
                  <hr></hr>
                </div>
                <div className="response-parameters">
                  <button className="response" onClick={handleResponseClick}>
                    Response Parameters
                  </button>
                  <hr></hr>
                </div>
              </div>

              {showRequestContent && (
                <>
                  <button
                    className="reqAdd"
                    onClick={handleAddRequestParameters}
                  >
                    Add Request Parameters
                  </button>
                  {showRequestAddParameter && (
                    <div className="request-modal">
                      <div className="request-modal-content">
                        <RequestParameter />
                      </div>
                    </div>
                  )}
                </>
              )}
              {showResponseContent && (
                <div>
                  <button
                    className="resAdd"
                    onClick={handleAddResponseParameters}
                  >
                    Add Response Parameters
                  </button>
                  {showResponseAddParameter && (
                    <div className="request-modal">
                      <div className="request-modal-content">
                        <ResponseParameter />
                      </div>
                    </div>
                  )}
                </div>
              )}
              {showPopup && (
                <div className="popup">
                  <div className="popup-content">
                    The web service was modified. You must save the web service
                    to run it up-to-date. Save now?
                    <br />
                    <div className="button-container">
                      <button className="yes">Yes</button>
                      <button className="no" onClick={handlePopupClose}>
                        No
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WebServices;
