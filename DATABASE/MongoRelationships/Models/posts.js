const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => {
    console.log("Connection Succeed");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const USchama = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "Userpost",
  },
});

const Userpost = mongoose.model("Userpost", USchama);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
  let user1 = new Userpost({
    username: "Pankaj Narwade",
    email: "pankaj@mail.com",
  });

  let post1 = new Post({
    content: "This is My first Post",
    likes: 45,
  });

  post1.user = user1;

  let res1 = await user1.save();
  let res2 = await post1.save();
  console.log(res1);
  console.log(res2);
};

addData();
