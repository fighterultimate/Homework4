
// Set variables

var randomNumber = "";
var redGem = "";
var greenGem = "";
var purpleGem = "";
var shinyGem = "";
var currentScore = 0;
var wins = 0;
var losses = 0;

// Selecting html elements by id or class

var randomBoxScore = document.getElementById("randomBox");
var winsLosses = document.getElementById("scoreKeeper");
var winBox = document.getElementById("wins");
var lossBox = document.getElementById("losses");
var redGemBox = document.getElementById("redGemBox");
var greenGemBox = document.getElementById("greenGemBox");
var purpleGemBox = document.getElementById("purpleGemBox");
var shinyGemBox = document.getElementById("shinyGemBox");
var scoreBoxBox = document.getElementById("scorebox");

// Generating all random numbers needed

randomNumber = Math.floor((Math.random() * 120) + 19);
console.log(randomNumber);
redGem = Math.floor((Math.random() * 12) + 1);
console.log(redGem);
greenGem = Math.floor((Math.random() * 12) + 1);
console.log(greenGem);
purpleGem = Math.floor((Math.random() * 12) + 1);
console.log(purpleGem);
shinyGem = Math.floor((Math.random() * 12) + 1);
console.log(shinyGem);

// Changing score according to random number

randomBoxScore.innerHTML = randomNumber;

// Adding reset function

function reset() {

    // Generating all random numbers needed again

    randomNumber = Math.floor((Math.random() * 120) + 19);
    console.log(randomNumber);
    redGem = Math.floor((Math.random() * 12) + 1);
    console.log(redGem);
    greenGem = Math.floor((Math.random() * 12) + 1);
    console.log(greenGem);
    purpleGem = Math.floor((Math.random() * 12) + 1);
    console.log(purpleGem);
    shinyGem = Math.floor((Math.random() * 12) + 1);
    console.log(shinyGem);

    // Changing score according to random number

    randomBoxScore.innerHTML = randomNumber;
    currentScore = 0;
    scoreBoxBox.innerHTML = currentScore;

};

// creating if statement function

function ifStatements() {
    if (currentScore === randomNumber) {
        wins++;
        winBox.innerHTML = "WINS: " + wins;
        alert("You Win!!!");
        reset();
    }

    else if (currentScore > randomNumber) {
        losses++;
        lossBox.innerHTML = "LOSSES: " + losses;
        alert("You Lose!!!");
        reset();
    }

};

// Adding value to pictures, handling click, adding value to current score variable//creating if statements for winning and losing conditions

$('#greenGemBox').on("click", function () {
    currentScore = currentScore + greenGem;
    scoreBoxBox.innerHTML = currentScore;
    ifStatements();

});


$('#redGemBox').on("click", function () {
    currentScore = currentScore + redGem;
    scoreBoxBox.innerHTML = currentScore;
    ifStatements();
});



$('#purpleGemBox').on("click", function () {
    currentScore = currentScore + purpleGem;
    scoreBoxBox.innerHTML = currentScore;
    ifStatements();

});



$('#shinyGemBox').on("click", function () {
    currentScore = currentScore + shinyGem;
    scoreBoxBox.innerHTML = currentScore;
    ifStatements();
});












