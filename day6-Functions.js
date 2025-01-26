// let a = 3;
// let b = 5;
// function add() {
//   console.log(a + b);
// }
// function sub() {
//   console.log(a - b);
// }
// add();
// sub();

// function print1to5() {
//   for (let i = 1; i <= 5; i++) {
//     console.log(i);
//   }
// }
// print1to5();

// function condition() {
//   if (a > b) {
//     console.log("a is bigger");
//   } else {
//     console.log("b is bigger");
//   }
// }
// condition();

// function poem(){

//     console.log('Twinkel Twinkel Littel satr')
//     console.log('how I wonder what you are')
// }
// poem();

// function dice() {
//   let rand = Math.floor(Math.random() * 6 ) + 1;
//   console.log(rand);
// }
// dice();

// -------Function with arguments---------

// function printName(name) {
//   console.log(name);
// }
// printName("Jatin");

// // iss me pta kya lage ga ki konsi value a ki ya b ki h. to iss me pta ese lage ga ki sabhi value order me assign hoti h jese (a,b) h or hum (1,2) ye value de to ye esa hi hita h ki first argument ki value first hoti h or second argument ki value 2nd hi rhe gi, ese hi chahye kitne bhi argument ho sabhi ki vale ese hi assign hoti h
// function add(a, b) {
//   console.log(a + b);
// }
// function sub(a, b) {
//   console.log(a - b);
// }
// add(2, 3);
// add(234, 23);
// add(12, 4);
// sub(52, 34);
// sub(23, 34);

// function multiply(a, b, c, d) {
//   console.log(a * b); // 1*2=2
//   console.log(b * c); // 2*3=6
//   console.log(c * d); //3*4=12
//   console.log(d * a); //4*1=4
// }

// multiply(1, 2, 3, 4);

// function info(name, age) {
//   console.log(`${name}'s age is ${age}`);
// }
// info("jatin", 22);
// info('vaishnavi') // iss me ye work krega or name me vaishnavi hi aaye ga but iss me second paramater nhi diya to uski jaghe undefined dega

// function avg(a,b,c){
//     console.log((a+b+c)/3)
// }
// avg(1,3) //NaN aayega kyuki a or b ki value to di h but c ki nhi a b or c add to ho jange 1+2+undefined but ye jab divide hoga tab dikkat aayegi
// avg(5,3,1)

// function numTable(n){
//     for(let i = n; i<=n*10; i+=n){
//         console.log(i)
//     }
// }
// numTable(5)

// ---------------return----------
// return value hume return dega but value ko print nhi kre ga

// function add(a,b){
//     return(a+b)
// }
// console.log(add(8,5))

// function num(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return(sum);
// }
// console.log(num(10));

// function getGrade(marks) {
//   if (marks >= 90) {
//     return "a+";
//   } else if (marks >= 80) {
//     return "a";
//   } else if (marks >= 70) {
//     return "b";
//   } else if (marks >= 60) {
//     return "c";
//   } else if (marks >= 50) {
//     return "d";
//   } else {
//     return "f";
//   }
// }
// console.log(getGrade(0));

// let str = ["jatin", "verma", "parjapati"];
// function concat(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     result = result + str[i];
//   }
//   return result;
// }
// console.log(concat(str));

// --------scope-----------------

//--function scope---

// iss ka matlab ye hua ki jo bhi variable vgra hum funnction me banate h un ko sirf function me hi acces kr sakte h. us chiz ka vazud sirf function tk hi retha h . lekin ek catch h function ke ander bhar ki chijo ko acces kr sakte h. man lete h ki sum naam ka variable ek function me h or ek bhar h to function kiss ki value lega to function value lega function ke ander ki agr ander nhi h to bhar ke le sakta h.

// function caclSum(a, b) {
//   let sum = a + b;
// }
// caclSum(2, 3);
// console.log(sum) // nhi run hoga kyu ki sum function ke ander tk hi accesable h

//---block scope---

//ye vo variable hote h jo sirf ek block me hi acces able hote h. block means {......} in brackets me likhe huye variable iss block me hi acces honge.

// {
//   let a = 25;
//   const b = 25;
//   var c = 5;
// }
// console.log(a) // a is not defined aayega
// console.log(b) // b is not defined aayega

// console.log(c)// iss ka output mil sakta h

//---Lexical scope ----

//nesting jha hoti h vha lexical scope use hota h  like ek function me kuch variables h or us funcrion me ek or function to hum us main function ki chize sub function me acces kr sakte h. leking iss ka ulta nhi hoga ki inner function me declare ki hui chizo ko outer function me acces nhi kr sakte

// function outerFunction() {
//   let x = 5;
//   let y = 6;
//   function innerFunction() {
//     console.log(x);
//   }
//   innerFunction();
// }
// console.log(outerFunction());

// let greet = "Hello"; //global scope
// function changeGreet() {
//   let greet = "Namste"; //function scope
//   console.log(greet);
//   function innerGreet() {
//     console.log(greet);// ye function run hi nhi hoga kyuki iss ko call hi nhi kiya, agar call kiya hota to iss ka answer namste hi hota kyu ki ye lexical scope hota
//   }
// }
// console.log(greet);
// changeGreet();

// let sum = function(a,b){
//   return a+b;
// }
// sum(2, 3);

// let greeting = function(){
//   console.log('hello')
// }
// greeting()

// ----higher order function----------

// function multipleGreet(func,n){
//     for(let i=1;i<=n;i++){
//         func()
//     }
// }
// let greet = function(){
//     console.log('hello');

// }
// multipleGreet(greet,2)
// multipleGreet(function () {
//   console.log("k hal h ");
// }, 2);

// function oddEvenTest(request) {
//   if (request == "odd") {
//     let odd = function (n) {
//       console.log(!(n % 2 == 0));
//     };
//     return odd;
//   } else if (request == "even") {
//     let even = function (n) {
//       console.log(n % 2 == 0);
//     };
//     return even;
//   } else {
//     console.log("wrong request");
//   }
// }
// let request = "even";
// let func = oddEvenTest(request);

// let calculator = {
//   add: function (a, b) {
//     return a + b;
//   },
//   sub: function (a, b) {
//     return a - b;
//   },
//   mul: function (a, b) {
//     return a * b;
//   },
// };
// console.log(calculator.add(1,2));
// console.log(calculator.sub(7,3));
// console.log(calculator.mul(4,4));

// let calculator = { // same thing like upper but syntax change function keyword use nhi hua and oblect me key nhi banani pdi
//   add(a, b) {
//     return a + b;
//   },
//   sub(a, b) {
//     return a - b;
//   },
//   mul(a, b) {
//     return a * b;
//   },
// };
// console.log(calculator.add(1,2));
// console.log(calculator.sub(7,3));
// console.log(calculator.mul(4,4));