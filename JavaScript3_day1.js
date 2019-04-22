var userChoice = prompt("Choose Rock, Paper, or Scissors.");
var computerChoice = Math.floor(Math.random() * 9 + 1);
console.log (computerChoice);
if (computerChoice <= 3) {
	computerChoice = "Rock";
}
else if (computerChoice <= 6) {
	computerChoice = "Scissors";
}
else {
	computerChoice = "Paper";
}
// COMPUTER CHOICE ABOVE
console.log ("The computer chose " + computerChoice);
console.log ("The user chose " + userChoice);
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
