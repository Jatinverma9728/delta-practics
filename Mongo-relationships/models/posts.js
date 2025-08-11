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
  let user1 = new User({
    username: "jatin kumar",
    email: "vermajati477@gmail.com",
  });
  let post1 = new Post({
    username: "jatin kumar",
    content:"hello worls",
    likes: 7,
  });
  post1.user = user1; 
  await user1.save();
  await post1.save();
};

addData()