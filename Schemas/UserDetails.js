const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema(
  {
    username: String,
    email: { type: String, unique: true },
    password: String,
    resetPasswordOTP: Number,
  },
  {
    collection: "UserInfo",
  }
);
mongoose.model("UserInfo", UserDetailSchema);

//to add new chemicals
