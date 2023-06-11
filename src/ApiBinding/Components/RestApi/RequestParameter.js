import React, { useState } from "react";
import "./RequestParameter.css";

function RequestParameter() {
  const [lname, setLname] = useState("");
  const [selectedType, setSelectedType] = "option1";
  const [codeAddress, setCodeAddress] = useState("");
  const [code, setCode] = useState("");
  const [number, setNumber] = useState("");
  const [showRequestModal, setShowRequestModal] = useState(false);

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      lname,
      selectedType,
      codeAddress,
      code,
      number,
    };
    const formDataJson = JSON.stringify(formData);
    console.log(formDataJson);
    setShowRequestModal(true);
  };

  const handleCloseRequestModal = () => {
    setShowRequestModal(false);
  };

  return (
    <form>
      {showRequestModal || (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </label>
          <br />

          <div>
            <label htmlFor="dropdown">Parameter Type:</label>
            <select id="dropdown" value={selectedType} onChange={handleChange}>
              <option value="option1">Method Address Parameter</option>
              <option value="option2">Query Parameter</option>
              <option value="option3">Header Parameter</option>
              <option value="option3">Cookie Parameter</option>
            </select>
          </div>

          <label>
            Code address:
            <textarea
              value={codeAddress}
              onChange={(e) => setCodeAddress(e.target.value)}
            />
          </label>
          <br />

          <label>
            Code:
            <textarea value={code} onChange={(e) => setCode(e.target.value)} />
          </label>

          <form className="form8" onSubmit={handleSubmit}>
            <label htmlFor="authentication">Required</label>
            <input
              type="checkbox"
              id="required"
              name="required"
              value="required"
            />
            <br />
          </form>

          <label htmlFor="quantity">Default value (Constant):</label>
          <input
            type="number"
            id="number"
            name="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <br />
          <br />

          <button className="ok-button" onClick={""}>
            OK
          </button>
          <button className="close-button" onClick={handleCloseRequestModal}>
            Close
          </button>
        </form>
      )}
    </form>
  );
}

export default RequestParameter;

// import React, { useState } from "react";
// import "./ResponseParameter.css";

// function RequestParameter() {
//   const [lname, setLname] = useState("");
//   const [selectedType, setSelectedType] = useState("option1");
//   const [codeAddress, setCodeAddress] = useState("");
//   const [code, setCode] = useState("");
//   const [number, setNumber] = useState("");
//   const [showRequestModal, setShowRequestModal] = useState(false);

//   const handleChange = (event) => {
//     setSelectedType(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = {
//       lname,
//       selectedType,
//       codeAddress,
//       code,
//       number,
//     };
//     const formDataJson = JSON.stringify(formData);
//     console.log(formDataJson);
//   };

//   const handleCloseRequestModal = () => {
//     setShowRequestModal(false);
//   };

//   return (
//     <form>
//       <div className="modal-overlay">
//         <div className="modal"></div>
//         <>
//           {showRequestModal && (
//           <form onSubmit={handleSubmit}>
//             <label>
//               Name:
//               <input
//                 type="text"
//                 value={lname}
//                 onChange={(e) => setLname(e.target.value)}
//               />
//             </label>
//             <br />
//           </form>
//           <div>
//             <label htmlFor="dropdown">Parameter Type:</label>
//             <select id="dropdown" value={selectedType} onChange={handleChange}>
//               <option value="option1">Method Address Parameter</option>
//               <option value="option2">Query Parameter</option>
//               <option value="option3">Header Parameter</option>
//               <option value="option3">Cookie Parameter</option>
//             </select>
//           </div>

//           <label>
//             Code address:
//             <textarea
//               value={codeAddress}
//               onChange={(e) => setCodeAddress(e.target.value)}
//             />
//           </label>
//           <br />

//           <label>
//             Code:
//             <textarea value={code} onChange={(e) => setCode(e.target.value)} />
//           </label>

//           <form className="form8" onSubmit={handleSubmit}>
//             <label htmlFor="authentication">Required</label>
//             <input
//               type="checkbox"
//               id="required"
//               name="required"
//               value="required"
//             />
//             <br />
//           </form>

//           <label htmlFor="quantity">Default value (Constant):</label>
//           <input
//             type="number"
//             id="number"
//             name="number"
//             value={number}
//             onChange={(e) => setNumber(e.target.value)}
//           />
//           <br />

//           <br />
//           )}
//           </>
//         </div>

//       </div>

//     </form>
//   );
// }

// export default RequestParameter;
