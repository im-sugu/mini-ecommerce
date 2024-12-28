const express = require("express");
const {
  getProductsList,
  getSingleProduct,
} = require("../controller/productController");
const router = express.Router();

router.route("/products").get(getProductsList);
router.route("/product/:id").get(getSingleProduct);

module.exports = router;
