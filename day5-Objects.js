// // let stu = {
// //   name: "Jatin",
// //   age: 22,
// //   marks: 60,
// // };
// // const stu2 = {
// //   name: "vaishnavi",
// //   age: 20,
// //   marks: 88,
// // };

// // const item = {
// //   itemName: "Analog Watch",
// //   price: 200,
// //   colors: ["Black", "Silver", "Gold"],
// // };

// // const post = {
// //   userName: "@jatinVerma",
// //   content: ["Reels", "Posts", "Story"],
// //   likes: 500,
// //   reposts: 10,
// //   tags: "iamjatin_vrma",
// // };

// // const obj={
// //     1:'a',
// //     2:'b',
// //     true:'c',
// //     undefined:'e'
// // }

// // let stu = {
// //   name: "Jatin",
// //   age: 22,
// //   marks: 60,
// //   city: "Bhiwani",
// //   fav: ["aalo pratha", "samosa", 7],
// // };
// // stu.city = "Delhi";
// // stu.gender = "Male";

// // -------------nested loops---------

// // const Class = {
// //     jatin : {
// //         grade : "b",
// //         city : 'bhiwani'
// //     },
// //     vaishnavi : {
// //         grade : "A",
// //         city :'Unknown'
// //     }
// // }

// // const classInfo = [
// //   {
// //     name: "Jatin",
// //     grade: "B",
// //     city: "Bhiwani",
// //   },
// //   {
// //     name: "Yogesh",
// //     grade: "A",
// //     city: "Dhana Road",
// //   },
// //   {
// //     name: "Bharat",
// //     grade: "A",
// //     city: "Hanuman Gate",
// //   },
// // ];
// // classInfo[0].colony = "Bharat nagar";
// // delete classInfo[0].colony;
// // classInfo[0].gender = "Male";
// // classInfo[1].gender = "Male";
// // classInfo[2].gender = "Male";

// Math.abs(-3); // gives the absloute values like -3 ka dega 3 negitive ko positive me convert kre ga positive ko positive me hi rkhe ga

// Math.pow(2, 4); // ye power dega kiss ko first wale number ko or kitni dega jo bhi 2nd numberr ho utini baar

// Math.floor(2.3); // iss me value dega 2 ye values ko round of krdega lower side me like 2.999 ho ga to uska o/p 2 hi dega lower side me round of kr dega

// Math.ceil(2.111); // ye floor ka ulta h vo lower value deta tha or ye highest value dega iss case me iss ki vlaue 3 dega

// Math.random(); // ye koi bhi random value dega 0-1 ke bich me lekin 1 kabhi bhi nhi dega 1 is exclusive.

// let num = Math.random(); //0.541103624530922

// num = num * 10; //5.41103624530922

// num = Math.floor(num); //5
// num = num + 1; //6

// let num2 = Math.floor(Math.random() * 100 + 1); //1-100
// let num3 = Math.floor(Math.random() * 5 + 1);// 1-5

// Math.floor(Math.random() * 5 + 20);// 20-24

// const max = prompt("enter the maxmim number");

// const comNum = Math.floor(Math.random() * max) + 1;
// console.log(comNum);
// let guess = prompt("guess the number");

// while (true) {
//   if (guess == "quit") {
//     console.log("You Quit");
//     break;
//   }
//   if (guess == comNum) {
//     console.log("Congrts you guess = ", guess);
//     break;
//   } else if (guess > comNum) {
//     guess = prompt("guess high", guess);
//   } else {
//     guess = prompt("guess low");
//   }
// }


// ----------------------QS-------------------

// let dice = Math.floor((Math.random()*6)+1);
// console.log(dice)

// let car ={
//     brand:'Toyota',
//     modal:'Fortuner',
//     color:'Black',
//     transmission:'4*4'
// }


let person ={
    name:'jatin',
    city:'bhiwani'
}
person.city='New York';
person.country='United Sates'