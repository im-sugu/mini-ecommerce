const mongoose = require("mongoose");

const connectDataBase = () =>{
    mongoose.connect("mongodb://localhost:27017/mini-ecommerce")
    .then((con) => {
      console.log("db connect"+ con.connection.host);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectDataBase;