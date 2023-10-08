const mongoose = require("mongoose");

const database = () => {
  const MONGO_URI = "mongodb://127.0.0.1:27017/Ecommerce";

  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully!");
    })
    .catch((err) => {
      console.error("MongoDB connection failed:", err);
      process.exit(1); // Exit the Node.js application with an error code
    });
};

module.exports = database;
