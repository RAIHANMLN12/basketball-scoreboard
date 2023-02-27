let homeScore = document.getElementById("score-result-home");
let awayScore = document.getElementById("score-result-away");

let homeScoreResult = 0;
let awayScoreResult = 0;

function homePlusThree() {
  homeScoreResult += 3;
  homeScore.textContent = homeScoreResult;
}

function homePlusTwo() {
  homeScoreResult += 2;
  homeScore.textContent = homeScoreResult;
}

function homePlusOne() {
  homeScoreResult += 1;
  homeScore.textContent = homeScoreResult;
}

function awayPlusThree() {
  awayScoreResult += 3;
  awayScore.textContent = awayScoreResult;
}

function awayPlusTwo() {
  awayScoreResult += 2;
  awayScore.textContent = awayScoreResult;
}

function awayPlusOne() {
  awayScoreResult += 1;
  awayScore.textContent = awayScoreResult;
}

function reset() {
  homeScoreResult = 0;
  awayScoreResult = 0;
  homeScore.textContent = homeScoreResult;
  awayScore.textContent = awayScoreResult;
}
