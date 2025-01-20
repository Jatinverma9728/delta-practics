// for(let i = 1; i <=500; i++){
//   console.log(i)
// }
// for(let j = 5; j >= 1; j--){
//   console.log(j)
// }

// -----print odd numbers 1 to 15

// for (let i = 1; i <= 15; i = i + 2) {
//   console.log(`number is ${i} is odd`);
// }
// for (let i = 100; i >= 1; i = i - 2) {
//   console.log(`number is ${i} is odd`);
// }

// for (let i = 2; i <= 10; i = i + 2) {
//   console.log(i);
// }

// for(let i=5; i<=50; i=i+5){
//   console.log(i)
// }

// let n = prompt('Which Number table you want !')
// n = parseInt(n);
// for(let i = n; i<=n*10; i = i+n){
//   console.log(i)
// }

// for(let i = 1; i<=3; i++){
//   console.log(`outer loop ${i}`)
//   for(let j = 1; j<=3;j++){
//     console.log(j)
//   }
// }

// ----------While Loop---------------

// let i = 1;
// while (i<=5) {
//   console.log(i);
//   i++
// }

// let i = 5;
// while (i>=1) {
//   console.log(i);
//   i--;
// }

// let i = 0;
// while (i<=20) {
//   console.log(i);
//   i++
// }

//------even number print

// let i = 2;
// while (i <= 20) {
//   console.log(i);
//   i = i + 2;
// }

// -----------Odd number print--------

// let i = 1;
// while(i<=20){
//   console.log(i);
//   i = i+2;
// }

// ------------Activity-----------

// const favMovie = "avatar";

// let guess = prompt("Guess my fav movie name");

// while (guess != favMovie) {
//   if (guess == "quit") {
//     console.log("You Quit");
//     break;
//   }
//   guess = prompt(" worng please try again ");
// }

// if (guess == favMovie) {
//   console.log("congrulations");
// }

// let i = 1;
// while (i <= 5) {
//   if(i==3){
//     break;
//   }
//   console.log(i);
//   i++;
// }

// let furits = [
//   "Apple",
//   "Mango",
//   "Banana",
//   "Guvava",
//   "Litchi",
//   "Orange",
//   "Grapes",
// ];

// furits.push("Pineapple");
// // for (let i = 0; i < furits.length; i++) {
// //   console.log(i, furits[i]);
// // }
// for (let i = furits.length - 1; i >= 0; i--) {
//   console.log(i, furits[i]);
// }

// let heroes = [
//   ["Superman", "Batman", "Wonderwomen"],
//   ["Ironman", "Thor", "Hulk"],
// ];

// for (let i = 0; i < heroes.length; i++) {
//   console.log(`main array #${i + 1}`);
//   for (allHeroes of i) {
//     console.log(heroes[i][j]);
//   }
// }

// --------------for of loop----------------

// in this there is no any increment operator or any condition is required it bassically print all the things without cheking any conditon

// let name = ['Jatin']

// for(char of name){
//     console.log(char)
// }

// let furits = ['apple','banana','mango','orange']
// for(furit of furits){
//     console.log(furit)
// }

// let her = "jatin verma";
// for(name of ' jatin verma'){
//     console.log(name)
// }

// nested for of loop-------

// let heroes = [
//   ["Superman", "Batman", "Wonderwomen"],
//   ["Ironman", "Thor", "Hulk"],
// ];

// for(list of heroes){
//     // console.log(list);
//     for(hero of list){
//         console.log(hero)
//     }
// }

// ------------to do app------------

// let todo = [];

// let req = prompt("please enter your request");

// while (true) {
//   if (req == "quit") {
//     console.log("quitting app");
//     break;
//   }
//   if (req == "list") {
//     console.log("-------------------------");
//     for (let i = 0; i < todo.length; i++) {
//       console.log(i, todo[i]);
//     }
//     console.log("-------------------------");
//   } else if (req == "add") {
//     let task = prompt("please enter your task you want to add ");
//     todo.push(task);
//     console.log("task added");
//   } else if (req == "delet") {
//     let idx = prompt("please enter the task index you want to delete");
//     todo.splice(idx, 1);
//     console.log("task deleted");
//   } else {
//     console.log("Invalid request. Please enter 'add', 'list', or 'quit'.");
//   }
//   req = prompt("please enter your request");
// }
