const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/psd", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error);
    });
};

module.exports = connectToDatabase;
