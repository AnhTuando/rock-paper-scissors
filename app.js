let rulesBtn = document.querySelector(".rules-btn");
let theRules = document.querySelector(".rules");
let playBtn = document.querySelector(".play-btn");
let sciccors = document.querySelector(".sciccors");
let paper = document.querySelector(".paper");
let rock = document.querySelector(".rock");
let npcSciccors = document.querySelector(".npc .sciccors");
let npcPaper = document.querySelector(".npc .paper");
let npcRock = document.querySelector(".npc .rock");
let npcBox = document.querySelectorAll(".npc .box");
let noticeLoseThisTurn = document.querySelector(".npc-win");
let noticeWinThisTurn = document.querySelector(".player-win");
let noticeTie = document.querySelector(".tie");
let nextBtn = document.querySelector(".next");
let noticePlayerWin = document.querySelector(".player-win-game");
let noticePlayerLose = document.querySelector(".player-lose");
let restartBtn = document.querySelector(".restart-box");
//
restartBtn.onclick = function () {
  location.reload();
};
let newArr = Array.from(npcBox);
let randomBoxId = Math.floor(Math.random() * newArr.length);

let playerScore = document.querySelectorAll(".player-score .scr-box");
let npcScore = document.querySelectorAll(".npc-score .scr-box");
let newNpcScoreArr = Array.from(npcScore);
let newPlayerScoreArr = Array.from(playerScore);
let i = 0;
let k = 0;

let countBox = document.querySelector(".counting");
function countTime() {
  countBox.classList.remove("none");

  let count = 2;

  countBox.innerHTML = `${count}`;
  let interval = setInterval(function () {
    count--;
    countBox.innerHTML = `${count}`;
    if (count == 0) {
      clearInterval(interval);
      countBox.classList.add("none");
    }
  }, 1000);
}

function handlePlayerWinScore() {
  i++;
  for (let j = 0; j <= newPlayerScoreArr.length; j++) {
    if (parseInt(newPlayerScoreArr[j].textContent) == i) {
      newPlayerScoreArr[j].style.background = "#43fa77";
    }
    if (i == 5) {
      noticePlayerWin.classList.remove("none");
      noticeWinThisTurn.classList.add("none");
    }
  }
}
function handlePlayerLoseScore() {
  k++;
  for (let j = 0; j <= newNpcScoreArr.length; j++) {
    if (parseInt(newNpcScoreArr[j].textContent) == k) {
      newNpcScoreArr[j].style.background = "rgb(61, 61, 255)";
    }
    if (k == 5) {
      noticePlayerLose.classList.remove("none");
      noticeLoseThisTurn.classList.add("none");
    }
  }
}
function removeNpcAnimationAndSetOpacity() {
  npcSciccors.classList.remove("npc-siccors");
  npcSciccors.classList.add("npc-sciccors-center");

  npcSciccors.style.opacity = 0;
  npcPaper.classList.remove("npc-paper");
  npcPaper.classList.add("npc-paper-center");

  npcPaper.style.opacity = 0;
  npcRock.classList.remove("npc-rock");
  npcRock.classList.add("npc-rock-center");

  npcRock.style.opacity = 0;
}
function addNpcAnimationAndSetOpacity() {
  npcSciccors.classList.add("npc-siccors");
  npcSciccors.style.opacity = 1;
  npcPaper.classList.add("npc-paper");
  npcPaper.style.opacity = 1;
  npcRock.classList.add("npc-rock");
  npcRock.style.opacity = 1;
}
// Player click
// sciccors click
sciccors.onclick = function () {
  let sameClass = "value-3";
  let winClass = "value-2";
  let loseClass = "value-1";
  sciccors.classList.add("moving-siccor");
  rock.style.opacity = 0;
  paper.style.opacity = 0;
  let randomBoxId = Math.floor(Math.random() * newArr.length);
  let randomBox = newArr[randomBoxId];
  //   logic
  setTimeout(function () {
    randomBox.style.opacity = 1;
  }, 2000);
  removeNpcAnimationAndSetOpacity();
  countTime();
  removeMobileAnimation();
  if (randomBox.classList.contains(sameClass)) {
    setTimeout(function () {
      noticeTie.classList.remove("none");
      nextBtn.classList.remove("none");
    }, 2000);
  }
  if (randomBox.classList.contains(winClass)) {
    setTimeout(function () {
      noticeWinThisTurn.classList.remove("none");
      nextBtn.classList.remove("none");
      // Score Handle

      handlePlayerWinScore();
    }, 2000);
  }
  if (randomBox.classList.contains(loseClass)) {
    setTimeout(function () {
      noticeLoseThisTurn.classList.remove("none");
      nextBtn.classList.remove("none");
      handlePlayerLoseScore();
    }, 2000);
  }
};
// rock onclick
rock.onclick = function () {
  let loseClass = "value-2";
  let winClass = "value-3";
  let sameClass = "value-1";
  rock.classList.add("moving-rock");
  sciccors.style.opacity = 0;
  paper.style.opacity = 0;
  removeNpcAnimationAndSetOpacity();
  countTime();
  removeMobileAnimation();
  let randomBoxId = Math.floor(Math.random() * newArr.length);
  let randomBox = newArr[randomBoxId];

  //   logic
  setTimeout(function () {
    randomBox.style.opacity = 1;
  }, 2000);
  removeNpcAnimationAndSetOpacity();
  if (randomBox.classList.contains(sameClass)) {
    setTimeout(function () {
      noticeTie.classList.remove("none");
      nextBtn.classList.remove("none");
    }, 2000);
  }
  if (randomBox.classList.contains(winClass)) {
    setTimeout(function () {
      noticeWinThisTurn.classList.remove("none");
      nextBtn.classList.remove("none");
      handlePlayerWinScore();
    }, 2000);
  }
  if (randomBox.classList.contains(loseClass)) {
    setTimeout(function () {
      noticeLoseThisTurn.classList.remove("none");
      nextBtn.classList.remove("none");
      handlePlayerLoseScore();
    }, 2000);
  }
};
// paper onclick
paper.onclick = function () {
  let sameClass = "value-2";
  let loseClass = "value-3";
  let winClass = "value-1";
  paper.classList.add("moving-paper");
  sciccors.style.opacity = 0;
  rock.style.opacity = 0;
  removeNpcAnimationAndSetOpacity();
  countTime();
  removeMobileAnimation();
  let randomBoxId = Math.floor(Math.random() * newArr.length);
  let randomBox = newArr[randomBoxId];

  //   logic
  setTimeout(function () {
    randomBox.style.opacity = 1;
  }, 2000);
  removeNpcAnimationAndSetOpacity();
  if (randomBox.classList.contains(sameClass)) {
    setTimeout(function () {
      noticeTie.classList.remove("none");
      nextBtn.classList.remove("none");
    }, 2000);
  }
  if (randomBox.classList.contains(winClass)) {
    setTimeout(function () {
      noticeWinThisTurn.classList.remove("none");
      nextBtn.classList.remove("none");
      handlePlayerWinScore();
    }, 2000);
  }
  if (randomBox.classList.contains(loseClass)) {
    setTimeout(function () {
      noticeLoseThisTurn.classList.remove("none");
      nextBtn.classList.remove("none");
      handlePlayerLoseScore();
    }, 2000);
  }
};
// rule btn onclick
rulesBtn.onclick = function () {
  theRules.classList.toggle("none");
};
// play btn onclick
playBtn.onclick = function () {
  theRules.classList.toggle("none");
};

function handleNextbtn() {
  nextBtn.addEventListener("click", function () {
    noticeLoseThisTurn.classList.add("none");
    noticeWinThisTurn.classList.add("none");
    noticeTie.classList.add("none");
    nextBtn.classList.add("none");
    addNpcAnimationAndSetOpacity();
    paper.classList.remove("moving-paper");
    rock.classList.remove("moving-rock");
    sciccors.classList.remove("moving-siccor");
    npcPaper.classList.remove("npc-paper-center");
    npcRock.classList.remove("npc-rock-center");
    npcSciccors.classList.remove("npc-sciccors-center");
    sciccors.style.opacity = 1;
    rock.style.opacity = 1;
    paper.style.opacity = 1;
  });
}
handleNextbtn();

// Mobile
if (window.matchMedia("(max-width: 360px)").matches) {
  npcPaper.classList.add("npc-paper-animation-mobile");
  npcRock.classList.add("npc-rock-animation-mobile");
  npcSciccors.classList.add("npc-sciccors-animation-mobile");
}
function removeMobileAnimation() {
  npcPaper.classList.remove("npc-paper-animation-mobile");
  npcRock.classList.remove("npc-rock-animation-mobile");
  npcSciccors.classList.remove("npc-sciccors-animation-mobile");
}
let input = document.querySelector(".userName input");
let enter = document.querySelector(".enter-btn");
let userBox = document.querySelector(".userName");
let userName = document.querySelector(".title .pl-tt");
// Lưu thông tin người dùng
enter.onclick = function () {
  let arr = [];
  userBox.classList.add("none");
  theRules.classList.remove("none");
  let inputValue = input.value;
  arr.push(input.value);
  localStorage.setItem("userName", arr);
  userName.innerHTML = `${inputValue}`;
};

// localStorage.removeItem("userName");
