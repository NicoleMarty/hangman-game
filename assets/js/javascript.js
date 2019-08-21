console.log("page loaded");

// Variables
var currentChoice; // "current name" selected by computer
var nameBuild = []; // number of letters in "current name"
var numGuesses = 10; // number of letters guessed
var lettersGuessed = []; // Store the guessed letters;
var nameObject = {
    cleopatra: "_ _ _ _ _ _ _ _ _",
    malala: "_ _ _ _ _ _",
    marieantoinette: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _",
    harriettubman: "_ _ _ _ _ _ _ _ _ _ _ _ _"
};
var nameIndex = 0;


var wins = 0;
var losses = 0;
var gameEnd = false;
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];


var currentNameElement = document.getElementById("current-choice")
var userGuessElement = document.getElementById("user-guess")
var winsElement = document.getElementById("wins-count")
var allowedGuessesElement = document.getElementById("letters-guessed")
var letterCountElement = document.getElementById("guesses-num")


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    console.log(userGuess)
    allowedGuessesElement.append(userGuess);

};


var nameArray = ["cleopatra", "malala", "marie antoinette", "harriet tubman"];
var name = Math.floor(Math.random() * nameArray.length);
var currentChoice = nameArray[name];
console.log(currentChoice);
if (currentChoice === "cleopatra") {
    currentNameElement.innerHTML = ["_ _ _ _ _ _ _ _ _"];
    console.log(nameObject.cleopatra)
    nameBuild = "cleopatra".split("");
    console.log(nameBuild)

} else if (currentChoice === "malala") {
    currentNameElement.innerHTML = ["_ _ _ _ _ _"];
    console.log(nameObject.malala)
    nameBuild = "malala".split("");
    console.log(nameBuild)

} else if (currentChoice === "marie antoinette") {
    currentNameElement.innerHTML = ["_ _ _ _ _ _ _ _ _ _ _ _ _ _ _"];
    console.log(nameObject.marieantoinette)
    nameBuild = "marieantoinette".split("");
    console.log(nameBuild)

} else if (currentChoice === "harriet tubman") {
    currentNameElement.innerHTML = ["_ _ _ _ _ _ _ _ _ _ _ _ _"];
    console.log(nameObject.harriettubman)
    nameBuild = "harriettubman".split("");
    console.log(nameBuild)
};