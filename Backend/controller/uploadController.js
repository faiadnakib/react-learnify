const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Cloudinary automatically provides the file URL in `req.file.path`
    res.json({ imageUrl: req.file.path });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Error uploading image" });
  }
};

export { uploadImage };
