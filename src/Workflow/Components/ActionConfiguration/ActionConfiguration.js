import React, { useState, useEffect } from "react";
import "./ActionConfiguration.css";

const ActionConfiguration = (props) => {
  const [selectedType, setSelectedType] = useState(props.selectedType);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setSelectedType(props.selectedType);
  }, [props.selectedType]);

  console.log(selectedType);

  return (
    <>
      <div className="actionConfigurationContainer">
        <h3>{selectedType.name}</h3>

        {selectedType.configurationFields &&
          selectedType.configurationFields.map((configurationField) => (
            <div key={configurationField.key}>
              <label htmlFor="options">{configurationField.label}:</label>{" "}
              &nbsp;&nbsp;&nbsp;
              {configurationField.fieldType === "dropdown" && (
                <select
                  id="options"
                  // value={selectedOption}
                  // onChange={handleSelectOption}
                >
                  <option value=""></option>
                  {configurationField.options &&
                    configurationField.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.displayValue}
                      </option>
                    ))}
                </select>
              )}
            </div>
          ))}
        <div>
          <label>
            Only when:
            {/* <MultipleClick /> */}
          </label>{" "}
          &nbsp;&nbsp;&nbsp;
        </div>
        <div>
          <label>Disable workflow:</label> &nbsp;&nbsp;&nbsp;
          <input type="checkbox" className="breakB" />
        </div>
      </div>
    </>
  );
};

export default ActionConfiguration;
