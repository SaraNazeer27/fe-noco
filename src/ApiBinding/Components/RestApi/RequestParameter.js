import React, { useState } from "react";
import "./RequestParameter.css";
import DisplayData from "./DisplayData";
import WebServices from "./WebServices";

const RequestParameter = (props) => {
  const [lname, setLname] = useState("");
  const [selectedType, setSelectedType] = useState("Method Address Parameter");
  const [codeAddress, setCodeAddress] = useState("");
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [inputRequestArr, setInputRequestArr] = useState({});

  const formDataRequestRest = {
    lname,
    selectedType,
    codeAddress,
  };

  const resetState = () => {
    setLname("");
    setSelectedType("Method Address Parameter");
    setCodeAddress("");
    setShowRequestModal(true);
  };

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (!validateForm()) {
    //   return;
    // }
    console.log(JSON.stringify(formDataRequestRest));
    props.toClose();
    props.onAdd(formDataRequestRest);
    console.log(formDataRequestRest);
  };

  const validateForm = () => {
    // Check if the required fields are filled in
    if (!lname || !selectedType || !codeAddress) {
      alert("Please fill in all required fields");
      return false;
    }
    return true;
  };

  const handleCloseRequestModal = () => {
    props.toClose();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </label>
        <br />
        <div>
          <label htmlFor="dropdown">Parameter Type:</label>
          <select id="dropdown" value={selectedType} onChange={handleChange}>
            <option value="Method Address Parameter">
              Method Address Parameter
            </option>
            <option value="Query Parameter">Query Parameter</option>
            <option value="Header Parameter">Header Parameter</option>
            <option value="Cookie Parameter">Cookie Parameter</option>
          </select>
        </div>
        <label>
          Code address:
          <textarea
            value={codeAddress}
            onChange={(e) => setCodeAddress(e.target.value)}
          />
        </label>
        <br />

        <br />
        <button className="ok-button" type="submit" onClick={handleSubmit}>
          OK
        </button>
        <button className="close-button" onClick={handleCloseRequestModal}>
          Close
        </button>
      </form>
    </div>
  );
};

export default RequestParameter;
