import React, { useState } from "react";

function TextBox() {
  const [text, setText] = useState("");
  const [savedText, setSavedText] = useState("");
  const [style, setStyle] = useState({
    fontFamily: "",
    fontSize: "",
    fontWeight: "",
    fontStyle: "",
    color: "",
    textAlign: "",
    width: "200px",
    height: "100px",
  });
  const [showProperties, setShowProperties] = useState(false);
  const [inputWidth, setInputWidth] = useState("200");
  const [inputHeight, setInputHeight] = useState("100");

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleStyleChange(e) {
    const { name, value } = e.target;
    setStyle((prevStyle) => ({
      ...prevStyle,
      [name]: value,
    }));
  }

  function handleFontSizeChange(e) {
    setStyle((prevStyle) => ({
      ...prevStyle,
      fontSize: `${e.target.value}px`,
    }));
  }

  function handleBoldChange(e) {
    setStyle((prevStyle) => ({
      ...prevStyle,
      fontWeight: e.target.checked ? "bold" : "",
    }));
  }

  function handleItalicChange(e) {
    setStyle((prevStyle) => ({
      ...prevStyle,
      fontStyle: e.target.checked ? "italic" : "",
    }));
  }

  function handleEdit() {
    setShowProperties(true);
  }

  function handleSave() {
    setSavedText(text);
    setShowProperties(false);
  }

  function handleClose() {
    setShowProperties(false);
    setText(savedText);
  }

  function handleWidthChange(e) {
    setInputWidth(e.target.value);
  }

  function handleHeightChange(e) {
    setInputHeight(e.target.value);
  }

  function handleSizeUpdate(e) {
    if (e.key === "Enter") {
      setStyle((prevStyle) => ({
        ...prevStyle,
        width: `${inputWidth}px`,
        height: `${inputHeight}px`,
      }));
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm">
          {!showProperties && (
            <button onClick={handleEdit}>Edit</button>
          )}
          <div className="col-3">
            <textarea
              style={style}
              value={text}
              onChange={handleTextChange}
              readOnly={!showProperties}
              onClick={handleEdit}
            />
          </div>
        </div>
        {showProperties && (
          <div className="col-sm">
            <div className="col-3">
              <label htmlFor="fontFamily">Font Family:</label>
              <select
                id="fontFamily"
                name="fontFamily"
                onChange={handleStyleChange}
              >
                <option value="">Select a font</option>
                <option value="Arial">Arial</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier New">Courier New</option>
              </select>
            </div>

            <div className="col-3">
              <label htmlFor="fontSize">Font Size:</label>
            </div>
            <div className="col-3">
              <input
                type="number"
                id="fontSize"
                name="fontSize"
                min="1"
                max="100"
                onChange={handleFontSizeChange}
              />
            </div>

            <div className="col-3">
              <label htmlFor="color">Color:</label>
            </div>
            <div className="col-3">
              <input
                type="color"
                id="color"
                name="color"
                onChange={handleStyleChange}
              />
            </div>

            <div className="col-3">
              <label htmlFor="textAlign">Text Align:</label>
            </div>
            <div className="col-3">
              <select
                id="textAlign"
                name="textAlign"
                onChange={handleStyleChange}
              >
                <option value="">Select an alignment</option>
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
            </div>

            <div className="col-1">
              <label htmlFor="bold">Bold:</label>
            </div>
            <div className="col-2">
              <input
                type="checkbox"
                id="bold"
                name="bold"
                onChange={handleBoldChange}
              />
            </div>

            <div className="col-1">
              <label htmlFor="italic">Italic:</label>
            </div>
            <div className="col-3">
              <input
                type="checkbox"
                id="italic"
                name="italic"
                onChange={handleItalicChange}
              />
            </div>

            <div className="col-3">
              <label htmlFor="width">Width:</label>
            </div>
            <div className="col-3">
              <input
                type="text"
                id="width"
                name="width"
                value={inputWidth}
                onChange={handleWidthChange}
                onKeyPress={handleSizeUpdate}
              />
            </div>

            <div className="col-3">
              <label htmlFor="height">Height:</label>
            </div>
            <div className="col-3">
              <input
                type="text"
                id="height"
                name="height"
                value={inputHeight}
                onChange={handleHeightChange}
                onKeyPress={handleSizeUpdate}
              />
            </div>

            <div className="col-3">
              <button onClick={handleSave}>Save</button>
              <button onClick={handleClose}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TextBox;
