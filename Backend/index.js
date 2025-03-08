import express from "express";
import userRoutes from "./routes/users.js";
import authRouter from "./routes/auth.js";
import bookRoutes from "./routes/bookRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js"; // Import upload routes
import log from "./middlewares/logger.js";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import "dotenv/config";
import pdfRoutes from "./routes/pdfRoutes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error(`Error connecting to database: ${err}`));

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.ALLOWED_ORIGIN,
  })
);
app.use(log);

// Routes
app.get("/", (req, res) => res.json({ message: "API is working" }));

// Mount routes
app.use("/users", userRoutes);
app.use("/auth", authRouter);
app.use("/api", bookRoutes);
app.use("/upload", uploadRoutes); // Add upload route
app.use("/pdfs", pdfRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

export default app;
