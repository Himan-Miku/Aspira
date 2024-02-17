import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorfn from "./middleware/error";
import UserRoute from "./routes/UserRoute";

let app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

//defining the routes
app.use("/api", UserRoute);

//using errorfunction for structured error message displaying
app.use(errorfn);

export default app;
