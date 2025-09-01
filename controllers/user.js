const httpStatus = require("http-status");
const User = require("../models/User"); // adjust path as needed

module.exports.index = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(httpStatus.OK).json(users);
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Error fetching users", error: error.message });
  }
};

module.exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let users = await User.find({ email });
    res.status(httpStatus.OK).json(users);
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Error fetching users", error: error.message });
  }
};

module.exports.Signup = async (req, res) => {
  let {
    name,
    email,
    password,
    country,
    pincode,
    state,
    city,
    mobile,
    date,
    image,
  } = req.body;
  let data = await User.find({ email });
  if (data) {
    return res
      .status(httpStatus.OK)
      .json({ message: "User is already registered" });
  }
  let newUser = new User({
    name,
    email,
    country,
    pincode,
    state,
    city,
    mobile,
  });
  let users = await newUser.save();
  res.status(httpStatus.OK).json(users);
};

module.exports.update = async (req, res) => {};
