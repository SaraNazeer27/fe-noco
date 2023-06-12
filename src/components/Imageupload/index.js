import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleDragStart = (event) => {
    // Set some data to identify the drag source if needed
    event.dataTransfer.setData('text/plain', 'imageUpload');
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setSelectedImage(droppedFile);
  };

  const handleSubmit = () => {
    if (!selectedImage) {
      setMessage('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);

    axios
      .post('http://localhost:3001/submit', formData)
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        setMessage('Error submitting image');
      });
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h2>Image Upload</h2>
      <div
        style={{ border: '2px dashed gray', padding: '1rem', margin: '1rem 0' }}
      >
        <p>Drag and drop an image here</p>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleImageChange}
        />
        {selectedImage && (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            style={{ width: '100%' }}
          />
        )}
      </div>
      <button onClick={handleSubmit} disabled={!selectedImage}>
        Submit
      </button>
      <p>{message}</p>
    </div>
  );
};

export default ImageUpload;
