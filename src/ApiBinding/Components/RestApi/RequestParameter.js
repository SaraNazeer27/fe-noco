import React, { useState } from "react";
import "./RequestParameter.css";
import DisplayData from "./DisplayData";

const RequestParameter = (props) => {
  const [lname, setLname] = useState("");
  const [selectedType, setSelectedType] = useState("option1");
  const [codeAddress, setCodeAddress] = useState("");
  const [code, setCode] = useState("");
  const [number, setNumber] = useState("");
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      lname,
      selectedType,
      codeAddress,
      code,
      number,
    };
    const formDataJson = JSON.stringify(formData);
    console.log(formDataJson);
    setShowRequestModal(true);
    setFormData(formData);
  };

  const handleCloseRequestModal = () => {
    //setShowRequestModal(false);
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
            <option value="option1">Method Address Parameter</option>
            <option value="option2">Query Parameter</option>
            <option value="option3">Header Parameter</option>
            <option value="option4">Cookie Parameter</option>
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

        <label>
          Code:
          <textarea value={code} onChange={(e) => setCode(e.target.value)} />
        </label>

        <div className="form8" onSubmit={handleSubmit}>
          <label htmlFor="authentication">Required</label>
          <input
            type="checkbox"
            id="required"
            name="required"
            value="required"
          />
          <br />
        </div>

        <label htmlFor="quantity">Default value (Constant):</label>
        <input
          type="number"
          id="number"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <br />

        <button className="ok-button" type="submit">
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
