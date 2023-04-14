import React, { useState } from "react";
import "./EventDetailConfiguration.css";
import Select from "react-select";

const optionList = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "blue", label: "Blue" },
  { value: "white", label: "White" },
];

const EventDetailConfiguration = (props) => {
  const selectedActionType = props.selectedActionType;

  const [selectedOptions, setSelectedOptions] = useState();
  const [isClosed, setIsClosed] = useState(false);
  const [isDropdownSelected, setIsDropdownSelected] = useState(false);

  console.log(selectedActionType);

  const handleClose = () => {
    props.onChangeConfigurationPopup(false);
  };

  const handleSelectOption = (event) => {
    setIsDropdownSelected(true);
  };

  function handleSelect(data) {
    setSelectedOptions(data);
  }

  return (
    <>
      <div className="action">
        <button className="closeButton" onClick={handleClose}>
          X
        </button>

        <h3>Action : {selectedActionType.name}</h3>

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
              {(configurationField.fieldType === "password" ||
                configurationField.fieldType === "text" ||
                configurationField.fieldType === "email" ||
                configurationField.fieldType === "checkbox" ||
                configurationField.fieldType === "multiselect") && (
                <input
                  key={configurationField.id}
                  type={configurationField.fieldType}
                />
              )}
            </div>
          ))}

        <div>
          Only when:
          <Select
            options={optionList}
            placeholder="Select color"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            isMulti
          />
          &nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </>
  );
};

export default EventDetailConfiguration;
