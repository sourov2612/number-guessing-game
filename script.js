// Generate random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let remainingTries = 10;

// Call the elements from html file using dom
const feedback = document.getElementById("feedback");
const remainingTriesDisplay = document.getElementById("remainingTries");
const guessInput = document.getElementById("guessInput");

document.getElementById("submitGuess").addEventListener("click", function () {
  const userGuess = parseInt(guessInput.value);

  // Check user input validity
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  remainingTries--;
  remainingTriesDisplay.textContent = `Tries left: ${remainingTries}`;

  if (userGuess === randomNumber) {
    feedback.textContent = "Congratulations! You guessed it!";
    endGame();
  } else if (remainingTries === 0) {
    feedback.textContent = "Game Over! You've used all your tries.";
    endGame();
  } else if (userGuess < randomNumber) {
    feedback.textContent = "Too low!";
  } else if (userGuess > randomNumber) {
    feedback.textContent = "Too high!";
  }
});

document.getElementById("restartGame").addEventListener("click", function () {
  resetGame();
});

function endGame() {
  guessInput.disabled = true;
  document.getElementById("submitGuess").disabled = true;
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  remainingTries = 10;
  remainingTriesDisplay.textContent = "Tries left: 10";
  feedback.textContent = "";
  guessInput.disabled = false;
  document.getElementById("submitGuess").disabled = false;
  guessInput.value = "";
}
