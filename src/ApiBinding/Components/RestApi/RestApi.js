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
  const [tries, setTries] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("REST");
  const [showContent, setShowContent] = useState(false);
  const [modal, setModal] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [showWebServiceConfiguration, setShowWebServiceConfiguration] =
    useState(false);
  const [showAuthentication, setShowAuthentication] = useState(false);
  const [showWebServices, setShowWebServices] = useState(false);
  const [webServices, setWebServices] = useState([]);
  const [basicAuthentication, setBasicAuthentication] = useState([]);
  const [showWebServiceTable, setShowWebServiceTable] = useState(false);
  const [showRestServiceTable, setShowRestServiceTable] = useState(false);
  const [saved, setSaved] = useState(false);
  const [editData, setEditData] = useState(null);

  const resetState = () => {
    setSelectedOption("option1");
    setFname("");
    setWebURI("");
    setTries("");
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
    tries,
    description,
    webServices,
    type,
    basicAuthentication,
  };

  const setData = (data) => {
    setSelectedOption(data.selectedOption);
    setFname(data.fname);
    setWebURI(data.webURI);
    setTries(data.tries);
    setDescription(data.description);
    setType(data.type);
    setWebServices(data.webServices);
    setShowWebServiceTable(() => true);
  };

  const handleMethodButtonClick = () => {
    setShowContent(true);
    setShowWebServices(true);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmitRest = async (event) => {
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
    setShowWebServices(true);
  };

  const handleOpenClick = () => {
    setShowAuthentication(true);
    setShowWebServices(false);
  };

  const handleWebServicesClick = () => {
    setShowWebServiceConfiguration((prevState) => !prevState);
  };

  const handleShowWebServicesClick = () => {
    setShowWebServiceTable((prevState) => !prevState);
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
    debugger;
    const count = webServices.length;
    if (parameter["id"] == 0) {
      parameter["id"] = count + 1;

      setWebServices((prevParameters) => [...prevParameters, parameter]);
    } else {
      let tobeAdded = [...webServices];
      tobeAdded = tobeAdded.map((res) => {
        if (res.id == parameter.id) return { ...parameter };
        return { ...res };
      });
      setWebServices((prevParameters) => [...tobeAdded]);
    }
    setEditData(() => {});
    setShowWebServiceConfiguration(false);
  };

  const handleAuthenticationRest = (parameter) => {
    // let count = requestParametersRest.length;
    // parameter["id"] = count + 1;
    setBasicAuthentication((prevParameters) => [...prevParameters, parameter]);
    setShowAuthentication(false);
  };

  const handleAuthenticationClick = (newChange) => {
    setShowAuthentication(newChange);
  };

  const setForEdit = (editData) => {
    setEditData(() => editData);
    setShowWebServiceConfiguration(() => true);
  };
  const closeWebService = () => {
    setEditData(() => {});
    setShowWebServiceConfiguration(() => false);
  };
  //alert(editData);
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

        {showWebServiceTable && (
          <div className="savedRestWebservice">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {webServices.map((service, index) => (
                  <tr key={index}>
                    <td>{service.webServiceName}</td>
                    <td>{service.selectedOptionRestType}</td>

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

      {showWebServices && (
        <button className="web_service" onClick={handleWebServicesClick}>
          Web Services +
        </button>
      )}

      {showWebServiceConfiguration && (
        <WebServices
          onHandleAddWebService={handleAddWebServiceRest}
          webService={editData}
          onClose={closeWebService}
        />
      )}
    </div>
  );
};

export default RestApi;
