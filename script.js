let timer;
let timeRemaining = 60; // Timer set to 60 seconds
let score = 0;
const questions = [
    "What is the capital city of India?",
    "Which river is known as the 'Ganga' in India?",
    "Who is known as the Father of the Nation in India?",
    "Which Indian city is known as the Silicon Valley of India?",
    "What is the national animal of India?",
    "What is the national flower of India?",
    "What is the national game of India?",
    "What is the largest state in India by area?",
    "What is the smallest state in India by area?",
    "Which Indian state is known as the 'Land of Five Rivers'?",
    "Which Indian state is known as the 'God's Own Country'?",
    "What is the highest mountain peak in India?",
    "What is the longest river in India?",
    "Who wrote the Indian national anthem, 'Jana Gana Mana'?",
    "What is the currency of India?",
    "What is the largest city in India by population?",
    "Who was the first woman Prime Minister of India?",
    "What is the Indian festival of colors called?",
    "Who is the current President of India?",
    "Who is known as the Missile Man of India?",
    "What is the official language of India?",
    "What is the Indian Ocean also known as?",
    "Which is the highest civilian award in India?",
    "Who was the first Indian in space?",
    "Which Indian city is famous for the Charminar monument?",
    "What is the name of the Indian Parliament?",
    "Who is known as the Nightingale of India?",
    "What is the famous dance form of Kerala?",
    "Who is known as the Iron Man of India?",
    "What is the Indian national bird?",
    "What is the Indian national tree?",
    "Who was the founder of the Maurya Empire?",
    "What is the name of India's highest civilian airport?",
    "What is the largest tiger reserve in India?",
    "Which Indian state is known for its tea plantations?",
    "What is the name of the Indian space research organization?",
    "What is the most spoken language in India?",
    "What is the largest religion in India?",
    "What is the name of India's national highway network?",
    "Who was the first Prime Minister of India?",
    "What is the name of the largest stadium in India?",
    "What is the name of the famous Indian monument built by Shah Jahan?",
    "Who was the founder of the Indian National Congress?",
    "Which Indian state is known for its backwaters?",
    "What is the Indian festival of lights called?",
    "Which is the longest river bridge in India?",
    "What is the name of the Indian space mission to the Moon?",
    "Which Indian state is known for its desert landscape?",
    "What is the name of the Indian satellite navigation system?",
    "What is the name of India's highest battlefield?",
    "Which Indian city is known as the Pink City?",
    "What is the name of the Indian festival celebrating the victory of good over evil?",
    "Who is known as the Grand Old Man of India?",
];
const answers = [
    "New Delhi",
    "The Ganges",
    "Mahatma Gandhi",
    "Bangalore",
    "Tiger",
    "Lotus",
    "Hockey",
    "Rajasthan",
    "Goa",
    "Punjab",
    "Kerala",
    "Kangchenjunga",
    "Ganges",
    "Rabindranath Tagore",
    "Indian Rupee",
    "Mumbai",
    "Indira Gandhi",
    "Holi",
    "Ram Nath Kovind",
    "APJ Abdul Kalam",
    "Hindi",
    "Ratnakara",
    "Bharat Ratna",
    "Rakesh Sharma",
    "Hyderabad",
    "Sansad Bhavan",
    "Sarojini Naidu",
    "Kathakali",
    "Sardar Vallabhbhai Patel",
    "Indian Peacock",
    "Banyan",
    "Chandragupta Maurya",
    "Leh Kushok Bakula Rimpochee Airport",
    "Bandhavgarh Tiger Reserve",
    "Assam",
    "ISRO (Indian Space Research Organization)",
    "Hindi",
    "Hinduism",
    "National Highway System",
    "Jawaharlal Nehru",
    "Salt Lake Stadium",
    "Taj Mahal",
    "AO Hume",
    "Kerala",
    "Diwali",
    "Bhupen Hazarika Setu",
    "Chandrayaan",
    "Rajasthan",
    "NAVIC (Navigation with Indian Constellation)",
    "Siachen Glacier",
    "Jaipur",
    "Dussehra",
    "Dadabhai Naoroji"
];

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

    if (score >= 25) {
        resultDiv.textContent += " Pass!";
    } else {
        resultDiv.textContent += " Fail!";
    }
}

document.getElementById("question").textContent = questions[0];
startTimer();
