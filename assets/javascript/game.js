//Variables
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var directionsText = document.getElementById("directions-text");
var userGuessText = document.getElementById("userGuess-text");
var guessesSoFarText = document.getElementById("guessesSoFar-text")
var guessesLeftText = document.getElementById("guessesLeft-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

//Choices for computer
var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("");
////The computer picks a random letter from A-Z
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
function updateText() {
  winsText.textContent = "wins: " + wins;
  lossesText.textContent = "losses: " + losses;
  guessesLeftText.textContent = "guesses left: " + guessesLeft;
  guessesSoFarText.textContent = "guesses so far: " + guessesSoFarText;
}
//If the user and computer guess the same, "wins" +1, otherwise "guesses left" -1
updateText();

 document.onkeydown = function(event) {
  console.log()
  var key_press = String.fromCharCode(event.keyCode);
   document.getElementById('guessesSoFar-text') .innerHTML = key_press;

 }

document.onkeyup = event => {
  console.log()

  var userGuess = event.key.toLowerCase();
  if (userGuess === computerGuess) {
    wins++;
    updateText();
    guessesLeft = 4;
    

  }
  else {
    guessesLeft--;
    updateText();
  }

  if (guessesLeft === 0) {
    losses++;
    updateText();
    guessesLeft = 5;
  }

  if (losses === 2) {
    alert("you lose!")
    wins = 0;
    losses = 0;
  }
  if (wins === 1) {
    alert("you win!")
    wins = 0;
    losses = 0;
  }

  alert("User guess: " + userGuess);



};