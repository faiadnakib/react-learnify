import express from "express";
import { upload } from "../utils/cloudinary.js"; // Import Cloudinary config
import { uploadImage } from "../controller/uploadController.js"; // Import controller

const router = express.Router();

// Upload route
router.post("/", upload.single("image"), uploadImage);

export default router;
