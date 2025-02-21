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

let input = document.querySelector('input')

input.addEventListener('keydown',function(){
    console.log('key was pressed',event.key);
    console.log("event key is: ",event.key);
    console.log("event code is: ", event.code);
    console.log("event is: ", event);
    
})
input.addEventListener('keyup',function(){
    console.log('key was up');
    
})