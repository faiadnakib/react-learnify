import cloudinary from "cloudinary"; // Use default import for cloudinary
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2, // Use cloudinary.v2 here
  params: {
    folder: "book_images", // Name of the Cloudinary folder
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

// Multer middleware for handling file uploads
const upload = multer({ storage });

export { cloudinary, upload };
