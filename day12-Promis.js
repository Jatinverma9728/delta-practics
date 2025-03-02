// +++++++++Call stack+++++++++++++++++
// iss ka matlab h ki konsa function kab call hoga or kese call hoga
// function hello() {
//   console.log("inside hello function");
//   console.log("hello");
// }
// function demo() {
//   console.log("calling hello function");
//   hello();
// }
// console.log("calling demo function");
// demo();
// console.log("done");

// ++++++++++Visualization the call Stack++++++++++++

// function one() {
//   return 1;
// }
// function two() {
//  return one() + one();
// }
// function three() {
//   let ans = two() + one();
//   console.log(ans);
// }
// three();

//++++++++++ +++JS is Single Threaded++++++++++++
// single thereded ka matlab h ki js ek time pr ek hi kaam krti h

// let a =25;
// console.log(a);
// let b= 10;
// console.log(b);
// console.log(a+b);

// this tpy of coding is known as synchrous nature mens sabhi line ek sync me chal rhi h that mean ek ke baad agla mens phele 1 fir 2

//jab hun functions jesi setTime out setInterval jesi chize use krte h to ve asynchrous ho jati h

// +++++++++CallBack Hell+++++++++++++
// ye kya hota h to ye ek bassicaly multiple nesting hoti h functions me callbacks ke likethis exaple. it is also known as doom of Prymid, because the structure of code is like a pryamid
// let h1 = document.querySelector("h1");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   setTimeout(() => {
//     h1.style.color = "red";
//     setTimeout(() => {
//       h1.style.color = "green";
//       setTimeout(() => {
//         h1.style.color = "blue";
//       }, 1000);
//     }, 1000);
//   }, 1000);
// });

// we can chane the h1 color by this method but it is too lengthy so we make a function for it.

// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "green";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "purple";
// }, 3000);

// function chnageColor(color, delay) {
//   setTimeout(() => {
//     h1.style.color = color;
//   }, delay);
// }
// chnageColor("red", 1000);
// chnageColor("green", 2000);
// chnageColor("blue", 3000);

// +++++++++++++++Promises+++++++++

// the promise object  represents the eventual completion( or failure) of an asynchronous operation and its resulting value.

// function saveToDb(data, success, failure) {
//   let interNetSpeed = Math.floor(Math.random() * 10 + 1);
//   if (interNetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// saveToDb(
//   "jatin verma",
//   () => {
//     console.log("sucess: your data saved");
//     saveToDb(
//       "hello World",
//       () => {
//         console.log("sucess2: data 2 saved");
//         saveToDb(
//           "jatin",
//           () => {
//             console.log("sucess3: data was save");
//           },
//           () => {
//             console.log("failure3: data wasn't save");
//           }
//         );
//       },
//       () => {
//         console.log("failure2: data2 was not saved");
//       }
//     );
//   },
//   () => {
//     console.log("failure week connection data was not saved");
//   }
// );

// +++++++++++++Promis resolve and reject++++++++++++

// function saveToDb(data) {
//   return new Promise((resolve, reject) => {
//     let interNetSpeed = Math.floor(Math.random() * 10 + 1);
//     // console.log(`internet Speed is ${interNetSpeed}`);
//     if (interNetSpeed > 4) {
//       resolve("data was saved");
//     } else {
//       reject("data was not save");
//     }
//   });
// }

// saveToDb('jatin verma',)

// a promis have multiple state like pending, rejected, fulifield

//++++++++++Promises methods+++++++++++++
// then() and catch()
// if codition is fulfield then 'then' is use, and if the condition was rejected then 'catch' is use.

// let request = saveToDb('jatinverma')
// request.then(()=>{
//   console.log('promis was resolved');
//   console.log(request);

// })
// .catch(()=>{
//   console.log('promis was rejected');
//   console.log(request);
// })

// same work but compact version we directly app then and cath on our function

// saveToDb("jatin verma")
//   .then(() => {
//     console.log("promis was resolved");
//   })
//   .catch(() => {
//     console.log("promis was rejected");
//   });

// +++++++++Promis Chaning+++++++++++++
// in this we donot need more 'catch' all errors are catch in a single 'catch'
// saveToDb("jatin verma")
//   .then(() => {
//     console.log("Data1 save");
//     saveToDb("hello World!").then(() => {
//       console.log("data2 save");
//     });
//   })
//   .catch(() => {
//     console.log("promis was rejected");
//   });

// more improver version of this code this is the same code of callback hell wala code but very improved version

// saveToDb("jatin verma")
//   .then((result) => {
//     console.log("Data1 save");
//     console.log("result of promis: ", result);

//     return saveToDb("hello world");
//   })
//   .then((result) => {
//     console.log("data 2 saved");
//     console.log("result of promis: ", result);

//     return saveToDb("jatin");
//   })
//   .then((result) => {
//     console.log("data3 saved");
//     console.log("result of promis: ", result);
//   })
//   .catch((error) => {
//     console.log("promis was rejected");
//     console.log("error of promis:", error);
//   });
