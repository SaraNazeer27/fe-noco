import React, { useState } from "react";
import "./RequestParameterSoap.css";
import WebServicesSoap from "../SoapApi/WebServicesSoap";

function RequestParameterSoap(props) {
  const [parameterName, setParameterName] = useState(
    props.requestParametersSoap ? props.requestParametersSoap.parameterName : ""
  );
  const [id, setId] = useState(
    props.requestParametersSoap && props.requestParametersSoap.id
      ? props.requestParametersSoap.id
      : 0
  );
  const [parameterType, setParameterType] = useState(
    props.requestParametersSoap
      ? props.requestParametersSoap.parameterType
      : "Body Parameter"
  );
  const [elementPath, setElementPath] = useState(
    props.requestParametersSoap ? props.requestParametersSoap.elementPath : ""
  );
  const [dataType, setDataType] = useState("Text");
  const [showRequestModalSoap, setShowRequestModalSoap] = useState(false);

  const formDataResponseRest = {
    parameterName,
    parameterType,
    elementPath,
    dataType,
    id,
  };

  const setData = (data) => {
    setParameterName(data.parameterName);
    setParameterType(data.parameterType);
    setElementPath(data.elementPath);
    setDataType(data.dataType);
  };

  const resetState = () => {
    setParameterName("");
    setDataType("");
    setElementPath("");
    setParameterType("Body Parameter");
    setShowRequestModalSoap(true);
  };

  const handleChange = (event) => {
    setParameterType(event.target.value);
  };

  const validateForm = () => {
    // Check if the required fields are filled in
    if (!parameterName || !parameterType || !elementPath || !dataType) {
      alert("Please fill in all required fields");
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(JSON.stringify(formDataResponseRest));
    setShowRequestModalSoap(true);
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
            value={parameterName}
            onChange={(e) => setParameterName(e.target.value)}
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
          onClick={handleCloseRequestModalSoap}
        >
          Close
        </button>
      </form>
    </div>
  );
}

export default RequestParameterSoap;
