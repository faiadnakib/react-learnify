// model/Pdf.js
import mongoose from "mongoose";

const pdfSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  fileDescription: {
    type: String,
    required: true,
  },
  fileId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "fs.files", // Refers to the GridFS files collection
  },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
});

const Pdf = mongoose.model("Pdf", pdfSchema);

export default Pdf; // Use `export default`
