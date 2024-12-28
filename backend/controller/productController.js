const product = require("../models/productModels");

const getProductsList = async (req, res) => {
  const query = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};
  const products = await product.find(query);

  res.json({
    success: true,
    message: "Get Products Working",
    products,
  });
};

const getSingleProduct = async (req, res) => {
  try {
    const singleProduct = await product.findById(req.params.id);
    res.json({
      success: true,
      message: "Get single product",
      singleProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "invalid id" });
  }
};

module.exports = { getProductsList, getSingleProduct };
