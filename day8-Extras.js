//+++++++++ForEach++++++++++++++++
// it is a type of a loop it is similar to for of loop. matlab ye sabhi elements ke liye ek ek chiz krne ke liye.

// let arr = [1, 2, 3, 4, 5];
// function print(a) {
//   // iss me jo a uska matlab h har individual element
//   console.log(a);
// }
// arr.forEach(print);

// both are same only the way of writing is different

// arr.forEach(function (a) {
//   console.log(a);
// });

// let newArr = [
//   {
//     name: "jatin",
//     marks: 75,
//   },
//   {
//     name: "vaishnavi",
//     marks: 88,
//   },
// ];

// newArr.forEach(function(b){
//     console.log(b);

// })

// newArr.forEach((b)=>{
//     console.log(b.marks);

// })

//+++++++for each practics question++++++++

//Q.1  Ek array ke sabhi elements ko console pe print karo.

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(a){
//     console.log(a);

// })

//Q.2  Ek array ke har element ko 2 se multiply karke print karo.

// let nums = [10, 20, 30, 40, 50];
// nums.forEach((a)=>{
//     console.log(a*2);

// })

//Q.3  Ek array ke har element ke saath uska index bhi print karo.

// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// fruits.forEach((a,b)=>{
//     console.log(`index:${b},Fruit${a}`);
//     // console.log(b);

// })

//Q.4  Ek array me sirf even numbers print karo using forEach.
// let values = [3, 6, 9, 12, 15, 18, 21];

// values.forEach(function (a) {
//   if (a % 2 == 0) {
//     console.log(a);
//   }
// });

//Q.5 Ek array ke elements ka sum calculate karo using forEach.

// let numbers = [5, 10, 15, 20, 25];

// let sum = 0;
// numbers.forEach((sum) => {
//     console.log((sum += sum));

// });

//Q.6 Ek object array me se sirf names print karo.

// let students = [
//   { name: "Amit", age: 20 },
//   { name: "Rahul", age: 22 },
//   { name: "Priya", age: 19 },
// ];
// students.forEach((a) => {
//     console.log(a.name);

// });

// Q.7 Ek array ke sabhi numbers ko square karke ek naye array me store karo.
// let nums = [2, 4, 6, 8, 10];
// let squares = [];

// nums.forEach((num) => {
//   squares.push(num * num);
// });

// console.log(squares);

//Q.8 Ek array ke elements ko reverse order me print karo using forEach.

// let letters = ["a", "b", "c", "d", "e"];
// letters.reverse().forEach((letters) => {
//   console.log(letters);
// });

//Q.9 Ek shopping cart ka total price calculate karo.

// let cart = [
//   { item: "Shoes", price: 1200 },
//   { item: "Shirt", price: 800 },
//   { item: "Jeans", price: 1500 },
// ];
// let totalPrice = 0;
// cart.forEach((a) => {
//   totalPrice += a.price;
// });
// console.log(totalPrice);

//Q.10 Ek array ke unique values print karo using forEach (duplicates remove karke).

let numbers = [1, 2, 3, 2, 4, 1, 5, 6, 4];

let difNum=[];

numbers.forEach((numbers) => {
  if (!difNum.includes(numbers)) {
    difNum.push(numbers);
  }
});
console.log(difNum);
