$(document).ready(function() {

	var countdown = 61;

	var timer;
	var sixtySeconds;
	var stop;

	var start = $("#start");

	var reset = $("#reset");

	var timeRemaining = $("#timeRemaining");

	var question = $("#question");

	var answerSelection = $("#answerSelection");

	var correctAnswer = $("#correctAnswer");

	var answers = $("#answers");

	var totalCorrect = $("#totalCorrect");

	var totalIncorrect = $("#totalIncorrect");

	var timeUp = $("#timeUp");

	var intervalId;

	var userGuess = "";

	var correct = 0;

	var incorrect = 0;

	var answer1 = $("#answer1");

	var answer2 = $("#answer2");

	var answer3 = $("#answer3");

	var answer4 = $("#answer4");


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

var currentQuestion = [question1.question, question2.question, question3.question, question4.question, question5.question];

var currentAnswer = [question1.correctAnswer, question2.correctAnswer, question3.correctAnswer, question4.correctAnswer, question5.correctAnswer];
console.log(currentAnswer[0]);

var selection = [question1.answers, question2.answers, question3.answers, question4.answers];

var userGuess = $("#answer1, #answer2, #answer3, #answer4").click(function() {
	// Grab answer clicked ****

});

// Start Game

reset.hide();


$("#start").click(function() {
	start.hide();
	firstQuestion();
});


// Player has a limited amount of time to finish the quiz

function timer() {
	intervalId = setInterval(sixtySeconds, 1000);
}

function sixtySeconds() {
	countdown--;
	timeRemaining.html("<h2> Time Remaining: " + countdown + "</h2>");

	if (countdown === 0) {
		stop();
		timeUp.html("Time's Up!");
		totalCorrect.html("Correct Answers: " + correct);
		totalIncorrect.html("Incorrect Answers: " + incorrect);
	} 
}

function stop() {
	clearInterval(intervalId);
	timeRemaining.hide();
	question.hide();
	correctAnswer.hide();
	answers.hide();
	timeUp.html("Game Over!");
	totalCorrect.html("Correct Answers: " + correct);
	totalIncorrect.html("Incorrect Answers: " + incorrect);
	reset.show();
}

reset.click(function() {
		reset();
});

function reset() {
	reset.hide();
	firstQuestion();
}


// Show first question until player answers, or time runs out

function firstQuestion() {

	console.log(question1.answers);

	timer();
	sixtySeconds();
	timeRemaining.html("<h2> Time Remaining: " + countdown + "</h2>");
	question.html(currentQuestion[0]);
	answer1.html(question1.answers[0]);
	answer2.html(question1.answers[1]);
	answer3.html(question1.answers[2]);
	answer4.html(question1.answers[3]);


	// If player selects correct answer, show screen congratulating them
	if (userGuess === currentAnswer[0]) {
		console.log(selection);
		correct++;
		console.log(correct);
		correctAnswer.html("Correct!");

		// After a few seconds, display next question
		setTimeout(function() {
			secondQuestion();
		}, 2000);

		// If player chooses wrong answer, tell them they selected wrong option, display correct answer
	} else {
		incorrect++;
		console.log(incorrect);
		correctAnswer.html(currentAnswer[0]);

		// After a few seconds, display next question
		setTimeout(function() {
			secondQuestion();
		}, 2000);
	}
}

function secondQuestion() {
	correctAnswer.empty();
	question.html(currentQuestion[1]);
	answer1.html(question2.answers[0]);
	answer2.html(question2.answers[1]);
	answer3.html(question2.answers[2]);
	answer4.html(question2.answers[3]);

	if (userGuess === currentAnswer[1]) {
		console.log(userGuess);
		correct++;
		console.log(correct);
		correctAnswer.html("Correct!");
		setTimeout(function() {
			thirdQuestion();
		}, 2000);

	} else {
		incorrect++;
		console.log(incorrect);
		correctAnswer.html(currentAnswer[1]);
		setTimeout(function() {
			thirdQuestion();
		}, 2000);
	}
}

function thirdQuestion() {
	correctAnswer.empty();
	question.html(currentQuestion[2]);
	answer1.html(question3.answers[0]);
	answer2.html(question3.answers[1]);
	answer3.html(question3.answers[2]);
	answer4.html(question3.answers[3]);

	if (userGuess === currentAnswer[2]) {
		console.log(userGuess);
		correct++;
		console.log(correct);
		correctAnswer.html("Correct!");
		setTimeout(function() {
			fourthQuestion();
		}, 2000);

	} else {
		incorrect++;
		console.log(incorrect);
		correctAnswer.html(currentAnswer[2]);
		setTimeout(function() {
			fourthQuestion();
		}, 2000);
	}
}

function fourthQuestion() {
	correctAnswer.empty();
	question.html(currentQuestion[3]);
	answer1.html(question4.answers[0]);
	answer2.html(question4.answers[1]);
	answer3.html(question4.answers[2]);
	answer4.html(question4.answers[3]);

	if (userGuess === currentAnswer[3]) {
		console.log(userGuess);
		correct++;
		console.log(correct);
		correctAnswer.html("Correct!");
		setTimeout(function() {
			fifthQuestion();
		}, 2000);

	} else {
		incorrect++;
		console.log(incorrect);
		correctAnswer.html(currentAnswer[3]);
		setTimeout(function() {
			fifthQuestion();
		}, 2000);
	}
}

function fifthQuestion() {
	correctAnswer.empty();
	question.html(currentQuestion[4]);
	answer1.html(question5.answers[0]);
	answer2.html(question5.answers[1]);
	answer3.html(question5.answers[2]);
	answer4.html(question5.answers[3]);

	if (userGuess === currentAnswer[4]) {
		console.log(userGuess);
		correct++;
		console.log(correct);
		correctAnswer.html("Correct!");
		setTimeout(function() {
			stop();
		}, 2000);

	} else {
		incorrect++;
		console.log(incorrect);
		correctAnswer.html(currentAnswer[4]);
		setTimeout(function() {
			stop();
			console.log("done");
		}, 2000);
	}
}



// Add button hovers

// If player runs out of time, tell them time is up, display correct answer, end game

// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

});




