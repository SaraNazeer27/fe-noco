import React, { useState } from "react";
import "./RestApi.css";
import WebServices from "./WebServices";
import Authentication from "../RestApi/Authentication";

const RestApi = (props) => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [fname, setFname] = useState("");
  const [webURI, setWebURI] = useState("");
  const [code, setCode] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [pack, setPack] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [modal, setModal] = useState(false);
  const [showModal, setShowModal] = useState(true);
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
      webURI,
      code,
      quantity,
      description,
      type,
      pack,
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
          <label htmlFor="fname">Name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={fname}
            onChange={(event) => setFname(event.target.value)}
          />
          <br />
        </div>

        <div className="form2">
          <label htmlFor="webURL">Web service URI:</label>
          <input
            type="url"
            id="webURI"
            name="webURI"
            value={webURI}
            onChange={(event) => setWebURI(event.target.value)}
          />
          <br />
        </div>

        <div className="form3">
          <label htmlFor="code">Code:</label>
          <input
            type="text"
            id="code"
            name="code"
            value={code}
            onChange={(event) => setCode(event.target.value)}
          />
          <br />
        </div>

        <div className="form4">
          <label htmlFor="quantity">Retries on call failure:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
          <br />
        </div>

        <div className="form5">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <br />
        </div>

        <div className="form6">
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            value="REST"
            onChange={(event) => setType(event.target.value)}
          />
          <br />
        </div>

        <div>
          <label htmlFor="dropdown">Package:</label>
          <select id="dropdown" value={selectedOption} onChange={handleChange}>
            <option value="option1"></option>
            <option value="option2">Custom</option>
            <option value="option3">UsrTrial</option>
          </select>
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
          {showAuthentication && (
            <Authentication
              isModalOpen={showAuthentication}
              toClose={handleAuthenticationClick}
            />
          )}
        </div>
      </div>

      {showWebServices && (
        <button className="web_service" onClick={handleWebServicesClick}>
          Web Services +
        </button>
      )}
      {showWebServiceConfiguration && <WebServices />}
    </>
  );
};

export default RestApi;
