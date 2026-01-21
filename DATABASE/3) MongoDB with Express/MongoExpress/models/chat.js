const mongoose = require("mongoose");

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

const chatSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    maxLength: 50,
  },
  created_at: {
    type: Date,
    required: true,
  },
});

const Chat = new mongoose.model("Chat", chatSchema);

module.exports = Chat;
