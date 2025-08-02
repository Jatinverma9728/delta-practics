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
  addresses: [
    {
      _id:false,
      location: String,
      city: String,
    },
  ],
}); 

const User = mongoose.model("User", userSchema);

const addUser = async () => {
  try {
    let user1 = new User({
      username: "Jatin",
      addresses: [
        {
          location: "221b bakers street Bhiwani",
          city: "Bhiwani",
        },
      ],
    });

    user1.addresses.push({ location: "p32 wallStreet", city: "bhiwani" });

    let result = await user1.save();
    console.log("✅ User Saved:", result);
  } catch (err) {
    console.error("❌ Error saving user:", err);
  }
};

addUser();
