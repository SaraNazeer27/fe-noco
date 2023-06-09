import React, { useState } from "react";

function UndoableInput() {
  const [inputValue, setInputValue] = useState("");
  const [inputHistory, setInputHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      const previousIndex = historyIndex - 1;
      const previousInput = inputHistory[previousIndex];
      setInputValue(previousInput);
      setHistoryIndex(previousIndex);
    }
  };

  const handleRedo = () => {
    if (historyIndex < inputHistory.length - 1) {
      const nextIndex = historyIndex + 1;
      const nextInput = inputHistory[nextIndex];
      setInputValue(nextInput);
      setHistoryIndex(nextIndex);
    }
  };

  const handleSave = () => {
    const newHistory = inputHistory.slice(0, historyIndex + 1);
    newHistory.push(inputValue);
    setInputHistory(newHistory);
    setHistoryIndex(historyIndex + 1);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleUndo} disabled={historyIndex <= 0}>
        Undo
      </button>
      <button onClick={handleRedo} disabled={historyIndex >= inputHistory.length - 1}>
        Redo
      </button>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default UndoableInput;
