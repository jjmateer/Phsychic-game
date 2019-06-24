//Variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var directionsText = document.getElementById("directions-text");
var userGuessText = document.getElementById("userGuess-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesSoFarText = document.getElementById("guessesFar-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
//Choices for computer
var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("");
////The computer picks a random letter from A-Z
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
guessesLeft.textContent = "guesses left:" + guessesLeft;
//If the user and computer guess the same, "wins" +1, otherwise "guesses left" -1

document.onkeyup = event => {
    var userGuess = event.key.toLowerCase();
    if(userGuess === computerGuess) {
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
  
    if(losses === 1){
      alert("you lose!")
    }
    if(wins ===1){
      alert("you win!")
    }
    
    alert("User guess: " + userGuess);

  





};