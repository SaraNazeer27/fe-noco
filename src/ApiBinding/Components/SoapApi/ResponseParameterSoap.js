import React, { useState } from "react";
import "./ResponseParameterSoap.css";

function ResponseParameterSoap(props) {
  console.log(props.responseParametersSoap);
  const [responseParameterName, setResponseParameterName] = useState(
    props.responseParametersSoap
      ? props.responseParametersSoap.responseParameterName
      : ""
  );
  const [responseParameterType, setResponseParameterType] = useState(
    props.responseParametersSoap
      ? props.responseParametersSoap.responseParameterType
      : "Body Parameter"
  );
  const [responseElementPath, setResponseElementPath] = useState("");
  const [dataTypeResponse, setDataTypeResponse] = useState("Text");
  const [showResponseModalSoap, setShowResponseModalSoap] = useState(false);

  const formDataResponseRest = {
    responseParameterName,
    responseParameterType,
    responseElementPath,
    dataTypeResponse,
  };

  const resetState = () => {
    setResponseParameterName("");
    setDataTypeResponse("");
    setResponseElementPath("");
    setResponseParameterType("Body Parameter");
    setShowResponseModalSoap(true);
  };

  const handleChange = (event) => {
    setResponseParameterType(event.target.value);
  };

  const validateForm = () => {
    // Check if the required fields are filled in
    if (
      !responseParameterName ||
      !responseParameterType ||
      !responseElementPath ||
      !dataTypeResponse
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
            value={responseParameterName}
            onChange={(e) => setResponseParameterName(e.target.value)}
          />
        </label>
        <br />
        <div>
          <label htmlFor="dropdown">Parameter Type:</label>
          <select
            id="dropdown"
            value={responseParameterType}
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
            value={responseElementPath}
            onChange={(e) => setResponseElementPath(e.target.value)}
          />
        </label>
        <br />

        <div>
          <label htmlFor="dataTypeDropdown">DataType:</label>
          <select
            id="dataTypeDropdown"
            value={dataTypeResponse}
            onChange={(e) => setDataTypeResponse(e.target.value)}
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
