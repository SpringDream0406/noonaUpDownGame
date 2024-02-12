let resultArea = document.getElementById("result-area");
let userInput = document.getElementById("user-input");
let chanceArea = document.getElementById("chance-area");
let imgArea = document.getElementById("img-area");
let rangeArea = document.getElementById("range-area");

let btnGo = document.getElementById("btn-go");
let btnReset = document.getElementById("btn-reset");

let userNum;
let randomNum = 0;
let chance = 6;
let gameOver = false;
let minNum = 1;
let maxNum = 100;
let downImages = [
  "https://media.giphy.com/media/uP89pJyXBDqVi/giphy.gif",
  "https://media.giphy.com/media/3ohhwH6yMO7ED5xc7S/giphy.gif",
  "https://media.giphy.com/media/YPsmTqYiHCMYtlsfKZ/giphy.gif",
  "https://media.giphy.com/media/iJxHzcuNcCJXi/giphy.gif",
  "https://media.giphy.com/media/dC9Hk5uVVux4HUE5ya/giphy.gif",
  "https://media.giphy.com/media/CfbDPJ17xZwqI/giphy.gif",
];
let upImages = [
  "https://media.giphy.com/media/Kg3HfmbPOGJggjjS31/giphy.gif?cid=790b7611iejgos1h97xcgzeg3pv4x9n10gwkeov3of5rn3t7&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/3o7TKHVU0xsgGDCyPu/giphy.gif?cid=790b7611iejgos1h97xcgzeg3pv4x9n10gwkeov3of5rn3t7&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/d5Hgiq0neyKqWO62cj/giphy.gif?cid=790b7611iejgos1h97xcgzeg3pv4x9n10gwkeov3of5rn3t7&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/l2YWf0spzBzXQOxRm/giphy.gif?cid=790b7611iejgos1h97xcgzeg3pv4x9n10gwkeov3of5rn3t7&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/ri3uvuWKPc9UWFMKXq/giphy.gif?cid=ecf05e479t1h6u9jbsgedf1rtug1vv9rdgdopwhi6bl9gbnd&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/AwttwIryJLZodu6UyS/giphy.gif?cid=ecf05e479t1h6u9jbsgedf1rtug1vv9rdgdopwhi6bl9gbnd&ep=v1_gifs_search&rid=giphy.gif&ct=g",
];

btnGo.addEventListener("click", start_game);
btnReset.addEventListener("click", reset_game);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function make_randomNum() {
  randomNum = Math.floor(Math.random() * 100) + 1;
}
make_randomNum();

function start_game() {
  userNum = userInput.value;

  chance--;
  chanceArea.textContent = `남은 기회: ${chance}번`;

  if (userNum > maxNum || userNum < minNum) {
    resultArea.textContent = `범위내의 숫자를 입력해주세요!!`;
    imgArea.src = "https://media.giphy.com/media/gb3At7bFNrjK76Nw5n/giphy.gif?cid=790b7611c62ks4i53o8ia2cwhavwks8sk5gmgbrelzw1fqs9&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    return;
  }
  if (userNum < randomNum) {
    minNum = Math.max(minNum, userNum) + 1;
    rangeArea.textContent = `${minNum} ~ ${maxNum} 사이의 숫자를 입력해주세요.`;
    resultArea.textContent = `${userNum} 보다 큽니다. Up!!`;
    imgArea.src = upImages[chance - 1];
  } else if (userNum > randomNum) {
    maxNum = Math.min(maxNum, userNum) - 1;
    rangeArea.textContent = `${minNum} ~ ${maxNum} 사이의 숫자를 입력해주세요.`;
    resultArea.textContent = `${userNum} 보다 작습니다. Down!!`;
    imgArea.src = downImages[chance - 1];
  } else {
    resultArea.textContent = `정답입니다!!`;
    imgArea.src =
      "https://media.giphy.com/media/6brH8dM3zeMyA/giphy.gif?cid=790b7611tcnqyt1563omqkkjsyad7dm7qytesf96rd785kgt&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    btnGo.disabled = true;
    return;
  }


  if (chance == 0) {
    gameOver = true;
    resultArea.textContent = `정답은 ${randomNum} 이었습니다..`;
    imgArea.src =
      "https://media.giphy.com/media/00i0Tdhf4rsEkGIB2H/giphy.gif?cid=790b7611p9kqnmjlc254m2jo16n50a69uila6a8aiqo9n9s7&ep=v1_gifs_search&rid=giphy.gif&ct=g";
  }

  if (gameOver) {
    btnGo.disabled = true;
  }
}

function reset_game() {
  userInput.value = "";
  maxNum = 100;
  minNum = 1;
  rangeArea.textContent = `${minNum} ~ ${maxNum} 사이의 숫자를 입력해주세요.`;
  resultArea.textContent = `Up & Down`;

  chance = 6;
  chanceArea.textContent = `남은 기회: ${chance}번`;
  make_randomNum();
  gameOver = false;
  btnGo.disabled = false;
  imgArea.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDBlZ3FseGZ0d3VucmhocXN5cHNzOGhhemNsaDA0ZHd0dHh3NWd5ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/CjmvTCZf2U3p09Cn0h/giphy.gif";
}
