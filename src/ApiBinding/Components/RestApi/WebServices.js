import React, { useState } from "react";
import "./WebServices.css";
import RequestParameter from "../RestApi/RequestParameter";
import ResponseParameter from "../RestApi/ResponseParameter";

const WebServices = (props) => {
  const [selectedOptionRestType, setSelectedOptionRestType] = useState("GET");
  const [selectedOptionContentType, setSelectedOptionContentType] =
    useState("JSON");
  const [webServiceName, setWebServiceName] = useState("");
  const [methodAddress, setMethodAddress] = useState("");
  const [completeAddress, setCompleteAddress] = useState("");
  const [responseTime, setResponseTime] = useState("");
  const [webServiceDescription, setWebServiceDescription] = useState("");
  const [showRequestContentRest, setShowRequestContentRest] = useState(false);
  const [showResponseContentRest, setShowResponseContentRest] = useState(false);
  const [showAddParameterRest, setShowAddParameterRest] = useState(false);
  const [showModalRest, setShowModalRest] = useState(true);
  const [showPopupRest, setShowPopupRest] = useState(false);
  const [showRequestModalRest, setShowRequestModalRest] = useState(false);
  const [parameterTypeRest, setParameterTypeRest] = useState("");
  const [requestParametersRest, setRequestParametersRest] = useState([]);
  const [responseParametersRest, setResponseParametersRest] = useState([]);
  const [showRequestTable, setShowRequestTable] = useState(false);
  const [showResponseTable, setShowResponseTable] = useState(false);

  const formDataWebServices = {
    selectedOptionContentType,
    selectedOptionRestType,
    webServiceName,
    completeAddress,
    responseTime,
    methodAddress,
    webServiceDescription,
  };

  const resetState = () => {
    setSelectedOptionRestType("GET");
    setSelectedOptionContentType("JSON");
    setWebServiceName("");
    setCompleteAddress("");
    setMethodAddress("");
    setResponseTime("");
    setWebServiceDescription("");
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

  const handleShowRequestTableClick = () => {
    setShowRequestTable((prevState) => !prevState);
  };

  const handleShowResponseTableClick = () => {
    setShowResponseTable((prevState) => !prevState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (!validateForm()) {
    //   return;
    // }
    props.onHandleAddWebService(formDataWebServices);
  };

  // const validateForm = () => {
  //   if (!fnameRest || !codeRest || !quantityRest || !webURIRestComplete) {
  //     alert("Please fill in all required fields");
  //     return false;
  //   }
  //   return true;
  // };

  const handleChange = (event) => {
    setSelectedOptionContentType(event.target.value);
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
    setShowPopupRest(true);
  };

  const handlePopupClose = () => {
    setShowPopupRest(false);
  };

  const handleAddRequestModal = () => {
    setShowRequestModalRest(true);
  };

  const closeHandlerParameter = () => {
    setShowAddParameterRest(false);
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
              <label htmlFor="webServiceName">Name:</label>
              <input
                type="text"
                id="webServiceName"
                name="webServiceName"
                value={webServiceName}
                onChange={(event) => setWebServiceName(event.target.value)}
              />
              <br />
            </form>
            <form className="form2">
              <label htmlFor="selectedOptionRestType">Request type:</label>
              <select
                id="selectedOptionRestType"
                value={selectedOptionRestType}
                onChange={handleChange}
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
              </select>
              <br />
            </form>

            <form className="form4">
              <label htmlFor="dropdownType">Content type:</label>
              <select
                id="dropdownType"
                value={selectedOptionContentType}
                onChange={handleChange}
              >
                <option value="JSON">JSON</option>
                <option value="XML">XML</option>
              </select>
              <br />
            </form>
            <form className="form5">
              <label htmlFor="methodAddress">Method Address:</label>
              <input
                type="text"
                id="methodAddress"
                name="methodAddress"
                value={methodAddress}
                onChange={(event) => setMethodAddress(event.target.value)}
              />
              <br />
            </form>
            <form className="form6">
              <label htmlFor="responseTime">Response timeout, ms:</label>
              <input
                type="number"
                id="responseTime"
                name="responseTime"
                value={responseTime}
                onChange={(event) => setResponseTime(event.target.value)}
              />
              <br />
            </form>
            <form className="form7">
              <label htmlFor="completeAddress">Complete Address:</label>
              <input
                type="text"
                id="completeAddress"
                name="completeAddress"
                value={completeAddress}
                onChange={(event) => setCompleteAddress(event.target.value)}
              />
              <br />
            </form>
          </div>
          <div className="container2">
            <div className="parameter-container">
              <div className="request-parameters">
                <button className="request" onClick={handleRequestClick}>
                  Request Parameters
                </button>
                <hr />
              </div>
              <div className="response-parameters">
                <button className="response" onClick={handleResponseClick}>
                  Response Parameters
                </button>
                <hr />
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
                          requestType={selectedOptionRestType}
                          toClose={closeHandlerParameter}
                          onAdd={handleRequestParameterRest}
                        />
                      ) : (
                        <ResponseParameter
                          toClose={closeHandlerParameter}
                          onAdd={handleResponseParameterRest}
                        />
                      )}
                    </div>
                  </div>
                )}
              </>
            )}

            <div>
              <button
                className="showRequestButton"
                onClick={handleShowRequestTableClick}
              >
                Show Saved Request
              </button>
              {!showResponseTable && showRequestTable && (
                <div className="savedRequestRestParameters">
                  <table>
                    <thead>
                      <tr>
                        <th className="requestRestHeading1">Name</th>
                        <th className="requestRestHeading2">Type</th>
                      </tr>
                    </thead>
                    <tr className="parameterDataRequest">
                      {requestParametersRest.map((service, index) => (
                        <tr key={index}>
                          <td className="requestRestData1">
                            {service.parameterName}
                          </td>
                          <td className="requestRestData2">
                            {service.parameterType}
                          </td>
                        </tr>
                      ))}
                    </tr>
                  </table>
                </div>
              )}
            </div>

            <div>
              <button
                className="showResponseButton"
                onClick={handleShowResponseTableClick}
              >
                Show Saved Response
              </button>
              {!showRequestTable && showResponseTable && (
                <div className="savedResponseRestParameters">
                  <table>
                    <thead>
                      <tr>
                        <th className="responseRestHeading1">Name</th>
                        <th className="responseRestHeading2">Type</th>
                      </tr>
                    </thead>
                    <tr className="parameterDataResponse">
                      {responseParametersRest.map((service, index) => (
                        <tr key={index}>
                          <td className="responseRestData1">
                            {service.responseParameterName}
                          </td>
                          <td className="responseRestData2">
                            {service.responseParameterType}
                          </td>
                        </tr>
                      ))}
                    </tr>
                  </table>
                </div>
              )}
            </div>

            {showPopupRest && (
              <div className="popup">
                <div className="popup-content">
                  The web service was modified. You must save the web service to
                  run it up-to-date. Save now?
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
      )}
    </>
  );
};

export default WebServices;
