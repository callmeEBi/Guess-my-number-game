//TODO - refactor this shit, later...

"use strict";
let $ = document;
let checkBtn = $.querySelector(".check_btn");
let numEntry = $.querySelector("#num-entry");
let myNumber = Math.floor(Math.random() * 19 + 1);
let userNumber;
let scoreNum = $.querySelector(".score_num");
let qBox = $.querySelector(".qbox");
let status = $.querySelector(".start_guess");
let currentScore = 20;
let sp_highScore = $.querySelector(".high_score_num");
let highScore = 0;
let againButton = $.querySelector(".again_box");

checkBtn.addEventListener("click", function () {
  userNumber = Number(numEntry.value);
  if (userNumber === myNumber) {
    qBox.textContent = myNumber;
    $.body.style.backgroundColor = "green";
    status.textContent = "Correct. Finally!";
    if (highScore < currentScore) {
      highScore = currentScore;
      sp_highScore.textContent = highScore;
      numEntry.disabled = true;
    }
    return;
  } else if (userNumber > myNumber) {
    status.textContent = "too high";
    scoreNum.textContent = --currentScore;
  } else {
    status.textContent = "too low";
    scoreNum.textContent = --currentScore;
  }
  if (currentScore === 0) {
    numEntry.disabled = true;
    status.textContent = "You lost the game";
    $.body.style.backgroundColor = "red";
  }
  console.log(myNumber);
});

againButton.addEventListener("click", function () {
  $.body.style.backgroundColor = "#2c2b2c";
  currentScore = 20;
  scoreNum.textContent = currentScore;
  numEntry.disabled = false;
  myNumber = Math.floor(Math.random() * 19 + 1);
  status.textContent = "Start Guessing";
  numEntry.value = "";
});
