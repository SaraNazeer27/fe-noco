import React, { useState, useEffect } from "react";
import "./EventDetailConfiguration.css";

const EventDetailConfiguration = (props) => {
  const [selectedActionType, setSelectedActionType] = useState(
    props.selectedActionType
  );
  const [isClosed, setIsClosed] = useState(false);
  const [isDropdownSelected, setIsDropdownSelected] = useState(false);

  useEffect(() => {
    setSelectedActionType(props.selectedActionType);
  }, [props.selectedActionType]);

  console.log(selectedActionType);

  const handleClose = () => {
    setIsClosed(true);
  };

  const handleSelectOption = (event) => {
    setIsDropdownSelected(true);
  };

  if (isClosed) {
    setIsClosed(false);
    return null;
  }

  return (
    <>
      <div className="action">
        {/* <h3>ffffffff</h3>
    <div className="actionConfigurationContainer"> */}
        <button className="closeButton" onClick={handleClose}>
          Y
        </button>

        <h3>{selectedActionType.name}</h3>

        {selectedActionType.configurationFields &&
          selectedActionType.configurationFields.map((configurationField) => (
            <div key={configurationField.key}>
              <label htmlFor="options">{configurationField.label}:</label>{" "}
              &nbsp;&nbsp;&nbsp;
              {configurationField.fieldType === "dropdown" && (
                <select
                  id="options"
                  value={isDropdownSelected ? "" : undefined}
                  onChange={handleSelectOption}
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
          <label>Only when:</label> &nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </>
  );
};

export default EventDetailConfiguration;
