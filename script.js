document.addEventListener("DOMContentLoaded", function () {
  hidden();
  // alwaysRender();
});

function alwaysRender() {
  let matchData = [];
  let matchDataTerakhir = [];
  if (localStorage.getItem(localStorageKey) === null) {
    matchData = [];
  } else {
    matchData = JSON.parse(localStorage.getItem(localStorageKey));
  }
  for (let i = 0; i < matchData.length; i++) {
    matchDataTerakhir = matchData[0];
  }
  console.log(matchData);
  console.log(matchDataTerakhir);
  let textRound = document.getElementById("textRound");
  let textScoreKu = document.getElementById("scoreKu");
  let textScoreKom = document.getElementById("scoreKom");

  textRound.innerText = matchDataTerakhir.round + 1;
  textScoreKu.innerText = matchDataTerakhir.scoreKu;
  textScoreKom.innerText = matchDataTerakhir.scoreKom;
}
