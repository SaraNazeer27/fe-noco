import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = () => {
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
    <div>
      <h2>Image Upload</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleSubmit} disabled={!selectedImage}>
        Submit
      </button>
      <p>{message}</p>
    </div>
  );
};

export default ImageUpload;