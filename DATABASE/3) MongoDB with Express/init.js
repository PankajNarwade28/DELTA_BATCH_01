const mongoose = require("mongoose");
const Chat = require("./models/chat");
main()
  .then(() => {
    console.log("Connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://localhost:27017/whatsapp");
}

let allChats = [
  {
    from: "Pankaj",
    to: "Shivam",
    msg: "Hey! What's up!",
    created_at: new Date(),
  },
  {
    from: "Pallavi",
    to: "Soham",
    msg: "Hey! What's your Name?",
    created_at: new Date(),
  },
  {
    from: "Samarth",
    to: "Sarthak",
    msg: "Please teach me ABCD!",
    created_at: new Date(),
  },
  {
    from: "Anand",
    to: "Madhu",
    msg: "Hey! Mamashree",
    created_at: new Date(),
  },
  {
    from: "Vaishali",
    to: "Ashvini",
    msg: "Take Care Siso!",
    created_at: new Date(),
  },
  {
    from: "Varsha",
    to: "Pallavi",
    msg: "Take Care Love!",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats).then(() => {
  console.log("All Chats are inserted successfully!");
});
