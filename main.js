function computerPlay() {
  if (Math.floor(Math.random() * 3) === 0) {
    return 'paper';
  } else if (Math.floor(Math.random() * 3) === 1) {
    return 'rock';
  } else {
    return 'scissors';
  }
}

let computerSelection = computerPlay();
let playerSelection = prompt('Choose your weapon!').toLowerCase();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 0;
  } else if (
    playerSelection !== 'rock'
    && playerSelection !== 'scissors'
    && playerSelection !== 'paper'
  ) {
    return null;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'scissors' && computerSelection === 'paper')
    || (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    return 1;
  } else {
    return -1;
  }
}

function printResult(roundResult) {
  roundResult = roundResult(playerSelection, computerSelection);
  switch (roundResult) {
    case 1:
      console.log(`You win: your ${playerSelection} beats AI's ${computerSelection}`);
      break;
    case -1:
      console.log(`You LOSE: AI's ${computerSelection} beats your ${playerSelection}`);
      break;
    case 0:
      console.log(`It's draw with ${playerSelection}`);
      break;
    default:
      console.log("Wrong value try to type it again")
  }
}

printResult(playRound);
