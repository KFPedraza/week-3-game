//Press any key to get started
document.onkeyup = function(event) {
	var userInput = String.fromCharCode(event.keyCode).toLowerCase();
}

//Hangman word choice array
var aquariumAnimals = ["clownfish", "beluga whale", "piranha", "bottlenose dolphin", "anemone", "manta ray", "whale shark", "jellyfish", "octopus"];

//Random word
var answer = aquariumAnimals[Math.floor(Math.random() * aquariumAnimals.length)];

//Display on random word on page, then hide random word (so user can guess)
function randomWord () {
	document.write(answer).style.visibility = "hidden";

//Start playing
function startGame () {
	
}