import React from "react";

function DisplayData(props) {
  const { formData } = props;

  return (
    <div>
      <h2>Entered Data:</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Parameter Type</th>
            <th>Code Address</th>
            <th>Code</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{formData.lname}</td>
            <td>{formData.selectedType}</td>
            <td>{formData.codeAddress}</td>
            <td>{formData.code}</td>
            <td>{formData.number}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DisplayData;
