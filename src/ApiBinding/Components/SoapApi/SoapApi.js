import React, { useState, useEffect } from "react";
import "./SoapApi.css";
import WebServicesSoap from "../SoapApi/WebServicesSoap";
import AuthenticationSoap from "../SoapApi/AuthenticationSoap";
import ModalAuthenticationSoap from "../SoapApi/ModalAuthenticationSoap";
import { useNavigate, useParams } from "react-router-dom";

const SoapApi = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const [fname, setFname] = useState("");
  const [webURI, setWebURI] = useState("");
  const [tries, setTries] = useState("");
  const [description, setDescription] = useState("");
  const [nameSpace, setNameSpace] = useState("");
  const [type, setType] = useState("SOAP");
  const [showSContent, setShowSContent] = useState(false);
  const [modal, setModal] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [showWebServiceConfigurationSoap, setShowWebServiceConfigurationSoap] =
    useState(false);
  const [showAuthenticationSoap, setShowAuthenticationSoap] = useState(false);
  const [showWebServicesSoap, setShowWebServicesSoap] = useState(false);
  const [webServices, setWebServices] = useState([]);
  const [basicAuthentication, setBasicAuthentication] = useState([]);
  const [showWebServiceTableSoap, setShowWebServiceTableSoap] = useState(false);
  const [showSoapServiceTable, setShowSoapServiceTable] = useState(false);
  const [saved, setSaved] = useState(false);
  const [editData, setEditData] = useState(null);

  const resetState = () => {
    setFname("");
    setWebURI("");
    setTries("");
    setDescription("");
    setType("SOAP");
    setShowSContent(false);
    setModal(false);
    setShowModal(true);
    setShowWebServiceConfigurationSoap(false);
    setShowAuthenticationSoap(false);
    setShowWebServicesSoap(false);
  };

  const formDataRestApi = {
    fname,
    webURI,
    tries,
    description,
    webServices,
    type,
    nameSpace,
    basicAuthentication,
  };

  const setData = (data) => {
    setFname(data.fname);
    setWebURI(data.webURI);
    setTries(data.tries);
    setDescription(data.description);
    setType(data.type);
    setNameSpace(data.nameSpace);
    setWebServices(data.webServices);
    setShowWebServiceTableSoap(() => true);
  };

  const handleMethodButtonClick = () => {
    setShowSContent(true);
    setShowWebServicesSoap(true);
  };

  const handleCloseClickRest = () => {
    navigate("/ApiBinding", { replace: true });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formDataRestApi);
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
      } else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const validateForm = () => {
    if (!fname || !webURI || !tries || !description) {
      alert("Please fill in all required fields");
      return false;
    }
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    if (!urlPattern.test(webURI)) {
      alert("Please enter a valid URL for the Web Service URI");
      return false;
    }
    return true;
  };

  const toggleModal = () => {
    setShowWebServicesSoap(true);
  };

  const handleOpenClick = () => {
    setShowAuthenticationSoap(true);
    setShowWebServicesSoap(false);
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
    setWebServices((prevParameters) => [...prevParameters, parameter]);
    setShowWebServiceConfigurationSoap(false);
  };

  const handleAuthentication = (parameter) => {
    setBasicAuthentication((prevParameters) => [...prevParameters, parameter]);
    setShowAuthenticationSoap(false);
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

  const handleWebServicesClick = () => {
    setShowWebServiceConfigurationSoap((prevState) => !prevState);
  };

  const handleShowWebServicesClick = () => {
    setShowWebServiceTableSoap((prevState) => !prevState);
  };

  const handleAuthenticationClick = (newChange) => {
    setShowAuthenticationSoap(newChange);
  };

  const setForEdit = (editData) => {
    setEditData(() => editData);
    setShowWebServiceConfigurationSoap(() => true);
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
          <label htmlFor="tries">Retries on call failure:</label>
          <input
            type="number"
            id="tries"
            name="tries"
            value={tries}
            onChange={(event) => setTries(event.target.value)}
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

        {showWebServiceTableSoap && (
          <div className="savedRestWebservice">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th className="webServiceRestHeading">Type</th>
                </tr>
              </thead>
              <tbody>
                {webServices.map((service, index) => (
                  <tr key={index}>
                    <td>{service.webServiceName}</td>
                    <td className="webServiceRestHeading">
                      {service.selectedOptionSoapType}
                    </td>
                    <td
                      onClick={() => {
                        setForEdit(service);
                      }}
                    >
                      Edit
                    </td>
                  </tr>
                ))}
              </tbody>
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
        <WebServicesSoap
          onHandleAddWebService={handleAddWebService}
          webService={editData}
        />
      )}
    </div>
  );
};

export default SoapApi;
