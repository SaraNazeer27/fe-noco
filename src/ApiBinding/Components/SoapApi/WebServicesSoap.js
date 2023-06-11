import React, { useState } from "react";
import "./WebServicesSoap.css";
import RequestParameterSoap from "../SoapApi/RequestParameterSoap";
import ResponseParameterSoap from "../SoapApi/ResponseParameterSoap";

const WebServicesSoap = () => {
  const [fnameSoap, setFnameSoap] = useState("");
  const [codeSoap, setCodeSoap] = useState("");
  const [codeMessage, setCodeMessage] = useState("");
  const [quantitySoap, setQuantitySoap] = useState("");
  const [soapAction, setSoapAction] = useState("");

  const [showRequestSoapContent, setShowRequestSoapContent] = useState(false);
  const [showResponseSoapContent, setShowResponseSoapContent] = useState(false);
  const [showResponseSoapParameter, setShowResponseSoapParameter] =
    useState(false);
  const [showRequestSoapParameter, setShowRequestSoapParameter] =
    useState(false);
  const [showRequestSoapAddParameter, setShowRequestSoapAddParameter] =
    useState(false);
  const [showResponseSoapAddParameter, setShowResponseSoapAddParameter] =
    useState(false);
  const [showModalSoap, setShowModalSoap] = useState(true);
  const [showPopupSoap, setShowPopupSoap] = useState(false);
  const [showRequestSoapModal, setShowRequestSoapModal] = useState(false); // New state variable for request modal

  const handleRequestSoapClick = () => {
    setShowRequestSoapContent(!showRequestSoapContent);
    setShowRequestSoapAddParameter(false);
  };

  const handleResponseSoapClick = () => {
    setShowResponseSoapContent(!showResponseSoapContent);
    setShowResponseSoapAddParameter(false);
  };

  const handleSubmitSoap = (event) => {
    event.preventDefault();
    const formDataSoap = {
      fnameSoap,
      codeMessage,
      codeSoap,
      quantitySoap,
      soapAction,
    };
    const jsonDataSoap = JSON.stringify(formDataSoap);
    console.log(jsonDataSoap);
    // Add your logic here to save the data
    // For example, you can make an API call or update a global state
  };

  const handleAddRequestSoapParameters = () => {
    setShowRequestSoapAddParameter(!showRequestSoapAddParameter);
    setShowResponseSoapAddParameter(false);
  };

  const handleAddResponseSoapParameters = () => {
    setShowResponseSoapAddParameter(!showResponseSoapAddParameter);
    setShowRequestSoapAddParameter(false);
  };

  const handleCloseClickSoap = () => {
    setShowModalSoap(false);
  };

  const handleTestRequestSoapClick = () => {
    debugger;
    setShowPopupSoap(() => true);
  };

  const handlePopupCloseSoap = () => {
    setShowPopupSoap(false);
  };

  const handleAddRequestSoapModal = () => {
    setShowRequestSoapModal(true);
  };

  return (
    <>
      {showModalSoap && (
        <div className="webSoap">
          <div className="container0Soap">
            <button className="OK-webSoap" type="submit">
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
            <form className="form1Soap" onSubmit={handleSubmitSoap}>
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

            <form className="form3Soap" onSubmit={handleSubmitSoap}>
              <label htmlFor="code">Code:</label>
              <input
                type="text"
                id="codeSoap"
                name="codeSoap"
                value={codeSoap}
                onChange={(event) => setCodeSoap(event.target.value)}
              />
              <br />
            </form>

            <form className="form3Soap" onSubmit={handleSubmitSoap}>
              <label htmlFor="codeMessage">Message Element Code:</label>
              <input
                type="text"
                id="codeMessage"
                name="codeMessage"
                value={codeMessage}
                onChange={(event) => setCodeMessage(event.target.value)}
              />
              <br />
            </form>

            <form className="form6Soap" onSubmit={handleSubmitSoap}>
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

            <form className="form7Soap" onSubmit={handleSubmitSoap}>
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

            <form className="form8Soap" onSubmit={handleSubmitSoap}>
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
                  <hr></hr>
                </div>
                <div className="response-parametersSoap">
                  <button
                    className="responseSoap"
                    onClick={handleResponseSoapClick}
                  >
                    Response Parameters
                  </button>
                  <hr></hr>
                </div>
              </div>

              {showRequestSoapContent && (
                <>
                  <button
                    className="reqAddSoap"
                    onClick={handleAddRequestSoapParameters}
                  >
                    Add Request Parameters
                  </button>
                  {showRequestSoapAddParameter && (
                    <div className="request-modalSoap">
                      <div className="request-modal-contentSoap">
                        <RequestParameterSoap />
                      </div>
                    </div>
                  )}
                </>
              )}
              {showResponseSoapContent && (
                <div>
                  <button
                    className="resAddSoap"
                    onClick={handleAddResponseSoapParameters}
                  >
                    Add Response Parameters
                  </button>
                  {showResponseSoapAddParameter && (
                    <div className="response-modalSoap">
                      <div className="response-modal-contentSoap">
                        <ResponseParameterSoap />
                      </div>
                    </div>
                  )}
                </div>
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
