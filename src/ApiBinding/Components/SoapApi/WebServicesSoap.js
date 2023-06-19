import React, { useState } from "react";
import "./WebServicesSoap.css";
import RequestParameterSoap from "../SoapApi/RequestParameterSoap";
import ResponseParameterSoap from "../SoapApi/ResponseParameterSoap";
import { useNavigate, useParams } from "react-router-dom";

const WebServicesSoap = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const [selectedOptionSoapType, setSelectedOptionSoapType] = useState("POST");
  const [webServiceName, setWebServiceName] = useState(
    props.webService ? props.webService.webServiceName : ""
  );
  const [responseTime, setResponseTime] = useState(
    props.webService ? props.webService.responseTime : ""
  );
  const [message, setMessage] = useState(
    props.webService ? props.webService.message : ""
  );
  const [action, setAction] = useState("HTTP");
  const [showRequestContentSoap, setShowRequestContentSoap] = useState(false);
  const [showResponseContentSoap, setShowResponseContentSoap] = useState(false);
  const [showAddParameterSoap, setShowAddParameterSoap] = useState(false);
  const [showModalSoap, setShowModalSoap] = useState(true);
  const [showPopupSoap, setShowPopupSoap] = useState(false);
  const [showRequestModalSoap, setShowRequestModalSoap] = useState(false);
  const [parameterTypeSoap, setParameterTypeSoap] = useState("");
  const [requestParametersSoap, setRequestParametersSoap] = useState(
    props.webService && props.webService.requestParametersSoap
      ? props.webService.requestParametersSoap
      : []
  );
  const [responseParametersSoap, setResponseParametersSoap] = useState(
    props.webService && props.webService.responseParametersSoap
      ? props.webService.responseParametersSoap
      : []
  );
  const [showRequestTableSoap, setShowRequestTableSoap] = useState(false);
  const [showResponseTableSoap, setShowResponseTableSoap] = useState(false);
  const [editData, setEditData] = useState(null);
  const [id, setId] = useState(
    props.webService && props.webService.id ? props.webService.id : 0
  );

  const formDataWebServices = {
    selectedOptionSoapType,
    webServiceName,
    responseTime,
    message,
    action,
    requestParametersSoap,
    responseParametersSoap,
    id,
  };

  const resetState = () => {
    setSelectedOptionSoapType("POST");
    setWebServiceName("");
    setResponseTime("");
    setMessage("");
    setAction("HTTP");
    setShowRequestContentSoap(false);
    setShowResponseContentSoap(false);
    setShowModalSoap(true);
  };

  const setData = (data) => {
    selectedOptionSoapType(data.selectedOptionSoapType);
    setWebServiceName(data.webServiceName);
    setMessage(data.message);
    setResponseTime(data.responseTime);
    setRequestParametersSoap(data.requestParametersSoap);
    setResponseParametersSoap(data.responseParametersSoap);
    setShowRequestTableSoap(() => true);
    setShowResponseTableSoap(() => true);
  };

  const handleRequestClick = () => {
    setShowResponseContentSoap(() => false);
    setShowRequestContentSoap(() => true);
    setShowAddParameterSoap(false);
  };

  const handleResponseClick = () => {
    setShowResponseContentSoap(() => true);
    setShowRequestContentSoap(() => false);
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
    if (!validateForm()) {
      return;
    }
    console.log(formDataWebServices);

    props.onHandleAddWebService(formDataWebServices);
  };

  const validateForm = async () => {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    if (!urlPattern.test(message)) {
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

  // const isValidUrl = (url) => {
  //   const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  //   return urlPattern.test(url);
  // };

  const handleCloseClickRest = () => {
    navigate("/ApiBinding", { replace: true });
  };

  const handleChange = (event) => {
    setSelectedOptionSoapType(event.target.value);
  };

  const handleAddRestParameter = (parameterType) => {
    setEditData(() => null);
    setParameterTypeSoap(() => parameterType);
    setShowAddParameterSoap(true);
  };

  const handleCloseClick = () => {
    setShowModalSoap(false);
    props.onClose();
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
    debugger;
    const count = requestParametersSoap.length;
    if (parameter["id"] == 0) {
      parameter["id"] = count + 1;

      setRequestParametersSoap((prevParameters) => [
        ...prevParameters,
        parameter,
      ]);
    } else {
      const tobeAdded = [...requestParametersSoap];
      const changetobeAdded = tobeAdded.map((res) => {
        if (res.id == parameter.id) return { ...parameter };
        return { ...res };
      });
      setRequestParametersSoap((prevParameters) => [...changetobeAdded]);
    }
    setShowAddParameterSoap(false);
  };

  const handleResponseParameterSoap = (parameter) => {
    debugger;
    const count = responseParametersSoap.length;
    if (parameter["id"] == 0) {
      parameter["id"] = count + 1;

      setResponseParametersSoap((prevParameters) => [
        ...prevParameters,
        parameter,
      ]);
    } else {
      const tobeAdded = [...responseParametersSoap];
      const changetobeAdded = tobeAdded.map((res) => {
        if (res.id == parameter.id) return { ...parameter };
        return { ...res };
      });
      setResponseParametersSoap((prevParameters) => [...changetobeAdded]);
    }
    setShowAddParameterSoap(false);
  };

  const setForEdit = (editData) => {
    setEditData(() => editData);
    setParameterTypeSoap(() =>
      showRequestContentSoap ? "request" : "response"
    );
    setShowAddParameterSoap(() => true);
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

            <form className="form5">
              <label htmlFor="action">SOAP Action:</label>
              <input
                type="text"
                id="action"
                name="action"
                value="HTTP"
                onChange={(event) => setAction(event.target.value)}
                readOnly={true}
              />
              <br />
            </form>
            <form className="form6">
              <label htmlFor="responseTime">Response timeout, ms:</label>
              <input
                type="responseTime"
                id="responseTime"
                name="responseTime"
                value={responseTime}
                onChange={(event) => setResponseTime(event.target.value)}
              />
              <br />
            </form>
            <form className="form7">
              <label htmlFor="message">Message Element Address:</label>
              <input
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
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
                  {showRequestContentSoap ? "Request" : "Response"} Add
                  Parameter
                </button>

                {showAddParameterSoap && (
                  <div className="request-modal">
                    <div className="request-modal-content">
                      {parameterTypeSoap === "request" ? (
                        <RequestParameterSoap
                          toClose={closeHandlerParameter}
                          onAdd={handleRequestParameterRest}
                          requestParametersSoap={editData}
                        />
                      ) : (
                        <ResponseParameterSoap
                          toClose={closeHandlerParameter}
                          onAdd={handleResponseParameterSoap}
                          responseParametersSoap={editData}
                        />
                      )}
                    </div>
                  </div>
                )}
              </>
            )}

            {showRequestContentSoap && (
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requestParametersSoap.map((service, index) => (
                      <tr key={service.id}>
                        <td>{service.parameterName}</td>
                        <td>{service.parameterType}</td>
                        <td>
                          <button
                            onClick={() => {
                              setForEdit(service);
                            }}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div>
            {showResponseContentSoap && (
              <div className="savedRequestRestParameters">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {responseParametersSoap.map((service, index) => (
                      <tr key={service.id}>
                        <td>{service.responseParameterName}</td>
                        <td>{service.responseParameterType}</td>
                        <td>
                          <button
                            onClick={() => {
                              setForEdit(service);
                            }}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

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
