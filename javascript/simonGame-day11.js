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
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;
  let randomIdx = Math.floor(Math.random() * 4);
  let ramdomColor = btns[randomIdx];
  let randBtn = document.querySelector(`.${ramdomColor}`);
  // console.log(randomIdx);
  // console.log(randBtn);
  // console.log(ramdomColor);
  gameSeq.push(ramdomColor);
  console.log(gameSeq);

  btnFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML= `Game Over! Your Score was <b>${level}</b><br> Press any key to start`; //score
    document.querySelector('body').style.backgroundColor='red'
    setTimeout(function(){
          document.querySelector("body").style.backgroundColor = "white";
    },150)
    reset();
  }
}

function btnPress() {
  // console.log(this);
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) btn.addEventListener("click", btnPress);

function reset() {
  started = [];
  gameSeq = [];
  userSeq = [];
  level = 0;
}

// let highScr = []
// function highScr(highScr) {

// }
// let currLevel=level
// let prevLevel=5
// function finalScr(){
// if(currLevel == prevLevel){
//   document.createElement('h2').append(div).innerText= currLevel;
// }else{level.prevLevel}
// }