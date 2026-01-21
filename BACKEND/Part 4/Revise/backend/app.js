const express = require("express");
const app = express();
const PORT = 8085;

// To parse urlencoded data from post request we have to convert it into an readable format by using middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
  let { username, password } = req.query;
  res.send(`Welcome ${username}`);
});
app.post("/register", (req, res) => {
  console.log(req.body);
  res.send("Standard POST response");
});

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}/`);
});
