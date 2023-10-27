import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => console.log("err", err));
const app = express();
app.use(express.json());
app.listen(3001, () => {
  console.log("server is listening on port 3001!!");
});

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  // console.log("Err",err)
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
