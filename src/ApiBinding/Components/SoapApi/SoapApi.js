import React, { useState } from "react";
import ApiHome from "../ApiHome/ApiHome";
import "./SoapApi.css";
import Authentication from "../RestApi/Authentication";
import WebServicesSoap from "../SoapApi/WebServicesSoap";

const SoapApi = (props) => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [fname, setFname] = useState("");
  const [tname, setTname] = useState("");
  const [webURI, setWebURI] = useState("");
  const [code, setCode] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [pack, setPack] = useState("");
  const [nameSpaces, setNameSpaces] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [modal, setModal] = useState(false);
  const [showWebServiceConfiguration, setShowWebServiceConfiguration] =
    useState(false);
  const [showAuthentication, setShowAuthentication] = useState(false);
  const [showWebServices, setShowWebServices] = useState(false); // Updated state

  const handleMethodButtonClick = () => {
    setShowContent(true);
    setShowWebServices(true); // Show Web Services button
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      fname,
      selectedOption,
      tname,
      webURI,
      code,
      quantity,
      description,
      type,
      pack,
      nameSpaces,
    };
    const formDataJson = JSON.stringify(formData);
    console.log(formDataJson);
  };
  const toggleModal = () => {
    setShowWebServices(true);
  };

  const handleOpenClick = () => {
    setShowAuthentication(() => true);
    setShowWebServices(false); // Hide Web Services button
  };

  const handleWebServicesClick = () => {
    setShowWebServiceConfiguration((prevState) => !prevState);
  };

  const handleAuthenticationClick = (newChange) => {
    setShowAuthentication(() => newChange);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleCloseClick = () => {
    props.toCancel();
  };
  return (
    <>
      <div className="container0Soap">
        {showModal && (
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
          <label htmlFor="fname">Name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={fname}
            onChange={(event) => setFname(event.target.value)}
          />
          <br />
        </form>

        <form className="form2Soap">
          <label htmlFor="webURL">Web service URI:</label>
          <input
            type="url"
            id="webURI"
            name="webURI"
            value={webURI}
            onChange={(event) => setWebURI(event.target.value)}
          />
          <br />
        </form>

        <form className="form3Soap">
          <label htmlFor="code">Code:</label>
          <input
            type="text"
            id="code"
            name="code"
            value={code}
            onChange={(event) => setCode(event.target.value)}
          />
          <br />
        </form>

        <form className="form4Soap">
          <label htmlFor="quantity">Retries on call failure:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
          <br />
        </form>

        <form className="form5Soap">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <br />
        </form>

        <form className="form6Soap">
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            value="SOAP"
            onChange={(event) => setType(event.target.value)}
          />
          <br />
        </form>

        <div>
          <label htmlFor="dropdown">Package:</label>
          <select id="dropdown" value={selectedOption} onChange={handleChange}>
            <option value="option1"></option>
            <option value="option2">Custom</option>
            <option value="option3">UsrTrial</option>
          </select>
        </div>

        <form className="form6Soap">
          <label htmlFor="namespace">NameSpaces:</label>
          <input
            type="text"
            id="namespace"
            name="namespace"
            value={nameSpaces}
            onChange={(event) => setNameSpaces(event.target.value)}
          />
          <br />
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
          <button onClick={handleOpenClick} className="authenticationSoap">
            Authentication
          </button>
          {showAuthentication && (
            <Authentication
              isModalOpen={showAuthentication}
              toClose={handleAuthenticationClick}
            />
          )}
        </div>
      </div>

      {showWebServices && (
        <button className="web_serviceSoap" onClick={handleWebServicesClick}>
          Web Services +
        </button>
      )}
      {showWebServiceConfiguration && <WebServicesSoap />}
    </>
  );
};

export default SoapApi;
