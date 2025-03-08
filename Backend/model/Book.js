import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    bookName: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true }, // Cloudinary image URL
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;
