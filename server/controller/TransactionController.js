import Transaction from "../models/Transaction.js";

export const index = async (req, res) => {
  const transaction = await Transaction.find({}).sort({ createdAt: -1 });
  // console.log(transaction);
  res.json({ data: transaction });
};

export const create = async (req, res) => {
  const { amount, description, date } = req.body;
  await Transaction.create({ amount, description, date });
  res.json({ msg: "success" });
};

export const destroy = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  await Transaction.findOneAndDelete({ _id: id });
  console.log(`id: ${id} deleted successfully!`);
  res.json({ msg: "success" });
};

export const update = async (req, res) => {
  const { id } = req.params;
  console.log("update called");
  await Transaction.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  console.log("updated!");
  res.json({ msg: "success" });
};

export const test = async (req, res, next) => {
  const transaction = await Transaction.find({}).sort({ createdAt: -1 });
  // console.log(transaction);
  res.json({ data: transaction });
};
