const express = require("express");
// require("dotenv").configure();

const app = express();

const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  res.send("SEVER ON");
});

app.listen(port, (req, res) => {
  console.log("sever runing on the port" + port);
});
