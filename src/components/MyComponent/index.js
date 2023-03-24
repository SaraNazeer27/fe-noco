import React, { useState } from 'react';

function MyComponent() {
  const [showProperties, setShowProperties] = useState(false);

  const handleShowProperties = () => {
    setShowProperties(true);
  };

  const handleCloseProperties = () => {
    setShowProperties(false);
  };

  return (
    <div>
      <button onClick={handleShowProperties}>Show properties</button>

      {showProperties &&
        <div className="properties-window">
          <h2>Properties</h2>
          <p>Property 1: Value 1</p>
          <p>Property 2: Value 2</p>
          <button onClick={handleCloseProperties}>Close</button>
        </div>
      }
    </div>
  );
}
export default MyComponent; 