import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => console.log("err", err));
const app = express();
app.listen(3001, () => {
  console.log("server is listening on port 3001!!");
});

app.use("/api/users", userRouter);
