const express = require("express");

const { createOrder } = require("../controller/orderController");

const router = express.Router();

router.route("/createOrder").post(createOrder);

module.exports = router;
