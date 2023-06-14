import React, { useState } from "react";
import "./WebServicesSoap.css";
import RequestParameterSoap from "../SoapApi/RequestParameterSoap";
import ResponseParameterSoap from "../SoapApi/ResponseParameterSoap";

const WebServicesSoap = (props) => {
  const [fnameSoap, setFnameSoap] = useState("");
  const [codeSoap, setCodeSoap] = useState("");
  const [codeMessage, setCodeMessage] = useState("");
  const [quantitySoap, setQuantitySoap] = useState("");
  const [soapAction, setSoapAction] = useState("");
  const [showRequestSoapContent, setShowRequestSoapContent] = useState(false);
  const [showResponseSoapContent, setShowResponseSoapContent] = useState(false);
  const [showAddParameterSoap, setShowAddParameterSoap] = useState(false);
  const [parameterType, setParameterType] = useState(""); // New state variable for parameter type
  const [showModalSoap, setShowModalSoap] = useState(true);
  const [showPopupSoap, setShowPopupSoap] = useState(false);
  const [requestParametersSoap, setRequestParametersSoap] = useState([]);
  const [responseParametersSoap, setResponseParametersSoap] = useState([]);

  const formDataSoap = {
    fnameSoap,
    codeMessage,
    codeSoap,
    quantitySoap,
    soapAction,
    requestParametersSoap,
    responseParametersSoap,
  };

  const resetState = () => {
    setFnameSoap("");
    setCodeMessage("");
    setCodeSoap("");
    setQuantitySoap("");
    setSoapAction("");
    setShowModalSoap(true);
    setShowRequestSoapContent(true);
    setShowResponseSoapContent(true);
  };

  const handleRequestSoapClick = () => {
    setShowRequestSoapContent(!showRequestSoapContent);
    setShowAddParameterSoap(false);
  };

  const handleResponseSoapClick = () => {
    setShowResponseSoapContent(!showResponseSoapContent);
    setShowAddParameterSoap(false);
  };

  const handleSubmitSoap = async (event) => {
    event.preventDefault();
    // if (!validateForm()) {
    //   return;
    // }

    props.onHandleAddWebService(formDataSoap);
  };

  // Validate the form data
  const validateForm = () => {
    // Check if the required fields are filled in
    if (
      !fnameSoap ||
      !codeMessage ||
      !codeSoap ||
      !quantitySoap ||
      !soapAction
    ) {
      alert("Please fill in all required fields");
      return false;
    }
  };

  const handleAddSoapParameter = (parameterType) => {
    setParameterType(parameterType);
    setShowAddParameterSoap(true);
  };

  const handleCloseClickSoap = () => {
    setShowModalSoap(false);
  };

  const handleTestRequestSoapClick = () => {
    setShowPopupSoap(() => true);
  };

  const handlePopupCloseSoap = () => {
    setShowPopupSoap(false);
  };

  const closeHandlerSoapParameter = () => {
    setShowAddParameterSoap(() => false);
  };

  const handleRequestParameterSoap = (parameter) => {
    setRequestParametersSoap((prevParameters) => [
      ...prevParameters,
      parameter,
    ]);
    setShowAddParameterSoap(false);
  };

  const handleResponsetParameterSoap = (parameter) => {
    setResponseParametersSoap((prevParameters) => [
      ...prevParameters,
      parameter,
    ]);
    setShowAddParameterSoap(false);
  };

  return (
    <>
      {showModalSoap && (
        <div className="webSoap">
          <div className="container0Soap">
            <button
              className="OK-webSoap"
              type="submit"
              onClick={handleSubmitSoap}
            >
              OK
            </button>
            <button
              className="cancel-webSoap"
              onClick={handleCloseClickSoap}
              type="button"
            >
              Cancel
            </button>
            <button
              className="testRequestSoap"
              onClick={handleTestRequestSoapClick}
              type="button"
            >
              Send Test Request
            </button>
          </div>
          <div className="container1Soap">
            <form className="form1Soap">
              <label htmlFor="fnameSoap">Name:</label>
              <input
                type="text"
                id="fnameSoap"
                name="fnameSoap"
                value={fnameSoap}
                onChange={(event) => setFnameSoap(event.target.value)}
              />
              <br />
            </form>

            <form className="form3Soap">
              <label htmlFor="codeSoap">Code:</label>
              <input
                type="number"
                id="codeSoap"
                name="codeSoap"
                value={codeSoap}
                onChange={(event) => setCodeSoap(event.target.value)}
              />
              <br />
            </form>
            <form className="form3Soap">
              <label htmlFor="codeMessage">Message Element Code:</label>
              <input
                type="number"
                id="codeMessage"
                name="codeMessage"
                value={codeMessage}
                onChange={(event) => setCodeMessage(event.target.value)}
              />
              <br />
            </form>
            <form className="form6Soap">
              <label htmlFor="quantitySoap">Response timeout, ms:</label>
              <input
                type="number"
                id="quantitySoap"
                name="quantitySoap"
                value={quantitySoap}
                onChange={(event) => setQuantitySoap(event.target.value)}
              />
              <br />
            </form>
            <form className="form7Soap">
              <label htmlFor="soapAction">Soap Action:</label>
              <input
                type="text"
                id="soapAction"
                name="soapAction"
                value={soapAction}
                onChange={(event) => setSoapAction(event.target.value)}
              />
              <br />
            </form>
            <form className="form8Soap">
              <label htmlFor="authenticationSoap">Use authentication</label>
              <input
                type="checkbox"
                id="authenticationSoap"
                name="authenticationSoap"
                value="authenticationSoap"
              />
              <br />
            </form>
            <div className="container2Soap">
              <div className="parameter-containerSoap">
                <div className="request-parametersSoap">
                  <button
                    className="requestSoap"
                    onClick={handleRequestSoapClick}
                  >
                    Request Parameters
                  </button>
                  <hr />
                </div>
                <div className="response-parametersSoap">
                  <button
                    className="responseSoap"
                    onClick={handleResponseSoapClick}
                  >
                    Response Parameters
                  </button>
                  <hr />
                </div>
              </div>

              {(showRequestSoapContent || showResponseSoapContent) && (
                <>
                  <button
                    className="add-parameterSoap"
                    onClick={() =>
                      handleAddSoapParameter(
                        showRequestSoapContent ? "request" : "response"
                      )
                    }
                  >
                    Add Parameter
                  </button>
                  {showAddParameterSoap && (
                    <div className="request-modalSoap">
                      <div className="request-modal-contentSoap">
                        {parameterType === "request" ? (
                          <RequestParameterSoap
                            toClose={closeHandlerSoapParameter}
                            onAdd={handleRequestParameterSoap}
                          />
                        ) : (
                          <ResponseParameterSoap
                            toClose={closeHandlerSoapParameter}
                            onAdd={handleResponsetParameterSoap}
                          />
                        )}
                      </div>
                    </div>
                  )}
                </>
              )}

              {showPopupSoap && (
                <div className="popupSoap">
                  <div className="popup-contentSoap">
                    The web service was modified. You must save the web service
                    to run it up-to-date. Save now?
                    <br />
                    <div className="button-containerSoap">
                      <button className="yesSoap">Yes</button>
                      <button className="noSoap" onClick={handlePopupCloseSoap}>
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
export default WebServicesSoap;
