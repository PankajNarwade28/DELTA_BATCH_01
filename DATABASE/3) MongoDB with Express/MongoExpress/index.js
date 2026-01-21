const express = require("express");
const app = express();
const path = require("path");
const PORT = 8080;
// importing chat schema from chat.js
const Chat = require("./models/chat.js");
// Importing custom erro
const ExpressError = require("./ERROR/ExpError.js");

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// connecting with static  files
app.use(express.static(path.join(__dirname, "public")));

// to  Parse the Data from webpages to ejs
app.use(express.urlencoded({ extended: true }));

// Creating a chat using mongoose
// let chat1 = new Chat({
//   from: "Pankaj",
//   to: "Prathmesh",
//   msg: "Hello  Brother!",
//   created_at: new Date(),
// });

// chat1.save().then((res) => {
//   console.log("Chat 1 is Saved !");
// });

// Set up for EJS template
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Index  Route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  // console.log(chats);
  // res.send("working");
  res.render("index.ejs", { chats });
});

// Create New  Route
app.get("/chats/new", async (req, res) => {
  res.render("new.ejs");
});

app.use((err, req, res, next) => {
  let { status, msg } = err;
  res.status(status).send(msg);
  console.log(status);
});
// testing error
app.get("/chats/error", (req, res) => {
  throw new ExpressError(303, "Access Denied");
  res.send("working");
});
// Post Data to DBb

app.post("/chats", (req, res) => {
  // res.send("Working ");
  let { from, msg, to } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  console.log(newChat);
  newChat
    .save()
    .then(() => {
      // console.log("chat added!");
      // res.send("added");
      res.redirect("/chats");
    })
    .catch((err) => {
      console.log(err);
    });
});

// Edit Route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  console.log(chat);
  // res.send("working");
  res.render("edit.ejs", { chat });
});

// Update msg

app.put("/chats/:id", async (req, res) => {
  // res.send("working");
  let { id } = req.params;
  let { newMsg } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    {
      msg: newMsg,
    },
    {
      runValidators: true,
      new: true,
    }
  );
  console.log(updatedChat);
  res.redirect("/chats");
});

// destroy root

app.delete("/chats/:id", async (req, res) => {
  // res.send("working");
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
});

app.get("/", (req, res) => {
  res.send("This is a Root Directory!");
});

// Starting Server
app.listen(PORT, () => {
  console.log("App is Listening at port 8080.");
});
