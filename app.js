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



let num1 = 32;
let num2 = 4785444444444442;


if((num1%10)==(num2%10)){
  console.log("same digit",num1%10)
}else(console.log("not have same number"))