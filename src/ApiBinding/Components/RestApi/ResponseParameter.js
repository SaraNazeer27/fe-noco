import React, { useState } from "react";
import "./ResponseParameter.css";

function RequestParameter(props) {
  const [name, setName] = useState("");
  const [parameterType, setParameterType] = useState("option1");
  const [elementPath, setElementPath] = useState("");
  const [code, setCode] = useState("");
  const [dataType, setDataType] = useState("");
  const [number, setNumber] = useState("");
  const [showResponseModal, setShowResponseModal] = useState(false);

  const handleChange = (event) => {
    setParameterType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      parameterType,
      elementPath,
      code,
      number,
      dataType,
    };
    const formDataJson = JSON.stringify(formData);
    console.log(formDataJson);
    setShowResponseModal(true);
  };

  const handleCloseResponseModal = () => {
    // setShowResponseModal(false);
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
            <option value="option1">Body Parameter</option>
            <option value="option2">Header Parameter</option>
            <option value="option3">Cookie Parameter</option>
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

        <label>
          Code:
          <textarea value={code} onChange={(e) => setCode(e.target.value)} />
        </label>

        <div>
          <label htmlFor="dropdown">DataType:</label>
          <select id="dropdown" value={dataType} onChange={handleChange}>
            <option value="option1">Text</option>
            <option value="option2">Integer</option>
            <option value="option3">Decimal</option>
            <option value="option4">Boolean</option>
            <option value="option5">Date/Time</option>
            <option value="option6">Unique Identifier</option>
            <option value="option7">Date</option>
            <option value="option8">Time</option>
            <option value="option9">Object</option>
          </select>
        </div>

        <form className="form8" onSubmit={handleSubmit}>
          <label htmlFor="authentication">Required</label>
          <input
            type="checkbox"
            id="required"
            name="required"
            value="required"
          />
          <br />
        </form>

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

        <button className="ok-button" onClick={""}>
          OK
        </button>
        <button className="close-button" onClick={handleCloseResponseModal}>
          Close
        </button>
      </form>
    </div>
  );
}

export default RequestParameter;
