import React, { useState } from "react";
import "./ResponseParameter.css";

function ResponseParameter(props) {
  console.log(props.responseParametersRest);
  const [responseParameterName, setResponseParameterName] = useState(
    props.responseParametersRest
      ? props.responseParametersRest.responseParameterName
      : ""
  );
  const [id, setId] = useState(
    props.responseParametersRest && props.responseParametersRest.id
      ? props.responseParametersRest.id
      : 0
  );
  const [responseParameterType, setResponseParameterType] = useState(
    props.responseParametersRest
      ? props.responseParametersRest.responseParameterType
      : "Body Parameter"
  );
  const [responseElementPath, setResponseElementPath] = useState("");
  const [codeResponse, setCodeResponse] = useState("");
  const [dataTypeResponse, setDataTypeResponse] = useState("Text");
  const [showResponseModal, setShowResponseModal] = useState(false);

  const formDataResponseRest = {
    id,
    responseParameterName,
    responseParameterType,
    responseElementPath,
    dataTypeResponse,
  };

  const resetState = () => {
    setResponseParameterName("");
    setCodeResponse("");
    setDataTypeResponse("");
    setResponseElementPath("");
    setResponseParameterType("Body Parameter");
    setShowResponseModal(true);
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
    console.log(JSON.stringify(formDataResponseRest));
    setShowResponseModal(true);
    props.toClose();
    props.onAdd(formDataResponseRest);
  };

  const handleCloseResponseModal = () => {
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
          onClick={handleCloseResponseModal}
        >
          Close
        </button>
      </form>
    </div>
  );
}

export default ResponseParameter;
