import React, { useState } from "react";
import "./RequestParameter.css";
import WebServices from "./WebServices";

const RequestParameter = (props) => {
  const [parameterName, setParameterName] = useState(
    props.requestParameterRest ? props.requestParameterRest.parameterName : ""
  );
  const [parameterType, setParameterType] = useState(
    "Method Address Parameter"
  );

  const [showRequestModal, setShowRequestModal] = useState(false);
  const [inputRequestArr, setInputRequestArr] = useState({});
  const formDataRequestRest = {
    parameterName,
    parameterType,
  };

  const resetState = () => {
    setParameterName("");
    setParameterType("Method Address Parameter");
    setShowRequestModal(true);
  };

  const handleChange = (event) => {
    setParameterType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    console.log(JSON.stringify(formDataRequestRest));
    props.toClose();
    props.onAdd(formDataRequestRest);
    console.log(formDataRequestRest);
  };

  const validateForm = () => {
    // Check if the required fields are filled in
    if (!parameterName || !parameterType) {
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
            value={parameterName}
            onChange={(e) => setParameterName(e.target.value)}
          />
        </label>
        <br />
        <div>
          <label htmlFor="dropdown">Parameter Type:</label>
          <select id="dropdown" value={parameterType} onChange={handleChange}>
            <option value="Method Address Parameter">
              Method Address Parameter
            </option>
            <option value="Query Parameter">Query Parameter</option>
            <option value="Header Parameter">Header Parameter</option>
            {props.requestType == "POST" && (
              <option value="Body Parameter">Body Parameter</option>
            )}
            <option value="Cookie Parameter">Cookie Parameter</option>
          </select>
        </div>

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
