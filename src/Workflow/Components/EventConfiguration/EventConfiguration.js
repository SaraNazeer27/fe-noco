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

const optionListS = [
  { value: "ocean1", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" },
  { value: "forest", label: "Forest" },
  { value: "slate", label: "Slate" },
  { value: "silver", label: "Silver" },
];

const EventConfiguration = (props) => {
  const selectedType = props.selectedType;
  const [selectedOptionEvent, setSelectedOptionEvent] = useState(null);
  const [selectedOptionMultiSelect, setSelectedOptionMultiSelect] = useState(
    []
  );
  const [isDropdownSelected, setIsDropdownSelected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  console.log(selectedType);

  const eventData = {
    selectedOptionEvent,
    selectedOptionMultiSelect,
    // Assuming this value comes from an input or state
  };

  const handleClose = () => {
    props.onChangeConfigurationPopup(false);
  };

  const handleSelectOption = (event) => {
    setIsDropdownSelected(true);
    setIsModalOpen(true);
  };

  function handleSelect(selectedOption) {
    setSelectedOptionEvent(selectedOption);
    setSelectedOptionMultiSelect(selectedOptionMultiSelect);
  }

  function handleMultiSelect(event) {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptionMultiSelect(selectedValues);
  }

  function handleMultiSelect(selectedOptions) {
    const selectedValues = selectedOptions.map((option) => option.value);
    setSelectedOptionMultiSelect(selectedValues);
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
            {/* <label htmlFor={configurationField.key}>
              {configurationField.label}:
            </label>{" "} */}
            &nbsp;&nbsp;&nbsp;
            {configurationField.fieldType === "dropdown" && (
              <select
                id={configurationField.key}
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
        <label htmlFor="eventColor">Event Color:</label>
        <select
          id="eventColor"
          value={selectedOptionEvent ? selectedOptionEvent.value : ""}
          onChange={handleSelect}
        >
          <option value=""></option>
          {optionList.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="onlyWhen">Only when:</label>
        <Select
          id="onlyWhen"
          options={optionListS}
          placeholder="Only When"
          value={selectedOptionEvent}
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
