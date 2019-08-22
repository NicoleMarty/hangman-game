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
var letter = "abcdefghijklmnopqrstuvwxyz_".split("");

var nameIndex;
var wins = 0;
var losses = 0;
var gameEnd = false;

var directionsText = document.getElementById("directions-text");
var currentNameElement = document.getElementById("current-choice")
var userGuessElement = document.getElementById("user-guess")
var winsElement = document.getElementById("wins-count")
var allowedGuessesElement = document.getElementById("letters-guessed")
var letterCountElement = document.getElementById("guesses-num")


// Computer chooses name
var nameArray = ["cleopatra", "malala", "marie antoinette", "harriet tubman"];
var name = Math.floor(Math.random() * nameArray.length);
var currentChoice = nameArray[name];
console.log(currentChoice);


// Name builds with _ and letters
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
}

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    console.log(userGuess)
    if (userGuess.valueOf(letter)) {
        // Adds key pressed to Letters Guessed
        allowedGuessesElement.append(userGuess);
        directionsText.textContent = "Guess another letter.";
    }

    // Set condition for current name
    if (currentChoice === "cleopatra") {
        // Check if key pressed is in current name
        var arrayLength = nameArray.length;
        // Looping through nameArray.
        for (var i = 0; i < arrayLength; i++) {
            // If the first character in the current name is "c", alert the following message.
            // If the second character in the current name is "l", alert the following message.
            // Etc...
            // Else return.
            if (nameArray[i].charAt(0) === userGuess) {
                console.log("Starts with a c!");
            }
            if (nameArray[i].charAt(1) === userGuess) {
                console.log("Second letter is l!");
            }
            if (nameArray[i].charAt(2) === userGuess) {
                console.log("Third letter is e!");
            }
            if (nameArray[i].charAt(3) === userGuess) {
                console.log("Fourth letter is o!");
            }
            if (nameArray[i].charAt(4) === userGuess) {
                console.log("Fifth letter is p!");
            }
            if (nameArray[i].charAt(5) === userGuess && nameArray[i].charAt(8) === userGuess) {
                console.log("Sixth and ninth letters are a!");
            }
            if (nameArray[i].charAt(6) === userGuess) {
                console.log("Seventh letter is t!");
            }
            if (nameArray[i].charAt(7) === userGuess) {
                console.log("Eigth letter is r!");
            } else {
                return;
            }
        }
    }
}