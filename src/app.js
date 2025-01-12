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

app.get("/user", async (req, res) => {
  try {
    const user = await User.findOne(req.body);

    if (!user) {
      res.send("User Does Not Exist!");
    } else {
      res.send(user);
    }
  } catch (error) {
    console.log(error, error.message);
  }
});

app.get("/feed", async (req, res) => {
  try {
    const user = await User.find();
    if (!user) {
      res.send(user);
    } else {
      consol.log("Cannot Retrieve Users: They Don't Exist!");
    }
  } catch (error) {
    console.log(`There is a error finding Users ${error}`);
  }
});


// Basic GET route for testing server
// app.get("/", (req, res) => {
//   res.send("Server is working!");
// });

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
