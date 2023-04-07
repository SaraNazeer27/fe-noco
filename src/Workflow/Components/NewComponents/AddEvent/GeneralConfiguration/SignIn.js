import React, { useState } from "react";
import "./SignIn.css";

const SignIn = () =>{
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="newFolder">
      <h3>Sign the User up </h3>
      <div>
        <label htmlFor="options">Email:</label> &nbsp;&nbsp;&nbsp;
      </div>
      <div>
        <label htmlFor="options">Password:</label> &nbsp;&nbsp;&nbsp;
      </div>
      <div>
        <label>Require a Password Confirmation:</label> &nbsp;&nbsp;&nbsp;
        <input type="checkbox" className="breakB" />
      </div>
    </div>
  );
}

export default SignIn;