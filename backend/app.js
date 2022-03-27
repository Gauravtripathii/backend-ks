const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

app.use(express.static(path.join(__dirname, "build")));

<<<<<<< HEAD
app.get("/", (req, res) => {
  // res.send("Hello World");
  res.sendFile(path.join(__dirname, "build", "index.html"));
=======
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.post("/signup", (req, res) => {
  console.log(req.body);
>>>>>>> c6333ba97d1c29180dca36c8515b547830301fe2
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:5000");
});
