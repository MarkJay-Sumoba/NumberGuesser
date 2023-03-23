let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//step 1
const generateTarget = () => 
  targetNumber = Math.floor(Math.random() * 10);

//step 2 & 6
/*const getAbsoluteDistance = (num1, num2) => {
  Math.abs(num1 - num2);
}*/

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  if (humanGuess < 0 || humanGuess > 9) {
    alert('Number out of range');
  }
  if (humanGuess === computerGuess) {
    return true;
  }

  /*else if ((getAbsoluteDistance(humanGuess, targetNumber)) < (getAbsoluteDistance(computerGuess, targetNumber))) {
    return true;
  }
  else if ((getAbsoluteDistance(humanGuess, targetNumber)) > (getAbsoluteDistance(computerGuess, targetNumber))) {
    return false;
  }*/

  const humanDiff = Math.abs(humanGuess - targetNumber);
  const computerDiff = Math.abs(computerGuess - targetNumber);
  if (humanDiff === computerDiff) {
    return true;
  }
  else {
    return false;
  }
}

//step 3 
const updateScore = winner => {
if (winner === 'human') {
  humanScore++;
}
else {
  computerScore++;
  }
}

//step 4
const advanceRound = () =>
currentRoundNumber++;

