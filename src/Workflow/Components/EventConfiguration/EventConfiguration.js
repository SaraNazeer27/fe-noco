// import React, { useState, useEffect } from "react";
// import "./EventConfiguration.css";

// const EventConfiguration = (props) => {
//   const [selectedType, setSelectedType] = useState(props.selectedType);

//   useEffect(() => {
//     setSelectedType(props.selectedType);
//   }, [props.selectedType]);

//   console.log(selectedType);

//   return (
//     <div className="eventConfigurationContainer">
//       <h3>{selectedType.name}</h3>

//       {selectedType.configurationFields &&
//         selectedType.configurationFields.map((configurationField) => (
//           <div key={configurationField.key}>
//             <label htmlFor="options">{configurationField.label}:</label>{" "}
//             &nbsp;&nbsp;&nbsp;
//             {configurationField.fieldType === "dropdown" && (
//               <select
//                 id="options"
//                 // value={selectedOption}
//                 // onChange={handleSelectOption}
//               >
//                 <option value=""></option>
//                 {configurationField.options &&
//                   configurationField.options.map((option) => (
//                     <option key={option.value} value={option.value}>
//                       {option.displayValue}
//                     </option>
//                   ))}
//               </select>
//             )}
//           </div>
//         ))}
//       <div>
//         <label>
//           Only when:
//           {/* <MultipleClick /> */}
//         </label>{" "}
//         &nbsp;&nbsp;&nbsp;
//       </div>
//       <div>
//         <label>Disable workflow:</label> &nbsp;&nbsp;&nbsp;
//         <input type="checkbox" className="breakB" />
//       </div>
//     </div>
//   );
// };

// export default EventConfiguration;

// Correct Code
// import React, { useState, useEffect } from "react";
// import "./EventConfiguration.css";

// const EventConfiguration = (props) => {
//   const [selectedType, setSelectedType] = useState(props.selectedType);
//   const [isClosed, setIsClosed] = useState(false);
//   const [isDropdownSelected, setIsDropdownSelected] = useState(false);

//   useEffect(() => {
//     setSelectedType(props.selectedType);
//   }, [props.selectedType]);

//   console.log(selectedType);

//   const handleClose = () => {
//     setIsClosed(true);
//   };

//   const handleSelectOption = (event) => {
//     setIsDropdownSelected(true);
//   };

//   if (isClosed) {
//     setIsClosed(false);
//     return null;
//   }

//   return (
//     <div className="eventConfigurationContainer">
//       <button className="closeButton" onClick={handleClose}>
//         X
//       </button>
//       <h3>{selectedType.name}</h3>

//       {selectedType.configurationFields &&
//         selectedType.configurationFields.map((configurationField) => (
//           <div key={configurationField.key}>
//             <label htmlFor="options">{configurationField.label}:</label>{" "}
//             &nbsp;&nbsp;&nbsp;
//             {configurationField.fieldType === "dropdown" && (
//               <select
//                 id="options"
//                 value={isDropdownSelected ? "" : undefined}
//                 onChange={handleSelectOption}
//               >
//                 <option value=""></option>
//                 {configurationField.options &&
//                   configurationField.options.map((option) => (
//                     <option key={option.value} value={option.value}>
//                       {option.displayValue}
//                     </option>
//                   ))}
//               </select>
//             )}
//           </div>
//         ))}
//       <div>
//         <label>Only when:</label> &nbsp;&nbsp;&nbsp;
//       </div>
//       <div>
//         <label>Disable workflow:</label> &nbsp;&nbsp;&nbsp;
//         <input type="checkbox" className="breakB" />
//       </div>
//     </div>
//   );
// };

// export default EventConfiguration;

import React, { useState, useEffect } from "react";
import "./EventConfiguration.css";

const EventConfiguration = (props) => {
  const [selectedType, setSelectedType] = useState(props.selectedType);
  const [isClosed, setIsClosed] = useState(false);
  const [isDropdownSelected, setIsDropdownSelected] = useState(false);

  useEffect(() => {
    setSelectedType(props.selectedType);
  }, [props.selectedType]);

  console.log(selectedType);

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
    <div className="eventConfigurationContainer">
      <button className="closeButton" onClick={handleClose}>
        X
      </button>
      <h3>{selectedType.name}</h3>

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
        <label>Only when:</label> &nbsp;&nbsp;&nbsp;
      </div>
      <div>
        <label>Disable workflow:</label> &nbsp;&nbsp;&nbsp;
        <input type="checkbox" className="breakB" />
      </div>
    </div>
  );
};

export default EventConfiguration;