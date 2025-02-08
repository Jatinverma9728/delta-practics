//----this keyword-----------
// 'this' keyword refer to an object that is exectuing the current piece of code.
// const student = {
//   name: "Jatin",
//   age: 21,
//   linux: 66,
//   java: 52,
//   cyberSecurity: 71,
//   get avg() {
//     // console.log(this);
//     // let avrage = (linux + java + cyberSecurity) / 3; // iss me anwer nhi milega kyu objct ke ander function  object ki values ko directly acces nhi kr sakta. to krne ke liye kya kr sakte h. to hum 'this' keyword ko use krnge har us cize ke aage jo hum chahiye object ki value.
//     //correct is :-
//     let avrage = (this.linux + this.java + this.cyberSecurity) / 3;

//     console.log(`${this.name} got avrage marks = ${avrage}`);
//   },
// };
// // console.log(student.avg)

// -----------Try & Catch--------

// the try statement allows you to define a block of code to be tested for errors while it is being executed.

// the catch statement allows you to define a block of code to be executed,if an error occure in the try block

// console.log('hello');
// console.log('hello'); // sirf yha tk hi code run hoga lyu ki next line me a log krva rha hu but a to khi define nhi h to error aa jaye ga and iss line ke aage ka code kabhi run hi nhi hoga chae shi ho.
// console.log(a);
// console.log('hello');
// console.log('hello');
// console.log('hello');

// console.log("hello");
// console.log("hello");
// // iss baar pura code run hoga kyu ki jis pe hume shak h ki usme error aayega to use hum try statement me check kreng and ek catch statement bhi deni hogi for erron handling

// // let a= 10; ye ek exception case hoga agr a shi h to na hi try chalegi or na hi catch code as normal chale ga.
// try {
//   console.log(a);
// } catch (e) {
//   console.log("an error is caught... a is not defined");
//   console.log(e); // catch ko hum function formate me bhi laikh sakte h jo basically error ko dikhata h we can also use err or anything but e is commonly use.
// }
// console.log("hello");
// console.log("hello");
// console.log("hello");

// -------Miscellaneous Topic--------

// ---------Arrow function------

// const sum = (a, b) => {
//   console.log(a + b);
// };
// sum(10, 20);
// const cube = (n) => {
//   return n * n * n;
// };
// const pow =(a,b)=>{
//   return
//   a**b
// }

// ------implecit return-----------

//implecit return it works where a function only return one value ye thoda or chota method h arrow function ko likhne ka. Implicit matlab is ko phele se pta h ki iss ki ek value h or vo hi return hogi. excplit mens hume batana pdta h ki kiss ko kya value deni h. iss me {} ye wale bracket lagane ki jarutat nhi hoti.

// const mul = (a, b) => a * b;
// mul(2,3)

// ---------Set timeout functions--------

console.log("hi there");
setTimeout(() => {
  console.log("verma house");
}, 4000);
console.log("welcome to");
