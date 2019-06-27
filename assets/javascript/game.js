var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var wins = 0;
var losses = 0;
var guesses = 5;
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
var guessesSoFar = [];
var winPoints = document.getElementById("wins-text");
var guessesLeft = document.getElementById("guessesLeft-text");
var losePoints = document.getElementById("losses-text");
var guessSoFar = document.getElementById("guessesSoFar-text");

function updateDisplays() {
  winPoints.textContent = wins;
  guessesLeft.textContent = guesses;
  losePoints.textContent = losses;
}

document.onkeyup = function(event) {

  var userGuess = event.key;
  guessesSoFar.push(userGuess);
  guessSoFar.textContent = guessesSoFar;

  if (userGuess == computerGuess) {

    wins++;
    guesses = 5
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    guessesSoFar = [];
    alert("+1 win")
  } else {

    guesses--;
    if(losses == 2){
      alert("you lose!");
      wins = 0;
      losses = 0;
    }
    if (guesses == 0) {
      losses++;
      guessesSoFar = [];
      guesses = 5;
      alert("+1 loss")
    }
    if(wins == 2) {
      alert("you win!")
      wins = 0;
      losses = 0;
    }

  }

  updateDisplays();

}


updateDisplays();