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
              <li key={item.value}>
                <Link
                  className="link-menu"
                  to={`/ApiBinding/create/${item.value}`}
                >
                  <span className="option-label">{item.label}</span>
                  <br />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {showApiServiceTable && (
        <div className="savedApiservice">
          <div className="grid-container">
            {savedApi.map((service) => (
              <div
                className="grid-item"
                key={service._id}
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
        </div>
      )}
    </div>
  );
};

export default ApiHome;
