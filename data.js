const localStorageKey = "ROCK_PAPER_SCISSOR";

document.getElementById("kertas").onclick = match;
document.getElementById("batu").onclick = match;
document.getElementById("gunting").onclick = match;
let round = 0;
let scoreKu = 0;
let scoreKom = 0;
let result = "";

function hidden() {
  const beforeGameDisplay = document.getElementById("before-game-display");
  const duringGameDisplay = document.getElementById("during-game-display");
  duringGameDisplay.setAttribute("hidden", true);
  beforeGameDisplay.removeAttribute("hidden");
}

function checkForStorage() {
  return typeof Storage !== "undefined";
}

function play() {
  const beforeGameDisplay = document.getElementById("before-game-display");
  const duringGameDisplay = document.getElementById("during-game-display");
  beforeGameDisplay.setAttribute("hidden", true);
  duringGameDisplay.removeAttribute("hidden");
}

function match() {
  round += 1;
  timer();
  let userChoice = this.id;

  let items = ["kertas", "batu", "gunting"];
  let comChoice = items[Math.floor(Math.random() * items.length)];

  let result = compare(userChoice, comChoice);

  putMatchRecord(round, userChoice, comChoice, result);
}

function compare(userChoice, comChoice) {
  if (userChoice == "kertas") {
    if (comChoice == "kertas") {
      result = "draw";
    } else if (comChoice == "batu") {
      result = "win";
      scoreKu += 1;
    } else {
      result = "lose";
      scoreKom += 1;
    }
  } else if (userChoice == "batu") {
    if (comChoice == "kertas") {
      result = "lose";
      scoreKom += 1;
    } else if (comChoice == "batu") {
      result = "draw";
    } else {
      result = "win";
      scoreKu += 1;
    }
  } else {
    if (comChoice == "kertas") {
      result = "win";
      scoreKu += 1;
    } else if (comChoice == "batu") {
      result = "lose";
      scoreKom += 1;
    } else {
      result = "draw";
    }
  }
  return result;
}

function putMatchRecord(round, userChoice, comChoice, result) {
  const data = {
    round,
    userChoice,
    comChoice,
    scoreKu,
    scoreKom,
    result,
  };
  if (checkForStorage()) {
    let matchData = [];
    if (localStorage.getItem(localStorageKey) === null) {
      matchData = [];
    } else {
      matchData = JSON.parse(localStorage.getItem(localStorageKey));
    }
    matchData.unshift(data);
    localStorage.setItem(localStorageKey, JSON.stringify(matchData));
    renderAllDom(data);
  }
}

function renderAllDom(data) {
  console.log(data);
  let textRound = document.getElementById("textRound");
  let textScoreKu = document.getElementById("scoreKu");
  let textScoreKom = document.getElementById("scoreKom");

  textRound.innerText = data.round + 1;
  textScoreKu.innerText = scoreKu;
  textScoreKom.innerText = scoreKom;
}

function timer() {
  var sec = 4;
  let time = setInterval(function () {
    clearInterval(time);
    document.getElementById("timer").innerText = sec;
    sec--;
    if (sec <= -1) {
      clearInterval(time);
      document.getElementById("timer").innerText = `time's up.`;
    }
  }, 1000);
}
// function yourChoose(clicked_id) {
//   let pilihanKu = "";
//   let pilihanKom = "";

//   let myArray = ["kertas", "batu", "gunting"];
//   let randomItem = myArray[Math.floor(Math.random() * myArray.length)];
//   pilihanKom = randomItem;

//   const pilihan = clicked_id;
//   pilihanKu = pilihan;

//   getResult(pilihanKu, pilihanKom);
// }

// function match() {}

// function getResult(pilihanKu, pilihanKom) {
//   console.log(pilihanKu, pilihanKom);
//   let jawaban = "";

//   let textRound = document.getElementById("textRound");
//   let textScoreKu = document.getElementById("scoreKu");
//   let textScoreKom = document.getElementById("scoreKom");
//   round += 1;
//   if (pilihanKu == "kertas") {
//     if (pilihanKom == "kertas") {
//       jawaban = "draw";
//     } else if (pilihanKom == "batu") {
//       jawaban = "menang";
//       scoreKu += 1;
//     } else {
//       jawaban = "kalah";
//       scoreKom += 1;
//     }
//   } else if (pilihanKu == "batu") {
//     if (pilihanKom == "batu") {
//       jawaban = "draw";
//     } else if (pilihanKom == "kertas") {
//       jawaban = "kalah";
//       scoreKom += 1;
//     } else {
//       jawaban = "menang";
//       scoreKu += 1;
//     }
//   } else {
//     if (pilihanKom == "gunting") {
//       jawaban = "draw";
//     } else if (pilihanKom == "kertas") {
//       jawaban = "menang";
//       scoreKu += 1;
//     } else {
//       jawaban = "kalah";
//       scoreKom += 1;
//     }
//   }
//   textRound.innerText = round;
//   textScoreKu.innerText = scoreKu;
//   textScoreKom.innerText = scoreKom;
//   console.log(jawaban);
// }
