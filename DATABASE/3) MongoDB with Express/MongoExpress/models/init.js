const mongoose = require("mongoose");
const Chat = require("./chat.js");
main()
  .then((res) => {
    console.log("MongoDB Connection Succeed!");
  })
  .catch((er) => {
    console.log(er);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}
let allChats = [
  {
    from: "Alice",
    to: "Bob",
    msg: "Hey Bob, how are you?",
    created_at: new Date(),
  },
  {
    from: "Bob",
    to: "Alice",
    msg: "Hi Alice! I'm good. How about you?",
    created_at: new Date(),
  },
  {
    from: "Charlie",
    to: "Dave",
    msg: "Project meeting at 3 PM today.",
    created_at: new Date(),
  },
  {
    from: "Emma",
    to: "Frank",
    msg: "Please review the PR when you get time.",
    created_at: new Date(),
  },
  {
    from: "Grace",
    to: "Helen",
    msg: "Happy birthday! 🎉",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
