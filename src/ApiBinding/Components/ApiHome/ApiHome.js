import React, { useEffect, useState } from "react";
import "./ApiHome.css";
import RestApi from "../RestApi/RestApi";
import SoapApi from "../SoapApi/SoapApi";
import { Link, useNavigate } from "react-router-dom";

const ApiHome = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const menuItems = [
    { label: "Rest Service", value: "REST" },
    { label: "Soap Service", value: "SOAP" },
  ];
  const [savedApi, setSavedApi] = useState([]);
  const [showApiServiceTable, setShowApiServiceTable] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    setShowApiServiceTable(false); // Reset showRestServiceTable to false when a different item is selected
  };

  const handleServiceClick = (service) => {
    //setSelectedItem({ label: service.fname, value: "item1" }); // Set the selected item with the service details
    //setShowApiServiceTable(false); // Hide the service list
    navigate(`/ApiBinding/${service.type}/${service._id}`, { replace: true });
  };

  const cancelHandler = () => {
    setSelectedItem(null);
  };

  const saveHandler = () => {
    setSelectedItem(null);
  };

  const fetchApi = () => {
    fetch("/api/apiintegration")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setSavedApi(data);
        setShowApiServiceTable(true);
        console.log("Fetched data:", data);
      })
      .catch((error) => {
        console.log("Error in fetching data:", error);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // const handleShowApiClick = () => {
  //   if (!showRestServiceTable) {
  //     fetchRestApi();
  //   }
  //   setShowRestServiceTable((prevState) => !prevState);
  // };

  return (
    <div className="container">
      {selectedItem === null && (
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          + New Integration
        </button>
      )}
      {selectedItem && selectedItem.value === "item1" && (
        <RestApi toCancel={cancelHandler} toAdd={saveHandler} />
      )}
      {selectedItem && selectedItem.value === "item2" && (
        <SoapApi toCancel={cancelHandler} toAdd={saveHandler} />
      )}
      <div className="dropdown">
        {isOpen && (
          <ul className="dropdown-menu">
            {menuItems.map((item) => (
              // <li key={item.value} onClick={() => handleItemClick(item)}>

              // </li>
              <Link
                className="link-menu"
                key={item.value}
                to={`/ApiBinding/create/${item.value}`}
              >
                {item.label}
              </Link>
            ))}
          </ul>
        )}
      </div>

      {showApiServiceTable && (
        <div className="savedApiservice">
          <div className="grid-container">
            {savedApi.map((service, index) => (
              <div
                className="grid-item"
                key={index}
                onClick={() => handleServiceClick(service)}
              >
                <div className="savedApi">
                  <h2>{service.fname}</h2>

                  <h5>{service.type}</h5>
                </div>
                <div className="detail">
                  <p>{service.fname}</p>
                  <p>{service.webURI}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="grid-container2">
            {savedApi.map((service, index) => (
              <div
                className="grid-item2"
                key={index}
                onClick={() => handleServiceClick(service)}
              >
                <div className="savedApi2">
                  <h2>{service.sname}</h2>
                  <h5>{service.sType}</h5>
                </div>
                <div className="detail2">
                  <p>{service.sname}</p>
                  <p>{service.swebURI}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      )}
    </div>
  );
};

export default ApiHome;
