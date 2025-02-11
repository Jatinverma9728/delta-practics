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

//ye kya hota h timeout? ye basically ek function h jo run hota h tming pe like delay jise bolsakte h
// console.log("hi there");
// setTimeout(() => {
//   console.log("verma house");
// }, 4000);
// console.log("welcome to");

// setInterval bhi esa hi hota h delay ke sath to chale ga but chalta rhe ga with a desirable interval

// console.log("hello");
// setInterval(() => {
//   console.log("k dhang h");
// }, 200);
// console.log("ladle");

// ab ye chalta rhe ga leking hume agar ise rokna ho to. to us ke liye hum iss pure function ko individual variable(id) me store kr sakte h

// let id = setInterval(() => {
//   console.log("k dhang h");
// }, 200);
// console.log("ladle");

//ye kuch extra kiya h mene ki kine der tk chale ga is uper wale me se liya id or uska timeout me dal diya

// setTimeout(()=>{
//   clearInterval(id);
// },3000)

// ---------this with functions---------
// Traditional function me this function call ke context ko refer karta hai. Matlab, jo object function ko call karega, this usi ko refer karega.

// Arrow function me this parent scope ka this use karta hai. Matlab, jisme arrow function likha hai, wahi this ka reference milega.

// let student = {
//   name: "jatin",
//   marks: 70,
//   // property: this,
//   getName: function () {
//     console.log(this); // global scope
//     return this.name;
//   },
//   getMarks: () => {
//     console.log(this); //parent's scope --> window
//     return this.marks;
//   },
//   getInfo1: function () {
//     setTimeout(() => {
//       console.log(this); //student
//     }, 2000);
//   },
//   getInfo2: function () {
//     setTimeout(function () {
//       console.log(this); //window
//     }, 2000);
//   },
// };
// console.log(student.getName());
// // answer mil jayega
// console.log(student.getMarks());
// answer mile ga undefined kyu ki iss baar arrow function use kiya h,or student ka scope window h or window me marks defined hi nhi h to undefined aayega.

// agar hum window.marks = 209; ese kuch krke value ko assign kr de to answer mil jaye ga but us answer ka function se kuch lena dena nhi hoga

// -------Question-------------
// const square = (n) => {
//   return n * n;
// };

// let id = setInterval(() => {
//   console.log("hello world");
// }, 2000);
// setTimeout(() => {
//   clearInterval(id);
//   console.log('line complete');

// }, 10000);

// ----------QS1------------

// const arrayAverage = () => {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum / array.length;
// };
// let array = [1,2,3,4,5];
// console.log(arrayAverage(array));

// -------question2------------

// let num = 4;

// const isEven = (num) => {
//   num % 2 == 0;
// };

// ---------Question 3------------
// const obj = {
//   message: "hello world",
//   logMessage() {
//     console.log(this.message);
//   },
// };
// console.log(obj.logMessage()); // yha pr answer mil jayega hello world

// setTimeout(obj.logMessage, 1000); // but yha pr obj.logMessage call ho rha setTimeout ke duara to iss liys yha undefined aayega

//ans---undefined   undefined isliye aa raha hai kyunki setTimeout(obj.logMessage, 1000) mein logMessage ek standalone function ban jata hai, jisme this global object (window) ko refer karta hai, na ki obj ko.

// -------Question 4------------

// let length = 4;

// function call() {
//   console.log(this.length);
// }
// const object = {
//   length: 5,

//   met(call) { // ye method and object sab consfuse krne ke liye hi h bass agr inhe hta ke simple functction ko call lrenge to bhi annswer same hoga...
//     call();
//   },
// };
// call()
// object.met(call, 1, 2);
// Important:
// Browser me: window.length ka value browser ke loaded scripts ka count hota hai.
// Node.js me: global.length nahi hota, to undefined print hoga.


// +++++++++++++++++++flow chart+++++++++++++++++++

// Start
//    ↓
// Define length = 4
//    ↓
// Define function call()
//    ↓
// Define object { length: 5, met() }
//    ↓
// Call object.met(call, 1, 2)
//    ↓
// Inside met(): Execute call()
//    ↓
// call() is a normal function call → this = Global Object
//    ↓
// Print this.length (depends on execution environment)
//    ↓
// End
