
var computerChoice = poopla();
var userChoicer = document.getElementById("RButton").addEventListener("click", function(){
	var userChoice = "Rock";
	var computerChoice = poopla();
	coopla(userChoice, computerChoice);
});

var userChoices = document.getElementById("SButton").addEventListener("click", function(){
		var userChoice = "Scissors";
		var computerChoice = poopla();
		coopla(userChoice, computerChoice);
});

var userChoicep = document.getElementById("PButton").addEventListener("click", function(){
		var userChoice = "Paper";
		var computerChoice = poopla();
		coopla(userChoice, computerChoice);
});

function poopla(){
	computerChoice = Math.floor(Math.random() * 9 + 1);
	console.log (computerChoice);
	if (computerChoice <= 3) {
	computerChoice = "Rock";
	console.log ("Rock");
	}
	else if (computerChoice <= 6) {
		computerChoice = "Scissors";
		console.log ("Scissors");
	}
	else {
		computerChoice = "Paper";
		console.log ("Paper");
	}
	return computerChoice;
}


function coopla(computerChoice,userChoice){
	if (computerChoice === userChoice) {
		console.log ("It's a TIE!")
		alert ("It's a TIE!");
	}
	else if (userChoice === "Rock" && computerChoice === "Paper") {
		console.log ("Computer WINS!")
		alert ("Computer WINS!");
	}
		
	else if (userChoice === "Paper" && computerChoice === "Rock") {
		console.log ("You WIN!")
		alert ("You WIN!");
	}
		
	else if (userChoice === "Rock" && computerChoice === "Scissors") {
		console.log ("You WIN!")
		alert ("You WIN!");
	}
		
	else if (userChoice === "Scissors" && computerChoice === "Rock") {
		console.log ("Computer WINS!")
		alert ("Computer WINS!");
	}

	else if (userChoice === "Scissors" && computerChoice === "Paper") {
		console.log ("You WIN!")
		alert ("You WIN!");
	}
		
	else {
		console.log ("Computer WINS!")
		alert ("Computer WINS!");
	}
}