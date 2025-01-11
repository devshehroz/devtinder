const mongoose = require("mongoose");

const uri =
  "mongodb+srv://shehrozlaiq6:anLnOu01MOYwzwds@nodejs.fq42v.mongodb.net/devTinder";

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
