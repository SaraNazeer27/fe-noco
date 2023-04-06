import React, { useState } from "react";
import "./Params.css";

function Params() {
  const [rows, setRows] = useState(1);

  const addRow = () => {
    setRows(rows + 1);
  };

  const renderRow = () => {
    let rowsArray = [];
    for (let i = 0; i < rows; i++) {
      rowsArray.push(
        <div>
          <form onSubmit={handleSubmit}></form>
          <tr key={i}>
            <td onClick={addRow}>
              <input type="text" name="column1" />{" "}
            </td>
            <td>
              {/* {" "} */}
              <input type="text" name="column1" />{" "}
            </td>
            <td>
              {/* {" "} */}
              <input type="text" name="column1" />{" "}
            </td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
        </div>
      );
    }
    return rowsArray;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const rowData = {
      column1: formData.get("column1"),
      column2: formData.get("column2"),
      column3: formData.get("column3"),
    };
    setRows([...rows, rowData]);
    event.target.reset();
  };

  return (
    <div>
      <div className="frame">
        <table className="bordered-table">
          <thead>
            <tr>
              <div className="head">
                <th>Key</th>
                <th>Value</th>
                <th>Description</th>
              </div>
            </tr>
          </thead>
          <tbody>{renderRow()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Params;
