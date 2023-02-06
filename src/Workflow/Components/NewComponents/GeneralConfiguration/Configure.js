import React, { useState } from "react";
import "./Configure.css";
import { IoCloseSharp } from "react-icons/io5";
import Select from "react-select";
import MultipleClick from "./MultipleClick";

export default function Configure() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  // const [colorState, setColorState] = useState("");
  const options = [
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "gray", label: "Gray" },
    { value: "yellow", label: "Yellow" },
    { value: "pink", label: "Pink" },
  ];

  const option = [{ value: "create", label: "Create a workflow folder" }];

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="general">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="general-content">
            <nav>
              <div className="nav-title">
                <button className="close-btn">
                  <IoCloseSharp className="close-sym" size={30} />
                </button>
              </div>
            </nav>
            <br></br>

            <div className="general">
              <div className="color">Event color :</div>
              <Select options={options} className="SelectC" />
              <br></br>
              <div className="workflow">Workflow Folder :</div>
              <Select option={option} className="SelectW" />
              <br></br>
              <br></br>
              <div className="onlyWhen">Only When :</div>
              <MultipleClick></MultipleClick>
              <div className="break">Add a breakpoint in debug mode</div>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="checkbox" className="breakB" />
              <br></br>
              <br></br>
              <div className="disable">Disable workflow</div>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="checkbox" className="disableW" />
            </div>

            <div className="cont">
              <button className="close-modal" onClick={toggleModal}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
