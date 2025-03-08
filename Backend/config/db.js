import mongoose from "mongoose";
import Grid from "gridfs-stream";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// MongoDB URI from environment variable (or use a default if needed)
const mongoURI = process.env.MONGO_URI || "your_mongo_connection_string_here";

// Create a MongoDB connection
const conn = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Initialize GridFS when the connection is established
let gfs;
conn.once("open", () => {
  // Initialize GridFS stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("fs"); // Set the collection name where files are stored (default is "fs")
});

export { gfs }; // Export gfs to use it in other files
