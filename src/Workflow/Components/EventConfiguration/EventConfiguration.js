import React, { useState } from "react";
import "./EventConfiguration.css";
import Select from "react-select";

const optionList = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "blue", label: "Blue" },
  { value: "white", label: "White" },
];

const EventConfiguration = (props) => {
  const selectedType = props.selectedType;
  const [selectedOptions, setSelectedOptions] = useState();
  const [isDropdownSelected, setIsDropdownSelected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  console.log(selectedType);

  const handleClose = () => {
    props.onChangeConfigurationPopup(false);
  };

  const handleSelectOption = (event) => {
    setIsDropdownSelected(true);
    setIsModalOpen(true);
  };

  function handleSelect(data) {
    setSelectedOptions(data);
  }

  return (
    <div className="eventConfigurationContainer">
      <button className="closeButton" onClick={handleClose}>
        X
      </button>

      <h3>Event: {selectedType.name}</h3>

      {selectedType.configurationFields &&
        selectedType.configurationFields.map((configurationField) => (
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
        <label>Event Color:</label>
        <Select
          options={optionList}
          placeholder="Select color"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />
      </div>

      <div>
        <label>Disable workflow:</label> &nbsp;&nbsp;&nbsp;
        <input type="checkbox" className="breakB" />
      </div>
    </div>
  );
};

export default EventConfiguration;
