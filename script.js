const randomNumber = Math.floor(Math.random() * 10) + 1;
let remainingAttempts = 3;

const guessField = document.getElementById("guessField");
const guessSubmit = document.getElementById("guessSubmit");
const message = document.getElementById("message");

guessSubmit.addEventListener("click", function () {
  const userGuess = parseInt(guessField.value);

  if (userGuess === randomNumber) {
    message.textContent = "Congratulations! You guessed correctly!";
    guessSubmit.disabled = true;
  } else {
    remainingAttempts--;
    if (remainingAttempts === 0) {
      message.textContent = `Sorry, you've used all your attempts. The correct number was ${randomNumber}.`;
      guessSubmit.disabled = true;
    } else {
      const hint = userGuess < randomNumber ? "higher" : "lower";
      message.textContent = `Wrong guess. Try a ${hint} number. Remaining attempts: ${remainingAttempts}`;
    }
  }
});
