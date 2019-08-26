console.log("page loaded");

// Variables
var currentChoice; // "current name" selected by computer
var nameBuild = []; // number of letters in "current name"
var lettersGuessed = []; // Store the guessed letters;
var nameObject = {
    cleopatra: "_ _ _ _ _ _ _ _ _",
    malala: "_ _ _ _ _ _",
    marieantoinette: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _",
    harriettubman: "_ _ _ _ _ _ _ _ _ _ _ _ _"
};
var letter = "abcdefghijklmnopqrstuvwxyz_".split("");

var nameIndex;

var losses = 0;
var gameEnd = false;

var directionsText = document.getElementById("directions-text");
var numGuessesElement = document.getElementById("guesses-num")
var winsElement = document.getElementById("wins-count")
var currentNameElement = document.getElementById("current-choice")
var userGuessElement = document.getElementById("user-guess")
var guessedLettersElement = document.getElementById("letters-guessed")

// variable counting number of guesses remaining
var numGuesses = 10;
document.getElementById("guesses-num").innerHTML = numGuesses;

// variable counting wins
var wins = 0;
document.getElementById("wins-count").innerHTML = wins;
var resetLettersGuessed = ""

// This is an array that we will push the letters from the current word to
// for comparison of whether the player's guess is correct or not
var mysteryWord = [];
var i;


// Computer chooses name
var nameArray = ["cleopatra", "malala", "marieantoinette", "harriettubman"];
var name = Math.floor(Math.random() * nameArray.length);
var currentChoice = nameArray[name];
console.log(currentChoice);
// Turns currentChoice into underscores
var wordStatus = [];
for (var i = 0; i < currentChoice.length; i++) {
    wordStatus.push("__");
}
document.getElementById("current-choice").innerHTML = wordStatus.join(" ");


// function evaluating the positions of the given letter in the currentWord string
// return empty array in case of failure
function letterInWord(letter) {
    // the array that will contain the char positions in the currentWord that has the 
    var positions = new Array();
    for (i = 0; i < currentChoice.length; i++) {
        if (currentChoice[i] === letter)
            positions.push(i);
    }
    return positions;
}

// return number of letters that is still not guessed
function lettersToGuess() {
    var i;
    var numGuessesElement = 0;
    for (i in wordStatus) {
        if (wordStatus[i] === "__") numGuessesElement++;
    }
    return numGuessesElement;
}


// GAME ON!
document.onkeyup = function(event) {
    var letter = event.key;
    guessedLettersElement = letter.toLowerCase();
    var i;
    console.log("You have typed a letter: ".concat(letter));

    // Comparing letter pressed to letters in word
    var positions = letterInWord(guessedLettersElement);
    if (positions.length) {
        console.log("User has pressed a letter from word: " + letter);
        for (i = 0; i < positions.length; i++) {
            wordStatus[positions[i]] = guessedLettersElement;
            // replace progress Word underscore with letter pressed
            document.getElementById("current-choice").innerHTML = wordStatus.join(" ");
        }
    } else {
        document.getElementById("letters-guessed").innerHTML += letter;
        // subtract a point from guesses left
        numGuesses--;
        document.getElementById("guesses-num").innerHTML = numGuesses;
    }


    // YOU ESCAPED HER WRATH THIS TIME!
    if (lettersToGuess() === 0) {
        var name = ['Yup! Onto the next one!']
        var nextRound = name[Math.floor(Math.random() * name.length)];
        alert(nextRound);


        // reset guesses left
        numGuesses = 10;
        document.getElementById("guesses-num").innerHTML = numGuesses;

        // reset letters guessed
        document.getElementById("letters-guessed").innerHTML = resetLettersGuessed;

        // computer chooses new word then makes underscores
        currentChoice = nameArray[Math.floor(Math.random() * nameArray.length)].toLowerCase();
        console.log(currentChoice);
        wordStatus = [];
        for (i = 0; i < currentChoice.length; i++) {
            wordStatus.push("__");
        }
        document.getElementById("current-choice").innerHTML = wordStatus.join(" ");

        // Increase wins
        wins++;
        document.getElementById("wins-count").innerHTML = wins;
    }

    //  OR...GAME OVER OFF WITH YOUR HEAD AND RESET
    if (numGuesses === 0) {
        alert("OFF WITH YOUR HEAD!! The name was " + currentChoice);
        location.reload();
    }

};