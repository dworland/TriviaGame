$(document).ready(function() {

	var intervalId;
	var timer;
	var sixtySeconds;
	var stop;

	var countdown = 61;

	var correct = 0;

	var incorrect = 0;

	var start = $("#start");

	var restart = $("#reset");

	var timeRemaining = $("#timeRemaining");

	var question = $("#question");

	var answerSelection = $("#answerSelection");

	var correctAnswer = $("#correctAnswer");

	var answers = $("#answers");

	var totalCorrect = $("#totalCorrect");

	var totalIncorrect = $("#totalIncorrect");

	var timeUp = $("#timeUp");

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

var a = [question1.answers[0], question2.answers[0], question3.answers[0], question4.answers[0], question5.answers[0]];

var b = [question1.answers[1], question2.answers[1], question3.answers[1], question4.answers[1], question5.answers[1]];

var c = [question1.answers[2], question2.answers[2], question3.answers[2], question4.answers[2], question5.answers[2]];

var d = [question1.answers[3], question2.answers[3], question3.answers[3], question4.answers[3], question5.answers[3]];

// Start Game

restart.hide();

$("#start").click(function() {
	start.hide();
	startQuestion();
});

var current = 0;
$("#answer1, #answer2, #answer3, #answer4").click(function() {
	// Grab answer clicked
	console.log(this);
	var value = this.innerHTML;
	console.log(value);

	// If player selects correct answer, show screen congratulating them
	if (value === currentAnswer[current]) {
		console.log(value);
		correct++;
		console.log(correct);
		correctAnswer.html("Correct!");

		// After a few seconds, display next question
		setTimeout(function() {
			correctAnswer.empty();
	
			var nextQuestion = currentQuestion[current];
			console.log(nextQuestion);
			question.html(nextQuestion);

			var newA = a[current];
			console.log(newA);
			answer1.html(newA);

		
			var newB = b[current];
			console.log(newB);
			answer2.html(newB);

		
			var newC = c[current];
			console.log(newC);
			answer3.html(newC);


			var newD = d[current];
			console.log(newD);
			answer4.html(newD);

		}, 2000);

	// If player chooses wrong answer, tell them they selected wrong option, display correct answer
	} 
	else {
		incorrect++;
		console.log(incorrect);
		correctAnswer.html(currentAnswer[current]);


		// After a few seconds, display next question
		setTimeout(function() {
			correctAnswer.empty();
	
			var nextQuestion = currentQuestion[current];
			console.log(nextQuestion);
			question.html(nextQuestion);

			var newA = a[current];
			console.log(newA);
			answer1.html(newA);

		
			var newB = b[current];
			console.log(newB);
			answer2.html(newB);
		
		
			var newC = c[current];
			console.log(newC);
			answer3.html(newC);


			var newD = d[current];
			console.log(newD);
			answer4.html(newD);
		}, 2000);
		
	}

	// If last question is reached, stop and return
	if (current === (currentQuestion.length - 1)) {
		setTimeout(function(){
			stop();
			return;
		}, 2000);
	}
	current++;

});

// Player has a limited amount of time to answer the questions

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
	timeUp.show();
	totalCorrect.show();
	totalIncorrect.show();
	timeUp.html("Game Over!");
	totalCorrect.html("Correct Answers: " + correct);
	totalIncorrect.html("Incorrect Answers: " + incorrect);
	restart.show();
}

function reset() {
	current = 0;
	correct = 0;
	incorrect = 0;
	countdown = 61;
	start.show();
	timeUp.hide();
	totalIncorrect.hide();
	totalCorrect.hide();
	restart.hide();
}


// Show first question until player answers, or time runs out

function startQuestion() {
	timeRemaining.show();
	question.show();
	correctAnswer.show();
	answers.show();


	timer();
	sixtySeconds();
	timeRemaining.html("<h2> Time Remaining: " + countdown + "</h2>");
	console.log(timeRemaining);
	question.html(currentQuestion[0]);
	answer1.html(question1.answers[0]);
	answer2.html(question1.answers[1]);
	answer3.html(question1.answers[2]);
	answer4.html(question1.answers[3]);

}

restart.click(function() {
		reset();
});


});




