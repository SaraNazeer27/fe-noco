import React, { useState, useEffect } from "react";
import "./WebServices.css";
import RequestParameter from "../RestApi/RequestParameter";
import ResponseParameter from "../RestApi/ResponseParameter";
import { useNavigate, useParams } from "react-router-dom";

const WebServices = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const [selectedOptionRestType, setSelectedOptionRestType] = useState("GET");
  const [selectedOptionContentType, setSelectedOptionContentType] =
    useState("JSON");
  const [webServiceName, setWebServiceName] = useState(
    props.webService ? props.webService.webServiceName : ""
  );
  const [methodAddress, setMethodAddress] = useState(
    props.webService ? props.webService.methodAddress : ""
  );
  const [responseTime, setResponseTime] = useState(
    props.webService ? props.webService.responseTime : ""
  );
  const [webServiceDescription, setWebServiceDescription] = useState("");
  const [showRequestContentRest, setShowRequestContentRest] = useState(false);
  const [showResponseContentRest, setShowResponseContentRest] = useState(false);
  const [showAddParameterRest, setShowAddParameterRest] = useState(false);
  const [showModalRest, setShowModalRest] = useState(true);
  const [showPopupRest, setShowPopupRest] = useState(false);
  const [showRequestModalRest, setShowRequestModalRest] = useState(false);
  const [parameterTypeRest, setParameterTypeRest] = useState("");
  const [requestParametersRest, setRequestParametersRest] = useState(
    props.webService && props.webService.requestParametersRest
      ? props.webService.requestParametersRest
      : []
  );
  const [responseParametersRest, setResponseParametersRest] = useState(
    props.webService && props.webService.responseParametersRest
      ? props.webService.responseParametersRest
      : []
  );
  const [showRequestTable, setShowRequestTable] = useState(false);
  const [showResponseTable, setShowResponseTable] = useState(false);
  const [testRequestResult, setTestRequestResult] = useState("");
  const [editData, setEditData] = useState(null);

  const formDataWebServices = {
    selectedOptionContentType,
    selectedOptionRestType,
    webServiceName,
    responseTime,
    methodAddress,
    webServiceDescription,
    requestParametersRest,
    responseParametersRest,
  };

  const resetState = () => {
    setSelectedOptionRestType("GET");
    setSelectedOptionContentType("JSON");
    setWebServiceName("");
    setMethodAddress("");
    setResponseTime("");
    setWebServiceDescription("");
    setShowRequestContentRest(false);
    setShowResponseContentRest(false);
    setShowModalRest(true);
  };

  const setData = (data) => {
    setSelectedOptionRestType(data.selectedOptionRestType);
    setSelectedOptionContentType(data.selectedOptionContentType);
    setWebServiceName(data.webServiceName);
    setMethodAddress(data.methodAddress);
    setResponseTime(data.responseTime);
    setWebServiceDescription(data.webServiceDescription);
    setRequestParametersRest(data.requestParametersRest);
    setResponseParametersRest(data.responseParametersRest);
    setShowRequestTable(() => true);
    setShowResponseTable(() => true);
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
    if (!validateForm()) {
      return;
    }

    props.onHandleAddWebService(formDataWebServices);
  };

  const validateForm = async () => {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    if (!urlPattern.test(methodAddress)) {
      alert("Please enter a valid URL for the Web Service URI");
      return false;
    }

    const url =
      "/api/apiintegration" + (params && params.id ? "/" + params.id : "");
    try {
      const response = await fetch(url, {
        method: params && params.id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataWebServices),
      });

      if (response.ok) {
        // alert("Data saved successfully");
        // handleCloseClickRest();
      } else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    return true;
  };

  const handleCloseClickRest = () => {
    navigate("/ApiBinding", { replace: true });
  };

  const handleChange = (event) => {
    setSelectedOptionContentType(event.target.value);
    setSelectedOptionRestType(event.target.value);
  };

  const handleAddRestParameter = (parameterType) => {
    setParameterTypeRest(() => parameterType);
    setShowAddParameterRest(true);
  };

  const handleCloseClick = () => {
    setShowModalRest(() => false);
    props.onClose();
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
    let count = requestParametersRest.length;
    parameter["id"] = count + 1;
    setRequestParametersRest((prevParameters) => [
      ...prevParameters,
      parameter,
    ]);
    console.log(requestParametersRest);
    setShowAddParameterRest(false);
  };

  const handleResponseParameterRest = (parameter) => {
    let count = responseParametersRest.length;
    parameter["id"] = count + 1;
    setResponseParametersRest((prevParameters) => [
      ...prevParameters,
      parameter,
    ]);
    setShowAddParameterRest(false);
  };

  const setForEdit = (editData) => {
    setEditData(() => editData);
    setShowAddParameterRest(() => true);
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
                          requestParametersRest={editData}
                        />
                      ) : (
                        <ResponseParameter
                          toClose={closeHandlerParameter}
                          onAdd={handleResponseParameterRest}
                          responseParametersRest={editData}
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
                          <td>
                            <button
                              className="editRequestParameter"
                              onClick={() => {
                                setForEdit(service);
                              }}
                            >
                              Edit
                            </button>
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
                          <td
                            onClick={() => {
                              setForEdit(service);
                            }}
                          >
                            Edit
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
                  send a test request.
                  <button
                    className="popup-button"
                    onClick={handlePopupClose}
                    type="button"
                  >
                    OK
                  </button>
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
