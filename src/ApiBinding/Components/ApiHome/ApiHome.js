// import React, { useState } from "react";
// import { render } from "react-dom";
// import "./ApiHome.css";
// import Select from "react-select";

// const options = [
//   { value: "choc", label: "choc" },
//   { value: "cand", label: "cand" },
// ];

// function ApiHome() {
//   const [selectValue, setSelectValue] = useState("");
//   const selectRef = React.useRef();
//   const handleChange = (selectValue) => {
//     setSelectValue(selectValue);
//   };
//   const onClick = () => {
//     if (selectRef.current) {
//       selectRef.current.focus();
//     }
//   };
//   return (
//     <>
//       <button className="integration" onClick={onClick}>
//         + New integration
//       </button>
//       <Select
//         openMenuOnFocus={true}
//         ref={selectRef}
//         options={options}
//         value={selectValue}
//         onChange={handleChange}
//       >
//         {" "}
//       </Select>
//     </>
//   );
// }

// export default ApiHome;
import React, { Component } from "react";
import RestApi from "../RestApi/RestApi";

class ApiHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.container = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false,
      });
    }
  };

  handleButtonClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    return (
      // <div className="App">
      //   <div className="container" ref={this.container}>
      //     <button
      //       type="button"
      //       className="button"
      //       onClick={this.handleButtonClick}
      //     >
      //       + New integration
      //     </button>
      //     {this.state.open && (
      //       <div className="dropdown">
      //         <ul>
      //           <ul>Rest Service</ul>
      //           <ul>Soap Service</ul>
      //         </ul>
      //       </div>
      //     )}
      //   </div>
      // </div>
      <RestApi />
    );
  }
}

export default ApiHome;
