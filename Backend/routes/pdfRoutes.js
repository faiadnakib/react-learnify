import express from "express";
import pdfController from "../controller/pdfController.js"; // Use ES module import

const router = express.Router();

// POST route for PDF upload
router.post("/upload", pdfController.uploadPdf);

export default router; // Use ES module export
