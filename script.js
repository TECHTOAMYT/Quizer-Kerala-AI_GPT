// Select elements
const wrongAudio = document.getElementById('wrongAudio');
const rightAudio = document.getElementById('rightAudio');
const voiceSelect = document.getElementById('voiceSelect');
const speakButton = document.getElementById('speakButton');
const questionText = document.getElementById('question-text');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load voices for Text-to-Speech (TTS)
let voices = [];

function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';
    voices.forEach((voice) => {
        const option = document.createElement('option');
        option.textContent = voice.name + (voice.default ? ' (default)' : '');
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option);
    });
}

// Speak the question using TTS
function speakQuestion() {
    const utterance = new SpeechSynthesisUtterance(questionText.textContent);
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');
    utterance.voice = voices.find((voice) => voice.name === selectedVoice);
    window.speechSynthesis.speak(utterance);
}

// Play sound based on the correctness of the answer
function checkAnswer(correct) {
    if (correct) {
        rightAudio.play();
    } else {
        wrongAudio.play();
    }
}

// Toggle between light and dark modes with animation
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});

// Event listeners
speakButton.addEventListener('click', speakQuestion);

// Populate voices on load
window.speechSynthesis.onvoiceschanged = populateVoiceList;
populateVoiceList();
