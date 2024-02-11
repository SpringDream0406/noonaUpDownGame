// 랜덤번호 지정
// 유저가 번호를 입력한다 그리고 go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호가 < 유저번호 Down!!!
// 랜덤번호가 > 유저번호 Up!!
// Reset버튼을 누르면 게임이 리셋된다
// 5번의 기회를 다 쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 10;
let gameOver = false;
let chanceArea = document.getElementById("change-area");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);

// focus, 한번만 쓰일 함수는 이름 지정안하고 그냥 안에 집어넣는것도 방법
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100 + 1);
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100사이 숫자를 입력해주세요.";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent =
      "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요.";
    return;
  }

  chances--;
  chanceArea.textContent = `남은기회: ${chances}번`;
  console.log("change", chances);

  if (userValue < computerNum) {
    console.log("Up!!");
    resultArea.textContent = `${userValue}보다 큰 수 입니다. Up!!`;
  } else if (userValue > computerNum) {
    console.log("Down!!");
    resultArea.textContent = `${userValue}보다 작은 수 입니다. Down!!`;
  } else {
    console.log("정답!");
    resultArea.textContent = `${userValue} 정답입니다.`;
    gameOver = true;
  }

  history.push(userValue);
  console.log(history);

  if (chances == 0) {
    gameOver = true;
  }

  if (gameOver) {
    playButton.disabled = true;
  }
}

function reset() {
  // user input창이 깨끗하게 정리되고
  userInput.value = "";
  // 새로운 번호가 생성되고
  pickRandomNum();

  resultArea.textContent = "1~100의 숫자를 입력해주세요.";
}

pickRandomNum();
