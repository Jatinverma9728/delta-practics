// ++++++++++++++Event Bubling+++++++++++++
// jab bhi hum nested level ke childrens ko trigger krte h tab vo apne parent and super parent wale event listnres ko bhi trigger krta h automatically,but parent dont trigger child,it trigger themself.
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function () {
//   console.log("div was clicked");
// });
// ul.addEventListener("click", function (e) {
//     e.stopPropagation()
//   console.log("ul was clicked");
// });
// for (li of lis) {
//   li.addEventListener("click", function (e) {
//     e.stopPropagation()
//     console.log("li was clicked");
//   });
// }

// iss se bachne ke liye hum ek method use krte h stopPropagation() iss se vo hi trigger hoga jise hum krna chahte h.

//++++++++++++++Activity++++++++++++++++++++++
// +++++++++++TODO app+++++++++++++++

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  let listItem = document.createElement("li");
  listItem.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");
  listItem.appendChild(delBtn);
  ul.appendChild(listItem);
  inp.value = "";
// iss me kya hoga na ki jp buttons hume ne html me add kiye h abhi sirf unhi me hi kaam krega.iss ko ache se krne ke 2 tarike phela to hum is niche wala code ko iss function me like to ho jaey ga. and the second wala h ki hum event deligation ka use kre
});

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     let parent = this.parentElement;
//     parent.remove();
//   });
// }
