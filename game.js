const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices)

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = {};

let questions = [
	{
		question: "Inside which HTML element do we put the JS code?",
		choice1: "<script>",
		choice2: "<javascript>",
		choice3: "<js>",
		choice4: "<scripting>",
		answer: 1,
	},
	{
		question: "What is the correct syntax for referring to an external script 'myscript.js'?",
		choice1: "<script href='myscript.js'>",
		choice2: "<script link='myscript.js'>",
		choice3: "<script src='myscript.js'>",
		choice4: "<script thisistherightanser='myscript.js'>",
		answer: 3,
	},
	{
		question: "How do you write 'Hello World' in an alert box?",
		choice1: "msgBox('Hello World')",
		choice2: "alert('Hello World')",
		choice3: "alertBox('Hello World')",
		choice4: "console.log('Hello World')",
		anser: 2,
	}
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
	questionCounter = 0;
	score = 0;
	availableQuestions = [ ... questions];
	console.log(availableQuestions);
	getNewQuestion();
};

getNewQuestion = () => {
	if(availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS) {
		return window.location.assign("end.html");
	}

	questionCounter++;
	const questionIndex = Math.floor(Math.random() * availableQuestions.length);
	currentQuestion = availableQuestions[questionIndex];
	question.innerText = currentQuestion.question;

	choices.forEach( choice => {
		const number = choice.dataset['number'];
		choice.innerText = currentQuestion['choice' + number];
	})

	availableQuestions.splice(questionIndex, 1);
	acceptingAnswers = true;
};

choices.forEach(choice => {
	choice.addEventListener("click", e => {
		if(!acceptingAnswers) return;

		acceptingAnswers = false;
		const selectedChoice = e.target;
		const selectedAnswer = selectedChoice.dataset["number"];

		var classToApply = 'incorrect';
			if (selectedAnswer == currentQuestion.answer) {
				classToApply = 'correct';
			};

		selectedChoice.parentElement.classList.add(classToApply);

		setTimeout(() => {
			selectedChoice.parentElement.classList.remove(classToApply);
			getNewQuestion();
		}, 1000);

	})
});

startGame();