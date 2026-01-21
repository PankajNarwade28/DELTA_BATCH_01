const express = require("express");
const path = require("path");
const app = express();

let PORT = 3030;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public/css")));

// app.get("/home", (req, res) => {
//   res.send("Hi Family!");
// });

// app.use((req, res) => {
//   res.send("Request received through app.use");
//   console.log("Request received through app.use");
// });

// app.use((req, res) => {
//   let code =
// "<h1>Pankaj Digambar Narwade</h1><ul><li>MCA</li><li>Modern</li></ul>";
// res.send({
//   name: "Pankaj",
//   course: "MCA",
//   age: 24,
// });
//   res.send(code);
// });

// app.get("/:username/:id", (req, res) => {
//   console.log(req.params);
//   let { username, id } = req.params;
//   res.send(`Hello ,${username} . Your ID is ${id}`);
// });

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send(`No Search Query.`);
  }
  res.send(`<h1>Your Seach Query: ${q}</h1>`);
});

app.get("/ejs", (req, res) => {
  res.render("index.ejs");
});

app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6 + 1);
  // res.render("rolldice.ejs", { diceVal: diceVal });
  // res.render("rolldice.ejs", { num: diceVal });
  res.render("rolldice.ejs", { diceVal });
});

app.get("/ig/:username", (req, res) => {
  const instaData = require("./data.json");
  let { username } = req.params;
  let data = instaData[username];
  // const followers = ["adam", "bob", "steeve", "abc"];
  if (data) {
    res.render("insta.ejs", { data });
  } else {
    res.render("error.ejs", { username });
  }
});

app.listen(PORT, () => {
  console.log(`The app is Listening at port ${PORT}`);
});
