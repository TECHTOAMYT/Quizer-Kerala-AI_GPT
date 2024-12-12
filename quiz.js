const questions = [
    { question: "ഇന്ത്യയിലെ ആദ്യ പ്രധാനമന്ത്രി ആരാണ്?", options: ["ജവാഹർലാൽ നെഹ്റു", "മഹാത്മാ ഗാന്ധി", "ഇന്ദിരാ ഗാന്ധി", "സർദാർ പട്ടേൽ"], correct: 0 },
    { question: "കേരളത്തിലെ ഏറ്റവും നീളം കൂടിയ നദി ഏതാണ്?", options: ["പെരിയാർ", "ഭരതപ്പുഴ", "പമ്പ", "ചാലിയാർ"], correct: 0 },
    { question: "ഇന്ത്യയുടെ ദേശീയ പുഷ്പം ഏതാണ്?", options: ["താമര", "ജാസ്മിൻ", "ഗുൽമോഹർ", "റോസ്"], correct: 0 },
    { question: "കേരളത്തിലെ ഏറ്റവും ചെറിയ ജില്ല ഏതാണ്?", options: ["വയനാട്", "ആലപ്പുഴ", "ഇടുക്കി", "കോട്ടയം"], correct: 0 },
    { question: "ഇന്ത്യയുടെ ദേശീയ ഗാനം രചിച്ചത് ആരാണ്?", options: ["രബീന്ദ്രനാഥ് ടാഗോർ", "ബാങ്കിം ചന്ദ്ര ചാറ്റർജീ", "മഹാത്മാ ഗാന്ധി", "ഡോ. ബി.ആർ. അംബേദ്കർ"], correct: 0 },
    { question: "കേരളത്തിലെ ആദ്യ സാക്ഷരത ജില്ല ഏതാണ്?", options: ["എറണാകുളം", "കോഴിക്കോട്", "തിരുവനന്തപുരം", "പാലക്കാട്"], correct: 0 },
    { question: "ഇന്ത്യയിലെ ദേശീയ മൃഗം ഏതാണ്?", options: ["കടുവ", "ആന", "പുള്ളിപ്പുലി", "സിംഹം"], correct: 0 },
    { question: "ഇന്ത്യയിലെ ആദ്യമത്തെ സമ്പൂർണ്ണ സാക്ഷരതാ സംസ്ഥാനം ഏതാണ്?", options: ["കേരളം", "തമിഴ്നാട്", "കർണാടക", "മഹാരാഷ്ട്ര"], correct: 0 },
    { question: "കേരളത്തിലെ തേക്കടി ഡാം ഏത് നദിയിലാണ്?", options: ["പെരിയാർ", "പമ്പ", "മീനച്ചിൽ", "ഭരതപ്പുഴ"], correct: 0 },
    { question: "ഇന്ത്യയിലെ ഏറ്റവും ഉയരം കൂടിയ കൊടുമുടി ഏതാണ്?", options: ["കഞ്ചൻജംഗ", "എവറസ്റ്റ്", "നന്ദാദേവി", "അൻനപൂർണ"], correct: 0 },
    { question: "കേരളത്തിലെ ഏറ്റവും ഉയരം കൂടിയ പർവതം ഏതാണ്?", options: ["ആനമുടി", "അഗസ്ത്യമല", "ചീറാമല", "കുറിഞ്ചിമല"], correct: 0 },
    { question: "കേരളത്തിലെ പ്രധാന ചായോത്പാദന മേഖല ഏതാണ്?", options: ["മുന്നാർ", "വയനാട്", "ഇടുക്കി", "കൊച്ചി"], correct: 0 },
    { question: "കേരളത്തിലെ ചലച്ചിത്ര നഗരം എവിടെയാണ്?", options: ["കൊച്ചി", "പാലക്കാട്", "കോട്ടയം", "തൃശൂർ"], correct: 0 },
    { question: "കേരളത്തിലെ ഏറ്റവും നീളം കൂടിയ നദി ഏതാണ്?", options: ["പെരിയാർ", "ഭരതപ്പുഴ", "ചാലിയാർ", "പമ്പ"], correct: 0 }
];

let currentQuestion = 0;
let score = 0;
let timerInterval;
const maxQuestions = 25;

const welcomePage = document.querySelector('.welcome-page');
const quizPage = document.querySelector('.quiz-page');
const endPage = document.querySelector('.end-page');
const startQuizButton = document.getElementById('start-quiz');
const restartQuizButton = document.getElementById('restart-quiz');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const timerDisplay = document.getElementById('timer-display');
const questionNumber = document.getElementById('question-number');
const finalScore = document.getElementById('final-score');
const scoreDisplay = document.getElementById('score-display');

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    scoreDisplay.textContent = score;
    welcomePage.classList.remove('active');
    quizPage.classList.add('active');
    loadQuestion();
}

function endQuiz() {
    quizPage.classList.remove('active');
    endPage.classList.add('active');
    finalScore.textContent = `Your Score: ${score}/${maxQuestions}`;
}

function restartQuiz() {
    endPage.classList.remove('active');
    welcomePage.classList.add('active');
}

function loadQuestion() {
    if (currentQuestion >= maxQuestions) {
        endQuiz();
        return;
    }

    const q = questions[currentQuestion % questions.length];
    questionText.textContent = q.question;
    answersContainer.innerHTML = '';
    questionNumber.textContent = `Question ${currentQuestion + 1}/${maxQuestions}`;

    q.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(index === q.correct);
        answersContainer.appendChild(button);
    });

    startTimer();
}

function checkAnswer(correct) {
    if (correct) {
        score++;
        scoreDisplay.textContent = score;
    }
    currentQuestion++;
    loadQuestion();
}

function startTimer() {
    let timeLeft = 25;
    timerDisplay.textContent = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            checkAnswer(false);
        }
    }, 1000);
}

startQuizButton.onclick = startQuiz;
restartQuizButton.onclick = restartQuiz;
