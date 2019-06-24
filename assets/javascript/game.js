//Variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var directionsText = document.getElementById("directions-text");
var userchoiceText = document.getElementById("userchoice-text");
var userGuessText = document.getElementById("userGuess-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesSoFarText = document.getElementById("guessesFar-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
//Choices for computer
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
////The computer picks a random letter from A-Z
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
guessesLeft.textContent = "guesses left:" + guessesLeft;
//If the user and computer guess the same, "wins" +1, otherwise "guesses left" -1

document.onkeyup = event => {
    var userChoice = event.key.toLowerCase();
    if(userChoice === computerGuess) {
        wins++;
        guessesLeft = 8;

    }
    else {
        guessesLeft--;
      }
      
      if (guessesLeft === 0){
        losses++;
        guessesLeft = 9;
      }
  
    if(losses === 1)
      alert("you lose!")

    alert("User guess: " + userChoice);

  





};