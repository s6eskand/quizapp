const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementById('finalScore');
finalScore.innerText = mostRecentScore;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];


const MAX_HIGH_SCORES = 5;

username.addEventListener('keyup', () => {
	console.log(username.value);
	saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
	console.log("clicked the save button!");
	e.preventDefault();

	const score = {
		score: Math.floor(Math.random() * 100),
		name: username.value,
	};
	highScores.push(score);
	highScores.sort( (a, b) => {
		return b.score - a.score;
	});

	highScores.splice(MAX_HIGH_SCORES);

	localStorage.setItem("highScores", JSON.stringify(highScores));
	window.location.assign("index.html");
}