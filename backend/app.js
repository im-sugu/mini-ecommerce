const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const app = express();
const connectDataBase = require("./config/connectdatabase")
const cors = require("cors")

dotenv.config({ path: path.join(__dirname, "config", "config.env") });
connectDataBase();
app.use(cors())
const products = require("./routes/product");
const orders = require("./routes/order");
app.use(express.json())
app.use("/api/v1", products);
app.use("/api/v1", orders);

app.listen(process.env.PORT, () => {
  console.log(
    `This is running on ${process.env.PORT}  ${process.env.NODE_ENV}`
  );
});
