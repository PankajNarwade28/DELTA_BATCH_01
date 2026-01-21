const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const PORT = 8080;
const Chat = require("./models/chat");
const methodOverride = require("method-override");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
//some path settings
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(methodOverride("_method"));
//database connectivity code
main()
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://localhost:27017/whatsapp");
}

// // creating chat data
// const chat1 = new Chat({
//   from: "Pankaj",
//   to: "Pallavi",
//   msg: "How are You!",
//   created_at: new Date(),
// });

// chat1.save().then(() => {
//   console.log("chat1 is inserted successfully!");
// });

app.get("/chats", async (req, res) => {
  let Chats = await Chat.find();
  // console.log(Chats);
  res.render("index.ejs", { Chats });
  // res.send("Working");
});

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", (req, res) => {
  let { from, msg, to } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
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

// TO edit msg

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

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}/chats`);
});
