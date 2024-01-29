const express = require("express");
require("dotenv").config();

// console.log(process.env.PORT);
const app = express();
const PORT = process.env.PORT || 8000; // do not put semicolon on the env file

console.log(PORT);

app.get("/main", (req, res) => {
  res.status(200).send("<h1>Main Application</h1>");
});

app.get("/", (req, res) => {
  res.status(200).send("HOME PAGE");
});

app.listen(PORT, () => {
  console.log(`Server is up and is listening on PORT ${PORT}`);
});
