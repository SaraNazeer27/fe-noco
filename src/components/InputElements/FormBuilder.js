import React, { useState } from 'react';
import TextEditor from './TextEditor';
import TableCreation from './TableCreation';
import SearchField from './SearchField';
import FileUpload from './FileUpload';

const InputElements = () => {
  const [components, setComponents] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const componentType = event.dataTransfer.getData('componentType');
    const newComponent = getComponentByType(componentType);
    setComponents([...components, newComponent]);
  };

  const getComponentByType = (type) => {
    switch (type) {
      case 'textEditor':
        return <TextEditor />;
      case 'tableCreation':
        return <TableCreation />;
      case 'searchField':
        return <SearchField />;
      case 'fileUpload':
        return <FileUpload />;
      default:
        return null;
    }
  };

  const handleDragStart = (event, componentType) => {
    event.dataTransfer.setData('componentType', componentType);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '20px' }}>
        <h5>InputElements</h5>
        <div>
          <div
            draggable="true"
            onDragStart={(event) => handleDragStart(event, 'textEditor')}
          >
            Text Editor
          </div>
          <div
            draggable="true"
            onDragStart={(event) => handleDragStart(event, 'tableCreation')}
          >
            Table Creation
          </div>
          <div
            draggable="true"
            onDragStart={(event) => handleDragStart(event, 'searchField')}
          >
            Search Field
          </div>
          <div
            draggable="true"
            onDragStart={(event) => handleDragStart(event, 'fileUpload')}
          >
            File Upload
          </div>
        </div>
      </div>
      <div>
        <h5>Drop here</h5>
        <div
          style={{ border: '1px solid #ccc', minHeight: '200px' }}
          onDragOver={(event) => event.preventDefault()}
          onDrop={handleDrop}
        >
          {components}
        </div>
      </div>
    </div>
  );
};

export default InputElements;
