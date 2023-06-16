import React, { useState } from "react";
import "./WebServicesSoap.css";
import RequestParameterSoap from "../SoapApi/RequestParameterSoap";
import ResponseParameterSoap from "../SoapApi/ResponseParameterSoap";

const WebServicesSoap = (props) => {
  const [selectedOptionSoapType, setSelectedOptionSoapType] = useState("POST");
  const [snameSoap, setSnameSoap] = useState("");
  const [quantitySoap, setQuantitySoap] = useState("");
  const [messageSoap, setMessageSoap] = useState("");
  const [action, setAction] = useState("");
  const [showRequestContentSoap, setShowRequestContentSoap] = useState(false);
  const [showResponseContentSoap, setShowResponseContentSoap] = useState(false);
  const [showAddParameterSoap, setShowAddParameterSoap] = useState(false);
  const [showModalSoap, setShowModalSoap] = useState(true);
  const [showPopupSoap, setShowPopupSoap] = useState(false);
  const [showRequestModalSoap, setShowRequestModalSoap] = useState(false);
  const [parameterTypeSoap, setParameterTypeSoap] = useState("");
  const [requestParametersSoap, setRequestParametersSoap] = useState([]);
  const [responseParametersSoap, setResponseParametersSoap] = useState([]);
  const [showRequestTableSoap, setShowRequestTableSoap] = useState(false);
  const [showResponseTableSoap, setShowResponseTableSoap] = useState(false);

  const formDataWebServices = {
    selectedOptionSoapType,
    snameSoap,
    quantitySoap,
    messageSoap,
    action,
    requestParametersSoap,
    responseParametersSoap,
  };

  const resetState = () => {
    setSelectedOptionSoapType("POST");
    setSnameSoap("");
    setQuantitySoap("");
    setMessageSoap("");
    setAction("");
    setShowRequestContentSoap(false);
    setShowResponseContentSoap(false);
    setShowModalSoap(true);
  };

  const handleRequestClick = () => {
    setShowRequestContentSoap(!showRequestContentSoap);
    setShowAddParameterSoap(false);
  };

  const handleResponseClick = () => {
    setShowResponseContentSoap(!showResponseContentSoap);
    setShowAddParameterSoap(false);
  };

  const handleShowRequestTableClick = () => {
    setShowRequestTableSoap((prevState) => !prevState);
  };

  const handleShowResponseTableClick = () => {
    setShowResponseTableSoap((prevState) => !prevState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (!validateForm()) {
    //   return;
    // }
    console.log(formDataWebServices);

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
    setSelectedOptionSoapType(event.target.value);
  };

  const handleAddRestParameter = (parameterType) => {
    setParameterTypeSoap(parameterType);
    setShowAddParameterSoap(true);
  };

  const handleCloseClick = () => {
    setShowModalSoap(false);
  };

  const handleTestRequestClick = () => {
    setShowPopupSoap(true);
  };

  const handlePopupClose = () => {
    setShowPopupSoap(false);
  };

  const handleAddRequestModal = () => {
    setShowRequestModalSoap(true);
  };

  const closeHandlerParameter = () => {
    setShowAddParameterSoap(false);
  };

  const handleRequestParameterRest = (parameter) => {
    setRequestParametersSoap((prevParameters) => [
      ...prevParameters,
      parameter,
    ]);
    setShowAddParameterSoap(false);
  };

  const handleResponseParameterRest = (parameter) => {
    setResponseParametersSoap((prevParameters) => [
      ...prevParameters,
      parameter,
    ]);
    setShowAddParameterSoap(false);
  };

  return (
    <>
      {showModalSoap && (
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
              <label htmlFor="snameSoap">Name:</label>
              <input
                type="text"
                id="snameSoap"
                name="snameSoap"
                value={snameSoap}
                onChange={(event) => setSnameSoap(event.target.value)}
              />
              <br />
            </form>

            <form className="form5">
              <label htmlFor="action">SOAP Action:</label>
              <input
                type="text"
                id="action"
                name="action"
                value={action}
                onChange={(event) => setAction(event.target.value)}
              />
              <br />
            </form>
            <form className="form6">
              <label htmlFor="quantity">Response timeout, ms:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantitySoap}
                onChange={(event) => setQuantitySoap(event.target.value)}
              />
              <br />
            </form>
            <form className="form7">
              <label htmlFor="messageSoap">Message Element Code:</label>
              <input
                type="text"
                id="messageSoap"
                name="messageSoap"
                value={messageSoap}
                onChange={(event) => setMessageSoap(event.target.value)}
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

            {(showRequestContentSoap || showResponseContentSoap) && (
              <>
                <button
                  className="add-parameter"
                  onClick={() =>
                    handleAddRestParameter(
                      showRequestContentSoap ? "request" : "response"
                    )
                  }
                >
                  Add Parameter
                </button>

                {showAddParameterSoap && (
                  <div className="request-modal">
                    <div className="request-modal-content">
                      {parameterTypeSoap === "request" ? (
                        <RequestParameterSoap
                          toClose={closeHandlerParameter}
                          onAdd={handleRequestParameterRest}
                        />
                      ) : (
                        <ResponseParameterSoap
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
              {!showResponseTableSoap && showRequestTableSoap && (
                <div className="savedRequestRestParameters">
                  <table>
                    <thead>
                      <tr>
                        <th className="requestRestHeading1">Name</th>
                        <th className="requestRestHeading2">Type</th>
                      </tr>
                    </thead>
                    <tr className="r">
                      {requestParametersSoap.map((service, index) => (
                        <tr key={index}>
                          <td className="requestRestData1">
                            {service.lnameSoap}
                          </td>
                          <td className="requestRestData2">
                            {service.selectedTypeSoap}
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
              {!showRequestTableSoap && showResponseTableSoap && (
                <div className="savedResponseRestParameters">
                  <table>
                    <thead>
                      <tr>
                        <th className="responseRestHeading1Soap">Name</th>
                        <th className="responseRestHeading2Soap">Type</th>
                      </tr>
                    </thead>
                    <tr className="s">
                      {responseParametersSoap.map((service, index) => (
                        <tr key={index}>
                          <td className="responseRestData1Soap">
                            {service.nameSoap}
                          </td>
                          <td className="responseRestData2Soap">
                            {service.parameterTypeSoap}
                          </td>
                        </tr>
                      ))}
                    </tr>
                  </table>
                </div>
              )}
            </div>

            {showPopupSoap && (
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

export default WebServicesSoap;
