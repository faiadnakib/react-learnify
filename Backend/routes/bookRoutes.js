import express from "express";
import { uploadBook } from "../controller/bookController.js";
import { upload } from "../utils/cloudinary.js"; // Import the upload middleware from cloudinary.js

const router = express.Router();

// Route for uploading book (including image)
router.post("/upload", upload.single("image"), uploadBook);

export default router;
