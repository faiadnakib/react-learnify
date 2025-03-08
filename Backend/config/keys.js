// config/keys.js
import dotenv from "dotenv";

// Load environment variables from the .env file
dotenv.config();

// Export the MongoDB URI from the environment variables
export const mongoURI = process.env.MONGO_URI || "your_default_mongo_uri_here";
