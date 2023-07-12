import User from "../models/User.js";

export const index = (req, res) => {
  res.json({ user: req.user });
};
