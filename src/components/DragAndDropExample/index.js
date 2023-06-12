import React, { useState } from 'react';

const DragAndDropExample = () => {
  const [text, setText] = useState('');

  const handleDragStart = (event, text) => {
    event.dataTransfer.setData('text/plain', text);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedText = event.dataTransfer.getData('text/plain');
    setText((prevText) => prevText + droppedText);
  };

  return (
    <div>
      <div
        draggable
        onDragStart={(event) => handleDragStart(event, 'Text')}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        Drag Me
      </div>
      <div>{text}</div>
    </div>
  );
};

export default DragAndDropExample;
