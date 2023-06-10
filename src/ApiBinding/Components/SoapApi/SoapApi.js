import React, { useState } from "react";
import ApiHome from "../ApiHome/ApiHome";
import "./SoapApi.css";

const SoapApi = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [fname, setFname] = useState("");
  const [tname, setTname] = useState("");
  const [webURI, setWebURI] = useState("");
  const [code, setCode] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [pack, setPack] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${fname}, Selected Option: ${selectedOption}`);
  };

  const handleButtonClick = () => {
    setShowModal(!showModal); // Toggle the value of showModal
  };

  return (
    <>
      <button className="save" type="submit" onSubmit={handleSubmit}>
        Save
      </button>

      <button className="cancel" type="submit">
        Cancel
      </button>

      <div class="container1">
        <form className="form1">
          <label for="fname">Name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={fname}
            onChange={(event) => setFname(event.target.value)}
          />
          <br />
        </form>

        <form className="form2">
          <label for="webURL">Web service URI:</label>

          <input
            type="url"
            id="webURI"
            name="webURI"
            value={webURI}
            onChange={(event) => setWebURI(event.target.value)}
          />
          <br />
        </form>

        <form className="form3">
          <label for="code">Code:</label>

          <input
            type="text"
            id="code"
            name="code"
            value={code}
            onChange={(event) => setCode(event.target.value)}
          />
          <br />
        </form>

        <form className="form4">
          <label for="quantity">Retries on call failure:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
          <br />
        </form>

        <form className="form5">
          <label for="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <br />
        </form>

        <form className="form6">
          <label for="type">Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            value="SOAP"
            onChange={(event) => setType(event.target.value)}
          />
          <br />
        </form>

        <div>
          <label htmlFor="dropdown">Package:</label>
          <select id="dropdown" value={selectedOption} onChange={handleChange}>
            <option value="option1"></option>
            <option value="option2">Custom</option>
            <option value="option3">UsrTrial</option>
          </select>
        </div>
      </div>

      <div class="container2">
        <div>
          <button onClick={handleButtonClick}>Toggle Content</button>
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleButtonClick}>
                  &times;
                </span>
                <form>
                  <label for="tname">Name:</label>
                  <input
                    type="text"
                    id="tname"
                    name="tname"
                    value={tname}
                    onChange={(event) => setTname(event.target.value)}
                  />
                  <br />
                </form>
                <label htmlFor="dropdown">Parameter Type:</label>
                <select
                  id="dropdown"
                  value={selectedOption}
                  onChange={handleChange}
                >
                  <option value="option1">Body Parameter</option>
                  <option value="option2">Head Parameter</option>
                  <option value="option3">Cookies Parameter</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SoapApi;
