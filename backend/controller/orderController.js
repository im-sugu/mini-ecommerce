const order = require("../models/orderModels");
const product = require("../models/productModels");


const createOrder = async (req, res) => {
  console.log(req.body);
  const cardItems = req.body;
  const amount = Number(
    cardItems.reduce((acc, cur) => acc + cur.product.price * cur.qty, 0)
  ).toFixed(2);
  const status = "pending";
//  update order

        // cardItems.forEach(async (item) => {
        //    const products = await product.findById(item.product._id);
           
        //    products.stock = products.stock - item.qty;
        //    await products.save();
        // });

  const orders = await order.create({ cardItems, amount, status });
  res.json({
    success: true,
    message: "Get createOrder",
    orders,
  });
};

module.exports = { createOrder };
