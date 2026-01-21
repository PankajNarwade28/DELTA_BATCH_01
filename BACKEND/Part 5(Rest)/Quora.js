const express = require("express");
// const { connect } = require("http2");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

// this allows to read json data
app.use(express.urlencoded({ extended: true }));
// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
// This sets view engine to ejs
app.set("view engine", "ejs");
// This gives actual path of views folder which helps to find folder in case
// of it is runned from outside of current folder to render ejs files.
app.set("views", path.join(__dirname, "views"));
// This gives actual path of public folder which helps to find folder in case
// of it is runned from outside of current folder to access css and js files.
app.use(express.static(path.join(__dirname, "/public")));

// Post array
let posts = [
  {
    id: uuidv4(),
    username: "Pankaj Narwade",
    content: "I Love Coding!",
  },
  {
    id: uuidv4(),
    username: "Shivam Narwade",
    content: "I Love Studying!",
  },
  {
    id: uuidv4(),
    username: "Soham Narwade",
    content: "I Love Playing!",
  },
  {
    id: uuidv4(),
    username: "Samarth Narwade",
    content: "I Love Dancing!",
  },
  {
    id: uuidv4(),
    username: "Sarthak Narwade",
    content: "I Love Reading!",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  // console.log(req.body.content);
  // console.log(post.content);
  // res.send("Patch");
  res.redirect("/posts");
});
app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});
app.get("/posts/:id/edits", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

app.listen(port, () => {
  console.log("Server is Listening at:", port);
});
