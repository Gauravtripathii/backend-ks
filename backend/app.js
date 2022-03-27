const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

app.use(express.static(path.join(__dirname, "build")));

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.post("/signup", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:5000");
});
