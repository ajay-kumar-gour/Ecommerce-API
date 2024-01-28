const express = require("express");
const bodyParser = require("body-parser");
// console.log(express);

const app = express();

const PORT = 4120;

//app.use(bodyParser.json()); //  third party middleware -- used for parsing json data

app.use(express.json()); // Inbuilt middleware that comes with latest express , does the same thing like body-parser
app.get("/", (req, res) => {
  res.status(200).send([
    { category: "Phone", productName: "Apple" },
    { category: "Clothes", productName: "Frock" },
  ]);
});

app.post("/", (req, res) => {
  const data = req.body;
  console.log(data);
  res.status(200).send("Data received..");
});

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT ${PORT}`);
});
