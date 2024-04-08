const questions = ["Which is the capital city of Kerala?",
            "What is the official language of Kerala?",
            "Which is the dance form of Kerala?",
            "Who is known as the Father of the Nation in Kerala?",
            "What is the famous backwater destination in Kerala?"
    // Add your 50 questions here
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionDiv = document.getElementById("question");
    questionDiv.textContent = questions[currentQuestionIndex];
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = "Thiruvananthapuram",
            "Malayalam",
            "Kathakali",
            "Ayyankali",
            "Alappuzha"
             // Add the correct answer for each question here

    const resultDiv = document.getElementById("result");
    if (userAnswer === correctAnswer) {
        resultDiv.textContent = "Correct!";
        score++;
    } else {
        resultDiv.textContent = `Incorrect! The correct answer is: ${correctAnswer}`;
    }

    document.getElementById("scoreValue").textContent = score;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        alert(`Quiz completed! Your final score is: ${score}/50`);
    }
}

displayQuestion();
