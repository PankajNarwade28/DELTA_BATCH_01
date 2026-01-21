const express = require("express");
const app = express();
const port = 30000;

app.listen(port, () => {
  console.log(`app is listening at port ${port}`);
});
app.get("/", (req, res) => {
  res.send("This is a Home root");
});
app.get("/search", (req, res) => {
  // console.log(req.query);
  let { q } = req.query;
  if (!q) {
    res.send(`<h2>Nothing searched</h2>`);
  }
  res.send(`<h2>Search query :${q}</h2>`);
});

app.get("/home", (req, res) => {
  res.send("This is a Home root");
});
app.get("/Contact", (req, res) => {
  res.send("This is a Contact root");
});
app.get("/service", (req, res) => {
  res.send("This is a service root");
});
app.get("/feedback", (req, res) => {
  res.send("This is a feedback root");
});
app.get("/:username", (req, res) => {
  let name = res.params;
  res.send(name);
  res.send("This is a username root");
  res.send(`Hi , ${name}`);
});
