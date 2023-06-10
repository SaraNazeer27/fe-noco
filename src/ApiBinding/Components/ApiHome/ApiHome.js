import React, { useState } from "react";
import "./ApiHome.css";
import RestApi from "../RestApi/RestApi";
import SoapApi from "../SoapApi/SoapApi";

// function ApiHome() {
//   const [options, setOptions] = useState(["Rest Service", "Post Service"]);
//   const [selectedOption, setSelectedOption] = useState("");

//   const handleOptionChange = (e) => {
//     // setSelectedOption(e.target.value);
//   };

//   return (
//     <div className="container">
//       <select value={selectedOption} onChange={handleOptionChange}>
//         <option value="">+ New integration</option>
//         {options.map((option) => (
//           <option>{option}</option>
//         ))}
//       </select>
//     </div>
//   );
// }

// Correct code
// const ApiHome = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const menuItems = [
//     { label: "Rest Service", value: "item1" },
//     { label: "Soap Service", value: "item2" },
//   ];

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleItemClick = (item) => {
//     setSelectedItem(item);
//     setIsOpen(false);
//   };

//   const openModalA =
//     selectedItem && selectedItem.value === "item1" ? (
//       <ApiConfiguration />
//     ) : null;

//   return (
//     <div className="container">
//       <button className="dropdown-toggle" onClick={toggleDropdown}>
//         {selectedItem ? selectedItem.label : "+ New Integration"}
//       </button>
//       <div className="dropdown">
//         {isOpen && (
//           <ul className="dropdown-menu">
//             {menuItems.map((item) => (
//               <li key={item.value} onClick={() => handleItemClick(item)}>
//                 {item.label}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//       {openModalA}
//     </div>
//   );
// };

// export default ApiHome;

// import { Link } from "react-router-dom";

// const ApiHome = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const menuItems = [
//     { label: "Rest Service", value: "item1" },
//     { label: "Soap Service", value: "item2" },
//   ];

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleItemClick = (item) => {
//     setSelectedItem(item);
//     setIsOpen(false);
//   };

//   return (
//     <div className="container">
//       <button className="dropdown-toggle" onClick={toggleDropdown}>
//         {selectedItem ? selectedItem.label : "+ New Integration"}
//       </button>
//       <div className="dropdown">
//         {isOpen && (
//           <ul className="dropdown-menu">
//             {menuItems.map((item) => (
//               <li key={item.value} onClick={() => handleItemClick(item)}>
//                 {item.label === "Rest Service" ? (
//                   <Link className="link" to="/ApiConfiguration">
//                     {item.label}
//                   </Link>
//                 ) : (
//                   item.label
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ApiHome;

const ApiHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const menuItems = [
    { label: "Rest Service", value: "item1" },
    { label: "Soap Service", value: "item2" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  let apiComponent;
  if (selectedItem) {
    if (selectedItem.value === "item1") {
      apiComponent = <RestApi />;
    } else if (selectedItem.value === "item2") {
      apiComponent = <SoapApi />;
    }
  }

  return (
    <div className="container">
      {apiComponent ? (
        apiComponent
      ) : (
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          + New Integration
        </button>
      )}

      <div className="dropdown">
        {isOpen && (
          <ul className="dropdown-menu">
            {menuItems.map((item) => (
              <li key={item.value} onClick={() => handleItemClick(item)}>
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ApiHome;
