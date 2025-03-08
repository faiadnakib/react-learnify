import React, { useState } from "react";
import axios from "axios";
import "./UploadBook.css"; // Your CSS file for styling

const UploadBook = () => {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  // Handle file selection
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submission
  const handleUpload = async () => {
    if (!bookName || !author || !description || !image) {
      alert("Please fill all fields and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("bookName", bookName);
    formData.append("author", author);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:4000/upload", // Fixed URL
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setImageUrl(response.data.imageUrl); // Save uploaded image URL
      alert("Book uploaded successfully!");
    } catch (error) {
      console.error("Error uploading book:", error);
      alert("Failed to upload book.");
    }
  };

  return (
    <div className="upload-book-container">
      <div className="content">
        <h1>Upload Book</h1>
        <input
          type="text"
          placeholder="Book Name"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          placeholder="Book Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="file" onChange={handleImageChange} />
        <button onClick={handleUpload}>Upload Book</button>

        {imageUrl && (
          <div>
            <h3>Uploaded Image:</h3>
            <img src={imageUrl} alt="Uploaded Book" />
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadBook;
