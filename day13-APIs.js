// ========== async Function=================
// careates an async function they return a promise by defalut and the returend promise we can apply oru methods.

// async function greet() {
//   // return a promise by default agr hum iss function me kuch nhi krenge tab bhi ek promise return hoga. bass promise result undefined aayega, but promise mile ga
//   abc.abc(); // iss me promise state  reject hogi kyuki iss me error aarha h
//   return "hello";
// }

// async function jatin() {
//   // throw "error 404 page not found"; // throw error ko throw krta h or promis result me jo value dinge vo store hogi;
//   return "hello";
// }
// jatin()
//   .then((result) => {
//     console.log("promise was resolved");
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log("promise was rejected");
//   });

// let demo = async () => {
//   return 5;
// }; //Promise {<fulfilled>: 5}

// ============AWAIT============
// pauses the execution of its surrounding async function until the promise is settled (resolved or rejected)

// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       resolve();
//     }, 1000);
//   });
// }
// async function demo() {
//   await getNum(); // await ka matlab ye h ki jab tk ye ek call complete nhi hoti tab tk koi bhi or function use nhi hoga or await sirf async functions me hi use hoga. phele ye execute hoga 1 second baad
//   await getNum(); // then ye next 1 second baad
//   await getNum(); // then ye next 1 second baad
// }


//++++++++color change with Async and await++++++++++

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      console.log(`color was changed to ${color}`);
      resolve("color was changed");
    }, delay);
  });
}

async function demo() {
    await changeColor('red',1000)
    await changeColor('blue',1000)
    await changeColor('green',1000)
    await changeColor('yellow',1000)
     changeColor('purple',1000)
}