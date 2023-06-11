import React, { useState } from "react";
import "./ApiHome.css";
import RestApi from "../RestApi/RestApi";
import SoapApi from "../SoapApi/SoapApi";

const ApiHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const menuItems = [
    { label: "Rest Service", value: "item1" },
    { label: "Soap Service", value: "item2" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const cancelHandler = () => {
    setSelectedItem(() => null);
  };
  return (
    <div className="container">
      {selectedItem == null && (
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          + New Integration
        </button>
      )}
      {selectedItem && selectedItem.value === "item1" && (
        <RestApi toCancel={cancelHandler} />
      )}
      {selectedItem && selectedItem.value === "item2" && (
        <SoapApi toCancel={cancelHandler} />
      )}
      <div className="dropdown">
        {isOpen && (
          <ul className="dropdown-menu">
            {menuItems.map((item) => (
              <li key={item.value} onClick={() => handleItemClick(item)}>
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ApiHome;
