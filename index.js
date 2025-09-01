const express = require("express");
const app = express();
const port = 1000;
const mongose = require("mongoose");
app.listen(port, (req, res) => {
  console.log("Server is runing !");
});
