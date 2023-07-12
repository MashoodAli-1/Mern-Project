import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  //get all form data
  const { firstName, lastName, email, password } = req.body;
  console.log(req.body);
  // check if email already exist
  const user = await User.findOne({ email: email });
  if (user) {
    res.status(406).json({ msg: "user already exist" });
    return;
  }

  //hash the password
  const saltRounds = 10;
  const salt = await bcrypt.genSaltSync(saltRounds);
  const hashedPassword = await bcrypt.hashSync(password, salt);
  console.log(hashedPassword);
  req.body.password = hashedPassword;
  await User.create(req.body);
  res.status(201).json({ msg: "user is created" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  // check if email exist
  const user = await User.findOne({ email: email });
  if (!user) {
    res.status(406).json({ msg: "credential not found" });
    return;
  }
  const matched = await bcrypt.compare(password, user.password);
  if (!matched) {
    res.status(406).json({ msg: "credential not found" });
    return;
  }

  //create JWT token
  const payload = {
    username: user.email,
    _id: user._id,
  };
  const secret = "some secret";
  const token = jwt.sign(payload, secret);
  res.json({ msg: "successfully logged in", token });
};
