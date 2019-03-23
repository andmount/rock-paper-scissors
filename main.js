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
const output = document.getElementById('output');
const score = document.getElementById('score');
const buttons = document.getElementById('buttons');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let reset = document.getElementById('reset');
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
      output.textContent = `Your ${playerSelection} beats computer's ${computerSelection}`;
      score.textContent = `Wins:${++winScore} Loses:${loseScore} Round:${++roundNum}`;
      break;
    case -1:
      output.textContent = `Computer's ${computerSelection} beats your ${playerSelection}`;
      score.textContent = `Wins:${winScore} Loses:${++loseScore} Round:${++roundNum}`;
      break;
    case 0:
      output.textContent = `Both of you have chosen ${computerSelection}`;
      score.textContent = `Wins:${++winScore} Loses:${++loseScore} Round:${++roundNum}`;
      break;
    default:
  }
}

rock.onclick = () => { playerSelection = 'rock'; };
scissors.onclick = () => { playerSelection = 'scissors'; };
paper.onclick = () => { playerSelection = 'paper'; };
buttons.onclick = () => {
  if (roundNum < 5) {
    game();
  } else {

    if (winScore > loseScore) {
      output.textContent = 'Humanity can be proud. You kick metal ass!';
      output.style.color = 'green';
    } else if (winScore === loseScore) {
      output.textContent = "It's draw, but war doesn't end...";
    } else {
      output.textContent = "You lose, humanity is dead :^)";
      output.style.color = 'red';
    }
  }
};

reset.onclick = () => { 
  winScore = 0;
  loseScore = 0;
  roundNum = 0;
  output.textContent = 'Choose your weapon:';
  output.style.color = 'black';
  score.textContent = 'Wins:0 Loses:0 Round:0';
 };
