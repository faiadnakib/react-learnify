import Book from "../model/book.js"; // Correct casing for the file name

// Function to handle book upload
export const uploadBook = async (req, res) => {
  try {
    // Log to see if the image file was uploaded properly
    console.log(req.file); // Should contain information about the uploaded file

    // Extract book data from the request
    const { bookName, author, description } = req.body;

    // Ensure that the file upload worked properly
    if (!req.file) {
      return res.status(400).json({ message: "No image file uploaded" });
    }

    // Cloudinary image URL will be in req.file.path after uploading via multer
    const imageUrl = req.file.path;

    // Create a new book instance
    const newBook = new Book({
      bookName,
      author,
      description,
      imageUrl, // Store the Cloudinary image URL
    });

    // Save the book to MongoDB
    await newBook.save();

    // Respond with the uploaded book info and image URL
    res.status(200).json({
      message: "Book uploaded successfully!",
      imageUrl: newBook.imageUrl, // Return the image URL from Cloudinary
    });
  } catch (error) {
    console.error("Error uploading book:", error);
    res.status(500).json({ message: "Failed to upload book." });
  }
};
