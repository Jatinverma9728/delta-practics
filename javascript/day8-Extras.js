//+++++++++ForEach++++++++++++++++
// it is a type of a loop it is similar to for of loop. matlab ye sabhi elements ke liye ek ek chiz krne ke liye.

// const { log } = require("console");

// const { all } = require("axios");

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

// let numbers = [1, 2, 3, 2, 4, 1, 5, 6, 4];

// let difNum=[];

// numbers.forEach((numbers) => {
//   if (!difNum.includes(numbers)) {
//     difNum.push(numbers);
//   }
// });
// console.log(difNum);

// +++++++++++++ Map & filter ++++++++++

//map is very similar to forEach but the difference is it reutrn the values in a new array.aur jo nai arr dega uska size original array ke jitna hi rhega

// let num = [1, 2, 3, 4];
// let double = num.map((a) => {
//   return a * 2;
// });
// console.log(double);

// let stu = [
//   {  name: "jatin",
//      marks: 75
//     },
//   {
//     name: "vaishnavi",
//     marks: 88,
//   },
// ];
// let gpa = stu.map((a) => {
//   return a.marks / 10;
// });
// console.log(gpa);

// let student = [
//   {
//     name: "jatin",
//     marks: 75,
//   },
//   {
//     name: "prince",
//     marks: 70,
//   },
//   {
//     name: "vaish",
//     marks: 88,
//   },
// ];

// let sutInfo = student.map((a)=>{
// return [a.name,a.marks];

// })
// console.log(sutInfo);

// let nums = [1, 2, 3, 4, 5, 6, 7];

// nums.map((a) => {
//   console.log(a * a);
// });

// +++++++++++FILTER+++++++++++++++

// ye check kre ga ki callback ka output kya rhega means true dega ya false agr true rhega to element new array me add ho jayega

// let nums = [1, 2, 3, 4, 5, 6, 7];
// let even = nums.filter((a) => {
//   // return a % 2 == 0; //even
//   // return a % 2 != 0; //odd
//   // return a < 5; // smaller then 5
// });
// console.log(even);

// +++++++++++EVERY+++++++++++
//ye true ya false return krega ga very similar to logical && operator ki do conditions ko check krega and dono shi hongi to khud bhi true retun krena otherwise false dega

// [1, 2, 3, 4].every((a) => (a % 2 == 0)) //false dega kyuki dono condition alag alag h yani ek thik h or ek galat h browser me dekhe ga kyuki hum kuch bhi return nhi krva rhe h or na hi log to console me ye condition likege to aaye ga

// [(2, 4)].every((a) => a % 2 == 0); //true

// +++++++++++S0ME++++++++++++=
//ye logical OR || ki treh hota h like koi bhi ek condition true hogi to ture dega haa but kam se km ek condition jarur tru honi chahiye

// [ 2, 4].some((a) => (a % 2 != 0))

// ++++++++++REDUCE+++++++++++++

// const arr = [1, 2, 3, 4];
// const initaalValue = 0;
// const sumWithInitial = arr.reduce(function (accumulator, currentValue) {
//   console.log(`acc:${accumulator}: and curr:${currentValue}`);

//   return accumulator + currentValue;
// }, initaalValue);
// console.log(sumWithInitial); //10

// iss me kya hota h na ki ek accumulator and currentValue milega to currentValue kya h to ye h jo hamri array ki current value chal rhi h use khenge or ye loop ki treh bhadti h. and accumulator kya h to ye vo h accumulator me sabse phele to initialValue hi aaye gi. and then iss me currentValue+initialValue ka sum aayega. ye jaruri nhi ki sum hi aayega agar callback me jo bhi hum operation krvayenge vo hamara accumumator me aayega

//reduce() ka use kisi array ke elements ko process karke ek single value me convert karne ke liye hota hai. Yeh mainly addition, multiplication, array flattening, ya kisi bhi data ko summarize karne ke kaam aata hai.

// const myNums = [1, 2, 3];

// const myTotal = myNums.reduce( (acc, currVal) => acc + currVal,0);
// console.log(myTotal); //acc: 0 and currVal:1
// acc: 1 and currVal:2
// acc: 3 and currVal:3
// 6

// const cart = [{
//   itemName:'haldi',
//   price:299
// },{
//   itemName:'mirch',
//   price:350
// }
// ,{
//   itemName:'dhaniya',
//   price:200
// }
// ]
// const price=cart.reduce((acc,cart)=>(acc+cart.price),0)
// console.log(price);

// let arr = [1, 2, 3, 4,1,2,3,1,8,6,21,3, 5, 6, 7, 8, 9, 10, 11,22];
// let initialValue = 0;

// let newArr = arr.reduce((acc, currVal) => {
//   if (acc < currVal) {
//     return currVal;
//   } else {
//     return acc;
//   }
// }, initialValue);
// console.log(newArr);

//++++QS+++++

// let multiple = [10, 20, 120, 30, 40];

// let num = multiple.every((a) => a % 10 == 0);
// console.log(num); // true aayega

// let arr = [
//   2, 3, 4, 21, 14234, 324, 3, 2, 32, 5, 5, 5, 67, 87, 67, 75, 7, 57, 457, 547,
//   45, 632, 523, 41, 12, 11, 235, 3,
// ];

// let smlallest = arr.reduce((acc, curr) => {
//   if (acc < curr) {
//     return acc;
//   } else {
//     return curr;
//   }
// });
// console.log(smlallest);

// ++++++DEFAULT Parameter+++++++++++

// function sum(a,b=2){
//   return a+b
// }
// console.log(sum(3));//5 aayega kyuki ye ek default parameter ki treh use hoga agar hum sum(2,5) krenge to b ki value iss case me 5 hogi and 2 jo phele di thi uska koi methav nhi rhe ga. iss me ek chiz dhyan dene ki h ki default values or none default values order me hi lage gi

// ++++++++++++Spread+++++++++++

// console.log(Math.min(
//   1,2,3,2,2,-1,56,8,9,0
// ));  //for finding the smallest number

// let arr = [
//   1, 2, 3, 4, 5, 6, 7, 8, 92, 3, 3, 44, 55, 6, 3, 2, 2, 2, -1, 56, 8, 9, 0,
// ];
// let name = "jatin"
// console.log(Math.min(arr)); //NaN aayega kyu ki iss ko pta nhi h konse numbers ko comare krna h sabhi kr krna h to sabhi ke indexes bhi likhne pdege. to bar bar index likhne se bachne ke liye humare pass spread method hota h (...) kisi pr bhi iteration krna h to us arr ke naam ke aage 3 dot '...' lga deni h bas. it can be use in strings

// console.log(Math.min(arr[0],arr[1],arr[2])); ese krke bhi result milsakta h but bhaut badda ho jayega code
// console.log(...name);

// console.log(Math.min(...arr)); // ab anwer mil jaye ga

// +++++++++++++Spread with array lierals++++++++++

// jab bhi humare pas koi exesting array hota h aur use se koi uski copy bnana chate h ya kisi or jaghe ko bhejne ki kosi krte h to us value ko individual bhejne ke liye hum spread ko use krte h  we also use spread in strings

// let arr=[1,2,3,4,5,6,7]
// let newArr =[...arr]
// console.log(newArr);//[1, 2, 3, 4,5, 6, 7]

// let char=[...'hello']
// console.log(char); //[ 'h', 'e', 'l', 'l', 'o' ]

let odd = [1, 3, 5, 7, 9];
// let even = [2,4,6,8,10]
// let both=[...odd,...even]
// console.log(both);//[1, 3, 5, 7, 9, 2, 4, 6, 8, 10]

// +++++++++++Spread with object+++++++++++

// const data = {
//   email: "jatim@gmail.com",
//   password: "abcd",
// };
// console.log(data); //{ email: 'jatim@gmail.com', password: 'abcd'}

// const newData = {
//   ...data,
//   id: 123123,
//   ...odd
// };
// console.log(newData); //{ email: 'jatim@gmail.com', password: 'abcd', id: 123123 }

// +++++++++++++++++REST++++++++++++++++
// ye ek esa tarika h jiss me hum in infinite numbers ko as arguments le sakte h. ye vha use hote h jha hume pta nhi hota ki kitne arguments lene h, or bass ek  banana h or us me ek argument pass krva na h but uske phle 3 dot ... lga deni h.

// function sum(...args) {
//   for (let i = 0; i < args.length; i++) {
//     console.log(`hii everyone,${args[i]}`);
//   }
//   console.log(args.length);
// }
// sum(1, 2);

// function min(a, b, c) {
//   console.log(arguments); // yha aap ye socho ge ki aapne koi arguments naam ka variable declare hi nhi kya to error kyu nhi aarha h, kyuki har in functions me har argument ek arguments naam ke ek collection me store hota h by default
// }
// console.log(min(1, 2, 3, 4, 5)); //Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

//ye jo arguments vo exactly ek arry nhi h jo jo methods array pr kaam krete h hum unko arguments ke sath use nhi kre sakte.agr hume use krna h array ke methods ko to hum REST ko use krenge,and arguments wale keyword ko use nhi krenge.
// agr hum function me se jo argument hta bhi denge to bhi koi dikkat nhi hogi

// function sum(param, ...args) {
//   console.log(param);

//   return args.reduce((a, b) => a + b);
// }
// console.log(sum(1, 1, 5, 1, 2, 4, 5)); //1
// //18

// ++++++++++++Destructring++++++++++++++
//store values of array into multiple variables.
// Destructring ka matlab hota h todna

// let names=['jatin','vaishnavi','hello world','abc','pqr','xyz']
// let [winner,runners]=names; // ek chiz yaad rakhne ki h sabhi chize index me honi cahiye, lakie sabhi values index me assign hongi, jese iss example me h first array ke element ko winner me assign hua h and second element ko runners me assing hui h
// console.log(winner,runners);

// agar hume baki ki values ko bhi kisi me assign krna ho to, tab hum use krenge rest ko
// let [winners,runner,...others]=names;
// console.log(winners,runner,others);//jatin vaishnavi [ 'hello world', 'abc', 'pqr', 'xyz' ]
//iss me other ek array ban jaye ga

// +++++++++++Destructing Objects++++++++++

// const stu = {
//   name: "jatin",
//   age: 21,
//   class: "BCA 3rd year",
//   subjects: ["Python", "CG", "IOT"],
//   username: "iamjatin_vrma",
//   password: "J....a",
// };
// let { username:user, password:secret,city='bhiwani' } = stu;

// +++++++++++QUESTION+++++++++++++++++

//  Qs1. Square and sum the array elements using the arrow function and then find the average of the array.

// let nums=[1,2,3];

// const square = nums.map((a)=>a*a)
// console.log(square);

// const sum = square.reduce((a,b)=>a+b)
// console.log(sum);
// console.log(sum/nums.length);

//  Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.

// let numbers=[2,4,6,8,-2,4]
// let newArray = numbers.map((a)=>a+5)
// console.log(newArray);

// Qs3. Create a new array whose elements are in uppercase of words present in the original array.

// let names= ['adam','alok','crono','k','kelly','maxim','skyler']

// let uppercase= names.map((a)=>a.toUpperCase())
// console.log(uppercase);

//  Qs4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.

// function doubleAndReturnArgs(arr, ...args){
//   return [arr, args.map(a=>a*2)]
// }
// console.log(doubleAndReturnArgs(2,1,2,3,4,5,6));

//  Qs5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

// function mergeObjects(obj1, obj2) {
//     return { ...obj1, ...obj2 };
// }
// const objA = { a: 1, b: 2 };
// const objB = { b: 3, c: 4 };

// console.log(mergeObjects(objA, objB));
//{ a: 1, b: 3, c: 4 }
