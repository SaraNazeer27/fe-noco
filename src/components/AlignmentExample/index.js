import React, { useState } from "react";

function TextBox() {
  const [text, setText] = useState("");
  const [style, setStyle] = useState({
    fontFamily: "",
    fontSize: "",
    fontWeight: "",
    fontStyle: "",
    color: "",
    textAlign: "",
    left: 0,
    top: 0
  });

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleStyleChange(e) {
    const { name, value } = e.target;
    setStyle(prevStyle => ({
      ...prevStyle,
      [name]: value
    }));
  }

  function handleFontSizeChange(e) {
    setStyle(prevStyle => ({
      ...prevStyle,
      fontSize: `${e.target.value}px`
    }));
  }

  function handleBoldChange(e) {
    setStyle(prevStyle => ({
      ...prevStyle,
      fontWeight: e.target.checked ? "bold" : ""
    }));
  }

  function handleItalicChange(e) {
    setStyle(prevStyle => ({
      ...prevStyle,
      fontStyle: e.target.checked ? "italic" : ""
    }));
  }

  function handleDragStart(e) {
    e.dataTransfer.setData("text/plain", "");
    e.dataTransfer.setDragImage(e.target, 0, 0);
  }

  function handleDragEnd(e) {
    const { clientX, clientY } = e;
    setStyle(prevStyle => ({
      ...prevStyle,
      left: clientX,
      top: clientY
    }));
  }

  return (
    <div
      style={{ position: "absolute", left: style.left, top: style.top }}
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <textarea style={style} value={text} onChange={handleTextChange} />
      <div>
        <label htmlFor="fontFamily">Font Family:</label>
        <select id="fontFamily" name="fontFamily" onChange={handleStyleChange}>
          <option value="">Select a font</option>
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </select>
        <label htmlFor="fontSize">Font Size:</label>
        <input type="number" id="fontSize" name="fontSize" min="1" max="100" onChange={handleFontSizeChange} />
        <label htmlFor="color">Color:</label>
        <input type="color" id="color" name="color" onChange={handleStyleChange} />
        <label htmlFor="textAlign">Text Align:</label>
        <select id="textAlign" name="textAlign" onChange={handleStyleChange}>
          <option value="">Select an alignment</option>
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
        <label htmlFor="bold">Bold:</label>
        <input type="checkbox" id="bold" name="bold" onChange={handleBoldChange} />
        <label htmlFor="italic">Italic:</label>
        <input type="checkbox" id="italic" name="italic" onChange={handleItalicChange} />
      </div>
    </div>
  );
}

export default TextBox;


