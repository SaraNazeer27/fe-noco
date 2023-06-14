import React, { useState } from "react";
import ApiHome from "../ApiHome/ApiHome";
import "./SoapApi.css";
import AuthenticationSoap from "../SoapApi/AuthenticationSoap";
import WebServicesSoap from "../SoapApi/WebServicesSoap";
import ModalAuthenticationSoap from "./ModalAuthenticationSoap";

const SoapApi = (props) => {
  const [sSelectedOption, setSselectedOption] = useState("option1");
  const [sname, setSname] = useState("");
  const [sWebURI, setSwebURI] = useState("");
  const [sCode, setScode] = useState("");
  const [sQuantity, setSquantity] = useState("");
  const [sDescription, setSdescription] = useState("");
  const [sType, setStype] = useState("");
  const [sPack, setSpack] = useState("");
  const [nameSpaces, setNameSpaces] = useState("");
  const [sShowModal, setSshowModal] = useState(true);
  const [sShowContent, setSshowContent] = useState(false);
  const [sModal, setSmodal] = useState(false);
  const [sShowWebServiceConfiguration, setSshowWebServiceConfiguration] =
    useState(false);
  const [sShowAuthentication, setSshowAuthentication] = useState(false);
  const [sShowWebServices, setSshowWebServices] = useState(false); // Updated state
  const [sWebServices, setSwebServices] = useState([]);
  const [basicAuthenticationSoap, setBasicAuthenticationSoap] = useState([]);

  const formData = {
    sSelectedOption,
    sname,
    sWebURI,
    sCode,
    sQuantity,
    sDescription,
    sType,
    sPack,
    nameSpaces,
    sWebServices,
    basicAuthenticationSoap,
  };

  const resetState = () => {
    setSselectedOption("option1");
    setSname("");
    setSwebURI("");
    setScode("");
    setSquantity("");
    setSdescription("");
    setStype("SOAP");
    setSpack("");
    setNameSpaces("");
    setSshowContent(false);
    setSmodal(false);
    setSshowModal(true);
    setSshowWebServiceConfiguration(false);
    setSshowAuthentication(false);
    setSshowWebServices(false);
  };

  const handleMethodButtonClick = () => {
    setSshowContent(true);
    setSshowWebServices(true); // Show Web Services button
  };

  const handleChange = (event) => {
    setSselectedOption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (!validateForm()) {
    //   return;
    // }
    try {
      const response = await fetch("/api/apiintegration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Data saved successfully");
        resetState();
      } else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    const formDataJson = JSON.stringify(formData);
    console.log(formDataJson);
  };

  const validateForm = () => {
    // Check if the required fields are filled in
    if (
      !sSelectedOption ||
      !sname ||
      !sWebURI ||
      !sCode ||
      !sQuantity ||
      !sDescription ||
      !sType ||
      !sPack ||
      !nameSpaces
    ) {
      alert("Please fill in all required fields");
      return false;
    }
  };

  const toggleModal = () => {
    setSshowWebServices(true);
  };

  const handleOpenClick = () => {
    setSshowAuthentication(() => true);
    setSshowWebServices(false); // Hide Web Services button
  };

  const handleWebServicesClick = () => {
    setSshowWebServiceConfiguration((prevState) => !prevState);
  };

  const handleAuthenticationClick = (newChange) => {
    setSshowAuthentication(() => newChange);
  };

  if (sModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleCloseClick = () => {
    props.toCancel();
  };

  const handleAddSWebService = (parameter) => {
    setSwebServices((prevParameters) => [...prevParameters, parameter]);
    setSshowWebServiceConfiguration(() => false);
  };

  const handleAuthenticationSoap = (parameter) => {
    setBasicAuthenticationSoap((prevParameters) => [
      ...prevParameters,
      parameter,
    ]);
    setSshowAuthentication(() => false);
  };

  return (
    <>
      <div className="container0Soap">
        {sShowModal && (
          <>
            <button className="saveSoap" type="submit" onClick={handleSubmit}>
              Save
            </button>
            <button
              className="cancelSoap"
              onClick={handleCloseClick}
              type="button"
            >
              Cancel
            </button>
          </>
        )}
      </div>
      <div className="container1Soap">
        <form className="form1">
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

          <div className="form2Soap">
            <label htmlFor="sWebURL">Web service URI:</label>
            <input
              type="url"
              id="sWebURI"
              name="sWebURI"
              value={sWebURI}
              onChange={(event) => setSwebURI(event.target.value)}
            />
            <br />
          </div>

          <div className="form3Soap">
            <label htmlFor="sCode">Code:</label>
            <input
              type="number"
              id="sCode"
              name="sCode"
              value={sCode}
              onChange={(event) => setScode(event.target.value)}
            />
            <br />
          </div>

          <div className="form4Soap">
            <label htmlFor="sQuantity">Retries on call failure:</label>
            <input
              type="number"
              id="sQuantity"
              name="sQuantity"
              value={sQuantity}
              onChange={(event) => setSquantity(event.target.value)}
            />
            <br />
          </div>

          <div className="form5Soap">
            <label htmlFor="sDescription">Description:</label>
            <input
              type="text"
              id="sDescription"
              name="sDescription"
              value={sDescription}
              onChange={(event) => setSdescription(event.target.value)}
            />
            <br />
          </div>

          <div className="form6Soap">
            <label htmlFor="sType">Type:</label>
            <input
              type="text"
              id="sType"
              name="sType"
              value="SOAP"
              onChange={(event) => setStype(event.target.value)}
            />
            <br />
          </div>

          <div>
            <label htmlFor="sDropdown">Package:</label>
            <select
              id="sDropdown"
              value={sSelectedOption}
              onChange={handleChange}
            >
              <option value="option1"></option>
              <option value="option2">Custom</option>
              <option value="option3">UsrTrial</option>
            </select>
          </div>

          <div className="form6Soap">
            <label htmlFor="namespace">NameSpaces:</label>
            <input
              type="text"
              id="namespace"
              name="namespace"
              value={nameSpaces}
              onChange={(event) => setNameSpaces(event.target.value)}
            />
            <br />
          </div>
        </form>
      </div>

      <div className="container2Soap">
        <div>
          <button onClick={toggleModal} className="methodSoap">
            Methods
          </button>
        </div>
        <br />
        <div>
          <button onClick={handleOpenClick} className="authSoap">
            Authentication
          </button>
          {sShowAuthentication && (
            // <AuthenticationSoap
            //   isModalOpen={sShowAuthentication}
            //   toClose={handleAuthenticationClick}
            //   onHandleAuthentication={handleAuthenticationSoap}
            // />
            <ModalAuthenticationSoap
              toClose={handleAuthenticationClick}
              onAddModalAuthentication={handleAuthenticationSoap}
            />
          )}
        </div>
      </div>

      {sShowWebServices && (
        <button className="web_serviceSoap" onClick={handleWebServicesClick}>
          Web Services +
        </button>
      )}
      {sShowWebServiceConfiguration && (
        <WebServicesSoap onHandleAddWebService={handleAddSWebService} />
      )}
    </>
  );
};

export default SoapApi;
