let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
  }
  levelUp();
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 1000);
}
function levelUp() {
  level++;
  h2.innerText = `level ${level}`;
  let randomIdx = Math.floor(Math.random() * 4);
  let ramdomColor = btns[randomIdx];
  let randBtn = document.querySelector(`.${ramdomColor}`);
  console.log(randomIdx);
  console.log(randBtn);
  console.log(ramdomColor);

  btnFlash(randBtn);
}

function btnPress() {
  console.log("btn was pressed");
}
let allBtns = document.querySelectorAll(".btn");
for (btn of btns) {
    btn.addEventListener('click',)
}
