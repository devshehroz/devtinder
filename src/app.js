const express = require("express");

const app = express();

app.use("/home", (req, res) => {
  res.send("Home Page");
});

app.use("/about", (req, res) => {
  res.send("About Page");
});

app.use("/testimonial", (req, res) => {
  res.send("Testimonial Page");
});

app.use("/contact-us", (req, res) => {
  res.send("Contact Us");
});

app.listen(7777, () => {
  console.log("code is working fine");
});

app.use("/", (req, res) => {
  res.send("Hello From The Server!");
});
