import React, { useState, useEffect } from "react";
import "./WebServices.css";
import RequestParameter from "../RestApi/RequestParameter";
import ResponseParameter from "../RestApi/ResponseParameter";

const WebServices = (props) => {
  const [selectedOptionRestType, setSelectedOptionRestType] =
    useState("option1");
  const [selectedOptionRestContent, setSelectedOptionRestContent] =
    useState("option1");
  const [fnameRest, setFnameRest] = useState("");
  const [webURIRestMethod, setWebURIRestMethod] = useState("");
  const [webURIRestComplete, setWebURIRestComplete] = useState("");
  const [codeRest, setCodeRest] = useState("");
  const [quantityRest, setQuantityRest] = useState("");
  const [descriptionRest, setDescriptionRest] = useState("");
  const [typeRest, setTypeRest] = useState("");
  const [packRest, setPackRest] = useState("");
  const [showRequestContentRest, setShowRequestContentRest] = useState(false);
  const [showResponseContentRest, setShowResponseContentRest] = useState(false);
  const [showAddParameterRest, setShowAddParameterRest] = useState(false);
  const [showModalRest, setShowModalRest] = useState(true);
  const [showPopupRest, setShowPopupRest] = useState(false);
  const [showRequestModalRest, setShowRequestModalRest] = useState(false); // New state variable for request modal
  const [parameterTypeRest, setParameterTypeRest] = useState(""); // New state variable to track parameter type (request or response)
  const [requestParametersRest, setRequestParametersRest] = useState([]);
  const [responseParametersRest, setResponseParametersRest] = useState([]);

  const formData = {
    selectedOptionRestContent,
    selectedOptionRestType,
    fnameRest,
    webURIRestMethod,
    webURIRestComplete,
    codeRest,
    quantityRest,
    descriptionRest,
    typeRest,
    packRest,
    requestParametersRest,
    responseParametersRest,
  };

  const resetState = () => {
    setSelectedOptionRestType("option1");
    setSelectedOptionRestContent("option1");
    setFnameRest("");
    setWebURIRestComplete("");
    setWebURIRestMethod("");
    setCodeRest("");
    setQuantityRest("");
    setDescriptionRest("");
    setTypeRest("REST");
    setPackRest("");
    setShowRequestContentRest(false);
    setShowResponseContentRest(false);
    setShowModalRest(true);
  };

  const handleRequestClick = () => {
    setShowRequestContentRest(!showRequestContentRest);
    setShowAddParameterRest(false);
  };

  const handleResponseClick = () => {
    setShowResponseContentRest(!showResponseContentRest);
    setShowAddParameterRest(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate the form data
    // if (!validateForm()) {
    //   return;
    // }

    props.onHandleAddWebService(formData);
  };

  const validateForm = () => {
    // Check if the required fields are filled in
    if (!fnameRest || !codeRest || !quantityRest || !webURIRestComplete) {
      alert("Please fill in all required fields");
      return false;
    }
  };

  const handleChange = (event) => {
    setSelectedOptionRestContent(event.target.value);
    setSelectedOptionRestType(event.target.value);
  };

  const handleAddRestParameter = (parameterType) => {
    setParameterTypeRest(parameterType);
    setShowAddParameterRest(true);
  };

  const handleCloseClick = () => {
    setShowModalRest(false);
  };

  const handleTestRequestClick = () => {
    setShowPopupRest(() => true);
  };

  const handlePopupClose = () => {
    setShowPopupRest(false);
  };

  const handleAddRequestModal = () => {
    setShowRequestModalRest(true);
  };

  const closeHandlerParameter = () => {
    setShowAddParameterRest(() => false);
  };

  const handleRequestParameterRest = (parameter) => {
    setRequestParametersRest((prevParameters) => [
      ...prevParameters,
      parameter,
    ]);
    setShowAddParameterRest(false);
  };

  const handleResponseParameterRest = (parameter) => {
    setResponseParametersRest((prevParameters) => [
      ...prevParameters,
      parameter,
    ]);
    setShowAddParameterRest(false);
  };

  return (
    <>
      <div>
        {showModalRest && (
          <div className="web">
            <div className="container0">
              <button className="OK-web" type="submit" onClick={handleSubmit}>
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
              <form className="form1">
                <label htmlFor="fname">Name:</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={fnameRest}
                  onChange={(event) => setFnameRest(event.target.value)}
                />
                <br />
              </form>
              <form className="form2">
                <label htmlFor="dropdownModal">Request type:</label>
                <select
                  id="dropdownModal"
                  value={selectedOptionRestType}
                  onChange={handleChange}
                >
                  <option value="option1">GET</option>
                  <option value="option2">POST</option>
                  <option value="option3">PUT</option>
                  <option value="option4">DELETE</option>
                </select>
                <br />
              </form>
              <form className="form3">
                <label htmlFor="code">Code:</label>
                <input
                  type="number"
                  id="code"
                  name="code"
                  value={codeRest}
                  onChange={(event) => setCodeRest(event.target.value)}
                />
                <br />
              </form>
              <form className="form4">
                <label htmlFor="dropdownType">Content type:</label>
                <select
                  id="dropdownType"
                  value={selectedOptionRestContent}
                  onChange={handleChange}
                >
                  <option value="option1">JSON</option>
                  <option value="option2">XML</option>
                </select>
                <br />
              </form>
              <form className="form5">
                <label htmlFor="webURI">Method Address:</label>
                <input
                  type="text"
                  id="webURI"
                  name="webURI"
                  value={webURIRestMethod}
                  onChange={(event) => setWebURIRestMethod(event.target.value)}
                />
                <br />
              </form>
              <form className="form6">
                <label htmlFor="quantity">Response timeout, ms:</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={quantityRest}
                  onChange={(event) => setQuantityRest(event.target.value)}
                />
                <br />
              </form>
              <form className="form7">
                <label htmlFor="webURL">Complete Address:</label>
                <input
                  type="text"
                  id="webURI"
                  name="webURI"
                  value={webURIRestComplete}
                  onChange={(event) =>
                    setWebURIRestComplete(event.target.value)
                  }
                />
                <br />
              </form>
              <div className="form8">
                <label htmlFor="authentication">Use authentication</label>
                <input
                  type="checkbox"
                  id="authentication"
                  name="authentication"
                  value="authentication"
                />
                <br />
              </div>
              )}
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

                {(showRequestContentRest || showResponseContentRest) && (
                  <>
                    <button
                      className="add-parameter"
                      onClick={() =>
                        handleAddRestParameter(
                          showRequestContentRest ? "request" : "response"
                        )
                      }
                    >
                      Add Parameter
                    </button>
                    {showAddParameterRest && (
                      <div className="request-modal">
                        <div className="request-modal-content">
                          {parameterTypeRest === "request" ? (
                            <RequestParameter
                              toClose={closeHandlerParameter}
                              onAdd={handleRequestParameterRest}
                            />
                          ) : (
                            <ResponseParameter
                              toClose={closeHandlerParameter}
                            />
                          )}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {showPopupRest && (
                  <div className="popup">
                    <div className="popup-content">
                      The web service was modified. You must save the web
                      service to run it up-to-date. Save now?
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
      </div>
    </>
  );
};

export default WebServices;
