const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  created_date: {
    type: Date,
    required: true,
  },
  personalInfo: {
    dob: { type: Date },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    fatherName: { type: String },
    address: {
      line1: String,
      line2: String,
      city: String,
      state: String,
      pincode: String,
    },
  },
  gst: [],
  it: [],
  audit: [],
});
const User = mongoose.model("User", UserSchema);
export default User;
