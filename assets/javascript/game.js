//pressing a key equates to letter pressed
document.onkeyup = function(event) {
	var userInput = String.fromCharCode(event.keyCode).toLowerCase();
	playGame(userInput);
}

//alphabet array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//function to choose random letter from alphabet array
var answer = alphabet[Math.floor(Math.random()*alphabet.length)];


//counters
	var wins = 0;
	var losses = 0;
	var remaining = 7;
	var guesses = [];

//display text in doc
document.getElementById("thinkingOf").innerHTML = "Guess what letter I'm thinking of, you have 7 guesses!";


var displayCounters = function () {

//display wins in winsCounter div
document.getElementById("winsCounter").innerHTML = "Wins: " + wins;

//display losses in loseCounter div
document.getElementById("loseCounter").innerHTML = "Losses: " + losses;

//display number of guesses remaining in guessesRemaining div
document.getElementById("guessesRemaining").innerHTML = "Guesses remaining: " + remaining;

//display letters guessed in lettersGuessed div
document.getElementById("lettersGuessed").innerHTML = "Guessed so far:<br>" + guesses;
}

function playGame(userInput) {

	var answer = alphabet[Math.floor(Math.random()*alphabet.length)];

		if (userInput === answer){
			wins++;
			guesses = [];
			remaining = 8;
			displayCounters();
			playGame();
		}

		if (userInput !== answer){
			remaining--;
			guesses.push(userInput);
			displayCounters();
		}

		if (remaining === 0) {
			losses++;
			guesses = [];
			remaining = 8;
			playGame ();
			displayCounters();
		}
}