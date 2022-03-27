const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  // res.send("Hello World");
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:5000");
});
