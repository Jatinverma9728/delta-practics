// ---------------------Statements---------------

// let age = prompt("enter your age");

// if (age >= 18) {
//   console.log("You are able to drive");
// } else console.log("You are not able to drive");

// let lightColor = prompt("Pick one color: 1.Red 2.Yellow 3.Green");

// if (lightColor === "green") {
//   console.log("Go...", lightColor);
// } else if (lightColor === "red") {
//   console.log("Stop!", lightColor);
// } else if (lightColor === "yellow") {
//   console.log("Wait!!", lightColor);
// } else {
//   console.log("Invalid color");

// }

// let popcornPrice = prompt("Enter price");

// if(popcornPrice === "250"){
//   console.log("size is XL")
// }else if(popcornPrice === "200"){
//   console.log("Size is L")
// }else if(popcornPrice === "150"){
//   console.log("Size is M")
// }else if(popcornPrice === "100"){
//   console.log("Size is MS")
// }else if(popcornPrice === "50"){
//   console.log("Size is S")
// }else{console.log("Invalid Value")}

// let size = prompt("Enter the size do you want? xl, l, m,s");

// if (size === "xl") {
//   console.log("The Price of Popcon is 250");
// } else if (size === "l") {
//   console.log("The Price of Popcon is 200");
// } else if (size === "m") {
//   console.log("The Price of Popcon is 100");
// } else if (size === "s") {
//   console.log("The Price of Popcon is 50");
// } else {
//   console.log("Invalid Value");
// }

// let marks = prompt("Enter Your Marks");

// if (marks >= "33") {
//   console.log("Pass");
//   if (marks >= "90") {
//     console.log("Good You Got A+ Grade");
//   } else if (marks >= "80") {
//     console.log("Good You Got A Grade");
//   } else if (marks >= "70") {
//     console.log("Good You Got B Grade");
//   } else if (marks >= "60") {
//     console.log("Good You Got C Grade");
//   } else if (marks >= "50") {
//     console.log("Good You Got D Grade");
//   }
// } else console.log("Better Luck Next Time");

// --------------------Logical Operator-------------------

// let str = "apple";

// if (str.length >= 3 && str[0] === "a") {
//   console.log("Good string");
// } else console.log("bad string");

// -------------Switch statement--------------

// let color = "red";

// switch(color){
//   case "red" :
//     console.log("Stop here!!")
//   break;
//   case "yellow" :
//     console.log("Slow down")
//   break;
//   case "green" :
//     console.log("Go")
//   break;
//   default:console.log("light is broken")
// }

// let day = prompt("enter a number");

// switch(day){
//   case "1":
//     console.log("Monday");
//     break;
//   case "2":
//     console.log("Tuesday");
//     break;
//   case "3":
//     console.log("Wednesday");
//     break;
//   case "4":
//     console.log("Thursday");
//     break;
//   case "5":
//     console.log("Friday");
//     break;
//   case "6":
//     console.log("Saturday");
//     break;
//   case "7":
//     console.log("Sunday");
//     break;
//     default:console.log("Invalid number")
// }

// let num = prompt("Enter any nummber");

// if (num % 10 === 0) {
//   console.log("Its a good number");
// } else {
//   console.log("its a bad number");
// }

// let userName = prompt("Enter your name");
// let userAge = prompt("Enter your age");
// // let fullName = console.log(`Your name ${userName} and your age is ${userAge}`)

// alert(`Your name ${userName} and your age is ${userAge}`);

// let quater = prompt("Enter a number");

// switch(quater){
//   case "1":
//     console.log("January","Febuary","March")
//     break;
//   case "2":
//     console.log("April","May","June")
//     break;
//   case "3":
//     console.log("July","August","September")
//     break;
//   case "4":
//     console.log("Otcober","November","December")
//     break;
//     default:console.log("Wrong Input")

// }

// let str = "Apple";

// if(str.length >=5 && str[0]==="a" || str[0] === "A"){
// console.log("Golden string")
// }else{
//   console.log("Not a Golden string")
// }

// let a = 1;
// let b = 8;
// let c = 9;

// if (a > b) {
//   if (a > c) {
//     console.log(a, "is largest");
//   } else {
//     console.log(c, "is largest");
//   }
// } else {
//   if (b > c) {
//     console.log(b, "is largest");
//   } else {
//     console.log(c, "is largest");
//   }
// }

// let num1 = 32;
// let num2 = 4785444444444442;

// if((num1%10)==(num2%10)){
//   console.log("same digit",num1%10)
// }else(console.log("not have same number"))

// let str = "ilovejavascript"
// console.log(str.slice(1,5)); // give the limited outputwhat we write in index of string
// console.log(str.slice(0,str.length-0)); // give complete string length-0
// console.log(str.slice(-6)); // that is puri length me se minus krege kitna kre ga jitni hum value denge yha -1  kre ga matlab ab ye last element ko print kre ga

// console.log(str.replace("love", "enjoy")) // replace words
// console.log(str.replace("o", "x")); // replace only first matching character
// console.log(str.replaceAll("a","x")) // replace all matching character

// let fruit = "mango";

// console.log(fruit.repeat(5))

// ----------------QS-------

// let msg = "    help!";
// let newMsg = msg.trim();
// console.log(newMsg.toUpperCase())
// // console.log(msg.trim(),msg.toUpperCase())

// let name = "ApnaCollege";
// console.log(name.slice(4,9), name.indexOf("na"), name.replace("Apna","Our"));

// let newName = name.slice(4)
// console.log(newName.replaceAll("l","t"))

// -------------Arrays-----------------

// let months = ['january','july','march','august'];

// ['july, june', 'march','august']

// console.log(months.shift(),months.shift(),months.unshift('june'),months.unshift('july'));
// console.log(months)

// let months = ['january','july','march','august'];
// console.log(months.splice(0, 2, "july", "june"));

// let pLanguages = ['c','c++','html','javascript','java','python','c#','sql'];

// console.log(pLanguages.reverse(),pLanguages.indexOf('javascript'))

// const arr = [1, 2, 3]; //  arr(3)[(1, 2, 3)];

// arr.push(5); //  arr(4)[(1, 2, 3, 5)];

// let nums = [
//     [1,2],[3,4],[5,6],[7,8]
// ]

// let gameNums = [
//     ['X',null,'O'],
//     [null,'X',null],
//     ['O',null,'X'],

// ]
// gameNums[0][1]= 'O'
// console.log(gameNums[0])
// console.log(gameNums[1])
// console.log(gameNums[2])

// ------------QS------------------

// let arr = [7,8,9,10,-132,-23]
// let n = 5;

// let ans = arr.slice(0,n)
// console.log(ans)
//     let nans = arr.slice(n);
//     console.log(nans)

// let str = prompt("Write any thing");

// if (str.length == 0) {
//   console.log("String is empty");
// } else {
//   console.log(`String is not empty : ${str}`);
// }

// checking the desire index of this arry charcter is upper case or not
// let char = "HelLo WorLd!";
// let idx = 1;
// if (char[idx] == char[idx].toUpperCase()) {
//   console.log(`Character is in Upper Case ${char[idx]}`);
// } else {
//   console.log(`Character is not in upper case : ${char[idx]}`);
// }

// ------Checking the desire index of this arry is prime or odd
// let num = [2, 5, 3, 34, 5, 6, 56, 4];
// let index = 7;
// if (num[index] % 2 === 0) {
//   console.log("number is prime");
// } else {
//   console.log("num is odd");
// }

// let string = prompt("enter any string");

// console.log(string);

// console.log(string.trim());

// let newArr = [2, 12, 223, 3, 5, "helo", "a"];
// let find = 6;

// if (newArr.indexOf(find) != -1) {
//   console.log("element is exist in array");
// } else {
//   console.log("element is not exist in array");
// }

// for(let i = 1; i <=500; i++){
//   console.log(i)
// }
// for(let j = 5; j >= 1; j--){
//   console.log(j)
// }

// -----print odd numbers 1 to 15

for (let i = 1; i <= 15; i = i + 2) {
  console.log(`number is ${i} is odd`);
}
for (let i = 100; i >= 1; i = i - 2) {
  console.log(`number is ${i} is odd`);
}

for (let i = 2; i <= 10; i = i + 2) {
  console.log(i);
}
