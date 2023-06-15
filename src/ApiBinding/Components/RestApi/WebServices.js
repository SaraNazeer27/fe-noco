import React, { useState } from "react";
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
  const [showRequestModalRest, setShowRequestModalRest] = useState(false);
  const [parameterTypeRest, setParameterTypeRest] = useState("");
  const [requestParametersRest, setRequestParametersRest] = useState([]);
  const [responseParametersRest, setResponseParametersRest] = useState([]);
  const [showRequestTable, setShowRequestTable] = useState(false);
  const [showResponseTable, setShowResponseTable] = useState(false);

  const formDataWebServices = {
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

  const handleShowRequestTableClick = () => {
    setShowRequestTable((prevState) => !prevState);
    setShowResponseTable(false);
  };

  const handleShowResponseTableClick = () => {
    setShowResponseTable((prevState) => !prevState);
    setShowRequestTable(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    props.onHandleAddWebService(formDataWebServices);
  };

  const validateForm = () => {
    if (!fnameRest || !codeRest || !quantityRest || !webURIRestComplete) {
      alert("Please fill in all required fields");
      return false;
    }
    return true;
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
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
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
                <option value="JSON">JSON</option>
                <option value="XML">XML</option>
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
                onChange={(event) => setWebURIRestComplete(event.target.value)}
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

            {parameterTypeRest === "request" ? (
              <div>
                <button
                  className="showRequestButton"
                  onClick={handleShowRequestTableClick}
                >
                  Show Saved Request
                </button>
                {showRequestTable && (
                  <div className="savedRequestRestParameters">
                    <table>
                      <thead>
                        <tr>
                          <th className="requestRestHeading1">Name</th>
                          <th className="requestRestHeading2">Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {requestParametersRest.map((service, index) => (
                          <tr key={index}>
                            <td className="requestRestData1">
                              {service.lname}
                            </td>
                            <td className="requestRestData2">
                              {service.selectedType}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <button
                  className="showResponseButton"
                  onClick={handleShowResponseTableClick}
                >
                  Show Saved Response
                </button>
                {showResponseTable && (
                  <div className="savedResponseRestParameters">
                    <table>
                      <thead>
                        <tr>
                          <th className="responseRestHeading1">Name</th>
                          <th className="responseRestHeading2">Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {responseParametersRest.map((service, index) => (
                          <tr key={index}>
                            <td className="responseRestData1">
                              {service.name}
                            </td>
                            <td className="responseRestData2">
                              {service.parameterType}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

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
