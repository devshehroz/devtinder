const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();
const port = 8000;

app.use(express.json());

connectDB()
  .then(() => {})
  .catch((err) => {
    if (err) console.log(err);
  });

app.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);

    await user.save(); // Save user to the database
    console.log("User data saved successfully!");
    res.send("User Added Successfully!");
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).send("Failed to create user.");
  }
});

// Basic GET route for testing server
// app.get("/", (req, res) => {
//   res.send("Server is working!");
// });

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
