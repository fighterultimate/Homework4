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
// Adding value to pictures, handling click, adding value to current score variable//creating if statements for winning and losing conditions

$('#greenGemBox').on("click", function () {
    currentScore = currentScore + greenGem;
    scoreBoxBox.innerHTML = currentScore;
    if (currentScore === randomNumber) {
        wins++;
        winBox.innerHTML = "WINS: " + wins;
    }

    else if (currentScore > randomNumber) {
        losses++;
        lossBox.innerHTML = "LOSSES: " + losses;
    }

});


$('#redGemBox').on("click", function () {
    currentScore = currentScore + redGem;
    scoreBoxBox.innerHTML = currentScore;
    if (currentScore === randomNumber) {

        wins++;
        winBox.innerHTML = "WINS: " + wins;

    }

    else if (currentScore > randomNumber) {
        losses++;
        lossBox.innerHTML = "LOSSES: " + losses;
    }

});



$('#purpleGemBox').on("click", function () {
    currentScore = currentScore + purpleGem;
    scoreBoxBox.innerHTML = currentScore;
    if (currentScore === randomNumber) {
        wins++;
        winBox.innerHTML = "WINS: " + wins;
    }

    else if (currentScore > randomNumber) {
        losses++;
        lossBox.innerHTML = "LOSSES: " + losses;
    }

});



$('#shinyGemBox').on("click", function () {
    currentScore = currentScore + shinyGem;
    scoreBoxBox.innerHTML = currentScore;
    if (currentScore === randomNumber) {

        wins++;
        winBox.innerHTML = "WINS: " + wins;
    }

    else if (currentScore > randomNumber) {
        losses++;
        lossBox.innerHTML = "LOSSES: " + losses;
    }

});



  /* Questions. How to start game over after a win or loss
  Do I need the if statement inside each click event?




  
  */