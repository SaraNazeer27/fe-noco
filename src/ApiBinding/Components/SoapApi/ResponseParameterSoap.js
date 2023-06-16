import React, { useState } from "react";
import "./ResponseParameterSoap.css";

function ResponseParameterSoap(props) {
  const [nameSoap, setNameSoap] = useState("");
  const [sparameterTypeSoap, setSParameterTypeSoap] =
    useState("Body Parameter");
  const [selementPathSoap, setSElementPathSoap] = useState("");
  const [sdataTypeSoap, setSDataTypeSoap] = useState("Text");
  const [showResponseModalSoap, setShowResponseModalSoap] = useState(false);

  const formDataResponseRest = {
    nameSoap,
    sparameterTypeSoap,
    selementPathSoap,
    sdataTypeSoap,
  };

  const resetState = () => {
    setNameSoap("");
    setSDataTypeSoap("");
    setSElementPathSoap("");
    setSParameterTypeSoap("Body Parameter");
    setShowResponseModalSoap(true);
  };

  const handleChange = (event) => {
    setSParameterTypeSoap(event.target.value);
  };

  const validateForm = () => {
    // Check if the required fields are filled in
    if (
      !nameSoap ||
      !sparameterTypeSoap ||
      !selementPathSoap ||
      !sdataTypeSoap
    ) {
      alert("Please fill in all required fields");
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (!validateForm()) {
    //   return;
    // }
    console.log(JSON.stringify(formDataResponseRest));
    setShowResponseModalSoap(true);
    props.toClose();
    props.onAdd(formDataResponseRest);
  };

  const handleCloseRequestModalSoap = () => {
    props.toClose();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={nameSoap}
            onChange={(e) => setNameSoap(e.target.value)}
          />
        </label>
        <br />
        <div>
          <label htmlFor="dropdown">Parameter Type:</label>
          <select
            id="dropdown"
            value={sparameterTypeSoap}
            onChange={handleChange}
          >
            <option value="Body Parameter">Body Parameter</option>
            <option value="Header Parameter">Header Parameter</option>
            <option value="Cookie Parameter">Cookie Parameter</option>
          </select>
        </div>

        <label>
          Path to element (JSON path):
          <textarea
            value={selementPathSoap}
            onChange={(e) => setSElementPathSoap(e.target.value)}
          />
        </label>
        <br />

        <div>
          <label htmlFor="dataTypeDropdown">DataType:</label>
          <select
            id="dataTypeDropdown"
            value={sdataTypeSoap}
            onChange={(e) => setSDataTypeSoap(e.target.value)}
          >
            <option value="Text">Text</option>
            <option value="Integer">Integer</option>
            <option value="Decimal">Decimal</option>
            <option value="Boolean">Boolean</option>
            <option value="Date/Time">Date/Time</option>
            <option value="Unique Identifier">Unique Identifier</option>
            <option value="Date">Date</option>
            <option value="Time">Time</option>
            <option value="Object">Object</option>
          </select>
        </div>

        <br />
        <button className="ok-button" type="submit" onClick={handleSubmit}>
          OK
        </button>
        <button
          className="close-button"
          type="button"
          onClick={handleCloseRequestModalSoap}
        >
          Close
        </button>
      </form>
    </div>
  );
}

export default ResponseParameterSoap;
