// Events are signals that something has occurred. (user inputs/action)

// ++++++++++++++ mouse events++++++++++++++++

//---------Onclick-----------

let btns = document.querySelectorAll("button");

// // for (btn of btns) {
// //   btn.onclick = sayhello;
// // }
// // function sayhello() {
// //   alert("hello");
// // }

// //----------OnMouseEnter------------
// //when mouse enter an element (hover krene pr kuch ho)

// for (btn of btns) {
// btn.onmouseenter=sayhello
// }
// function sayhello() {
//   alert("hello");
// }

// +++++++++++++++EventListner+++++++++++++++++
//addEventListner

// element.addEventListner(event,callback)

// for (btn of btns) {
//     // btn.addEventListener("click", sayhello);
//     // btn.addEventListener("click", print);
//     btn.addEventListener("dblclick", function () {
//     console.log("you double click me");
//   });
// }
// function sayhello() {
//   alert("hello");
// }
// function print() {
//   console.log("print");
// }

// +++++++++Activity++++++++++++

// let btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//   let heading = document.querySelector("h2");
//   let randomColor = getRandomColors();
//   heading.innerText = randomColor;

//   let boxx = document.getElementById("box");
//   boxx.style.backgroundColor = randomColor;
//   console.log("color updated");
// });

// function getRandomColors() {
//   let red = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let color = `rgb(${red},${green},${blue})`;
//   return color;
// }

// let p = document.querySelector("p");
// p.addEventListener("click", function () {
//   console.log("para is clicked");
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function () {
//   console.log("mouse is entered");
// });

// ++++++++++++This in EvenmtListners+++++++++++

//when 'this' is used in a callback of event handler of something, it refers to that something

// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   console.log(this); // <button>Click me</button>
//   console.log(this.innerText); // Click me
// //   this.style.backgroundColor='blue'
// });

// +++++++++++++++++Keyboard Events++++++++++++++++++

// let input = document.querySelector("input");
// // event is by default it is shows the what event is happene.
// input.addEventListener("keydown", function () {
// console.log('key was pressed',event.key);
// console.log("event key is: ",event.key);
// console.log("event code is: ", event.code);
// console.log("event is: ", event);
//   console.log("code = ", event.code);
//   if (event.code == "ArrowUp") {
//     console.log("c up");
//   } else if (event.code == "ArrowDown") {
//     console.log("c down");
//   } else if (event.code == "ArrowRight") {
//     console.log("c Right");
//   } else if (event.code == "ArrowLeft") {
//     console.log("c Left");
//   }
// });
// input.addEventListener('keyup',function(){
//     console.log('key was up');

// })

// +++++++++++++++Form Events+++++++++++++++++++

// let form = document.querySelector("form");
// form.addEventListener("submit", function (e) {
//   e.preventDefault(); // for preventing the action url
//   alert("form is submitted");
// });

// +++++++++++++++++Extracting data from form+++++++++++
// let form = document.querySelector("form");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let user = this.elements[0]; //for getting element indirectly
//   let pass = this.elements[1];

//   console.log(user.value);
//   console.log(pass.value); // input ke ander value dekhne ke liye 'vlaue' ka use hota h

//   alert(`hii ${user.value}, your password is${pass.value}`);
// });

//+++++++++++More Events++++++++++

//++++++++Change event+++++++++
// this event occure when the value of an element has been changed (only works in 'inputs','textarea', and 'select' elements).
//ye tab chalega jese hume koi input banaya h or use change hote hi trigger ho jaye ga, ek ek key ko track nhi krega final and initial value ko compare krega and then trigger hoga, kuch change milta h to.

// let form = document.querySelector("form");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();

// });

// let user = document.querySelector("#user");
// user.addEventListener("change", function (e) {
//   e.preventDefault();
//   console.log("input is changed");
//   console.log("final vlaue =", this.value);
// });

//+++++++++Input Event+++++++++++++

//this event fire when the value if an 'input','select',or 'textarea' elements has been changed

// agar hum chahte h ki har ek changes hi track ho tab hum ise use krte h. and sabhi value ko next input ke sath milkr new final value bna dega

// let form = document.querySelector("form");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
// });

// let user = document.querySelector("#user");
// user.addEventListener("input", function (e) {
//   e.preventDefault();
//   console.log("input event");
//   console.log("final vlaue =", this.value);
// });

// ===========Activity=============

// let input = document.querySelector("input");
// let para = document.querySelector("p");
// input.addEventListener("input", function () {
//   console.log(input.value);
//   para.innerText = input.value;
// });

// =========Practics Question============

// Qs1. Try out the following events in Event Listener on your own :- mouseout- keypress- Scroll- load
// let input = document.querySelector("#div");
// let para = document.querySelector("p");

// window.addEventListener("scroll", function () {
//   console.log("you scrolled");
// });
// input.addEventListener("mouseout", function () {
//   console.log("mouse is out");
// });
// input.addEventListener("keypress", function () {
//   console.log("key is pressed");
// });
// window.addEventListener("load", function () {
//   console.log("load is complete");
// });

let button = document.createElement("button");
(button.innerText = "click me"), document.body.appendChild(button);
button.addEventListener("click", function () {
  button.style.backgroundColor = "green";
});
