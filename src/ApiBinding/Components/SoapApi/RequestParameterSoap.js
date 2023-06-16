import React, { useState } from "react";
import "./RequestParameterSoap.css";

function RequestParameterSoap(props) {
  const [lnameSoap, setLNameSoap] = useState("");
  const [parameterTypeSoap, setParameterTypeSoap] = useState("Body Parameter");
  const [elementPathSoap, setElementPathSoap] = useState("");
  const [dataTypeSoap, setDataTypeSoap] = useState("Text");
  const [showRequestModalSoap, setShowRequestModalSoap] = useState(false);

  const formDataResponseRest = {
    lnameSoap,
    parameterTypeSoap,
    elementPathSoap,
    dataTypeSoap,
  };

  const resetState = () => {
    setLNameSoap("");
    setDataTypeSoap("");
    setElementPathSoap("");
    setParameterTypeSoap("Body Parameter");
    setShowRequestModalSoap(true);
  };

  const handleChange = (event) => {
    setParameterTypeSoap(event.target.value);
  };

  const validateForm = () => {
    // Check if the required fields are filled in
    if (!lnameSoap || !parameterTypeSoap || !elementPathSoap || !dataTypeSoap) {
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
            value={lnameSoap}
            onChange={(e) => setLNameSoap(e.target.value)}
          />
        </label>
        <br />
        <div>
          <label htmlFor="dropdown">Parameter Type:</label>
          <select
            id="dropdown"
            value={parameterTypeSoap}
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
            value={elementPathSoap}
            onChange={(e) => setElementPathSoap(e.target.value)}
          />
        </label>
        <br />

        <div>
          <label htmlFor="dataTypeDropdown">DataType:</label>
          <select
            id="dataTypeDropdown"
            value={dataTypeSoap}
            onChange={(e) => setDataTypeSoap(e.target.value)}
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
