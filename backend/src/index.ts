import dotenv from "dotenv";
dotenv.config({ path: "config/config.env" });

import app from "./app";
import { Server } from "http";
import connectDB from "./config/database";

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception thrown :", err.message);
  console.warn("shutting down server");
  process.exit(1);
});
connectDB();

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running on port " + process.env.PORT);
});

//unhandeled rejection handling
let server = new Server();
process.on("unhandledRejection", (err: Error) => {
  console.log(`Error:`, err.message);
  console.log("Shutting down the server");
  server.close(() => {
    process.exit(1);
  });
});
