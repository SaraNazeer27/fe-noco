import React, { useState } from "react";
import "./RestApi.css";

function RestApi() {
  return (
    <>
      <div className="buttonGroup">
        <div button className="save">
          Save
        </div>
        <div button className="cancel">
          Cancel
        </div>
      </div>
      <div className="firstContainer">
        <label>
          Name: <input name="myInput" />
        </label>

        <label className="weburl">
          Web URL: <input name="myInput" />
        </label>
        <br></br>
        <br></br>

        <label>
          Code: <input name="myInput" />
        </label>

        <label className="retries">
          Retries on call failure: <input name="myInput" />
        </label>
        <br></br>
        <br></br>

        <label>
          Description: <input name="myInput" />
        </label>

        <label className="type">
          Type: <input name="myInput" />
        </label>
        <br></br>
        <br></br>

        <label className="package">
          Package: <input name="myInput" />
        </label>
      </div>
      <div className="secondContainer">
        <nav>
          <ul className="navbar">
            <div className="method">Methods</div>

            <div className="authentication">Authentication</div>
          </ul>
          <hr></hr>
        </nav>
      </div>
      <div className="thirdContainer"></div>
    </>
  );
}

export default RestApi;
