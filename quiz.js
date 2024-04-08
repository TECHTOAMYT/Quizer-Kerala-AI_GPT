let timer;
let timeRemaining = 60; // Timer set to 60 seconds
let score = 0;
const questions = ["Question 1?", "Question 2?", "Question 3?"]; // Add your questions here
const answers = ["answer1", "answer2", "answer3"]; // Add corresponding answers here

function startTimer() {
    timer = setInterval(() => {
        timeRemaining--;
        document.getElementById("time").textContent = timeRemaining;
        if (timeRemaining === 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value;
    const currentQuestion = questions.shift();
    const correctAnswer = answers.shift();

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
        document.getElementById("scoreValue").textContent = score;
    }

    if (questions.length === 0) {
        clearInterval(timer);
        endQuiz();
    } else {
        document.getElementById("question").textContent = questions[0];
        document.getElementById("answer").value = "";
    }
}

function endQuiz() {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Quiz ended. Your score: ${score}`;

    if (score >= 2) {
        resultDiv.textContent += " Pass!";
    } else {
        resultDiv.textContent += " Fail!";
    }
}

document.getElementById("question").textContent = questions[0];
startTimer();
