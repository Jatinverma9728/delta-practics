const { faker, th } = require("@faker-js/faker");
const mysql = require("mysql2");

// connection with mySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Jatinkumar@123",
});
// gitting some fake data for adding in database for exercise
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// querry inserting new data
let q = "INSERT INTO usr (id,username,email,password) VALUES ?";

// manually create data
// let users = [
//   ["1263", "123_neuser", "abcg@gmail.com", "abgc"],
//   ["14", "124_newuser", "acd@gmail.com", "abd"],
// ];

let data = [];
for (let i = 0; i <= 100; i++) {
  data.push(getRandomUser()); //100 fake user data
}

try {
  connection.query(q, [data], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}

// need to end the connection if we not end this it run infinite
connection.end();
