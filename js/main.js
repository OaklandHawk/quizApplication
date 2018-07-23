// array of questions and answers
var questions = [
	{
		question: "Who won the NBA Finals in 2018?",
		answer: "GoldenState Warriors"
	},
	{
		question: "Who won the SuperBowl last year?",
		answer: "Philadelphia Eagles"
	},
	{
		question: "True or False; Are dogs color blind?",
		answer: "False"
	},
	{
		question: "Who was the first President to declare war?",
		answer: "James Madison"
	},
	{
		question: "Who was playing in the World Series in the California 1989 earthquake?",
		answer: "Oakland A's and San Fransico Giants"
	},
	{
		question: "In 1840 the world's first computer programmer came about. What is their name?",
		answer: "Ada Lovelace"
	},
	{
		question: "At what age did the oldest human being to date live to be?",
		answer: "122 years"
	},
	{
		question: "What is the MPH of the fastest recorded time from a human being?",
		answer: "24 MPH"
	},
	{
		question: "What was the name of the first manned mission to land on the moon?",
		answer: "Apollo 11"
	},
	{
		question: "What country is named for its location on the equator?",
		answer: "Ecuador"
	}
];

// loop through each questions
for(var i = 0; i < questions.length; i++) {
	// store each question value
	var question = questions[i].question;
	// store each element to add question too
	var element = document.getElementById('question' + [i]);

	// check what question and element is being selected
	console.log(question, element);

	// update text content of each element
	element.textContent = question;
}

// check results when the user submits quiz
function testResults() {
	// store variables to update correct and incorrect totals
	var correct = 0;
	var incorrect = 0;

	// loop through questions array
	for(var i = 0; i < questions.length; i++) {
		// store each correct answer
		var answer = questions[i].answer;
		// store each user answer
		var guess = document.getElementById('answer' + [i]).value;
		// store element to add a class if correct or incorrect
		var questionSpot = document.getElementById('question' + [i]);

		// check if the user answer matches the correct answer
		if(answer == guess) {
			// update class on questionSpot
			questionSpot.className = 'correct';
			// add one to correct
			correct++;
		} else {
			// update class on questionSpot
			questionSpot.className = 'incorrect';
			// add one to incorrect
			incorrect++;
		};
	};

	// update correct and incorrect values
	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;
}
