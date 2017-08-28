$(document).ready(function() {

	var countdown = 60;

	var timer;
	var sixtySeconds;
	var stop;

	var timeRemaining = $("#timeRemaining");
	timeRemaining.html("<h2> Time Remaining: " + countdown + "</h2>");

	var currentQuestion = $("#question");

	var answerSelection = $("#answerSelection");

	var correctAnswer = $("#correctAnswer");

	var correctAnswers = $("#totalCorrect");
	var correct = 0;

	var incorrectAnswers = $("#totalIncorrect");
	var incorrect = 0;

	var intervalId;

	var userGuess = "";


var question1 = {
	question: "Sequoia National Park is located in which U.S. state?",
	answers: ["Oregon", "Washington", "Idaho", "California"],
	correctAnswer: "California"
}

var question2 = {
	question: "What is the largest ocean on planet Earth?",
	answers: ["Atlantic", "Pacific", "Arctic", "Indian"],
	correctAnswer: "Pacific"
}

var question3 = {
	question: "What is the name of the longest mountain range in North America?",
	answers: ["Rocky Mountains", "Sierra Nevada", "Appalachian Mountains", "Great Smoky Mountains"],
	correctAnswer: "Rocky Mountains",
}

var question4 = {
	question: "In which South American country would you find the ancient Incan citadel Machu Picchu?",
	answers: ["Brazil", "Peru", "Argentina", "Chile"],
	correctAnswer: "Peru"
}

var question5 = {
	question: "Beirut is the capital and largest city of what country?",
	answers: ["Germany", "Portugal", "Lebanon", "Romania"],
	correctAnswer: "Lebanon"
}

// Player has a limited amount of time to finish the quiz

function timer() {
	intervalId = setInterval(sixtySeconds, 1000);
};

function sixtySeconds() {
	countdown--;
	timeRemaining.html("<h2> Time Remaining: " + countdown + "</h2>");

	if (countdown === 0) {
		stop();
	} 
}

function stop() {
	clearInterval(intervalId);
}


startGame();


// Show first question until player answers, or time runs out

function startGame() {
	timer();
	$("#timeRemaining").html("<h2> Time Remaining: " + countdown + "</h2>");
	currentQuestion.html(question1.question);
	answerSelection.html(question1.answers);
}

// Turn answers into buttons

// Add button hovers

// If player selects correct answer, show screen congratulating them

// After a few seconds, display next question

// If player chooses wrong answer, tell them they selected wrong option, display correct answer

// After a few seconds, display next question

// If player runs out of time, tell them time is up, display correct answer, end game

// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

});




