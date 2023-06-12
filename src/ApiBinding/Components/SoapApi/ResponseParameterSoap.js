import React, { useState } from "react";
import "./ResponseParameterSoap.css";

function ResponseParameterSoap(props) {
  const [nameSoap, setNameSoap] = useState("");
  const [parameterTypeSoap, setParameterTypeSoap] = useState("option1");
  const [elementPathSoap, setElementPathSoap] = useState("");
  const [codeSoap, setCodeSoap] = useState("");
  const [dataTypeSoap, setDataTypeSoap] = useState("");
  const [numberSoap, setNumberSoap] = useState("");
  const [showResponseModalSoap, setShowResponseModalSoap] = useState(false);

  const handleChangeSoap = (event) => {
    setParameterTypeSoap(event.target.value);
  };

  const handleSubmitSoap = (event) => {
    event.preventDefault();
    const formDataSoap = {
      nameSoap,
      parameterTypeSoap,
      elementPathSoap,
      codeSoap,
      numberSoap,
      dataTypeSoap,
    };
    const formDataJsonSoap = JSON.stringify(formDataSoap);
    console.log(formDataJsonSoap);
    setShowResponseModalSoap(true);
  };

  const handleCloseResponseModalSoap = () => {
    // setShowResponseModalSoap(false);
    props.toClose();
  };

  return (
    <form>
      {showResponseModalSoap || (
        <div onSubmit={handleSubmitSoap}>
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
            <label htmlFor="dropdownSoap">Parameter Type:</label>
            <select
              id="dropdownSoap"
              value={parameterTypeSoap}
              onChange={handleChangeSoap}
            >
              <option value="option1">Body Parameter</option>
              <option value="option2">Header Parameter</option>
              <option value="option3">Cookie Parameter</option>
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

          <label>
            Code:
            <textarea
              value={codeSoap}
              onChange={(e) => setCodeSoap(e.target.value)}
            />
          </label>

          <div>
            <label htmlFor="dropdownSoap">DataType:</label>
            <select
              id="dropdownSoap"
              value={dataTypeSoap}
              onChange={handleChangeSoap}
            >
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

          <div className="form8Soap" onSubmit={handleSubmitSoap}>
            <label htmlFor="authenticationSoap">Is array</label>
            <input
              type="checkbox"
              id="requiredSoap"
              name="requiredSoap"
              value="requiredSoap"
            />
            <br />
          </div>

          <label htmlFor="quantitySoap">Default value (Constant):</label>
          <input
            type="number"
            id="numberSoap"
            name="numberSoap"
            value={numberSoap}
            onChange={(e) => setNumberSoap(e.target.value)}
          />
          <br />
          <br />

          <button className="ok-buttonSoap">OK</button>
          <button
            className="close-buttonSoap"
            onClick={handleCloseResponseModalSoap}
          >
            Close
          </button>
        </div>
      )}
    </form>
  );
}

export default ResponseParameterSoap;
