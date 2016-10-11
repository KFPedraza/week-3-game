//Press any key to get started
document.onkeyup = function(event) {
	var userInput = String.fromCharCode(event.keyCode).toLowerCase();
}

//Hangman word choice array
var aquariumAnimals = ["clownfish", "beluga whale", "piranha", "bottlenose dolphin", "anemone", "manta ray", "whale shark", "jellyfish", "octopus"];

//Random word
var answer = aquariumAnimals[Math.floor(Math.random() * aquariumAnimals.length)];

//Display a random word on page, letter by letter
function randomWord () {
	for (
	}
}

//Start playing
function startGame () {

}

randomWord();