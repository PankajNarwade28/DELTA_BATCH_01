const express = require("express");
const app = express();
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`App is Listening at Port ${PORT}`);
});
// app.use((req, res) => {
//   const code = "<h1>Hello World!</h1>";
//   // res.send(code);
//   res.send("Hi there this is a response from use  ");
// });

// app.get("/", (req, res) => [res.send("This is home root")]);
// app.get("/about", (req, res) => [res.send("This is about root")]);
// app.get("/contact", (req, res) => [res.send("This is contact root")]);
// app.get("/feedback", (req, res) => [res.send("This is feedback root")]);
app.get("/:username/:id", (req, res) => {
  const { username, id } = req.params;
  res.send(`<h1>Welcome ${username} !</h1> <h2>Your Id is ${id}</h2>`);
});
app.get("/search", (req, res) => {
  // const q = req.query;
  // res.send(`<h1>Your query is  ${q} !</h1> `);
  // console.log(req.query);

  let { q } = req.query;
  if (!q) {
    res.send(`<h2>Nothing Searched</h2>`);
  } else {
    res.send(`<h2>The Searched query is ${q}</h2>`);
  }
});
