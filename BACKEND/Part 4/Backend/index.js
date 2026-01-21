const express = require("express");
const app = express();
const port = 8080;

// This following two statements are writen for allowing express to read and print json data in express js files

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.get("/register", (req, res) => {
  // res.send("Standard GET Response.");
  let { username, password } = req.query;
  res.send(`Welcome ${username} !<hr>
     This is a Standard GET request! <br> and Your pass is ${password} `);
});
app.post("/register", (req, res) => {
  // res.send("Standard POST Response.");

  let { username, password } = req.body;
  res.send(`Welcome ${username} !<hr>
    This is a Standard GET request! <br> and Your pass is ${password} `);
});
app.listen(port, () => {
  console.log("Server is listening at port:", port);
});
