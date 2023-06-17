import React, { useState, useEffect } from "react";
import "./RestApi.css";
import WebServices from "./WebServices";
import Authentication from "../RestApi/Authentication";
import ModalAuthentication from "../RestApi/ModalAuthentication";
import { useNavigate, useParams } from "react-router-dom";

const RestApi = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const [selectedOption, setSelectedOption] = useState("option1");
  const [fname, setFname] = useState("");
  const [webURI, setWebURI] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("REST");
  const [showContent, setShowContent] = useState(false);
  const [modal, setModal] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [showWebServiceConfiguration, setShowWebServiceConfiguration] =
    useState(false);
  const [showAuthentication, setShowAuthentication] = useState(false);
  const [showWebServices, setShowWebServices] = useState(false); // Updated state
  const [webServices, setWebServices] = useState([]);
  const [basicAuthenticationRest, setBasicAuthenticationRest] = useState([]);
  const [showWebServiceTable, setShowWebServiceTable] = useState(false);
  const [showRestServiceTable, setShowRestServiceTable] = useState(false);
  const [savedRest, setSavedRest] = useState(false);
  const resetState = () => {
    setSelectedOption("option1");
    setFname("");
    setWebURI("");
    setQuantity("");
    setDescription("");
    setType("REST");

    setShowContent(false);
    setModal(false);
    setShowModal(true);
    setShowWebServiceConfiguration(false);
    setShowAuthentication(false);
    setShowWebServices(false);
  };

  const formDataRestApi = {
    fname,
    selectedOption,
    webURI,
    quantity,
    description,
    webServices,
    type,
    basicAuthenticationRest,
  };

  const setData = (data) => {
    setSelectedOption(data.selectedOption);
    setFname(data.fname);
    setWebURI(data.webURI);
    setQuantity(data.quantity);
    setDescription(data.description);
    setType(data.type);
  };

  const handleMethodButtonClick = () => {
    setShowContent(true);
    setShowWebServices(true); // Show Web Services button
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmitRest = async (event) => {
    event.preventDefault();
    console.log(formDataRestApi);

    // Validate the form data
    if (!validateForm()) {
      return;
    }
    const url =
      "/api/apiintegration" + (params && params.id ? "/" + params.id : "");
    try {
      const response = await fetch(url, {
        method: params && params.id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataRestApi),
      });

      if (response.ok) {
        alert("Data saved successfully");
        handleCloseClickRest();
        // resetState();
      } else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const validateForm = () => {
    // Check if the required fields are filled in
    if (!fname || !webURI || !quantity || !description) {
      alert("Please fill in all required fields");
      return false;
    }

    return true;
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

  const handleShowWebServicesClick = () => {
    setShowWebServiceTable((prevState) => !prevState);
  };

  const handleAuthenticationClick = (newChange) => {
    setShowAuthentication(() => newChange);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleCloseClickRest = () => {
    navigate("/ApiBinding", { replace: true });
  };

  const handleAddWebServiceRest = (parameter) => {
    setWebServices((prevParameters) => [...prevParameters, parameter]);
    setShowWebServiceConfiguration(() => false);
    // setShowAddParameterRest(false);
  };

  const handleAuthenticationRest = (parameter) => {
    setBasicAuthenticationRest((prevParameters) => [
      ...prevParameters,
      parameter,
    ]);
    setShowAuthentication(() => false);
  };
  const fetchApi = () => {
    params &&
      params.id &&
      fetch("/api/apiintegration/" + params.id)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Fetched data:", data);
          setData(data);
        })
        .catch((error) => {
          console.log("Error in fetching data:", error);
        });
  };

  useEffect(() => {
    fetchApi();
  }, [params.id]);
  return (
    <div>
      <div className="container_0">
        {showModal && (
          <>
            <button className="save" type="submit" onClick={handleSubmitRest}>
              Save
            </button>
            <button
              className="cancel"
              onClick={handleCloseClickRest}
              type="button"
            >
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
            readOnly={true}
          />

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
          {showAuthentication && (
            <ModalAuthentication
              toCloseRest={handleAuthenticationClick}
              onAddModalAuthenticationRest={handleAuthenticationRest}
            />
          )}
        </div>

        <button
          className="showWebservicesButtton"
          onClick={handleShowWebServicesClick}
        >
          Show
        </button>

        {showWebServiceTable && ( // Render the table only when showWebServiceTable is true
          <div className="savedRestWebservice">
            <table>
              <tr>
                <th>Name</th>
                <th className="webServiceRestHeading">Type</th>
              </tr>
              {webServices.map((service, index) => (
                <div key={index}>
                  <tr>
                    <td>{service.fnameRest}</td>
                    <td className="webServiceRestHeading">
                      {service.selectedOptionRestType}
                    </td>
                  </tr>
                </div>
              ))}
            </table>
          </div>
        )}
      </div>

      {showWebServices && (
        <button className="web_service" onClick={handleWebServicesClick}>
          Web Services +
        </button>
      )}

      {showWebServiceConfiguration && (
        <WebServices onHandleAddWebService={handleAddWebServiceRest} />
      )}
    </div>
  );
};

export default RestApi;
