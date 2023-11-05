import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://unsplash.com/photos/man-standing-near-white-wall-d1UPkiFd04A",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
