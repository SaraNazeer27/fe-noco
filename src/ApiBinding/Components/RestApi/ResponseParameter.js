import React, { useState } from "react";
import "./ResponseParameter.css";

function RequestParameter(props) {
  const [name, setName] = useState("");
  const [parameterType, setParameterType] = useState("Body Parameter");
  const [elementPath, setElementPath] = useState("");
  const [codeResponse, setCodeResponse] = useState("");
  const [dataType, setDataType] = useState("");
  const [showResponseModal, setShowResponseModal] = useState(false);

  const formDataResponseRest = {
    name,
    parameterType,
    elementPath,
    codeResponse,
    dataType,
  };

  const resetState = () => {
    setName("");
    setCodeResponse("");
    setDataType("");
    setElementPath("");
    setParameterType("Body Parameter");
    setShowResponseModal(true);
  };

  const handleChange = (event) => {
    setParameterType(event.target.value);
  };

  const validateForm = () => {
    // Check if the required fields are filled in
    if (!name || !parameterType || !elementPath || !codeResponse || !dataType) {
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <div>
          <label htmlFor="dropdown">Parameter Type:</label>
          <select id="dropdown" value={parameterType} onChange={handleChange}>
            <option value="Body Parameter">Body Parameter</option>
            <option value="Header Parameter">Header Parameter</option>
            <option value="Cookie Parameter">Cookie Parameter</option>
          </select>
        </div>

        <label>
          Path to element (JSON path):
          <textarea
            value={elementPath}
            onChange={(e) => setElementPath(e.target.value)}
          />
        </label>
        <br />

        <div>
          <label htmlFor="dataTypeDropdown">DataType:</label>
          <select
            id="dataTypeDropdown"
            value={dataType}
            onChange={(e) => setDataType(e.target.value)}
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

export default RequestParameter;
