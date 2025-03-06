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
