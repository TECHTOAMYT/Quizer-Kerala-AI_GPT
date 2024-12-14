// Get references to necessary elements
const questions = [
  { question: "ഇന്ത്യയുടെ ദേശീയ ചിഹ്നം ഏത്?", options: ["അശോകസ്തംഭം", "താജ്മഹൽ", "കോനാർക്ക് സൂര്യമന്ദിരം", "കുതിര"], correct: 0 },
  // Add more questions here
];

let currentQuestion = 0;
let score = 0;
let timerInterval;

const welcomePage = document.querySelector('.welcome-page');
const quizPage = document.querySelector('.quiz-page');
const endPage = document.querySelector('.end-page');
const startQuizButton = document.getElementById('start-quiz');
const restartQuizButton = document.getElementById('restart-quiz');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const timerDisplay = document.getElementById('timer-display');
const analogHand = document.getElementById('analog-hand');
const questionNumber = document.getElementById('question-number');
const finalScore = document.getElementById('final-score');
const scoreDisplay = document.getElementById('score-display');
const lightIndicator = document.getElementById('light-indicator');
const sadEmoji = document.getElementById('sad-emoji');

// Get audio elements for different sounds
const timerAudio = document.getElementById('timerAudio');
const gameOverAudio = document.getElementById('gameOverAudio');
const wrongAudio = document.getElementById('wrongAudio');
const rightAudio = document.getElementById('rightAudio');

// Utility function to shuffle questions
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// Start quiz
function startQuiz() {
  currentQuestion = 0;
  score = 0;
  scoreDisplay.textContent = score;
  shuffleArray(questions);
  welcomePage.classList.remove('active');
  quizPage.classList.add('active');
  loadQuestion();
}

// End quiz
function endQuiz() {
  quizPage.classList.remove('active');
  endPage.classList.add('active');
  finalScore.textContent = `Your Score: ${score}/${questions.length}`;

  // Play game over sound
  gameOverAudio.play();
}

// Restart quiz
function restartQuiz() {
  endPage.classList.remove('active');
  welcomePage.classList.add('active');
  
  // Stop game over sound and reset it
  gameOverAudio.pause();
  gameOverAudio.currentTime = 0;
}

// Load a new question
function loadQuestion() {
  if (currentQuestion >= questions.length) {
    endQuiz();
    return;
  }

  const q = questions[currentQuestion];
  questionText.textContent = q.question;
  answersContainer.innerHTML = '';
  questionNumber.textContent = `Question ${currentQuestion + 1}/${questions.length}`;

  let shuffledOptions = [...q.options];
  shuffleArray(shuffledOptions);

  shuffledOptions.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = String.fromCharCode(97 + index) + ". " + option;
    button.onclick = () => checkAnswer(index === shuffledOptions.indexOf(q.options[q.correct]));
    answersContainer.appendChild(button);
  });

  startTimer();
}

// Check the selected answer
function checkAnswer(correct) {
  clearInterval(timerInterval);
  lightIndicator.style.display = 'block';

  if (correct) {
    lightIndicator.classList.add('green-light');
    lightIndicator.classList.remove('red-light');
    score++;
    scoreDisplay.textContent = score;
    rightAudio.play();
    setTimeout(() => lightIndicator.style.display = 'none', 500);
  } else {
    lightIndicator.classList.add('red-light');
    lightIndicator.classList.remove('green-light');
    sadEmoji.style.display = 'inline-block';
    wrongAudio.play();
    setTimeout(() => sadEmoji.style.display = 'none', 1000);
    setTimeout(() => lightIndicator.style.display = 'none', 1000);
  }

  currentQuestion++;
  loadQuestion();
}

// Start the timer
function startTimer() {
  let timeLeft = 25;
  timerDisplay.textContent = timeLeft;
  analogHand.style.transform = `rotate(0deg)`;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    analogHand.style.transform = `rotate(${(25 - timeLeft) * 14.4}deg)`;

    // Play the timer sound when the timer reaches 9 seconds
    if (timeLeft === 9 && !timerAudio.paused) {
      timerAudio.play();
    }

    // Pause the timer sound when it reaches 1 second
    if (timeLeft === 1) {
      timerAudio.pause();
      timerAudio.currentTime = 0; // Reset the sound
    }

    // When time is up, end the quiz for the current question
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      checkAnswer(false);
    }
  }, 1000);
}

// Event Listeners
startQuizButton.addEventListener('click', startQuiz);
restartQuizButton.addEventListener('click', restartQuiz);

// Add event listener for the light/dark theme toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    themeToggle.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    themeToggle.classList.remove('dark-mode');
  }
});
