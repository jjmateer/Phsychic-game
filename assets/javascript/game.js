var wins = 0;
var losses = 0;
var guessesLeft = 9;

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var guessesLeft = document.getElementById("guessesLeft-text")
var guessesSoFar = document.getElementById("guessesFar-text")
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


document.onkeyup = function (event) {


    var userChoice = event.key;


    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    alert("User guess: " + userChoice);

    userChoiceText.textContent = "You chose: " + userChoice;


    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;

    guessesLeft.textContent = "guesses left:" + (guessesLeft - 1);

    

    if (userChoice === computerGuess) {
    console.log(wins++)
    }

};