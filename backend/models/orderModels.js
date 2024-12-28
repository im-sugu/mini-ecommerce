const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    cardItems: Array,
    amount:String,
    status:String
  },
  { timestamps: true }
);

const order = mongoose.model("Orders", orderSchema);

module.exports = order;