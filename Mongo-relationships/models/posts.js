const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => {
    console.log("✅ Connected to database");
  })
  .catch((err) => {
    console.error("❌ Connection Error:", err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  email: String,
});

const userPost = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Posts", userPost);

const addData = async () => {
  let user = await User.findOne({ username: "jatin kumar" });

  // username: "jatin kumar",
  // email: "vermajati477@gmail.com",

  let post2 = new Post({
    username: "bye bye",
    content: "Heyy my name is jatin",
    likes: 71,
  });
  post2.user = user;
  // await user1.save();
  await post2.save();
};

addData();
