// const { log } = require("util");

// const sum = (a, b) => a + b;
// const mul = (a, b) => a * b;
// const g = 9.4;
// const pi = 3.14;

// module.exports = 1234; // exporting values to other file, values can be any, but bassicaly we exports a object.

// way 1

// for  e.g -
// let obj = {
//   sum: sum,
//   mul: mul,
//   g: g,
//   pi: pi,
// };
// module.exports = obj;

// way 2

// module.exports = { // direct export
//   sum: sum,
//   mul: mul,
//   g: g,
//   pi: pi,
// };

// way 3

// module.exports.pi = 3.14; // direct value exporting

// way 4
//  exports.pi = 3.14; // shorter form of value exporting use only exports gives the same answer. but exports ke baad '.' lga ke value pass krni hogi

// console.log(typeof(pi));

// what if  we need to export and import things from different folder or outside the folder we we need to do this.

// 1.  we have a folder which have some files and every file should export something and.

// 2. we must have a index.js named file and it must require all the file in. and must export the files.(all files, that mean we make a variable and which contains all the requierd files and stroed in a variable)

//3. export the the new variable and.

//4. go to which file where we need to require all files and after that we require the folder which have all data we need to fetch. like this( const data = require('./fruits) and all set). use the fetched data where we want
