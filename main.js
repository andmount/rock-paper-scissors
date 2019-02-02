/* eslint-disable no-console */
function computerPlay() {
  if (Math.floor(Math.random() * 3) === 0) {
    return 'paper';
  }
  if (Math.floor(Math.random() * 3) === 1) {
    return 'rock';
  }
  return 'scissors';
}

let winScore = 0;
let loseScore = 0;
let roundNum = 0;
const score = document.getElementById('score');
const buttons = document.getElementById('buttons');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 0;
  }

  if (
    playerSelection !== 'rock'
    && playerSelection !== 'scissors'
    && playerSelection !== 'paper'
  ) {
    return null;
  }

  if (
    (playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'scissors' && computerSelection === 'paper')
    || (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    return 1;
  }

  return -1;
}

function game() {
  computerSelection = computerPlay();
  const roundResult = playRound(playerSelection, computerSelection);
  switch (roundResult) {
    case 1:
      score.textContent = `Wins:${++winScore} Loses:${loseScore} Round:${++roundNum}`;
      break;
    case -1:
      score.textContent = `Wins:${winScore} Loses:${++loseScore} Round:${++roundNum}`;
      break;
    case 0:
      score.textContent = `Wins:${++winScore} Loses:${++loseScore} Round:${++roundNum}`;
      break;
    default:
  }
}

rock.onclick = () => { playerSelection = 'rock'; };
scissors.onclick = () => { playerSelection = 'scissors'; };
paper.onclick = () => { playerSelection = 'paper'; };
buttons.onclick = function () {
  if (roundNum < 5) {
    game();
  } else {
    score.textContent =  winScore > loseScore ? 'Humanity can be proud. You kick metal ass' : 'Shame on you!';
  }
};
