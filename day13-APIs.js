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

// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 5) + 1;
//       if (num > 3) {
//         reject("promis was reject");
//       }
//       h1.style.color = color;
//       console.log(`color was changed to ${color}`);
//       resolve("color was changed");
//     }, delay);
//   });
// }

// async function demo() {
//   try {
//     await changeColor("red", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("green", 1000);
//     await changeColor("yellow", 1000);
//     await changeColor("purple", 1000);
//   } catch (er) {
//     console.log('error caught',er);

//   }

//   let a = 5;
//   console.log(a);
//   console.log("new new num =", a + 3);
// }

//++++++++++++API+++++++++++++++
// application programing interface
//APIs ka full form Application Programming Interface hota hai. Ye ek set of rules aur protocols hoti hai jo different software applications ko ek doosre ke sath communicate karne ki suvidha deti hai. Simple shabdon mein, API ek tarike ka bridge hai jo ek application ko doosri application ke features ya data access karne ki anumati deta hai bina uske internal code ko directly access kiye.

//+++++++++++JSON++++++++++++++++
// javascript object notation
//JSON ka full form JavaScript Object Notation hai. Yeh ek lightweight data format hai jo data ko store aur exchange karne ke liye use hota hai. JSON ka use APIs aur web applications me data transfer karne ke liye hota hai

//converting json to js object
// let jsonRes =
//   '{"fact":"Tabby cats are thought to get their name from Attab, a district in Baghdad, now the capital of Iraq.","length":100}';

// // console.log(jsonRes);

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// // there is an oposit for js object to json
// let newRes= JSON.stringify(validRes)
// console.log(newRes);

//+++++++++APIs testing tools++++++++++++
// for testing an api is ok or not

//+++++++++POSTMAN++++++++++++++
//+++++++++Hoppscoth++++++++++++

// ++++++++++AJAX++++++++++
// asynchronous JavaScript and XML

//AJAX ka full form Asynchronous JavaScript and XML hai. Yeh ek technique hai jo web pages ko bina reload kiye server se data fetch karne aur update karne ki suvidha deti hai. Iska use mostly dynamic aur fast web applications banane ke liye hota hai.

//+++++++HTTPS Verbs++++++++

// /HTTP Verbs (ya HTTP Methods) web servers aur clients ke beech communication karne ke liye use hote hain. Yeh batate hain ki server se kya action perform karna hai – data lena, bhejna, update karna, ya delete karna.

// ==============flow in day13FLOW.tldr=============

//++++++++++STATUS CODE++++++++++++

//eg-

// /Success Codes (2xx)
// 200 OK → Request successful hai.
// 201 Created → Naya resource create ho gaya.
// 204 No Content → Request successful thi, but koi content return nahi ho raha.

// Redirection Codes (3xx)
// 301 Moved Permanently → Resource permanently shift ho gaya.
// 302 Found (Temporary Redirect) → Resource temporarily shift hai.
// 304 Not Modified → Cached version use karo, resource update nahi hua.

// Client Error Codes (4xx)
// 400 Bad Request → Request galat ya incomplete hai.
// 401 Unauthorized → Authentication required hai.
// 403 Forbidden → Access allowed nahi hai.
// 404 Not Found → Requested resource nahi mila.

// Server Error Codes (5xx)
// 500 Internal Server Error → Server me unknown problem aayi.
// 502 Bad Gateway → Server ko galat response mila.
// 503 Service Unavailable → Server busy hai ya maintenance me hai.

//+++++++++++Add information in urls+++++++++++

//https://www.example.com/products?id=123

//1️⃣ Protocol: https:// → Communication rule (Secure hai ya nahi)
// 2️⃣ Domain Name: www.example.com → Website ka naam
// 3️⃣ Path: /products → Page ya resource ka location
// 4️⃣ Query Parameters: ?id=123 → Extra information pass karne ke liye

//++++++++HTTPS Headers+++++++++++++

//An HTTP header is a part of the HTTP request and response messages that contain metadata about the request or response. It provides information such as content type, authentication details, caching policies, and more.

// +++++++++++++OUR FIRST REQUEST++++++++++++++++++++++

//===================Using fetch================

let url = "https://catfact.ninja/fact";
// fetch(url)// it returns a promise by default. that mens we can apply promise methods.

// fetch(url)
//   .then((res) => {
//     console.log("response", res);
//     // res.json() // ise use krte waquat ye dhyan rakhna hoga ki jo api h vo ye respond kr rhi h json kr rhi h html file kr rhi h ya simple text kr rhi h

//     // console.log(res.json())
//     res.json().then((data) => {
//       console.log(data.fact);
//     });
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

// better way

// async function getFacts() {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
//   } catch (e) {
//     console.log(e);
//   }
// }
