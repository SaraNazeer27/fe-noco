import React, { useState, useEffect } from "react";
import "./SoapApi.css";
import WebServicesSoap from "../SoapApi/WebServicesSoap";
import AuthenticationSoap from "../SoapApi/AuthenticationSoap";
import ModalAuthenticationSoap from "../SoapApi/ModalAuthenticationSoap";
import { useNavigate } from "react-router-dom";

const SoapApi = (props) => {
  const navigate = useNavigate();
  const [sname, setSname] = useState("");
  const [swebURI, setSWebURI] = useState("");
  const [squantity, setSQuantity] = useState("");
  const [sdescription, setSDescription] = useState("");
  const [nameSpace, setNameSpace] = useState("");
  const [stype, setSType] = useState("SOAP");
  const [showSContent, setShowSContent] = useState(false);
  const [modal, setModal] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [showWebServiceConfigurationSoap, setShowWebServiceConfigurationSoap] =
    useState(false);
  const [showAuthenticationSoap, setShowAuthenticationSoap] = useState(false);
  const [showWebServicesSoap, setShowWebServicesSoap] = useState(false); // Updated state
  const [webServicesSoap, setWebServicesSoap] = useState([]);
  const [basicAuthenticationSoap, setBasicAuthenticationSoap] = useState([]);
  const [showWebServiceTableSoap, setShowWebServiceTableSoap] = useState(false);
  const [showSoapServiceTable, setShowSoapServiceTable] = useState(false);
  const [savedSoap, setSavedSoap] = useState(false);

  const resetState = () => {
    setSname("");
    setSWebURI("");
    setSQuantity("");
    setSDescription("");
    setSType("SOAP");

    setShowSContent(false);
    setModal(false);
    setShowModal(true);
    setShowWebServiceConfigurationSoap(false);
    setShowAuthenticationSoap(false);
    setShowWebServicesSoap(false);
  };

  const formDataRestApi = {
    sname,
    swebURI,
    squantity,
    sdescription,
    webServicesSoap,
    stype,
    basicAuthenticationSoap,
  };

  const handleMethodButtonClick = () => {
    setShowSContent(true);
    setShowWebServicesSoap(true); // Show Web Services button
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formDataRestApi);

    // Validate the form data
    if (!validateForm()) {
      return;
    }
    try {
      const response = await fetch("/api/apiintegration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataRestApi),
      });

      if (response.ok) {
        alert("Data saved successfully");
        // resetState();
      } else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    const formDataJson = JSON.stringify(formDataRestApi);
    console.log(formDataJson);
    console.log(webServicesSoap);

    props.toAdd();
  };

  const validateForm = () => {
    // Check if the required fields are filled in
    if (!sname || !swebURI || !squantity || !sdescription) {
      alert("Please fill in all required fields");
      return false;
    }

    return true;
  };

  const toggleModal = () => {
    setShowWebServicesSoap(true);
  };

  const handleOpenClick = () => {
    setShowAuthenticationSoap(() => true);
    setShowWebServicesSoap(false); // Hide Web Services button
  };

  const handleWebServicesClick = () => {
    setShowWebServiceConfigurationSoap((prevState) => !prevState);
  };

  const handleShowWebServicesClick = () => {
    setShowWebServiceTableSoap((prevState) => !prevState);
  };

  const handleAuthenticationClick = (newChange) => {
    setShowAuthenticationSoap(() => newChange);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleCloseClick = () => {
    navigate("/ApiBinding", { replace: true });
  };

  const handleAddWebService = (parameter) => {
    setWebServicesSoap((prevParameters) => [...prevParameters, parameter]);
    setShowWebServiceConfigurationSoap(() => false);
    // setShowAddParameterRest(false);
  };

  const handleAuthentication = (parameter) => {
    setBasicAuthenticationSoap((prevParameters) => [
      ...prevParameters,
      parameter,
    ]);
    setShowAuthenticationSoap(() => false);
  };

  return (
    <div>
      <div className="container_0">
        {showModal && (
          <>
            <button className="save" type="submit" onClick={handleSubmit}>
              Save
            </button>
            <button className="cancel" onClick={handleCloseClick} type="button">
              Cancel
            </button>
          </>
        )}
      </div>

      <div className="container_1">
        <div className="form1">
          <label htmlFor="sname">Name:</label>
          <input
            type="text"
            id="sname"
            name="sname"
            value={sname}
            onChange={(event) => setSname(event.target.value)}
          />
          <br />
        </div>

        <div className="form2">
          <label htmlFor="swebURL">Web service URI:</label>
          <input
            type="url"
            id="swebURI"
            name="swebURI"
            value={swebURI}
            onChange={(event) => setSWebURI(event.target.value)}
          />
          <br />
        </div>

        <div className="form4">
          <label htmlFor="squantity">Retries on call failure:</label>
          <input
            type="number"
            id="squantity"
            name="squantity"
            value={squantity}
            onChange={(event) => setSQuantity(event.target.value)}
          />
          <br />
        </div>

        <div className="form5">
          <label htmlFor="sdescription">Description:</label>
          <input
            type="text"
            id="sdescription"
            name="sdescription"
            value={sdescription}
            onChange={(event) => setSDescription(event.target.value)}
          />
          <br />
        </div>

        <div className="form6">
          <label htmlFor="stype">Type:</label>
          <input
            type="text"
            id="stype"
            name="stype"
            value="SOAP"
            readOnly={true}
          />

          <div className="form7">
            <label htmlFor="nameSpace">Namespace:</label>
            <input
              type="text"
              id="nameSpace"
              name="nameSpace"
              value={nameSpace}
              onChange={(event) => setNameSpace(event.target.value)}
            />
            <br />
          </div>

          <br />
        </div>
      </div>

      <div className="container_2">
        <div>
          <button onClick={toggleModal} className="method">
            Methods
          </button>
        </div>

        <br />

        <div>
          <button onClick={handleOpenClick} className="authentication">
            Authentication
          </button>
          {showAuthenticationSoap && (
            <ModalAuthenticationSoap
              toCloseRest={handleAuthenticationClick}
              onAddModalAuthenticationRest={handleAuthentication}
            />
          )}
        </div>

        <button
          className="showWebservicesButtton"
          onClick={handleShowWebServicesClick}
        >
          Show
        </button>

        {showWebServiceTableSoap && ( // Render the table only when showWebServiceTable is true
          <div className="savedRestWebservice">
            <table>
              <tr>
                <th>Name</th>
                <th className="webServiceRestHeading">Type</th>
              </tr>
              {webServicesSoap.map((service, index) => (
                <div key={index}>
                  <tr>
                    <td>{service.snameSoap}</td>
                    <td className="webServiceRestHeading">
                      {service.selectedOptionSoapType}
                    </td>
                  </tr>
                </div>
              ))}
            </table>
          </div>
        )}
      </div>

      {showWebServicesSoap && (
        <button className="web_service" onClick={handleWebServicesClick}>
          Web Services +
        </button>
      )}

      {showWebServiceConfigurationSoap && (
        <WebServicesSoap onHandleAddWebService={handleAddWebService} />
      )}
    </div>
  );
};

export default SoapApi;
