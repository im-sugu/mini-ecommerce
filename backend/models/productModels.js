const mongoose = require("mongoose");

const productShema = new mongoose.Schema(
  {
    name: String,
    price: String,
    description: String,
    rating: String,
    images: [{ image: String }],
    category: String,
    seller: String,
    stocks: String,
    numOfReviews: String,
  },
  { timestamps: true }
);

const product = mongoose.model("Products", productShema);

module.exports = product;
