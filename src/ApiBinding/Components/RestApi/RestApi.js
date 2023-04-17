import React, { useState } from "react";
import ApiHome from "../ApiHome/ApiHome";
import "./RestApi.css";

const RestApi = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p>This is the content of the modal box</p>
      </div>
    </div>
  );
};

export default RestApi;
