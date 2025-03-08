// pdfController.js (change CommonJS to ES module)
import mongoose from "mongoose";
import multer from "multer";
import Grid from "gridfs-stream";
import Pdf from "../model/Pdf.js"; // Add .js to the import path for ES module compatibility
import { mongoURI } from "../config/keys.js"; // Add .js to the import path for ES module compatibility

// MongoDB connection
const conn = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Initialize GridFS
let gfs;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("fs"); // The default collection for GridFS files
});

// Multer setup
const storage = multer.memoryStorage(); // Store file in memory for GridFS
const upload = multer({ storage: storage });

// Controller for handling PDF upload
const uploadPdf = [
  upload.single("pdfFile"),
  async (req, res) => {
    try {
      const { fileName, fileDescription } = req.body;

      if (!req.file) {
        return res.status(400).send({ message: "No file uploaded" });
      }

      // Save the PDF to GridFS
      const writestream = gfs.createWriteStream({
        filename: req.file.originalname,
        content_type: req.file.mimetype,
      });

      writestream.write(req.file.buffer);
      writestream.end();

      writestream.on("close", async (file) => {
        // Save metadata to MongoDB
        const newPdf = new Pdf({
          fileName,
          fileDescription,
          fileId: file._id, // file._id is the ObjectId in GridFS
        });

        await newPdf.save();
        res
          .status(200)
          .send({ message: "PDF uploaded successfully", fileId: file._id });
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Error uploading PDF", error: err });
    }
  },
];

// Export the controller function using ES module syntax
export default { uploadPdf };
