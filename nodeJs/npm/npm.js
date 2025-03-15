// NPM is the standarf package manager for nodeJs

// Node Package Manager

// 1. it is a library of packages.
// 2. it is a command line tool.

// installing packages npn install 'package name', npm i 'package name'

var figlet = require("figlet");

figlet("Jatin verma", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
