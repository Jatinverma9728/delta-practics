const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/chatbot");
}

let allChats = [
  {
    from: "yogesh",
    to: "bharat",
    msg: "send me the notes",
    created_at: new Date(),
  },
  {
    from: "jatin",
    to: "bharat",
    msg: "send me the ymca slaybus",
    created_at: new Date(),
  },
  {
    from: "yogesh",
    to: "jatin",
    msg: "send me the prepration matrial",
    created_at: new Date(),
  },
  {
    from: "bulbul",
    to: "jatin",
    msg: "send me the your pictures",
    created_at: new Date(),
  },
  {
    from: "jatin",
    to: "vaishanvi",
    msg: "no i dont send",
    created_at: new Date(),
  },
];



Chat.deleteMany(allChats);
